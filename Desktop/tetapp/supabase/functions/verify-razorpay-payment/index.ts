// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { createHmac } from 'https://deno.land/std@0.168.0/node/crypto.ts'

const RAZORPAY_KEY_ID = Deno.env.get('RAZORPAY_KEY_ID')!
const RAZORPAY_KEY_SECRET = Deno.env.get('RAZORPAY_KEY_SECRET')!

interface VerifyPaymentRequest {
  razorpay_order_id: string
  razorpay_payment_id: string
  razorpay_signature: string
}

/**
 * Verify Razorpay payment signature
 */
function verifySignature(
  orderId: string,
  paymentId: string,
  signature: string
): boolean {
  const text = `${orderId}|${paymentId}`
  const hmac = createHmac('sha256', RAZORPAY_KEY_SECRET)
  hmac.update(text)
  const generated_signature = hmac.digest('hex')
  return generated_signature === signature
}

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
      },
    })
  }

  try {
    // Verify authentication
    const authHeader = req.headers.get('Authorization')
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: 'Missing authorization header' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Create Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: { headers: { Authorization: authHeader } },
      }
    )

    // Get authenticated user
    const {
      data: { user },
      error: userError,
    } = await supabaseClient.auth.getUser()

    if (userError || !user) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Parse request body
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    }: VerifyPaymentRequest = await req.json()

    // Validate input
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Step 1: Verify signature
    const isSignatureValid = verifySignature(
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature
    )

    if (!isSignatureValid) {
      console.error('Invalid payment signature')
      return new Response(
        JSON.stringify({ error: 'Invalid payment signature' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Step 2: Fetch payment details from Razorpay
    const paymentResponse = await fetch(
      `https://api.razorpay.com/v1/payments/${razorpay_payment_id}`,
      {
        headers: {
          'Authorization': `Basic ${btoa(`${RAZORPAY_KEY_ID}:${RAZORPAY_KEY_SECRET}`)}`,
        },
      }
    )

    if (!paymentResponse.ok) {
      console.error('Failed to fetch payment from Razorpay')
      return new Response(
        JSON.stringify({ error: 'Failed to verify payment' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const paymentData = await paymentResponse.json()

    // Step 3: Check payment status
    if (paymentData.status !== 'captured') {
      return new Response(
        JSON.stringify({ error: 'Payment is not captured yet' }),
        { status: 409, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Step 4: Get payment record from database
    const { data: paymentRecord, error: paymentError } = await supabaseClient
      .from('payments')
      .select('*')
      .eq('order_id', razorpay_order_id)
      .single()

    if (paymentError || !paymentRecord) {
      console.error('Payment record not found:', paymentError)
      return new Response(
        JSON.stringify({ error: 'Payment record not found' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Step 5: Validate amount
    if (paymentData.amount !== paymentRecord.amount) {
      console.error('Payment amount mismatch')
      return new Response(
        JSON.stringify({ error: 'Payment amount is invalid' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Step 6: Update payment record
    const { error: updateError } = await supabaseClient
      .from('payments')
      .update({
        payment_id: razorpay_payment_id,
        razorpay_signature,
        status: 'captured',
        payment_method: paymentData.method,
        paid_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .eq('order_id', razorpay_order_id)

    if (updateError) {
      console.error('Failed to update payment record:', updateError)
    }

    // Step 7: Grant pro access to user
    const { error: grantError } = await supabaseClient.rpc('grant_pro_access', {
      user_uuid: user.id,
      tier_type: paymentRecord.tier,
      package_duration: paymentRecord.package_type,
      payment_id_param: razorpay_payment_id,
      order_id_param: razorpay_order_id,
    })

    if (grantError) {
      console.error('Failed to grant pro access:', grantError)
      return new Response(
        JSON.stringify({
          error: 'Payment successful but failed to activate pro access. Contact support.',
          payment_id: razorpay_payment_id,
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Step 8: Fetch updated user profile
    const { data: userProfile, error: profileError } = await supabaseClient
      .from('user_profiles')
      .select('*')
      .eq('id', user.id)
      .single()

    if (profileError) {
      console.error('Failed to fetch user profile:', profileError)
    }

    // Step 9: Return success response
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Payment verified and pro access granted successfully',
        user: userProfile,
        payment: {
          id: razorpay_payment_id,
          order_id: razorpay_order_id,
          tier: paymentRecord.tier,
          package_type: paymentRecord.package_type,
          amount: paymentRecord.amount,
          status: 'captured',
        },
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    )
  } catch (error) {
    console.error('Error in verify-razorpay-payment:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error', details: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
})

/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/verify-razorpay-payment' \
    --header 'Authorization: Bearer YOUR_ANON_KEY' \
    --header 'Content-Type: application/json' \
    --data '{"razorpay_order_id":"order_xxx","razorpay_payment_id":"pay_xxx","razorpay_signature":"signature_xxx"}'

*/
