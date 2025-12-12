/**
 * Razorpay Webhook Handler
 *
 * This Edge Function receives webhook events from Razorpay for server-to-server
 * payment verification. This acts as a backup when client-side verification fails
 * (e.g., app crash, network issues after payment).
 *
 * Handles:
 * - payment.captured: Grant pro access
 * - payment.failed: Update payment status
 */

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { createHmac } from 'https://deno.land/std@0.168.0/node/crypto.ts'

const RAZORPAY_WEBHOOK_SECRET = Deno.env.get('RAZORPAY_WEBHOOK_SECRET')!

interface RazorpayWebhookPayload {
  entity: string
  account_id: string
  event: string
  contains: string[]
  payload: {
    payment?: {
      entity: {
        id: string
        entity: string
        amount: number
        currency: string
        status: string
        order_id: string
        method: string
        description: string
        email: string
        contact: string
        notes: {
          user_id?: string
          tier?: string
          package?: string
          [key: string]: string | undefined
        }
        created_at: number
        captured?: boolean
        error_code?: string
        error_description?: string
        error_reason?: string
      }
    }
  }
  created_at: number
}

/**
 * Verify Razorpay webhook signature
 */
function verifyWebhookSignature(
  body: string,
  signature: string,
  secret: string
): boolean {
  const hmac = createHmac('sha256', secret)
  hmac.update(body)
  const expectedSignature = hmac.digest('hex')
  return expectedSignature === signature
}

serve(async (req) => {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { status: 405, headers: { 'Content-Type': 'application/json' } }
    )
  }

  try {
    // Get raw body for signature verification
    const rawBody = await req.text()

    // Get signature from header
    const signature = req.headers.get('X-Razorpay-Signature')

    if (!signature) {
      console.error('Missing X-Razorpay-Signature header')
      return new Response(
        JSON.stringify({ error: 'Missing signature' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Verify webhook signature
    if (!RAZORPAY_WEBHOOK_SECRET) {
      console.error('RAZORPAY_WEBHOOK_SECRET not configured')
      return new Response(
        JSON.stringify({ error: 'Webhook secret not configured' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const isValidSignature = verifyWebhookSignature(rawBody, signature, RAZORPAY_WEBHOOK_SECRET)

    if (!isValidSignature) {
      console.error('Invalid webhook signature')
      return new Response(
        JSON.stringify({ error: 'Invalid signature' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Parse webhook payload
    const payload: RazorpayWebhookPayload = JSON.parse(rawBody)

    console.log(`Received webhook event: ${payload.event}`)

    // Create Supabase admin client (webhooks don't have user auth)
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Handle different event types
    switch (payload.event) {
      case 'payment.captured': {
        const payment = payload.payload.payment?.entity
        if (!payment) {
          console.error('No payment entity in webhook payload')
          return new Response(
            JSON.stringify({ error: 'Invalid payload' }),
            { status: 400, headers: { 'Content-Type': 'application/json' } }
          )
        }

        console.log(`Processing payment.captured for order: ${payment.order_id}`)

        // Check if payment already processed (idempotency)
        const { data: existingPayment, error: fetchError } = await supabaseAdmin
          .from('payments')
          .select('*')
          .eq('order_id', payment.order_id)
          .single()

        if (fetchError) {
          console.error('Error fetching payment record:', fetchError)
          // Payment record not found - might be a direct payment without order
          return new Response(
            JSON.stringify({ error: 'Payment record not found' }),
            { status: 404, headers: { 'Content-Type': 'application/json' } }
          )
        }

        // Skip if already captured via client-side verification
        if (existingPayment.status === 'captured') {
          console.log('Payment already captured, skipping webhook processing')
          return new Response(
            JSON.stringify({ success: true, message: 'Payment already processed' }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
          )
        }

        // Update payment record
        const { error: updateError } = await supabaseAdmin
          .from('payments')
          .update({
            payment_id: payment.id,
            status: 'captured',
            payment_method: payment.method,
            paid_at: new Date(payment.created_at * 1000).toISOString(),
            webhook_verified_at: new Date().toISOString(),
            webhook_event_id: `${payload.event}_${payload.created_at}`,
            updated_at: new Date().toISOString(),
          })
          .eq('order_id', payment.order_id)

        if (updateError) {
          console.error('Error updating payment record:', updateError)
        }

        // Grant pro access to user
        const userId = existingPayment.user_id
        const tier = existingPayment.tier
        const packageType = existingPayment.package_type

        console.log(`Granting pro access: user=${userId}, tier=${tier}, package=${packageType}`)

        const { error: grantError } = await supabaseAdmin.rpc('grant_pro_access', {
          user_uuid: userId,
          tier_type: tier,
          package_duration: packageType,
          payment_id_param: payment.id,
          order_id_param: payment.order_id,
        })

        if (grantError) {
          console.error('Error granting pro access:', grantError)
          return new Response(
            JSON.stringify({
              error: 'Failed to grant pro access',
              payment_id: payment.id,
              order_id: payment.order_id
            }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
          )
        }

        console.log(`Pro access granted successfully via webhook for user: ${userId}`)

        return new Response(
          JSON.stringify({
            success: true,
            message: 'Payment captured and pro access granted',
            payment_id: payment.id
          }),
          { status: 200, headers: { 'Content-Type': 'application/json' } }
        )
      }

      case 'payment.failed': {
        const payment = payload.payload.payment?.entity
        if (!payment) {
          console.error('No payment entity in webhook payload')
          return new Response(
            JSON.stringify({ error: 'Invalid payload' }),
            { status: 400, headers: { 'Content-Type': 'application/json' } }
          )
        }

        console.log(`Processing payment.failed for order: ${payment.order_id}`)

        // Update payment status to failed
        const { error: updateError } = await supabaseAdmin
          .from('payments')
          .update({
            payment_id: payment.id,
            status: 'failed',
            notes: {
              error_code: payment.error_code,
              error_description: payment.error_description,
              error_reason: payment.error_reason,
            },
            webhook_verified_at: new Date().toISOString(),
            webhook_event_id: `${payload.event}_${payload.created_at}`,
            updated_at: new Date().toISOString(),
          })
          .eq('order_id', payment.order_id)

        if (updateError) {
          console.error('Error updating payment status:', updateError)
        }

        return new Response(
          JSON.stringify({
            success: true,
            message: 'Payment failure recorded',
            payment_id: payment.id
          }),
          { status: 200, headers: { 'Content-Type': 'application/json' } }
        )
      }

      default:
        console.log(`Unhandled webhook event: ${payload.event}`)
        return new Response(
          JSON.stringify({ success: true, message: `Event ${payload.event} acknowledged but not processed` }),
          { status: 200, headers: { 'Content-Type': 'application/json' } }
        )
    }
  } catch (error) {
    console.error('Error processing webhook:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error', details: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
})

/*
Configuration Steps:

1. Deploy this function:
   supabase functions deploy razorpay-webhook

2. Set the webhook secret:
   supabase secrets set RAZORPAY_WEBHOOK_SECRET=your_webhook_secret_here

3. Configure in Razorpay Dashboard:
   - Go to Settings > Webhooks
   - Add new webhook with URL: https://<project-ref>.supabase.co/functions/v1/razorpay-webhook
   - Select events: payment.captured, payment.failed
   - Copy the webhook secret and use it in step 2

4. Test the webhook:
   - Use Razorpay's "Send Test Webhook" feature
   - Or make a test payment in test mode
*/
