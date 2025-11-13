# Quick Start Guide - Questions Database Setup

## 📋 What Was Created

### 1. **Database Files**
- ✅ `supabase-migrations.sql` - Complete database schema and setup
- ✅ `biochemistry-enzyme-questions.json` - 10 sample enzyme questions

### 2. **Code Files**
- ✅ `lib/types/database.types.ts` - TypeScript type definitions
- ✅ `lib/api/questions.ts` - Helper functions for fetching questions
- ✅ `scripts/seed-questions.ts` - Updated to include enzyme questions

### 3. **Documentation**
- ✅ `SETUP_INSTRUCTIONS.md` - Detailed setup guide
- ✅ `USAGE_EXAMPLE.tsx` - React component examples
- ✅ `QUICK_START.md` - This file

---

## 🚀 3-Step Setup

### Step 1: Run Database Migration
```bash
# Copy supabase-migrations.sql content
# Paste in Supabase SQL Editor > Run
```

### Step 2: Seed Questions
```bash
npm run seed
```

### Step 3: Verify
- Check Supabase Table Editor → `questions` table
- Should see 20 total questions (10 general + 10 enzyme)

---

## 💡 How to Use in Your App

### Fetch Questions by Chapter
```typescript
import { getQuestionsByChapter } from './lib/api/questions';

// When user clicks "Enzymes" chapter
const { data } = await getQuestionsByChapter('Biochemistry', 'Enzymes');
// Returns: 10 enzyme questions
```

### Use in React Component
```typescript
import { useQuery } from '@tanstack/react-query';

const { data: questions } = useQuery({
  queryKey: ['questions', 'Biochemistry', 'Enzymes'],
  queryFn: async () => {
    const result = await getQuestionsByChapter('Biochemistry', 'Enzymes');
    if (result.error) throw result.error;
    return result.data;
  },
});
```

---

## 📊 Database Structure

```
subjects (already exists)
  ↓
chapters (already exists)
  ↓
questions (NEW!)
  - id, subject_id, chapter_id
  - question, options[], solutions
  - difficulty, tag, image_url
  - filters (metadata)
```

---

## 🧪 Sample Enzyme Questions Include

1. Competitive inhibition (Km, Vmax)
2. Non-competitive inhibition
3. Michaelis constant (Km)
4. Clinical case - cofactor deficiency
5. Coenzymes (NAD+, FAD)
6. Enzyme regulation (phosphorylation)
7. Allosteric enzymes (sigmoidal kinetics)
8. Suicide inhibition (aspirin/COX)
9. Enzyme classification (transferases)
10. Transition state stabilization

All questions have:
- ✅ 4 multiple choice options
- ✅ Detailed explanations
- ✅ Difficulty levels (easy/medium/difficult)
- ✅ Tags (enzyme-kinetics, clinical-enzymology, etc.)

---

## 📁 File Locations

```
tet/
├── supabase-migrations.sql          ← Run this in Supabase
├── biochemistry-enzyme-questions.json
├── scripts/
│   └── seed-questions.ts             ← Updated seeding script
├── lib/
│   ├── types/
│   │   └── database.types.ts         ← TypeScript types
│   └── api/
│       └── questions.ts              ← API helpers
├── SETUP_INSTRUCTIONS.md             ← Full documentation
├── USAGE_EXAMPLE.tsx                 ← Code examples
└── QUICK_START.md                    ← This file
```

---

## 🎯 Next Steps

1. ✅ **Done**: Database schema created
2. ✅ **Done**: Sample questions ready
3. **TODO**: Integrate into your app UI
4. **TODO**: Add more questions as needed
5. **TODO**: Upload images to storage bucket

---

## 🔍 Useful Queries

### Get all enzyme questions:
```typescript
const { data } = await getQuestionsByChapter('Biochemistry', 'Enzymes');
```

### Get questions by difficulty:
```typescript
import { getQuestions } from './lib/api/questions';

const { data } = await getQuestions({
  chapter_id: 'some-chapter-id',
  difficulty: 'medium'
});
```

### Get random questions for practice:
```typescript
import { getRandomQuestions } from './lib/api/questions';

const { data } = await getRandomQuestions({
  subject_id: 'biochemistry',
  count: 10
});
```

---

## ❓ Need Help?

- Check `SETUP_INSTRUCTIONS.md` for detailed steps
- See `USAGE_EXAMPLE.tsx` for component examples
- Review Supabase dashboard for data verification

---

## ✨ Features

✅ Proper foreign key relationships
✅ Row Level Security (RLS) enabled
✅ Indexed for fast queries
✅ Image storage bucket ready
✅ TypeScript type safety
✅ React Query integration examples
✅ Auto-updating timestamps
✅ Difficulty levels and tags
✅ 20 sample questions included

---

**Ready to go!** 🎉
