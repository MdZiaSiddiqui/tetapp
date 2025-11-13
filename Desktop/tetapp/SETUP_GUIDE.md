# TET App - Complete Setup Guide

## 🚀 Quick Start (5 Minutes)

Follow these steps to set up your TET app from scratch:

---

## STEP 1: Supabase Project Setup

### 1.1 Create Supabase Project
1. Go to https://supabase.com
2. Click "New Project"
3. Choose a name (e.g., "tet-exam-app")
4. Set a strong database password
5. Choose a region close to you
6. Wait 2 minutes for project to be ready

### 1.2 Get Your Credentials
1. Go to **Project Settings** → **API**
2. Copy these values:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon public key** (starts with `eyJ...`)
   - **service_role key** (starts with `eyJ...`) - ⚠️ Keep this secret!

---

## STEP 2: Run Database Setup

### 2.1 Open SQL Editor
1. In Supabase dashboard, go to **SQL Editor**
2. Click **New Query**

### 2.2 Execute Setup Script
1. Open the file: `supabase-setup.sql`
2. Copy ALL contents (Ctrl+A, Ctrl+C)
3. Paste into Supabase SQL Editor
4. Click **RUN** (or press Ctrl+Enter)

### 2.3 Verify Success
You should see:
```
✅ Database setup complete!
📊 Subjects created: 8
📖 Chapters created: 15
❓ Questions: 0 (Run seeding script to populate)
```

---

## STEP 3: Configure Environment Variables

### 3.1 Create .env File
In your project root, create a file named `.env`:

```env
# Supabase Configuration
EXPO_PUBLIC_SUPABASE_URL=your_project_url_here
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

### 3.2 Replace with Your Values
Replace the placeholders with the credentials from Step 1.2

**Example**:
```env
EXPO_PUBLIC_SUPABASE_URL=https://abcdefghij.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

## STEP 4: Migrate Questions Data

### 4.1 Install Dependencies (if not done)
```bash
npm install
# or
bun install
```

### 4.2 Run Migration Script
```bash
npm run seed:tet
```

### 4.3 Expected Output
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

[... continues for all 27 files ...]

🎉 TET QUESTIONS SEEDING COMPLETED!
═══════════════════════════════════════
📊 Total Files Processed: 27
📝 Total Questions: ~4,000
✅ Successfully Inserted: 4,000
❌ Errors: 0
📈 Success Rate: 100.00%
═══════════════════════════════════════
```

**⏱️ Time**: 5-10 minutes for ~4,000 questions

---

## STEP 5: Verify Data in Supabase

### 5.1 Check Tables
Go to Supabase → **Table Editor**

**You should see:**
- `subjects` - 8 rows
- `chapters` - 15 rows
- `questions` - ~4,000 rows
- `user_attempts` - 0 rows (will grow as users practice)

### 5.2 Run Verification Query
In SQL Editor, run:
```sql
-- Get question counts by subject
SELECT
  s.name as subject,
  COUNT(q.id) as question_count
FROM subjects s
LEFT JOIN questions q ON q.subject_id = s.id
GROUP BY s.name
ORDER BY s.name;
```

**Expected Result:**
| Subject | Question Count |
|---------|----------------|
| Child Development | ~600 |
| English | ~300 |
| Environmental Studies | ~200 |
| Hindi | ~200 |
| Mathematics | ~800 |
| Science | ~400 |
| Social Studies | ~400 |
| Urdu | ~200 |

---

## STEP 6: Start the App

```bash
npm start
```

Then press:
- `a` for Android
- `i` for iOS
- `w` for web

---

## ✅ VERIFICATION CHECKLIST

Before testing, verify:

- [ ] Supabase project created
- [ ] `supabase-setup.sql` executed successfully
- [ ] `.env` file created with correct credentials
- [ ] `npm run seed:tet` completed without errors
- [ ] Questions table has ~4,000 rows
- [ ] App starts without errors

---

## 🎯 TEST THE APP

### Test Home Screen
1. Open app
2. Should see 8 subjects with question counts
3. Each subject should show "Paper 1" and/or "Paper 2"

### Test Subject Details
1. Tap on "Child Development"
2. Should see 2 chapters: Paper 1, Paper 2
3. Each chapter should show question count and languages

### Test Practice Session
1. Tap on a chapter
2. Configure settings (difficulty, count)
3. Start practice
4. Should load questions from Supabase
5. Answer questions and see instant feedback

---

## 🐛 TROUBLESHOOTING

### Error: "Missing Supabase environment variables"
**Solution**: Create `.env` file with your credentials

### Error: "Failed to fetch subjects"
**Solution**:
1. Check your Supabase URL is correct
2. Verify RLS policies are enabled
3. Test connection in Supabase dashboard

### Error: "No questions found"
**Solution**: Run the seeding script: `npm run seed:tet`

### Seeding Script Fails
**Possible causes**:
1. Service role key not set in `.env`
2. Data files missing from `/data` folder
3. Supabase tables not created

**Fix**:
```bash
# Check if tables exist
# In Supabase SQL Editor:
SELECT table_name FROM information_schema.tables
WHERE table_schema = 'public';

# Should show: subjects, chapters, questions, user_attempts
```

### Questions Show 0 Count
**Solution**: Wait 1-2 minutes for database to update, then refresh app

---

## 📊 DATABASE STRUCTURE

```
subjects (8)
├── child-development
├── mathematics
├── science
├── social
├── english
├── environmental
├── hindi
└── urdu

chapters (15)
├── Paper 1 (for applicable subjects)
└── Paper 2 (for applicable subjects)

questions (~4,000)
├── subject_id (FK)
├── chapter_id (FK)
├── paper (Paper 1/2)
├── language (English/Telugu/Urdu)
├── difficulty (easy/medium/difficult)
└── question details (text, options, answer, explanation)
```

---

## 🔐 SECURITY NOTES

### Public Data (Anyone can read)
- ✅ Subjects
- ✅ Chapters
- ✅ Questions

### Private Data (User-specific)
- 🔒 User attempts (only own data)
- 🔒 User progress (only own data)

### Admin Only
- 🔐 Creating/editing subjects
- 🔐 Creating/editing chapters
- 🔐 Creating/editing questions

---

## 🎨 OPTIONAL ENHANCEMENTS

After setup, you can:

### 1. Add More Questions
```sql
-- In Supabase SQL Editor
INSERT INTO questions (
  subject_id,
  chapter_id,
  question,
  options,
  correct_answer,
  solutions,
  paper,
  language,
  difficulty
) VALUES (
  'mathematics',
  (SELECT id FROM chapters WHERE subject_id = 'mathematics' AND name = 'Paper 1' LIMIT 1),
  'What is 2 + 2?',
  '["2", "3", "4", "5"]',
  '4',
  'Basic addition: 2 + 2 = 4',
  'Paper 1',
  'English',
  'easy'
);
```

### 2. Upload Question Images
1. Go to Supabase → Storage → question-images
2. Upload images
3. Copy public URL
4. Update question: `UPDATE questions SET image_url = 'url' WHERE id = 'question-id'`

### 3. View User Statistics
```sql
-- Get user performance
SELECT
  s.name as subject,
  COUNT(*) as attempts,
  SUM(CASE WHEN is_correct THEN 1 ELSE 0 END) as correct,
  ROUND(AVG(CASE WHEN is_correct THEN 100.0 ELSE 0 END), 2) as accuracy
FROM user_attempts ua
JOIN questions q ON q.id = ua.question_id
JOIN subjects s ON s.id = q.subject_id
WHERE ua.user_id = 'user-id-here'
GROUP BY s.name;
```

---

## 📞 SUPPORT

### Documentation
- **API Reference**: See `API.md`
- **Refactoring Guide**: See `SCREEN_REFACTORING_GUIDE.md`
- **Migration Details**: See `MIGRATION.md`

### Common Issues
- Questions not showing → Run seeding script
- Authentication errors → Check RLS policies
- Slow queries → Check indexes exist

### Useful Commands
```bash
# Check database status
npm run check:db

# Re-run migration (clears and re-imports)
npm run seed:tet

# Start fresh (WARNING: Deletes all data!)
# Run in Supabase SQL Editor:
DELETE FROM questions;
DELETE FROM chapters;
DELETE FROM subjects;
# Then re-run supabase-setup.sql and seed:tet
```

---

## 🎉 YOU'RE DONE!

Your TET app is now:
- ✅ Connected to Supabase
- ✅ Populated with ~4,000 questions
- ✅ Ready for users to practice
- ✅ Tracking user progress
- ✅ Type-safe and performant

**Next**: Start building features or invite users to test!

---

**Need Help?** Check the troubleshooting section or review the API documentation.

**Last Updated**: 2025-11-12
