import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useProAccess } from '../hooks/useProAccess';
import { TIER_NAMES } from '../lib/pricing-config';

interface PaywallGateProps {
  requiredPaper: 1 | 2;
  children: React.ReactNode;
  fallbackMessage?: string;
}

/**
 * PaywallGate Component
 *
 * Wraps premium content and shows upgrade prompt if user doesn't have access.
 *
 * Usage:
 * ```tsx
 * <PaywallGate requiredPaper={1}>
 *   <PremiumContentComponent />
 * </PaywallGate>
 * ```
 */
export default function PaywallGate({
  requiredPaper,
  children,
  fallbackMessage,
}: PaywallGateProps) {
  const router = useRouter();
  const { hasPaper1Access, hasPaper2Access, loading, tier } = useProAccess();

  // Determine if user has access
  const hasAccess = requiredPaper === 1 ? hasPaper1Access : hasPaper2Access;

  // Show loading state
  if (loading) {
    return (
      <View style={styles.container}>
        <View style={styles.loadingCard}>
          <Text style={styles.loadingText}>Loading access status...</Text>
        </View>
      </View>
    );
  }

  // If user has access, show content
  if (hasAccess) {
    return <>{children}</>;
  }

  // Otherwise, show paywall
  const paperName = requiredPaper === 1 ? 'Paper-1' : 'Paper-2';
  const recommendedTier = tier === 'free' ? (requiredPaper === 1 ? 'paper1' : 'paper2') : 'both';

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#faf5ff', '#f3e8ff', '#ede9fe']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.paywallCard}
      >
        {/* Lock Icon */}
        <View style={styles.iconContainer}>
          <View style={styles.iconCircle}>
            <Ionicons name="lock-closed" size={32} color="#7c3aed" />
          </View>
        </View>

        {/* Heading */}
        <Text style={styles.heading}>Unlock {paperName}</Text>

        {/* Message */}
        <Text style={styles.message}>
          {fallbackMessage ||
            `This content is part of TS-TET ${paperName}. Upgrade your plan to access this and all other ${paperName} content.`}
        </Text>

        {/* Features */}
        <View style={styles.featuresContainer}>
          <FeatureItem text="Complete syllabus coverage" />
          <FeatureItem text="Unlimited practice tests" />
          <FeatureItem text="Detailed solutions & explanations" />
          <FeatureItem text="Progress tracking & analytics" />
        </View>

        {/* Upgrade Button */}
        <TouchableOpacity
          style={styles.upgradeButton}
          activeOpacity={1}
          onPress={() => router.push('/(tabs)/pricing')}
        >
          <LinearGradient
            colors={['#7c3aed', '#6d28d9']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradientButton}
          >
            <Text style={styles.buttonText}>View Plans & Pricing</Text>
            <Ionicons name="arrow-forward" size={20} color="white" />
          </LinearGradient>
        </TouchableOpacity>

        {/* Current Plan Info */}
        {tier !== 'free' && (
          <View style={styles.currentPlanInfo}>
            <Ionicons name="information-circle-outline" size={16} color="#6b7280" />
            <Text style={styles.currentPlanText}>
              Current plan: {TIER_NAMES[tier]}
            </Text>
          </View>
        )}
      </LinearGradient>
    </View>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <View style={styles.featureItem}>
      <View style={styles.checkCircle}>
        <Ionicons name="checkmark" size={14} color="#10b981" />
      </View>
      <Text style={styles.featureText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  loadingCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 16,
    color: '#6b7280',
  },
  paywallCard: {
    borderRadius: 24,
    padding: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  iconContainer: {
    marginBottom: 24,
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#7c3aed',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 12,
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 24,
  },
  featuresContainer: {
    width: '100%',
    marginBottom: 24,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  checkCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#d1fae5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  featureText: {
    fontSize: 15,
    color: '#374151',
    flex: 1,
  },
  upgradeButton: {
    width: '100%',
    marginBottom: 16,
  },
  gradientButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    gap: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  currentPlanInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    gap: 6,
  },
  currentPlanText: {
    fontSize: 13,
    color: '#6b7280',
  },
});
