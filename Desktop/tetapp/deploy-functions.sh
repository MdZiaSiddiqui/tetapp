#!/bin/bash

# ============================================
# Deploy Razorpay Payment Functions to Supabase
# ============================================

echo "🚀 Deploying Razorpay payment functions to Supabase..."
echo ""

# Check if Supabase CLI is installed
if ! command -v supabase &> /dev/null; then
    echo "❌ Supabase CLI not found. Please install it first:"
    echo "npm install -g supabase"
    exit 1
fi

# Check if .env file exists
if [ ! -f .env ]; then
    echo "❌ .env file not found. Please create one with your Razorpay credentials."
    exit 1
fi

# Load environment variables
source .env

# Check for required environment variables
if [ -z "$RAZORPAY_KEY_ID" ] || [ -z "$RAZORPAY_KEY_SECRET" ]; then
    echo "❌ Missing Razorpay credentials in .env file:"
    echo "   - RAZORPAY_KEY_ID"
    echo "   - RAZORPAY_KEY_SECRET"
    exit 1
fi

echo "✅ Environment variables loaded"
echo ""

# Set secrets for Edge Functions
echo "📝 Setting Razorpay secrets..."
supabase secrets set RAZORPAY_KEY_ID="$RAZORPAY_KEY_ID" || {
    echo "❌ Failed to set RAZORPAY_KEY_ID secret"
    exit 1
}

supabase secrets set RAZORPAY_KEY_SECRET="$RAZORPAY_KEY_SECRET" || {
    echo "❌ Failed to set RAZORPAY_KEY_SECRET secret"
    exit 1
}

echo "✅ Secrets configured"
echo ""

# Deploy create-razorpay-order function
echo "📦 Deploying create-razorpay-order function..."
supabase functions deploy create-razorpay-order || {
    echo "❌ Failed to deploy create-razorpay-order"
    exit 1
}

echo "✅ create-razorpay-order deployed"
echo ""

# Deploy verify-razorpay-payment function
echo "📦 Deploying verify-razorpay-payment function..."
supabase functions deploy verify-razorpay-payment || {
    echo "❌ Failed to deploy verify-razorpay-payment"
    exit 1
}

echo "✅ verify-razorpay-payment deployed"
echo ""

echo "🎉 All payment functions deployed successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Test order creation: supabase functions invoke create-razorpay-order --body '{\"tier\":\"paper1\",\"package\":\"3_months\"}'"
echo "2. Open your app and try making a test payment"
echo "3. Use Razorpay test cards from: https://razorpay.com/docs/payments/payments/test-card-upi-details/"
echo ""
echo "🔍 To view function logs:"
echo "   supabase functions logs create-razorpay-order"
echo "   supabase functions logs verify-razorpay-payment"
