# TET App - Codebase Exploration Report
## Complete System Architecture & Pro Status Implementation Guide

**Date**: November 15, 2025  
**App**: TS-TET Exam Preparation (React Native/Expo)  
**Focus**: Understanding Current Architecture for Pro Status & Feature Locking

---

## 1. CURRENT AUTHENTICATION SYSTEM

### Location
- **File**: `/Users/mohdziasiddiqui/Desktop/tetapp/lib/auth-context.tsx`

### Auth Provider Details
```
Type: React Context + Supabase Auth
Methods Provided:
  - useAuth() hook
  - signOut()
  - signInWithGoogle()

Current User Model:
  - user: User (from @supabase/supabase-js)
  - session: Session
  - loading: boolean
```

### Auth Implementation
- Uses Supabase Auth with Google Sign-In (React Native Google Signin)
- AsyncStorage for session persistence
- Auto-refresh tokens enabled
- Listening to auth state changes

---

## 2. DATABASE SCHEMA OVERVIEW

### Core Tables (from supabase-setup.sql)
1. **subjects** - TET exam subjects (8 total)
2. **chapters** - Paper 1 & Paper 2 organization
3. **questions** - Question bank with multi-language support
4. **user_attempts** - User practice/test history

### Pro Access Tables (from add_pro_access_fields.sql)
1. **user_profiles** - User profile + pro access fields
2. **payments** - Payment transaction tracking
3. **user_pro_status** - View for quick pro status lookup

---

## 3. USER DATA STRUCTURE

### Database Types
**File**: `/Users/mohdziasiddiqui/Desktop/tetapp/lib/types/database.types.ts`

#### UserProfile
```typescript
interface UserProfile {
  id: string;                          // UUID from auth.users
  email: string;
  full_name?: string;
  avatar_url?: string;

  // Pro Access Management
  pro_tier: 'free' | 'paper1' | 'paper2' | 'both';
  pro_access_paper: string[];          // ['paper1', 'paper2']
  pro_package_type?: '3_months' | '1_year';
  pro_purchased_at?: string;
  pro_expires_at?: string;
  razorpay_payment_id?: string;
  razorpay_order_id?: string;

  // Legacy subscription fields
  tier: 'free' | 'pro';
  subscription_status?: 'active' | 'cancelled' | 'expired' | 'trial';
  subscription_start_date?: string;
  subscription_end_date?: string;

  // Usage tracking for free tier
  practice_sessions_count?: number;
  test_sessions_count?: number;
  monthly_sessions_limit?: number;

  created_at: string;
  updated_at: string;
}
```

#### UserProStatus (View)
```typescript
interface UserProStatus {
  user_id: string;
  pro_tier: 'free' | 'paper1' | 'paper2' | 'both';
  pro_access_paper: string[];
  pro_package_type?: '3_months' | '1_year';
  pro_purchased_at?: string;
  pro_expires_at?: string;
  pro_status?: 'active' | 'expired' | 'inactive';
  days_remaining?: number | null;
  razorpay_payment_id?: string;
}
```

---

## 4. CURRENT PRO ACCESS SYSTEM

### Hook: useProAccess
**File**: `/Users/mohdziasiddiqui/Desktop/tetapp/hooks/useProAccess.ts`

#### Returned Values
```typescript
interface ProAccessInfo {
  // Access status
  hasPaper1Access: boolean;
  hasPaper2Access: boolean;
  isProActive: boolean;
  isFree: boolean;

  // Tier information
  tier: 'free' | 'paper1' | 'paper2' | 'both';
  accessiblePapers: number[];

  // Subscription details
  expiresAt: Date | null;
  daysRemaining: number | null;
  packageType: '3_months' | '1_year' | null;
  purchasedAt: Date | null;

  // Loading and error states
  loading: boolean;
  error: string | null;

  // Refresh function
  refresh: () => Promise<void>;
}
```

#### Additional Hooks
- `usePaperAccess(paperNumber)` - Check specific paper access
- `useUpgradePrompt(paperNumber)` - Determine recommended tier

### Pricing Configuration
**File**: `/Users/mohdziasiddiqui/Desktop/tetapp/lib/pricing-config.ts`

#### Tier System
```
Paper 1 Plans:
  - 3 Months: ₹499 (49,900 paisa)
  - 1 Year: ₹799 (79,900 paisa) [POPULAR]

Paper 2 Plans:
  - 3 Months: ₹699 (69,900 paisa)
  - 1 Year: ₹999 (99,900 paisa) [POPULAR]

Both Papers (Bundle):
  - 3 Months: ₹999 (99,900 paisa)
  - 1 Year: ₹1,499 (149,900 paisa) [POPULAR]
```

#### Tier Features
```typescript
TIER_FEATURES = {
  paper1: [
    'Complete Paper-1 syllabus',
    'Unlimited practice tests',
    'Progress tracking',
    'Detailed solutions',
    'All languages (English, Telugu, Urdu)',
  ],
  paper2: [
    'Complete Paper-2 syllabus',
    'Unlimited practice tests',
    'Progress tracking',
    'Detailed solutions',
    'All languages (English, Telugu, Urdu)',
  ],
  both: [
    'Both Paper-1 & Paper-2 access',
    'Unlimited practice tests',
    'Complete progress tracking',
    'Detailed solutions',
    'All languages (English, Telugu, Urdu)',
    'Priority support',
    'Best value - Save ₹299!',
  ],
}
```

---

## 5. PAYMENT INTEGRATION

### Razorpay Service
**File**: `/Users/mohdziasiddiqui/Desktop/tetapp/lib/razorpay.ts`

#### Payment Flow
1. **createRazorpayOrder()** - Create order via Supabase Edge Function
2. **verifyRazorpayPayment()** - Verify payment via Edge Function
3. **generateRazorpayCheckoutHTML()** - Generate WebView checkout
4. **getRazorpayCheckoutOptions()** - Configure checkout options

#### Payment Table Structure
```sql
CREATE TABLE payments (
  id UUID PRIMARY KEY,
  user_id UUID (references auth.users),
  
  // Razorpay IDs
  order_id TEXT UNIQUE,
  payment_id TEXT UNIQUE,
  razorpay_signature TEXT,
  
  // Purchase details
  tier TEXT ('paper1', 'paper2', 'both'),
  package_type TEXT ('3_months', '1_year'),
  amount INTEGER (in paisa),
  currency TEXT (default 'INR'),
  
  // Payment status
  status TEXT ('created', 'authorized', 'captured', 'failed', 'refunded'),
  payment_method TEXT,
  
  // Timestamps
  created_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ,
  paid_at TIMESTAMPTZ
);
```

#### Supabase Edge Functions Required
- `create-razorpay-order` - Creates Razorpay order
- `verify-razorpay-payment` - Verifies and grants pro access

#### Helper Functions in Database
```sql
-- Check if user has pro access to a paper
has_paper_access(user_uuid, paper_num) -> BOOLEAN

-- Grant pro access after successful payment
grant_pro_access(user_uuid, tier_type, package_duration, payment_id, order_id)

-- Downgrade expired pro users
check_pro_expiry() -> VOID
```

---

## 6. WHERE FEATURES ARE ACCESSED

### Practice Sessions
**Files**:
- `/Users/mohdziasiddiqui/Desktop/tetapp/app/practice/settings.tsx` - Settings configuration
- `/Users/mohdziasiddiqui/Desktop/tetapp/app/practice/practice-session.tsx` - Practice mode (instant feedback)
- `/Users/mohdziasiddiqui/Desktop/tetapp/app/practice/test-session.tsx` - Test mode (feedback at end)
- `/Users/mohdziasiddiqui/Desktop/tetapp/app/practice/_layout.tsx` - Layout for practice routes

**Access Pattern**:
1. User selects subject/chapter from home
2. Navigates to `/practice/settings`
3. Configures practice/test mode, language, question count, timer
4. Navigates to appropriate session screen
5. Questions fetched from Supabase based on filters

**Current Limitation**: No pro access check in practice sessions

### Test Sessions
Same pattern as practice sessions - tests are accessed through settings screen.

**Current Limitation**: No pro access check in test sessions

### Notes/Study Materials
**Files**:
- `/Users/mohdziasiddiqui/Desktop/tetapp/app/notes/_layout.tsx` - Notes layout
- `/Users/mohdziasiddiqui/Desktop/tetapp/app/notes/viewer.tsx` - Notes viewer (WebView)

**Access Pattern**:
1. User views note list (likely on profile or home)
2. Selects a note
3. Note HTML loaded from local assets
4. Displayed in WebView with mobile-optimized CSS

**Current Limitation**: No pro access check in notes viewer

### Revision Sessions
**Files**:
- `/Users/mohdziasiddiqui/Desktop/tetapp/app/revision/session.tsx` - Revision mode

**Current Limitation**: No pro access check in revision sessions

### Home Screen (Subject List)
**Files**:
- `/Users/mohdziasiddiqui/Desktop/tetapp/app/(tabs)/home.tsx` - Subject listing

**Access Pattern**:
1. User selects paper type (Paper 1 or Paper 2)
2. Subjects filtered based on paper type
3. Subject details shown with question counts
4. User can tap to navigate to `/subjects/[id]`

**Current Limitation**: No pro access check - all subjects visible to free users

### Profile Screen
**Files**:
- `/Users/mohdziasiddiqui/Desktop/tetapp/app/(tabs)/profile.tsx` - User profile

**Current Implementation**:
- Shows user email
- Shows current plan status using `useProAccess()` hook
- Displays plan validity and days remaining
- "Upgrade to Pro" button (currently navigates to notes tab)
- Contact support (WhatsApp, Email)
- Links to privacy policy and terms

**Current Integration**: Profile already uses `useProAccess()` hook!

---

## 7. NAVIGATION STRUCTURE

### Root Layout
**File**: `/Users/mohdziasiddiqui/Desktop/tetapp/app/_layout.tsx`

```
App/
├── index (redirect to home or login)
├── login (authentication)
├── auth/callback (OAuth callback)
├── (tabs) (bottom tab navigator)
│   ├── home (subject list)
│   ├── revision (revision mode selector)
│   ├── analytics (analytics dashboard)
│   └── profile (user profile)
├── subjects/[id] (subject details with chapters)
├── practice (practice/test navigator)
│   ├── settings (configure session)
│   ├── practice-session (practice mode)
│   ├── test-session (test mode)
│   └── results (results screen)
├── revision/session (revision session)
├── payment-success (success screen)
└── legal/[type] (privacy/terms)
```

---

## 8. ACCESS CONTROL IMPLEMENTATION STATUS

### Currently Implemented
1. **Auth Context** - Google Sign-In with Supabase
2. **Pro Status Hook** - `useProAccess()` fetches user subscription
3. **Pricing Config** - All tiers and pricing defined
4. **Payment Integration** - Razorpay service set up
5. **Database Schema** - Pro access fields in user_profiles
6. **Profile Screen** - Shows pro status correctly

### NOT YET IMPLEMENTED
1. **Practice Session Locking** - No checks in practice-session.tsx
2. **Test Session Locking** - No checks in test-session.tsx
3. **Notes Access Control** - Notes viewer has no pro checks
4. **Revision Session Locking** - No checks in revision/session.tsx
5. **Home Screen Paper Filtering** - All papers visible to free users
6. **Question Limiting** - No limit on questions for free users
7. **Session Count Limiting** - Free tier session count not tracked
8. **Upgrade Prompts** - No prompts when accessing locked features
9. **Payment Screen UI** - No payment/pricing screen exists yet

---

## 9. DATA FLOW FOR ADDING PRO LOCKS

### Typical Pro Access Check Pattern
```typescript
// In a screen component
import { useProAccess } from '../hooks/useProAccess';

export default function FeatureScreen() {
  const { hasPaper1Access, isProActive, tier, loading } = useProAccess();
  
  // Show lock screen if no access
  if (loading) return <LoadingScreen />;
  if (!hasPaper1Access) {
    return <UpgradePrompt tier="paper1" />;
  }
  
  // Show feature
  return <FeatureContent />;
}
```

### User Pro Status Lookup Flow
1. User opens app → AuthProvider loads session
2. Component calls `useProAccess()` hook
3. Hook fetches from `user_pro_status` view (via user_profiles table)
4. Returns pro tier, expiration date, days remaining
5. Component uses this to determine feature access

### Payment Success Flow
1. User clicks "Upgrade" → navigates to payment screen
2. Payment screen creates Razorpay order
3. Razorpay modal opens in WebView
4. User completes payment
5. Frontend captures payment credentials
6. Calls `verifyRazorpayPayment()` 
7. Edge Function verifies and updates user_profiles
8. `grant_pro_access()` function called
9. User pro tier updated
10. Navigation redirects to payment-success screen
11. useProAccess() hook refreshes on next access

---

## 10. KEY FILES FOR IMPLEMENTATION

### Critical for Pro Status
1. `lib/auth-context.tsx` - User session management
2. `lib/types/database.types.ts` - Type definitions
3. `hooks/useProAccess.ts` - Access control hook
4. `lib/pricing-config.ts` - Pricing and tiers
5. `lib/razorpay.ts` - Payment integration
6. `app/(tabs)/profile.tsx` - Already shows pro status
7. Database migration: `supabase/migrations/add_pro_access_fields.sql`

### Components to Modify for Locking
1. `app/practice/practice-session.tsx` - Add pro check
2. `app/practice/test-session.tsx` - Add pro check
3. `app/notes/viewer.tsx` - Add pro check
4. `app/revision/session.tsx` - Add pro check
5. `app/(tabs)/home.tsx` - Filter subjects by tier
6. `app/subjects/[id].tsx` - Filter chapters by tier

### New Components Needed
1. Premium lock screen (reusable component)
2. Upgrade prompt component
3. Payment/pricing screen
4. Feature unlock modal

---

## 11. EXISTING SIMILAR PATTERNS

### Profile Screen Pro Status Display
**File**: `/Users/mohdziasiddiqui/Desktop/tetapp/app/(tabs)/profile.tsx` (Lines 31-40)

```typescript
const { 
  tier,
  isProActive,
  isFree,
  expiresAt,
  daysRemaining,
  packageType,
  loading: proLoading,
} = useProAccess();
```

Shows:
- Current plan name
- Active/Expired status badge
- Days remaining
- Upgrade/Renew button

This is the pattern to follow for feature locking!

---

## 12. SUMMARY OF FINDINGS

### Strengths
1. Full auth system in place with Google Sign-In
2. Pro tier system fully designed (3 tiers, 2 packages each)
3. Comprehensive pricing configuration
4. Database schema for pro access ready
5. Payment integration (Razorpay) service layer complete
6. Helper hooks for access control (`useProAccess`, `usePaperAccess`, `useUpgradePrompt`)
7. Profile screen already shows pro status

### What's Missing
1. No access control in practice/test sessions
2. No access control in revision sessions
3. No access control in notes viewer
4. No paper filtering on home screen
5. No payment/checkout UI screen
6. No reusable premium lock UI components
7. No upgrade prompts in locked features
8. No session count tracking for free tier
9. Razorpay Edge Functions not deployed yet

### Next Steps for Implementation
1. Create reusable premium lock screen component
2. Add pro checks to practice/test sessions
3. Add pro checks to revision session
4. Add pro checks to notes viewer
5. Create payment/pricing screen UI
6. Add session count tracking for free tier
7. Deploy Razorpay Edge Functions
8. Update home screen to filter by paper access
9. Add upgrade prompts throughout app

---

## 13. QUICK REFERENCE: CURRENT DATABASE STRUCTURE

### user_profiles Table (with pro access fields)
```sql
id (UUID, PK) | email | full_name | pro_tier | pro_access_paper[] | 
pro_package_type | pro_purchased_at | pro_expires_at | 
razorpay_payment_id | razorpay_order_id | created_at | updated_at
```

### user_pro_status View (for queries)
```sql
SELECT: user_id, email, full_name, pro_tier, pro_access_paper, 
pro_package_type, pro_purchased_at, pro_expires_at, pro_status, 
days_remaining, razorpay_payment_id, created_at, updated_at
```

### payments Table (transaction tracking)
```sql
id (UUID, PK) | user_id (FK) | order_id | payment_id | 
razorpay_signature | tier | package_type | amount | currency | 
status | payment_method | notes | created_at | updated_at | paid_at
```

---

## 14. SUPABASE EDGE FUNCTIONS NEEDED

These functions are called by `lib/razorpay.ts` but must be deployed:

### create-razorpay-order
**Endpoint**: `/functions/v1/create-razorpay-order`

**Responsibilities**:
- Create Razorpay order
- Save order details to payments table
- Return order ID and amount

**Called from**: `createRazorpayOrder(tier, packageType)`

### verify-razorpay-payment  
**Endpoint**: `/functions/v1/verify-razorpay-payment`

**Responsibilities**:
- Verify payment signature with Razorpay API
- Update payments table with payment_id and status
- Call `grant_pro_access()` stored procedure
- Update user_profiles pro access fields
- Return success/failure response

**Called from**: `verifyRazorpayPayment(orderId, paymentId, signature)`

---

## 15. ENVIRONMENT VARIABLES NEEDED

```
EXPO_PUBLIC_SUPABASE_URL=
EXPO_PUBLIC_SUPABASE_ANON_KEY=
EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID=
EXPO_PUBLIC_RAZORPAY_KEY_ID=
```

Currently checked in `lib/supabase.ts` and `lib/razorpay.ts`

---

