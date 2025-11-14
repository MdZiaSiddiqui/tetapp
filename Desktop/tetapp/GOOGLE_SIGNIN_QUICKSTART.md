# 🚀 Google Sign-In Quick Setup Guide

## ⚡ Quick Steps to Fix the Error

The error `"Google Sign-In not configured"` means you need to add your Google Client ID to the `.env` file.

### Step 1: Get Your Google Web Client ID

1. Go to [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
2. Sign in with your Google account
3. Create a new project (or select existing one)
4. Click **"CREATE CREDENTIALS"** → **"OAuth client ID"**
5. If prompted, configure the OAuth consent screen first:
   - App name: `TG-TET`
   - User support email: Your email
   - Developer contact: Your email
   - Click **Save and Continue** through all steps

### Step 2: Create Web Client ID

1. Click **"CREATE CREDENTIALS"** → **"OAuth client ID"**
2. Select **"Web application"** as the application type
3. Name: `TG-TET Web Client`
4. Leave authorized JavaScript origins and redirect URIs empty
5. Click **"CREATE"**
6. **COPY the Client ID** (looks like: `123456789-abc...xyz.apps.googleusercontent.com`)

### Step 3: Add to Your .env File

1. Open `.env` file in your project root
2. Find the line: `EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID=`
3. Paste your Client ID:
   ```bash
   EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID=123456789-abc...xyz.apps.googleusercontent.com
   ```
4. Save the file

### Step 4: Configure Supabase

1. Go to [Supabase Dashboard](https://app.supabase.com/)
2. Select your project → **Authentication** → **Providers**
3. Find **Google** and enable it
4. Enter your **Web Client ID** from Step 2
5. Go back to Google Cloud Console → Click on your Web Client ID → Copy the **Client Secret**
6. Paste the **Client Secret** in Supabase
7. Click **Save**

### Step 5: Restart Your App

```bash
# Stop your current dev server (Ctrl+C)
# Then restart with cache clear:
npx expo start --clear
```

## ✅ That's It!

Your Google Sign-In should now work. The error will disappear once you:
- ✅ Have a valid Google Web Client ID
- ✅ Added it to `.env` file
- ✅ Configured it in Supabase
- ✅ Restarted the app

---

## 📱 For Testing on Device

**Important:** Native Google Sign-In requires a development build, NOT Expo Go.

### Option 1: Local Build (Recommended for quick testing)
```bash
# For Android
npx expo run:android

# For iOS (Mac only)
npx expo run:ios
```

### Option 2: EAS Build (For production-like testing)
```bash
# Install EAS CLI
npm install -g eas-cli

# Login to Expo
eas login

# Create development build
eas build --profile development --platform android
# or for iOS:
eas build --profile development --platform ios
```

---

## 🔧 Common Issues

### "DEVELOPER_ERROR" on Android

You need to add your SHA-1 fingerprint to Google Cloud Console:

1. Get your SHA-1 fingerprint:
   ```bash
   # For debug builds
   keytool -list -v -keystore ~/.android/debug.keystore -alias androiddebugkey -storepass android -keypass android
   ```

2. Go to Google Cloud Console → **Credentials**
3. Click **"CREATE CREDENTIALS"** → **"OAuth client ID"**
4. Select **Android**
5. Enter:
   - Package name: `com.tgtet.app`
   - SHA-1 certificate fingerprint: (paste from step 1)
6. Click **Create**

### "No ID token received"

- Check that your Web Client ID is correct in `.env`
- Make sure OAuth consent screen is configured
- Try creating a new Web Client ID

### "Play Services not available"

- Update Google Play Services on your Android device
- Test on a different device

---

## 📚 More Details

For complete setup instructions including iOS configuration, see:
- `NATIVE_GOOGLE_SIGNIN_SETUP.md` - Full setup guide with screenshots

---

## 🎯 Need Help?

Check the console logs - they show exactly what's happening:
```
✅ Google Sign-In configured successfully
🚀 Starting native Google Sign-In...
📝 Presenting native Google Sign-In UI...
✅ Google Sign-In successful!
```

If you see errors, they'll tell you exactly what's wrong!
