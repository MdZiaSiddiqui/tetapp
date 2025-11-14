/**
 * Pricing Configuration for TET App Pro Access
 * All amounts are in paisa (smallest currency unit for INR)
 * 1 INR = 100 paisa
 */

export type TierType = 'paper1' | 'paper2' | 'both';
export type PackageType = '3_months' | '1_year';

export interface PricingOption {
  tier: TierType;
  package: PackageType;
  amount: number; // in paisa
  amountINR: number; // in rupees (for display)
  label: string; // e.g., '₹499'
  duration: string; // e.g., '3 Months'
  popular?: boolean;
}

// Pricing Configuration (based on existing notes.tsx pricing)
export const PRICING_CONFIG: Record<string, PricingOption> = {
  // Paper 1 Plans
  paper1_3_months: {
    tier: 'paper1',
    package: '3_months',
    amount: 49900, // ₹499
    amountINR: 499,
    label: '₹499',
    duration: '3 Months',
  },
  paper1_1_year: {
    tier: 'paper1',
    package: '1_year',
    amount: 79900, // ₹799
    amountINR: 799,
    label: '₹799',
    duration: '1 Year',
    popular: true,
  },

  // Paper 2 Plans
  paper2_3_months: {
    tier: 'paper2',
    package: '3_months',
    amount: 69900, // ₹699
    amountINR: 699,
    label: '₹699',
    duration: '3 Months',
  },
  paper2_1_year: {
    tier: 'paper2',
    package: '1_year',
    amount: 99900, // ₹999
    amountINR: 999,
    label: '₹999',
    duration: '1 Year',
    popular: true,
  },

  // Both Papers Bundle
  both_3_months: {
    tier: 'both',
    package: '3_months',
    amount: 99900, // ₹999
    amountINR: 999,
    label: '₹999',
    duration: '3 Months',
  },
  both_1_year: {
    tier: 'both',
    package: '1_year',
    amount: 149900, // ₹1499
    amountINR: 1499,
    label: '₹1499',
    duration: '1 Year',
    popular: true,
  },
};

/**
 * Get pricing for a specific tier and package
 */
export function getPricing(tier: TierType, packageType: PackageType): PricingOption {
  const key = `${tier}_${packageType}`;
  const pricing = PRICING_CONFIG[key];
  if (!pricing) {
    throw new Error(`Invalid pricing configuration: ${tier} - ${packageType}`);
  }
  return pricing;
}

/**
 * Get all pricing options for a specific tier
 */
export function getTierPricing(tier: TierType): PricingOption[] {
  return Object.values(PRICING_CONFIG).filter((p) => p.tier === tier);
}

/**
 * Tier Display Names
 */
export const TIER_NAMES: Record<TierType, string> = {
  paper1: 'TS-TET Paper-1',
  paper2: 'TS-TET Paper-2',
  both: 'TS-TET Paper-1 + Paper-2',
};

/**
 * Tier Descriptions
 */
export const TIER_DESCRIPTIONS: Record<TierType, string> = {
  paper1: 'Foundation Level - Complete Paper-1 access',
  paper2: 'Advanced Level - Complete Paper-2 access',
  both: 'Complete Bundle - Both Papers with Best Value',
};

/**
 * Tier Features
 */
export const TIER_FEATURES: Record<TierType, string[]> = {
  paper1: [
    'Complete Paper-1 syllabus',
    'Unlimited practice tests',
    'Progress tracking',
    'Detailed solutions',
    'All languages (English, Telugu, Urdu)',
  ],
  paper2: [
    'Complete Paper-2 syllabus',
    'Unlimited practice tests',
    'Progress tracking',
    'Detailed solutions',
    'All languages (English, Telugu, Urdu)',
  ],
  both: [
    'Both Paper-1 & Paper-2 access',
    'Unlimited practice tests',
    'Complete progress tracking',
    'Detailed solutions',
    'All languages (English, Telugu, Urdu)',
    'Priority support',
    'Best value - Save ₹299!',
  ],
};

/**
 * Get paper number from tier
 */
export function getTierPapers(tier: TierType): number[] {
  switch (tier) {
    case 'paper1':
      return [1];
    case 'paper2':
      return [2];
    case 'both':
      return [1, 2];
    default:
      return [];
  }
}

/**
 * Calculate savings for yearly package
 */
export function getYearlySavings(tier: TierType): number {
  const threeMonthPrice = getPricing(tier, '3_months').amountINR;
  const yearlyPrice = getPricing(tier, '1_year').amountINR;
  const fourTimesThreeMonth = threeMonthPrice * 4; // 12 months / 3 months = 4
  return fourTimesThreeMonth - yearlyPrice;
}

/**
 * Razorpay order notes generator
 */
export function generateOrderNotes(
  tier: TierType,
  packageType: PackageType,
  userEmail?: string
): Record<string, string> {
  return {
    tier,
    package: packageType,
    plan_name: TIER_NAMES[tier],
    duration: getPricing(tier, packageType).duration,
    customer_email: userEmail || '',
    app: 'TET Pro',
  };
}

/**
 * Currency Configuration
 */
export const CURRENCY = {
  code: 'INR',
  symbol: '₹',
  name: 'Indian Rupee',
};

/**
 * Razorpay Configuration
 */
export const RAZORPAY_CONFIG = {
  currency: CURRENCY.code,
  theme_color: '#3b82f6', // Blue theme matching app
  company_name: 'TS-TET Pro',
  description: 'TET Exam Preparation',
};
