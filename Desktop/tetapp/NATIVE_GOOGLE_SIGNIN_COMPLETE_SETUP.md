# Native Google Sign-In - Complete Setup Guide

## ✅ What's Implemented

I've restored the **native Google Sign-In** implementation that:
- ✅ Uses native Google Sign-In UI (NO browser!)
- ✅ Works on iOS and Android
- ✅ Fast and smooth UX
- ✅ Configured with `@react-native-google-signin/google-signin`

---

## 🚨 CRITICAL: This Requires EAS Development Build

**You CANNOT use Expo Go** with native Google Sign-In because it requires custom native code.

You need to create a **development build** with EAS.

---

## Step-by-Step Setup (Complete Guide)

### STEP 1: Set Up Google Cloud Console

#### 1.1 Create Google Cloud Project

1. Go to: https://console.cloud.google.com/
2. Click "Select a project" → "NEW PROJECT"
3. Project name: `TG-TET` (or your app name)
4. Click "CREATE"

#### 1.2 Enable Google+ API

1. In your project, go to: https://console.cloud.google.com/apis/library
2. Search for: "Google+ API"
3. Click "Google+ API"
4. Click "ENABLE"

#### 1.3 Configure OAuth Consent Screen

1. Go to: https://console.cloud.google.com/apis/credentials/consent
2. Select "External" user type
3. Click "CREATE"
4. Fill in:
   - **App name:** TG-TET
   - **User support email:** Your email
   - **Developer contact email:** Your email
5. Click "SAVE AND CONTINUE"
6. Scopes: Click "SAVE AND CONTINUE" (default scopes are fine)
7. Test users: Add your email for testing
8. Click "SAVE AND CONTINUE"
9. Click "BACK TO DASHBOARD"

#### 1.4 Create OAuth Client IDs

You need **3 OAuth clients**:
1. **Web Client ID** (for Supabase)
2. **iOS Client ID** (for iOS app)
3. **Android Client ID** (for Android app)

##### Create Web Client ID (REQUIRED for Supabase):

1. Go to: https://console.cloud.google.com/apis/credentials
2. Click "CREATE CREDENTIALS" → "OAuth client ID"
3. Application type: **Web application**
4. Name: `TG-TET Web Client (Supabase)`
5. Authorized redirect URIs:
   - Click "ADD URI"
   - Add: `https://thvucacdrsexfcpkswpv.supabase.co/auth/v1/callback`
6. Click "CREATE"
7. **📋 COPY the Client ID** - you'll need this!
   - Format: `XXXXXX.apps.googleusercontent.com`
   - Save this as `EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID`

##### Create iOS Client ID:

1. Click "CREATE CREDENTIALS" → "OAuth client ID"
2. Application type: **iOS**
3. Name: `TG-TET iOS`
4. Bundle ID: `com.tgtet.app` (must match your app.json/app.config.js)
5. Click "CREATE"
6. **📋 COPY the Client ID**
   - Format: `XXXXXX.apps.googleusercontent.com`
   - Save this as `EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID`
7. **📋 COPY the iOS URL scheme**
   - It's the reversed client ID
   - Format: `com.googleusercontent.apps.XXXXXX`
   - Save this as `EXPO_PUBLIC_GOOGLE_IOS_URL_SCHEME`

##### Create Android Client ID:

1. Click "CREATE CREDENTIALS" → "OAuth client ID"
2. Application type: **Android**
3. Name: `TG-TET Android`
4. Package name: `com.tgtet.app` (must match your app.json/app.config.js)
5. SHA-1 certificate fingerprint:

   **For development:**
   ```bash
   # On macOS/Linux:
   keytool -keystore ~/.android/debug.keystore -list -v -alias androiddebugkey -storepass android -keypass android | grep SHA1

   # On Windows:
   keytool -keystore %USERPROFILE%\.android\debug.keystore -list -v -alias androiddebugkey -storepass android -keypass android | findstr SHA1
   ```

   Copy the SHA1 fingerprint and paste it into Google Console.

6. Click "CREATE"
7. **Note:** Android uses the Web Client ID in the code, so you don't need to copy this client ID separately.

---

### STEP 2: Configure Supabase

1. Go to: https://supabase.com/dashboard/project/thvucacdrsexfcpkswpv/auth/providers
2. Find "Google" provider
3. Enable it
4. **Web Client ID:** Paste the Web Client ID from Google Console
5. **Web Client Secret:** Get this from Google Console (in the Web Client credentials page)
6. Click "Save"

---

### STEP 3: Update .env File

Edit your `.env` file with the credentials from Google Console:

```bash
# GOOGLE SIGN-IN CONFIGURATION (NATIVE - NO BROWSER!)
# Web Client ID (REQUIRED - from Google Console Web Client)
EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID=YOUR_WEB_CLIENT_ID.apps.googleusercontent.com

# iOS Client ID (from Google Console iOS Client)
EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID=YOUR_IOS_CLIENT_ID.apps.googleusercontent.com

# iOS URL Scheme (reversed iOS Client ID)
EXPO_PUBLIC_GOOGLE_IOS_URL_SCHEME=com.googleusercontent.apps.YOUR_IOS_CLIENT_ID_REVERSED
```

**Example:**
```bash
EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID=123456789-abc123.apps.googleusercontent.com
EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID=123456789-xyz456.apps.googleusercontent.com
EXPO_PUBLIC_GOOGLE_IOS_URL_SCHEME=com.googleusercontent.apps.123456789-xyz456
```

---

### STEP 4: Install EAS CLI

```bash
npm install -g eas-cli
```

---

### STEP 5: Login to EAS

```bash
eas login
```

Enter your Expo account credentials.

---

### STEP 6: Configure EAS Project

```bash
eas build:configure
```

This will:
- Create an EAS project ID
- Link your project to EAS

---

### STEP 7: Set EAS Environment Variables

You need to set the Google credentials as EAS secrets:

```bash
# Set Web Client ID
eas secret:create --scope project --name EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID --value "YOUR_WEB_CLIENT_ID.apps.googleusercontent.com"

# Set iOS Client ID
eas secret:create --scope project --name EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID --value "YOUR_IOS_CLIENT_ID.apps.googleusercontent.com"

# Set iOS URL Scheme
eas secret:create --scope project --name EXPO_PUBLIC_GOOGLE_IOS_URL_SCHEME --value "com.googleusercontent.apps.YOUR_REVERSED_ID"
```

---

### STEP 8: Build Development Build

Choose your platform:

#### For iOS Simulator (Mac only):
```bash
eas build --profile development --platform ios
```

This will:
- Build the app with native Google Sign-In module
- Take about 10-15 minutes
- Give you a download link when done

**After build completes:**
1. Download the `.tar.gz` file
2. Extract it
3. Drag the `.app` file to your iOS Simulator
4. Or install with: `npx expo install:ios`

#### For Android Device/Emulator:
```bash
eas build --profile development --platform android
```

This will:
- Build an APK with native Google Sign-In module
- Take about 10-15 minutes
- Give you a download link when done

**After build completes:**
1. Download the `.apk` file
2. Install on your device:
   - Scan the QR code from EAS
   - Or download directly to device
   - Or use: `adb install path/to/app.apk`

---

### STEP 9: Run Development Server

```bash
npx expo start --dev-client
```

**Important:**
- Use `--dev-client` flag (NOT normal Expo Go)
- This connects to your custom development build
- Open the app on your device/simulator

---

### STEP 10: Test Native Google Sign-In!

1. Open your development build
2. Tap "Continue with Google"
3. **Native Google Sign-In UI appears** (NO browser!)
4. Select your Google account
5. ✅ You should be signed in!

**Expected logs:**
```
🚀 Starting native Google Sign-In...
📱 Platform: ios
📝 Presenting native Google Sign-In UI...
✅ Google Sign-In successful!
👤 User: your-email@gmail.com
🔑 Getting ID token...
✅ ID token received
🔐 Signing in to Supabase with ID token...
✅ Signed in to Supabase successfully!
👤 Supabase User: your-email@gmail.com
🎉 Authentication complete!
```

---

## Troubleshooting

### Error: "Google Sign-In not configured"
- **Cause:** .env file not set up correctly
- **Fix:** Make sure all 3 environment variables are set in .env

### Error: "SIGN_IN_CANCELLED"
- **Cause:** User cancelled the sign-in
- **Fix:** Normal behavior, try again

### Error: "PLAY_SERVICES_NOT_AVAILABLE" (Android)
- **Cause:** Google Play Services not installed or outdated
- **Fix:** Update Google Play Services on the device/emulator

### Error: "No ID token received from Google"
- **Cause:** OAuth client misconfigured in Google Console
- **Fix:**
  - Verify Web Client ID is correct
  - Verify bundle ID (iOS) and package name (Android) match exactly
  - Re-create the OAuth clients if needed

### Build fails with "Could not find ..."
- **Cause:** EAS environment variables not set
- **Fix:** Run the `eas secret:create` commands from Step 7

---

## Files Modified/Created

1. ✅ `lib/auth-context.tsx` - Native Google Sign-In implementation
2. ✅ `app.config.js` - Replaces app.json with Google Sign-In plugin
3. ✅ `eas.json` - EAS build configuration
4. ✅ `.env` - Environment variables (you need to update this)

---

## Quick Command Reference

```bash
# Install EAS CLI
npm install -g eas-cli

# Login to EAS
eas login

# Configure project
eas build:configure

# Set secrets
eas secret:create --scope project --name EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID --value "YOUR_VALUE"

# Build for iOS
eas build --profile development --platform ios

# Build for Android
eas build --profile development --platform android

# Start dev server
npx expo start --dev-client
```

---

## Next Steps

1. ✅ Complete Google Cloud Console setup (Step 1)
2. ✅ Configure Supabase (Step 2)
3. ✅ Update .env file (Step 3)
4. ✅ Install EAS CLI and build (Steps 4-8)
5. ✅ Test native sign-in (Step 10)

---

## Production Build (Later)

When you're ready to build for production:

```bash
# iOS (App Store)
eas build --profile production --platform ios

# Android (Play Store)
eas build --profile production --platform android
```

**Note:** For production, you'll need:
- Apple Developer Account ($99/year) for iOS
- Google Play Developer Account ($25 one-time) for Android
- Production OAuth clients in Google Console

---

## Support

If you run into issues:
1. Check the troubleshooting section above
2. Check EAS build logs: `eas build:list`
3. Check console logs when testing sign-in
4. Verify all credentials are correct in Google Console and .env

---

## Why Native is Better

✅ **Native Google Sign-In:**
- Native UI (looks professional)
- Faster (no browser popup)
- Better UX
- Automatic account selection
- Secure (Google handles auth directly)

❌ **Web OAuth (old approach):**
- Opens browser (slower)
- Extra step for user
- Can be confusing
- Still works, but not as smooth

Native is the recommended approach for production apps!
