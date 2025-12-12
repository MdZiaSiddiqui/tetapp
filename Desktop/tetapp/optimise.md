# Codebase Structure Analysis & Optimization Guide

## 1. DIRECTORY STRUCTURE & PURPOSES

```
/tetapp
├── /app                      # Expo Router navigation structure (main app screens)
│   ├── /(tabs)              # Tab-based navigation (4 main tabs)
│   │   ├── home.tsx         # Subject browsing & selection
│   │   ├── revision.tsx      # Revision mode
│   │   ├── notes.tsx         # Notes/resources
│   │   └── profile.tsx       # User profile & settings
│   ├── /practice            # Practice mode screens (nested stack)
│   │   ├── settings.tsx      # Configure practice session
│   │   ├── practice-session.tsx  # Live practice (instant feedback)
│   │   ├── test-session.tsx      # Test mode (no feedback until end)
│   │   ├── results.tsx           # Practice results
│   │   └── test-results.tsx      # Test results
│   ├── /subjects            # Dynamic subject detail pages
│   │   └── [id].tsx         # Subject details & chapters
│   ├── /auth                # Auth callback handling
│   │   └── callback.tsx
│   ├── /revision            # Revision session screens
│   ├── /legal               # Legal pages (privacy, terms)
│   ├── /notes               # Notes viewer
│   ├── index.tsx            # App entry/redirect
│   ├── login.tsx            # Login screen
│   ├── pricing.tsx          # Premium pricing
│   ├── payment-success.tsx  # Payment confirmation
│   └── _layout.tsx          # Root navigation layout
│
├── /lib                     # Core business logic & utilities
│   ├── /api                 # Supabase database queries
│   │   ├── questions.ts     # Question fetching (500+ lines, handles all filters)
│   │   ├── subjects.ts      # Subject queries with stats
│   │   ├── chapters.ts      # Chapter management
│   │   └── msg91.ts         # SMS provider integration
│   ├── auth-context.tsx     # Authentication state (Google Sign-In + Supabase)
│   ├── supabase.ts          # Supabase client initialization
│   ├── razorpay.ts          # Payment processing integration
│   ├── pricing-config.ts    # Payment tiers & pricing
│   ├── /types
│   │   └── database.types.ts # TypeScript interfaces for all data
│   ├── /utils
│   │   ├── getQuestionExplanation.ts
│   │   └── staticExplanations.ts
│   ├── notes-storage.ts     # Local notes management
│   └── notes-data.ts        # Notes data structure
│
├── /components              # Reusable UI components
│   ├── /auth                # Auth UI (OTP, phone input)
│   ├── /test-session        # Test mode specific components
│   │   ├── QuestionGrid.tsx
│   │   ├── OptionButton.tsx
│   │   ├── TestHeader.tsx
│   │   ├── TestActions.tsx
│   │   └── QuestionStats.tsx
│   ├── /payment             # Payment checkout UI
│   │   └── RazorpayCheckout.tsx
│   ├── /premium             # Pro feature components
│   │   ├── PremiumBadge.tsx
│   │   ├── FeatureLockOverlay.tsx
│   │   └── UpgradePrompt.tsx
│   ├── MathText.tsx         # KaTeX math rendering
│   ├── PaywallGate.tsx      # Premium access gate
│   ├── PentagonShapes.tsx   # UI decorative component
│   ├── ExitConfirmationModal.tsx
│   ├── SubmitTestConfirmationModal.tsx
│   └── GoogleLogo.tsx
│
├── /hooks                   # Custom React hooks
│   ├── useTestSession.ts    # Test session state management (80+ lines)
│   ├── useTestTimer.ts      # Timer functionality
│   ├── useQuestionStats.ts  # Question status tracking
│   ├── useSwipeNavigation.ts # Swipe gesture support
│   ├── useProAccess.ts      # Premium access checking
│   ├── useSupabaseData.ts   # Query wrapper
│   └── index.ts             # Hook exports
│
├── /scripts                 # Database setup & maintenance
│   ├── seed-tet-questions.ts # Seed TET exam questions
│   ├── seed-questions.ts    # Generic question seeding
│   ├── check-database.ts    # DB validation
│   ├── verify-rls-fix.ts    # Security policy verification
│   ├── apply-migration.ts   # DB migrations
│   ├── test-payment.ts      # Payment testing
│   └── [7 other utility scripts]
│
├── /backend                 # Simple Node.js server
│   └── server.js           # Webhook handler (Razorpay, etc.)
│
├── /supabase                # Local Supabase config
├── /data                    # Static data & seed files
├── /constants               # App constants
├── /types                   # Global TypeScript types
├── /assets                  # App icons, splash screens
├── /android & /ios         # Native platform configs
│
└── Configuration Files:
    ├── app.json & app.config.js  # Expo config
    ├── package.json              # Dependencies
    ├── tsconfig.json            # TypeScript config
    ├── tailwind.config.js       # Styling
    ├── babel.config.js          # Babel config
    ├── metro.config.js          # Metro bundler
    ├── .env & .env.example      # Environment variables
    └── eas.json                 # EAS build config
```

---

## 2. TECH STACK ANALYSIS

### **Frontend Framework**
- **React Native 0.81.5** - Cross-platform mobile framework
- **Expo 54.0.23** - React Native framework for simplified development
- **Expo Router 6.0.14** - File-based routing (like Next.js for React Native)
- **React 19.1.0** - Latest React version
- **TypeScript 5.9.2** - Type-safe development

### **State Management & Data Fetching**
- **TanStack React Query 5.90.5** - Server state management & caching
- **React Context API** - Authentication state (custom `AuthProvider`)
- **React Hooks** - Component-level state management
- **Custom hooks** - Specialized state management (test session, timer, questions)

### **Backend & Database**
- **Supabase (PostgreSQL)** - BaaS with authentication, database, edge functions
- **Supabase Auth** - User authentication with Google OAuth
- **Supabase RLS** - Row-level security for data protection
- **Supabase Edge Functions** - Serverless payment processing

### **Authentication**
- **@react-native-google-signin/google-signin** - Native Google Sign-In
- **Supabase Auth with ID Tokens** - Backend authentication
- **AsyncStorage** - Session persistence on device

### **Styling & UI**
- **NativeWind 4.2.1** - Tailwind CSS for React Native
- **Tailwind CSS 3.3.2** - Utility-first CSS framework
- **Expo Linear Gradient** - Gradient backgrounds
- **@expo/vector-icons** - Icon set (Ionicons)

### **Specialized Libraries**
- **react-native-razorpay 2.3.1** - Payment gateway integration
- **KaTeX 0.16.25** - Math notation rendering
- **react-native-katex** - KaTeX wrapper for React Native
- **react-native-markdown-display** - Markdown rendering
- **react-native-render-html** - HTML rendering
- **react-native-webview** - WebView support
- **react-native-reanimated 4.1.3** - Smooth animations
- **react-native-gesture-handler** - Touch gesture handling
- **react-native-safe-area-context** - Device safe area handling

### **Utilities**
- **@react-native-async-storage/async-storage** - Local device storage
- **dotenv 17.2.3** - Environment variable loading
- **expo-crypto** - Cryptography utilities
- **expo-file-system** - File system access
- **ramda, zod** - Functional utilities

---

## 3. ROUTING STRUCTURE (Expo Router)

The app uses **file-based routing** with explicit navigation patterns:

### **Route Hierarchy**

```
ROOT LAYOUT (app/_layout.tsx)
│
├── index.tsx                 → "/" (Entry point, redirects to /(tabs)/home)
├── login.tsx                 → "/login"
├── auth/callback.tsx         → "/auth/callback"
├── (tabs)                    → Tab navigator
│   ├── home.tsx             → "/(tabs)/home"
│   ├── revision.tsx         → "/(tabs)/revision"
│   ├── notes.tsx            → "/(tabs)/notes"
│   └── profile.tsx          → "/(tabs)/profile"
├── subjects/[id].tsx         → "/subjects/:id"
├── practice/ (Stack)         → Nested stack layout
│   ├── settings.tsx         → "/practice/settings"
│   ├── practice-session.tsx → "/practice/practice-session"
│   ├── test-session.tsx     → "/practice/test-session"
│   ├── results.tsx          → "/practice/results"
│   └── test-results.tsx     → "/practice/test-results"
├── revision/session.tsx      → "/revision/session"
├── pricing.tsx              → "/pricing"
├── payment-success.tsx      → "/payment-success"
├── legal/[type].tsx         → "/legal/:type"
└── notes/viewer.tsx         → "/notes/viewer"
```

**Key Navigation Features:**
- Explicit screen registration prevents "navigation context" errors
- Tabs for main navigation (home, revision, notes, profile)
- Nested Stack for practice sessions (slide_from_right animation)
- Dynamic routes with params: `[id]`, `[type]`

---

## 4. COMPONENT ORGANIZATION

### **By Purpose**

**Authentication Components** (`/components/auth/`)
- `OTPInput.tsx` - OTP input UI
- `PhoneInput.tsx` - Phone number input

**Test Session Components** (`/components/test-session/`)
- `QuestionGrid.tsx` - Grid of questions for navigation
- `OptionButton.tsx` - Multiple choice option buttons
- `TestHeader.tsx` - Test status header
- `TestActions.tsx` - Submit/navigation actions
- `QuestionStats.tsx` - Question attempt stats

**Payment Components** (`/components/payment/`)
- `RazorpayCheckout.tsx` - Payment checkout interface

**Premium Components** (`/components/premium/`)
- `PremiumBadge.tsx` - Feature lock badge
- `FeatureLockOverlay.tsx` - Overlay blocking free users
- `UpgradePrompt.tsx` - Upgrade suggestion

**Utility Components**
- `MathText.tsx` - KaTeX math rendering (32KB file - complex)
- `PaywallGate.tsx` - Premium access gate component
- `PentagonShapes.tsx` - Decorative UI shapes
- `ExitConfirmationModal.tsx` - Exit confirmation dialog
- `SubmitTestConfirmationModal.tsx` - Submit test confirmation

---

## 5. STATE MANAGEMENT APPROACH

### **Multi-Layer Architecture**

**Layer 1: Global Auth State (Context API)**
```tsx
// lib/auth-context.tsx
- Provider wraps entire app
- Manages: user, session, loading, signOut, signInWithGoogle
- Listens to Supabase auth state changes
- Persists session via AsyncStorage
```

**Layer 2: Server State (React Query)**
```tsx
// hooks/useSupabaseData.ts
- Wraps Supabase queries
- Automatic caching
- Stale time: 5 minutes
- Retry strategy: 1 attempt
```

**Layer 3: Component State (Hooks)**
```tsx
// hooks/useTestSession.ts (80+ lines)
- Manages: currentQuestion, selectedAnswer, answeredQuestions
- Tracks question status (answered, not-answered, marked-for-review)
- Stores answers per question index
- Manages question visit tracking

// hooks/useTestTimer.ts
- Countdown timer logic
- Alerts near end time

// hooks/useQuestionStats.ts
- Question status tracking (answered, not-answered, etc.)
- Statistics calculations
```

**Layer 4: Device Storage (AsyncStorage)**
```tsx
// Persistent session storage
// Notes storage (local)
// User preferences
```

---

## 6. API & BACKEND INTEGRATION PATTERNS

### **Primary: Supabase (BaaS)**

**Database Queries** (`/lib/api/`)
```tsx
// questions.ts (272 functions)
- getQuestionsByChapter()
- getQuestionsByChapterId()
- getQuestions() - with filters
- getQuestionsWithDetails()
- getRandomQuestions()
- getQuestionsBySubjectPaperLanguage()
- getAvailableLanguages()
- getQuestionStats()
- getQuestionsBySubjectAndMode() - with logging/debug

// subjects.ts
- getSubjects()
- getSubjectsWithStats()
- getSubjectById()
- searchSubjects()
- getSubjectsByPaper()

// chapters.ts
- getChaptersWithQuestionCounts()

// msg91.ts
- SMS verification integration
```

**Key Query Patterns:**
- Filter by: `subject_id`, `chapter_id`, `language`, `paper`, `difficulty`, `tag`
- Pagination: `limit`, `offset`, `range()`
- Relationships: Join with subjects, chapters
- Exact counts for performance

**Critical Data Mapping:**
The codebase has a special handling rule documented in `CLAUDE.md`:
- Hindi/Urdu questions stored as `language: 'English'` in database
- Must query with `language: 'English'` for Hindi/Urdu subjects

### **Secondary: Payment Processing**

**Razorpay Integration** (`/lib/razorpay.ts`)
```tsx
- createRazorpayOrder() - Via Supabase Edge Function
- verifyPaymentSignature() - Verify payment success
- Payment webhook handling via backend Node.js server
```

**Payment Tiers** (`/lib/pricing-config.ts`)
```tsx
Types:
- free: Free tier
- paper1: Paper 1 access only
- paper2: Paper 2 access only
- both: Both papers (full access)
```

### **Tertiary: SMS Service**

**MSG91 Integration** (`/lib/api/msg91.ts`)
- OTP verification
- SMS sending for notifications

---

## 7. CONFIGURATION FILES

### **app.config.js**
```javascript
- App name: "TGTET"
- iOS bundle: com.tgtet.app
- Android package: com.tgtet.app
- Plugins: expo-router, google-signin
- Google Web Client ID loading
```

### **tsconfig.json**
```json
- Path alias: "@/*" → "./*"
- Strict mode: enabled
- Extends: expo/tsconfig.base
```

### **.env Variables** (Required)
```
EXPO_PUBLIC_SUPABASE_URL
EXPO_PUBLIC_SUPABASE_ANON_KEY
EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID
EXPO_PUBLIC_RAZORPAY_KEY_ID
```

### **tailwind.config.js**
- NativeWind Tailwind CSS setup

### **babel.config.js**
- Module resolver for path aliases
- Babel preset for Expo

### **metro.config.js**
- Metro bundler configuration

---

## 8. DATA TYPES & SCHEMAS

### **Core Database Types** (`/lib/types/database.types.ts`)

```typescript
Subject {
  id: string (kebab-case: 'child-development')
  name: string
  description?: string
  created_at, updated_at
}

Question {
  id: UUID
  subject_id, chapter_id: Foreign keys
  question: string
  tag?: string
  image_url?: string
  options: string[] (4 options)
  correct_answer: string
  solutions: string (explanation)
  reference?: string
  difficulty: 'easy' | 'medium' | 'difficult'
  paper: 'Paper 1' | 'Paper 2'
  language: 'English' | 'Telugu' | 'Urdu'
  question_number?: number
  created_at, updated_at
}

Chapter {
  id: UUID
  subject_id: Foreign key
  name: 'Paper 1' | 'Paper 2'
  description?: string
  created_at, updated_at
}

UserProfile {
  id: UUID (auth.users reference)
  email, full_name, avatar_url
  pro_tier: 'free' | 'paper1' | 'paper2' | 'both'
  subscription details
}
```

---

## 9. SPECIAL FEATURES

### **Premium/Paywall System**
- `PaywallGate.tsx` - Blocks free users from premium content
- `FeatureLockOverlay.tsx` - Visual lock indicator
- `useProAccess.ts` - Hook to check user's pro tier
- Tier-based access: Paper 1, Paper 2, or Both

### **Math Rendering**
- `MathText.tsx` (32KB) - Complex KaTeX integration for mathematical notation
- Handles equation rendering in questions

### **Test Mode Features**
- Question grid navigation
- Mark for review functionality
- Question status tracking (answered, not-answered, marked-for-review, etc.)
- Automatic time tracking per question
- Submit confirmation modal

### **Revision Mode**
- Separate session type from test mode
- Different UI/UX for study purposes

---

## 10. BUILD & DEPLOYMENT

### **Package Managers**
- npm (primary)
- Expo CLI for development
- EAS (Expo Application Services) for builds

### **Scripts Available**
```json
"start": "expo start"
"android": "expo run:android"
"ios": "expo run:ios"
"web": "expo start --web"
"seed": Database seeding
"check:db": Database validation
```

### **Build Configuration**
- **EAS Project ID**: 41217559-723c-4449-a10b-46de693b6e84
- **Platforms**: iOS, Android, Web
- **Edge-to-edge**: Enabled on Android

---

## 11. KEY ARCHITECTURAL PATTERNS

1. **Explicit Navigation Pattern** - All routes registered in layout files (prevents context errors)
2. **Layered State Management** - Context → Query → Hooks → AsyncStorage
3. **Error Handling** - `{ data, error }` tuple pattern throughout
4. **Type Safety** - Full TypeScript with strict mode
5. **Component Composition** - Small, reusable test-session components
6. **Custom Hooks** - Business logic extracted into hooks
7. **API Layer Abstraction** - All Supabase queries in `/lib/api/`
8. **Query Filtering** - Flexible filtering system with optional parameters

---

## 12. RECENT MODIFICATIONS (from git status)

```
Modified:
- app/practice/practice-session.tsx
- components/PentagonShapes.tsx
- claude.md (navigation guidelines document)
```

This indicates recent fixes to navigation and session management components.

---

# 📊 IS THIS STRUCTURE OPTIMAL? (Analysis & Recommendations)

## ✅ **STRENGTHS** (What's Working Well)

1. **✅ Excellent Separation of Concerns**
   - Clear boundaries: `/app` (UI), `/lib` (business logic), `/components` (reusable UI), `/hooks` (state)
   - API layer abstracted into `/lib/api/` - easy to swap backends if needed

2. **✅ Type Safety Throughout**
   - Full TypeScript with strict mode
   - Database types auto-generated: `database.types.ts`
   - Prevents runtime errors

3. **✅ Modern Stack Choices**
   - React Query for server state (caching, refetching, stale-while-revalidate)
   - Expo Router for file-based routing (type-safe, predictable)
   - Supabase for rapid backend development (auth, DB, edge functions in one)

4. **✅ Custom Hooks Pattern**
   - Business logic extracted from components
   - Reusable, testable: `useTestSession`, `useTestTimer`, `useProAccess`

5. **✅ Explicit Navigation Pattern**
   - Documented in `CLAUDE.md` as critical best practice
   - Prevents navigation context errors (a common React Native pitfall)

6. **✅ Modular Component Design**
   - Test session components broken down: `QuestionGrid`, `OptionButton`, `TestHeader`, etc.
   - Easy to understand and maintain

7. **✅ Environment-Based Configuration**
   - `.env` for secrets (Supabase keys, Razorpay keys)
   - App config in `app.config.js`

8. **✅ Premium Feature Gating**
   - Clean paywall implementation with `PaywallGate`, `FeatureLockOverlay`
   - Tier-based access control

---

## ⚠️ **POTENTIAL IMPROVEMENTS** (Areas to Optimize)

### 1. **🔴 CRITICAL: File Size & Performance**

**Problem:**
- `lib/api/questions.ts` is **272+ lines** with multiple similar query functions
- `MathText.tsx` is **32KB** (complex KaTeX setup)
- `hooks/useTestSession.ts` is **80+ lines** managing multiple concerns

**Recommendation:**
```tsx
// BEFORE: Multiple similar functions in questions.ts
- getQuestionsByChapter()
- getQuestionsByChapterId()
- getQuestions()
- getQuestionsWithDetails()
- getRandomQuestions()
- getQuestionsBySubjectPaperLanguage()

// AFTER: Single flexible query builder
export const getQuestions = ({
  subjectId,
  chapterId,
  language,
  paper,
  difficulty,
  tag,
  limit = 10,
  offset = 0,
  random = false
}: QuestionQueryOptions) => {
  let query = supabase.from('questions').select('*');

  if (subjectId) query = query.eq('subject_id', subjectId);
  if (chapterId) query = query.eq('chapter_id', chapterId);
  if (language) query = query.eq('language', language);
  // ... etc

  return query;
};
```

**Impact:** Reduce API file size by 40-50%, easier to maintain

---

### 2. **🟡 State Management Could Be Simplified**

**Current:** Multi-layer approach (Context + Query + Hooks + AsyncStorage)

**Problem:**
- State is spread across multiple hooks
- Test session logic duplicated between `test-session.tsx` and `practice-session.tsx`
- Hard to debug state flow

**Recommendation:**
```tsx
// Consider using Zustand for global app state
import create from 'zustand';
import { persist } from 'zustand/middleware';

const useAppStore = create(
  persist(
    (set) => ({
      // Test session state
      testSession: null,
      currentQuestion: 0,
      answers: {},

      // Actions
      setAnswer: (questionIndex, answer) =>
        set((state) => ({
          answers: { ...state.answers, [questionIndex]: answer }
        })),

      // Premium state
      proTier: 'free',

      // ... all shared state in one place
    }),
    { name: 'app-storage' } // Persist to AsyncStorage
  )
);
```

**Benefits:**
- Single source of truth
- DevTools integration
- Easier testing
- Less boilerplate than Context API

**Alternative:** Keep current approach but consolidate hooks:
- Merge `useTestSession`, `useTestTimer`, `useQuestionStats` into one `useTestManager` hook

---

### 3. **🟡 Component Organization Could Be More Scalable**

**Current Structure:**
```
/components
  /auth
  /test-session
  /payment
  /premium
  MathText.tsx
  PaywallGate.tsx
  PentagonShapes.tsx
  ExitConfirmationModal.tsx
  ... (8+ files at root level)
```

**Recommended Structure:**
```
/components
  /auth
    /OTPInput
    /PhoneInput
  /test
    /session
      /QuestionGrid
      /OptionButton
      /TestHeader
    /modals
      /ExitConfirmation
      /SubmitConfirmation
  /payment
    /RazorpayCheckout
  /premium
    /PremiumBadge
    /FeatureLockOverlay
    /PaywallGate
  /ui           # Generic reusable UI
    /MathText
    /Button
    /Modal
  /layout
    /PentagonShapes
```

**Benefits:**
- Each component in its own folder with `index.tsx`, styles, tests
- Easier to locate components
- Scales to hundreds of components

---

### 4. **🟡 Database Query Optimization**

**Current Issue (from CLAUDE.md):**
```tsx
// Hindi/Urdu questions stored as language: 'English' in database
// This is a workaround, not ideal
if (subjectName === 'Hindi' || subjectName === 'Urdu') {
  language = 'English';
}
```

**Recommendation:**
Fix at the database level:
```sql
-- Migration: Update language values
UPDATE questions
SET language = 'Hindi'
WHERE subject_id = 'hindi';

UPDATE questions
SET language = 'Urdu'
WHERE subject_id = 'urdu';
```

Then remove workaround in code. This is cleaner and prevents confusion.

---

### 5. **🟡 Error Handling Strategy**

**Current:** Ad-hoc error handling in components

**Recommended:**
```tsx
// lib/utils/error-handler.ts
export class AppError extends Error {
  constructor(
    public message: string,
    public code: string,
    public userMessage: string
  ) {
    super(message);
  }
}

// Global error boundary
export function ErrorBoundary({ children }) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <RNErrorBoundary
          onReset={reset}
          fallbackRender={({ error, resetError }) => (
            <ErrorFallback error={error} resetError={resetError} />
          )}
        >
          {children}
        </RNErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}
```

Add to `app/_layout.tsx` to catch all errors globally.

---

### 6. **🟡 Testing Infrastructure Missing**

**Current:** No test files visible in structure

**Recommendation:**
```bash
npm install --save-dev @testing-library/react-native jest
```

```
/lib
  /api
    /questions.test.ts    # Test API functions
/hooks
  /useTestSession.test.ts # Test custom hooks
/components
  /test-session
    /QuestionGrid.test.tsx # Test components
```

**Critical tests:**
- API layer functions (mock Supabase)
- Custom hooks (test state changes)
- Premium access logic (paywall behavior)
- Payment flows

---

### 7. **🟡 Environment Configuration**

**Current:** Single `.env` file

**Recommended:**
```
.env.development
.env.staging
.env.production
```

With app.config.js dynamic loading:
```javascript
const ENV = process.env.APP_ENV || 'development';
require('dotenv').config({ path: `.env.${ENV}` });
```

**Benefits:**
- Separate Supabase projects for dev/staging/prod
- Different Razorpay test/live keys
- Prevents accidental production data changes

---

### 8. **🟢 Documentation (Already Good)**

**Current:** `CLAUDE.md` is excellent with:
- Navigation best practices
- Database quirks documented (Hindi/Urdu language issue)
- Recent fixes logged with dates
- File structure conventions

**Recommendation:** Keep this up! Consider adding:
- `README.md` - Setup instructions for new developers
- `/docs` folder for:
  - API documentation
  - Component usage examples
  - State management flow diagrams

---

### 9. **🟡 Code Duplication**

**Observed:**
- `practice-session.tsx` and `test-session.tsx` likely share significant logic
- Multiple modal components (`ExitConfirmationModal`, `SubmitTestConfirmationModal`)

**Recommendation:**
```tsx
// components/ui/ConfirmationModal.tsx
export const ConfirmationModal = ({
  visible,
  title,
  message,
  confirmText,
  cancelText,
  onConfirm,
  onCancel
}) => { /* ... */ };

// Usage:
<ConfirmationModal
  visible={showExitModal}
  title="Exit Practice?"
  message="Your progress will be lost."
  confirmText="Exit"
  cancelText="Cancel"
  onConfirm={handleExit}
  onCancel={() => setShowExitModal(false)}
/>
```

---

### 10. **🟡 Performance Optimizations**

**Recommendations:**

```tsx
// 1. Memoize expensive components
import { memo } from 'react';

export const QuestionGrid = memo(({ questions, onQuestionSelect }) => {
  // Only re-renders when questions or onQuestionSelect changes
});

// 2. Lazy load heavy screens
import { lazy, Suspense } from 'react';

const PracticeSession = lazy(() => import('./practice/practice-session'));

// 3. Optimize images
<Image
  source={{ uri: imageUrl }}
  cachePolicy="memory-disk"  // Cache images
  placeholder={blurhash}     // Show placeholder while loading
/>

// 4. Virtualize long lists
import { FlashList } from '@shopify/flash-list';

<FlashList
  data={questions}
  estimatedItemSize={100}  // Much faster than FlatList
  renderItem={({ item }) => <QuestionCard question={item} />}
/>
```

---

## 📋 **PRIORITY RECOMMENDATIONS**

| Priority | Issue | Effort | Impact |
|----------|-------|--------|--------|
| 🔴 HIGH | Refactor `questions.ts` API layer | Medium | High |
| 🔴 HIGH | Fix database language field (Hindi/Urdu) | Low | High |
| 🔴 HIGH | Add error boundaries | Low | High |
| 🟡 MEDIUM | Reorganize component structure | Medium | Medium |
| 🟡 MEDIUM | Add testing infrastructure | High | High |
| 🟡 MEDIUM | Consolidate state management | High | High |
| 🟢 LOW | Environment-based configs | Low | Medium |
| 🟢 LOW | Add performance optimizations | Medium | Low |

---

## 🎯 **FINAL VERDICT**

### **Overall Structure: 8/10**

**✅ This is a WELL-STRUCTURED codebase** with:
- Modern tech stack
- Clear separation of concerns
- Type safety throughout
- Documented best practices (CLAUDE.md is gold!)
- Scalable architecture

**⚠️ Main areas for improvement:**
1. **Simplify API layer** (too many similar functions)
2. **Fix database schema** (Hindi/Urdu language field workaround)
3. **Add tests** (critical for long-term maintenance)
4. **Consolidate state management** (reduce complexity)
5. **Component organization** (prepare for scale)

**Would I start a new project with this structure?** Yes, with the improvements above.

**Is it production-ready?** Yes, but add error boundaries and tests before scaling up.

---

## Summary

This is a **well-structured, type-safe React Native exam prep application** using modern tools:
- **Modular architecture** with clear separation of concerns
- **Supabase as the primary backend** with PostgreSQL database
- **Expo Router for type-safe navigation** with explicit routing
- **React Query for efficient data fetching** and caching
- **Premium/freemium model** with payment integration
- **Multi-language support** (English, Telugu, Urdu)
- **Comprehensive math question support** with KaTeX rendering

The codebase prioritizes **type safety, code organization, and scalability** through careful abstraction layers and explicit patterns.
