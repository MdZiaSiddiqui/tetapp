// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const RAZORPAY_KEY_ID = Deno.env.get('RAZORPAY_KEY_ID')!
const RAZORPAY_KEY_SECRET = Deno.env.get('RAZORPAY_KEY_SECRET')!

// Pricing configuration (matches lib/pricing-config.ts)
const PRICING: Record<string, number> = {
  paper1_3_months: 49900, // ₹499
  paper1_1_year: 79900,   // ₹799
  paper2_3_months: 69900, // ₹699
  paper2_1_year: 99900,   // ₹999
  both_3_months: 99900,   // ₹999
  both_1_year: 149900,    // ₹1499
}

const TIER_NAMES: Record<string, string> = {
  paper1: 'TS-TET Paper-1',
  paper2: 'TS-TET Paper-2',
  both: 'TS-TET Paper-1 + Paper-2',
}

interface CreateOrderRequest {
  tier: 'paper1' | 'paper2' | 'both'
  package: '3_months' | '1_year'
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
    const { tier, package: packageType }: CreateOrderRequest = await req.json()

    // Validate input
    if (!tier || !packageType) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: tier and package' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    if (!['paper1', 'paper2', 'both'].includes(tier)) {
      return new Response(
        JSON.stringify({ error: 'Invalid tier. Must be paper1, paper2, or both' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    if (!['3_months', '1_year'].includes(packageType)) {
      return new Response(
        JSON.stringify({ error: 'Invalid package. Must be 3_months or 1_year' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Get pricing
    const priceKey = `${tier}_${packageType}`
    const amount = PRICING[priceKey]

    if (!amount) {
      return new Response(
        JSON.stringify({ error: 'Invalid pricing configuration' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Create Razorpay order
    const orderData = {
      amount,
      currency: 'INR',
      receipt: `tet_${user.id.substring(0, 8)}_${Date.now()}`,
      notes: {
        user_id: user.id,
        user_email: user.email || '',
        tier,
        package: packageType,
        plan_name: TIER_NAMES[tier],
        app: 'TET Pro',
      },
    }

    const razorpayResponse = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${btoa(`${RAZORPAY_KEY_ID}:${RAZORPAY_KEY_SECRET}`)}`,
      },
      body: JSON.stringify(orderData),
    })

    if (!razorpayResponse.ok) {
      const errorText = await razorpayResponse.text()
      console.error('Razorpay order creation failed:', errorText)
      return new Response(
        JSON.stringify({ error: 'Failed to create payment order' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const razorpayOrder = await razorpayResponse.json()

    // Store pending payment in database
    // Use service role client to bypass RLS
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { error: insertError } = await supabaseAdmin
      .from('payments')
      .insert({
        user_id: user.id,
        order_id: razorpayOrder.id,
        tier,
        package_type: packageType,
        amount,
        currency: 'INR',
        status: 'created',
        notes: orderData.notes,
      })

    if (insertError) {
      console.error('Failed to store payment record:', insertError)
      // Don't fail the request if DB insert fails - order is already created
    }

    // Return order details to client
    return new Response(
      JSON.stringify({
        success: true,
        order: razorpayOrder,
        amount,
        currency: 'INR',
        tier,
        package: packageType,
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
    console.error('Error in create-razorpay-order:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error', details: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
})

/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/create-razorpay-order' \
    --header 'Authorization: Bearer YOUR_ANON_KEY' \
    --header 'Content-Type: application/json' \
    --data '{"tier":"paper1","package":"3_months"}'

*/
