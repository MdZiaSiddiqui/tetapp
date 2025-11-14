/**
 * Test Razorpay Edge Functions
 * Run this to test if the Edge Functions are working correctly
 */

import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Missing Supabase credentials in .env file');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testCreateOrder() {
  console.log('\n🧪 Testing create-razorpay-order function...\n');

  try {
    // Test without auth (should fail)
    console.log('Test 1: Without authentication (should fail)');
    const { data: noAuthData, error: noAuthError } = await supabase.functions.invoke(
      'create-razorpay-order',
      {
        body: {
          tier: 'paper1',
          package: '3_months',
        },
      }
    );

    if (noAuthError) {
      console.log('✅ Expected error (no auth):', noAuthError.message);
    } else {
      console.log('❌ Unexpected: Function worked without auth');
    }

    // Now test with a mock user (you'll need to sign in first)
    console.log('\n📝 To test with authentication, you need to:');
    console.log('1. Sign in to your app');
    console.log('2. Copy the auth token from the request headers');
    console.log('3. Or test directly in the app\n');

    console.log('🔍 Checking if function is deployed...');
    const { data: functionData, error: functionError } = await supabase.functions.invoke(
      'create-razorpay-order',
      {
        body: {
          tier: 'paper1',
          package: '3_months',
        },
      }
    );

    console.log('\n📊 Function Response:');
    console.log('Data:', JSON.stringify(functionData, null, 2));
    console.log('Error:', functionError);

    if (functionError?.message?.includes('not found')) {
      console.log('\n❌ Edge Function not found! Deploy it with:');
      console.log('   ./deploy-functions.sh');
    }

  } catch (error) {
    console.error('❌ Test failed:', error);
  }
}

async function checkDatabase() {
  console.log('\n🔍 Checking database schema...\n');

  try {
    // Check if payments table exists
    const { data: paymentsCheck, error: paymentsError } = await supabase
      .from('payments')
      .select('*')
      .limit(1);

    if (paymentsError) {
      if (paymentsError.message.includes('does not exist')) {
        console.log('❌ Payments table NOT found!');
        console.log('   Run migration: supabase/migrations/add_pro_access_fields.sql');
      } else {
        console.log('⚠️  Error checking payments table:', paymentsError.message);
      }
    } else {
      console.log('✅ Payments table exists');
    }

    // Check if user_profiles has pro fields
    const { data: profileCheck, error: profileError } = await supabase
      .from('user_profiles')
      .select('id, pro_tier, pro_access_paper, pro_expires_at')
      .limit(1);

    if (profileError) {
      console.log('❌ User profiles pro fields NOT found!');
      console.log('   Run migration: supabase/migrations/add_pro_access_fields.sql');
    } else {
      console.log('✅ User profiles has pro access fields');
    }

  } catch (error) {
    console.error('❌ Database check failed:', error);
  }
}

async function main() {
  console.log('🚀 Razorpay Integration Test\n');
  console.log('═══════════════════════════════════════\n');

  await checkDatabase();
  await testCreateOrder();

  console.log('\n═══════════════════════════════════════');
  console.log('✅ Test complete!\n');
}

main().catch(console.error);
