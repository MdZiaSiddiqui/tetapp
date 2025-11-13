import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';

// Load environment variables from .env file
config();

// Load environment variables
const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Error: Missing Supabase environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function checkDatabase() {
  console.log('🔍 Checking database contents...\n');

  // Check subjects
  const { data: subjects, error: subjectsError } = await supabase
    .from('subjects')
    .select('*');

  if (subjectsError) {
    console.error('❌ Error fetching subjects:', subjectsError.message);
  } else {
    console.log(`📚 Subjects found: ${subjects?.length || 0}`);
    subjects?.forEach(s => console.log(`   - ${s.id}: ${s.name}`));
  }

  // Check chapters
  const { data: chapters, error: chaptersError } = await supabase
    .from('chapters')
    .select('*');

  if (chaptersError) {
    console.error('❌ Error fetching chapters:', chaptersError.message);
  } else {
    console.log(`\n📖 Chapters found: ${chapters?.length || 0}`);
    chapters?.forEach(c => console.log(`   - ${c.name} (subject_id: ${c.subject_id})`));
  }

  // Check questions
  const { data: questions, error: questionsError } = await supabase
    .from('questions')
    .select('*');

  if (questionsError) {
    console.error('❌ Error fetching questions:', questionsError.message);
  } else {
    console.log(`\n❓ Questions found: ${questions?.length || 0}`);

    // Group by subject
    const bySubject: Record<string, number> = {};
    questions?.forEach(q => {
      bySubject[q.subject_id] = (bySubject[q.subject_id] || 0) + 1;
    });

    console.log('\n📊 Questions by subject:');
    Object.entries(bySubject).forEach(([subject, count]) => {
      console.log(`   - ${subject}: ${count} questions`);
    });
  }

  // Check for Biochemistry specifically
  console.log('\n🔬 Checking Biochemistry specifically:');

  const { data: bioSubject } = await supabase
    .from('subjects')
    .select('*')
    .eq('id', 'biochemistry')
    .single();

  if (bioSubject) {
    console.log('✅ Biochemistry subject exists:', bioSubject);

    const { data: bioChapters } = await supabase
      .from('chapters')
      .select('*')
      .eq('subject_id', 'biochemistry');

    console.log(`\n📖 Biochemistry chapters: ${bioChapters?.length || 0}`);
    bioChapters?.forEach(c => console.log(`   - ${c.id}: ${c.name}`));

    const { data: bioQuestions } = await supabase
      .from('questions')
      .select('*')
      .eq('subject_id', 'biochemistry');

    console.log(`\n❓ Biochemistry questions: ${bioQuestions?.length || 0}`);
  } else {
    console.log('❌ Biochemistry subject NOT found in database');
  }
}

checkDatabase();
