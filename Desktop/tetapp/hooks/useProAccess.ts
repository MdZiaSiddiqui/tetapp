import { useEffect, useState } from 'react';
import { useAuth } from '../lib/auth-context';
import { supabase } from '../lib/supabase';
import { UserProStatus } from '../lib/types/database.types';
import { getTierPapers } from '../lib/pricing-config';

export interface ProAccessInfo {
  // Access status
  hasPaper1Access: boolean;
  hasPaper2Access: boolean;
  isProActive: boolean;
  isFree: boolean;

  // Tier information
  tier: 'free' | 'paper1' | 'paper2' | 'both';
  accessiblePapers: number[]; // [1, 2]

  // Subscription details (legacy - combined)
  expiresAt: Date | null;
  daysRemaining: number | null;
  packageType: '3_months' | '1_year' | null;
  purchasedAt: Date | null;

  // Separate paper expiry dates
  paper1ExpiresAt: Date | null;
  paper2ExpiresAt: Date | null;
  paper1DaysRemaining: number | null;
  paper2DaysRemaining: number | null;

  // Loading and error states
  loading: boolean;
  error: string | null;

  // Refresh function
  refresh: () => Promise<void>;
}

/**
 * Hook to check user's pro access status
 * Returns comprehensive information about user's subscription and access rights
 */
export function useProAccess(): ProAccessInfo {
  const { user } = useAuth();
  const [proStatus, setProStatus] = useState<UserProStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProStatus = async () => {
    if (!user) {
      setProStatus(null);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const { data, error: fetchError } = await supabase
        .from('user_pro_status')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (fetchError) {
        // If view doesn't exist, fallback to user_profiles table
        const { data: profileData, error: profileError } = await supabase
          .from('user_profiles')
          .select('*')
          .eq('id', user.id)
          .single();

        if (profileError) {
          throw profileError;
        }

        // Calculate paper access based on separate expiry dates
        const paper1Active = profileData.paper1_expires_at && new Date(profileData.paper1_expires_at) > new Date();
        const paper2Active = profileData.paper2_expires_at && new Date(profileData.paper2_expires_at) > new Date();

        // Derive tier from which papers are active
        let derivedTier: 'free' | 'paper1' | 'paper2' | 'both' = 'free';
        if (paper1Active && paper2Active) {
          derivedTier = 'both';
        } else if (paper1Active) {
          derivedTier = 'paper1';
        } else if (paper2Active) {
          derivedTier = 'paper2';
        }

        // Transform profile data to UserProStatus format
        const transformedData: UserProStatus = {
          user_id: profileData.id,
          email: profileData.email,
          full_name: profileData.full_name,
          pro_tier: derivedTier,
          pro_access_paper: profileData.pro_access_paper || [],
          pro_package_type: profileData.pro_package_type,
          pro_purchased_at: profileData.pro_purchased_at,
          pro_expires_at: profileData.pro_expires_at,
          pro_status: paper1Active || paper2Active ? 'active' : profileData.pro_expires_at ? 'expired' : 'inactive',
          days_remaining: profileData.pro_expires_at
            ? Math.floor((new Date(profileData.pro_expires_at).getTime() - Date.now()) / (1000 * 60 * 60 * 24))
            : null,
          // Separate paper expiry dates
          paper1_expires_at: profileData.paper1_expires_at,
          paper2_expires_at: profileData.paper2_expires_at,
          paper1_days_remaining: profileData.paper1_expires_at
            ? Math.max(0, Math.floor((new Date(profileData.paper1_expires_at).getTime() - Date.now()) / (1000 * 60 * 60 * 24)))
            : null,
          paper2_days_remaining: profileData.paper2_expires_at
            ? Math.max(0, Math.floor((new Date(profileData.paper2_expires_at).getTime() - Date.now()) / (1000 * 60 * 60 * 24)))
            : null,
          razorpay_payment_id: profileData.razorpay_payment_id,
          created_at: profileData.created_at,
          updated_at: profileData.updated_at,
        };

        setProStatus(transformedData);
      } else {
        setProStatus(data);
      }
    } catch (err) {
      console.error('Error fetching pro status:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch pro status');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProStatus();
  }, [user?.id]);

  // Compute access information based on separate paper expiry dates
  const paper1ExpiresAt = proStatus?.paper1_expires_at ? new Date(proStatus.paper1_expires_at) : null;
  const paper2ExpiresAt = proStatus?.paper2_expires_at ? new Date(proStatus.paper2_expires_at) : null;
  const paper1DaysRemaining = proStatus?.paper1_days_remaining ?? null;
  const paper2DaysRemaining = proStatus?.paper2_days_remaining ?? null;

  // Determine paper access based on separate expiry dates
  const hasPaper1Access = paper1ExpiresAt ? paper1ExpiresAt > new Date() : false;
  const hasPaper2Access = paper2ExpiresAt ? paper2ExpiresAt > new Date() : false;

  // Derive tier from which papers are active
  let tier: 'free' | 'paper1' | 'paper2' | 'both' = 'free';
  if (hasPaper1Access && hasPaper2Access) {
    tier = 'both';
  } else if (hasPaper1Access) {
    tier = 'paper1';
  } else if (hasPaper2Access) {
    tier = 'paper2';
  }

  const isProActive = hasPaper1Access || hasPaper2Access;
  const isFree = !isProActive;

  const accessiblePapers = isProActive ? getTierPapers(tier) : [];

  // Legacy combined expiry (max of both)
  const expiresAt = proStatus?.pro_expires_at ? new Date(proStatus.pro_expires_at) : null;
  const purchasedAt = proStatus?.pro_purchased_at ? new Date(proStatus.pro_purchased_at) : null;
  const daysRemaining = proStatus?.days_remaining ?? null;
  const packageType = proStatus?.pro_package_type || null;

  return {
    // Access status
    hasPaper1Access,
    hasPaper2Access,
    isProActive,
    isFree,

    // Tier information
    tier,
    accessiblePapers,

    // Subscription details (legacy - combined)
    expiresAt,
    daysRemaining,
    packageType,
    purchasedAt,

    // Separate paper expiry dates
    paper1ExpiresAt,
    paper2ExpiresAt,
    paper1DaysRemaining,
    paper2DaysRemaining,

    // Loading and error states
    loading,
    error,

    // Refresh function
    refresh: fetchProStatus,
  };
}

/**
 * Hook to check if user can access a specific paper
 * @param paperNumber - 1 or 2
 */
export function usePaperAccess(paperNumber: 1 | 2): {
  hasAccess: boolean;
  loading: boolean;
  tier: 'free' | 'paper1' | 'paper2' | 'both';
} {
  const { hasPaper1Access, hasPaper2Access, loading, tier } = useProAccess();

  const hasAccess = paperNumber === 1 ? hasPaper1Access : hasPaper2Access;

  return {
    hasAccess,
    loading,
    tier,
  };
}

/**
 * Hook to check if user needs to upgrade to access a paper
 * @param paperNumber - 1 or 2
 */
export function useUpgradePrompt(paperNumber: 1 | 2): {
  showUpgrade: boolean;
  recommendedTier: 'paper1' | 'paper2' | 'both';
  currentTier: 'free' | 'paper1' | 'paper2' | 'both';
} {
  const { hasPaper1Access, hasPaper2Access, tier } = useProAccess();

  const hasAccess = paperNumber === 1 ? hasPaper1Access : hasPaper2Access;
  const showUpgrade = !hasAccess;

  // Determine recommended tier
  let recommendedTier: 'paper1' | 'paper2' | 'both' = paperNumber === 1 ? 'paper1' : 'paper2';

  // If user already has one paper, recommend both
  if (tier === 'paper1' && paperNumber === 2) {
    recommendedTier = 'both';
  } else if (tier === 'paper2' && paperNumber === 1) {
    recommendedTier = 'both';
  }

  return {
    showUpgrade,
    recommendedTier,
    currentTier: tier,
  };
}
