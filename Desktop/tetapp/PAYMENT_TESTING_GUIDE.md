# 💳 Razorpay Payment Testing Guide - TET App

## ✅ Setup Complete

Your Razorpay payment integration is now fully configured and deployed!

- ✅ Database schema with payments table and pro access fields
- ✅ Supabase Edge Functions deployed (create-order & verify-payment)
- ✅ Frontend components (RazorpayCheckout, pricing UI)
- ✅ Access control hooks (useProAccess, usePaperAccess)
- ✅ Payment success screen

---

## 🔑 Test Credentials

### Razorpay Test Mode
- **Key ID**: `rzp_test_RP1sHiZsPVY3De`
- **Environment**: Test Mode (no real money charged)

---

## 💳 Razorpay Test Cards

Use these test cards for payment testing:

### ✅ **Successful Payment**
```
Card Number:  4111 1111 1111 1111
CVV:          123
Expiry:       Any future date (e.g., 12/25)
Name:         Any name
```

### ✅ **Alternative Success Card**
```
Card Number:  5555 5555 5555 4444
CVV:          123
Expiry:       Any future date
Name:         Any name
```

### ❌ **Failed Payment (Test Failure)**
```
Card Number:  4000 0000 0000 0002
CVV:          123
Expiry:       Any future date
Name:         Any name
```

### ⏳ **Card Requiring Authentication (3D Secure)**
```
Card Number:  4000 0027 6000 3184
CVV:          123
Expiry:       Any future date
Name:         Any name
```

---

## 🧪 Testing Workflow

### Step 1: Navigate to Notes/Pricing Screen
```bash
npm start
# or
npx expo start
```

1. Open app in Android emulator or physical device
2. Navigate to **Notes** tab (bottom navigation)
3. You'll see pricing plans for:
   - Paper-1 (₹499 for 3 months, ₹799 for 1 year)
   - Paper-2 (₹699 for 3 months, ₹999 for 1 year)
   - Both Papers (₹999 for 3 months, ₹1499 for 1 year)

### Step 2: Select a Plan
1. Tap **"Select"** button on any plan
2. RazorpayCheckout modal will open with loading indicator
3. Native Razorpay checkout will launch

### Step 3: Complete Payment
1. Enter test card details (use 4111 1111 1111 1111)
2. Enter CVV: 123
3. Enter any future expiry date
4. Tap **"Pay"**

### Step 4: Payment Verification
1. App automatically verifies payment signature
2. On success: Navigates to payment-success screen
3. User profile updated with pro access
4. Access granted to selected paper(s)

### Step 5: Verify Access Granted
1. Go to **Profile** tab
2. You should see:
   - Pro badge/status
   - Active tier (Paper-1, Paper-2, or Both)
   - Expiry date
   - Days remaining
3. Try accessing Paper-1 or Paper-2 content
4. Content should now be unlocked

---

## 🔍 Monitoring & Debugging

### View Function Logs
```bash
# Set access token
export SUPABASE_ACCESS_TOKEN=sbp_e120c348bd6e8229463879447e2f14dd9c4f9026

# View create-order logs
supabase functions logs create-razorpay-order --project-ref thvucacdrsexfcpkswpv

# View verify-payment logs
supabase functions logs verify-razorpay-payment --project-ref thvucacdrsexfcpkswpv
```

### Check Database Records
```sql
-- View all payments
SELECT * FROM public.payments ORDER BY created_at DESC LIMIT 10;

-- View user pro status
SELECT * FROM public.user_pro_status WHERE user_id = 'your-user-id';

-- Check if user has paper access
SELECT public.has_paper_access('your-user-id', 1); -- Paper 1
SELECT public.has_paper_access('your-user-id', 2); -- Paper 2
```

### React Native Debug Logs
Look for these console logs:
```
🔵 Creating Razorpay order: { tier: 'paper1', package: '3_months' }
✅ Razorpay order created successfully: order_xxxxx
🔵 Verifying payment: pay_xxxxx
✅ Payment verified successfully. Pro access granted!
```

---

## ⚠️ Common Issues & Solutions

### Issue 1: "Payment function not deployed"
**Solution:**
```bash
export SUPABASE_ACCESS_TOKEN=sbp_e120c348bd6e8229463879447e2f14dd9c4f9026
supabase functions deploy create-razorpay-order --project-ref thvucacdrsexfcpkswpv
supabase functions deploy verify-razorpay-payment --project-ref thvucacdrsexfcpkswpv
```

### Issue 2: "User not authenticated"
**Solution:**
- Make sure user is logged in before attempting payment
- Check auth session in lib/auth-context.tsx

### Issue 3: Native module error
**Error:** `react-native-razorpay module not found`
**Solution:**
```bash
# Run prebuild to generate native folders
npx expo prebuild --clean

# Run on Android
npx expo run:android
```

### Issue 4: Payment signature verification failed
**Solution:**
- Check RAZORPAY_KEY_SECRET is correct in Supabase secrets
- Verify signature calculation in verify-razorpay-payment function
- Check payment_id and order_id are not swapped

### Issue 5: Pro access not granted after payment
**Solution:**
```sql
-- Manually grant access (emergency only)
SELECT public.grant_pro_access(
  'user-uuid-here',
  'paper1',
  '3_months',
  'pay_xxxxx',
  'order_xxxxx'
);
```

---

## 📱 Testing on Android Emulator

### Setup
```bash
# 1. Clean and prebuild
npx expo prebuild --clean

# 2. Run on Android
npx expo run:android

# Or use the emulator launcher
emulator -avd Medium_Phone_API_36.1
```

### Network Configuration
- Android emulator can access localhost at `10.0.2.2`
- Edge Functions are accessed via Supabase cloud, so network should work fine
- Make sure EXPO_PUBLIC_RAZORPAY_KEY_ID is set in .env

---

## 🚀 Production Deployment Checklist

When moving to production:

### 1. Switch to Live Razorpay Keys
```bash
# In .env file, replace test keys with live keys:
EXPO_PUBLIC_RAZORPAY_KEY_ID=rzp_live_xxxxx
RAZORPAY_KEY_ID=rzp_live_xxxxx
RAZORPAY_KEY_SECRET=your_live_secret

# Update Supabase secrets
export SUPABASE_ACCESS_TOKEN=your_token
supabase secrets set RAZORPAY_KEY_ID=rzp_live_xxxxx --project-ref thvucacdrsexfcpkswpv
supabase secrets set RAZORPAY_KEY_SECRET=your_live_secret --project-ref thvucacdrsexfcpkswpv
```

### 2. Test Payment Flow Thoroughly
- Test all payment scenarios (success, failure, cancellation)
- Test all tiers and packages
- Verify access control works correctly
- Test subscription expiry handling

### 3. Enable Razorpay Webhooks (Optional but Recommended)
- Set up webhook for `payment.captured` event
- URL: `https://thvucacdrsexfcpkswpv.supabase.co/functions/v1/razorpay-webhook`
- Verify webhook signature in handler

### 4. Add Error Tracking
- Integrate Sentry or similar for production error tracking
- Monitor payment failures and investigate causes

---

## 📊 Pricing Structure

| Tier | 3 Months | 1 Year | Papers Included |
|------|----------|--------|-----------------|
| Paper-1 | ₹499 | ₹799 | Paper-1 only |
| Paper-2 | ₹699 | ₹999 | Paper-2 only |
| Both | ₹999 | ₹1,499 | Paper-1 & Paper-2 |

**Savings:**
- Yearly plans save users 33-37% compared to 4x quarterly
- "Both" bundle saves ₹299 compared to buying separately

---

## 🔗 Useful Links

- **Razorpay Dashboard**: https://dashboard.razorpay.com/
- **Razorpay Test Cards**: https://razorpay.com/docs/payments/payments/test-card-upi-details/
- **Supabase Dashboard**: https://supabase.com/dashboard/project/thvucacdrsexfcpkswpv
- **Edge Functions**: https://supabase.com/dashboard/project/thvucacdrsexfcpkswpv/functions

---

## 📞 Support

If you encounter issues:
1. Check console logs for error messages
2. Verify Edge Functions are deployed
3. Check Supabase function logs
4. Verify Razorpay keys are correct
5. Test with known working test cards

---

## ✨ Next Steps

After successful testing:
1. Add payment option to Profile screen
2. Add access gates to premium content
3. Implement subscription expiry reminders
4. Add payment history in Profile
5. Set up automatic expiry checks (cron job)

---

**🎉 Happy Testing!**
