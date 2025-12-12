-- ============================================
-- FIX: Multiple Plan Purchase Bug
-- Issue: Buying multiple plans removes previous access instead of adding
-- ============================================

-- Drop the old function
DROP FUNCTION IF EXISTS public.grant_pro_access(UUID, TEXT, TEXT, TEXT, TEXT);

-- Create improved function that accumulates purchases
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
  new_access_papers TEXT[];
  current_tier TEXT;
  current_expiry TIMESTAMPTZ;
  current_access_papers TEXT[];
  final_tier TEXT;
  final_access_papers TEXT[];
  final_expiry TIMESTAMPTZ;
BEGIN
  -- Get current user pro status
  SELECT
    pro_tier,
    pro_expires_at,
    pro_access_paper
  INTO
    current_tier,
    current_expiry,
    current_access_papers
  FROM public.user_profiles
  WHERE id = user_uuid;

  -- Calculate new expiry date based on package
  IF package_duration = '3_months' THEN
    expiry_date := NOW() + INTERVAL '3 months';
  ELSIF package_duration = '1_year' THEN
    expiry_date := NOW() + INTERVAL '1 year';
  ELSE
    RAISE EXCEPTION 'Invalid package duration: %', package_duration;
  END IF;

  -- Determine papers for new purchase
  IF tier_type = 'paper1' THEN
    new_access_papers := ARRAY['paper1'];
  ELSIF tier_type = 'paper2' THEN
    new_access_papers := ARRAY['paper2'];
  ELSIF tier_type = 'both' THEN
    new_access_papers := ARRAY['paper1', 'paper2'];
  ELSE
    RAISE EXCEPTION 'Invalid tier type: %', tier_type;
  END IF;

  -- ============================================
  -- LOGIC: Merge current and new access
  -- ============================================

  -- Initialize with current values (or defaults if first purchase)
  final_tier := COALESCE(current_tier, 'free');
  final_access_papers := COALESCE(current_access_papers, ARRAY[]::TEXT[]);
  final_expiry := COALESCE(current_expiry, NOW());

  -- Case 1: User has no active plan or plan expired
  IF current_tier IS NULL OR current_tier = 'free' OR current_expiry < NOW() THEN
    final_tier := tier_type;
    final_access_papers := new_access_papers;
    final_expiry := expiry_date;

  -- Case 2: User has paper1, buying paper2 (or vice versa) -> upgrade to 'both'
  ELSIF (current_tier = 'paper1' AND tier_type = 'paper2') OR
        (current_tier = 'paper2' AND tier_type = 'paper1') THEN
    final_tier := 'both';
    final_access_papers := ARRAY['paper1', 'paper2'];
    -- Use the later expiry date
    final_expiry := GREATEST(current_expiry, expiry_date);

  -- Case 3: User has paper1/paper2, buying 'both' -> upgrade to 'both'
  ELSIF (current_tier = 'paper1' OR current_tier = 'paper2') AND tier_type = 'both' THEN
    final_tier := 'both';
    final_access_papers := ARRAY['paper1', 'paper2'];
    -- Use the later expiry date
    final_expiry := GREATEST(current_expiry, expiry_date);

  -- Case 4: User has 'both', buying any plan -> extend expiry
  ELSIF current_tier = 'both' THEN
    final_tier := 'both';
    final_access_papers := ARRAY['paper1', 'paper2'];
    -- Extend expiry by adding duration to current expiry
    IF package_duration = '3_months' THEN
      final_expiry := GREATEST(current_expiry, NOW()) + INTERVAL '3 months';
    ELSIF package_duration = '1_year' THEN
      final_expiry := GREATEST(current_expiry, NOW()) + INTERVAL '1 year';
    END IF;

  -- Case 5: User buying same plan they already have -> extend expiry
  ELSIF current_tier = tier_type THEN
    final_tier := tier_type;
    final_access_papers := new_access_papers;
    -- Extend expiry by adding duration to current expiry
    IF package_duration = '3_months' THEN
      final_expiry := GREATEST(current_expiry, NOW()) + INTERVAL '3 months';
    ELSIF package_duration = '1_year' THEN
      final_expiry := GREATEST(current_expiry, NOW()) + INTERVAL '1 year';
    END IF;

  -- Default: Use new values (shouldn't reach here, but safe fallback)
  ELSE
    final_tier := tier_type;
    final_access_papers := new_access_papers;
    final_expiry := expiry_date;
  END IF;

  -- ============================================
  -- UPDATE user profile with merged access
  -- ============================================
  UPDATE public.user_profiles
  SET
    pro_tier = final_tier,
    pro_access_paper = final_access_papers,
    pro_package_type = package_duration,
    pro_purchased_at = NOW(),
    pro_expires_at = final_expiry,
    razorpay_payment_id = payment_id_param,
    razorpay_order_id = order_id_param,
    tier = 'pro',
    subscription_status = 'active',
    subscription_start_date = NOW(),
    subscription_end_date = final_expiry,
    updated_at = NOW()
  WHERE id = user_uuid;

  -- Log the upgrade for debugging
  RAISE NOTICE 'Pro access granted: user=%, old_tier=%, new_tier=%, final_tier=%, expiry=%',
    user_uuid, current_tier, tier_type, final_tier, final_expiry;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================
-- VERIFICATION
-- ============================================

DO $$
BEGIN
  RAISE NOTICE '✅ Multiple plan purchase fix applied!';
  RAISE NOTICE '📦 Users can now purchase multiple plans';
  RAISE NOTICE '🔄 Previous access will be preserved and merged';
  RAISE NOTICE '⏰ Expiry dates will be extended for renewals';
END $$;

-- ============================================
-- NOTES
-- ============================================

/*
🐛 BUG FIXED:
- Previously: Buying Paper 2 after Paper 1 would REPLACE Paper 1 access
- Now: Buying Paper 2 after Paper 1 will UPGRADE to 'both' plan

📋 NEW BEHAVIOR:
1. First purchase (Paper 1): User gets paper1 access
2. Second purchase (Paper 2): User upgraded to 'both', keeps paper1 access
3. Buying same plan again: Extends expiry date
4. Buying 'both' plan: Always upgrades to both papers

🔄 MERGE LOGIC:
- paper1 + paper2 → both
- paper2 + paper1 → both
- paper1/paper2 + both → both
- both + any → both (extends expiry)
- same plan + same plan → same plan (extends expiry)

⏰ EXPIRY HANDLING:
- Different plans: Use later expiry date
- Same plan renewal: Add duration to current expiry
- 'both' plan renewal: Add duration to current expiry

📝 EXAMPLE SCENARIOS:

Scenario 1: User buys Paper 1 (3 months), then Paper 2 (1 year)
- After Paper 1: tier='paper1', expiry=3 months from now
- After Paper 2: tier='both', expiry=1 year from now (later date)
- Result: User has both papers for 1 year

Scenario 2: User buys Paper 1 (1 year), then Paper 1 again (1 year)
- After first: tier='paper1', expiry=1 year from now
- After second: tier='paper1', expiry=2 years from now (extended)
- Result: Paper 1 access extended by 1 year

Scenario 3: User buys Paper 2 (1 year), then 'both' plan (3 months)
- After Paper 2: tier='paper2', expiry=1 year from now
- After 'both': tier='both', expiry=1 year from now (kept longer expiry)
- Result: User has both papers for 1 year (not downgraded to 3 months)
*/
