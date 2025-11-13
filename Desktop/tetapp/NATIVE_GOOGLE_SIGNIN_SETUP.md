# 🚀 Native Google Sign-In Setup Guide (NO BROWSER!)

This guide will help you set up **native Google Sign-In** for your React Native app using `@react-native-google-signin/google-signin`. This completely eliminates the need for browser-based OAuth flows.

## ✅ What's Already Done

The following has been implemented for you:

- ✅ Installed `@react-native-google-signin/google-signin` package
- ✅ Configured plugin in `app.json`
- ✅ Rewritten `lib/auth-context.tsx` to use native Google Sign-In
- ✅ No more `expo-web-browser` or browser redirects!

## 🎯 What You Need To Do

You need to get your **Google Web Client ID** from Google Cloud Console and add it to your `.env` file.

---

## 📋 Step-by-Step Setup

### Step 1: Go to Google Cloud Console

1. Visit [Google Cloud Console](https://console.cloud.google.com/)
2. Sign in with your Google account
3. Create a new project OR select your existing project

### Step 2: Enable Google Sign-In API

1. In the left sidebar, go to **APIs & Services** → **Library**
2. Search for **"Google Sign-In API"** or **"Google+ API"**
3. Click on it and press **Enable**

### Step 3: Configure OAuth Consent Screen

1. Go to **APIs & Services** → **OAuth consent screen**
2. Choose **External** (unless you have a Google Workspace)
3. Click **Create**
4. Fill in the required fields:
   - **App name**: `TGTET` (or your app name)
   - **User support email**: Your email
   - **Developer contact**: Your email
5. Click **Save and Continue**
6. Skip adding scopes (the defaults are fine)
7. Add test users if needed (for testing)
8. Click **Save and Continue** until done

### Step 4: Create OAuth 2.0 Credentials

#### For Android:

1. Go to **APIs & Services** → **Credentials**
2. Click **Create Credentials** → **OAuth 2.0 Client ID**
3. Select **Android** as Application Type
4. Fill in:
   - **Name**: `TGTET Android`
   - **Package name**: `com.tgtet.app` (from your app.json)
   - **SHA-1 certificate fingerprint**: See below how to get this

**Get SHA-1 Fingerprint (Debug):**

```bash
# For development (debug keystore)
cd android
./gradlew signingReport

# Or use keytool directly
keytool -list -v -keystore ~/.android/debug.keystore -alias androiddebugkey -storepass android -keypass android
```

Copy the **SHA-1** fingerprint and paste it in Google Cloud Console.

5. Click **Create**
6. You'll see your Android Client ID (you don't need to copy this)

#### For iOS:

1. Click **Create Credentials** → **OAuth 2.0 Client ID**
2. Select **iOS** as Application Type
3. Fill in:
   - **Name**: `TGTET iOS`
   - **Bundle ID**: `com.tgtet.app` (from your app.json)
4. Click **Create**
5. **Copy the iOS Client ID** (you'll need this for `.env`)

#### For Web (REQUIRED - This is the main one):

1. Click **Create Credentials** → **OAuth 2.0 Client ID**
2. Select **Web application** as Application Type
3. Fill in:
   - **Name**: `TGTET Web Client` (for backend/mobile use)
   - **Authorized JavaScript origins**: Leave empty
   - **Authorized redirect URIs**: Leave empty
4. Click **Create**
5. **⭐ Copy the Web Client ID** - THIS IS THE IMPORTANT ONE!

### Step 5: Add Credentials to .env File

Open your `.env` file and add:

```bash
# Google Sign-In Configuration
EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID=YOUR_WEB_CLIENT_ID_HERE.apps.googleusercontent.com
EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID=YOUR_IOS_CLIENT_ID_HERE.apps.googleusercontent.com
```

**Example:**
```bash
EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID=123456789-abcdefghijklmnop.apps.googleusercontent.com
EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID=123456789-zyxwvutsrqp.apps.googleusercontent.com
```

**Important Notes:**
- The **Web Client ID** is REQUIRED for both Android and iOS
- The **iOS Client ID** is optional (only needed if you have specific iOS requirements)
- Don't share these IDs publicly (they're in `.gitignore`)

### Step 6: Configure Supabase (If not already done)

1. Go to your [Supabase Dashboard](https://app.supabase.com/)
2. Select your project → **Authentication** → **Providers**
3. Find **Google** and enable it
4. Enter your **Web Client ID** from Google Cloud Console
5. Enter your **Client Secret** from Google Cloud Console:
   - Go back to Google Cloud Console → **Credentials**
   - Click on your Web Client ID
   - You'll see the **Client Secret** there
6. Click **Save** in Supabase

### Step 7: Rebuild Your App

Since we added a native module, you need to rebuild:

```bash
# Clear cache and restart
npx expo start --clear

# For iOS (if you have a Mac)
npx expo run:ios

# For Android
npx expo run:android
```

**Note:** Expo Go won't work with custom native modules. You need to create a development build or use EAS Build.

### Step 8: Create Development Build (Required)

Since `@react-native-google-signin/google-signin` is a native module, you need a custom development build:

```bash
# Install EAS CLI if you haven't
npm install -g eas-cli

# Login to Expo
eas login

# Configure EAS
eas build:configure

# Create development build for Android
eas build --profile development --platform android

# Create development build for iOS (Mac only)
eas build --profile development --platform ios
```

Alternatively, run locally:
```bash
# Android
npx expo run:android

# iOS (Mac only)
npx expo run:ios
```

---

## 🎉 Testing

Once set up:

1. Open your app
2. Navigate to the Profile tab
3. Click **"Sign In with Google"** (or tap the login button)
4. You should see the **native Google account picker** (NOT a browser!)
5. Select your Google account
6. App should sign you in seamlessly

**What you should see:**
- ✅ Native Google account picker UI
- ✅ No browser opening
- ✅ Instant sign-in
- ✅ User profile appears in Profile tab

**If it doesn't work:**
- Check console logs for errors
- Verify your Web Client ID is correct in `.env`
- Make sure you rebuilt the app after adding the native module
- Check that Google provider is enabled in Supabase

---

## 🔧 Troubleshooting

### Error: "Google Sign-In not configured"

**Solution:** Add `EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID` to your `.env` file and restart the app.

### Error: "DEVELOPER_ERROR" (Android)

**Solution:** Your SHA-1 fingerprint doesn't match. Regenerate it and update in Google Cloud Console:
```bash
cd android && ./gradlew signingReport
```

### Error: "SIGN_IN_CANCELLED"

**Solution:** User cancelled the sign-in. This is normal behavior.

### Error: "No ID token received"

**Solution:**
1. Check that your Web Client ID is correct
2. Make sure the OAuth consent screen is configured
3. Try creating a new Web Client ID

### Error: "Play Services not available" (Android)

**Solution:** Google Play Services is not installed or outdated on the device. Test on a different device or update Play Services.

### iOS Sign-In Issues

**Solution:**
1. Make sure you added the iOS Client ID to `.env` (optional but recommended)
2. Ensure Bundle ID matches in Google Cloud Console and app.json
3. For iOS, you may need to add URL schemes to app.json:

```json
{
  "expo": {
    "ios": {
      "bundleIdentifier": "com.tgtet.app",
      "googleServicesFile": "./GoogleService-Info.plist"
    }
  }
}
```

---

## 🎊 Benefits of Native Google Sign-In

✅ **No browser popups** - Native UI only
✅ **Better UX** - System-level account picker
✅ **Faster** - No redirects or deep linking
✅ **More secure** - Uses native platform APIs
✅ **Auto sign-in** - Remembers user choice
✅ **Works offline** - Can re-authenticate with cached tokens

---

## 📚 Additional Resources

- [Google Sign-In for React Native Docs](https://github.com/react-native-google-signin/google-signin)
- [Expo Custom Development Clients](https://docs.expo.dev/develop/development-builds/introduction/)
- [Google Cloud Console](https://console.cloud.google.com/)
- [Supabase Auth Docs](https://supabase.com/docs/guides/auth)

---

## 🗑️ Optional: Remove Old Browser-Based Dependencies

If you're not using browser-based OAuth for anything else, you can remove these packages:

```bash
npm uninstall expo-web-browser expo-auth-session
```

Then remove these imports from any files that reference them.

---

**Need help?** Check the console logs - they have detailed information about what's happening during sign-in!
