import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

type PricingPlan = {
  title: string;
  subtitle?: string;
  plans: {
    duration: string;
    price: string;
    popular?: boolean;
  }[];
  features?: string[];
};

const pricingData: PricingPlan[] = [
  {
    title: 'TS-TET Paper-1',
    subtitle: 'Foundation Level',
    plans: [
      { duration: '3 Months', price: '499' },
      { duration: '1 Year', price: '799', popular: true },
    ],
    features: ['Complete Paper-1 syllabus', 'Practice tests', 'Progress tracking'],
  },
  {
    title: 'TS-TET Paper-2',
    subtitle: 'Advanced Level',
    plans: [
      { duration: '3 Months', price: '699' },
      { duration: '1 Year', price: '999', popular: true },
    ],
    features: ['Complete Paper-2 syllabus', 'Practice tests', 'Progress tracking'],
  },
  {
    title: 'TS-TET Paper-1 + Paper-2',
    subtitle: 'Complete Bundle',
    plans: [
      { duration: '3 Months', price: '999' },
      { duration: '1 Year', price: '1499', popular: true },
    ],
    features: ['Both Paper-1 & Paper-2', 'All practice tests', 'Priority support', 'Best value'],
  },
];

export default function PricingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Choose Your Plan</Text>
          <Text style={styles.headerSubtitle}>
            Select the best plan for your TET preparation
          </Text>
        </View>

        {/* Pricing Cards */}
        <View style={styles.cardsContainer}>
          {pricingData.map((plan, index) => (
            <View key={index} style={styles.card}>
              {/* Card Header */}
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>{plan.title}</Text>
                {plan.subtitle && (
                  <Text style={styles.cardSubtitle}>{plan.subtitle}</Text>
                )}
              </View>

              {/* Pricing Options */}
              <View style={styles.pricingOptions}>
                {plan.plans.map((option, optionIndex) => (
                  <View
                    key={optionIndex}
                    style={[
                      styles.priceOption,
                      option.popular && styles.popularOption
                    ]}
                  >
                    {option.popular && (
                      <View style={styles.popularBadge}>
                        <Text style={styles.popularText}>BEST VALUE</Text>
                      </View>
                    )}
                    <View style={styles.priceRow}>
                      <View>
                        <Text style={styles.duration}>{option.duration}</Text>
                        <Text style={styles.price}>₹{option.price}/-</Text>
                      </View>
                      <TouchableOpacity style={styles.selectButton}>
                        <Text style={styles.selectButtonText}>Select</Text>
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
                      <Text style={styles.checkmark}>✓</Text>
                      <Text style={styles.featureText}>{feature}</Text>
                    </View>
                  ))}
                </View>
              )}
            </View>
          ))}
        </View>

        {/* Footer Note */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            All plans include access to comprehensive study materials and mock tests
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 32,
  },
  header: {
    marginBottom: 24,
    paddingTop: 8,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#6b7280',
  },
  cardsContainer: {
    gap: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardHeader: {
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    paddingBottom: 12,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#6b7280',
  },
  pricingOptions: {
    gap: 12,
    marginBottom: 16,
  },
  priceOption: {
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    padding: 16,
    borderWidth: 2,
    borderColor: '#e5e7eb',
  },
  popularOption: {
    backgroundColor: '#eff6ff',
    borderColor: '#3b82f6',
  },
  popularBadge: {
    position: 'absolute',
    top: -10,
    right: 12,
    backgroundColor: '#3b82f6',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  popularText: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  duration: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 4,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  selectButton: {
    backgroundColor: '#3b82f6',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 8,
  },
  selectButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  features: {
    gap: 8,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  checkmark: {
    fontSize: 16,
    color: '#10b981',
    fontWeight: 'bold',
  },
  featureText: {
    fontSize: 14,
    color: '#4b5563',
  },
  footer: {
    marginTop: 24,
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#3b82f6',
  },
  footerText: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 20,
  },
});
