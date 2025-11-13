# Google OAuth Authentication Setup Guide

This guide walks you through setting up Google OAuth authentication in Supabase with free/pro user tiers.

## 📋 Prerequisites

- Supabase project created
- Google Cloud Console account
- Access to your Expo app configuration

---

## Part 1: Run the SQL Setup (5 minutes)

### Step 1: Execute SQL File in Supabase

1. Open your Supabase project dashboard
2. Go to **SQL Editor** (left sidebar)
3. Click **New Query**
4. Copy and paste the entire contents of `supabase-google-auth-setup.sql`
5. Click **Run** or press `Cmd/Ctrl + Enter`

✅ **What this creates:**
- `user_profiles` table with tier management (free/pro)
- `subscription_plans` table with default plans
- `user_sessions_log` for tracking usage
- Automatic user profile creation on signup
- Session limit enforcement functions
- Row Level Security policies

---

## Part 2: Configure Google Cloud Console (10 minutes)

### Step 2: Create Google OAuth Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Navigate to **APIs & Services** > **Credentials**
4. Click **Create Credentials** > **OAuth 2.0 Client ID**

### Step 3: Configure OAuth Consent Screen

1. Click **Configure Consent Screen**
2. Select **External** user type
3. Fill in required fields:
   - App name: `Your App Name`
   - User support email: `your-email@example.com`
   - Developer contact: `your-email@example.com`
4. Add scopes:
   - `../auth/userinfo.email`
   - `../auth/userinfo.profile`
5. Click **Save and Continue**

### Step 4: Create OAuth Client ID

1. Go back to **Credentials** > **Create Credentials** > **OAuth 2.0 Client ID**
2. Select **Web application** as application type
3. Add **Authorized redirect URIs**:
   ```
   https://your-project-ref.supabase.co/auth/v1/callback
   ```
   Replace `your-project-ref` with your actual Supabase project reference ID
   (Find it in: Supabase Dashboard > Settings > API > Project URL)

4. Click **Create**
5. **Save the Client ID and Client Secret** - you'll need these next

### Step 5: Add iOS/Android URLs (for Expo)

1. Click on your OAuth client to edit it
2. Under **Authorized redirect URIs**, add:
   ```
   exp://localhost:8081
   exp://192.168.1.x:8081  (your local IP if needed)
   ```
3. For production, add your custom scheme:
   ```
   yourappscheme://
   ```
4. Click **Save**

---

## Part 3: Configure Supabase Authentication (5 minutes)

### Step 6: Enable Google Provider in Supabase

1. Open Supabase Dashboard
2. Go to **Authentication** > **Providers**
3. Find **Google** in the list
4. Toggle it **ON**
5. Paste your **Client ID** from Google Console
6. Paste your **Client Secret** from Google Console
7. Click **Save**

### Step 7: Configure Additional Settings

1. Stay in **Authentication** settings
2. Go to **URL Configuration**
3. Add your redirect URLs:
   - For development: `exp://localhost:8081`
   - For production: `yourappscheme://` or `https://yourapp.com`
4. Under **Email Auth** (optional):
   - Enable if you want email/password as backup
5. Click **Save**

---

## Part 4: Update Your React Native App (10 minutes)

### Step 8: Update Environment Variables

Create or update `.env`:

```env
EXPO_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### Step 9: Update Auth Context

Your `lib/auth-context.tsx` should use Google sign-in:

```tsx
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

// In your AuthProvider:
const [request, response, promptAsync] = Google.useAuthRequest({
  expoClientId: 'YOUR_EXPO_CLIENT_ID.apps.googleusercontent.com',
  iosClientId: 'YOUR_IOS_CLIENT_ID.apps.googleusercontent.com',
  androidClientId: 'YOUR_ANDROID_CLIENT_ID.apps.googleusercontent.com',
  webClientId: 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
});

// Handle Google sign-in response
useEffect(() => {
  if (response?.type === 'success') {
    const { id_token } = response.params;

    supabase.auth.signInWithIdToken({
      provider: 'google',
      token: id_token,
    });
  }
}, [response]);
```

### Step 10: Add Sign In Button

```tsx
<Button
  title="Sign in with Google"
  onPress={() => promptAsync()}
/>
```

---

## Part 5: Test the Setup (5 minutes)

### Step 11: Test Authentication Flow

1. Clear app cache: `npx expo start --clear`
2. Run your app: `npx expo start`
3. Click "Sign in with Google"
4. Complete Google authentication
5. Check Supabase Dashboard:
   - Go to **Authentication** > **Users**
   - Verify user was created
   - Go to **Table Editor** > `user_profiles`
   - Verify profile was auto-created with `tier = 'free'`

### Step 12: Test Session Limits

Run these SQL queries in Supabase SQL Editor:

```sql
-- Check your user profile
SELECT * FROM public.user_profiles WHERE email = 'your-email@example.com';

-- Check if you can start a session
SELECT public.can_start_session('your-user-id');

-- Get your plan details
SELECT * FROM public.get_user_plan('your-user-id');

-- Test upgrading to pro
SELECT public.upgrade_to_pro('your-user-id', 1); -- 1 month

-- Verify upgrade worked
SELECT * FROM public.user_profiles WHERE id = 'your-user-id';
```

---

## Part 6: Using the Tier System in Your App

### Checking User Tier

```tsx
// In your React Native component
const { user } = useAuth();
const { data: userPlan } = useQuery({
  queryKey: ['userPlan', user?.id],
  queryFn: async () => {
    const { data, error } = await supabase
      .rpc('get_user_plan', { user_uuid: user?.id });
    if (error) throw error;
    return data[0];
  },
  enabled: !!user?.id,
});

// Use in component
{userPlan?.tier === 'free' && (
  <Text>Upgrade to Pro for unlimited sessions!</Text>
)}

// Check session limit
{userPlan?.sessions_used >= userPlan?.sessions_limit && (
  <Text>You've reached your free tier limit</Text>
)}
```

### Before Starting a Session

```tsx
const startPracticeSession = async () => {
  // Check if user can start a session
  const { data: canStart } = await supabase
    .rpc('can_start_session', { user_uuid: user?.id });

  if (!canStart) {
    Alert.alert(
      'Session Limit Reached',
      'Upgrade to Pro for unlimited sessions!',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Upgrade', onPress: () => router.push('/upgrade') }
      ]
    );
    return;
  }

  // Increment session count
  await supabase.rpc('increment_session_count', {
    user_uuid: user?.id,
    session_type_param: 'practice'
  });

  // Start session
  router.push('/practice/practice-session');
};
```

### Upgrade to Pro

```tsx
const handleUpgrade = async () => {
  // This would integrate with your payment processor
  // After successful payment:
  const { error } = await supabase
    .rpc('upgrade_to_pro', {
      user_uuid: user?.id,
      duration_months: 12 // or 1 for monthly
    });

  if (!error) {
    Alert.alert('Success', 'Upgraded to Pro!');
    // Refresh user plan
    queryClient.invalidateQueries(['userPlan']);
  }
};
```

---

## 🔒 Security Notes

1. **Never commit OAuth secrets** to version control
2. **Use environment variables** for all sensitive data
3. **Row Level Security** is enabled - users can only access their own data
4. **Service role key** should only be used server-side
5. **Anon key** is safe for client-side use

---

## 🐛 Troubleshooting

### "Invalid redirect URI" error
- Verify redirect URI in Google Console matches Supabase exactly
- Check for trailing slashes (remove them)
- Make sure to save changes in Google Console

### User created but no profile
- Check trigger is active: `SELECT * FROM pg_trigger WHERE tgname = 'on_auth_user_created';`
- Manually trigger: `SELECT public.handle_new_user();`

### Session limits not working
- Check user tier: `SELECT tier FROM user_profiles WHERE id = 'user-id';`
- Verify function works: `SELECT public.can_start_session('user-id');`
- Check session count: `SELECT practice_sessions_count, test_sessions_count FROM user_profiles;`

### RLS blocking queries
- Verify you're authenticated: `SELECT auth.uid();`
- Check policies: `SELECT * FROM pg_policies WHERE tablename = 'user_profiles';`
- For admin operations, use service role key (server-side only)

---

## 📊 Monitoring

### Check Active Users
```sql
SELECT COUNT(*) FROM auth.users WHERE deleted_at IS NULL;
```

### Check Pro vs Free Users
```sql
SELECT tier, COUNT(*)
FROM public.user_profiles
GROUP BY tier;
```

### Check Session Usage
```sql
SELECT
  up.email,
  up.tier,
  up.practice_sessions_count + up.test_sessions_count as total_sessions,
  up.monthly_sessions_limit
FROM public.user_profiles up
ORDER BY total_sessions DESC
LIMIT 10;
```

---

## ✅ Setup Complete!

You now have:
- ✅ Google OAuth authentication
- ✅ Automatic user profile creation
- ✅ Free/Pro tier system
- ✅ Session limit enforcement
- ✅ Secure Row Level Security
- ✅ Helper functions for tier management

**Next Steps:**
1. Build your upgrade/payment flow
2. Implement analytics for pro users
3. Add revision mode for pro users
4. Create admin dashboard for user management
