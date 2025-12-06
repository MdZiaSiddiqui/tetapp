import React, { useState, useEffect } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import RazorpayCheckoutSDK from 'react-native-razorpay';

const { width } = Dimensions.get('window');
import { useRouter } from 'expo-router';
import { useAuth } from '../../lib/auth-context';
import { supabase } from '../../lib/supabase';
import {
  createRazorpayOrder,
  verifyRazorpayPayment,
  getRazorpayCheckoutOptions,
  type RazorpayPaymentState,
} from '../../lib/razorpay';
import type { TierType, PackageType } from '../../lib/pricing-config';
import type { RazorpayOrder } from '../../lib/types/database.types';

interface RazorpayCheckoutProps {
  tier: TierType;
  package: PackageType;
  visible: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export default function RazorpayCheckout({
  tier,
  package: packageType,
  visible,
  onClose,
  onSuccess,
}: RazorpayCheckoutProps) {
  const { user } = useAuth();
  const router = useRouter();

  const [paymentState, setPaymentState] = useState<RazorpayPaymentState>({
    status: 'idle',
  });

  // Create order and open native checkout when modal is opened
  useEffect(() => {
    if (visible && paymentState.status === 'idle') {
      handleCreateOrder();
    }
  }, [visible]);

  const handleCreateOrder = async () => {
    setPaymentState({ status: 'creating_order' });

    console.log('🔵 [RazorpayCheckout] Creating order for:', { tier, package: packageType });

    // Fetch user phone from profile before creating order
    let userPhone: string | undefined;
    if (user?.id) {
      try {
        const { data, error } = await supabase
          .from('user_profiles')
          .select('phone')
          .eq('id', user.id)
          .single();

        if (!error && data?.phone) {
          userPhone = data.phone;
          console.log('📱 [RazorpayCheckout] User phone fetched:', userPhone);
        }
      } catch (err) {
        console.log('Could not fetch user phone:', err);
      }
    }

    const { success, order, error, details } = await createRazorpayOrder(tier, packageType);

    console.log('📊 [RazorpayCheckout] Order creation result:', { success, order: order?.id, error });

    if (!success || !order) {
      const errorMessage = error || 'Failed to create payment order';
      console.error('❌ [RazorpayCheckout] Order creation failed:', {
        error: errorMessage,
        details,
        tier,
        package: packageType
      });

      setPaymentState({
        status: 'failed',
        error: errorMessage,
      });

      // Show detailed error in alert
      Alert.alert(
        'Payment Order Failed',
        `${errorMessage}\n\n${details ? `Details: ${JSON.stringify(details)}` : 'Please check console for more info'}`,
        [
          { text: 'Try Again', onPress: () => setPaymentState({ status: 'idle' }) },
          { text: 'Cancel', onPress: onClose, style: 'cancel' }
        ]
      );
      return;
    }

    console.log('✅ [RazorpayCheckout] Order created successfully, opening native checkout...');

    // Open native Razorpay checkout with phone
    openNativeCheckout(order, userPhone);
  };

  const openNativeCheckout = (order: RazorpayOrder, userPhone?: string) => {
    const options = getRazorpayCheckoutOptions(
      order,
      user?.email,
      user?.user_metadata?.full_name,
      userPhone
    );

    console.log('🛒 [RazorpayCheckout] Opening checkout with prefill:', {
      email: user?.email,
      name: user?.user_metadata?.full_name,
      contact: userPhone,
    });

    setPaymentState({
      status: 'awaiting_payment',
      order,
    });

    // Open native Razorpay checkout
    RazorpayCheckoutSDK.open(options)
      .then((data: any) => {
        // Payment successful
        handlePaymentSuccess({
          razorpay_payment_id: data.razorpay_payment_id,
          razorpay_order_id: data.razorpay_order_id,
          razorpay_signature: data.razorpay_signature,
        });
      })
      .catch((error: any) => {
        // Payment failed or cancelled
        if (error.code === 0) {
          // User cancelled
          handlePaymentCancelled();
        } else {
          // Payment failed
          handlePaymentFailed({
            code: error.code?.toString(),
            description: error.description,
            reason: error.reason,
          });
        }
      });
  };

  const handlePaymentSuccess = async (paymentData: {
    razorpay_payment_id: string;
    razorpay_order_id: string;
    razorpay_signature: string;
  }) => {
    setPaymentState((prev) => ({
      ...prev,
      status: 'verifying',
      paymentId: paymentData.razorpay_payment_id,
    }));

    const result = await verifyRazorpayPayment(
      paymentData.razorpay_order_id,
      paymentData.razorpay_payment_id,
      paymentData.razorpay_signature
    );

    if (result.success) {
      setPaymentState({
        status: 'success',
        paymentId: paymentData.razorpay_payment_id,
      });

      // Call onSuccess callback
      if (onSuccess) {
        onSuccess();
      }

      // Navigate to success screen
      router.push({
        pathname: '/payment-success',
        params: {
          tier,
          package: packageType,
          payment_id: paymentData.razorpay_payment_id,
        },
      });

      // Close modal after navigation
      setTimeout(() => {
        onClose();
      }, 500);
    } else {
      setPaymentState({
        status: 'failed',
        error: result.message,
        paymentId: paymentData.razorpay_payment_id,
      });

      Alert.alert(
        'Verification Failed',
        `${result.message}\n\nPayment ID: ${paymentData.razorpay_payment_id}\n\nPlease contact support if amount was deducted.`,
        [
          { text: 'OK', onPress: onClose },
        ]
      );
    }
  };

  const handlePaymentFailed = (errorData: {
    code?: string;
    description?: string;
    reason?: string;
  }) => {
    setPaymentState({
      status: 'failed',
      error: errorData.description || errorData.reason || 'Payment failed',
    });

    Alert.alert(
      'Payment Failed',
      errorData.description || 'Payment could not be completed. Please try again.',
      [
        { text: 'Retry', onPress: () => setPaymentState({ status: 'idle' }) },
        { text: 'Cancel', onPress: onClose, style: 'cancel' },
      ]
    );
  };

  const handlePaymentCancelled = () => {
    setPaymentState({
      status: 'cancelled',
    });
    // Custom styled UI is shown via renderContent()
  };

  const renderContent = () => {
    switch (paymentState.status) {
      case 'creating_order':
      case 'awaiting_payment':
        return (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#3b82f6" />
            <Text style={styles.loadingText}>
              {paymentState.status === 'creating_order'
                ? 'Preparing payment...'
                : 'Opening payment checkout...'}
            </Text>
          </View>
        );

      case 'verifying':
        return (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#3b82f6" />
            <Text style={styles.loadingText}>Verifying payment...</Text>
            <Text style={styles.subText}>Please wait, do not close this window</Text>
          </View>
        );

      case 'failed':
        return (
          <View style={styles.errorContainer}>
            <Text style={styles.errorTitle}>Payment Failed</Text>
            <Text style={styles.errorText}>{paymentState.error || 'An error occurred'}</Text>
            {paymentState.paymentId && (
              <Text style={styles.paymentId}>Payment ID: {paymentState.paymentId}</Text>
            )}
            <TouchableOpacity
              style={styles.retryButton}
              onPress={() => setPaymentState({ status: 'idle' })}
              activeOpacity={1}
            >
              <Text style={styles.retryButtonText}>Try Again</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton} onPress={onClose} activeOpacity={1}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        );

      case 'cancelled':
        return (
          <View style={styles.cancelledContainer}>
            {/* Icon */}
            <View style={styles.cancelledIconContainer}>
              <Ionicons name="close-circle" size={64} color="#f59e0b" />
            </View>

            {/* Title */}
            <Text style={styles.cancelledTitle}>Payment Cancelled</Text>

            {/* Message */}
            <Text style={styles.cancelledMessage}>
              You cancelled the payment. Would you like to try again?
            </Text>

            {/* Buttons */}
            <View style={styles.cancelledButtonsContainer}>
              <TouchableOpacity
                style={styles.tryAgainButton}
                onPress={() => {
                  setPaymentState({ status: 'idle' });
                  // Directly trigger order creation for smooth experience
                  setTimeout(() => handleCreateOrder(), 100);
                }}
                activeOpacity={0.8}
              >
                <LinearGradient
                  colors={['#fbbf24', '#f59e0b', '#d97706']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.tryAgainButtonGradient}
                >
                  <Ionicons name="refresh" size={20} color="#ffffff" />
                  <Text style={styles.tryAgainButtonText}>Try Again</Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.cancelledCloseButton}
                onPress={onClose}
                activeOpacity={0.8}
              >
                <Text style={styles.cancelledCloseButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        {renderContent()}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 280,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
  },
  subText: {
    marginTop: 8,
    fontSize: 14,
    color: '#9ca3af',
    textAlign: 'center',
  },
  errorContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 280,
    maxWidth: 340,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  errorTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#dc2626',
    marginBottom: 16,
  },
  errorText: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 24,
  },
  paymentId: {
    fontSize: 12,
    color: '#9ca3af',
    fontFamily: 'monospace',
    marginBottom: 24,
  },
  retryButton: {
    backgroundColor: '#3b82f6',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  retryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  closeButton: {
    paddingHorizontal: 32,
    paddingVertical: 12,
  },
  closeButtonText: {
    color: '#6b7280',
    fontSize: 16,
  },
  // Cancelled State Styles
  cancelledContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 32,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: width - 64,
    maxWidth: width - 48,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 12,
  },
  cancelledIconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#fef3c7',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  cancelledTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 12,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  cancelledMessage: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 24,
    paddingHorizontal: 8,
  },
  cancelledButtonsContainer: {
    width: '100%',
    gap: 12,
  },
  tryAgainButton: {
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#d97706',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  tryAgainButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  tryAgainButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  cancelledCloseButton: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: '#f3f4f6',
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  cancelledCloseButtonText: {
    color: '#6b7280',
    fontSize: 16,
    fontWeight: '600',
  },
});
