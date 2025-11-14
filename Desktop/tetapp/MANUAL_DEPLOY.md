# Manual Deployment Guide - Edge Functions

## 🚨 YOU MUST RUN THESE COMMANDS IN YOUR TERMINAL

The 404 error means the functions are **NOT DEPLOYED** yet. Follow these steps **exactly**:

---

## Step-by-Step Deployment

### 1. Open Terminal in Project Directory

```bash
cd /Users/mohdziasiddiqui/Desktop/tetapp
```

### 2. Login to Supabase (First Time Only)

```bash
supabase login
```

This will open your browser for authentication. Follow the prompts.

### 3. Deploy First Function

```bash
supabase functions deploy create-razorpay-order --project-ref thvucacdrsexfcpkswpv
```

**Wait for this to complete!** You should see:
```
Deploying Function (project_ref = thvucacdrsexfcpkswpv)...
Deployed Function create-razorpay-order on project thvucacdrsexfcpkswpv
```

### 4. Deploy Second Function

```bash
supabase functions deploy verify-razorpay-payment --project-ref thvucacdrsexfcpkswpv
```

**Wait for this to complete!** You should see similar success message.

### 5. Verify Deployment

```bash
supabase functions list --project-ref thvucacdrsexfcpkswpv
```

**You MUST see this output:**
```
┌──────────────────────────────┬─────────┬──────────┐
│ NAME                         │ VERSION │ STATUS   │
├──────────────────────────────┼─────────┼──────────┤
│ create-razorpay-order        │ 1       │ ACTIVE   │
│ verify-razorpay-payment      │ 1       │ ACTIVE   │
└──────────────────────────────┴─────────┴──────────┘
```

If you don't see both functions, STOP and tell me what you see.

### 6. Set Secrets (Copy-paste these commands)

```bash
supabase secrets set RAZORPAY_KEY_ID=rzp_test_RP1sHiZsPVY3De --project-ref thvucacdrsexfcpkswpv

supabase secrets set RAZORPAY_KEY_SECRET=eCvjboX468t7ur6mcTnkGfWF --project-ref thvucacdrsexfcpkswpv

supabase secrets set SUPABASE_URL=https://thvucacdrsexfcpkswpv.supabase.co --project-ref thvucacdrsexfcpkswpv

supabase secrets set SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRodnVjYWNkcnNleGZjcGtzd3B2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5NDExOTgsImV4cCI6MjA3ODUxNzE5OH0.5ijvbtpRpeg6Yv64d3FWFUCg7Jav6-XUQCqDX1S8WlE --project-ref thvucacdrsexfcpkswpv
```

### 7. Verify Secrets

```bash
supabase secrets list --project-ref thvucacdrsexfcpkswpv
```

You should see:
```
RAZORPAY_KEY_ID
RAZORPAY_KEY_SECRET
SUPABASE_URL
SUPABASE_ANON_KEY
```

### 8. Restart Your App

```bash
# Stop the current Expo server (Ctrl+C)
# Then restart with cache clear:
npm start -- --clear
```

---

## After Deployment

1. Open your app on your device/emulator
2. Navigate to the Notes tab (payment screen)
3. Click "Select" on any plan
4. The payment modal should now open successfully! ✅

---

## Troubleshooting

### If you get "command not found: supabase"

Install Supabase CLI:
```bash
npm install -g supabase
```

### If deployment fails

1. Make sure you're in the project directory
2. Check that the functions exist:
   ```bash
   ls -la supabase/functions/
   ```
   You should see: `create-razorpay-order` and `verify-razorpay-payment`

### If you still get 404 after deployment

Run this and send me the output:
```bash
supabase functions list --project-ref thvucacdrsexfcpkswpv
```

---

## Alternative: Deploy via Supabase Dashboard (If CLI doesn't work)

1. Go to: https://supabase.com/dashboard/project/thvucacdrsexfcpkswpv/functions
2. Click "Deploy a new function"
3. Upload the function code manually

But CLI is much easier!

---

**YOU MUST DO THESE STEPS. I cannot do them for you because they require interactive authentication.**

**Copy-paste the commands into your terminal now!**
