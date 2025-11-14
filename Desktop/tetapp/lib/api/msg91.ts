/**
 * MSG91 OTP API Integration
 * Handles sending and verifying OTPs via MSG91 service
 */

import Constants from 'expo-constants';

// Environment variables
const MSG91_AUTH_KEY = Constants.expoConfig?.extra?.MSG91_AUTH_KEY ||
                       process.env.EXPO_PUBLIC_MSG91_AUTH_KEY;
const MSG91_TEMPLATE_ID = Constants.expoConfig?.extra?.MSG91_TEMPLATE_ID ||
                         process.env.EXPO_PUBLIC_MSG91_TEMPLATE_ID;

// API endpoints
const MSG91_BASE_URL = 'https://control.msg91.com/api/v5';
const SEND_OTP_ENDPOINT = `${MSG91_BASE_URL}/otp`;
const RETRY_OTP_ENDPOINT = `${MSG91_BASE_URL}/otp/retry`;
const VERIFY_OTP_ENDPOINT = `${MSG91_BASE_URL}/otp/verify`;

/**
 * Response types for MSG91 API
 */
export interface MSG91SendOTPResponse {
  type: 'success' | 'error';
  message?: string;
  request_id?: string;
}

export interface MSG91VerifyOTPResponse {
  type: 'success' | 'error';
  message?: string;
}

export interface MSG91Result<T> {
  data: T | null;
  error: string | null;
}

/**
 * Validates phone number format
 * @param phoneNumber - Phone number to validate (should include country code)
 * @returns true if valid, false otherwise
 */
function validatePhoneNumber(phoneNumber: string): boolean {
  // Remove all non-digit characters
  const digitsOnly = phoneNumber.replace(/\D/g, '');

  // Check if it's a valid length (10-15 digits with country code)
  if (digitsOnly.length < 10 || digitsOnly.length > 15) {
    return false;
  }

  return true;
}

/**
 * Formats phone number for MSG91 API
 * Removes all non-digit characters
 * @param phoneNumber - Raw phone number input
 * @returns Formatted phone number (digits only)
 */
function formatPhoneNumber(phoneNumber: string): string {
  return phoneNumber.replace(/\D/g, '');
}

/**
 * Send OTP to a phone number via MSG91
 * @param phoneNumber - Phone number with country code (e.g., +919876543210 or 919876543210)
 * @param templateParams - Optional template variables (Param1, Param2, Param3, etc.)
 * @returns Result with request_id on success, error message on failure
 */
export async function sendOTP(
  phoneNumber: string,
  templateParams?: Record<string, string>
): Promise<MSG91Result<MSG91SendOTPResponse>> {
  try {
    // Validate inputs
    if (!MSG91_AUTH_KEY || !MSG91_TEMPLATE_ID) {
      return {
        data: null,
        error: 'MSG91 credentials not configured. Please add MSG91_AUTH_KEY and MSG91_TEMPLATE_ID to .env',
      };
    }

    // Validate and format phone number
    if (!validatePhoneNumber(phoneNumber)) {
      return {
        data: null,
        error: 'Invalid phone number format. Please enter a valid phone number.',
      };
    }

    const formattedPhone = formatPhoneNumber(phoneNumber);

    // Prepare request URL with query parameters
    const url = new URL(SEND_OTP_ENDPOINT);
    url.searchParams.append('template_id', MSG91_TEMPLATE_ID);
    url.searchParams.append('mobile', formattedPhone);
    url.searchParams.append('authkey', MSG91_AUTH_KEY);
    url.searchParams.append('realTimeResponse', '1'); // Get immediate response

    // Prepare request body (for template variables)
    const requestBody = templateParams || {};

    // Make API request
    const response = await fetch(url.toString(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: Object.keys(requestBody).length > 0 ? JSON.stringify(requestBody) : undefined,
    });

    const responseData = await response.json();

    // Check if request was successful
    if (!response.ok) {
      return {
        data: null,
        error: responseData.message || `Failed to send OTP: ${response.statusText}`,
      };
    }

    // Parse response
    if (responseData.type === 'error') {
      return {
        data: null,
        error: responseData.message || 'Failed to send OTP',
      };
    }

    return {
      data: {
        type: 'success',
        message: responseData.message || 'OTP sent successfully',
        request_id: responseData.request_id,
      },
      error: null,
    };
  } catch (error) {
    console.error('MSG91 Send OTP Error:', error);
    return {
      data: null,
      error: error instanceof Error ? error.message : 'Network error. Please try again.',
    };
  }
}

/**
 * Verify OTP entered by user
 * @param phoneNumber - Phone number with country code
 * @param otp - 6-digit OTP code entered by user
 * @returns Result indicating success or failure
 */
export async function verifyOTP(
  phoneNumber: string,
  otp: string
): Promise<MSG91Result<MSG91VerifyOTPResponse>> {
  try {
    // Validate inputs
    if (!MSG91_AUTH_KEY) {
      return {
        data: null,
        error: 'MSG91 credentials not configured',
      };
    }

    if (!validatePhoneNumber(phoneNumber)) {
      return {
        data: null,
        error: 'Invalid phone number format',
      };
    }

    if (!otp || otp.length !== 6 || !/^\d{6}$/.test(otp)) {
      return {
        data: null,
        error: 'OTP must be a 6-digit number',
      };
    }

    const formattedPhone = formatPhoneNumber(phoneNumber);

    // Prepare request URL
    const url = new URL(VERIFY_OTP_ENDPOINT);
    url.searchParams.append('mobile', formattedPhone);
    url.searchParams.append('otp', otp);
    url.searchParams.append('authkey', MSG91_AUTH_KEY);

    // Make API request
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const responseData = await response.json();

    // Check if verification was successful
    if (!response.ok || responseData.type === 'error') {
      return {
        data: null,
        error: responseData.message || 'Invalid OTP. Please try again.',
      };
    }

    return {
      data: {
        type: 'success',
        message: responseData.message || 'OTP verified successfully',
      },
      error: null,
    };
  } catch (error) {
    console.error('MSG91 Verify OTP Error:', error);
    return {
      data: null,
      error: error instanceof Error ? error.message : 'Network error. Please try again.',
    };
  }
}

/**
 * Resend OTP to the same phone number
 * @param phoneNumber - Phone number with country code
 * @param retryType - Type of retry ('text' or 'voice')
 * @returns Result indicating success or failure
 */
export async function resendOTP(
  phoneNumber: string,
  retryType: 'text' | 'voice' = 'text'
): Promise<MSG91Result<MSG91SendOTPResponse>> {
  try {
    // Validate inputs
    if (!MSG91_AUTH_KEY) {
      return {
        data: null,
        error: 'MSG91 credentials not configured',
      };
    }

    if (!validatePhoneNumber(phoneNumber)) {
      return {
        data: null,
        error: 'Invalid phone number format',
      };
    }

    const formattedPhone = formatPhoneNumber(phoneNumber);

    // Prepare request URL
    const url = new URL(RETRY_OTP_ENDPOINT);
    url.searchParams.append('mobile', formattedPhone);
    url.searchParams.append('authkey', MSG91_AUTH_KEY);
    url.searchParams.append('retrytype', retryType);

    // Make API request
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const responseData = await response.json();

    // Check if request was successful
    if (!response.ok || responseData.type === 'error') {
      return {
        data: null,
        error: responseData.message || 'Failed to resend OTP',
      };
    }

    return {
      data: {
        type: 'success',
        message: responseData.message || 'OTP resent successfully',
      },
      error: null,
    };
  } catch (error) {
    console.error('MSG91 Resend OTP Error:', error);
    return {
      data: null,
      error: error instanceof Error ? error.message : 'Network error. Please try again.',
    };
  }
}

/**
 * Helper function to format phone number for display
 * @param phoneNumber - Raw phone number
 * @returns Formatted phone number for display (e.g., +91 98765 43210)
 */
export function formatPhoneForDisplay(phoneNumber: string): string {
  const formatted = formatPhoneNumber(phoneNumber);

  // Assume India (+91) for now - can be extended for other countries
  if (formatted.startsWith('91') && formatted.length === 12) {
    return `+91 ${formatted.slice(2, 7)} ${formatted.slice(7)}`;
  }

  // Default format
  return `+${formatted}`;
}

/**
 * Helper to check if environment is properly configured
 * @returns true if MSG91 is configured, false otherwise
 */
export function isMSG91Configured(): boolean {
  return Boolean(MSG91_AUTH_KEY && MSG91_TEMPLATE_ID);
}
