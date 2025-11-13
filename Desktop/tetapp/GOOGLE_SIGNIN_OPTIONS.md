# Google Sign-In: Two Approaches Explained

## The Problem You Encountered

You tried to use `@react-native-google-signin/google-signin` which is a **native module** that requires custom native code. This doesn't work in **Expo Go** because Expo Go only includes a predefined set of native modules.

**Error:** `TurboModuleRegistry.getEnforcing(...): 'RNGoogleSignin' could not be found`

---

## Option 1: Web-Based OAuth (CURRENTLY ACTIVE) ✅

**Status:** ✅ **Implemented and ready to use**

### How it works:
1. User taps "Sign in with Google"
2. Opens in-app browser with Google OAuth page
3. User signs in with Google
4. Google redirects back via **deep link** `tgtet://auth/callback`
5. App handles the deep link and sets session
6. User is signed in!

### ✅ Pros:
- Works with **Expo Go** immediately
- No native builds required
- No complex setup
- Uses Supabase OAuth (secure and standard)

### ❌ Cons:
- Opens browser for sign-in (not native UI)
- Slightly slower UX

### 🚨 Required Setup:

#### 1. Configure Supabase Redirect URLs
Add the deep link to your Supabase project:

1. Go to: https://supabase.com/dashboard/project/thvucacdrsexfcpkswpv/auth/url-configuration
2. In "Redirect URLs" section, add: `tgtet://auth/callback`
3. Save changes

#### 2. Restart Expo
```bash
npx expo start --clear
```

#### 3. Test Sign-In
- Tap "Sign in with Google"
- Complete OAuth in browser
- Browser should auto-close and deep link back to app
- ✅ Success!

---

## Option 2: Native Google Sign-In (NOT Active)

**Status:** ❌ **Requires development build**

### How it would work:
1. User taps "Sign in with Google"
2. **Native Google Sign-In UI** appears (no browser!)
3. User signs in with native picker
4. Gets ID token and signs into Supabase
5. User is signed in!

### ✅ Pros:
- Native UI (better UX)
- Faster sign-in
- No browser popup

### ❌ Cons:
- **Doesn't work with Expo Go**
- Requires **EAS development build**
- More complex setup (Google Cloud Console, client IDs, etc.)
- Longer development cycle

### Required Setup (if you want to use this):

#### 1. Install EAS CLI
```bash
npm install -g eas-cli
```

#### 2. Create Development Build
```bash
eas build --profile development --platform ios
# or
eas build --profile development --platform android
```

#### 3. Configure Google OAuth
- Set up OAuth in Google Cloud Console
- Get Web Client ID and iOS/Android Client IDs
- Add to .env file
- Configure Supabase to accept Google OAuth

#### 4. Update Code
I can provide the native implementation if you choose this route.

---

## Recommendation

**Use Option 1 (Web-Based OAuth)** for now because:

1. ✅ Works immediately with Expo Go
2. ✅ No build required
3. ✅ Simpler setup
4. ✅ Still secure and production-ready
5. ✅ You can switch to native later if needed

When you're ready to build a standalone app for production, you can:
- Stick with web-based OAuth (totally fine!)
- OR switch to native OAuth if you want the native UX

---

## Current Implementation

**Active:** Web-Based OAuth (Option 1)

**Files:**
- `lib/auth-context.tsx` - OAuth implementation with deep linking
- `app/auth/callback.tsx` - Handles OAuth redirect and session setup
- `app.json` - App scheme: `tgtet`

**Package used:**
- `expo-web-browser` - Opens browser for OAuth
- `expo-constants` - Gets app scheme for deep linking

**Package NOT used (removed):**
- `@react-native-google-signin/google-signin` - Native module (doesn't work in Expo Go)

---

## Next Steps

1. ✅ Add `tgtet://auth/callback` to Supabase redirect URLs
2. ✅ Run `npx expo start --clear`
3. ✅ Test sign-in
4. ✅ Verify it works with browser closing after OAuth

If you want to switch to native OAuth later, let me know and I'll help you set up EAS builds and the native implementation!
