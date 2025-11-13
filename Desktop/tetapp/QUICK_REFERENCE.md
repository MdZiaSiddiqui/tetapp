# 🎯 Native Google Sign-In - Quick Reference

## What It Does

**Replaces browser-based OAuth with native Google Sign-In**
- ✅ No browser popups
- ✅ Native account picker
- ✅ Instant authentication
- ✅ Better UX

---

## Setup (3 Steps)

### 1. Google Cloud Console
```
1. Go to console.cloud.google.com
2. Create Web OAuth Client ID
3. Copy the Client ID
```

### 2. Add to .env
```bash
EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID=YOUR_ID_HERE.apps.googleusercontent.com
```

### 3. Rebuild App
```bash
npx expo run:android
# or
npx expo run:ios
```

---

## How It Works

```tsx
// User taps button
const { signInWithGoogle } = useAuth();
await signInWithGoogle();

// Behind the scenes:
// 1. Native Google picker appears
// 2. User selects account
// 3. App gets ID token
// 4. Supabase creates session
// 5. Done!
```

---

## Testing

**✅ Working:**
- Native Google account picker UI
- No browser
- Console: "✅ Google Sign-In successful"
- User profile appears

**❌ Not working:**
- "Not configured" → Add Client ID to .env
- "DEVELOPER_ERROR" → Fix SHA-1 fingerprint
- Still see browser → Rebuild the app

---

## Files Changed

- `lib/auth-context.tsx` - Uses native GoogleSignin
- `app.json` - Added plugin
- `.env` - Added Google credentials
- `package.json` - Added native package

---

## Docs

- `GOOGLE_SIGNIN_QUICKSTART.md` - Quick checklist
- `NATIVE_GOOGLE_SIGNIN_SETUP.md` - Detailed guide
- `NATIVE_GOOGLE_SIGNIN_SUMMARY.md` - Full explanation

---

## Console Logs Cheat Sheet

```
✅ = Success
❌ = Error
🚀 = Starting process
🔑 = Got token
👤 = User info
⚠️ = Warning
```

Look for:
```
✅ Google Sign-In configured successfully
✅ Google Sign-In successful: user@gmail.com
✅ Signed in to Supabase successfully!
```

---

## TL;DR

**Before:** Browser popup → OAuth dance → Deep linking → Hope it works
**After:** Native picker → Instant sign-in → Done

**Need:** Google Web Client ID from console.cloud.google.com
**Add to:** .env file
**Then:** Rebuild app
**Result:** Native Google Sign-In! 🎉
