# Simple Razorpay Setup (No Edge Functions!)

Your Razorpay integration now uses a simple Express backend instead of Supabase Edge Functions.

## Quick Start (Local Testing)

### 1. Install Backend Dependencies

```bash
cd backend
npm install
```

### 2. Run Backend Server

```bash
npm start
```

The server will run on `http://localhost:3000`

### 3. Test the Backend

In another terminal:
```bash
curl http://localhost:3000
# Should return: {"status":"ok","message":"Razorpay payment server is running"}
```

### 4. Run Your Expo App

```bash
cd ..
npx expo start
```

Now when you try to make a payment, it will use your local backend!

---

## Deploy to Production (Vercel - FREE)

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy from backend folder:
```bash
cd backend
vercel
```

4. Add environment variables in Vercel dashboard:
   - Go to https://vercel.com/your-username/your-project/settings/environment-variables
   - Add:
     - `RAZORPAY_KEY_ID` = `rzp_test_RP1sHiZsPVY3De`
     - `RAZORPAY_KEY_SECRET` = `eCvjboX468t7ur6mcTnkGfWF`

5. Copy your deployment URL (e.g., `https://tetapp-backend.vercel.app`)

6. Update `.env` in your React Native app:
```bash
EXPO_PUBLIC_PAYMENT_API_URL=https://tetapp-backend.vercel.app
```

7. Rebuild your Expo app:
```bash
cd ..
npx expo start --clear
```

### Option 2: Deploy via Vercel Dashboard

1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Set root directory to `backend`
4. Add environment variables (same as above)
5. Deploy!

---

## Deploy to Railway (Alternative to Vercel)

1. Go to https://railway.app
2. Create new project → Deploy from GitHub
3. Select your repository
4. Set root directory to `backend` (if needed)
5. Add environment variables in Railway dashboard:
   - `RAZORPAY_KEY_ID`
   - `RAZORPAY_KEY_SECRET`
6. Copy the deployment URL
7. Update `EXPO_PUBLIC_PAYMENT_API_URL` in your app's `.env`

---

## Testing Payment Flow

1. Start backend (local or production)
2. Start Expo app
3. Navigate to payment screen
4. Select a plan
5. You should see:
   - ✅ "Creating payment order..." (backend creates order)
   - ✅ Razorpay checkout modal opens
   - ✅ Complete test payment (use Razorpay test cards)
   - ✅ "Verifying payment..." (backend verifies signature)
   - ✅ Success screen

### Razorpay Test Cards

**Success:**
- Card: `4111 1111 1111 1111`
- CVV: Any 3 digits
- Expiry: Any future date

**Failure:**
- Card: `4000 0000 0000 0002`

More test cards: https://razorpay.com/docs/payments/payments/test-card-upi-details/

---

## Troubleshooting

### "Cannot connect to payment server"

**Problem:** Backend is not running or URL is wrong

**Solution:**
- Check if backend is running: `curl http://localhost:3000`
- Check `EXPO_PUBLIC_PAYMENT_API_URL` in `.env`
- Restart Expo: `npx expo start --clear`

### "Payment server not found (404)"

**Problem:** Backend URL is incorrect

**Solution:**
- If using local: Make sure backend is running on port 3000
- If using production: Check your deployment URL in Vercel/Railway
- Update `EXPO_PUBLIC_PAYMENT_API_URL` in `.env`

### "Invalid tier or package"

**Problem:** Pricing mismatch between app and backend

**Solution:**
- Check `PRICING` object in `backend/server.js` line 30
- Should match pricing in `lib/pricing-config.ts`

---

## Next Steps (Optional)

### 1. Update User Pro Status After Payment

Currently, the backend only verifies payment signature. You should update the user's pro status in Supabase:

**In `backend/server.js`, line 86 (after signature verification):**

```javascript
if (razorpay_signature === expectedSign) {
  console.log('✅ Payment verified:', razorpay_payment_id);

  // TODO: Update user's pro status in Supabase
  // Example:
  // const { error } = await supabase
  //   .from('users')
  //   .update({
  //     is_pro: true,
  //     pro_tier: tier,
  //     pro_expires_at: expiryDate
  //   })
  //   .eq('id', userId);

  res.json({ success: true, message: 'Payment verified successfully' });
}
```

### 2. Add Webhook Handler

For automatic payment status updates, add a webhook endpoint:

```javascript
app.post('/razorpay-webhook', (req, res) => {
  // Verify webhook signature
  // Update user pro status
  // Send confirmation email
});
```

Configure webhook URL in Razorpay dashboard.

---

## Architecture

```
┌─────────────────┐
│  Expo App       │
│  (React Native) │
└────────┬────────┘
         │
         │ HTTP requests
         │ (create-order, verify-payment)
         ▼
┌─────────────────┐
│  Express Server │  ← Simple backend (you control)
│  (Vercel/Railway)│
└────────┬────────┘
         │
         │ Razorpay API
         │ (using key_secret)
         ▼
┌─────────────────┐
│  Razorpay API   │
└─────────────────┘
```

**Benefits:**
- ✅ No Edge Functions needed
- ✅ Simple to deploy (Vercel/Railway)
- ✅ Easy to debug
- ✅ Full control over payment logic
- ✅ Free hosting on Vercel/Railway

**Security:**
- ✅ `key_secret` stays on server (never exposed to client)
- ✅ Payment signature verification on server
- ✅ User authentication required for all requests
