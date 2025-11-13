# ⚡ Native Google Sign-In - Quick Start Checklist

Use this checklist to get native Google Sign-In working in your app.

## ✅ Quick Setup Checklist

### 1️⃣ Google Cloud Console (10 minutes)

- [ ] Go to [Google Cloud Console](https://console.cloud.google.com/)
- [ ] Create/select project
- [ ] Enable **Google Sign-In API** (APIs & Services → Library)
- [ ] Configure **OAuth Consent Screen** (APIs & Services → OAuth consent screen)
  - [ ] App name: `TGTET`
  - [ ] User support email
  - [ ] Developer email
- [ ] Create **Android OAuth Client**:
  - [ ] Package name: `com.tgtet.app`
  - [ ] SHA-1 fingerprint: Run `cd android && ./gradlew signingReport`
- [ ] Create **iOS OAuth Client**:
  - [ ] Bundle ID: `com.tgtet.app`
- [ ] Create **Web OAuth Client** ⭐ (MOST IMPORTANT)
  - [ ] Copy the **Client ID** (looks like: `123456-abc.apps.googleusercontent.com`)
  - [ ] Copy the **Client Secret**

### 2️⃣ Update .env File (1 minute)

- [ ] Open `.env` file
- [ ] Replace `YOUR_WEB_CLIENT_ID_HERE` with your actual Web Client ID:
  ```bash
  EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID=123456789-abcdefg.apps.googleusercontent.com
  ```
- [ ] (Optional) Add iOS Client ID if you have it:
  ```bash
  EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID=123456789-hijklmn.apps.googleusercontent.com
  ```

### 3️⃣ Configure Supabase (2 minutes)

- [ ] Go to [Supabase Dashboard](https://app.supabase.com/)
- [ ] Select your project → **Authentication** → **Providers**
- [ ] Find **Google** and click configure
- [ ] Enter your **Web Client ID** from step 1
- [ ] Enter your **Client Secret** from step 1
- [ ] Click **Save**

### 4️⃣ Rebuild App (5-15 minutes)

Since we added a native module, you MUST rebuild:

**Option A: Local Build (Faster for testing)**
```bash
# Clear cache
npx expo start --clear

# Android
npx expo run:android

# iOS (Mac only)
npx expo run:ios
```

**Option B: EAS Build (For distribution)**
```bash
# Install EAS CLI (if not already)
npm install -g eas-cli

# Login
eas login

# Configure (first time only)
eas build:configure

# Build
eas build --profile development --platform android
eas build --profile development --platform ios
```

- [ ] App rebuilt successfully

### 5️⃣ Test It! (1 minute)

- [ ] Open your app
- [ ] Tap "Sign In with Google" button
- [ ] See **native Google account picker** (NOT a browser!)
- [ ] Select your Google account
- [ ] App signs you in instantly
- [ ] Profile tab shows your information

---

## ⚠️ Common Issues

| Issue | Solution |
|-------|----------|
| "Google Sign-In not configured" | Add Web Client ID to `.env` and restart |
| "DEVELOPER_ERROR" (Android) | SHA-1 mismatch - regenerate with `./gradlew signingReport` |
| Still seeing browser | You didn't rebuild the app after installing native module |
| App crashes on sign-in | Native module not properly installed - rebuild |
| "No ID token" | Wrong Web Client ID - double-check in Google Console |

---

## 🎯 What Success Looks Like

**Console logs you should see:**
```
✅ Google Sign-In configured successfully
🚀 Starting native Google Sign-In...
✅ Google Sign-In successful: user@gmail.com
🔑 ID token received, signing in to Supabase...
✅ Signed in to Supabase successfully!
👤 User: user@gmail.com
```

**UI you should see:**
1. Native Google account picker (system-level UI)
2. No browser or WebView
3. Instant sign-in
4. Profile screen updates with user info

---

## 📖 Need More Help?

- **Detailed setup:** See `NATIVE_GOOGLE_SIGNIN_SETUP.md`
- **What changed:** See `NATIVE_GOOGLE_SIGNIN_SUMMARY.md`
- **Package docs:** [react-native-google-signin](https://github.com/react-native-google-signin/google-signin)

---

## 🚀 TL;DR - Absolute Minimum

1. Get **Web Client ID** from Google Cloud Console
2. Add it to `.env`: `EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID=...`
3. Enable Google in Supabase Dashboard
4. Run: `npx expo run:android` or `npx expo run:ios`
5. Test: Tap "Sign In with Google" → Native picker appears!

**That's it! No browser, no redirects, no deep linking. Just works.** ✨
