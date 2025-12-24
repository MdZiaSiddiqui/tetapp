// WhatsApp OTP Edge Function
// Handles OTP send (via authkey.io) and verification

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// Web Crypto based hashing (bcrypt uses Workers which aren't available in Edge Functions)
async function hashOTP(otp: string, salt: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(otp + salt)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
}

async function generateSalt(): Promise<string> {
  const array = new Uint8Array(16)
  crypto.getRandomValues(array)
  return Array.from(array).map(b => b.toString(16).padStart(2, '0')).join('')
}

async function verifyOTPHash(otp: string, storedHash: string): Promise<boolean> {
  // storedHash format: salt:hash
  const [salt, hash] = storedHash.split(':')
  if (!salt || !hash) return false
  const computedHash = await hashOTP(otp, salt)
  return computedHash === hash
}

async function createOTPHash(otp: string): Promise<string> {
  const salt = await generateSalt()
  const hash = await hashOTP(otp, salt)
  return `${salt}:${hash}`
}

const AUTHKEY_IO_KEY = Deno.env.get('AUTHKEY_IO_KEY')!
const AUTHKEY_WHATSAPP_WID = Deno.env.get('AUTHKEY_WHATSAPP_WID') || '21219'

// Configuration
const OTP_LENGTH = 4
const OTP_EXPIRY_MINUTES = 5
const MAX_ATTEMPTS = 3
const RATE_LIMIT_WINDOW_MINUTES = 10
const RATE_LIMIT_MAX_REQUESTS = 3

interface OTPRequest {
  action: 'send' | 'verify'
  phone: string
  otp?: string
  country_code?: string
}

// Generate random OTP
function generateOTP(): string {
  const digits = '0123456789'
  let otp = ''
  for (let i = 0; i < OTP_LENGTH; i++) {
    otp += digits[Math.floor(Math.random() * digits.length)]
  }
  return otp
}

// Validate phone number (10 digits for India)
function validatePhone(phone: string): boolean {
  const cleaned = phone.replace(/\D/g, '')
  return cleaned.length === 10 && /^[6-9]\d{9}$/.test(cleaned)
}

// Extract 10-digit phone from full number
function extractPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')
  // If starts with 91, remove it
  if (cleaned.startsWith('91') && cleaned.length === 12) {
    return cleaned.slice(2)
  }
  return cleaned.slice(-10)
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
    // Parse request body
    const body: OTPRequest = await req.json()
    const { action, phone, otp, country_code = '91' } = body

    // Validate action
    if (!action || !['send', 'verify'].includes(action)) {
      return new Response(
        JSON.stringify({ error: 'Invalid action. Use "send" or "verify"' }),
        { status: 400, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } }
      )
    }

    // Validate phone
    if (!phone) {
      return new Response(
        JSON.stringify({ error: 'Phone number is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } }
      )
    }

    const cleanPhone = extractPhone(phone)
    if (!validatePhone(cleanPhone)) {
      return new Response(
        JSON.stringify({ error: 'Invalid phone number. Please enter a valid 10-digit Indian mobile number.' }),
        { status: 400, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } }
      )
    }

    // Create Supabase admin client (for DB operations)
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    if (action === 'send') {
      // ============ SEND OTP ============

      // Rate limiting: Check recent OTP requests
      const windowStart = new Date()
      windowStart.setMinutes(windowStart.getMinutes() - RATE_LIMIT_WINDOW_MINUTES)

      const { count: recentCount } = await supabaseAdmin
        .from('phone_otps')
        .select('*', { count: 'exact', head: true })
        .eq('phone', cleanPhone)
        .gte('created_at', windowStart.toISOString())

      if (recentCount && recentCount >= RATE_LIMIT_MAX_REQUESTS) {
        return new Response(
          JSON.stringify({
            error: 'Too many OTP requests. Please wait a few minutes before trying again.',
            retry_after_minutes: RATE_LIMIT_WINDOW_MINUTES
          }),
          { status: 429, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } }
        )
      }

      // Generate OTP and hash it
      const generatedOtp = generateOTP()
      const otpHash = await createOTPHash(generatedOtp)

      // Set expiry time
      const expiresAt = new Date()
      expiresAt.setMinutes(expiresAt.getMinutes() + OTP_EXPIRY_MINUTES)

      // Delete any existing OTPs for this phone
      await supabaseAdmin
        .from('phone_otps')
        .delete()
        .eq('phone', cleanPhone)

      // Store OTP hash in database
      const { error: insertError } = await supabaseAdmin
        .from('phone_otps')
        .insert({
          phone: cleanPhone,
          otp_hash: otpHash,
          expires_at: expiresAt.toISOString(),
          attempts: 0,
        })

      if (insertError) {
        console.error('Failed to store OTP:', insertError)
        return new Response(
          JSON.stringify({ error: 'Failed to generate OTP. Please try again.' }),
          { status: 500, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } }
        )
      }

      // Send OTP via authkey.io WhatsApp API (GET method)
      console.log('=== AUTHKEY DEBUG START ===')
      console.log('Sending OTP via authkey.io to:', cleanPhone)
      console.log('Country code:', country_code)
      console.log('Template WID:', AUTHKEY_WHATSAPP_WID)
      console.log('OTP (sent as param 1):', generatedOtp)

      let authkeyResponse: Response
      let authkeyResult: string
      let authkeyParsed: any = null

      // Use GET method
      const authkeyUrl = new URL('https://console.authkey.io/restapi/request.php')
      authkeyUrl.searchParams.append('authkey', AUTHKEY_IO_KEY)
      authkeyUrl.searchParams.append('mobile', cleanPhone)
      authkeyUrl.searchParams.append('country_code', country_code)
      authkeyUrl.searchParams.append('wid', AUTHKEY_WHATSAPP_WID)
      authkeyUrl.searchParams.append('1', generatedOtp)

      console.log('GET request URL (without authkey):', authkeyUrl.toString().replace(AUTHKEY_IO_KEY, '***'))
      authkeyResponse = await fetch(authkeyUrl.toString())
      authkeyResult = await authkeyResponse.text()
      console.log('GET response status:', authkeyResponse.status)
      console.log('GET response:', authkeyResult)

      // Parse response
      let authkeySuccess = false
      try {
        authkeyParsed = JSON.parse(authkeyResult)
        // Check various success formats
        authkeySuccess =
          authkeyParsed.Status === 'Success' ||
          authkeyParsed.status === 'success' ||
          authkeyParsed.success?.whatsapp === true ||
          authkeyResponse.ok

        console.log('Parsed response:', JSON.stringify(authkeyParsed, null, 2))
        console.log('Success determined:', authkeySuccess)
      } catch {
        console.log('Response is not JSON, checking HTTP status')
        authkeySuccess = authkeyResponse.ok
      }

      console.log('Response headers:', JSON.stringify(Object.fromEntries(authkeyResponse.headers.entries())))
      console.log('=== AUTHKEY DEBUG END ===')

      if (!authkeySuccess) {
        console.error('authkey.io failed:', authkeyResult)
      }

      return new Response(
        JSON.stringify({
          success: true,
          message: 'OTP sent to your WhatsApp',
          expires_in_seconds: OTP_EXPIRY_MINUTES * 60,
          // Debug info (remove in production)
          _debug: {
            authkey_response: authkeyParsed || authkeyResult,
            authkey_status: authkeyResponse.status,
            authkey_success: authkeySuccess,
            phone_sent_to: cleanPhone,
            template_wid: AUTHKEY_WHATSAPP_WID,
          }
        }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        }
      )
    } else if (action === 'verify') {
      // ============ VERIFY OTP ============

      if (!otp) {
        return new Response(
          JSON.stringify({ error: 'OTP is required' }),
          { status: 400, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } }
        )
      }

      // Get OTP record
      const { data: otpRecord, error: fetchError } = await supabaseAdmin
        .from('phone_otps')
        .select('*')
        .eq('phone', cleanPhone)
        .single()

      if (fetchError || !otpRecord) {
        return new Response(
          JSON.stringify({ error: 'No OTP found for this phone number. Please request a new OTP.' }),
          { status: 400, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } }
        )
      }

      // Check if OTP is expired
      if (new Date(otpRecord.expires_at) < new Date()) {
        // Delete expired OTP
        await supabaseAdmin
          .from('phone_otps')
          .delete()
          .eq('id', otpRecord.id)

        return new Response(
          JSON.stringify({ error: 'OTP has expired. Please request a new OTP.' }),
          { status: 400, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } }
        )
      }

      // Check attempts
      if (otpRecord.attempts >= MAX_ATTEMPTS) {
        // Delete OTP after max attempts
        await supabaseAdmin
          .from('phone_otps')
          .delete()
          .eq('id', otpRecord.id)

        return new Response(
          JSON.stringify({ error: 'Too many failed attempts. Please request a new OTP.' }),
          { status: 400, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } }
        )
      }

      // Verify OTP
      const isValid = await verifyOTPHash(otp, otpRecord.otp_hash)

      if (!isValid) {
        // Increment attempts
        await supabaseAdmin
          .from('phone_otps')
          .update({ attempts: otpRecord.attempts + 1 })
          .eq('id', otpRecord.id)

        const remainingAttempts = MAX_ATTEMPTS - otpRecord.attempts - 1
        return new Response(
          JSON.stringify({
            error: 'Invalid OTP. Please try again.',
            remaining_attempts: remainingAttempts
          }),
          { status: 400, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } }
        )
      }

      // OTP is valid - Delete OTP record
      await supabaseAdmin
        .from('phone_otps')
        .delete()
        .eq('id', otpRecord.id)

      // Check if user exists with this phone in user_profiles
      const { data: existingProfile } = await supabaseAdmin
        .from('user_profiles')
        .select('id, phone')
        .eq('phone', cleanPhone)
        .single()

      let userId: string
      let isNewUser = false
      const userEmail = `${cleanPhone}@phone.tgtet.app`

      if (existingProfile) {
        // User exists in profiles - use their ID
        userId = existingProfile.id
        console.log('Existing user found in profiles:', userId)
      } else {
        // No profile found - check if auth user exists (might have been created but profile insert failed)
        console.log('No profile found, checking auth for email:', userEmail)

        // Try to create new user
        const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
          email: userEmail,
          password: crypto.randomUUID(),
          email_confirm: true,
          phone: `+91${cleanPhone}`,
          phone_confirm: true,
          user_metadata: {
            phone: cleanPhone,
            auth_method: 'whatsapp_otp',
          },
        })

        if (authError) {
          console.log('Create user error:', authError.message)

          // If user already exists in auth, find them by listing users
          if (authError.message?.toLowerCase().includes('already') ||
              authError.message?.toLowerCase().includes('exists') ||
              authError.message?.toLowerCase().includes('duplicate') ||
              authError.message?.toLowerCase().includes('unique')) {

            console.log('User already exists in auth, searching...')

            // List users and find by email or phone
            const { data: listData, error: listError } = await supabaseAdmin.auth.admin.listUsers()

            if (listError) {
              console.error('Failed to list users:', listError)
              return new Response(
                JSON.stringify({ error: 'Failed to verify account. Please try again.' }),
                { status: 500, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } }
              )
            }

            const existingAuthUser = listData.users.find(
              u => u.email === userEmail || u.phone === `+91${cleanPhone}`
            )

            if (existingAuthUser) {
              userId = existingAuthUser.id
              isNewUser = false
              console.log('Found existing auth user:', userId)

              // Create/update their profile
              const { error: profileError } = await supabaseAdmin
                .from('user_profiles')
                .upsert({
                  id: userId,
                  phone: cleanPhone,
                  updated_at: new Date().toISOString(),
                })

              if (profileError) {
                console.error('Failed to upsert profile:', profileError)
              }
            } else {
              console.error('User exists error but could not find user')
              return new Response(
                JSON.stringify({ error: 'Account verification failed. Please contact support.' }),
                { status: 500, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } }
              )
            }
          } else {
            // Some other error
            console.error('Failed to create user:', authError)
            return new Response(
              JSON.stringify({ error: 'Failed to create account. Please try again.' }),
              { status: 500, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } }
            )
          }
        } else {
          // New user created successfully
          userId = authData.user.id
          isNewUser = true
          console.log('New user created:', userId)

          // Create user profile
          const { error: profileError } = await supabaseAdmin
            .from('user_profiles')
            .upsert({
              id: userId,
              phone: cleanPhone,
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
            })

          if (profileError) {
            console.error('Failed to create profile:', profileError)
            // Continue anyway - user is created in auth
          }
        }
      }

      // OTP verified successfully - Generate magic link token for session establishment
      console.log('Generating magic link for user:', userEmail)

      const { data: linkData, error: linkError } = await supabaseAdmin.auth.admin.generateLink({
        type: 'magiclink',
        email: userEmail,
      })

      if (linkError) {
        console.error('Failed to generate session link:', linkError)
        return new Response(
          JSON.stringify({
            error: 'Failed to create session. Please try again.',
            details: linkError.message
          }),
          { status: 500, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } }
        )
      }

      // Extract hashed_token from the response (this is what verifyOtp expects)
      let tokenHash = linkData.properties?.hashed_token

      // Fallback: try to extract from action_link URL if hashed_token not present
      if (!tokenHash) {
        const actionLink = linkData.properties?.action_link
        console.log('No hashed_token in response, trying action_link:', actionLink)

        if (actionLink) {
          const url = new URL(actionLink)
          tokenHash = url.searchParams.get('token_hash') || url.searchParams.get('token')
          console.log('Extracted token from URL:', tokenHash ? tokenHash.substring(0, 20) + '...' : 'null')
        }
      }

      if (!tokenHash) {
        console.error('Could not extract token. linkData.properties:', JSON.stringify(linkData.properties, null, 2))
        return new Response(
          JSON.stringify({ error: 'Failed to generate authentication token' }),
          { status: 500, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } }
        )
      }

      console.log('Magic link generated successfully for:', userEmail)

      return new Response(
        JSON.stringify({
          success: true,
          message: isNewUser ? 'Account created successfully' : 'Login successful',
          user_id: userId,
          phone: cleanPhone,
          is_new_user: isNewUser,
          token_hash: tokenHash,
          email: userEmail,
        }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        }
      )
    }

    return new Response(
      JSON.stringify({ error: 'Invalid action' }),
      { status: 400, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } }
    )
  } catch (error: unknown) {
    console.error('Error in whatsapp-otp:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return new Response(
      JSON.stringify({ error: 'Internal server error', details: errorMessage }),
      { status: 500, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } }
    )
  }
})

/* To invoke locally:

  1. Run `supabase start`
  2. Set secrets:
     supabase secrets set AUTHKEY_IO_KEY=your_key
     supabase secrets set AUTHKEY_WHATSAPP_WID=21211
  3. Make requests:

  # Send OTP
  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/whatsapp-otp' \
    --header 'Content-Type: application/json' \
    --data '{"action":"send","phone":"9876543210"}'

  # Verify OTP
  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/whatsapp-otp' \
    --header 'Content-Type: application/json' \
    --data '{"action":"verify","phone":"9876543210","otp":"1234"}'

*/
