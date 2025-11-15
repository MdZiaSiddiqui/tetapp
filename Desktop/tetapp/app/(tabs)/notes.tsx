import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFocusEffect } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RazorpayCheckout from '../../components/payment/RazorpayCheckout';
import { useProAccess } from '../../hooks/useProAccess';
import type { TierType, PackageType } from '../../lib/pricing-config';
import { TIER_NAMES } from '../../lib/pricing-config';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

type PricingPlan = {
  title: string;
  subtitle?: string;
  icon: string;
  gradient: string[];
  plans: {
    duration: string;
    price: string;
    popular?: boolean;
    savings?: string;
  }[];
  features?: string[];
  recommended?: boolean;
};

const pricingData: PricingPlan[] = [
  {
    title: 'TS-TET Paper-1',
    subtitle: 'Foundation Level',
    icon: '',
    gradient: ['#ffffff', '#ffffff'],
    plans: [
      { duration: '3 Months', price: '499' },
      { duration: '1 Year', price: '799' },
    ],
    features: ['Complete Paper-1 syllabus', 'Practice tests', 'Progress tracking'],
  },
  {
    title: 'TS-TET Paper-2',
    subtitle: 'Advanced Level',
    icon: '',
    gradient: ['#ffffff', '#ffffff'],
    plans: [
      { duration: '3 Months', price: '699' },
      { duration: '1 Year', price: '999' },
    ],
    features: ['Complete Paper-2 syllabus', 'Advanced practice tests', 'Detailed analytics', 'Expert guidance'],
  },
  {
    title: 'TS-TET Paper-1 + Paper-2',
    subtitle: 'Complete Bundle',
    icon: '',
    gradient: ['#ffffff', '#ffffff'],
    plans: [
      { duration: '3 Months', price: '999' },
      { duration: '1 Year', price: '1499' },
    ],
    features: ['Both Paper-1 & Paper-2', 'All practice tests', 'Priority support', 'Unlimited access', 'Best value package'],
  },
];

export default function PricingScreen() {
  const {
    tier: currentTier,
    isProActive,
    isFree,
    expiresAt,
    daysRemaining,
    packageType,
    refresh,
  } = useProAccess();
  const [showPayment, setShowPayment] = useState(false);
  const [selectedTier, setSelectedTier] = useState<TierType>('paper1');
  const [selectedPackage, setSelectedPackage] = useState<PackageType>('3_months');
  const [orderedPricingData, setOrderedPricingData] = useState(pricingData);

  // Load selected paper from AsyncStorage and reorder pricing cards
  // Use useFocusEffect to reload when tab comes into focus
  useFocusEffect(
    useCallback(() => {
      const loadPaperSelection = async () => {
        try {
          const selectedPaper = await AsyncStorage.getItem('selectedPaper');
          console.log('Loaded selected paper from AsyncStorage:', selectedPaper);

          if (selectedPaper) {
            // Check if user selected Paper-1 or Paper-2
            const isPaper1 = selectedPaper.includes('Paper-1');
            const isPaper2MathScience = selectedPaper.includes('Math & Science');
            const isPaper2Social = selectedPaper.includes('Social Studies');

            console.log('Paper type detected:', { isPaper1, isPaper2MathScience, isPaper2Social });

            // Reorder pricing data based on selection
            let reordered = [...pricingData];

            if (isPaper1) {
              // Show Paper-1 first (already default order, but explicit for clarity)
              console.log('Setting Paper-1 first order');
              reordered = [
                pricingData[0], // TS-TET Paper-1
                pricingData[2], // Both
                pricingData[1], // TS-TET Paper-2
              ];
            } else if (isPaper2MathScience || isPaper2Social) {
              // Show Paper-2 first
              console.log('Setting Paper-2 first order');
              reordered = [
                pricingData[1], // TS-TET Paper-2
                pricingData[2], // Both
                pricingData[0], // TS-TET Paper-1
              ];
            }

            setOrderedPricingData(reordered);
            console.log('Pricing data reordered:', reordered.map(p => p.title));
          } else {
            console.log('No selected paper found in AsyncStorage');
          }
        } catch (error) {
          console.error('Error loading paper selection:', error);
        }
      };
      loadPaperSelection();
    }, [])
  );

  const handleSelectPlan = (tier: TierType, packageType: PackageType) => {
    setSelectedTier(tier);
    setSelectedPackage(packageType);
    setShowPayment(true);
  };

  const handlePaymentSuccess = () => {
    // Refresh pro access status
    refresh();
  };

  // Render current plan card (for users who already have a plan)
  const renderCurrentPlanCard = () => {
    if (isFree) return null;

    return (
      <View style={styles.currentPlanCard}>
        <Text style={styles.planCardLabel}>Your Plan</Text>

        {/* Plan Details */}
        <View style={styles.planDetailsContainer}>
          <View style={styles.planHeader}>
            <Text style={styles.planTitle}>
              {TIER_NAMES[currentTier]}
            </Text>
            {isProActive && (
              <View style={styles.activeBadge}>
                <Text style={styles.activeBadgeText}>Active</Text>
              </View>
            )}
          </View>

          {/* Plan Description */}
          <Text style={styles.planDescription}>
            {isProActive
              ? currentTier === 'both'
                ? 'Full access to Paper-1 & Paper-2'
                : currentTier === 'paper1'
                ? 'Full access to Paper-1'
                : 'Full access to Paper-2'
              : 'Plan expired'}
          </Text>

          {/* Validity Information */}
          <View style={styles.validityBox}>
            {isProActive ? (
              <>
                <View style={styles.validityHeader}>
                  <Ionicons name="calendar-outline" size={16} color="#6B7280" />
                  <Text style={styles.validityLabel}>Valid Until</Text>
                </View>
                <Text style={styles.validityDate}>
                  {expiresAt?.toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </Text>
                <Text style={styles.validityDays}>
                  {daysRemaining !== null &&
                    `${daysRemaining} ${daysRemaining === 1 ? 'day' : 'days'} remaining`}
                </Text>
              </>
            ) : (
              <>
                <View style={styles.expiredHeader}>
                  <Ionicons name="warning-outline" size={16} color="#DC2626" />
                  <Text style={styles.expiredLabel}>Plan Expired</Text>
                </View>
                <Text style={styles.expiredText}>
                  Your subscription expired on{' '}
                  {expiresAt?.toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })}
                </Text>
              </>
            )}
          </View>

          {/* Package Type for Active Plans */}
          {isProActive && packageType && (
            <View style={styles.packageTypeRow}>
              <Ionicons name="time-outline" size={14} color="#6B7280" />
              <Text style={styles.packageTypeText}>
                {packageType === '3_months' ? '3 Months' : '1 Year'} Plan
              </Text>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <LinearGradient
      colors={['#faf5ff', '#f3e8ff', '#ede9fe']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Show Current Plan Card for users who have purchased */}
        {renderCurrentPlanCard()}

        {/* Divider for purchased users */}
        {!isFree && (
          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>
              {isProActive ? 'Upgrade or Extend' : 'Renew Your Plan'}
            </Text>
            <View style={styles.dividerLine} />
          </View>
        )}

        {/* Pricing Cards */}
        <View style={styles.cardsContainer}>
          {orderedPricingData.map((plan, index) => (
            <View key={index} style={styles.cardWrapper}>
              <View style={styles.card}>
                {/* Card Header */}
                <View style={styles.cardTitleContainer}>
                  <Text style={styles.cardTitle}>{plan.title}</Text>
                </View>

                {/* Pricing Options */}
                <View style={styles.pricingOptions}>
                  {plan.plans.map((option, optionIndex) => (
                    <View
                      key={optionIndex}
                      style={styles.priceOption}
                    >
                      <View style={styles.priceRow}>
                        <View style={styles.priceInfo}>
                          <Text style={styles.duration}>{option.duration}</Text>
                          <View style={styles.priceContainer}>
                            <Text style={styles.priceCurrency}>₹</Text>
                            <Text style={styles.price}>{option.price}</Text>
                          </View>
                          {option.savings && (
                            <Text style={styles.savings}>{option.savings}</Text>
                          )}
                        </View>
                        <TouchableOpacity
                          style={styles.selectButton}
                          onPress={() => {
                            const tierMap: Record<string, TierType> = {
                              'TS-TET Paper-1': 'paper1',
                              'TS-TET Paper-2': 'paper2',
                              'TS-TET Paper-1 + Paper-2': 'both',
                            };
                            const packageMap: Record<string, PackageType> = {
                              '3 Months': '3_months',
                              '1 Year': '1_year',
                            };
                            handleSelectPlan(
                              tierMap[plan.title],
                              packageMap[option.duration]
                            );
                          }}
                          activeOpacity={0.8}
                        >
                          <LinearGradient
                            colors={['#000000', '#000000']}
                            style={styles.selectButtonGradient}
                          >
                            <Text style={styles.selectButtonText}>Buy Now</Text>
                          </LinearGradient>
                        </TouchableOpacity>
                      </View>
                    </View>
                  ))}
                </View>

                {/* Features */}
                {plan.features && plan.features.length > 0 && (
                  <View style={styles.features}>
                    {plan.features.map((feature, featureIndex) => (
                      <View key={featureIndex} style={styles.featureRow}>
                        <View style={styles.checkmarkContainer}>
                          <Ionicons name="checkmark-circle" size={18} color="#10b981" />
                        </View>
                        <Text style={styles.featureText}>{feature}</Text>
                      </View>
                    ))}
                  </View>
                )}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Razorpay Payment Modal */}
      <RazorpayCheckout
        tier={selectedTier}
        package={selectedPackage}
        visible={showPayment}
        onClose={() => setShowPayment(false)}
        onSuccess={handlePaymentSuccess}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerGradient: {
    paddingBottom: 30,
  },
  headerContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.9)',
    fontWeight: '500',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingTop: 10,
    paddingBottom: 40,
  },
  cardsContainer: {
    gap: 24,
  },
  cardWrapper: {
    position: 'relative',
  },
  recommendedBadge: {
    position: 'absolute',
    top: -12,
    left: 20,
    right: 20,
    zIndex: 10,
    alignItems: 'center',
  },
  recommendedGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  recommendedText: {
    color: '#ffffff',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  card: {
    borderRadius: 24,
    padding: 24,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#f3f4f6',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  planIcon: {
    fontSize: 32,
  },
  cardTitleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
    letterSpacing: 0.3,
    textAlign: 'center',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#6b7280',
    fontWeight: '500',
  },
  pricingOptions: {
    gap: 12,
    marginBottom: 20,
  },
  priceOption: {
    backgroundColor: '#f9fafb',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    position: 'relative',
  },
  popularBadge: {
    position: 'absolute',
    top: -10,
    right: 16,
    backgroundColor: 'rgba(255,100,100,0.9)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  popularText: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceInfo: {
    flex: 1,
  },
  duration: {
    fontSize: 13,
    color: '#6b7280',
    marginBottom: 6,
    fontWeight: '500',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  priceCurrency: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginTop: 4,
  },
  price: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111827',
    letterSpacing: -1,
  },
  savings: {
    fontSize: 12,
    color: '#10b981',
    fontWeight: '600',
  },
  selectButton: {
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  selectButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  selectButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  features: {
    gap: 10,
    backgroundColor: '#f9fafb',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  checkmarkContainer: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  featureText: {
    fontSize: 14,
    color: '#374151',
    flex: 1,
    fontWeight: '500',
  },
  footer: {
    marginTop: 32,
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    alignItems: 'center',
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  footerText: {
    fontSize: 13,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 20,
    fontWeight: '500',
  },
  // Pro Status Banner Styles
  proStatusBanner: {
    backgroundColor: '#eff6ff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#3b82f6',
  },
  proStatusContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  proStatusBadge: {
    fontSize: 24,
  },
  proStatusText: {
    flex: 1,
  },
  proStatusTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e40af',
    marginBottom: 2,
  },
  proStatusSubtitle: {
    fontSize: 14,
    color: '#3b82f6',
  },
  // Current Plan Card Styles
  currentPlanCard: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 20,
    marginTop: 40,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  planCardLabel: {
    fontSize: 12,
    color: '#9ca3af',
    marginBottom: 16,
  },
  planDetailsContainer: {
    marginBottom: 0,
  },
  planHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  planTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
  },
  activeBadge: {
    backgroundColor: '#dcfce7',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  activeBadgeText: {
    color: '#15803d',
    fontSize: 12,
    fontWeight: '500',
  },
  planDescription: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 12,
  },
  validityBox: {
    backgroundColor: '#f9fafb',
    padding: 16,
    borderRadius: 12,
  },
  validityHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  validityLabel: {
    fontSize: 12,
    color: '#6b7280',
    marginLeft: 8,
  },
  validityDate: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 4,
  },
  validityDays: {
    fontSize: 12,
    color: '#6b7280',
  },
  expiredHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  expiredLabel: {
    fontSize: 12,
    color: '#dc2626',
    fontWeight: '500',
    marginLeft: 8,
  },
  expiredText: {
    fontSize: 14,
    color: '#6b7280',
  },
  packageTypeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  packageTypeText: {
    fontSize: 12,
    color: '#6b7280',
    marginLeft: 4,
  },
  // Divider Styles
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    gap: 12,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#e5e7eb',
  },
  dividerText: {
    fontSize: 14,
    color: '#6b7280',
  },
});
