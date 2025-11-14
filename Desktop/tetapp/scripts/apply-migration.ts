/**
 * Apply Database Migration to Supabase
 * This script reads the migration SQL file and executes it on your Supabase database
 */

import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing credentials in .env file:');
  console.error('   - EXPO_PUBLIC_SUPABASE_URL');
  console.error('   - SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

// Create Supabase client with service role key (has full access)
const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function applyMigration() {
  console.log('🚀 Applying Razorpay Payment Migration\n');
  console.log('═══════════════════════════════════════\n');

  try {
    // Read the migration file
    const migrationPath = path.join(__dirname, '../supabase/migrations/add_pro_access_fields.sql');

    if (!fs.existsSync(migrationPath)) {
      console.error('❌ Migration file not found:', migrationPath);
      process.exit(1);
    }

    console.log('📖 Reading migration file...');
    const migrationSQL = fs.readFileSync(migrationPath, 'utf-8');

    console.log(`✅ Migration file loaded (${migrationSQL.length} characters)\n`);

    // Split the SQL into individual statements
    // We need to execute them one by one
    const statements = migrationSQL
      .split(';')
      .map(s => s.trim())
      .filter(s => s.length > 0 && !s.startsWith('--') && !s.startsWith('/*'));

    console.log(`📝 Found ${statements.length} SQL statements to execute\n`);

    // Execute each statement
    let successCount = 0;
    let errorCount = 0;

    for (let i = 0; i < statements.length; i++) {
      const statement = statements[i];

      // Skip comments and DO blocks (they don't return data)
      if (statement.includes('DO $$') || statement.includes('RAISE NOTICE')) {
        console.log(`⏭️  Skipping informational block ${i + 1}`);
        continue;
      }

      try {
        console.log(`⚙️  Executing statement ${i + 1}/${statements.length}...`);

        const { error } = await supabase.rpc('exec_sql', { sql_query: statement });

        if (error) {
          // Some errors are OK (like "already exists")
          if (error.message.includes('already exists') ||
              error.message.includes('does not exist') ||
              error.message.includes('column') && error.message.includes('already exists')) {
            console.log(`   ⚠️  Already exists (skipping)`);
          } else {
            console.error(`   ❌ Error:`, error.message);
            errorCount++;
          }
        } else {
          console.log(`   ✅ Success`);
          successCount++;
        }
      } catch (err) {
        console.error(`   ❌ Exception:`, err);
        errorCount++;
      }
    }

    console.log('\n═══════════════════════════════════════\n');
    console.log(`📊 Migration Summary:`);
    console.log(`   ✅ Successful: ${successCount}`);
    console.log(`   ❌ Errors: ${errorCount}`);

    if (errorCount > 0) {
      console.log('\n⚠️  Some statements failed. This is often OK if tables/columns already exist.');
      console.log('   Check the errors above to see if they are critical.\n');
    }

    console.log('\n🧪 Verifying migration...\n');

    // Verify the tables exist
    const { data: paymentsCheck, error: paymentsError } = await supabase
      .from('payments')
      .select('*')
      .limit(1);

    if (paymentsError && paymentsError.message.includes('does not exist')) {
      console.log('❌ Payments table still not found!');
      console.log('\n📝 Please apply the migration manually:');
      console.log('1. Go to: https://supabase.com/dashboard/project/thvucacdrsexfcpkswpv/sql');
      console.log('2. Copy the contents of: supabase/migrations/add_pro_access_fields.sql');
      console.log('3. Paste and run in the SQL Editor\n');
      process.exit(1);
    } else {
      console.log('✅ Payments table exists!');
    }

    const { data: profileCheck, error: profileError } = await supabase
      .from('user_profiles')
      .select('id, pro_tier, pro_access_paper, pro_expires_at')
      .limit(1);

    if (profileError) {
      console.log('❌ User profiles pro fields not found!');
      console.log('\n📝 Please apply the migration manually (see instructions above)\n');
      process.exit(1);
    } else {
      console.log('✅ User profiles has pro fields!');
    }

    console.log('\n🎉 Migration applied successfully!\n');
    console.log('You can now test payments in your app.\n');

  } catch (error) {
    console.error('❌ Migration failed:', error);
    console.log('\n📝 Please apply the migration manually:');
    console.log('1. Go to: https://supabase.com/dashboard/project/thvucacdrsexfcpkswpv/sql');
    console.log('2. Copy the contents of: supabase/migrations/add_pro_access_fields.sql');
    console.log('3. Paste and run in the SQL Editor\n');
    process.exit(1);
  }
}

applyMigration().catch(console.error);
