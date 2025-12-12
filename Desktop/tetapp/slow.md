# Performance Issues Analysis - TET App

## Summary
The app's slowness is caused by **waterfall request patterns**, **unoptimized database queries**, **missing React Query configuration**, and **poor rendering performance**. A user opening the app waits for 15-20+ network requests that could be reduced to 3-4.

---

## 1. CRITICAL: Waterfall Requests in `getSubjectsWithStats()`

**File:** `lib/api/subjects.ts:33-84`

**Problem:** Makes 3 sequential database calls per subject instead of optimized queries.

```typescript
// First query for subjects with chapters
const { data: subjects } = await supabase
  .from('subjects')
  .select('*', chapters:chapters(count)')

// Then for EACH subject, two more queries:
const subjectsWithStats = await Promise.all(
  subjects.map(async (subject) => {
    // Query 1: Get question count
    const { count: questionCount } = await supabase
      .from('questions')
      .select('*', { count: 'exact', head: true })
      .eq('subject_id', subject.id);

    // Query 2: Get available papers
    const { data: papers } = await supabase
      .from('chapters')
      .select('name')
      .eq('subject_id', subject.id);
  })
);
```

**Impact:** 8 subjects = 1 + (8 × 2) = **17 total requests**

---

## 2. CRITICAL: Same Issue in `getSubjectByIdWithStats()`

**File:** `lib/api/subjects.ts:114-159`

**Problem:** 3 separate calls for a single subject:
1. Get subject with chapter count
2. Separate call for question count
3. Separate call for papers

---

## 3. HIGH: Unnecessary Second Data Fetch - `useProAccess()`

**File:** `hooks/useProAccess.ts:106-108`

**Problem:** Every screen using subjects also calls `useProAccess()` which makes additional database queries.

**Combined Effect:**
- `useSubject()` → 3 DB calls
- `useProAccess()` → 2 DB calls
- Total: **5+ concurrent requests** just to display the subject page

---

## 4. HIGH: Uncoordinated Loading States

**File:** `app/subjects/[id].tsx:64-67, 228-235`

```typescript
const { data: subject, isLoading } = useSubject(subjectId);
const { loading: proLoading } = useProAccess();

if (isLoading) {
  return <ActivityIndicator />; // Only waits for ONE loading state
}
```

**Issue:** Even when subject finishes loading, proLoading may still be true, showing partial content.

---

## 5. HIGH: Debug Queries in Production

**File:** `lib/api/questions.ts:436-487`

```typescript
// DEBUG query runs every time (wasted request)
const { data: debugData } = await supabase
  .from('questions')
  .select('subject_id, language, paper')
  .eq('subject_id', subjectId)
  .limit(5);

// Then the actual query
let query = supabase.from('questions').select('*')...

// If no results, tries alternative papers with MORE queries
for (const altPaper of alternativePapers) {
  const { data: altData } = await supabase.from('questions')...
}
```

---

## 6. MEDIUM: Missing React Query Performance Options

**File:** `app/_layout.tsx:15-22`

```typescript
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 1000 * 60 * 5,
      // MISSING:
      // refetchOnWindowFocus: false  → causes unnecessary refetches
      // refetchOnReconnect: false    → cascade refetch on connection drop
      // gcTime (cacheTime)           → garbage collection timing
    },
  },
});
```

---

## 7. HIGH: Excessive Rendering - No Virtualization

**File:** `app/subjects/[id].tsx:440-592`

```typescript
{Array.from({ length: 50 }, (_, index) => {
  return (
    <View>
      {/* Practice Box */}
      {/* Test Box */}
    </View>
  );
})}
```

**Impact:** Renders **100 cards** immediately, user only sees 5-6 at a time.

---

## 8. MEDIUM: Inconsistent staleTime Values

- `useSubjectsWithStats()`: 5 minutes
- `useSubject()`: 10 minutes
- Creates staggered network requests

---

## 9. MEDIUM: No Query Key Normalization

**File:** `hooks/useSupabaseData.ts:255`

```typescript
queryKey: ['questions', params]  // Object comparison is by reference
```

Objects in query keys cause cache misses because `{ a: 1 } !== { a: 1 }`.

---

## Priority Fixes

| Priority | Issue | File | Impact |
|----------|-------|------|--------|
| **P0** | Waterfall requests in subjects | subjects.ts:53-78 | 17 → 2 requests |
| **P0** | Sequential queries per subject | subjects.ts:119-142 | 3 → 1 request |
| **P1** | Remove debug queries | questions.ts:436-440 | Eliminate wasted request |
| **P1** | Add refetchOnWindowFocus: false | _layout.tsx:15-22 | Stop tab refetches |
| **P1** | Virtualize session list | [id].tsx:440-592 | 100 → ~10 rendered |
| **P2** | Coordinate loading states | [id].tsx:64-228 | Better UX |
| **P2** | Consistent staleTime | useSupabaseData.ts | Predictable caching |

---

## Recommended Solutions

### 1. Optimize Subject Queries (Biggest Impact)

Replace N+1 pattern with single query using Supabase's aggregation:

```typescript
// BEFORE: 17 queries
subjects.map(async (subject) => {
  const { count } = await supabase.from('questions')...
  const { data } = await supabase.from('chapters')...
});

// AFTER: 1 query with subquery/view or
// 2-3 queries with proper batching
const { data: subjects } = await supabase
  .from('subjects')
  .select(`
    *,
    chapters:chapters(count),
    questions:questions(count)
  `);
```

### 2. Add React Query Config

```typescript
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,  // ADD
      refetchOnReconnect: false,     // ADD
      gcTime: 1000 * 60 * 30,        // ADD: 30 min cache
    },
  },
});
```

### 3. Virtualize Session List

```typescript
import { FlashList } from '@shopify/flash-list';

<FlashList
  data={Array.from({ length: 50 }, (_, i) => i + 1)}
  renderItem={({ item: sessionNumber }) => <SessionCard />}
  estimatedItemSize={100}
/>
```

### 4. Remove Debug Queries

Delete all `debugData` queries from production code.

---

## Expected Improvements

- **Load time:** 3-5 seconds → <1 second
- **Network requests:** 17+ → 3-4
- **Scroll performance:** Heavy lag → Smooth
- **Memory usage:** High (100 components) → Low (~10 components)
