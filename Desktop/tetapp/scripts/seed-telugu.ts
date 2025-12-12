/**
 * Telugu Questions Seeding Script
 * Seeds only Telugu subject questions (Paper 1 & Paper 2)
 */

import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';
import * as path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

config();

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

interface TETQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface FileMapping {
  filename: string;
  subject: string;
  subjectId: string;
  paper: 'Paper 1' | 'Paper 2';
  language: 'English' | 'Telugu' | 'Urdu';
}

// Only Telugu subject files
const TELUGU_FILES: FileMapping[] = [
  { filename: 'teluguPaper1Data.ts', subject: 'Telugu', subjectId: 'telugu', paper: 'Paper 1', language: 'Telugu' },
  { filename: 'teluguPaper2Data.ts', subject: 'Telugu', subjectId: 'telugu', paper: 'Paper 2', language: 'Telugu' },
];

function getExportName(filename: string): string {
  const baseName = filename.replace('.ts', '');
  if (baseName.endsWith('DataTelugu')) {
    return baseName.replace('DataTelugu', 'TeluguQuestions');
  }
  if (baseName.endsWith('DataUrdu')) {
    return baseName.replace('DataUrdu', 'UrduQuestions');
  }
  return baseName.replace('Data', 'Questions');
}

function normalizeQuestion(q: TETQuestion, mapping: FileMapping, chapterId: string) {
  const correctAnswer = q.options[q.correctAnswer];
  const questionNumber = parseInt(q.id.replace(/[^0-9]/g, '')) || 0;

  return {
    subject_id: mapping.subjectId,
    chapter_id: chapterId,
    question: q.question,
    options: q.options,
    correct_answer: correctAnswer,
    solutions: q.explanation,
    paper: mapping.paper,
    language: mapping.language,
    question_number: questionNumber,
    difficulty: 'medium' as const,
    tag: `${mapping.subject} - ${mapping.paper}`,
  };
}

async function loadQuestionsFromFile(filename: string): Promise<TETQuestion[]> {
  try {
    const filePath = path.join(__dirname, '..', 'data', filename);
    const fileUrl = pathToFileURL(filePath).href;
    const module = await import(fileUrl);

    const exportName = getExportName(filename);
    let data = module[exportName];

    if (!data || !Array.isArray(data)) {
      const questionExports = Object.keys(module).filter(key => key.endsWith('Questions'));
      if (questionExports.length > 0) {
        data = module[questionExports[0]];
        console.log(`   ℹ️  Using export '${questionExports[0]}' instead of '${exportName}'`);
      }
    }

    if (!data || !Array.isArray(data)) {
      data = module.default;
    }

    if (!data || !Array.isArray(data)) {
      console.warn(`⚠️  Could not find question array in ${filename}`);
      console.warn(`   Available exports:`, Object.keys(module));
      return [];
    }

    return data;
  } catch (error) {
    console.error(`❌ Error loading ${filename}:`, error);
    return [];
  }
}

async function ensureChapter(subjectId: string, paper: 'Paper 1' | 'Paper 2'): Promise<string | null> {
  const { data: chapter, error } = await supabase
    .from('chapters')
    .select('id')
    .eq('subject_id', subjectId)
    .eq('name', paper)
    .single();

  if (error) {
    console.error(`❌ Error finding chapter for ${subjectId} - ${paper}:`, error.message);
    return null;
  }

  return chapter.id;
}

async function insertQuestionsBatch(questions: any[], batchSize = 50) {
  const batches = [];
  for (let i = 0; i < questions.length; i += batchSize) {
    batches.push(questions.slice(i, i + batchSize));
  }

  let successCount = 0;
  let errorCount = 0;

  for (let i = 0; i < batches.length; i++) {
    const batch = batches[i];
    const { error } = await supabase.from('questions').insert(batch);

    if (error) {
      console.error(`❌ Error inserting batch ${i + 1}/${batches.length}:`, error.message);
      errorCount += batch.length;
    } else {
      successCount += batch.length;
      process.stdout.write(`\r✅ Inserted ${successCount}/${questions.length} questions`);
    }
  }

  return { successCount, errorCount };
}

async function seedTeluguQuestions() {
  console.log('🌱 Starting Telugu Questions Seeding...\n');

  let totalQuestions = 0;
  let totalSuccess = 0;
  let totalErrors = 0;

  try {
    for (const mapping of TELUGU_FILES) {
      console.log(`\n📖 Processing: ${mapping.filename}`);
      console.log(`   Subject: ${mapping.subject} | Paper: ${mapping.paper} | Language: ${mapping.language}`);

      const questions = await loadQuestionsFromFile(mapping.filename);
      if (questions.length === 0) {
        console.log(`   ⚠️  No questions found, skipping...`);
        continue;
      }
      console.log(`   ✅ Loaded ${questions.length} questions`);

      const chapterId = await ensureChapter(mapping.subjectId, mapping.paper);
      if (!chapterId) {
        console.log(`   ❌ Could not find chapter, skipping...`);
        console.log(`   💡 Make sure Telugu chapters exist in the database`);
        continue;
      }

      const dbQuestions = questions.map(q => normalizeQuestion(q, mapping, chapterId));
      console.log(`   🔄 Transformed ${dbQuestions.length} questions`);

      console.log(`   💾 Inserting questions...`);
      const { successCount, errorCount } = await insertQuestionsBatch(dbQuestions);

      totalQuestions += questions.length;
      totalSuccess += successCount;
      totalErrors += errorCount;

      console.log(`\n   ✅ Success: ${successCount} | ❌ Errors: ${errorCount}`);
    }

    console.log('\n\n🎉 TELUGU QUESTIONS SEEDING COMPLETED!');
    console.log('═══════════════════════════════════════');
    console.log(`📝 Total Questions: ${totalQuestions}`);
    console.log(`✅ Successfully Inserted: ${totalSuccess}`);
    console.log(`❌ Errors: ${totalErrors}`);
    console.log('═══════════════════════════════════════\n');

    // Verify Telugu questions
    const { count } = await supabase
      .from('questions')
      .select('*', { count: 'exact', head: true })
      .eq('subject_id', 'telugu');

    console.log(`🔍 Total Telugu questions in database: ${count}`);

  } catch (error) {
    console.error('\n❌ FATAL ERROR:', error);
    process.exit(1);
  }
}

seedTeluguQuestions();
