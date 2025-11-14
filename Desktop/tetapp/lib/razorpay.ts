/**
 * Razorpay Payment Service for React Native
 * Handles payment order creation, checkout, and verification using Supabase Edge Functions
 */

import { supabase } from './supabase';
import type { TierType, PackageType } from './pricing-config';
import type {
  CreateOrderRequest,
  RazorpayOrder,
  VerifyPaymentRequest,
  VerifyPaymentResponse,
} from './types/database.types';

const RAZORPAY_KEY_ID = process.env.EXPO_PUBLIC_RAZORPAY_KEY_ID;

if (!RAZORPAY_KEY_ID) {
  console.warn('⚠️ EXPO_PUBLIC_RAZORPAY_KEY_ID is not set in .env file');
}

/**
 * Create a Razorpay order via Supabase Edge Function
 */
export async function createRazorpayOrder(
  tier: TierType,
  packageType: PackageType
): Promise<{ success: boolean; order?: RazorpayOrder; error?: string; details?: any }> {
  try {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      return { success: false, error: 'User not authenticated. Please log in.' };
    }

    console.log('🔵 Creating Razorpay order:', { tier, package: packageType });

    // Call Supabase Edge Function
    const { data, error } = await supabase.functions.invoke('create-razorpay-order', {
      body: {
        tier,
        package: packageType,
      },
    });

    if (error) {
      console.error('❌ Error creating Razorpay order:', error);

      let errorMessage = 'Failed to create order';

      if (error.message.includes('not found')) {
        errorMessage = 'Payment function not deployed. Please run: supabase functions deploy create-razorpay-order';
      } else if (error.message) {
        errorMessage = error.message;
      }

      return {
        success: false,
        error: errorMessage,
        details: error
      };
    }

    if (!data || !data.success || !data.order) {
      console.error('❌ Invalid response from create-razorpay-order:', data);
      return {
        success: false,
        error: data?.error || 'Failed to create order',
        details: data
      };
    }

    console.log('✅ Razorpay order created successfully:', data.order.id);
    return { success: true, order: data.order };
  } catch (error) {
    console.error('❌ Exception in createRazorpayOrder:', error);

    let errorMessage = 'Unknown error occurred';

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return {
      success: false,
      error: errorMessage,
      details: error
    };
  }
}

/**
 * Verify payment via Supabase Edge Function
 */
export async function verifyRazorpayPayment(
  orderId: string,
  paymentId: string,
  signature: string
): Promise<VerifyPaymentResponse> {
  try {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      return { success: false, message: 'User not authenticated' };
    }

    console.log('🔵 Verifying payment:', paymentId);

    // Call Supabase Edge Function
    const { data, error } = await supabase.functions.invoke('verify-razorpay-payment', {
      body: {
        razorpay_order_id: orderId,
        razorpay_payment_id: paymentId,
        razorpay_signature: signature,
      },
    });

    if (error) {
      console.error('❌ Error verifying payment:', error);
      return {
        success: false,
        message: error.message || 'Payment verification failed'
      };
    }

    if (!data || !data.success) {
      console.error('❌ Payment verification failed:', data);
      return {
        success: false,
        message: data?.error || data?.message || 'Payment verification failed'
      };
    }

    console.log('✅ Payment verified successfully. Pro access granted!');

    return {
      success: true,
      message: data.message || 'Payment verified successfully',
    };
  } catch (error) {
    console.error('❌ Exception in verifyRazorpayPayment:', error);

    let errorMessage = 'Unknown error occurred';

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return {
      success: false,
      message: errorMessage,
    };
  }
}

/**
 * Get Razorpay checkout options for WebView
 */
export function getRazorpayCheckoutOptions(
  order: RazorpayOrder,
  userEmail?: string,
  userName?: string
): {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  prefill: {
    email?: string;
    name?: string;
  };
  theme: {
    color: string;
  };
} {
  return {
    key: RAZORPAY_KEY_ID || '',
    amount: order.amount,
    currency: order.currency,
    name: 'TS-TET Pro',
    description: 'TET Exam Preparation Pro Access',
    order_id: order.id,
    prefill: {
      email: userEmail,
      name: userName,
    },
    theme: {
      color: '#3b82f6', // Blue theme matching app
    },
  };
}

/**
 * Generate Razorpay checkout HTML for WebView
 */
export function generateRazorpayCheckoutHTML(
  order: RazorpayOrder,
  userEmail?: string,
  userName?: string
): string {
  const options = getRazorpayCheckoutOptions(order, userEmail, userName);

  return `
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Razorpay Checkout</title>
    <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #f9fafb;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }
        .loading {
            text-align: center;
            color: #6b7280;
        }
        .spinner {
            border: 4px solid #e5e7eb;
            border-top: 4px solid #3b82f6;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
            margin: 0 auto 16px;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    </style>
</head>
<body>
    <div class="loading">
        <div class="spinner"></div>
        <p>Loading Razorpay Checkout...</p>
    </div>

    <script>
        const options = ${JSON.stringify(options)};

        options.handler = function (response) {
            // Payment successful - send data back to React Native
            window.ReactNativeWebView.postMessage(JSON.stringify({
                type: 'payment_success',
                data: {
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_order_id: response.razorpay_order_id,
                    razorpay_signature: response.razorpay_signature,
                }
            }));
        };

        options.modal = {
            ondismiss: function() {
                // User closed the checkout modal
                window.ReactNativeWebView.postMessage(JSON.stringify({
                    type: 'payment_cancelled',
                    data: { message: 'Payment cancelled by user' }
                }));
            }
        };

        // Create Razorpay instance
        const rzp = new Razorpay(options);

        rzp.on('payment.failed', function (response) {
            // Payment failed
            window.ReactNativeWebView.postMessage(JSON.stringify({
                type: 'payment_failed',
                data: {
                    code: response.error.code,
                    description: response.error.description,
                    source: response.error.source,
                    step: response.error.step,
                    reason: response.error.reason,
                }
            }));
        });

        // Auto-open checkout after a brief delay
        setTimeout(() => {
            rzp.open();
        }, 500);
    </script>
</body>
</html>
`;
}

/**
 * Razorpay payment status types
 */
export type RazorpayPaymentStatus =
  | 'idle'
  | 'creating_order'
  | 'awaiting_payment'
  | 'verifying'
  | 'success'
  | 'failed'
  | 'cancelled';

export interface RazorpayPaymentState {
  status: RazorpayPaymentStatus;
  order?: RazorpayOrder;
  error?: string;
  paymentId?: string;
}
