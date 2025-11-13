# Google Authentication Setup Guide

This guide will help you configure Google OAuth for your TET app using Supabase.

## Prerequisites

- Supabase project (already set up)
- Google Cloud Console account
- Expo app configured with proper package name/bundle identifier

## Step 1: Configure Google Cloud Console

### 1.1 Create OAuth 2.0 Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to **APIs & Services** → **Credentials**
4. Click **Create Credentials** → **OAuth 2.0 Client ID**

### 1.2 Configure OAuth Consent Screen

1. Click **Configure Consent Screen**
2. Select **External** user type
3. Fill in the required information:
   - App name: **TET** (or your app name)
   - User support email: Your email
   - Developer contact email: Your email
4. Add scopes (optional for now)
5. Save and continue

### 1.3 Create OAuth Client IDs

You'll need to create **TWO** OAuth client IDs:

#### For Web Application (Supabase)
1. Click **Create Credentials** → **OAuth 2.0 Client ID**
2. Application type: **Web application**
3. Name: **TET Web Client** (or any name)
4. Add Authorized redirect URIs:
   ```
   https://YOUR_SUPABASE_PROJECT_ID.supabase.co/auth/v1/callback
   ```
   Replace `YOUR_SUPABASE_PROJECT_ID` with your actual Supabase project ID
   (Find this in your Supabase project URL: `https://app.supabase.com/project/YOUR_PROJECT_ID`)

5. Click **Create**
6. **Save the Client ID and Client Secret** - you'll need these for Supabase

#### For Android (if deploying to Android)
1. Click **Create Credentials** → **OAuth 2.0 Client ID**
2. Application type: **Android**
3. Name: **TET Android**
4. Package name: Your Android package name (e.g., `com.yourcompany.tet`)
5. SHA-1 certificate fingerprint:
   - For development: Get from `expo credentials:manager`
   - For production: Get from Google Play Console
6. Click **Create**

#### For iOS (if deploying to iOS)
1. Click **Create Credentials** → **OAuth 2.0 Client ID**
2. Application type: **iOS**
3. Name: **TET iOS**
4. Bundle ID: Your iOS bundle identifier (e.g., `com.yourcompany.tet`)
5. Click **Create**

## Step 2: Configure Supabase

1. Go to your [Supabase Dashboard](https://app.supabase.com/)
2. Select your project
3. Navigate to **Authentication** → **Providers**
4. Find **Google** in the list
5. Enable Google provider
6. Enter the credentials from Step 1.3 (Web Application):
   - **Client ID**: Paste the Web Client ID
   - **Client Secret**: Paste the Web Client Secret
7. Configure **Authorized Client IDs** (optional):
   - Add your Android Client ID
   - Add your iOS Client ID
8. Click **Save**

## Step 3: Configure Redirect URLs in Supabase

1. In Supabase Dashboard, go to **Authentication** → **URL Configuration**
2. Add your redirect URLs:
   - For development: `exp://localhost:8081/--/auth/callback`
   - For production: Your custom scheme (e.g., `myapp://auth/callback`)
3. Add **Site URL**: Your app's URL or `http://localhost:8081` for development

## Step 4: Configure app.json for Expo

Update your `app.json` to include the proper scheme:

```json
{
  "expo": {
    "scheme": "tet",
    "android": {
      "package": "com.yourcompany.tet"
    },
    "ios": {
      "bundleIdentifier": "com.yourcompany.tet"
    }
  }
}
```

## Step 5: Update Environment Variables

Make sure your `.env` file has the correct Supabase credentials:

```env
EXPO_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## Testing the Authentication

### Test on Development

1. Clear Metro bundler cache:
   ```bash
   npm start -- --clear
   ```

2. Run on your device/simulator:
   ```bash
   # iOS
   npm run ios

   # Android
   npm run android
   ```

3. Navigate to Profile tab
4. Click "Sign In with Google"
5. Complete the OAuth flow in the browser
6. You should be redirected back to the app

### Debugging

If authentication fails, check the following:

1. **Console Logs**: Look for the redirect URL in the console
   - The redirect URL logged should match what's configured in Google Cloud Console

2. **Common Issues**:
   - **"Redirect URI mismatch"**: The redirect URL doesn't match what's in Google Cloud Console
     - Solution: Copy the logged redirect URL and add it to Google Cloud Console

   - **"Invalid Client"**: Client ID/Secret mismatch
     - Solution: Double-check the credentials in Supabase match Google Cloud Console

   - **"Access Blocked"**: OAuth consent screen not configured
     - Solution: Complete the OAuth consent screen setup in Google Cloud Console

3. **Test Redirect URL**:
   - The app logs the redirect URL when you attempt to sign in
   - Copy this URL and ensure it's added to Google Cloud Console's Authorized Redirect URIs

## User Profile Creation

When a user signs in with Google for the first time, you may want to create a profile in your `users` table:

### Option 1: Using Supabase Database Function (Recommended)

Create a database function that automatically creates a user profile:

```sql
-- Create a function to handle new user creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.users (id, email, full_name, avatar_url)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data->>'full_name',
    NEW.raw_user_meta_data->>'avatar_url'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create a trigger to call the function when a new user signs up
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
```

### Option 2: Using Client-Side Code

Add this to your auth context after successful sign-in:

```typescript
// In lib/auth-context.tsx, after successful Google sign in:
const createUserProfile = async (user: User) => {
  const { data: existingProfile } = await supabase
    .from('users')
    .select('id')
    .eq('id', user.id)
    .single();

  if (!existingProfile) {
    await supabase.from('users').insert({
      id: user.id,
      email: user.email,
      full_name: user.user_metadata.full_name,
      avatar_url: user.user_metadata.avatar_url,
    });
  }
};
```

## Production Deployment

### For iOS App Store

1. Get production iOS OAuth Client ID from Google Cloud Console
2. Add it to Supabase **Authorized Client IDs**
3. Update redirect URL in Supabase to use production scheme

### For Google Play Store

1. Get production Android OAuth Client ID from Google Cloud Console
2. Get SHA-1 from Google Play Console (after uploading app)
3. Update or create new Android OAuth Client ID with production SHA-1
4. Add it to Supabase **Authorized Client IDs**

## Security Considerations

1. **Never commit credentials**: Keep `.env` file in `.gitignore`
2. **Use Row Level Security**: Enable RLS on your users table
3. **Validate user data**: Always validate data from OAuth providers
4. **HTTPS only**: In production, only use HTTPS redirect URLs

## Troubleshooting

### "Could not find navigation context"
This is a navigation error, not an auth error. Make sure:
- Login screen is registered in `app/_layout.tsx`
- You're using `router.push()` or `router.replace()` correctly

### "Session not found"
- Check that `expo-web-browser` and `expo-auth-session` are installed
- Ensure `WebBrowser.maybeCompleteAuthSession()` is called
- Verify redirect URLs match exactly

### "Invalid redirect URI"
- Copy the logged redirect URL from console
- Add it exactly (including trailing slashes) to Google Cloud Console

## Next Steps

After authentication is working:

1. ✅ Test on both iOS and Android
2. ✅ Add profile picture display using `user.user_metadata.avatar_url`
3. ✅ Implement user profile editing
4. ✅ Add email/password authentication as a fallback
5. ✅ Set up Row Level Security (RLS) policies in Supabase

## Support

If you encounter issues:
1. Check the console logs for detailed error messages
2. Verify all redirect URLs match
3. Ensure OAuth consent screen is published (at least for testing)
4. Check Supabase logs in Dashboard → Authentication → Logs
