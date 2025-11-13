/**
 * Debug script to check questions in database
 * Run with: npx ts-node debug-questions.ts
 */

import { supabase } from './lib/supabase';

async function debugQuestions() {
  console.log('🔍 Checking questions in database...\n');

  // 1. Get all subjects
  const { data: subjects, error: subjectsError } = await supabase
    .from('subjects')
    .select('id, name')
    .order('name');

  if (subjectsError) {
    console.error('Error fetching subjects:', subjectsError);
    return;
  }

  console.log(`📚 Found ${subjects?.length || 0} subjects:\n`);

  // 2. For each subject, count questions by paper and language
  for (const subject of subjects || []) {
    console.log(`\n📖 ${subject.name} (ID: ${subject.id})`);
    console.log('─'.repeat(60));

    // Count total questions for this subject
    const { count: totalCount, error: countError } = await supabase
      .from('questions')
      .select('*', { count: 'exact', head: true })
      .eq('subject_id', subject.id);

    if (countError) {
      console.error(`  ❌ Error: ${countError.message}`);
      continue;
    }

    console.log(`  Total Questions: ${totalCount || 0}`);

    if (totalCount === 0) {
      console.log('  ⚠️  No questions found for this subject');
      continue;
    }

    // Get breakdown by paper and language
    const { data: questions, error: questionsError } = await supabase
      .from('questions')
      .select('paper, language')
      .eq('subject_id', subject.id);

    if (!questionsError && questions) {
      const breakdown: Record<string, Record<string, number>> = {};

      questions.forEach(q => {
        const paper = q.paper || 'Unknown';
        const language = q.language || 'Unknown';

        if (!breakdown[paper]) {
          breakdown[paper] = {};
        }
        breakdown[paper][language] = (breakdown[paper][language] || 0) + 1;
      });

      console.log('\n  Breakdown by Paper and Language:');
      for (const [paper, languages] of Object.entries(breakdown)) {
        console.log(`\n    ${paper}:`);
        for (const [language, count] of Object.entries(languages)) {
          console.log(`      ${language}: ${count} questions`);
        }
      }
    }
  }

  console.log('\n\n✅ Debug complete!');
}

debugQuestions()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
