/**
 * TET Questions Seeding Script
 * Migrates all 27 data files from /data folder to Supabase
 * Handles: 8 subjects × (Paper 1 & Paper 2) × (English, Telugu, Urdu)
 */

import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';
import * as path from 'path';

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

// ============================================
// TYPE DEFINITIONS
// ============================================

// All exported questions follow this consistent format
interface TETQuestion {
  id: string; // "Q1", "Q2", etc.
  question: string;
  options: string[];
  correctAnswer: number; // index of correct option
  explanation: string;
}

interface FileMapping {
  filename: string;
  subject: string;
  subjectId: string;
  paper: 'Paper 1' | 'Paper 2';
  language: 'English' | 'Telugu' | 'Urdu';
}

// ============================================
// FILE MAPPINGS
// ============================================

const FILE_MAPPINGS: FileMapping[] = [
  // Child Development (3 languages × 2 papers)
  { filename: 'childDevelopmentPaper1Data.ts', subject: 'Child Development', subjectId: 'child-development', paper: 'Paper 1', language: 'English' },
  { filename: 'childDevelopmentPaper1DataTelugu.ts', subject: 'Child Development', subjectId: 'child-development', paper: 'Paper 1', language: 'Telugu' },
  { filename: 'childDevelopmentPaper1DataUrdu.ts', subject: 'Child Development', subjectId: 'child-development', paper: 'Paper 1', language: 'Urdu' },
  { filename: 'childDevelopmentPaper2Data.ts', subject: 'Child Development', subjectId: 'child-development', paper: 'Paper 2', language: 'English' },
  { filename: 'childDevelopmentPaper2DataTelugu.ts', subject: 'Child Development', subjectId: 'child-development', paper: 'Paper 2', language: 'Telugu' },
  { filename: 'childDevelopmentPaper2DataUrdu.ts', subject: 'Child Development', subjectId: 'child-development', paper: 'Paper 2', language: 'Urdu' },

  // Mathematics (3 languages × 2 papers)
  { filename: 'mathematicsPaper1Data.ts', subject: 'Mathematics', subjectId: 'mathematics', paper: 'Paper 1', language: 'English' },
  { filename: 'mathematicsPaper1DataTelugu.ts', subject: 'Mathematics', subjectId: 'mathematics', paper: 'Paper 1', language: 'Telugu' },
  { filename: 'mathematicsPaper1DataUrdu.ts', subject: 'Mathematics', subjectId: 'mathematics', paper: 'Paper 1', language: 'Urdu' },
  { filename: 'mathematicsPaper2Data.ts', subject: 'Mathematics', subjectId: 'mathematics', paper: 'Paper 2', language: 'English' },
  { filename: 'mathematicsPaper2DataTelugu.ts', subject: 'Mathematics', subjectId: 'mathematics', paper: 'Paper 2', language: 'Telugu' },
  { filename: 'mathematicsPaper2DataUrdu.ts', subject: 'Mathematics', subjectId: 'mathematics', paper: 'Paper 2', language: 'Urdu' },

  // Science (3 languages × Paper 2 only)
  { filename: 'sciencePaper2Data.ts', subject: 'Science', subjectId: 'science', paper: 'Paper 2', language: 'English' },
  { filename: 'sciencePaper2DataTelugu.ts', subject: 'Science', subjectId: 'science', paper: 'Paper 2', language: 'Telugu' },
  { filename: 'sciencePaper2DataUrdu.ts', subject: 'Science', subjectId: 'science', paper: 'Paper 2', language: 'Urdu' },

  // Social Studies (3 languages × Paper 2 only)
  { filename: 'socialPaper2Data.ts', subject: 'Social Studies', subjectId: 'social', paper: 'Paper 2', language: 'English' },
  { filename: 'socialPaper2DataTelugu.ts', subject: 'Social Studies', subjectId: 'social', paper: 'Paper 2', language: 'Telugu' },
  { filename: 'socialPaper2DataUrdu.ts', subject: 'Social Studies', subjectId: 'social', paper: 'Paper 2', language: 'Urdu' },

  // English (Paper 1 & 2)
  { filename: 'englishPaper1Data.ts', subject: 'English', subjectId: 'english', paper: 'Paper 1', language: 'English' },
  { filename: 'englishPaper2Data.ts', subject: 'English', subjectId: 'english', paper: 'Paper 2', language: 'English' },

  // Environmental Studies (3 languages × Paper 1 only)
  { filename: 'environmentalPaper1Data.ts', subject: 'Environmental Studies', subjectId: 'environmental', paper: 'Paper 1', language: 'English' },
  { filename: 'environmentalPaper1DataTelugu.ts', subject: 'Environmental Studies', subjectId: 'environmental', paper: 'Paper 1', language: 'Telugu' },
  { filename: 'environmentalPaper1DataUrdu.ts', subject: 'Environmental Studies', subjectId: 'environmental', paper: 'Paper 1', language: 'Urdu' },

  // Hindi (Paper 1 & 2)
  { filename: 'hindiPaper1Data.ts', subject: 'Hindi', subjectId: 'hindi', paper: 'Paper 1', language: 'English' },
  { filename: 'hindiPaper2Data.ts', subject: 'Hindi', subjectId: 'hindi', paper: 'Paper 2', language: 'English' },

  // Urdu (Paper 1 & 2)
  { filename: 'urduPaper1Data.ts', subject: 'Urdu', subjectId: 'urdu', paper: 'Paper 1', language: 'English' },
  { filename: 'urduPaper2Data.ts', subject: 'Urdu', subjectId: 'urdu', paper: 'Paper 2', language: 'English' },

  // Telugu (Paper 1 & 2)
  { filename: 'teluguPaper1Data.ts', subject: 'Telugu', subjectId: 'telugu', paper: 'Paper 1', language: 'Telugu' },
  { filename: 'teluguPaper2Data.ts', subject: 'Telugu', subjectId: 'telugu', paper: 'Paper 2', language: 'Telugu' },
];

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get the export name for a data file
 * Handles different naming patterns:
 * - English: childDevelopmentPaper1Data.ts → childDevelopmentPaper1Questions
 * - Telugu: childDevelopmentPaper1DataTelugu.ts → childDevelopmentPaper1TeluguQuestions
 * - Urdu: childDevelopmentPaper1DataUrdu.ts → childDevelopmentPaper1UrduQuestions
 */
function getExportName(filename: string): string {
  // Remove .ts extension
  const baseName = filename.replace('.ts', '');

  // Check if it's a Telugu file
  if (baseName.endsWith('DataTelugu')) {
    return baseName.replace('DataTelugu', 'TeluguQuestions');
  }

  // Check if it's an Urdu file
  if (baseName.endsWith('DataUrdu')) {
    return baseName.replace('DataUrdu', 'UrduQuestions');
  }

  // English files (no language suffix)
  return baseName.replace('Data', 'Questions');
}

/**
 * Convert question to database format
 */
function normalizeQuestion(q: TETQuestion, mapping: FileMapping, chapterId: string) {
  const correctAnswer = q.options[q.correctAnswer];

  // Extract question number from id (Q1 → 1, Q123 → 123)
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

/**
 * Load questions from a data file using dynamic import
 */
async function loadQuestionsFromFile(filename: string): Promise<TETQuestion[]> {
  try {
    const filePath = path.join(__dirname, '..', 'data', filename);
    const module = await import(filePath);

    // Get the export name (e.g., childDevelopmentPaper1Questions)
    const exportName = getExportName(filename);
    let data = module[exportName];

    // If not found, try to find any export ending with "Questions"
    if (!data || !Array.isArray(data)) {
      const questionExports = Object.keys(module).filter(key => key.endsWith('Questions'));
      if (questionExports.length > 0) {
        data = module[questionExports[0]];
        console.log(`   ℹ️  Using export '${questionExports[0]}' instead of '${exportName}'`);
      }
    }

    // Fall back to default export
    if (!data || !Array.isArray(data)) {
      data = module.default;
    }

    if (!data || !Array.isArray(data)) {
      console.warn(`⚠️  Could not find question array '${exportName}' in ${filename}`);
      console.warn(`   Available exports:`, Object.keys(module));
      return [];
    }

    return data;
  } catch (error) {
    console.error(`❌ Error loading ${filename}:`, error);
    return [];
  }
}

/**
 * Get or create chapter for a subject/paper combination
 */
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

/**
 * Insert questions in batches for performance
 */
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

// ============================================
// MAIN SEEDING FUNCTION
// ============================================

async function seedTETQuestions() {
  console.log('🌱 Starting TET Questions Seeding Process...\n');
  console.log(`📁 Processing ${FILE_MAPPINGS.length} data files\n`);

  let totalQuestions = 0;
  let totalSuccess = 0;
  let totalErrors = 0;

  try {
    for (const mapping of FILE_MAPPINGS) {
      console.log(`\n📖 Processing: ${mapping.filename}`);
      console.log(`   Subject: ${mapping.subject} | Paper: ${mapping.paper} | Language: ${mapping.language}`);

      // Load questions from file
      const questions = await loadQuestionsFromFile(mapping.filename);
      if (questions.length === 0) {
        console.log(`   ⚠️  No questions found, skipping...`);
        continue;
      }
      console.log(`   ✅ Loaded ${questions.length} questions`);

      // Get chapter ID
      const chapterId = await ensureChapter(mapping.subjectId, mapping.paper);
      if (!chapterId) {
        console.log(`   ❌ Could not find chapter, skipping...`);
        continue;
      }

      // Transform questions
      const dbQuestions = questions.map(q => normalizeQuestion(q, mapping, chapterId));
      console.log(`   🔄 Transformed ${dbQuestions.length} questions`);

      // Insert questions in batches
      console.log(`   💾 Inserting questions...`);
      const { successCount, errorCount } = await insertQuestionsBatch(dbQuestions);

      totalQuestions += questions.length;
      totalSuccess += successCount;
      totalErrors += errorCount;

      console.log(`\n   ✅ Success: ${successCount} | ❌ Errors: ${errorCount}`);
    }

    console.log('\n\n🎉 TET QUESTIONS SEEDING COMPLETED!');
    console.log('═══════════════════════════════════════');
    console.log(`📊 Total Files Processed: ${FILE_MAPPINGS.length}`);
    console.log(`📝 Total Questions: ${totalQuestions}`);
    console.log(`✅ Successfully Inserted: ${totalSuccess}`);
    console.log(`❌ Errors: ${totalErrors}`);
    console.log(`📈 Success Rate: ${((totalSuccess / totalQuestions) * 100).toFixed(2)}%`);
    console.log('═══════════════════════════════════════\n');

    // Verification query
    console.log('🔍 Verifying data in database...\n');
    const { data: stats } = await supabase
      .from('questions')
      .select('subject_id, paper, language', { count: 'exact' });

    if (stats) {
      console.log(`✅ Total questions in database: ${stats.length}`);
    }

    // Show breakdown by subject
    const { data: breakdown } = await supabase.rpc('get_question_counts');
    if (breakdown) {
      console.log('\n📊 Question Counts by Subject:');
      console.table(breakdown);
    }

  } catch (error) {
    console.error('\n❌ FATAL ERROR:', error);
    process.exit(1);
  }
}

// ============================================
// RUN SEEDING
// ============================================

seedTETQuestions();
