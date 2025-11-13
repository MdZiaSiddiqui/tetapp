# TET Questions Migration Guide

This guide explains how to migrate all TET questions from the `/data` folder to Supabase.

## 📋 Prerequisites

1. **Supabase Project Setup**
   - Create a Supabase project at https://supabase.com
   - Get your project URL and service role key

2. **Environment Variables**
   Create a `.env` file in the project root with:
   ```env
   EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
   EXPO_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   ```

   **Important:** The service role key is required for seeding as it bypasses RLS policies.

3. **Database Schema**
   Run the TET-specific migration script in your Supabase SQL Editor:
   ```bash
   # Copy contents of supabase-migrations-tet.sql
   # Paste into Supabase SQL Editor
   # Execute
   ```

   This will:
   - Add TET-specific fields (paper, language, correct_answer)
   - Create indexes for performance
   - Seed 8 TET subjects
   - Create Paper 1 and Paper 2 chapters for each subject

## 🚀 Migration Steps

### Step 1: Verify Schema

Run the schema migration in Supabase SQL Editor:

```sql
-- Verify tables exist
SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public'
AND table_name IN ('subjects', 'chapters', 'questions');

-- Verify subjects
SELECT * FROM subjects;

-- Verify chapters
SELECT * FROM chapters;
```

Expected output:
- 8 subjects (child-development, mathematics, science, social, english, environmental, hindi, urdu)
- ~15 chapters (Paper 1 & Paper 2 for each subject, except Science and Social which have only Paper 2)

### Step 2: Install Dependencies

```bash
npm install
# or
bun install
```

### Step 3: Run the Seeding Script

```bash
# Using npm
npm run seed:tet

# Using bun (faster)
bun run scripts/seed-tet-questions.ts

# Using tsx
npx tsx scripts/seed-tet-questions.ts
```

### Step 4: Monitor Progress

The script will:
1. Process all 27 data files
2. Show progress for each file:
   - Subject, Paper, Language
   - Number of questions loaded
   - Number of questions inserted
   - Success/error counts

Example output:
```
🌱 Starting TET Questions Seeding Process...

📁 Processing 27 data files

📖 Processing: childDevelopmentPaper1Data.ts
   Subject: Child Development | Paper: Paper 1 | Language: English
   ✅ Loaded 150 questions
   🔄 Transformed 150 questions
   💾 Inserting questions...
   ✅ Inserted 150/150 questions

   ✅ Success: 150 | ❌ Errors: 0

...

🎉 TET QUESTIONS SEEDING COMPLETED!
═══════════════════════════════════════
📊 Total Files Processed: 27
📝 Total Questions: ~4,000
✅ Successfully Inserted: 4,000
❌ Errors: 0
📈 Success Rate: 100.00%
═══════════════════════════════════════
```

### Step 5: Verify Data

Run verification queries in Supabase:

```sql
-- Total question count
SELECT COUNT(*) as total_questions FROM questions;

-- Questions by subject
SELECT
  s.name as subject,
  COUNT(q.id) as question_count
FROM subjects s
LEFT JOIN questions q ON q.subject_id = s.id
GROUP BY s.name
ORDER BY s.name;

-- Questions by subject, paper, and language
SELECT
  s.name as subject,
  q.paper,
  q.language,
  COUNT(*) as count
FROM questions q
JOIN subjects s ON s.id = q.subject_id
GROUP BY s.name, q.paper, q.language
ORDER BY s.name, q.paper, q.language;

-- Sample questions
SELECT
  s.name as subject,
  q.paper,
  q.language,
  q.question_number,
  LEFT(q.question, 100) as question_preview
FROM questions q
JOIN subjects s ON s.id = q.subject_id
LIMIT 10;
```

## 📊 Expected Data Structure

After migration, your database should have:

### Subjects (8)
- child-development
- mathematics
- science
- social
- english
- environmental
- hindi
- urdu

### Chapters (~15)
Each subject has Paper 1 and/or Paper 2 chapters:
- Child Development: Paper 1, Paper 2
- Mathematics: Paper 1, Paper 2
- Science: Paper 2 only
- Social Studies: Paper 2 only
- English: Paper 1, Paper 2
- Environmental: Paper 1 only
- Hindi: Paper 1, Paper 2
- Urdu: Paper 1, Paper 2

### Questions (~4,000)
Each question has:
- `id`: UUID (auto-generated)
- `subject_id`: TEXT (e.g., 'child-development')
- `chapter_id`: UUID (foreign key)
- `question`: TEXT (question text)
- `options`: JSONB (array of 4 options)
- `correct_answer`: TEXT (the correct option text)
- `solutions`: TEXT (explanation)
- `paper`: TEXT ('Paper 1' or 'Paper 2')
- `language`: TEXT ('English', 'Telugu', or 'Urdu')
- `question_number`: INTEGER (original question number)
- `difficulty`: TEXT ('easy', 'medium', or 'difficult')
- `tag`: TEXT (e.g., 'Child Development - Paper 1')

## 🔧 Troubleshooting

### Error: "Missing Supabase environment variables"
- Verify `.env` file exists
- Check that variables are set correctly
- Restart the terminal/script

### Error: "Subject not found"
- Run the schema migration script first
- Verify subjects were created: `SELECT * FROM subjects;`

### Error: "Chapter not found"
- Run the schema migration script first
- Verify chapters were created: `SELECT * FROM chapters;`

### Error: "Could not find question array"
- Check that data files exist in `/data` folder
- Verify export names match pattern: `{filename}Questions`

### Slow Performance
- Seeding ~4,000 questions takes 5-10 minutes
- Questions are inserted in batches of 50
- Use `SUPABASE_SERVICE_ROLE_KEY` for better performance

## 🧪 Testing After Migration

### 1. Test Question Fetching

```typescript
import { supabase } from './lib/supabase';

// Get all subjects
const { data: subjects } = await supabase
  .from('subjects')
  .select('*');

// Get chapters for a subject
const { data: chapters } = await supabase
  .from('chapters')
  .select('*')
  .eq('subject_id', 'child-development');

// Get questions for a chapter
const { data: questions } = await supabase
  .from('questions')
  .select('*')
  .eq('chapter_id', chapters[0].id)
  .limit(10);
```

### 2. Test Language Filtering

```typescript
// Get Telugu questions for Child Development Paper 1
const { data: questions } = await supabase
  .from('questions')
  .select('*, chapter:chapters(*), subject:subjects(*)')
  .eq('subject_id', 'child-development')
  .eq('paper', 'Paper 1')
  .eq('language', 'Telugu')
  .limit(10);
```

### 3. Test Random Questions

```typescript
// Get 10 random medium difficulty questions
const { data: questions } = await supabase
  .from('questions')
  .select('*')
  .eq('difficulty', 'medium')
  .limit(10)
  .order('random()');
```

## 📝 Next Steps

After migration is complete:

1. ✅ Update TypeScript types (`lib/types/database.types.ts`)
2. ✅ Create API functions (`lib/api/subjects.ts`, `lib/api/chapters.ts`)
3. ✅ Refactor screens to fetch from Supabase
4. ✅ Test all app features with real data
5. ✅ Remove hardcoded data imports
6. ✅ Update analytics to use Supabase

## 🔄 Re-running Migration

To re-seed (clear and re-import):

```sql
-- DANGER: This will delete all questions!
DELETE FROM questions;
DELETE FROM chapters;
DELETE FROM subjects;
```

Then run the schema migration and seeding script again.

## 📞 Support

If you encounter issues:
1. Check the console output for specific error messages
2. Verify your Supabase connection
3. Check that all environment variables are set
4. Ensure the schema migration was run first
5. Review this guide's troubleshooting section
