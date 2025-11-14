-- ============================================
-- TET App - Pro Access & Payment Integration
-- Migration: Add Pro Access Fields
-- ============================================

-- ============================================
-- 1. ADD PRO ACCESS FIELDS TO USER_PROFILES
-- ============================================

-- Add new columns for pro access management
ALTER TABLE public.user_profiles ADD COLUMN IF NOT EXISTS pro_tier TEXT NOT NULL DEFAULT 'free' CHECK (pro_tier IN ('free', 'paper1', 'paper2', 'both'));
ALTER TABLE public.user_profiles ADD COLUMN IF NOT EXISTS pro_access_paper TEXT[] DEFAULT ARRAY[]::TEXT[];
ALTER TABLE public.user_profiles ADD COLUMN IF NOT EXISTS pro_package_type TEXT CHECK (pro_package_type IN ('3_months', '1_year'));
ALTER TABLE public.user_profiles ADD COLUMN IF NOT EXISTS pro_purchased_at TIMESTAMPTZ;
ALTER TABLE public.user_profiles ADD COLUMN IF NOT EXISTS pro_expires_at TIMESTAMPTZ;
ALTER TABLE public.user_profiles ADD COLUMN IF NOT EXISTS razorpay_payment_id TEXT;
ALTER TABLE public.user_profiles ADD COLUMN IF NOT EXISTS razorpay_order_id TEXT;

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_user_profiles_pro_tier ON public.user_profiles(pro_tier);
CREATE INDEX IF NOT EXISTS idx_user_profiles_pro_expires_at ON public.user_profiles(pro_expires_at);
CREATE INDEX IF NOT EXISTS idx_user_profiles_razorpay_payment_id ON public.user_profiles(razorpay_payment_id);

-- ============================================
-- 2. CREATE PAYMENTS TABLE
-- ============================================

CREATE TABLE IF NOT EXISTS public.payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,

  -- Razorpay IDs
  order_id TEXT NOT NULL UNIQUE,
  payment_id TEXT UNIQUE,
  razorpay_signature TEXT,

  -- Purchase details
  tier TEXT NOT NULL CHECK (tier IN ('paper1', 'paper2', 'both')),
  package_type TEXT NOT NULL CHECK (package_type IN ('3_months', '1_year')),
  amount INTEGER NOT NULL, -- in paisa (e.g., 49900 for ₹499)
  currency TEXT NOT NULL DEFAULT 'INR',

  -- Payment status
  status TEXT NOT NULL DEFAULT 'created' CHECK (status IN ('created', 'authorized', 'captured', 'failed', 'refunded')),
  payment_method TEXT,

  -- Metadata
  notes JSONB DEFAULT '{}'::jsonb,

  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  paid_at TIMESTAMPTZ
);

-- Create indexes for payments table
CREATE INDEX IF NOT EXISTS idx_payments_user_id ON public.payments(user_id);
CREATE INDEX IF NOT EXISTS idx_payments_order_id ON public.payments(order_id);
CREATE INDEX IF NOT EXISTS idx_payments_payment_id ON public.payments(payment_id);
CREATE INDEX IF NOT EXISTS idx_payments_status ON public.payments(status);
CREATE INDEX IF NOT EXISTS idx_payments_created_at ON public.payments(created_at);

-- Add updated_at trigger for payments
DROP TRIGGER IF EXISTS update_payments_updated_at ON public.payments;
CREATE TRIGGER update_payments_updated_at
  BEFORE UPDATE ON public.payments
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- ============================================
-- 3. ENABLE RLS ON PAYMENTS TABLE
-- ============================================

ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;

-- Users can view their own payments
CREATE POLICY "Users can view own payments"
  ON public.payments
  FOR SELECT
  USING (auth.uid() = user_id);

-- Service role has full access (for Edge Functions)
CREATE POLICY "Service role has full access to payments"
  ON public.payments
  FOR ALL
  USING (auth.role() = 'service_role');

-- ============================================
-- 4. CREATE HELPER FUNCTIONS
-- ============================================

-- Function to check if user has pro access to a specific paper
CREATE OR REPLACE FUNCTION public.has_paper_access(
  user_uuid UUID,
  paper_num INTEGER -- 1 or 2
)
RETURNS BOOLEAN AS $$
DECLARE
  user_tier TEXT;
  expires_at TIMESTAMPTZ;
BEGIN
  SELECT pro_tier, pro_expires_at
  INTO user_tier, expires_at
  FROM public.user_profiles
  WHERE id = user_uuid;

  -- Check if pro access is active (not expired)
  IF expires_at IS NULL OR expires_at < NOW() THEN
    RETURN FALSE;
  END IF;

  -- Check tier access
  IF user_tier = 'both' THEN
    RETURN TRUE;
  ELSIF paper_num = 1 AND user_tier = 'paper1' THEN
    RETURN TRUE;
  ELSIF paper_num = 2 AND user_tier = 'paper2' THEN
    RETURN TRUE;
  ELSE
    RETURN FALSE;
  END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to upgrade user to pro tier
CREATE OR REPLACE FUNCTION public.grant_pro_access(
  user_uuid UUID,
  tier_type TEXT,
  package_duration TEXT,
  payment_id_param TEXT,
  order_id_param TEXT
)
RETURNS VOID AS $$
DECLARE
  expiry_date TIMESTAMPTZ;
  access_papers TEXT[];
BEGIN
  -- Calculate expiry date based on package
  IF package_duration = '3_months' THEN
    expiry_date := NOW() + INTERVAL '3 months';
  ELSIF package_duration = '1_year' THEN
    expiry_date := NOW() + INTERVAL '1 year';
  ELSE
    RAISE EXCEPTION 'Invalid package duration: %', package_duration;
  END IF;

  -- Determine which papers to grant access to
  IF tier_type = 'paper1' THEN
    access_papers := ARRAY['paper1'];
  ELSIF tier_type = 'paper2' THEN
    access_papers := ARRAY['paper2'];
  ELSIF tier_type = 'both' THEN
    access_papers := ARRAY['paper1', 'paper2'];
  ELSE
    RAISE EXCEPTION 'Invalid tier type: %', tier_type;
  END IF;

  -- Update user profile
  UPDATE public.user_profiles
  SET
    pro_tier = tier_type,
    pro_access_paper = access_papers,
    pro_package_type = package_duration,
    pro_purchased_at = NOW(),
    pro_expires_at = expiry_date,
    razorpay_payment_id = payment_id_param,
    razorpay_order_id = order_id_param,
    tier = 'pro', -- Update existing tier column to 'pro'
    subscription_status = 'active',
    subscription_start_date = NOW(),
    subscription_end_date = expiry_date,
    updated_at = NOW()
  WHERE id = user_uuid;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to check if pro access is expired
CREATE OR REPLACE FUNCTION public.check_pro_expiry()
RETURNS VOID AS $$
BEGIN
  -- Downgrade expired pro users to free
  UPDATE public.user_profiles
  SET
    pro_tier = 'free',
    tier = 'free',
    subscription_status = 'expired',
    updated_at = NOW()
  WHERE
    pro_expires_at IS NOT NULL
    AND pro_expires_at < NOW()
    AND pro_tier != 'free';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================
-- 5. CREATE VIEW FOR USER PRO STATUS
-- ============================================

CREATE OR REPLACE VIEW public.user_pro_status AS
SELECT
  id as user_id,
  email,
  full_name,
  pro_tier,
  pro_access_paper,
  pro_package_type,
  pro_purchased_at,
  pro_expires_at,
  CASE
    WHEN pro_expires_at IS NULL THEN NULL
    WHEN pro_expires_at < NOW() THEN 'expired'
    WHEN pro_expires_at > NOW() THEN 'active'
    ELSE 'inactive'
  END as pro_status,
  CASE
    WHEN pro_expires_at IS NULL THEN NULL
    ELSE EXTRACT(DAY FROM (pro_expires_at - NOW()))
  END as days_remaining,
  razorpay_payment_id,
  created_at,
  updated_at
FROM public.user_profiles;

-- Grant access to view
GRANT SELECT ON public.user_pro_status TO authenticated;

-- ============================================
-- 6. VERIFY MIGRATION
-- ============================================

DO $$
DECLARE
  payments_count INTEGER;
BEGIN
  SELECT COUNT(*) INTO payments_count FROM public.payments;

  RAISE NOTICE '✅ Pro access migration complete!';
  RAISE NOTICE '📊 Payments table created with % records', payments_count;
  RAISE NOTICE '🔒 RLS policies enabled';
  RAISE NOTICE '⚙️  Helper functions created';
END $$;

-- ============================================
-- NOTES
-- ============================================

/*
✅ Migration Complete:
- Added pro access fields to user_profiles
- Created payments table for transaction tracking
- Added helper functions for access control
- Enabled Row Level Security on payments
- Created user_pro_status view

🔒 Security:
- RLS enabled on payments table
- Service role access for Edge Functions
- Users can only view their own payments

⚙️ Helper Functions:
- has_paper_access(user_uuid, paper_num) - Check if user can access a paper
- grant_pro_access(...) - Upgrade user to pro tier
- check_pro_expiry() - Downgrade expired pro users

📊 Views:
- user_pro_status - Quick view of all user pro access details

🚀 Next Steps:
1. Create Supabase Edge Functions for payment processing
2. Integrate Razorpay in React Native app
3. Implement access control in app screens

📝 Sample Usage:
-- Check if user has Paper 1 access
SELECT public.has_paper_access('user-uuid-here', 1);

-- Grant pro access after successful payment
SELECT public.grant_pro_access(
  'user-uuid-here',
  'paper1',
  '3_months',
  'pay_xxx',
  'order_xxx'
);

-- View user pro status
SELECT * FROM public.user_pro_status WHERE user_id = 'user-uuid-here';

-- Check for expired pro users (run periodically)
SELECT public.check_pro_expiry();
*/
