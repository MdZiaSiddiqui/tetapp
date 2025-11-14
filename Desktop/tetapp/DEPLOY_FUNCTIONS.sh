#!/bin/bash

# Deployment script for Razorpay Edge Functions
# Run this script to deploy both payment functions to Supabase

set -e  # Exit on error

echo "🚀 Starting Edge Function Deployment..."
echo ""

# Check if supabase CLI is installed
if ! command -v supabase &> /dev/null; then
    echo "❌ Supabase CLI is not installed"
    echo "Install it with: npm install -g supabase"
    exit 1
fi

echo "✅ Supabase CLI found"
echo ""

# Step 1: Login (if not already logged in)
echo "📝 Step 1: Checking authentication..."
if ! supabase projects list --project-ref thvucacdrsexfcpkswpv &> /dev/null; then
    echo "⚠️  Not logged in. Running: supabase login"
    supabase login
else
    echo "✅ Already authenticated"
fi
echo ""

# Step 2: Deploy create-razorpay-order function
echo "📦 Step 2: Deploying create-razorpay-order function..."
supabase functions deploy create-razorpay-order --project-ref thvucacdrsexfcpkswpv
echo "✅ create-razorpay-order deployed"
echo ""

# Step 3: Deploy verify-razorpay-payment function
echo "📦 Step 3: Deploying verify-razorpay-payment function..."
supabase functions deploy verify-razorpay-payment --project-ref thvucacdrsexfcpkswpv
echo "✅ verify-razorpay-payment deployed"
echo ""

# Step 4: Verify deployment
echo "🔍 Step 4: Verifying deployment..."
supabase functions list --project-ref thvucacdrsexfcpkswpv
echo ""

# Step 5: Set secrets
echo "🔐 Step 5: Setting Edge Function secrets..."
echo ""
echo "Setting RAZORPAY_KEY_ID..."
supabase secrets set RAZORPAY_KEY_ID=rzp_test_RP1sHiZsPVY3De --project-ref thvucacdrsexfcpkswpv

echo "Setting RAZORPAY_KEY_SECRET..."
supabase secrets set RAZORPAY_KEY_SECRET=eCvjboX468t7ur6mcTnkGfWF --project-ref thvucacdrsexfcpkswpv

echo "Setting SUPABASE_URL..."
supabase secrets set SUPABASE_URL=https://thvucacdrsexfcpkswpv.supabase.co --project-ref thvucacdrsexfcpkswpv

echo "Setting SUPABASE_ANON_KEY..."
supabase secrets set SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRodnVjYWNkcnNleGZjcGtzd3B2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5NDExOTgsImV4cCI6MjA3ODUxNzE5OH0.5ijvbtpRpeg6Yv64d3FWFUCg7Jav6-XUQCqDX1S8WlE --project-ref thvucacdrsexfcpkswpv

echo "✅ All secrets set"
echo ""

# Step 6: List secrets to verify
echo "🔍 Step 6: Verifying secrets..."
supabase secrets list --project-ref thvucacdrsexfcpkswpv
echo ""

echo "🎉 Deployment Complete!"
echo ""
echo "Next steps:"
echo "1. Restart your Expo app: npm start -- --clear"
echo "2. Test the payment flow in your app"
echo ""
