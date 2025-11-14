# Codebase Structure Analysis

## Current Structure Overview

```
tetapp/
├── app/                          # Expo Router file-based routing
│   ├── _layout.tsx              # Root layout with providers
│   ├── index.tsx                # Entry point (redirects to tabs)
│   ├── login.tsx                # Login screen
│   ├── payment-success.tsx      # Payment success screen
│   │
│   ├── (tabs)/                  # Tab navigator group
│   │   ├── _layout.tsx          # Tab bar configuration
│   │   ├── home.tsx             # Home screen (subjects list)
│   │   ├── revision.tsx         # Revision mode selection
│   │   ├── notes.tsx            # Notes/payment screen
│   │   └── profile.tsx          # User profile
│   │
│   ├── auth/
│   │   └── callback.tsx         # OAuth callback handler
│   │
│   ├── practice/                # Practice flow stack
│   │   ├── _layout.tsx          # Stack navigator
│   │   ├── settings.tsx         # Practice configuration
│   │   ├── practice-session.tsx # Practice mode (instant feedback)
│   │   ├── test-session.tsx     # Test mode (end feedback)
│   │   ├── results.tsx          # Practice results
│   │   └── test-results.tsx     # Test results
│   │
│   ├── revision/
│   │   └── session.tsx          # Revision session screen
│   │
│   ├── subjects/
│   │   └── [id].tsx             # Dynamic subject details
│   │
│   └── notes/
│       ├── _layout.tsx          # Notes stack navigator
│       └── viewer.tsx           # PDF/notes viewer
│
├── components/                   # Reusable UI components
│   ├── auth/
│   │   ├── PhoneInput.tsx       # Phone number input
│   │   └── OTPInput.tsx         # OTP verification input
│   │
│   ├── payment/
│   │   └── RazorpayCheckout.tsx # Payment integration
│   │
│   ├── test-session/            # Test session components
│   │   ├── TestHeader.tsx       # Header with timer/progress
│   │   ├── QuestionStats.tsx    # Question statistics
│   │   ├── QuestionGrid.tsx     # Question navigation grid
│   │   ├── OptionButton.tsx     # MCQ option button
│   │   └── TestActions.tsx      # Action buttons
│   │
│   ├── MathText.tsx             # Math equation renderer
│   └── PentagonShapes.tsx       # UI decoration component
│
├── lib/                          # Business logic & utilities
│   ├── api/                      # API layer
│   │   ├── subjects.ts          # Subject data fetching
│   │   ├── chapters.ts          # Chapter data fetching
│   │   ├── questions.ts         # Question data fetching
│   │   └── msg91.ts             # SMS/OTP service
│   │
│   ├── types/
│   │   └── database.types.ts    # TypeScript types (Supabase)
│   │
│   ├── utils/
│   │   ├── getQuestionExplanation.ts
│   │   └── staticExplanations.ts
│   │
│   ├── auth-context.tsx         # Authentication context provider
│   ├── supabase.ts              # Supabase client configuration
│   ├── razorpay.ts              # Payment integration
│   ├── pricing-config.ts        # Pricing/subscription config
│   ├── notes-data.ts            # Notes data
│   └── notes-storage.ts         # Notes storage logic
│
├── hooks/                        # Custom React hooks (if any)
├── assets/                       # Static assets (images, fonts)
├── scripts/                      # Database seeding scripts
└── backend/                      # Separate Express backend (for Razorpay)
```

---

## Architecture Assessment

### ✅ **Strengths**

#### 1. **Follows Expo Router Best Practices**
- Uses file-based routing correctly
- Proper use of route groups `(tabs)` for tab navigation
- Dynamic routes `[id]` for subject details
- **Explicit screen registration** at all levels (prevents navigation context errors)

#### 2. **Clear Separation of Concerns**
- **Pages (app/)**: Presentation & screen logic
- **Components**: Reusable UI elements
- **Lib**: Business logic, API calls, utilities
- **Clean layering**: Pages → Components → API → Supabase

#### 3. **Context & State Management**
- Auth context properly wraps the app (app/_layout.tsx:23-43)
- React Query for server state (app/_layout.tsx:14-21)
- Proper provider hierarchy: GestureHandler → QueryClient → Auth → Stack

#### 4. **Component Organization**
- Domain-based grouping (`auth/`, `payment/`, `test-session/`)
- Screen-specific components isolated (`test-session/` components)
- Reusable utilities (`MathText.tsx` for math rendering)

#### 5. **Type Safety**
- TypeScript throughout
- Database types auto-generated (`lib/types/database.types.ts`)
- Path aliases configured (`@/*` in tsconfig.json:6-8)

---

### ⚠️ **Areas for Improvement**

#### 1. **Missing `hooks/` Directory Usage**
**Issue**: Custom hooks might be scattered across files or mixed in components.

**Recommendation**:
```typescript
// hooks/useQuestions.ts
export function useQuestions(subjectId: string) {
  return useQuery({
    queryKey: ['questions', subjectId],
    queryFn: () => fetchQuestions(subjectId)
  });
}

// hooks/useAuth.ts
export function useAuth() {
  return useContext(AuthContext);
}
```

**Why**: Centralized hooks improve reusability and testability.

---

#### 2. **Component Size & Complexity**
**Observation**: Some screen files are likely large (login.tsx:6344 lines shown in directory listing).

**Recommendation**: Break down complex screens into smaller components:
```
app/practice/practice-session.tsx (likely large)
  ↓ Extract to:
components/practice-session/
  ├── QuestionDisplay.tsx
  ├── AnswerFeedback.tsx
  ├── ProgressTracker.tsx
  └── NavigationControls.tsx
```

---

#### 3. **API Layer Could Be More Robust**
**Current**: Simple functions in `lib/api/`

**Recommendation**: Consider adding:
```typescript
// lib/api/client.ts
export const apiClient = {
  subjects: {
    getAll: () => supabase.from('subjects').select('*'),
    getById: (id: string) => supabase.from('subjects').select('*').eq('id', id),
  },
  questions: {
    getByChapter: (chapterId: string) => // ...
  }
};
```

**Benefits**: Type-safe API calls, easier to mock for testing.

---

#### 4. **Constants & Configuration**
**Missing**: Dedicated `constants/` or `config/` directory.

**Recommendation**:
```
lib/config/
  ├── navigation.ts      # Route paths as constants
  ├── theme.ts           # Colors, fonts, spacing
  └── features.ts        # Feature flags
```

**Why**: Prevents magic strings, enables feature flags, easier theming.

---

#### 5. **Backend Integration**
**Issue**: Separate `backend/` folder suggests a Node.js backend, but unclear integration.

**Concern**:
- Are there API endpoints that could be Supabase Edge Functions?
- Is the backend just for Razorpay webhooks?

**Recommendation**:
- If backend only handles payments, consider Supabase Edge Functions
- Document backend purpose and API contracts
- Consider monorepo structure if backend grows

---

#### 6. **Testing Structure**
**Missing**: No visible test files.

**Recommendation**:
```
__tests__/
  ├── components/
  ├── screens/
  ├── hooks/
  └── lib/
```

---

#### 7. **Unused `notes/_layout.tsx`**
**Observation**: Notes has a layout but only one screen (viewer.tsx).

**Question**: Is this anticipating future notes features?
- If yes: Keep the structure
- If no: Could simplify to a single screen at `app/notes.tsx`

---

### 📊 **Optimal Structure Comparison**

| Aspect | Current | Optimal | Status |
|--------|---------|---------|--------|
| Routing | Expo Router with explicit registration | ✓ Same | ✅ Optimal |
| State Management | React Query + Context | ✓ Same | ✅ Optimal |
| Component Organization | Domain-based folders | ✓ Same | ✅ Optimal |
| Type Safety | TypeScript + generated types | ✓ Same | ✅ Optimal |
| API Layer | Simple functions | API client pattern | ⚠️ Could improve |
| Custom Hooks | Mixed/scattered | Dedicated `hooks/` | ⚠️ Could improve |
| Constants | Inline/scattered | Dedicated `config/` | ⚠️ Missing |
| Testing | Not visible | Comprehensive tests | ❌ Missing |
| Component Size | Some large files | Smaller, focused files | ⚠️ Review needed |

---

## Recommendations Priority

### **High Priority**
1. **Extract custom hooks** to `hooks/` directory
2. **Break down large screen files** (especially practice-session, test-session)
3. **Add constants/config** directory for magic strings

### **Medium Priority**
4. **Create API client pattern** for type-safe data fetching
5. **Document backend** purpose and API contracts
6. **Add testing infrastructure**

### **Low Priority**
7. Review `notes/_layout.tsx` necessity
8. Consider feature flags system
9. Add error boundaries for better error handling

---

## Summary

**Your codebase structure is fundamentally sound** and follows Expo Router best practices well. The explicit navigation pattern prevents common errors, and the separation of concerns is clean.

**Main improvement areas**:
1. Component extraction (reduce file size)
2. Centralize hooks and constants
3. Add testing

**Code health**: **7.5/10** - Good foundation, room for refinement as the app scales.

---

## Next Steps

Would you like to implement any of these improvements:
- Extract hooks to a dedicated directory
- Break down large screen files
- Create a constants/config structure
- Set up the API client pattern
- Add testing infrastructure
