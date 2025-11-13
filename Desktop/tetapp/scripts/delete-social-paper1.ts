/**
 * Delete Social Studies Paper 1 - Questions, Chapters, and Notes
 * This script removes all Paper 1 content for Social Studies subject
 */

import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';

// Load environment variables
config();

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase environment variables');
  console.error('Set EXPO_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function deleteSocialStudiesPaper1() {
  console.log('🗑️  Starting deletion of Social Studies Paper 1...\n');

  try {
    // Step 1: Check what exists for Social Studies Paper 1
    console.log('📊 Checking existing data...');

    const { data: questions, error: questionsError } = await supabase
      .from('questions')
      .select('id, subject_id, paper, language')
      .eq('subject_id', 'social')
      .eq('paper', 'Paper 1');

    if (questionsError) {
      console.error('❌ Error checking questions:', questionsError);
    } else {
      console.log(`   Found ${questions?.length || 0} Paper 1 questions for Social Studies`);
    }

    const { data: chapters, error: chaptersError } = await supabase
      .from('chapters')
      .select('id, subject_id, name')
      .eq('subject_id', 'social')
      .eq('name', 'Paper 1');

    if (chaptersError) {
      console.error('❌ Error checking chapters:', chaptersError);
    } else {
      console.log(`   Found ${chapters?.length || 0} Paper 1 chapters for Social Studies`);
    }

    // Step 2: Delete questions
    if (questions && questions.length > 0) {
      console.log('\n🗑️  Deleting questions...');
      const { error: deleteQuestionsError } = await supabase
        .from('questions')
        .delete()
        .eq('subject_id', 'social')
        .eq('paper', 'Paper 1');

      if (deleteQuestionsError) {
        console.error('❌ Error deleting questions:', deleteQuestionsError);
      } else {
        console.log(`   ✅ Deleted ${questions.length} questions`);
      }
    }

    // Step 3: Delete chapters
    if (chapters && chapters.length > 0) {
      console.log('\n🗑️  Deleting chapters...');
      const { error: deleteChaptersError } = await supabase
        .from('chapters')
        .delete()
        .eq('subject_id', 'social')
        .eq('name', 'Paper 1');

      if (deleteChaptersError) {
        console.error('❌ Error deleting chapters:', deleteChaptersError);
      } else {
        console.log(`   ✅ Deleted ${chapters.length} chapters`);
      }
    }

    // Summary
    console.log('\n✅ Deletion complete!');
    console.log('\n📋 Summary:');
    console.log(`   - Questions deleted: ${questions?.length || 0}`);
    console.log(`   - Chapters deleted: ${chapters?.length || 0}`);
    console.log('\n⚠️  Manual steps remaining:');
    console.log('   1. Remove Social Studies entries from lib/notes-data.ts');
    console.log('   2. Delete HTML files: xhtml/social_studies_tet*.html');

  } catch (error) {
    console.error('❌ Unexpected error:', error);
    process.exit(1);
  }
}

// Run the deletion
deleteSocialStudiesPaper1()
  .then(() => {
    console.log('\n✅ Script completed successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Script failed:', error);
    process.exit(1);
  });
