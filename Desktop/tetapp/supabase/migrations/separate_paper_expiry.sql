-- ============================================
-- MIGRATION: Separate Paper 1 and Paper 2 Expiry Dates
-- Issue: Plans were being merged into 'both' with combined expiry
-- Fix: Each paper now has its own independent expiry date
-- ============================================

-- ============================================
-- 1. ADD NEW COLUMNS FOR SEPARATE EXPIRIES
-- ============================================

ALTER TABLE public.user_profiles ADD COLUMN IF NOT EXISTS paper1_expires_at TIMESTAMPTZ;
ALTER TABLE public.user_profiles ADD COLUMN IF NOT EXISTS paper2_expires_at TIMESTAMPTZ;

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_user_profiles_paper1_expires_at ON public.user_profiles(paper1_expires_at);
CREATE INDEX IF NOT EXISTS idx_user_profiles_paper2_expires_at ON public.user_profiles(paper2_expires_at);

-- ============================================
-- 2. MIGRATE EXISTING DATA
-- ============================================

-- Migrate existing users based on their current tier
UPDATE public.user_profiles
SET paper1_expires_at = pro_expires_at
WHERE pro_tier IN ('paper1', 'both') AND pro_expires_at IS NOT NULL;

UPDATE public.user_profiles
SET paper2_expires_at = pro_expires_at
WHERE pro_tier IN ('paper2', 'both') AND pro_expires_at IS NOT NULL;

-- ============================================
-- 3. UPDATE grant_pro_access FUNCTION
-- ============================================

DROP FUNCTION IF EXISTS public.grant_pro_access(UUID, TEXT, TEXT, TEXT, TEXT);

CREATE OR REPLACE FUNCTION public.grant_pro_access(
  user_uuid UUID,
  tier_type TEXT,
  package_duration TEXT,
  payment_id_param TEXT,
  order_id_param TEXT
)
RETURNS VOID AS $$
DECLARE
  duration_interval INTERVAL;
  current_paper1_expiry TIMESTAMPTZ;
  current_paper2_expiry TIMESTAMPTZ;
  new_paper1_expiry TIMESTAMPTZ;
  new_paper2_expiry TIMESTAMPTZ;
  final_tier TEXT;
  final_access_papers TEXT[];
BEGIN
  -- Calculate duration interval based on package
  IF package_duration = '3_months' THEN
    duration_interval := INTERVAL '3 months';
  ELSIF package_duration = '1_year' THEN
    duration_interval := INTERVAL '1 year';
  ELSE
    RAISE EXCEPTION 'Invalid package duration: %', package_duration;
  END IF;

  -- Get current expiry dates
  SELECT
    paper1_expires_at,
    paper2_expires_at
  INTO
    current_paper1_expiry,
    current_paper2_expiry
  FROM public.user_profiles
  WHERE id = user_uuid;

  -- Initialize with current values
  new_paper1_expiry := current_paper1_expiry;
  new_paper2_expiry := current_paper2_expiry;

  -- ============================================
  -- UPDATE EXPIRY BASED ON PURCHASED TIER
  -- ============================================

  IF tier_type = 'paper1' THEN
    -- Buying Paper 1 only
    IF current_paper1_expiry IS NOT NULL AND current_paper1_expiry > NOW() THEN
      -- Extend from current expiry
      new_paper1_expiry := current_paper1_expiry + duration_interval;
    ELSE
      -- New subscription or expired
      new_paper1_expiry := NOW() + duration_interval;
    END IF;

  ELSIF tier_type = 'paper2' THEN
    -- Buying Paper 2 only
    IF current_paper2_expiry IS NOT NULL AND current_paper2_expiry > NOW() THEN
      -- Extend from current expiry
      new_paper2_expiry := current_paper2_expiry + duration_interval;
    ELSE
      -- New subscription or expired
      new_paper2_expiry := NOW() + duration_interval;
    END IF;

  ELSIF tier_type = 'both' THEN
    -- Buying Both papers
    IF current_paper1_expiry IS NOT NULL AND current_paper1_expiry > NOW() THEN
      new_paper1_expiry := current_paper1_expiry + duration_interval;
    ELSE
      new_paper1_expiry := NOW() + duration_interval;
    END IF;

    IF current_paper2_expiry IS NOT NULL AND current_paper2_expiry > NOW() THEN
      new_paper2_expiry := current_paper2_expiry + duration_interval;
    ELSE
      new_paper2_expiry := NOW() + duration_interval;
    END IF;

  ELSE
    RAISE EXCEPTION 'Invalid tier type: %', tier_type;
  END IF;

  -- ============================================
  -- DETERMINE FINAL TIER AND ACCESS PAPERS
  -- ============================================

  -- Derive tier from which papers are active
  IF new_paper1_expiry > NOW() AND new_paper2_expiry > NOW() THEN
    final_tier := 'both';
    final_access_papers := ARRAY['paper1', 'paper2'];
  ELSIF new_paper1_expiry > NOW() THEN
    final_tier := 'paper1';
    final_access_papers := ARRAY['paper1'];
  ELSIF new_paper2_expiry > NOW() THEN
    final_tier := 'paper2';
    final_access_papers := ARRAY['paper2'];
  ELSE
    final_tier := 'free';
    final_access_papers := ARRAY[]::TEXT[];
  END IF;

  -- ============================================
  -- UPDATE USER PROFILE
  -- ============================================

  UPDATE public.user_profiles
  SET
    -- New separate expiry columns
    paper1_expires_at = new_paper1_expiry,
    paper2_expires_at = new_paper2_expiry,
    -- Keep legacy columns for backward compatibility
    pro_tier = final_tier,
    pro_access_paper = final_access_papers,
    pro_package_type = package_duration,
    pro_purchased_at = NOW(),
    pro_expires_at = GREATEST(COALESCE(new_paper1_expiry, '1970-01-01'::timestamptz), COALESCE(new_paper2_expiry, '1970-01-01'::timestamptz)),
    razorpay_payment_id = payment_id_param,
    razorpay_order_id = order_id_param,
    tier = CASE WHEN final_tier = 'free' THEN 'free' ELSE 'pro' END,
    subscription_status = CASE WHEN final_tier = 'free' THEN 'expired' ELSE 'active' END,
    subscription_start_date = NOW(),
    subscription_end_date = GREATEST(COALESCE(new_paper1_expiry, '1970-01-01'::timestamptz), COALESCE(new_paper2_expiry, '1970-01-01'::timestamptz)),
    updated_at = NOW()
  WHERE id = user_uuid;

  -- Log the upgrade for debugging
  RAISE NOTICE 'Pro access granted: user=%, tier_purchased=%, paper1_expiry=%, paper2_expiry=%, final_tier=%',
    user_uuid, tier_type, new_paper1_expiry, new_paper2_expiry, final_tier;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================
-- 4. UPDATE has_paper_access FUNCTION
-- ============================================

CREATE OR REPLACE FUNCTION public.has_paper_access(
  user_uuid UUID,
  paper_num INTEGER -- 1 or 2
)
RETURNS BOOLEAN AS $$
DECLARE
  paper1_expiry TIMESTAMPTZ;
  paper2_expiry TIMESTAMPTZ;
BEGIN
  SELECT paper1_expires_at, paper2_expires_at
  INTO paper1_expiry, paper2_expiry
  FROM public.user_profiles
  WHERE id = user_uuid;

  IF paper_num = 1 THEN
    RETURN paper1_expiry IS NOT NULL AND paper1_expiry > NOW();
  ELSIF paper_num = 2 THEN
    RETURN paper2_expiry IS NOT NULL AND paper2_expiry > NOW();
  ELSE
    RETURN FALSE;
  END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================
-- 5. UPDATE user_pro_status VIEW
-- ============================================

DROP VIEW IF EXISTS public.user_pro_status;

CREATE OR REPLACE VIEW public.user_pro_status AS
SELECT
  id as user_id,
  email,
  full_name,
  -- Derive pro_tier from active papers
  CASE
    WHEN paper1_expires_at > NOW() AND paper2_expires_at > NOW() THEN 'both'
    WHEN paper1_expires_at > NOW() THEN 'paper1'
    WHEN paper2_expires_at > NOW() THEN 'paper2'
    ELSE 'free'
  END as pro_tier,
  pro_access_paper,
  pro_package_type,
  pro_purchased_at,
  pro_expires_at,
  -- Separate expiry dates
  paper1_expires_at,
  paper2_expires_at,
  -- Days remaining for each paper
  CASE
    WHEN paper1_expires_at IS NULL THEN NULL
    WHEN paper1_expires_at < NOW() THEN 0
    ELSE EXTRACT(DAY FROM (paper1_expires_at - NOW()))::INTEGER
  END as paper1_days_remaining,
  CASE
    WHEN paper2_expires_at IS NULL THEN NULL
    WHEN paper2_expires_at < NOW() THEN 0
    ELSE EXTRACT(DAY FROM (paper2_expires_at - NOW()))::INTEGER
  END as paper2_days_remaining,
  -- Legacy fields
  CASE
    WHEN paper1_expires_at > NOW() OR paper2_expires_at > NOW() THEN 'active'
    WHEN paper1_expires_at IS NOT NULL OR paper2_expires_at IS NOT NULL THEN 'expired'
    ELSE 'inactive'
  END as pro_status,
  CASE
    WHEN pro_expires_at IS NULL THEN NULL
    WHEN pro_expires_at < NOW() THEN 0
    ELSE EXTRACT(DAY FROM (pro_expires_at - NOW()))::INTEGER
  END as days_remaining,
  razorpay_payment_id,
  created_at,
  updated_at
FROM public.user_profiles;

-- Grant access to view
GRANT SELECT ON public.user_pro_status TO authenticated;

-- ============================================
-- 6. UPDATE check_pro_expiry FUNCTION
-- ============================================

CREATE OR REPLACE FUNCTION public.check_pro_expiry()
RETURNS VOID AS $$
BEGIN
  -- Update users whose both papers have expired
  UPDATE public.user_profiles
  SET
    pro_tier = CASE
      WHEN paper1_expires_at > NOW() AND paper2_expires_at > NOW() THEN 'both'
      WHEN paper1_expires_at > NOW() THEN 'paper1'
      WHEN paper2_expires_at > NOW() THEN 'paper2'
      ELSE 'free'
    END,
    pro_access_paper = CASE
      WHEN paper1_expires_at > NOW() AND paper2_expires_at > NOW() THEN ARRAY['paper1', 'paper2']
      WHEN paper1_expires_at > NOW() THEN ARRAY['paper1']
      WHEN paper2_expires_at > NOW() THEN ARRAY['paper2']
      ELSE ARRAY[]::TEXT[]
    END,
    tier = CASE
      WHEN paper1_expires_at > NOW() OR paper2_expires_at > NOW() THEN 'pro'
      ELSE 'free'
    END,
    subscription_status = CASE
      WHEN paper1_expires_at > NOW() OR paper2_expires_at > NOW() THEN 'active'
      ELSE 'expired'
    END,
    updated_at = NOW()
  WHERE
    (paper1_expires_at IS NOT NULL OR paper2_expires_at IS NOT NULL);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================
-- 7. VERIFICATION
-- ============================================

DO $$
BEGIN
  RAISE NOTICE '===========================================';
  RAISE NOTICE 'MIGRATION: Separate Paper Expiry Dates';
  RAISE NOTICE '===========================================';
  RAISE NOTICE 'Added: paper1_expires_at column';
  RAISE NOTICE 'Added: paper2_expires_at column';
  RAISE NOTICE 'Updated: grant_pro_access function';
  RAISE NOTICE 'Updated: has_paper_access function';
  RAISE NOTICE 'Updated: user_pro_status view';
  RAISE NOTICE 'Updated: check_pro_expiry function';
  RAISE NOTICE '===========================================';
  RAISE NOTICE 'NEW BEHAVIOR:';
  RAISE NOTICE '- Paper 1 and Paper 2 have independent expiry dates';
  RAISE NOTICE '- Buying Paper 1 only affects paper1_expires_at';
  RAISE NOTICE '- Buying Paper 2 only affects paper2_expires_at';
  RAISE NOTICE '- Buying Both extends both expiry dates';
  RAISE NOTICE '- pro_tier is now derived from which papers are active';
  RAISE NOTICE '===========================================';
END $$;

-- ============================================
-- NOTES
-- ============================================

/*
EXAMPLE SCENARIOS:

Scenario 1: User buys Paper 1 (3 months)
- paper1_expires_at = NOW + 3 months
- paper2_expires_at = NULL
- pro_tier = 'paper1'

Scenario 2: Same user buys Paper 2 (1 year)
- paper1_expires_at = (unchanged, still 3 months from original purchase)
- paper2_expires_at = NOW + 1 year
- pro_tier = 'both' (both papers active)

Scenario 3: Paper 1 expires (after 3 months)
- paper1_expires_at = (past date)
- paper2_expires_at = (still ~9 months remaining)
- pro_tier = 'paper2' (only Paper 2 active)

Scenario 4: User renews Paper 1 (1 year)
- paper1_expires_at = NOW + 1 year (fresh start since it was expired)
- paper2_expires_at = (unchanged)
- pro_tier = 'both' (both papers active again)

Scenario 5: User buys Both plan (3 months) while both are active
- paper1_expires_at = current_paper1_expiry + 3 months (extended)
- paper2_expires_at = current_paper2_expiry + 3 months (extended)
- pro_tier = 'both'
*/
