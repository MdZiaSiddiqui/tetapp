# Razorpay Payment Error - Debugging Guide

## Current Error

```
ERROR Error details: {"status": 404, "message": "Edge Function returned a non-2xx status code"}
URL: https://thvucacdrsexfcpkswpv.supabase.co/functions/v1/create-razorpay-order
```

**404 Error = Edge Function NOT DEPLOYED**

The Edge Function exists in your code but hasn't been deployed to Supabase yet.

## Root Cause

**PRIMARY ISSUE: Edge Function Not Deployed (404 Error)**

The `create-razorpay-order` Edge Function exists in your codebase but hasn't been deployed to Supabase servers yet. This is why you're getting a 404 error.

## Solution Steps

### 1. ✅ Update .env File (COMPLETED)

The `.env` file has been updated to include:
```env
EXPO_PUBLIC_RAZORPAY_KEY_ID=rzp_test_RP1sHiZsPVY3De
RAZORPAY_KEY_ID=rzp_test_RP1sHiZsPVY3De
RAZORPAY_KEY_SECRET=eCvjboX468t7ur6mcTnkGfWF
```

### 2. 🔴 DEPLOY THE EDGE FUNCTION (CRITICAL - DO THIS FIRST!)

**Open a new terminal in your project directory and run these commands:**

```bash
# Step 1: Login to Supabase CLI
supabase login

# Step 2: Link to your project
supabase link --project-ref thvucacdrsexfcpkswpv

# Step 3: Deploy BOTH Edge Functions
supabase functions deploy create-razorpay-order
supabase functions deploy verify-razorpay-payment

# Step 4: Verify deployment
supabase functions list
```

**Expected output after deployment:**
```
┌──────────────────────────────┬─────────┬──────────┐
│ NAME                         │ VERSION │ STATUS   │
├──────────────────────────────┼─────────┼──────────┤
│ create-razorpay-order        │ 1       │ ACTIVE   │
│ verify-razorpay-payment      │ 1       │ ACTIVE   │
└──────────────────────────────┴─────────┴──────────┘
```

### 3. ⚠️ Set Supabase Edge Function Secrets (AFTER DEPLOYMENT)

After deploying the functions, set the required secrets:

```bash
# Set the Razorpay API credentials
supabase secrets set RAZORPAY_KEY_ID=rzp_test_RP1sHiZsPVY3De
supabase secrets set RAZORPAY_KEY_SECRET=eCvjboX468t7ur6mcTnkGfWF

# Set Supabase credentials
supabase secrets set SUPABASE_URL=https://thvucacdrsexfcpkswpv.supabase.co
supabase secrets set SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRodnVjYWNkcnNleGZjcGtzd3B2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5NDExOTgsImV4cCI6MjA3ODUxNzE5OH0.5ijvbtpRpeg6Yv64d3FWFUCg7Jav6-XUQCqDX1S8WlE

# Verify secrets are set
supabase secrets list
```

### 4. Restart Your Expo App

After deploying functions and setting secrets, restart your Expo development server:

```bash
# Stop current server (Ctrl+C)
# Clear cache and restart
npm start -- --clear
```

### 5. Check Edge Function Logs (If Still Having Issues)

After deployment, if you still have issues, check the logs:

```bash
# View real-time logs for order creation
supabase functions logs create-razorpay-order

# View logs for payment verification
supabase functions logs verify-razorpay-payment
```

## Alternative: Set Secrets via Supabase Dashboard

If CLI doesn't work, you can set secrets via the Supabase Dashboard:

1. Go to: https://supabase.com/dashboard/project/thvucacdrsexfcpkswpv/settings/functions
2. Click on "Edge Functions" → "Secrets"
3. Add the following secrets:
   - `RAZORPAY_KEY_ID` = `rzp_test_RP1sHiZsPVY3De`
   - `RAZORPAY_KEY_SECRET` = `eCvjboX468t7ur6mcTnkGfWF`
   - `SUPABASE_URL` = `https://thvucacdrsexfcpkswpv.supabase.co`
   - `SUPABASE_ANON_KEY` = (your anon key from .env)

## Testing After Fix

1. Open your app
2. Navigate to the Notes tab (payment screen)
3. Select a plan
4. Click "Select" button
5. Payment modal should open successfully

## Expected Behavior After Fix

✅ "Creating payment order..." loading state
✅ Razorpay checkout modal opens
✅ Can complete test payment with card: 4111 1111 1111 1111

## If Still Not Working

Check Edge Function logs for detailed error:
```bash
supabase functions logs create-razorpay-order --project-ref thvucacdrsexfcpkswpv
```

Common errors:
- **"RAZORPAY_KEY_ID is undefined"** → Secrets not set properly
- **"Invalid credentials"** → Wrong Razorpay API keys
- **"404 Not Found"** → Edge Function not deployed
- **"401 Unauthorized"** → User authentication issue (log out and log back in)

## 🚀 Quick Command Summary (Run in Order)

**Open a terminal in your project directory and run these commands:**

```bash
# 1. Login and link to Supabase
supabase login
supabase link --project-ref thvucacdrsexfcpkswpv

# 2. Deploy BOTH Edge Functions (CRITICAL!)
supabase functions deploy create-razorpay-order
supabase functions deploy verify-razorpay-payment

# 3. Verify deployment
supabase functions list
# You should see both functions listed as ACTIVE

# 4. Set secrets for the functions
supabase secrets set RAZORPAY_KEY_ID=rzp_test_RP1sHiZsPVY3De
supabase secrets set RAZORPAY_KEY_SECRET=eCvjboX468t7ur6mcTnkGfWF
supabase secrets set SUPABASE_URL=https://thvucacdrsexfcpkswpv.supabase.co
supabase secrets set SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRodnVjYWNkcnNleGZjcGtzd3B2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5NDExOTgsImV4cCI6MjA3ODUxNzE5OH0.5ijvbtpRpeg6Yv64d3FWFUCg7Jav6-XUQCqDX1S8WlE

# 5. Verify secrets
supabase secrets list

# 6. Restart your Expo app (in a separate terminal)
npm start -- --clear
```

---

**Last Updated:** 2025-11-14
**Status:** Awaiting Supabase secrets configuration
