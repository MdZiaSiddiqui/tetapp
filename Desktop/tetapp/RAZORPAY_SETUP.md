# Razorpay Payment Integration Setup Guide

This guide will help you set up Razorpay payment integration for the TET App with pro access tiers.

## Prerequisites

1. Razorpay account (sign up at https://razorpay.com)
2. Supabase project with Edge Functions enabled
3. React Native development environment set up

## Overview

The payment system supports 3 tiers with 2 package durations each:
- **Paper 1 Pro**: ₹499 (3 months) | ₹799 (1 year)
- **Paper 2 Pro**: ₹699 (3 months) | ₹999 (1 year)
- **Both Papers Pro**: ₹999 (3 months) | ₹1499 (1 year)

## Step 1: Database Setup

### 1.1 Run the migration

Execute the SQL migration in your Supabase SQL Editor:

```bash
# The migration file is located at:
supabase/migrations/add_pro_access_fields.sql
```

This will:
- Add pro access fields to `user_profiles` table
- Create `payments` table for transaction tracking
- Create helper functions for access control
- Set up Row Level Security policies

### 1.2 Verify migration

Run this query to verify the migration was successful:

```sql
SELECT * FROM user_pro_status LIMIT 1;
SELECT COUNT(*) FROM payments;
```

## Step 2: Get Razorpay API Keys

### 2.1 Create Razorpay Account

1. Go to https://razorpay.com
2. Sign up for a new account
3. Complete KYC verification (required for live mode)

### 2.2 Get API Keys

1. Log in to Razorpay Dashboard
2. Navigate to **Settings** > **API Keys**
3. Generate API keys:
   - **Test Mode Keys** (for development)
   - **Live Mode Keys** (for production - after KYC approval)

You'll get:
- Key ID (e.g., `rzp_test_xxxxx` or `rzp_live_xxxxx`)
- Key Secret (keep this secure!)

## Step 3: Configure Environment Variables

### 3.1 Update .env file

Create or update your `.env` file in the project root:

```env
# ============================================
# RAZORPAY CONFIGURATION
# ============================================

# Client-side key (safe to expose)
EXPO_PUBLIC_RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxxx

# Server-side keys (NEVER expose to client)
RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxxx
RAZORPAY_KEY_SECRET=your_secret_key_here

# For production (after KYC approval)
# EXPO_PUBLIC_RAZORPAY_KEY_ID=rzp_live_xxxxxxxxxxxxx
# RAZORPAY_KEY_ID=rzp_live_xxxxxxxxxxxxx
# RAZORPAY_KEY_SECRET=your_live_secret_key_here

# Optional: Webhook secret (for future webhook integration)
# RAZORPAY_WEBHOOK_SECRET=your_webhook_secret

# ============================================
# SUPABASE CONFIGURATION (existing)
# ============================================
EXPO_PUBLIC_SUPABASE_URL=your_supabase_project_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# ============================================
# GOOGLE OAUTH (existing)
# ============================================
EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID=your_google_client_id
EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID=your_ios_client_id
```

### 3.2 Add .env to .gitignore

Ensure `.env` is in your `.gitignore` file:

```
# Environment variables
.env
.env.local
.env.*.local
```

## Step 4: Deploy Supabase Edge Functions

### 4.1 Install Supabase CLI

```bash
npm install -g supabase
```

### 4.2 Link to your project

```bash
supabase link --project-ref your-project-ref
```

### 4.3 Set Edge Function secrets

```bash
# Set Razorpay keys as secrets
supabase secrets set RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxxx
supabase secrets set RAZORPAY_KEY_SECRET=your_secret_key_here
```

### 4.4 Deploy the functions

```bash
# Deploy order creation function
supabase functions deploy create-razorpay-order

# Deploy payment verification function
supabase functions deploy verify-razorpay-payment
```

### 4.5 Verify deployment

```bash
# List deployed functions
supabase functions list
```

## Step 5: Test the Integration

### 5.1 Test payment flow in development

1. Start your Expo development server:
   ```bash
   npm start
   ```

2. Navigate to the **Notes** tab (third tab with 💳 icon)

3. Click **Select** on any plan

4. Use Razorpay test cards:
   - **Card Number**: `4111 1111 1111 1111`
   - **Expiry**: Any future date (e.g., `12/25`)
   - **CVV**: Any 3 digits (e.g., `123`)
   - **OTP**: Any 6 digits for test mode

5. Complete the payment

6. Verify success:
   - Payment success screen should appear
   - Check user profile in Supabase:
     ```sql
     SELECT * FROM user_profiles WHERE email = 'your_test_email';
     SELECT * FROM payments ORDER BY created_at DESC LIMIT 1;
     ```

### 5.2 Test all 6 payment scenarios

Test each tier and package combination:
- [ ] Paper 1 - 3 Months (₹499)
- [ ] Paper 1 - 1 Year (₹799)
- [ ] Paper 2 - 3 Months (₹699)
- [ ] Paper 2 - 1 Year (₹999)
- [ ] Both - 3 Months (₹999)
- [ ] Both - 1 Year (₹1499)

### 5.3 Test payment failure scenarios

- Cancel payment (click outside modal)
- Use invalid card details
- Network interruption during payment

## Step 6: Enable Webhooks (Optional but Recommended)

Webhooks provide backup payment verification and audit trail.

### 6.1 Deploy webhook function

```bash
supabase functions deploy razorpay-webhook
```

### 6.2 Get webhook URL

```bash
# Your webhook URL will be:
https://your-project-ref.supabase.co/functions/v1/razorpay-webhook
```

### 6.3 Configure in Razorpay Dashboard

1. Go to **Settings** > **Webhooks**
2. Click **Add New Webhook**
3. Enter webhook URL
4. Select events to receive:
   - `payment.captured`
   - `payment.failed`
   - `payment.authorized`
   - `order.paid`
   - `refund.created`
5. Save and note the webhook secret
6. Add webhook secret to Supabase:
   ```bash
   supabase secrets set RAZORPAY_WEBHOOK_SECRET=your_webhook_secret
   ```

## Step 7: Go Live (Production)

### 7.1 Complete KYC on Razorpay

1. Submit KYC documents in Razorpay Dashboard
2. Wait for approval (usually 24-48 hours)
3. Activate your account

### 7.2 Switch to live keys

1. Get live API keys from Razorpay Dashboard
2. Update environment variables with live keys:
   ```env
   EXPO_PUBLIC_RAZORPAY_KEY_ID=rzp_live_xxxxxxxxxxxxx
   RAZORPAY_KEY_ID=rzp_live_xxxxxxxxxxxxx
   RAZORPAY_KEY_SECRET=your_live_secret_key_here
   ```
3. Update Supabase secrets:
   ```bash
   supabase secrets set RAZORPAY_KEY_ID=rzp_live_xxxxxxxxxxxxx
   supabase secrets set RAZORPAY_KEY_SECRET=your_live_secret_key_here
   ```

### 7.3 Update webhook with live URL

Update webhook configuration in Razorpay Dashboard to use production URL.

### 7.4 Build production app

```bash
# For Android
eas build --platform android --profile production

# For iOS
eas build --platform ios --profile production
```

## Security Checklist

Before going live, verify:

- [ ] `.env` file is in `.gitignore`
- [ ] Razorpay Key Secret is NEVER exposed to client code
- [ ] All Supabase Edge Function secrets are set correctly
- [ ] Row Level Security is enabled on `payments` table
- [ ] Webhook signature verification is implemented
- [ ] Amount validation happens on server-side
- [ ] Payment signature verification happens on server-side
- [ ] HTTPS is used for all API calls
- [ ] Error messages don't expose sensitive information

## Troubleshooting

### Issue: Payment order creation fails

**Solution**: Check Supabase Edge Function logs:
```bash
supabase functions logs create-razorpay-order
```

Verify:
- Razorpay API keys are correct
- User is authenticated
- Edge Function has correct environment variables

### Issue: Payment verification fails

**Solution**: Check verification function logs:
```bash
supabase functions logs verify-razorpay-payment
```

Verify:
- Payment signature is valid
- Payment status is "captured"
- Amount matches expected value
- `grant_pro_access` function exists in database

### Issue: WebView not loading

**Solution**:
- Check that `react-native-webview` is installed
- Verify Razorpay checkout.js script is loading
- Check network connectivity
- Look for JavaScript errors in WebView

### Issue: Pro access not granted after payment

**Solution**:
1. Check payment record in database:
   ```sql
   SELECT * FROM payments WHERE payment_id = 'pay_xxxxx';
   ```
2. Check user profile:
   ```sql
   SELECT * FROM user_profiles WHERE id = 'user-uuid';
   ```
3. Manually grant access if needed:
   ```sql
   SELECT grant_pro_access(
     'user-uuid',
     'paper1',
     '3_months',
     'pay_xxxxx',
     'order_xxxxx'
   );
   ```

## Support

For issues:
1. Check Razorpay Dashboard > Developer > Logs
2. Check Supabase Edge Function logs
3. Check app logs in Expo/React Native Debugger
4. Contact Razorpay support: https://razorpay.com/support/

## Additional Resources

- Razorpay Documentation: https://razorpay.com/docs/
- Supabase Edge Functions: https://supabase.com/docs/guides/functions
- React Native WebView: https://github.com/react-native-webview/react-native-webview

## Next Steps

After successful integration:
1. Implement refund handling (optional)
2. Add subscription renewal reminders
3. Create admin panel for payment management
4. Set up analytics tracking
5. Add customer support integration

---

**Last Updated**: 2025-11-14
**Version**: 1.0.0
