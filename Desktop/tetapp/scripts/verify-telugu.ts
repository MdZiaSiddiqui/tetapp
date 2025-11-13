/**
 * Verify Telugu Subject Data
 * Checks if Telugu subject and questions are properly set up
 */

import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';

// Load environment variables
config();

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function verifyTelugu() {
  console.log('🔍 Verifying Telugu Subject Data...\n');

  try {
    // 1. Check Telugu subject
    console.log('📚 Checking Telugu subject...');
    const { data: subject, error: subjectError } = await supabase
      .from('subjects')
      .select('*')
      .eq('id', 'telugu')
      .single();

    if (subjectError || !subject) {
      console.error('❌ Telugu subject not found!');
      return;
    }

    console.log('✅ Telugu subject found:', subject);

    // 2. Check chapters
    console.log('\n📖 Checking Telugu chapters...');
    const { data: chapters, error: chaptersError } = await supabase
      .from('chapters')
      .select('*')
      .eq('subject_id', 'telugu')
      .order('name');

    if (chaptersError || !chapters) {
      console.error('❌ Telugu chapters not found!');
      return;
    }

    console.log(`✅ Found ${chapters.length} chapters:`);
    chapters.forEach(ch => {
      console.log(`   - ${ch.name} (ID: ${ch.id})`);
    });

    // 3. Check questions count
    console.log('\n📝 Checking Telugu questions...');
    const { count: totalCount, error: countError } = await supabase
      .from('questions')
      .select('*', { count: 'exact', head: true })
      .eq('subject_id', 'telugu');

    if (countError) {
      console.error('❌ Error counting questions:', countError.message);
      return;
    }

    console.log(`✅ Total Telugu questions: ${totalCount}`);

    // 4. Check questions by paper
    console.log('\n📊 Questions breakdown by paper:');

    const { count: paper1Count } = await supabase
      .from('questions')
      .select('*', { count: 'exact', head: true })
      .eq('subject_id', 'telugu')
      .eq('paper', 'Paper 1');

    const { count: paper2Count } = await supabase
      .from('questions')
      .select('*', { count: 'exact', head: true })
      .eq('subject_id', 'telugu')
      .eq('paper', 'Paper 2');

    console.log(`   - Paper 1: ${paper1Count} questions`);
    console.log(`   - Paper 2: ${paper2Count} questions`);

    // 5. Sample a few questions
    console.log('\n📄 Sample Telugu questions (first 3):');
    const { data: sampleQuestions } = await supabase
      .from('questions')
      .select('question, paper, language')
      .eq('subject_id', 'telugu')
      .limit(3);

    if (sampleQuestions) {
      sampleQuestions.forEach((q, idx) => {
        console.log(`\n${idx + 1}. ${q.paper} (${q.language}):`);
        console.log(`   ${q.question.substring(0, 80)}...`);
      });
    }

    console.log('\n\n✅ VERIFICATION COMPLETE!');
    console.log('═══════════════════════════════════════');
    console.log('Telugu subject is properly set up and ready to use.');
    console.log('The Telugu card should now appear on the home page.');
    console.log('═══════════════════════════════════════\n');

  } catch (error) {
    console.error('\n❌ ERROR:', error);
  }
}

// Run verification
verifyTelugu();
