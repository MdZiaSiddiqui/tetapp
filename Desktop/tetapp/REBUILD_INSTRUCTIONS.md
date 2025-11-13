# 🔧 Rebuild Instructions - IMPORTANT!

## Issues Fixed

✅ **1. Duplicate "notes" screen** - Removed from root layout (was causing "extraneous screen" warning)
✅ **2. QueryClient deprecation** - Removed deprecated `onError` option
✅ **3. Native module not found** - Cache cleared, needs rebuild

---

## 🚨 YOU MUST REBUILD THE APP

The `@react-native-google-signin/google-signin` package is a **native module**. This means:

- ❌ Expo Go **WILL NOT WORK**
- ✅ You need a **custom development build**

---

## 🚀 How to Rebuild (Choose One)

### Option A: Local Build (Faster, for testing)

**Prerequisites:**
- Android Studio installed (for Android)
- Xcode installed (for iOS, Mac only)

**Steps:**

```bash
# 1. Install dependencies (if needed)
npm install

# 2. Start Expo with clear cache
npx expo start --clear

# 3. Build and run on Android
npx expo run:android

# OR build and run on iOS (Mac only)
npx expo run:ios
```

**This will:**
- Generate native `android/` and `ios/` folders
- Install the native Google Sign-In module
- Build and launch the app on your device/emulator

---

### Option B: EAS Build (For distribution/testing on real devices)

**Prerequisites:**
- EAS CLI installed: `npm install -g eas-cli`
- Expo account (free)

**Steps:**

```bash
# 1. Login to Expo
eas login

# 2. Configure EAS (first time only)
eas build:configure

# 3. Build for development
eas build --profile development --platform android

# OR for iOS
eas build --profile development --platform ios
```

**This will:**
- Build the app in the cloud
- Give you a downloadable .apk (Android) or .ipa (iOS)
- Include all native modules

---

## ⚡ Quick Start (Recommended)

If you want to test quickly:

```bash
# Clear everything and rebuild
npx expo start --clear

# Then press 'a' for Android or 'i' for iOS
# Expo will automatically build and install
```

When prompted:
- **"Native modules found..."** → Press 'y' to continue
- Expo will generate native folders and build

---

## 🎯 After Rebuilding

Once the app is rebuilt and running:

1. **Add Google Credentials:**
   - Open `.env` file
   - Add your Google Web Client ID:
     ```bash
     EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID=YOUR_ID_HERE.apps.googleusercontent.com
     ```
   - See `GOOGLE_SIGNIN_QUICKSTART.md` for how to get this

2. **Test Native Google Sign-In:**
   - Open the app
   - Go to Profile tab
   - Tap "Sign In with Google"
   - Should see **native Google account picker** (NOT a browser!)

3. **Check Console Logs:**
   - Look for: `✅ Google Sign-In configured successfully`
   - If you see: `⚠️ EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID is not set` → Add it to `.env`

---

## 🐛 Troubleshooting

### Error: "Expo Go is not supported"
**Solution:** You need a custom build. Use `npx expo run:android` or EAS Build.

### Error: "Android SDK not found"
**Solution:** Install Android Studio and set up Android SDK.
- Download: https://developer.android.com/studio
- Follow setup instructions

### Error: "Xcode not found" (iOS)
**Solution:** Install Xcode from App Store (Mac only).

### Error: "Gradle build failed" (Android)
**Solution:**
```bash
cd android
./gradlew clean
cd ..
npx expo run:android
```

### Build takes forever
**Solution:** First build is slow (5-15 minutes). Subsequent builds are faster.

### Native module still not found
**Solution:**
```bash
# Complete clean rebuild
rm -rf node_modules android ios .expo
npm install
npx expo run:android
```

---

## 📱 Device Requirements

### Android:
- Android 5.0 (API 21) or higher
- Google Play Services installed
- Emulator or physical device

### iOS:
- iOS 13.0 or higher
- Xcode 13+ (Mac only)
- Simulator or physical device

---

## ⏱️ Expected Build Times

**First build:**
- Android: 5-15 minutes
- iOS: 10-20 minutes

**Subsequent builds:**
- Android: 1-3 minutes
- iOS: 2-5 minutes

---

## ✅ Verification

After successful rebuild, you should see:

**In Terminal:**
```
✔ Built bundle
✔ Installing app...
✔ Opening app...
```

**In App Console:**
```
✅ Google Sign-In configured successfully
```

**In UI:**
- App launches without crashing
- No "Could not find module" errors
- Native Google Sign-In button works

---

## 🎉 Next Steps

Once rebuilt:

1. ✅ App running with native module
2. 📝 Add Google credentials to `.env` (see `GOOGLE_SIGNIN_QUICKSTART.md`)
3. 🔐 Configure Supabase Google provider
4. 🧪 Test native Google Sign-In
5. 🎊 Enjoy browser-free authentication!

---

## 📚 Related Docs

- `GOOGLE_SIGNIN_QUICKSTART.md` - Get Google credentials
- `NATIVE_GOOGLE_SIGNIN_SETUP.md` - Detailed setup guide
- `QUICK_REFERENCE.md` - One-page cheat sheet

---

**Need help?** The first rebuild is the hardest. After that, development is smooth! 🚀
