/**
 * WhatsApp OTP API Client
 * Calls the Supabase edge function for sending and verifying OTPs
 */

import { supabase } from '../supabase';

// Response types
interface SendOTPResponse {
  success: boolean;
  message?: string;
  expires_in_seconds?: number;
  error?: string;
  retry_after_minutes?: number;
}

interface VerifyOTPResponse {
  success: boolean;
  message?: string;
  user_id?: string;
  phone?: string;
  is_new_user?: boolean;
  magic_link?: string | null;
  action_link?: string | null;
  error?: string;
  remaining_attempts?: number;
}

/**
 * Send OTP to phone number via WhatsApp
 *
 * @param phone Phone number (10 digits or with +91 prefix)
 * @param countryCode Country code (default: 91 for India)
 * @returns Response with success status
 */
export async function sendOTP(
  phone: string,
  countryCode: string = '91'
): Promise<SendOTPResponse> {
  try {
    console.log('=== SEND OTP DEBUG START ===');
    console.log('Calling edge function with phone:', phone, 'country_code:', countryCode);

    const { data, error } = await supabase.functions.invoke('whatsapp-otp', {
      body: {
        action: 'send',
        phone,
        country_code: countryCode,
      },
    });

    console.log('Edge function response:', JSON.stringify(data, null, 2));
    console.log('Edge function error:', error);

    // Log debug info if present
    if (data?._debug) {
      console.log('=== AUTHKEY DEBUG INFO ===');
      console.log('Authkey response:', JSON.stringify(data._debug.authkey_response, null, 2));
      console.log('Authkey status:', data._debug.authkey_status);
      console.log('Authkey success:', data._debug.authkey_success);
      console.log('Phone sent to:', data._debug.phone_sent_to);
      console.log('Template WID:', data._debug.template_wid);
      console.log('=== END DEBUG INFO ===');
    }

    console.log('=== SEND OTP DEBUG END ===');

    if (error) {
      console.error('Send OTP error:', error);
      return {
        success: false,
        error: error.message || 'Failed to send OTP. Please try again.',
      };
    }

    return data as SendOTPResponse;
  } catch (err: any) {
    console.error('Send OTP exception:', err);
    return {
      success: false,
      error: err.message || 'Network error. Please check your connection.',
    };
  }
}

/**
 * Verify OTP and authenticate user
 *
 * @param phone Phone number (10 digits or with +91 prefix)
 * @param otp The OTP code entered by user
 * @returns Response with success status and user info
 */
export async function verifyOTP(
  phone: string,
  otp: string
): Promise<VerifyOTPResponse> {
  try {
    const { data, error } = await supabase.functions.invoke('whatsapp-otp', {
      body: {
        action: 'verify',
        phone,
        otp,
      },
    });

    if (error) {
      console.error('Verify OTP error:', error);
      return {
        success: false,
        error: error.message || 'Failed to verify OTP. Please try again.',
      };
    }

    const response = data as VerifyOTPResponse;

    // If verification successful and we have an action link, use it to sign in
    if (response.success && response.action_link) {
      try {
        // Extract the token from the action link
        const url = new URL(response.action_link);
        const token = url.searchParams.get('token');
        const type = url.searchParams.get('type');

        if (token && type === 'magiclink') {
          // Verify the OTP token to create session
          const { error: verifyError } = await supabase.auth.verifyOtp({
            token_hash: token,
            type: 'magiclink',
          });

          if (verifyError) {
            console.warn('Magic link verification failed:', verifyError);
            // Continue anyway - user is created, they can try again
          }
        }
      } catch (linkError) {
        console.warn('Failed to process action link:', linkError);
      }
    }

    return response;
  } catch (err: any) {
    console.error('Verify OTP exception:', err);
    return {
      success: false,
      error: err.message || 'Network error. Please check your connection.',
    };
  }
}

/**
 * Extract 10-digit phone number from various formats
 * @param phone Phone number in any format
 * @returns 10-digit phone number
 */
export function extractPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');

  // If starts with 91 and is 12 digits, remove country code
  if (cleaned.startsWith('91') && cleaned.length === 12) {
    return cleaned.slice(2);
  }

  // Return last 10 digits
  return cleaned.slice(-10);
}

/**
 * Validate Indian phone number
 * @param phone Phone number to validate
 * @returns True if valid Indian mobile number
 */
export function isValidIndianPhone(phone: string): boolean {
  const cleaned = extractPhoneNumber(phone);
  return cleaned.length === 10 && /^[6-9]\d{9}$/.test(cleaned);
}

/**
 * Format phone for display (e.g., "98765 43210")
 * @param phone 10-digit phone number
 * @returns Formatted phone string
 */
export function formatPhoneDisplay(phone: string): string {
  const cleaned = extractPhoneNumber(phone);
  if (cleaned.length === 10) {
    return `${cleaned.slice(0, 5)} ${cleaned.slice(5)}`;
  }
  return phone;
}
