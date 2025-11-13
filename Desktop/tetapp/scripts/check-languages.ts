import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';

config();

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkLanguages() {
  // Get total count
  const { count: totalCount, error: countError } = await supabase
    .from('questions')
    .select('*', { count: 'exact', head: true });

  if (countError) {
    console.error('Error getting count:', countError);
    return;
  }

  console.log(`\n✅ Total questions in database: ${totalCount}\n`);

  // Get language counts
  const { data: englishData } = await supabase
    .from('questions')
    .select('id', { count: 'exact', head: true })
    .eq('language', 'English');

  const { data: teluguData } = await supabase
    .from('questions')
    .select('id', { count: 'exact', head: true })
    .eq('language', 'Telugu');

  const { data: urduData } = await supabase
    .from('questions')
    .select('id', { count: 'exact', head: true })
    .eq('language', 'Urdu');

  console.log('📊 Questions by Language:\n');
  console.log(`  English: ${(englishData as any)?.count || 0}`);
  console.log(`  Telugu: ${(teluguData as any)?.count || 0}`);
  console.log(`  Urdu: ${(urduData as any)?.count || 0}`);

  // Sample some Telugu and Urdu questions
  const { data: teluguSample } = await supabase
    .from('questions')
    .select('subject_id, paper')
    .eq('language', 'Telugu')
    .limit(5);

  console.log('\n📝 Telugu questions sample:');
  teluguSample?.forEach((q: any) => {
    console.log(`  - ${q.subject_id} ${q.paper}`);
  });

  const { data: urduSample } = await supabase
    .from('questions')
    .select('subject_id, paper')
    .eq('language', 'Urdu')
    .limit(5);

  console.log('\n📝 Urdu questions sample:');
  urduSample?.forEach((q: any) => {
    console.log(`  - ${q.subject_id} ${q.paper}`);
  });
}

checkLanguages();
