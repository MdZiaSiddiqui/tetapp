# 🚀 Google OAuth Quick Start Guide

Complete setup in **30 minutes** with these 3 files:

## 📁 Files Created

1. **`supabase-google-auth-setup.sql`** - Database schema and functions
2. **`GOOGLE_AUTH_SETUP_GUIDE.md`** - Detailed step-by-step instructions
3. **`.env.google-oauth.template`** - Environment variables template

---

## ⚡ Quick Setup (30 minutes)

### Step 1: Run SQL (5 min)
```bash
# 1. Open Supabase Dashboard > SQL Editor
# 2. Copy contents of supabase-google-auth-setup.sql
# 3. Paste and run
```

### Step 2: Google Cloud Console (10 min)
```bash
# 1. Go to console.cloud.google.com
# 2. Create OAuth 2.0 Client ID
# 3. Configure consent screen
# 4. Get Client ID and Secret
# 5. Add redirect URIs:
#    - https://YOUR-PROJECT.supabase.co/auth/v1/callback
#    - exp://localhost:8081
```

### Step 3: Supabase Config (5 min)
```bash
# 1. Supabase Dashboard > Authentication > Providers
# 2. Enable Google
# 3. Paste Client ID and Secret
# 4. Save
```

### Step 4: App Config (10 min)
```bash
# 1. Copy .env.google-oauth.template to .env
cp .env.google-oauth.template .env

# 2. Fill in your values in .env
# 3. Install dependencies
npm install @supabase/supabase-js expo-auth-session expo-web-browser

# 4. Update your auth context (see GOOGLE_AUTH_SETUP_GUIDE.md)
```

---

## 🎯 What You Get

### Features Included:
✅ **Google OAuth Sign-In**
✅ **Auto User Profile Creation**
✅ **Free Tier** (10 sessions/month)
✅ **Pro Tier** (unlimited sessions)
✅ **Session Tracking & Limits**
✅ **Row Level Security**
✅ **Helper Functions** for tier management

### Database Tables:
- `user_profiles` - User data with tier management
- `subscription_plans` - Free and Pro plans
- `user_sessions_log` - Session usage tracking

### Functions Available:
```sql
-- Check if user can start a session
SELECT public.can_start_session('user-id');

-- Get user plan details
SELECT * FROM public.get_user_plan('user-id');

-- Upgrade user to pro
SELECT public.upgrade_to_pro('user-id', 12); -- 12 months

-- Downgrade to free
SELECT public.downgrade_to_free('user-id');

-- Increment session count
SELECT public.increment_session_count('user-id', 'practice');
```

---

## 📱 Usage in Your App

### Check User Tier
```tsx
import { useAuth } from '@/lib/auth-context';
import { supabase } from '@/lib/supabase';

const { user } = useAuth();

// Get user plan
const { data: plan } = await supabase
  .rpc('get_user_plan', { user_uuid: user?.id });

console.log(plan[0].tier); // 'free' or 'pro'
console.log(plan[0].sessions_used); // e.g., 5
console.log(plan[0].sessions_limit); // 10 for free, null for pro
```

### Before Starting Session
```tsx
// Check if user can start session
const { data: canStart } = await supabase
  .rpc('can_start_session', { user_uuid: user?.id });

if (!canStart) {
  Alert.alert('Upgrade to Pro', 'You\'ve reached your free limit!');
  return;
}

// Increment count
await supabase.rpc('increment_session_count', {
  user_uuid: user?.id,
  session_type_param: 'practice'
});

// Start session
router.push('/practice/practice-session');
```

### Upgrade to Pro
```tsx
// After payment succeeds
const { error } = await supabase
  .rpc('upgrade_to_pro', {
    user_uuid: user?.id,
    duration_months: 12
  });
```

---

## 🔐 Security Checklist

- [ ] `.env` file is in `.gitignore` ✅ (already configured)
- [ ] Never commit Google Client Secret
- [ ] Use anon key for client-side
- [ ] Use service role key only server-side
- [ ] RLS policies are enabled
- [ ] Redirect URIs match exactly

---

## 🧪 Testing

### Test Authentication
```bash
# 1. Clear cache
npx expo start --clear

# 2. Run app
npx expo start

# 3. Test sign in with Google
# 4. Check Supabase Dashboard > Authentication > Users
# 5. Check Table Editor > user_profiles
```

### Test SQL Functions
```sql
-- In Supabase SQL Editor

-- 1. Find your user
SELECT * FROM public.user_profiles
WHERE email = 'your-email@example.com';

-- 2. Check session limit (should return true for new users)
SELECT public.can_start_session('YOUR-USER-ID');

-- 3. Test increment (run 10 times to hit limit)
SELECT public.increment_session_count('YOUR-USER-ID', 'practice');

-- 4. Check limit again (should return false after 10)
SELECT public.can_start_session('YOUR-USER-ID');

-- 5. Upgrade to pro
SELECT public.upgrade_to_pro('YOUR-USER-ID', 1);

-- 6. Check limit (should return true - unlimited)
SELECT public.can_start_session('YOUR-USER-ID');

-- 7. View plan details
SELECT * FROM public.get_user_plan('YOUR-USER-ID');
```

---

## 📊 Monitoring Queries

```sql
-- Total users by tier
SELECT tier, COUNT(*)
FROM user_profiles
GROUP BY tier;

-- Top users by session count
SELECT email, tier,
  (practice_sessions_count + test_sessions_count) as total
FROM user_profiles
ORDER BY total DESC
LIMIT 10;

-- Users close to limit
SELECT email,
  (practice_sessions_count + test_sessions_count) as used,
  monthly_sessions_limit as limit
FROM user_profiles
WHERE tier = 'free'
  AND (practice_sessions_count + test_sessions_count) >= 8
ORDER BY used DESC;
```

---

## 🆘 Common Issues

### "Invalid redirect URI"
- Check Google Console redirect URI matches Supabase exactly
- No trailing slashes
- Use `https://` for Supabase callback

### User created but no profile
```sql
-- Check trigger exists
SELECT * FROM pg_trigger WHERE tgname = 'on_auth_user_created';

-- Manually create profile if needed
INSERT INTO user_profiles (id, email, tier)
VALUES ('user-id', 'email@example.com', 'free');
```

### Session limits not enforcing
```sql
-- Check user tier
SELECT tier, monthly_sessions_limit
FROM user_profiles
WHERE id = 'user-id';

-- Reset session count if needed
UPDATE user_profiles
SET practice_sessions_count = 0,
    test_sessions_count = 0
WHERE id = 'user-id';
```

---

## 📚 Full Documentation

For complete details, see:
- **GOOGLE_AUTH_SETUP_GUIDE.md** - Complete step-by-step guide
- **supabase-google-auth-setup.sql** - Commented SQL code
- **.env.google-oauth.template** - Environment variables reference

---

## 🎉 You're Ready!

After setup, you'll have:
1. Users sign in with Google ✅
2. Auto profile creation ✅
3. Free users: 10 sessions/month ✅
4. Pro users: unlimited ✅
5. Secure with RLS ✅

**Need help?** Check `GOOGLE_AUTH_SETUP_GUIDE.md` for detailed troubleshooting.
