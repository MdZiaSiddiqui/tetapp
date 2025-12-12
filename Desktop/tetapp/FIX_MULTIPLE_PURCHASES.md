# Fix: Multiple Plan Purchase Bug

## Problem
When users purchase multiple plans (e.g., Paper 1 then Paper 2), the system **removes** previous access instead of **adding** to it.

**Example Bug:**
1. User buys "Plan Paper 1" → Gets Paper 1 access ✅
2. User buys "Plan Paper 2" → **LOSES Paper 1 access**, only has Paper 2 ❌

**Expected Behavior:**
1. User buys "Plan Paper 1" → Gets Paper 1 access ✅
2. User buys "Plan Paper 2" → **KEEPS Paper 1 access**, now has BOTH papers ✅

## Root Cause
The `grant_pro_access()` database function was **replacing** user access instead of **merging** it.

**Old Logic (Buggy):**
```sql
UPDATE user_profiles
SET pro_tier = tier_type,  -- REPLACES instead of merging
    pro_access_paper = access_papers  -- REPLACES instead of merging
```

**New Logic (Fixed):**
- Checks current plan
- Merges access intelligently:
  - `paper1 + paper2 = both`
  - `paper2 + paper1 = both`
  - `any + both = both`
  - `same + same = extends expiry`

## Solution

### Step 1: Apply Database Migration

You need to apply the fixed `grant_pro_access()` function to your Supabase database.

#### Option A: Using Supabase Dashboard (Recommended)

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Click **New Query**
4. Copy the contents of `supabase/migrations/fix_multiple_plan_purchases.sql`
5. Paste into the SQL editor
6. Click **Run**
7. Verify you see: ✅ Multiple plan purchase fix applied!

#### Option B: Using Supabase CLI

```bash
# Make sure you're in the project directory
cd /Users/mohdziasiddiqui/Desktop/tetapp

# Login to Supabase (if not already logged in)
npx supabase login

# Link to your project (if not already linked)
npx supabase link --project-ref YOUR_PROJECT_REF

# Apply the migration
npx supabase db push

# OR run the migration file directly
npx supabase db execute --file supabase/migrations/fix_multiple_plan_purchases.sql
```

#### Option C: Using psql (Advanced)

```bash
# Connect to your database
psql postgresql://postgres:[YOUR_PASSWORD]@[YOUR_PROJECT_REF].supabase.co:5432/postgres

# Run the migration file
\i supabase/migrations/fix_multiple_plan_purchases.sql

# Exit
\q
```

### Step 2: Verify the Fix

After applying the migration, test the fix:

1. **Test with a real purchase flow:**
   - User buys Paper 1 plan
   - Check database: `pro_tier` should be 'paper1'
   - User buys Paper 2 plan
   - Check database: `pro_tier` should be 'both' ✅
   - Check `pro_access_paper`: should be ['paper1', 'paper2'] ✅

2. **Test with SQL queries:**
   ```sql
   -- Create a test scenario
   -- (Replace 'your-user-uuid' with actual user ID)

   -- Simulate buying Paper 1
   SELECT grant_pro_access(
     'your-user-uuid'::UUID,
     'paper1',
     '1_year',
     'test_payment_1',
     'test_order_1'
   );

   -- Check status (should be paper1)
   SELECT pro_tier, pro_access_paper FROM user_profiles WHERE id = 'your-user-uuid';

   -- Simulate buying Paper 2
   SELECT grant_pro_access(
     'your-user-uuid'::UUID,
     'paper2',
     '1_year',
     'test_payment_2',
     'test_order_2'
   );

   -- Check status (should be 'both' now!)
   SELECT pro_tier, pro_access_paper FROM user_profiles WHERE id = 'your-user-uuid';
   ```

### Step 3: Handle Existing Affected Users (Optional)

If you have users who were affected by this bug (lost access after purchasing second plan), you can manually restore their access:

```sql
-- Find users who might be affected
-- (Users with multiple payment records but only one plan)
SELECT
  u.id,
  u.email,
  u.pro_tier,
  u.pro_access_paper,
  COUNT(p.id) as payment_count,
  ARRAY_AGG(DISTINCT p.tier) as purchased_tiers
FROM user_profiles u
JOIN payments p ON p.user_id = u.id
WHERE p.status = 'captured'
GROUP BY u.id, u.email, u.pro_tier, u.pro_access_paper
HAVING COUNT(p.id) > 1;

-- Manually fix a specific user who should have 'both'
-- (Replace 'user-uuid' with actual user ID)
UPDATE user_profiles
SET
  pro_tier = 'both',
  pro_access_paper = ARRAY['paper1', 'paper2'],
  updated_at = NOW()
WHERE id = 'user-uuid';
```

## New Behavior After Fix

### Scenario 1: Paper 1 + Paper 2
```
Purchase 1: Paper 1 (3 months)
  ↓
  pro_tier: 'paper1'
  pro_access_paper: ['paper1']
  expiry: 3 months from now

Purchase 2: Paper 2 (1 year)
  ↓
  pro_tier: 'both' ✨ UPGRADED
  pro_access_paper: ['paper1', 'paper2'] ✨ MERGED
  expiry: 1 year from now (later date kept)
```

### Scenario 2: Same Plan Renewal
```
Purchase 1: Paper 1 (1 year)
  ↓
  pro_tier: 'paper1'
  expiry: 1 year from now

Purchase 2: Paper 1 (1 year)
  ↓
  pro_tier: 'paper1'
  expiry: 2 years from now ✨ EXTENDED
```

### Scenario 3: Upgrade to Both Plan
```
Current: Paper 1 (6 months remaining)
  ↓
  pro_tier: 'paper1'
  expiry: 6 months from now

Purchase: Both plan (3 months)
  ↓
  pro_tier: 'both' ✨ UPGRADED
  pro_access_paper: ['paper1', 'paper2']
  expiry: 6 months from now ✨ KEPT LONGER EXPIRY
```

## Testing Checklist

- [ ] Migration applied successfully
- [ ] Function replaced without errors
- [ ] Test purchase: Paper 1 only
- [ ] Test purchase: Paper 1 then Paper 2 (should upgrade to 'both')
- [ ] Test purchase: Paper 2 then Paper 1 (should upgrade to 'both')
- [ ] Test purchase: Same plan twice (should extend expiry)
- [ ] Test purchase: Both plan (should work correctly)
- [ ] Verify `useProAccess` hook shows correct access
- [ ] Verify payment success screen shows correct tier
- [ ] Check affected users (if any) and restore access

## Rollback (If Needed)

If you need to rollback to the old function:

```sql
-- Restore old function (NOT RECOMMENDED - it has the bug)
-- Only use this if the new function causes issues
-- Run: supabase/migrations/add_pro_access_fields.sql lines 126-175
```

## Questions?

If you encounter any issues:
1. Check Supabase logs for function errors
2. Verify the migration ran successfully
3. Test with a test user account first
4. Check the `payments` table to see purchase history

## Summary

✅ **Fixed:** Multiple purchases now accumulate instead of replacing
✅ **Benefit:** Users get full value from multiple purchases
✅ **Smart Merging:** Automatically upgrades to 'both' when applicable
✅ **Expiry Handling:** Extends or keeps longer expiry date
