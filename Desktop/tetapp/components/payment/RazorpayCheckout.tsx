import React, { useState, useRef } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { useRouter } from 'expo-router';
import { useAuth } from '../../lib/auth-context';
import {
  createRazorpayOrder,
  verifyRazorpayPayment,
  generateRazorpayCheckoutHTML,
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
  const webViewRef = useRef<WebView>(null);

  const [paymentState, setPaymentState] = useState<RazorpayPaymentState>({
    status: 'idle',
  });

  // Create order when modal is opened
  React.useEffect(() => {
    if (visible && paymentState.status === 'idle') {
      handleCreateOrder();
    }
  }, [visible]);

  const handleCreateOrder = async () => {
    setPaymentState({ status: 'creating_order' });

    const { success, order, error } = await createRazorpayOrder(tier, packageType);

    if (!success || !order) {
      setPaymentState({
        status: 'failed',
        error: error || 'Failed to create payment order',
      });
      Alert.alert('Error', error || 'Failed to create payment order');
      return;
    }

    setPaymentState({
      status: 'awaiting_payment',
      order,
    });
  };

  const handleWebViewMessage = async (event: any) => {
    try {
      const message = JSON.parse(event.nativeEvent.data);

      switch (message.type) {
        case 'payment_success':
          await handlePaymentSuccess(message.data);
          break;

        case 'payment_failed':
          handlePaymentFailed(message.data);
          break;

        case 'payment_cancelled':
          handlePaymentCancelled();
          break;

        default:
          console.log('Unknown message type:', message.type);
      }
    } catch (error) {
      console.error('Error handling WebView message:', error);
    }
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

    Alert.alert(
      'Payment Cancelled',
      'You cancelled the payment. Would you like to try again?',
      [
        { text: 'Try Again', onPress: () => setPaymentState({ status: 'idle' }) },
        { text: 'Close', onPress: onClose, style: 'cancel' },
      ]
    );
  };

  const renderContent = () => {
    switch (paymentState.status) {
      case 'creating_order':
        return (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#3b82f6" />
            <Text style={styles.loadingText}>Creating payment order...</Text>
          </View>
        );

      case 'awaiting_payment':
        if (!paymentState.order) {
          return (
            <View style={styles.loadingContainer}>
              <Text style={styles.errorText}>Order data missing</Text>
            </View>
          );
        }

        return (
          <WebView
            ref={webViewRef}
            source={{
              html: generateRazorpayCheckoutHTML(
                paymentState.order,
                user?.email,
                user?.user_metadata?.full_name
              ),
            }}
            onMessage={handleWebViewMessage}
            style={styles.webview}
            javaScriptEnabled
            domStorageEnabled
            startInLoadingState
            renderLoading={() => (
              <View style={styles.webviewLoading}>
                <ActivityIndicator size="large" color="#3b82f6" />
                <Text style={styles.loadingText}>Loading checkout...</Text>
              </View>
            )}
          />
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
            >
              <Text style={styles.retryButtonText}>Try Again</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="fullScreen"
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        {paymentState.status !== 'verifying' && (
          <View style={styles.header}>
            <TouchableOpacity onPress={onClose} style={styles.closeIconButton}>
              <Text style={styles.closeIcon}>✕</Text>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Secure Payment</Text>
            <View style={{ width: 40 }} />
          </View>
        )}
        {renderContent()}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    paddingTop: 50, // Account for status bar
  },
  closeIconButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeIcon: {
    fontSize: 24,
    color: '#6b7280',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  webview: {
    flex: 1,
  },
  webviewLoading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
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
});
