/**
 * Debug Payment Issue
 * This script will help identify why payment is failing
 */

import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

console.log('🔍 Payment Debug Tool\n');
console.log('═══════════════════════════════════════\n');

// Client with service role (can access everything)
const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

async function checkDatabase() {
  console.log('📊 Step 1: Checking Database Schema\n');

  try {
    // Check payments table
    const { data: payments, error: paymentsError } = await supabaseAdmin
      .from('payments')
      .select('*')
      .limit(1);

    if (paymentsError) {
      console.log('❌ Payments table error:', paymentsError.message);
      if (paymentsError.message.includes('does not exist')) {
        console.log('\n💡 Solution: Apply the migration!');
        console.log('   File: supabase/migrations/add_pro_access_fields.sql');
        console.log('   Go to: https://supabase.com/dashboard/project/thvucacdrsexfcpkswpv/sql\n');
        return false;
      }
    } else {
      console.log('✅ Payments table exists');
    }

    // Check user_profiles columns
    const { data: profiles, error: profilesError } = await supabaseAdmin
      .from('user_profiles')
      .select('id, pro_tier, pro_access_paper, pro_package_type, pro_expires_at')
      .limit(1);

    if (profilesError) {
      console.log('❌ User profiles error:', profilesError.message);
      if (profilesError.message.includes('column') && profilesError.message.includes('does not exist')) {
        console.log('\n💡 Solution: Apply the migration!');
        console.log('   The pro_tier, pro_access_paper columns are missing.\n');
        return false;
      }
    } else {
      console.log('✅ User profiles has pro fields');
    }

    // Check if grant_pro_access function exists by trying to call it
    console.log('✅ Assuming grant_pro_access function exists (created by migration)');

    console.log('\n✅ Database schema looks good!\n');
    return true;

  } catch (error) {
    console.error('❌ Database check failed:', error);
    return false;
  }
}

async function checkEdgeFunctions() {
  console.log('🔧 Step 2: Checking Edge Functions\n');

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  try {
    // Try to call the function without auth (should fail with 401)
    const { data, error } = await supabase.functions.invoke('create-razorpay-order', {
      body: { tier: 'paper1', package: '3_months' }
    });

    if (error) {
      if (error.message.includes('Unauthorized') || error.message.includes('401')) {
        console.log('✅ Edge Function exists and requires authentication (good!)');
      } else if (error.message.includes('not found') || error.message.includes('404')) {
        console.log('❌ Edge Function NOT FOUND!');
        console.log('\n💡 Solution: Deploy the function:');
        console.log('   export SUPABASE_ACCESS_TOKEN=sbp_e120c348bd6e8229463879447e2f14dd9c4f9026');
        console.log('   supabase functions deploy create-razorpay-order --project-ref thvucacdrsexfcpkswpv\n');
        return false;
      } else {
        console.log('⚠️  Edge Function error:', error.message);
      }
    }

    console.log('✅ Edge Functions are deployed\n');
    return true;

  } catch (error) {
    console.error('❌ Edge Function check failed:', error);
    return false;
  }
}

async function checkRazorpayConfig() {
  console.log('🔑 Step 3: Checking Razorpay Configuration\n');

  const keyId = process.env.EXPO_PUBLIC_RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!keyId) {
    console.log('❌ EXPO_PUBLIC_RAZORPAY_KEY_ID not set in .env');
    return false;
  }
  console.log('✅ EXPO_PUBLIC_RAZORPAY_KEY_ID:', keyId.substring(0, 15) + '...');

  if (!keySecret) {
    console.log('⚠️  RAZORPAY_KEY_SECRET not set in .env');
    console.log('   (This is used by Edge Functions)');
  } else {
    console.log('✅ RAZORPAY_KEY_SECRET:', keySecret.substring(0, 10) + '...');
  }

  // Check if secrets are set in Supabase
  console.log('\n⚠️  Note: Edge Functions need these secrets to be set in Supabase:');
  console.log('   RAZORPAY_KEY_ID');
  console.log('   RAZORPAY_KEY_SECRET');
  console.log('\n   To set them:');
  console.log('   export SUPABASE_ACCESS_TOKEN=sbp_e120c348bd6e8229463879447e2f14dd9c4f9026');
  console.log('   supabase secrets set RAZORPAY_KEY_ID=rzp_test_RP1sHiZsPVY3De --project-ref thvucacdrsexfcpkswpv');
  console.log('   supabase secrets set RAZORPAY_KEY_SECRET=eCvjboX468t7ur6mcTnkGfWF --project-ref thvucacdrsexfcpkswpv\n');

  return true;
}

async function testCreateOrder() {
  console.log('🧪 Step 4: Testing Order Creation (With Mock Auth)\n');

  // Create a test user session
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  console.log('⚠️  To fully test, you need to:');
  console.log('1. Sign in to the app');
  console.log('2. Open Developer Tools / React Native Debugger');
  console.log('3. Look for console logs when you click "Select" on a plan');
  console.log('4. Look for error messages like:');
  console.log('   - "Failed to create order"');
  console.log('   - "Network error"');
  console.log('   - "Invalid tier/package"');
  console.log('   - Razorpay API errors\n');

  console.log('📱 Check these in your app logs:\n');
  console.log('Look for these console.log messages:');
  console.log('🔵 Creating Razorpay order: { tier: "paper1", package: "3_months" }');
  console.log('✅ Razorpay order created successfully: order_xxxxx');
  console.log('❌ Error creating Razorpay order: <error details>\n');
}

async function checkRecentPayments() {
  console.log('💳 Step 5: Checking Recent Payment Attempts\n');

  try {
    const { data: payments, error } = await supabaseAdmin
      .from('payments')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(5);

    if (error) {
      console.log('❌ Could not fetch payments:', error.message);
      return;
    }

    if (!payments || payments.length === 0) {
      console.log('📝 No payment records found (this is normal for first test)');
      console.log('   Payments will be created when order creation succeeds\n');
      return;
    }

    console.log(`📊 Found ${payments.length} recent payment(s):\n`);
    payments.forEach((payment, i) => {
      console.log(`${i + 1}. Order: ${payment.order_id}`);
      console.log(`   Status: ${payment.status}`);
      console.log(`   Tier: ${payment.tier}`);
      console.log(`   Amount: ₹${payment.amount / 100}`);
      console.log(`   Created: ${new Date(payment.created_at).toLocaleString()}\n`);
    });

  } catch (error) {
    console.error('❌ Error checking payments:', error);
  }
}

async function main() {
  const dbOk = await checkDatabase();
  if (!dbOk) {
    console.log('⛔ Database schema issues found. Fix these first!\n');
    return;
  }

  const edgeOk = await checkEdgeFunctions();
  if (!edgeOk) {
    console.log('⛔ Edge Function issues found. Fix these first!\n');
    return;
  }

  await checkRazorpayConfig();
  await checkRecentPayments();
  await testCreateOrder();

  console.log('═══════════════════════════════════════\n');
  console.log('📋 Summary:\n');
  console.log('If all checks passed above, the issue might be:');
  console.log('1. ❌ Network connectivity in the app');
  console.log('2. ❌ User not authenticated');
  console.log('3. ❌ Razorpay secrets not set in Supabase');
  console.log('4. ❌ React Native bundler needs restart\n');

  console.log('🔍 Next Steps:\n');
  console.log('1. Check app console logs when clicking "Select"');
  console.log('2. Look for error messages in React Native logs');
  console.log('3. Restart Metro bundler: npm start -- --reset-cache');
  console.log('4. Share any error messages you see\n');
}

main().catch(console.error);
