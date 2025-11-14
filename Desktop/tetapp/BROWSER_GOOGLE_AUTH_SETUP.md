# Browser-Based Google Authentication Setup

This app now uses **browser-based Google OAuth** through Supabase instead of native sign-in. This is:
- ✅ More reliable
- ✅ Easier to configure
- ✅ Works on all platforms (iOS, Android, Web)
- ✅ No complex native module setup required

## Quick Setup (5 Minutes)

### Step 1: Configure Google Cloud Console

1. Go to [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
2. Select your project (or create a new one)
3. Click **"CREATE CREDENTIALS"** → **"OAuth client ID"**
4. Select **"Web application"**
5. Add these **Authorized redirect URIs**:
   ```
   https://thvucacdrsexfcpkswpv.supabase.co/auth/v1/callback
   ```
6. Click **Create**
7. **Copy the Client ID and Client Secret** (you'll need these for Supabase)

### Step 2: Configure Supabase

1. Go to [Supabase Dashboard](https://app.supabase.com/)
2. Select your project: `thvucacdrsexfcpkswpv`
3. Go to **Authentication** → **URL Configuration**
   - Add to **Redirect URLs**: `tetapp://auth/callback`
   - Click **Save**
4. Go to **Authentication** → **Providers**
5. Find **Google** and click to enable it
6. Paste your **Google Client ID** from Step 1
7. Paste your **Google Client Secret** from Step 1
8. **IMPORTANT**: Make sure "Enabled" toggle is ON
9. Click **Save**

### Step 3: Test It!

1. Restart your development server:
   ```bash
   npx expo start --clear
   ```

2. Open the app and try the "Continue with Google" button

3. It will open a browser window where you can sign in with Google

4. After signing in, it will redirect back to the app

## How It Works

```
User clicks "Continue with Google"
    ↓
Opens browser with Google sign-in
    ↓
User signs in with Google account
    ↓
Google redirects to: tetapp://auth/callback?access_token=...
    ↓
App handles the callback and creates session
    ↓
User is signed in! 🎉
```

## Configuration Details

### App Configuration (`app.config.js`)
- **URL Scheme**: `tetapp://`
- This allows the browser to redirect back to your app

### Redirect URIs
- **Supabase Redirect**: `https://thvucacdrsexfcpkswpv.supabase.co/auth/v1/callback`
- **App Deep Link**: `tetapp://auth/callback`

### Environment Variables
No Google Client IDs needed in `.env` file! Everything is configured in Supabase Dashboard.

## Testing

### Test on Expo Go (Development)
```bash
npx expo start
```
Then scan the QR code with Expo Go app.

### Test on Native Build
```bash
# Android
npx expo run:android

# iOS (Mac only)
npx expo run:ios
```

## Troubleshooting

### "No tokens found in callback URL"
This is the most common issue. Here's the checklist:

1. **Check Supabase Redirect URLs**:
   - Go to Supabase Dashboard → Authentication → URL Configuration
   - Make sure `tetapp://auth/callback` is in the **Redirect URLs** list
   - Click Save

2. **Check Google Provider is Enabled**:
   - Go to Supabase Dashboard → Authentication → Providers → Google
   - Toggle must be **ON** (green)
   - Client ID and Secret must be filled in
   - Click Save

3. **Check Google Cloud Console Redirect URIs**:
   - Go to Google Cloud Console → Credentials → Your OAuth Client
   - Must include: `https://thvucacdrsexfcpkswpv.supabase.co/auth/v1/callback`
   - Save changes

4. **Clear cache and restart**:
   ```bash
   npx expo start --clear
   ```

### "OAuth error: Invalid redirect URI"
- Make sure you added the Supabase callback URL to Google Cloud Console
- URL must be exactly: `https://thvucacdrsexfcpkswpv.supabase.co/auth/v1/callback`

### "Sign in cancelled"
- This happens if the user closes the browser before signing in
- Not an error - just means the user cancelled

### Browser doesn't open or redirect back
1. Check that `app.config.js` has `scheme: "tetapp"`
2. Make sure you added `tetapp://auth/callback` to Supabase Redirect URLs
3. Try rebuilding the app: `npx expo run:android` or `npx expo run:ios`

### "No OAuth URL generated"
- Check Supabase Dashboard → Authentication → Providers → Google is **enabled** (toggle ON)
- Verify Client ID and Secret are correctly entered
- Save and try again

## Files Modified

1. **lib/auth-context.tsx** - Updated to use browser-based OAuth
2. **app.config.js** - Set URL scheme to `tetapp`
3. **.env** - Removed client ID requirements (now configured in Supabase)
4. **app/auth/callback.tsx** - Already set up to handle OAuth callbacks

## Migration from Native Sign-In

If you had the native `@react-native-google-signin/google-signin` setup before:

1. ✅ The plugin has been removed from `app.config.js`
2. ✅ The native sign-in code has been replaced with browser OAuth
3. ✅ No breaking changes to the UI - same button, same experience

The only difference users will notice is that sign-in now opens a browser window instead of a native Google sign-in sheet. This is actually more familiar to most users!

## Benefits of Browser-Based Auth

1. **Universal** - Works on iOS, Android, and Web with same code
2. **Simpler** - No platform-specific configuration files
3. **More Secure** - Google handles the entire auth flow in their browser
4. **Easier Debugging** - Can see the full OAuth flow in browser
5. **No Native Builds Required for Testing** - Works in Expo Go

## Next Steps

Once Google Sign-In is working, you can add other OAuth providers:
- Apple Sign-In
- Facebook Login
- GitHub OAuth
- And more!

All configured the same way through Supabase Dashboard → Authentication → Providers.
