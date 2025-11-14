/**
 * Verify RLS Fix Was Applied
 */

import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function checkRLSPolicies() {
  console.log('🔍 Checking RLS Policies on Payments Table\n');

  try {
    // Query pg_policies to see what policies exist
    const { data, error } = await supabase
      .rpc('exec_sql', {
        sql_query: `
          SELECT
            policyname,
            permissive,
            roles,
            cmd,
            qual,
            with_check
          FROM pg_policies
          WHERE tablename = 'payments'
          ORDER BY policyname;
        `
      } as any);

    if (error) {
      console.error('❌ Error querying policies:', error);
      console.log('\n💡 The RLS fix might not have been applied.');
      console.log('   Please run: FIX_RLS_POLICY.sql in Supabase SQL Editor\n');
      return false;
    }

    console.log('📋 Current RLS Policies:\n');

    if (!data || data.length === 0) {
      console.log('❌ No policies found!\n');
      console.log('💡 Please apply FIX_RLS_POLICY.sql in Supabase SQL Editor\n');
      return false;
    }

    // Check for required policies
    const requiredPolicies = [
      'Users can create own payments',
      'Users can view own payments',
      'Users can update own payments',
      'Service role has full access to payments'
    ];

    const foundPolicies = new Set();

    if (Array.isArray(data)) {
      data.forEach((policy: any) => {
        console.log(`✓ ${policy.policyname}`);
        console.log(`  Command: ${policy.cmd}`);
        console.log(`  Roles: ${policy.roles}\n`);
        foundPolicies.add(policy.policyname);
      });
    }

    const missingPolicies = requiredPolicies.filter(p => !foundPolicies.has(p));

    if (missingPolicies.length > 0) {
      console.log('\n❌ Missing Required Policies:');
      missingPolicies.forEach(p => console.log(`   - ${p}`));
      console.log('\n💡 Please apply FIX_RLS_POLICY.sql in Supabase SQL Editor\n');
      return false;
    }

    console.log('\n✅ All required RLS policies are in place!\n');
    return true;

  } catch (error) {
    console.error('❌ Error:', error);
    return false;
  }
}

async function testPaymentInsert() {
  console.log('🧪 Testing Payment Insert (Simulated)\n');

  try {
    // Get a real user ID from user_profiles
    const { data: users, error: usersError } = await supabase
      .from('user_profiles')
      .select('id')
      .limit(1);

    if (usersError || !users || users.length === 0) {
      console.log('⚠️  No users found in database');
      return;
    }

    const testUserId = users[0].id;
    console.log(`Using test user ID: ${testUserId}\n`);

    // Try to insert a test payment record
    const testPayment = {
      user_id: testUserId,
      order_id: `test_order_${Date.now()}`,
      tier: 'paper1',
      package_type: '3_months',
      amount: 49900,
      currency: 'INR',
      status: 'created',
      notes: { test: true }
    };

    const { data, error } = await supabase
      .from('payments')
      .insert(testPayment)
      .select()
      .single();

    if (error) {
      console.log('❌ Test insert failed:', error.message);

      if (error.message.includes('row-level security')) {
        console.log('\n💡 RLS policy is still blocking inserts!');
        console.log('   Please verify FIX_RLS_POLICY.sql was applied correctly.\n');
      }
      return false;
    }

    console.log('✅ Test payment inserted successfully!');
    console.log('   ID:', data.id);
    console.log('   Order ID:', data.order_id);

    // Clean up test record
    await supabase.from('payments').delete().eq('id', data.id);
    console.log('✅ Test record cleaned up\n');

    return true;

  } catch (error) {
    console.error('❌ Test failed:', error);
    return false;
  }
}

async function main() {
  console.log('═══════════════════════════════════════\n');
  console.log('🔍 RLS Policy Verification\n');
  console.log('═══════════════════════════════════════\n');

  const policiesOk = await checkRLSPolicies();

  if (!policiesOk) {
    console.log('⛔ Fix RLS policies first before proceeding!\n');
    return;
  }

  const testOk = await testPaymentInsert();

  console.log('═══════════════════════════════════════\n');

  if (policiesOk && testOk) {
    console.log('✅ RLS policies are working correctly!\n');
    console.log('🎉 Payments should work now in the app.\n');
  } else {
    console.log('❌ RLS policies need to be fixed.\n');
    console.log('📝 Steps:\n');
    console.log('1. Open: https://supabase.com/dashboard/project/thvucacdrsexfcpkswpv/sql');
    console.log('2. Copy contents of: FIX_RLS_POLICY.sql');
    console.log('3. Paste and click "RUN"');
    console.log('4. Run this script again to verify\n');
  }
}

main().catch(console.error);
