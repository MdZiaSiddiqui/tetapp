import { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Alert,
  Modal,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';
import { useAuth } from '../lib/auth-context';
import { useProAccess } from '../hooks/useProAccess';
import {
  PRICING_CONFIG,
  TIER_NAMES,
  TIER_FEATURES,
  getTierPricing,
  getYearlySavings,
  type TierType,
  type PackageType,
  type PricingOption,
} from '../lib/pricing-config';
import {
  createRazorpayOrder,
  verifyRazorpayPayment,
  generateRazorpayCheckoutHTML,
  type RazorpayPaymentStatus,
} from '../lib/razorpay';

export default function PricingScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { user } = useAuth();
  const { tier: currentTier, refresh: refreshProAccess } = useProAccess();

  // Recommended tier from params (e.g., when coming from upgrade prompt)
  const recommendedTier = (params.recommendedTier as TierType) || 'both';

  // Selected plan state
  const [selectedTier, setSelectedTier] = useState<TierType>(recommendedTier);
  const [selectedPackage, setSelectedPackage] = useState<PackageType>('1_year');

  // Payment state
  const [paymentStatus, setPaymentStatus] = useState<RazorpayPaymentStatus>('idle');
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentHTML, setPaymentHTML] = useState('');
  const [orderId, setOrderId] = useState('');
  const [error, setError] = useState('');

  const webViewRef = useRef<WebView>(null);

  // Get selected pricing
  const selectedPricing = PRICING_CONFIG[`${selectedTier}_${selectedPackage}`];
  const savings = selectedPackage === '1_year' ? getYearlySavings(selectedTier) : 0;

  // Handle purchase
  const handlePurchase = async () => {
    if (!user) {
      Alert.alert('Sign In Required', 'Please sign in to purchase a plan.');
      return;
    }

    try {
      setPaymentStatus('creating_order');
      setError('');

      // Create Razorpay order
      const result = await createRazorpayOrder(selectedTier, selectedPackage);

      if (!result.success || !result.order) {
        setPaymentStatus('failed');
        setError(result.error || 'Failed to create order');
        Alert.alert('Error', result.error || 'Failed to create order');
        return;
      }

      // Generate payment HTML
      const html = generateRazorpayCheckoutHTML(
        result.order,
        user.email || undefined,
        user.user_metadata?.full_name || undefined
      );

      setOrderId(result.order.id);
      setPaymentHTML(html);
      setPaymentStatus('awaiting_payment');
      setShowPaymentModal(true);
    } catch (err) {
      console.error('Purchase error:', err);
      setPaymentStatus('failed');
      setError(err instanceof Error ? err.message : 'Unknown error');
      Alert.alert('Error', 'Failed to initiate payment. Please try again.');
    }
  };

  // Handle WebView messages (payment response)
  const handleWebViewMessage = async (event: any) => {
    try {
      const message = JSON.parse(event.nativeEvent.data);
      console.log('WebView message:', message);

      if (message.type === 'payment_success') {
        setPaymentStatus('verifying');
        const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = message.data;

        // Verify payment
        const verifyResult = await verifyRazorpayPayment(
          razorpay_order_id,
          razorpay_payment_id,
          razorpay_signature
        );

        if (verifyResult.success) {
          setPaymentStatus('success');
          setShowPaymentModal(false);

          // Refresh pro access status
          await refreshProAccess();

          Alert.alert(
            'Success!',
            'Payment successful! You now have pro access.',
            [
              {
                text: 'OK',
                onPress: () => router.replace('/(tabs)/home'),
              },
            ]
          );
        } else {
          setPaymentStatus('failed');
          setError(verifyResult.message || 'Payment verification failed');
          Alert.alert('Verification Failed', verifyResult.message || 'Payment verification failed');
        }
      } else if (message.type === 'payment_failed') {
        setPaymentStatus('failed');
        setShowPaymentModal(false);
        setError(message.data.description || 'Payment failed');
        Alert.alert('Payment Failed', message.data.description || 'Payment failed');
      } else if (message.type === 'payment_cancelled') {
        setPaymentStatus('cancelled');
        setShowPaymentModal(false);
      }
    } catch (err) {
      console.error('Error handling WebView message:', err);
      setPaymentStatus('failed');
      setShowPaymentModal(false);
      Alert.alert('Error', 'Failed to process payment response');
    }
  };

  // Render pricing card
  const renderPricingCard = (tier: TierType) => {
    const isSelected = selectedTier === tier;
    const isRecommended = tier === recommendedTier;
    const pricing3Month = PRICING_CONFIG[`${tier}_3_months`];
    const pricing1Year = PRICING_CONFIG[`${tier}_1_year`];
    const features = TIER_FEATURES[tier];

    return (
      <TouchableOpacity
        key={tier}
        onPress={() => setSelectedTier(tier)}
        className={`mb-4 rounded-2xl overflow-hidden ${
          isSelected ? 'border-4 border-purple-600' : 'border-2 border-gray-200'
        }`}
        activeOpacity={0.8}
      >
        {/* Recommended badge */}
        {isRecommended && (
          <View className="bg-purple-600 px-4 py-2">
            <Text className="text-white text-center font-bold text-sm">
              ⭐ RECOMMENDED FOR YOU
            </Text>
          </View>
        )}

        <View className="bg-white p-6">
          {/* Tier name */}
          <Text className="text-2xl font-bold text-gray-900 mb-2">
            {TIER_NAMES[tier]}
          </Text>

          {/* Pricing */}
          <View className="mb-4">
            <View className="flex-row items-baseline gap-1">
              <Text className="text-4xl font-bold text-purple-600">
                {selectedPackage === '3_months' ? pricing3Month.label : pricing1Year.label}
              </Text>
              <Text className="text-gray-600">
                / {selectedPackage === '3_months' ? '3 months' : '1 year'}
              </Text>
            </View>
            {selectedPackage === '1_year' && (
              <Text className="text-green-600 font-semibold text-sm mt-1">
                Save ₹{getYearlySavings(tier)}!
              </Text>
            )}
          </View>

          {/* Features */}
          <View className="mb-4">
            {features.map((feature, index) => (
              <View key={index} className="flex-row items-start mb-2">
                <Ionicons name="checkmark-circle" size={20} color="#9333ea" />
                <Text className="text-gray-700 ml-2 flex-1">{feature}</Text>
              </View>
            ))}
          </View>

          {/* Select button */}
          {isSelected && (
            <View className="bg-purple-50 px-4 py-3 rounded-xl border border-purple-200">
              <View className="flex-row items-center justify-center gap-2">
                <Ionicons name="checkmark-circle" size={20} color="#9333ea" />
                <Text className="text-purple-700 font-bold">Buy Now</Text>
              </View>
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View className="flex-1 bg-gray-50">
      <StatusBar style="dark" />

      <ScrollView>
        {/* Header */}
        <LinearGradient
          colors={['#faf5ff', '#f3e8ff', '#ede9fe']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          className="px-6 pt-16 pb-8"
        >
          <TouchableOpacity onPress={() => router.back()} className="mb-4">
            <Ionicons name="chevron-back" size={28} color="#111827" />
          </TouchableOpacity>

          <Text className="text-3xl font-bold text-gray-900 mb-2">
            Choose Your Plan
          </Text>
          <Text className="text-lg text-gray-600">
            Unlock premium features and ace your TET exam!
          </Text>
        </LinearGradient>

        <View className="px-6 py-6">
          {/* Package Duration Toggle */}
          <View className="mb-6">
            <Text className="text-lg font-bold text-gray-900 mb-3">
              Select Duration
            </Text>
            <View className="flex-row gap-3">
              <TouchableOpacity
                onPress={() => setSelectedPackage('3_months')}
                className={`flex-1 py-4 rounded-xl border-2 ${
                  selectedPackage === '3_months'
                    ? 'bg-purple-50 border-purple-600'
                    : 'bg-white border-gray-200'
                }`}
                activeOpacity={0.7}
              >
                <Text
                  className={`text-center font-bold ${
                    selectedPackage === '3_months' ? 'text-purple-700' : 'text-gray-700'
                  }`}
                >
                  3 Months
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setSelectedPackage('1_year')}
                className={`flex-1 py-4 rounded-xl border-2 ${
                  selectedPackage === '1_year'
                    ? 'bg-purple-50 border-purple-600'
                    : 'bg-white border-gray-200'
                }`}
                activeOpacity={0.7}
              >
                <View>
                  <Text
                    className={`text-center font-bold ${
                      selectedPackage === '1_year' ? 'text-purple-700' : 'text-gray-700'
                    }`}
                  >
                    1 Year
                  </Text>
                  <Text className="text-green-600 font-semibold text-xs text-center mt-1">
                    Best Value
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* Pricing Cards */}
          <Text className="text-lg font-bold text-gray-900 mb-3">
            Select Plan
          </Text>

          {renderPricingCard('paper1')}
          {renderPricingCard('paper2')}
          {renderPricingCard('both')}

          {/* Purchase Button */}
          <TouchableOpacity
            onPress={handlePurchase}
            disabled={paymentStatus === 'creating_order'}
            className={`mt-6 rounded-2xl py-4 px-6 shadow-lg ${
              paymentStatus === 'creating_order' ? 'bg-gray-400' : 'bg-purple-600'
            }`}
            activeOpacity={0.8}
          >
            {paymentStatus === 'creating_order' ? (
              <View className="flex-row items-center justify-center gap-2">
                <ActivityIndicator size="small" color="#ffffff" />
                <Text className="text-white text-center font-bold text-lg">
                  Processing...
                </Text>
              </View>
            ) : (
              <Text className="text-white text-center font-bold text-lg">
                Continue to Payment
              </Text>
            )}
          </TouchableOpacity>

          {/* Current plan info */}
          {currentTier !== 'free' && (
            <View className="mt-6 bg-blue-50 rounded-xl p-4 border border-blue-200">
              <View className="flex-row items-center gap-2">
                <Ionicons name="information-circle" size={20} color="#2563eb" />
                <Text className="text-blue-700 font-semibold">
                  Current Plan: {TIER_NAMES[currentTier]}
                </Text>
              </View>
            </View>
          )}

          {/* Error message */}
          {error && paymentStatus === 'failed' && (
            <View className="mt-4 bg-red-50 rounded-xl p-4 border border-red-200">
              <View className="flex-row items-start gap-2">
                <Ionicons name="alert-circle" size={20} color="#dc2626" />
                <Text className="text-red-700 flex-1">{error}</Text>
              </View>
            </View>
          )}
        </View>
      </ScrollView>

      {/* Payment WebView Modal */}
      <Modal
        visible={showPaymentModal}
        animationType="slide"
        onRequestClose={() => {
          if (paymentStatus !== 'verifying') {
            setShowPaymentModal(false);
            setPaymentStatus('cancelled');
          }
        }}
      >
        <View className="flex-1 bg-white">
          <View className="bg-purple-600 px-6 pt-16 pb-4 flex-row items-center justify-between">
            <Text className="text-white text-lg font-bold">Complete Payment</Text>
            {paymentStatus !== 'verifying' && (
              <TouchableOpacity
                onPress={() => {
                  setShowPaymentModal(false);
                  setPaymentStatus('cancelled');
                }}
              >
                <Ionicons name="close" size={28} color="#ffffff" />
              </TouchableOpacity>
            )}
          </View>

          {paymentStatus === 'verifying' ? (
            <View className="flex-1 justify-center items-center">
              <ActivityIndicator size="large" color="#9333ea" />
              <Text className="text-gray-700 mt-4 text-lg">Verifying payment...</Text>
            </View>
          ) : (
            <WebView
              ref={webViewRef}
              source={{ html: paymentHTML }}
              onMessage={handleWebViewMessage}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              startInLoadingState={true}
              renderLoading={() => (
                <View className="flex-1 justify-center items-center">
                  <ActivityIndicator size="large" color="#9333ea" />
                  <Text className="text-gray-700 mt-4">Loading payment...</Text>
                </View>
              )}
            />
          )}
        </View>
      </Modal>
    </View>
  );
}
