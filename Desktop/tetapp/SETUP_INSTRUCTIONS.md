# Database Setup Instructions

This guide will help you set up the Questions table in Supabase and seed it with sample data.

## Prerequisites

- Supabase project created and configured
- Environment variables set in `.env` file:
  - `EXPO_PUBLIC_SUPABASE_URL`
  - `EXPO_PUBLIC_SUPABASE_ANON_KEY`

## Step 1: Run Database Migration

1. Open your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Copy the contents of `supabase-migrations.sql`
4. Paste into the SQL Editor and click **Run**

This will:
- ✅ Create the `questions` table with proper schema
- ✅ Set up indexes for better query performance
- ✅ Enable Row Level Security (RLS) policies
- ✅ Create `question-images` storage bucket
- ✅ Insert Biochemistry subject and Enzymes chapter

## Step 2: Verify Database Setup

After running the migration, you should see output showing:
- Subjects count
- Chapters count
- Questions count (should be 0 initially)
- Subject/chapter breakdown

You can also check in the **Table Editor**:
- `subjects` table should have "Biochemistry" entry
- `chapters` table should have "Enzymes" entry under Biochemistry
- `questions` table should exist (empty initially)

## Step 3: Seed Questions

Run the seeding script to populate the database with sample questions:

```bash
npm run seed
```

This will:
- ✅ Load questions from `sampleques.md` (10 medical questions)
- ✅ Load questions from `biochemistry-enzyme-questions.json` (10 enzyme questions)
- ✅ Transform and insert all 20 questions into the database
- ✅ Automatically create any missing subjects/chapters

Expected output:
```
🌱 Starting question seeding process...
📂 Loading questions from sampleques.md...
✅ Loaded 20 questions
...
✅ Inserted 20/20 questions
🎉 Seeding completed!
```

## Step 4: Verify Data

Check your Supabase dashboard:

1. **Table Editor** → `questions` → Should see 20 questions
2. Filter by subject to verify:
   - Biochemistry → Enzymes chapter → 10 questions
   - Various other subjects → 10 questions

## Questions Table Structure

| Column | Type | Description |
|--------|------|-------------|
| id | uuid | Primary key (auto-generated) |
| subject_id | text | Foreign key to subjects table |
| chapter_id | uuid | Foreign key to chapters table |
| question | text | Question text |
| tag | text | Optional tag (e.g., "enzyme-kinetics") |
| image_url | text | Optional URL to question image |
| options | jsonb | Array of answer options |
| solutions | text | Detailed explanation |
| reference | text | Optional reference material |
| difficulty | text | 'easy', 'medium', or 'difficult' |
| filters | jsonb | Additional metadata (correct_answer, etc.) |
| created_at | timestamptz | Creation timestamp |
| updated_at | timestamptz | Last update timestamp |

## Fetching Questions by Chapter

Example query to fetch questions when a user clicks on "Enzymes" chapter:

```typescript
import { supabase } from './lib/supabase';

// Get chapter ID first
const { data: chapter } = await supabase
  .from('chapters')
  .select('id')
  .eq('name', 'Enzymes')
  .eq('subject_id', 'biochemistry')
  .single();

// Fetch questions for this chapter
const { data: questions } = await supabase
  .from('questions')
  .select('*')
  .eq('chapter_id', chapter.id)
  .order('created_at', { ascending: true });
```

## Image Storage Setup

The `question-images` storage bucket is ready for use. To upload images:

1. Go to **Storage** in Supabase dashboard
2. You'll see `question-images` bucket
3. Upload images manually or via code:

```typescript
const { data, error } = await supabase.storage
  .from('question-images')
  .upload('enzyme-diagram-1.png', file);

// Get public URL
const { data: { publicUrl } } = supabase.storage
  .from('question-images')
  .getPublicUrl('enzyme-diagram-1.png');

// Update question with image URL
await supabase
  .from('questions')
  .update({ image_url: publicUrl })
  .eq('id', questionId);
```

## Sample Biochemistry Enzyme Questions

The database now includes 10 comprehensive enzyme questions covering:

1. **Enzyme Kinetics**
   - Competitive inhibition (Km, Vmax)
   - Non-competitive inhibition
   - Michaelis-Menten constant

2. **Clinical Enzymology**
   - Cofactor deficiency cases
   - Metabolic disorders

3. **Coenzymes and Cofactors**
   - NAD+, FAD, CoA
   - Vitamin-derived coenzymes

4. **Enzyme Regulation**
   - Phosphorylation mechanisms
   - Allosteric regulation
   - Feedback inhibition

5. **Enzyme Mechanisms**
   - Suicide inhibition
   - Transition state stabilization
   - Enzyme classification

## TypeScript Types

Use the generated types in `lib/types/database.types.ts`:

```typescript
import { Question, QuestionWithDetails, FetchQuestionsParams } from './lib/types/database.types';

const params: FetchQuestionsParams = {
  chapter_id: 'some-uuid',
  difficulty: 'medium',
  limit: 10
};
```

## Troubleshooting

### Error: "relation 'questions' does not exist"
- Run the migration SQL in Supabase SQL Editor first

### Error: "Missing Supabase environment variables"
- Check your `.env` file has the correct keys

### Seed script fails with "Subject not found"
- Ensure the migration created the subjects and chapters tables
- Run `setup-database.sql` if needed

### Questions not appearing in app
- Check RLS policies are enabled (migration does this)
- Verify data exists in Table Editor
- Check your query is using correct chapter_id/subject_id

## Next Steps

1. ✅ Database is ready
2. Create UI component to display questions
3. Implement question fetching by chapter
4. Add image upload functionality
5. Build practice session logic

## Need Help?

- Check Supabase logs in the dashboard
- Review the seed script output for errors
- Verify your environment variables are correct
