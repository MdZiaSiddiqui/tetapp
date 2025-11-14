/**
 * Test Payment Integration
 *
 * This script tests the payment integration by:
 * 1. Checking environment variables
 * 2. Verifying Supabase connection
 * 3. Testing Edge Function connectivity
 * 4. Creating a test order
 *
 * Run with: npx tsx scripts/test-payment.ts
 */

import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;
const razorpayKeyId = process.env.EXPO_PUBLIC_RAZORPAY_KEY_ID;

console.log('🔍 Payment Integration Test\n');

// Step 1: Check environment variables
console.log('📋 Step 1: Checking environment variables...');
console.log('  ✓ EXPO_PUBLIC_SUPABASE_URL:', supabaseUrl ? '✓ Set' : '✗ Missing');
console.log('  ✓ EXPO_PUBLIC_SUPABASE_ANON_KEY:', supabaseAnonKey ? '✓ Set' : '✗ Missing');
console.log('  ✓ EXPO_PUBLIC_RAZORPAY_KEY_ID:', razorpayKeyId ? `✓ ${razorpayKeyId}` : '✗ Missing');

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('\n❌ Missing required environment variables!');
  console.error('   Please check your .env file');
  process.exit(1);
}

if (!razorpayKeyId) {
  console.warn('\n⚠️  EXPO_PUBLIC_RAZORPAY_KEY_ID not set in .env');
  console.warn('   Payment will fail without this!');
}

// Step 2: Create Supabase client
console.log('\n📋 Step 2: Creating Supabase client...');
const supabase = createClient(supabaseUrl, supabaseAnonKey);
console.log('  ✓ Supabase client created');

// Step 3: Test database connection
console.log('\n📋 Step 3: Testing database connection...');

async function testDatabase() {
  try {
    // Check if payments table exists
    const { data, error } = await supabase
      .from('payments')
      .select('id')
      .limit(1);

    if (error) {
      if (error.message.includes('relation "public.payments" does not exist')) {
        console.error('  ✗ Payments table not found!');
        console.error('    Run the migration: supabase/migrations/add_pro_access_fields.sql');
        return false;
      }
      console.error('  ✗ Database error:', error.message);
      return false;
    }

    console.log('  ✓ Database connection successful');
    console.log('  ✓ Payments table exists');
    return true;
  } catch (error) {
    console.error('  ✗ Database test failed:', error);
    return false;
  }
}

// Step 4: Test Edge Function
async function testEdgeFunction() {
  console.log('\n📋 Step 4: Testing Edge Function deployment...');

  try {
    // Note: This will fail if not authenticated, but that's expected
    // We're just checking if the function exists (not 404)
    const { data, error } = await supabase.functions.invoke('create-razorpay-order', {
      body: { tier: 'paper1', package: '3_months' },
    });

    if (error) {
      if (error.message.includes('404') || error.message.includes('not found')) {
        console.error('  ✗ Edge Function NOT deployed!');
        console.error('    Deploy with: supabase functions deploy create-razorpay-order');
        return false;
      } else if (error.message.includes('401') || error.message.includes('Unauthorized')) {
        console.log('  ✓ Edge Function exists (auth required for testing)');
        console.log('    Note: Need to be logged in to test fully');
        return true;
      } else if (error.message.includes('500')) {
        console.error('  ✗ Edge Function returned server error');
        console.error('    Check function logs: supabase functions logs create-razorpay-order');
        console.error('    Error:', error.message);
        return false;
      } else {
        console.warn('  ⚠  Edge Function response:', error.message);
        return true;
      }
    }

    console.log('  ✓ Edge Function is deployed and responding');
    return true;
  } catch (error) {
    console.error('  ✗ Edge Function test failed:', error);
    return false;
  }
}

// Step 5: Provide recommendations
async function provideRecommendations() {
  console.log('\n📋 Step 5: Recommendations\n');

  console.log('To complete setup:');
  console.log('  1. Run database migration:');
  console.log('     → Open Supabase SQL Editor');
  console.log('     → Run: supabase/migrations/add_pro_access_fields.sql\n');

  console.log('  2. Get Razorpay API keys:');
  console.log('     → Go to: https://dashboard.razorpay.com/app/keys');
  console.log('     → Use TEST mode for development');
  console.log('     → Add to .env: EXPO_PUBLIC_RAZORPAY_KEY_ID=rzp_test_xxxxx\n');

  console.log('  3. Set Supabase secrets:');
  console.log('     → supabase secrets set RAZORPAY_KEY_ID=rzp_test_xxxxx');
  console.log('     → supabase secrets set RAZORPAY_KEY_SECRET=your_secret\n');

  console.log('  4. Deploy Edge Functions:');
  console.log('     → supabase functions deploy create-razorpay-order');
  console.log('     → supabase functions deploy verify-razorpay-payment\n');

  console.log('  5. Check function logs:');
  console.log('     → supabase functions logs create-razorpay-order --limit 10\n');
}

// Run all tests
async function runTests() {
  const dbOk = await testDatabase();
  const edgeFunctionOk = await testEdgeFunction();

  console.log('\n═══════════════════════════════════════');
  console.log('📊 Test Results:');
  console.log('  Database:', dbOk ? '✓ OK' : '✗ Failed');
  console.log('  Edge Function:', edgeFunctionOk ? '✓ OK' : '✗ Failed');
  console.log('═══════════════════════════════════════');

  if (!dbOk || !edgeFunctionOk) {
    await provideRecommendations();
  } else {
    console.log('\n✅ All checks passed!');
    console.log('   Payment integration should work.');
    console.log('   If still having issues, check:');
    console.log('   - User is logged in');
    console.log('   - Razorpay keys are correct');
    console.log('   - Edge Function logs for errors');
  }
}

runTests().catch(console.error);
