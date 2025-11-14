# 🔧 Apply Database Migration - Quick Fix

## ❌ Issue Found

The payment is failing because the database migration was **not applied**. The `payments` table and pro access fields don't exist yet.

---

## ✅ Solution - Apply Migration (5 minutes)

### **Option 1: Via Supabase Dashboard (RECOMMENDED)** ⭐

1. **Open Supabase SQL Editor**
   - Go to: https://supabase.com/dashboard/project/thvucacdrsexfcpkswpv/sql

2. **Copy Migration SQL**
   - Open file: `supabase/migrations/add_pro_access_fields.sql`
   - Select ALL content (Cmd+A)
   - Copy (Cmd+C)

3. **Paste and Run**
   - In Supabase SQL Editor, paste the SQL (Cmd+V)
   - Click **"Run"** button (or press Cmd+Enter)
   - Wait for completion (~5 seconds)

4. **Verify Success**
   - You should see: "Success. No rows returned"
   - In the left sidebar, refresh and check:
     - ✅ `payments` table exists
     - ✅ `user_profiles` has new columns: `pro_tier`, `pro_access_paper`, etc.

---

### **Option 2: Via psql CLI** (if you have database password)

```bash
# Copy migration to temp file
cat supabase/migrations/add_pro_access_fields.sql

# Connect to your database
psql "postgresql://postgres.[project-ref]:[password]@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"

# Then paste and run the SQL
```

---

## 🧪 Test After Migration

Run this to verify:

```bash
npx tsx scripts/test-edge-function.ts
```

You should see:
- ✅ Payments table exists
- ✅ User profiles has pro access fields

---

## 🚀 Then Test Payment

1. Run app: `npm start`
2. Go to **Notes** tab
3. Select any plan
4. Razorpay popup should open now! 🎉

---

## ⚡ Quick Checklist

- [ ] Open Supabase SQL Editor
- [ ] Copy migration SQL
- [ ] Paste and run in SQL Editor
- [ ] Verify tables exist
- [ ] Test payment flow in app

---

## 📞 Still Having Issues?

If you get errors when running the migration:

1. **Check if tables already exist**
   ```sql
   SELECT table_name FROM information_schema.tables
   WHERE table_schema = 'public'
   AND table_name IN ('payments', 'user_profiles');
   ```

2. **Check Supabase logs** for error details

3. **Contact me** - show me the error message from SQL Editor

---

## 🎯 What This Migration Does

✅ Creates `payments` table for tracking Razorpay transactions
✅ Adds pro access fields to `user_profiles`:
   - `pro_tier` - Which plan user has (paper1, paper2, both, free)
   - `pro_access_paper` - Array of accessible papers
   - `pro_package_type` - 3_months or 1_year
   - `pro_expires_at` - When subscription expires
   - `razorpay_payment_id` - Payment reference
✅ Creates helper functions:
   - `grant_pro_access()` - Give user pro access after payment
   - `has_paper_access()` - Check if user can access a paper
   - `check_pro_expiry()` - Handle expired subscriptions
✅ Sets up Row Level Security (RLS) policies
✅ Creates `user_pro_status` view for easy querying

---

**Apply this migration now and your payments will work!** 🚀
