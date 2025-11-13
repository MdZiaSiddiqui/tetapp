# TET App - Supabase API Documentation

Complete API reference for fetching subjects, chapters, and questions from Supabase.

## 📚 Table of Contents

- [TypeScript Types](#typescript-types)
- [Subject API](#subject-api)
- [Chapter API](#chapter-api)
- [Question API](#question-api)
- [React Query Hooks](#react-query-hooks)
- [Usage Examples](#usage-examples)

---

## TypeScript Types

### Core Types

```typescript
interface Subject {
  id: string; // 'child-development', 'mathematics', etc.
  name: string; // 'Child Development', 'Mathematics', etc.
  description?: string;
  created_at: string;
  updated_at: string;
}

interface Chapter {
  id: string; // UUID
  subject_id: string; // Foreign key
  name: string; // 'Paper 1' or 'Paper 2'
  description?: string;
  created_at: string;
  updated_at: string;
}

interface Question {
  id: string; // UUID
  subject_id: string;
  chapter_id: string;
  question: string;
  options: string[]; // Array of 4 options
  correct_answer: string; // The correct option text
  solutions: string; // Explanation
  difficulty: 'easy' | 'medium' | 'difficult';
  paper: 'Paper 1' | 'Paper 2';
  language: 'English' | 'Telugu' | 'Urdu';
  question_number?: number;
  tag?: string;
  image_url?: string;
  reference?: string;
  created_at: string;
  updated_at: string;
}
```

### Extended Types

```typescript
interface SubjectWithStats extends Subject {
  question_count?: number;
  chapter_count?: number;
  papers?: ('Paper 1' | 'Paper 2')[];
}

interface ChapterWithStats extends Chapter {
  question_count?: number;
  languages?: ('English' | 'Telugu' | 'Urdu')[];
}

interface FetchQuestionsParams {
  subject_id?: string;
  chapter_id?: string;
  difficulty?: 'easy' | 'medium' | 'difficult';
  paper?: 'Paper 1' | 'Paper 2';
  language?: 'English' | 'Telugu' | 'Urdu';
  tag?: string;
  limit?: number;
  offset?: number;
}
```

---

## Subject API

### `getSubjects()`
Get all TET subjects.

```typescript
import { getSubjects } from '@/lib/api/subjects';

const { data, error } = await getSubjects();
// Returns: Subject[]
```

### `getSubjectsWithStats()`
Get all subjects with question counts and available papers.

```typescript
import { getSubjectsWithStats } from '@/lib/api/subjects';

const { data, error } = await getSubjectsWithStats();
// Returns: SubjectWithStats[]
// Each subject includes: question_count, chapter_count, papers[]
```

### `getSubjectById(id)`
Get a single subject by ID.

```typescript
const { data, error } = await getSubjectById('child-development');
// Returns: Subject
```

### `getSubjectByIdWithStats(id)`
Get a single subject with statistics.

```typescript
const { data, error } = await getSubjectByIdWithStats('mathematics');
// Returns: SubjectWithStats
```

### `searchSubjects(term)`
Search subjects by name (case-insensitive).

```typescript
const { data, error } = await searchSubjects('math');
// Returns: Subject[]
```

### `getSubjectsByPaper(paper)`
Get subjects that have a specific paper.

```typescript
const { data, error } = await getSubjectsByPaper('Paper 1');
// Returns: Subject[]
```

---

## Chapter API

### `getChapters()`
Get all chapters.

```typescript
import { getChapters } from '@/lib/api/chapters';

const { data, error } = await getChapters();
// Returns: Chapter[]
```

### `getChaptersBySubject(subjectId)`
Get all chapters for a subject.

```typescript
const { data, error } = await getChaptersBySubject('child-development');
// Returns: Chapter[]
// Example: [{ name: 'Paper 1', ... }, { name: 'Paper 2', ... }]
```

### `getChaptersBySubjectWithStats(subjectId)`
Get chapters for a subject with statistics.

```typescript
const { data, error } = await getChaptersBySubjectWithStats('mathematics');
// Returns: ChapterWithStats[]
// Includes: question_count, languages[]
```

### `getChapterById(id)`
Get a single chapter by UUID.

```typescript
const { data, error } = await getChapterById('uuid-here');
// Returns: Chapter
```

### `getChapterBySubjectAndPaper(subjectId, paper)`
Get a specific chapter for a subject and paper.

```typescript
const { data, error } = await getChapterBySubjectAndPaper(
  'child-development',
  'Paper 1'
);
// Returns: Chapter
```

---

## Question API

### `getQuestions(params)`
Get questions with optional filters.

```typescript
import { getQuestions } from '@/lib/api/questions';

// Get all questions for a subject
const { data, error } = await getQuestions({
  subject_id: 'child-development',
});

// Filter by paper and language
const { data, error } = await getQuestions({
  subject_id: 'mathematics',
  paper: 'Paper 1',
  language: 'English',
  difficulty: 'medium',
  limit: 10,
});
```

### `getQuestionsByChapterId(chapterId)`
Get all questions for a chapter.

```typescript
const { data, error } = await getQuestionsByChapterId('chapter-uuid');
// Returns: Question[]
```

### `getQuestionsBySubjectPaperLanguage(subjectId, paper, language, limit?)`
Get questions for a specific combination.

```typescript
const { data, error } = await getQuestionsBySubjectPaperLanguage(
  'child-development',
  'Paper 1',
  'Telugu',
  20 // optional limit
);
// Returns: Question[]
```

### `getRandomQuestionsForPractice(params)`
Get random questions for practice mode.

```typescript
const { data, error } = await getRandomQuestionsForPractice({
  subject_id: 'mathematics',
  paper: 'Paper 1',
  language: 'English',
  difficulty: 'medium',
  count: 10,
});
// Returns: Question[] (shuffled)
```

### `getQuestionCount(params)`
Get count of questions matching filters.

```typescript
const { count, error } = await getQuestionCount({
  subject_id: 'science',
  paper: 'Paper 2',
  language: 'English',
});
// Returns: number
```

### `getAvailableLanguages(subjectId, paper)`
Get available languages for a subject and paper.

```typescript
const { data, error } = await getAvailableLanguages('mathematics', 'Paper 1');
// Returns: ('English' | 'Telugu' | 'Urdu')[]
```

### `getQuestionStats(subjectId)`
Get statistics for a subject.

```typescript
const { data, error } = await getQuestionStats('child-development');
// Returns: {
//   total: number;
//   by_paper: { 'Paper 1': number; 'Paper 2': number };
//   by_language: { 'English': number; 'Telugu': number; 'Urdu': number };
//   by_difficulty: { 'easy': number; 'medium': number; 'difficult': number };
// }
```

---

## React Query Hooks

### Subject Hooks

```typescript
import {
  useSubjects,
  useSubjectsWithStats,
  useSubject,
  useSubjectWithStats,
  useSearchSubjects,
  useSubjectsByPaper,
} from '@/hooks/useSupabaseData';

// Get all subjects
const { data, isLoading, error } = useSubjects();

// Get subjects with stats
const { data, isLoading, error } = useSubjectsWithStats();

// Get single subject
const { data, isLoading, error } = useSubject('child-development');

// Search subjects
const { data, isLoading, error } = useSearchSubjects('math');

// Get subjects by paper
const { data, isLoading, error } = useSubjectsByPaper('Paper 1');
```

### Chapter Hooks

```typescript
import {
  useChapters,
  useChaptersBySubject,
  useChaptersBySubjectWithStats,
  useChapter,
  useChapterBySubjectAndPaper,
} from '@/hooks/useSupabaseData';

// Get chapters by subject
const { data, isLoading, error } = useChaptersBySubject('mathematics');

// Get chapters with stats
const { data, isLoading, error } = useChaptersBySubjectWithStats('science');

// Get specific chapter
const { data, error } = useChapterBySubjectAndPaper('mathematics', 'Paper 1');
```

### Question Hooks

```typescript
import {
  useQuestions,
  useQuestionsByChapter,
  useQuestionsBySubjectPaperLanguage,
  useRandomQuestions,
  useQuestionCount,
  useAvailableLanguages,
  useQuestionStats,
} from '@/hooks/useSupabaseData';

// Get questions with filters
const { data, isLoading, error } = useQuestions({
  subject_id: 'mathematics',
  paper: 'Paper 1',
  language: 'English',
  limit: 10,
});

// Get questions by chapter
const { data, isLoading, error } = useQuestionsByChapter('chapter-uuid');

// Get random questions (won't cache)
const { data, isLoading, error } = useRandomQuestions({
  subject_id: 'science',
  paper: 'Paper 2',
  language: 'Telugu',
  count: 20,
});

// Get question count
const { data: count, isLoading } = useQuestionCount({
  subject_id: 'mathematics',
  language: 'English',
});

// Get available languages
const { data: languages } = useAvailableLanguages('mathematics', 'Paper 1');

// Get statistics
const { data: stats } = useQuestionStats('child-development');
```

---

## Usage Examples

### Example 1: Home Screen - Display Subjects

```typescript
import { useSubjectsWithStats } from '@/hooks/useSupabaseData';

export default function HomeScreen() {
  const { data: subjects, isLoading, error } = useSubjectsWithStats();

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <View>
      {subjects?.map(subject => (
        <SubjectCard
          key={subject.id}
          name={subject.name}
          questionCount={subject.question_count}
          papers={subject.papers}
        />
      ))}
    </View>
  );
}
```

### Example 2: Subject Details - Display Chapters

```typescript
import { useChaptersBySubjectWithStats } from '@/hooks/useSupabaseData';
import { useLocalSearchParams } from 'expo-router';

export default function SubjectDetailsScreen() {
  const { id: subjectId } = useLocalSearchParams();
  const { data: chapters, isLoading } = useChaptersBySubjectWithStats(subjectId);

  return (
    <View>
      {chapters?.map(chapter => (
        <ChapterCard
          key={chapter.id}
          name={chapter.name}
          questionCount={chapter.question_count}
          languages={chapter.languages}
        />
      ))}
    </View>
  );
}
```

### Example 3: Practice Session - Load Questions

```typescript
import { useRandomQuestions } from '@/hooks/useSupabaseData';

export default function PracticeSession() {
  const { data: questions, isLoading } = useRandomQuestions({
    subject_id: 'mathematics',
    paper: 'Paper 1',
    language: 'English',
    difficulty: 'medium',
    count: 10,
  });

  if (isLoading) return <LoadingSpinner />;

  return <QuizComponent questions={questions} />;
}
```

### Example 4: Settings - Show Available Options

```typescript
import {
  useAvailableLanguages,
  useQuestionCount,
} from '@/hooks/useSupabaseData';

export default function PracticeSettings() {
  const [subject, setSubject] = useState('mathematics');
  const [paper, setPaper] = useState<'Paper 1' | 'Paper 2'>('Paper 1');

  const { data: languages } = useAvailableLanguages(subject, paper);
  const { data: count } = useQuestionCount({ subject_id: subject, paper });

  return (
    <View>
      <Text>Available Languages: {languages?.join(', ')}</Text>
      <Text>Total Questions: {count}</Text>
    </View>
  );
}
```

### Example 5: Analytics - Show Statistics

```typescript
import { useQuestionStats } from '@/hooks/useSupabaseData';

export default function AnalyticsScreen() {
  const { data: stats } = useQuestionStats('child-development');

  return (
    <View>
      <Text>Total Questions: {stats?.total}</Text>
      <Text>Paper 1: {stats?.by_paper['Paper 1']}</Text>
      <Text>Paper 2: {stats?.by_paper['Paper 2']}</Text>
      <Text>English: {stats?.by_language['English']}</Text>
      <Text>Telugu: {stats?.by_language['Telugu']}</Text>
    </View>
  );
}
```

---

## Caching Strategy

React Query automatically caches data with the following default settings:

- **Subjects**: 10 minutes (rarely change)
- **Chapters**: 10 minutes (rarely change)
- **Questions**: 5 minutes (can change more frequently)
- **Random Questions**: Not cached (always fresh)
- **Stats**: 5 minutes

To manually refresh data:

```typescript
import { useInvalidateQueries } from '@/hooks/useSupabaseData';

const refreshData = useInvalidateQueries();

// Later...
refreshData(); // Refreshes all cached data
```

---

## Error Handling

All hooks return errors in a consistent format:

```typescript
const { data, isLoading, error } = useSubjects();

if (error) {
  console.error('Error fetching subjects:', error.message);
  // Show error UI
}
```

Common errors:
- **Network error**: Check internet connection
- **Supabase error**: Check credentials, RLS policies
- **Not found**: Resource doesn't exist

---

## Performance Tips

1. **Use `WithStats` variants sparingly** - They make multiple queries
2. **Prefetch data** - Use `usePrefetchSubjects()` for faster navigation
3. **Paginate questions** - Use `limit` and `offset` for large datasets
4. **Filter early** - Apply filters at database level, not client side
5. **Cache aggressively** - Trust React Query's caching for static data

---

## Next Steps

After migrating data:
1. Replace all hardcoded imports with hooks
2. Add loading and error states to all screens
3. Test with real Supabase data
4. Add user progress tracking
5. Implement analytics
