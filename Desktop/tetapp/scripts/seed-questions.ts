import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';
import { config } from 'dotenv';

// Load environment variables from .env file
config();

// Load environment variables
const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Error: Missing Supabase environment variables');
  console.error('Please set EXPO_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in your .env file');
  console.error('(Service role key bypasses RLS for seeding - get it from Supabase dashboard)');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

interface SampleQuestion {
  question_number: number;
  question_text: string;
  options: string[];
  correct_answer: string;
  explanation: string;
  alternative_image?: string;
  classification: {
    subject: string;
    chapter: string;
  };
  difficulty?: 'easy' | 'medium' | 'difficult';
  tag?: string;
}

interface DatabaseQuestion {
  subject: string;
  chapter: string;
  question: string;
  tag?: string;
  image_url?: string;
  options: string[];
  solutions: string;
  reference?: string;
  difficulty?: 'easy' | 'medium' | 'difficult';
  filters?: Record<string, any>;
}

async function loadQuestions(): Promise<SampleQuestion[]> {
  const sampleQuestionsPath = path.join(__dirname, '..', 'sampleques.md');
  const enzymeQuestionsPath = path.join(__dirname, '..', 'biochemistry-enzyme-questions.json');

  const sampleQuestions = JSON.parse(fs.readFileSync(sampleQuestionsPath, 'utf-8'));
  const enzymeQuestions = JSON.parse(fs.readFileSync(enzymeQuestionsPath, 'utf-8'));

  return [...sampleQuestions, ...enzymeQuestions];
}

function transformQuestion(sampleQuestion: SampleQuestion): DatabaseQuestion {
  return {
    subject: sampleQuestion.classification.subject,
    chapter: sampleQuestion.classification.chapter,
    question: sampleQuestion.question_text,
    tag: sampleQuestion.tag, // Use tag from question if available
    image_url: sampleQuestion.alternative_image,
    options: sampleQuestion.options,
    solutions: sampleQuestion.explanation,
    reference: undefined, // Add reference if available
    difficulty: sampleQuestion.difficulty || determineDifficulty(sampleQuestion),
    filters: {
      question_number: sampleQuestion.question_number,
      correct_answer: sampleQuestion.correct_answer,
    },
  };
}

function determineDifficulty(question: SampleQuestion): 'easy' | 'medium' | 'difficult' {
  // Simple heuristic based on question length and complexity
  const questionLength = question.question_text.length;
  const optionsCount = question.options.length;
  const hasImage = !!question.alternative_image;

  if (hasImage || questionLength > 200) {
    return 'difficult';
  } else if (questionLength > 100 || optionsCount > 4) {
    return 'medium';
  }
  return 'easy';
}

// Helper function to generate slug from name
function generateSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

async function ensureSubjectsAndChapters(questions: DatabaseQuestion[]) {
  const uniqueSubjects = [...new Set(questions.map(q => q.subject))];
  const uniqueChapters = [...new Set(questions.map(q => ({ subject: q.subject, chapter: q.chapter })))];

  console.log('\n📚 Ensuring subjects exist...');
  for (const subjectName of uniqueSubjects) {
    const subjectId = generateSlug(subjectName);

    const { data: existingSubject } = await supabase
      .from('subjects')
      .select('id, name')
      .eq('id', subjectId)
      .single();

    if (!existingSubject) {
      const { error } = await supabase
        .from('subjects')
        .insert({
          id: subjectId,
          name: subjectName,
          description: `${subjectName} subject`
        });

      if (error) {
        console.error(`❌ Error creating subject ${subjectName}:`, error.message);
      } else {
        console.log(`✅ Created subject: ${subjectName}`);
      }
    } else {
      console.log(`ℹ️  Subject already exists: ${subjectName}`);
    }
  }

  console.log('\n📖 Ensuring chapters exist...');
  for (const { subject, chapter } of uniqueChapters) {
    // Get subject ID
    const subjectId = generateSlug(subject);
    const { data: subjectData } = await supabase
      .from('subjects')
      .select('id')
      .eq('id', subjectId)
      .single();

    if (!subjectData) {
      console.error(`❌ Subject not found: ${subject}`);
      continue;
    }

    const { data: existingChapter } = await supabase
      .from('chapters')
      .select('id, name')
      .eq('subject_id', subjectData.id)
      .eq('name', chapter)
      .single();

    if (!existingChapter) {
      const { error } = await supabase
        .from('chapters')
        .insert({
          subject_id: subjectData.id,
          name: chapter,
          description: `${chapter} chapter`,
        });

      if (error) {
        console.error(`❌ Error creating chapter ${chapter}:`, error.message);
      } else {
        console.log(`✅ Created chapter: ${chapter} (${subject})`);
      }
    } else {
      console.log(`ℹ️  Chapter already exists: ${chapter} (${subject})`);
    }
  }
}

async function seedQuestions() {
  console.log('🌱 Starting question seeding process...\n');

  try {
    // Load questions from file
    console.log('📂 Loading questions from sampleques.md...');
    const sampleQuestions = await loadQuestions();
    console.log(`✅ Loaded ${sampleQuestions.length} questions\n`);

    // Transform questions
    console.log('🔄 Transforming questions...');
    const dbQuestions = sampleQuestions.map(transformQuestion);
    console.log(`✅ Transformed ${dbQuestions.length} questions\n`);

    // Ensure subjects and chapters exist
    await ensureSubjectsAndChapters(dbQuestions);

    // Insert questions
    console.log('\n💾 Inserting questions into database...');
    let successCount = 0;
    let errorCount = 0;

    for (const question of dbQuestions) {
      // Get subject and chapter IDs
      const subjectId = generateSlug(question.subject);
      const { data: subjectData } = await supabase
        .from('subjects')
        .select('id')
        .eq('id', subjectId)
        .single();

      if (!subjectData) {
        console.error(`❌ Subject not found: ${question.subject}`);
        errorCount++;
        continue;
      }

      const { data: chapterData } = await supabase
        .from('chapters')
        .select('id')
        .eq('subject_id', subjectData.id)
        .eq('name', question.chapter)
        .single();

      if (!chapterData) {
        console.error(`❌ Chapter not found: ${question.chapter}`);
        errorCount++;
        continue;
      }

      // Insert question
      const { error } = await supabase.from('questions').insert({
        subject_id: subjectData.id,
        chapter_id: chapterData.id,
        question: question.question,
        tag: question.tag,
        image_url: question.image_url,
        options: question.options,
        solutions: question.solutions,
        reference: question.reference,
        difficulty: question.difficulty,
        filters: question.filters,
      });

      if (error) {
        console.error(`❌ Error inserting question:`, error.message);
        errorCount++;
      } else {
        successCount++;
        process.stdout.write(`\r✅ Inserted ${successCount}/${dbQuestions.length} questions`);
      }
    }

    console.log('\n\n🎉 Seeding completed!');
    console.log(`✅ Successfully inserted: ${successCount} questions`);
    if (errorCount > 0) {
      console.log(`❌ Errors: ${errorCount}`);
    }
  } catch (error) {
    console.error('\n❌ Fatal error during seeding:', error);
    process.exit(1);
  }
}

// Run the seeding function
seedQuestions();
