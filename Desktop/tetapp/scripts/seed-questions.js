const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Load environment variables
const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Error: Missing Supabase environment variables');
  console.error('Please set EXPO_PUBLIC_SUPABASE_URL and EXPO_PUBLIC_SUPABASE_ANON_KEY in your .env file');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function loadQuestions() {
  const filePath = path.join(__dirname, '..', 'sampleques.md');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContent);
}

function transformQuestion(sampleQuestion) {
  return {
    subject: sampleQuestion.classification.subject,
    chapter: sampleQuestion.classification.chapter,
    question: sampleQuestion.question_text,
    tag: null,
    image_url: sampleQuestion.alternative_image || null,
    options: sampleQuestion.options,
    solutions: sampleQuestion.explanation,
    reference: null,
    difficulty: determineDifficulty(sampleQuestion),
    filters: {
      question_number: sampleQuestion.question_number,
      correct_answer: sampleQuestion.correct_answer,
    },
  };
}

function determineDifficulty(question) {
  const questionLength = question.question_text.length;
  const hasImage = !!question.alternative_image;

  if (hasImage || questionLength > 200) {
    return 'difficult';
  } else if (questionLength > 100) {
    return 'medium';
  }
  return 'easy';
}

async function ensureSubjectsAndChapters(questions) {
  const uniqueSubjects = [...new Set(questions.map(q => q.subject))];
  const uniqueChapters = [...new Set(questions.map(q => JSON.stringify({ subject: q.subject, chapter: q.chapter })))].map(JSON.parse);

  console.log('\n📚 Ensuring subjects exist...');
  for (const subjectName of uniqueSubjects) {
    const { data: existingSubject } = await supabase
      .from('subjects')
      .select('id, name')
      .eq('name', subjectName)
      .maybeSingle();

    if (!existingSubject) {
      const { error } = await supabase
        .from('subjects')
        .insert({ name: subjectName, description: `${subjectName} subject` });

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
    const { data: subjectData } = await supabase
      .from('subjects')
      .select('id')
      .eq('name', subject)
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
      .maybeSingle();

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
      const { data: subjectData } = await supabase
        .from('subjects')
        .select('id')
        .eq('name', question.subject)
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
