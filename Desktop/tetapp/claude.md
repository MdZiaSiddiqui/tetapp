# React Navigation Best Practices for Expo Router

This document contains critical guidelines to prevent navigation context errors and maintain a healthy navigation structure in this React Native app using Expo Router.

## 🚨 CRITICAL RULE: Use Explicit Navigation Pattern

**To prevent "navigation context not found" errors, use this pattern:**

1. **Root Layout:** Explicitly register all top-level routes
2. **Nested Layouts:** Explicitly register all screens within the layout

```tsx
// ✅ CORRECT - Root layout (app/_layout.tsx)
export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="practice" />  {/* Explicit top-level registration */}
          <Stack.Screen name="subjects/[id]" />
        </Stack>
      </AuthProvider>
    </QueryClientProvider>
  );
}

// ✅ CORRECT - Nested layout (app/practice/_layout.tsx)
export default function PracticeLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="settings" />
      <Stack.Screen name="practice-session" />
      <Stack.Screen name="test-session" />
      <Stack.Screen name="results" />
    </Stack>
  );
}
```

**Why this pattern works:**
- Explicit registration at all levels ensures navigation context is ready before components render
- Prevents timing issues where components try to use navigation hooks before the Stack is initialized
- Provides clear, predictable route hierarchy

---

## 🔍 Database Schema - Language Subject Storage Pattern

**CRITICAL: Hindi and Urdu questions are stored with `language: 'English'` in the database**

### Language Field Mapping

When querying questions for language subjects:

| Subject ID | Subject Name | Database `language` Field |
|------------|--------------|---------------------------|
| `hindi`    | Hindi        | `'English'` ⚠️            |
| `urdu`     | Urdu         | `'English'` ⚠️            |
| `telugu`   | Telugu       | `'Telugu'` ✅             |
| `english`  | English      | `'English'` ✅            |

### Why This Matters

When fetching questions for Hindi or Urdu subjects, you MUST query with `language: 'English'`, not the subject name:

```typescript
// ✅ CORRECT - Urdu/Hindi language query
const { data } = await supabase
  .from('questions')
  .select('*')
  .eq('subject_id', 'urdu')      // Subject is 'urdu'
  .eq('language', 'English')     // But language field is 'English'
  .eq('paper', 'Paper 2');

// ❌ WRONG - Will return 0 results
const { data } = await supabase
  .from('questions')
  .select('*')
  .eq('subject_id', 'urdu')
  .eq('language', 'Urdu')        // This won't match anything!
  .eq('paper', 'Paper 2');
```

### Implementation Pattern

In `app/subjects/[id].tsx`, the language conversion logic:

```typescript
let language: 'English' | 'Telugu' | 'Urdu';
if (isLanguageSubject) {
  const subjectNameCapitalized = subjectName.charAt(0).toUpperCase() + subjectName.slice(1).toLowerCase();

  // ✅ CRITICAL: Hindi and Urdu are stored as English in the database
  if (subjectNameCapitalized === 'Hindi' || subjectNameCapitalized === 'Urdu') {
    language = 'English';
  } else {
    language = subjectNameCapitalized as 'English' | 'Telugu' | 'Urdu';
  }
} else {
  language = selectedLanguage === 'Hindi' ? 'English' : selectedLanguage;
}
```

### Historical Context

**Fixed: 2025-11-16**
- **Issue:** Urdu Paper 2 questions were not being fetched
- **Root Cause:** Code was querying `language: 'Urdu'` but database has `language: 'English'`
- **Fix:** Updated language mapping to treat Urdu the same as Hindi (both map to 'English')
- **Files Modified:** `app/subjects/[id].tsx:132`

---

## Common Navigation Context Errors and How to Avoid Them

### 1. "Couldn't find a navigation object" Error

This error occurs when:
- A component tries to use navigation hooks (`useRouter`, `useNavigation`) outside of a navigator context
- Navigation routes are referenced that don't exist in the app structure
- Context providers are missing or incorrectly ordered

### 2. Critical Rules

#### Always Define Routes Before Using Them
- **Before navigating to a route**, ensure it exists in the `app` folder structure
- Route structure in `app` folder:
  ```
  app/
    _layout.tsx          # Root layout with Stack navigator
    index.tsx            # Entry point
    (tabs)/              # Tab navigator group
      _layout.tsx        # Tab layout
      home.tsx
      revision.tsx
      analytics.tsx
      profile.tsx
    practice/            # Practice stack
      _layout.tsx        # Practice layout
      settings.tsx
      practice-session.tsx
      test-session.tsx
      results.tsx
    subjects/
      [id].tsx           # Dynamic route for subject details
    revision/
      session.tsx
  ```

#### Navigation Route Format
- Tab routes: `/(tabs)/home`, `/(tabs)/profile`, etc.
- Stack routes: `/practice/settings`, `/subjects/[id]`, etc.
- **Never** reference routes that don't exist (e.g., `/(auth)/welcome` when no auth folder exists)

#### Provider Hierarchy Must Be Correct
In `app/_layout.tsx`, the correct order is:
```tsx
<QueryClientProvider client={queryClient}>
  <AuthProvider>
    <Stack>
      {/* Screen definitions */}
    </Stack>
  </AuthProvider>
</QueryClientProvider>
```

### 3. Context Patterns

#### Auth Context Requirements
When using auth context with navigation:
```tsx
// ✅ CORRECT: Include all methods that will be used
type AuthContextType = {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signOut: () => Promise<void>;  // Include this if used
};

// ✅ CORRECT: Provide default implementation
const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  loading: true,
  signOut: async () => {},  // Default no-op
});
```

#### Navigation After Auth Actions
```tsx
// ✅ CORRECT: Navigate to existing routes
await signOut();
router.replace('/(tabs)/home');

// ❌ WRONG: Navigate to non-existent routes
await signOut();
router.replace('/(auth)/welcome');  // This route doesn't exist!
```

### 4. Screen Registration in Layouts

#### Root Layout (_layout.tsx)
All top-level navigators must be registered:
```tsx
<Stack screenOptions={{ headerShown: false }}>
  <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
  <Stack.Screen name="subjects/[id]" options={{ headerShown: false }} />
  <Stack.Screen name="practice" options={{ headerShown: false }} />
</Stack>
```

#### Nested Layouts - EXPLICIT PATTERN

**Root Layout:**
All top-level navigators MUST be explicitly registered:
```tsx
// app/_layout.tsx
<Stack screenOptions={{ headerShown: false }}>
  <Stack.Screen name="index" />
  <Stack.Screen name="(tabs)" />
  <Stack.Screen name="practice" />      {/* MUST be explicit */}
  <Stack.Screen name="subjects/[id]" />
  <Stack.Screen name="revision" />
</Stack>
```

**Nested Layouts:**
Each nested navigator (practice, revision, etc.) MUST explicitly declare all screens:
```tsx
// ✅ CORRECT: app/practice/_layout.tsx
export default function PracticeLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        presentation: 'card'
      }}
    >
      <Stack.Screen name="settings" />
      <Stack.Screen name="practice-session" />
      <Stack.Screen name="test-session" />
      <Stack.Screen name="results" />
    </Stack>
  );
}

// ❌ WRONG: Auto-discovery causes navigation context errors
export default function PracticeLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }} />
    // This causes "navigation context not found" errors!
  );
}
```

**Exception - Tabs Navigator:**
Tabs should use explicit declarations for tab-specific options:
```tsx
// app/(tabs)/_layout.tsx
<Tabs screenOptions={{ headerShown: false }}>
  <Tabs.Screen name="home" options={{ tabBarIcon: ... }} />
  <Tabs.Screen name="profile" options={{ tabBarIcon: ... }} />
</Tabs>
```

### 5. Navigation Hook Usage

#### Safe Hook Usage
```tsx
// ✅ CORRECT: Use hooks inside screen components
export default function MyScreen() {
  const router = useRouter();  // Safe - inside navigator
  return <View>...</View>;
}

// ❌ WRONG: Use hooks outside navigator context
const MyComponent = () => {
  const router = useRouter();  // Error - outside navigator
  return <View>...</View>;
};

// Then rendering MyComponent outside any navigator
```

### 6. Checklist Before Adding Navigation

Before adding `router.push()`, `router.replace()`, or `router.back()`:

1. ✅ Does the target route exist in the `app` folder?
2. ✅ Is the route registered in the appropriate `_layout.tsx`?
3. ✅ Are you calling the navigation method inside a screen component (not a utility/helper)?
4. ✅ Are all required context providers (Auth, Query, etc.) wrapping the navigator?
5. ✅ If using auth context methods, are they defined in the context type and provider?

### 7. Common Fixes

#### Fix: Missing signOut in Auth Context
```tsx
// Add to AuthContextType
type AuthContextType = {
  // ... other properties
  signOut: () => Promise<void>;
};

// Add to AuthProvider
const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};

// Add to provider value
<AuthContext.Provider value={{ user, session, loading, signOut }}>
```

#### Fix: Navigation to Non-Existent Route
1. Check if route exists in `app` folder
2. If not, either create it or change navigation target
3. Use existing routes like `/(tabs)/home` instead

### 8. Explicit Navigation Pattern (CRITICAL)

**ALWAYS use explicit screen registration at all levels to prevent navigation context errors:**

1. **Root Layout:** Explicitly register ALL top-level routes
2. **Nested Layouts:** Explicitly register ALL screens within each navigator

#### ✅ CORRECT Pattern:

```tsx
// ROOT LAYOUT (app/_layout.tsx) - Explicit Registration
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="practice" />      {/* Must be explicit */}
          <Stack.Screen name="subjects/[id]" />
          <Stack.Screen name="revision" />
        </Stack>
      </AuthProvider>
    </QueryClientProvider>
  );
}

// NESTED LAYOUT (app/practice/_layout.tsx) - Explicit Registration
import { Stack } from 'expo-router';

export default function PracticeLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        presentation: 'card'
      }}
    >
      <Stack.Screen name="settings" />
      <Stack.Screen name="practice-session" />
      <Stack.Screen name="test-session" />
      <Stack.Screen name="results" />
    </Stack>
  );
}
```

#### ❌ INCORRECT Patterns:

```tsx
// WRONG #1: Root layout with auto-discovery
export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
  // Missing explicit registration - practice navigator won't initialize!
}

// WRONG #2: Nested layout with auto-discovery
export default function PracticeLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }} />
    // Auto-discovery causes navigation context errors!
  );
}
```

#### Why This Explicit Pattern Works:
1. **Explicit registration at all levels**: Ensures navigation context is ready before components render
2. **No timing issues**: Navigation hooks have the Stack context available immediately
3. **Clear hierarchy**: Makes the route structure obvious and predictable
4. **Prevents "navigation context not found" errors**: All screens are registered before they're accessed

#### When to Add Screen Options:
- **Tabs navigator**: Add tab-specific options (icons, labels, order)
- **Per-screen customization**: When individual screens need unique options (headers, animations, etc.)
- **Conditional routes**: When routes depend on auth state or feature flags

### 9. Testing Navigation Changes

After any navigation changes:
1. Clear metro bundler cache: `npm start -- --clear`
2. Test all navigation paths
3. Check for console errors about missing routes
4. Verify auth flow works correctly

### 10. File Structure Conventions

- Use `(tabs)` for tab navigator groups (parentheses make it a route group)
- Use `[id]` for dynamic routes
- Always have `_layout.tsx` in route groups that need navigation
- Keep `index.tsx` at root for redirect to default route

---

## Recent Fixes Applied

### 2025-12-05: Language Subject Questions Not Loading (English, Hindi, Urdu)

**Issue Found:**
- "No questions available" alert shown for English, Hindi, and Urdu subjects
- Questions were properly seeded in the database but not being fetched

**Root Cause:**
The code in `app/subjects/[id].tsx` was using `subjectName` (e.g., 'English & Pedagogy') instead of `subjectId` ('english') to determine the database language field:
```typescript
// ❌ WRONG - subjectName is 'English & Pedagogy', not 'English'
const subjectNameCapitalized = subjectName.charAt(0).toUpperCase() + subjectName.slice(1).toLowerCase();
// Results in: 'English & pedagogy' which doesn't match database
```

**Fix Applied:**
Changed to use `subjectId` for language determination:
```typescript
// ✅ CORRECT - use subjectId to determine language
if (subjectId === 'hindi' || subjectId === 'urdu' || subjectId === 'english') {
  language = 'English';
} else if (subjectId === 'telugu') {
  language = 'Telugu';
}
```

**Files Modified:**
- `app/subjects/[id].tsx:123-137`: Fixed language determination logic

**Database Verification:**
Questions are properly seeded:
- english: 1998 questions (language='English')
- hindi: 640 questions (language='English')
- urdu: 1498 questions (language='English')
- telugu: 637 questions (language='Telugu')

---

### 2025-11-11 (3): Navigation Context Error in Practice Session

**Issue Found:**
- Navigation context error when navigating from `/practice/settings` to `/practice/practice-session`
- Error: "Couldn't find a navigation object. Have you wrapped your app with 'NavigationContainer'?"
- Error occurred at practice-session.tsx:217 when component tried to render

**Root Cause:**
Auto-discovery pattern in nested layouts causes timing issues:
1. Practice layout was using auto-discovery (`<Stack />` with no explicit screens)
2. When components in practice-session.tsx called navigation hooks (`useRouter`, `useLocalSearchParams`) at the top level, the Stack context wasn't ready yet
3. This caused the navigation context to be undefined when the hooks were executed

**Fix Applied:**
Changed to **Explicit Navigation Pattern** for nested layouts:
```tsx
// Practice layout (app/practice/_layout.tsx) - EXPLICIT registration
export default function PracticeLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        presentation: 'card'
      }}
    >
      <Stack.Screen name="settings" />
      <Stack.Screen name="practice-session" />
      <Stack.Screen name="test-session" />
      <Stack.Screen name="results" />
    </Stack>
  );
}
```

**Files Modified:**
- `app/practice/_layout.tsx`: Added explicit screen declarations for all screens
- `CLAUDE.md`: Updated all navigation pattern guidance to require explicit registration at all levels

**Prevention - THE CORRECT PATTERN:**
1. **Root layout:** ALWAYS explicitly register top-level routes (tabs, practice, subjects, etc.)
2. **Nested layouts:** ALWAYS explicitly register all screens (settings, practice-session, etc.)
3. **No auto-discovery:** Auto-discovery causes navigation context timing issues
4. Clear Metro bundler cache after route structure changes: `npx expo start --clear`

**Why This Works:**
Explicit registration ensures the Stack context is fully initialized before any component tries to use navigation hooks. Auto-discovery delays initialization, causing race conditions.

---

### 2025-11-11 (1): Auth Sign Out Navigation Error

**Issues Found:**
1. Missing `signOut` function in `lib/auth-context.tsx`
2. Navigation to non-existent `/(auth)/welcome` route in profile

**Fixes Applied:**
1. Added `signOut` method to AuthContextType and AuthProvider
2. Changed sign out navigation from `/(auth)/welcome` to `/(tabs)/home`

**Files Modified:**
- `lib/auth-context.tsx`: Added signOut function
- `app/(tabs)/profile.tsx`: Fixed navigation target

---

## Quick Reference

### Current Route Structure
```
/                       → Redirects to /(tabs)/home
/(tabs)/home            → Home screen with subjects
/(tabs)/revision        → Revision mode selection
/(tabs)/analytics       → Analytics dashboard
/(tabs)/profile         → User profile
/subjects/[id]          → Subject details with chapters
/practice/settings      → Practice configuration
/practice/practice-session → Practice mode (instant feedback)
/practice/test-session  → Test mode (feedback at end)
/practice/results       → Session results
/revision/session       → Revision session
```

### Safe Navigation Examples
```tsx
// Navigate to tabs
router.push('/(tabs)/home');
router.push('/(tabs)/analytics');

// Navigate to practice
router.push('/practice/settings');
router.replace('/practice/results');

// Navigate with params
router.push({
  pathname: '/subjects/[id]',
  params: { id: subjectId, name: subjectName }
});

// Go back
router.back();
```


To open emulator : emulator -avd Medium_Phone_API_36.1

