/**
 * Razorpay Payment Service for React Native
 * Handles payment order creation, checkout, and verification
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
const PAYMENT_API_URL = process.env.EXPO_PUBLIC_PAYMENT_API_URL || 'http://localhost:3000';

if (!RAZORPAY_KEY_ID) {
  console.warn('⚠️ EXPO_PUBLIC_RAZORPAY_KEY_ID is not set in .env file');
}

if (!process.env.EXPO_PUBLIC_PAYMENT_API_URL) {
  console.warn('⚠️ EXPO_PUBLIC_PAYMENT_API_URL is not set in .env file, using localhost');
}

/**
 * Create a Razorpay order via Express backend
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
    console.log('🔵 Using payment API:', PAYMENT_API_URL);

    const response = await fetch(`${PAYMENT_API_URL}/create-order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tier,
        package: packageType,
        userId: session.user.id,
      }),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      console.error('❌ Error creating Razorpay order:', data);

      let errorMessage = 'Failed to create order';

      if (response.status === 404) {
        errorMessage = 'Payment server not found. Please check EXPO_PUBLIC_PAYMENT_API_URL in .env';
      } else if (response.status === 400) {
        errorMessage = data.error || 'Invalid request parameters';
      } else if (response.status >= 500) {
        errorMessage = 'Server error. Please try again later.';
      } else if (data.error) {
        errorMessage = data.error;
      }

      return {
        success: false,
        error: errorMessage,
        details: data
      };
    }

    console.log('✅ Razorpay order created successfully:', data.order.id);
    return { success: true, order: data.order };
  } catch (error) {
    console.error('❌ Exception in createRazorpayOrder:', error);

    let errorMessage = 'Unknown error occurred';

    if (error instanceof TypeError && error.message.includes('Network request failed')) {
      errorMessage = 'Cannot connect to payment server. Please check if backend is running.';
    } else if (error instanceof Error) {
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
 * Verify payment via Express backend
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

    const response = await fetch(`${PAYMENT_API_URL}/verify-payment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        razorpay_order_id: orderId,
        razorpay_payment_id: paymentId,
        razorpay_signature: signature,
        userId: session.user.id,
      }),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      console.error('❌ Error verifying payment:', data);
      return {
        success: false,
        message: data.message || 'Payment verification failed'
      };
    }

    console.log('✅ Payment verified successfully');

    // TODO: Update user's pro status in Supabase
    // For now, the backend just verifies the signature
    // You'll need to add database update logic

    return {
      success: true,
      message: data.message || 'Payment verified successfully',
    };
  } catch (error) {
    console.error('❌ Exception in verifyRazorpayPayment:', error);

    let errorMessage = 'Unknown error occurred';

    if (error instanceof TypeError && error.message.includes('Network request failed')) {
      errorMessage = 'Cannot connect to payment server';
    } else if (error instanceof Error) {
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
