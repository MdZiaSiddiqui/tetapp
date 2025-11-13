# OAuth Deep Link Fix - Complete Guide

## Problem
When signing in with Google in Expo Go, after successful authentication, the app was opening the full webapp instead of deep linking back to the mobile app, causing "sign in failed" errors.

## Root Cause
The redirect URL was using `http://` scheme which opens as a web page instead of deep linking back to the Expo app.

## Solution
Changed to use deep linking with custom URL scheme `tgtet://auth/callback`

---

## 🚨 REQUIRED CONFIGURATION STEPS

### Step 1: Configure Supabase Redirect URLs

1. **Go to Supabase Dashboard:**
   ```
   https://supabase.com/dashboard/project/thvucacdrsexfcpkswpv/auth/url-configuration
   ```

2. **Add the deep link redirect URL:**
   - In the "Redirect URLs" section, click "Add URL"
   - Add this URL: `tgtet://auth/callback`
   - Click "Save"

3. **Verify the URL is in the allowed list**

### Step 2: Restart Expo Dev Server

```bash
# Stop the current server (Ctrl+C)

# Clear cache and restart
npx expo start --clear
```

### Step 3: Test the OAuth Flow

1. Open the app in Expo Go
2. Tap "Continue with Google"
3. Complete the sign-in in the in-browser
4. **After signing in, the browser should automatically close and deep link back to the app**
5. You should see success and be navigated to the home screen

---

## What Was Changed

### 1. `lib/auth-context.tsx`
- Changed redirect URL from `http://<IP>:8081/auth/callback` to `tgtet://auth/callback`
- Added auth state listener to detect successful sign-in even if browser is dismissed
- Improved error handling for cancelled/dismissed browsers

### 2. `app/_layout.tsx`
- Added explicit registration for `auth/callback` route

### 3. `app/auth/callback.tsx`
- Enhanced deep link URL parsing
- Added multiple fallback methods to extract tokens from deep link URLs
- Better logging for debugging

---

## Expected Behavior

### ✅ Correct Flow:
1. User taps "Sign in with Google"
2. In-browser opens with Google OAuth page
3. User signs in and authorizes
4. Google redirects to `tgtet://auth/callback#access_token=...`
5. **App automatically opens via deep link**
6. Callback page sets the session
7. User is redirected to home screen
8. ✅ Sign in successful!

### ❌ Old (Broken) Flow:
1. User taps "Sign in with Google"
2. In-browser opens with Google OAuth page
3. User signs in and authorizes
4. Google redirects to `http://10.58.57.113:8081/auth/callback`
5. **Browser opens web page instead of app**
6. User closes browser
7. ❌ "Sign in failed" error

---

## Debugging

If sign-in still doesn't work, check the logs:

### Expected Logs (Success):
```
=== Debug Info ===
Platform: ios
...
📱 Mobile redirect URL (deep link): tgtet://auth/callback
=== About to open browser ===
...
🚪 Browser dismissed or cancelled
⏳ Waiting for auth state change...
=== Auth Callback Page Loaded ===
Initial deep link URL: tgtet://auth/callback#access_token=...
Callback - Access token found: true
✅ Session set successfully in callback!
🔄 Auth state change: SIGNED_IN
✅ Auth state: User signed in!
```

### Common Issues:

#### Issue: "No tokens found in callback URL"
- **Cause:** Supabase redirect URL not configured
- **Fix:** Add `tgtet://auth/callback` to Supabase dashboard (Step 1)

#### Issue: Still opens web page
- **Cause:** Old cached bundle
- **Fix:** Run `npx expo start --clear` and reload app

#### Issue: "Authentication timeout"
- **Cause:** Deep link not opening the app
- **Fix:** Verify app scheme in `app.json` is `"scheme": "tgtet"`

---

## For Production Build

When building a standalone app:

### iOS:
- The deep link `tgtet://` will work automatically
- Add to Supabase: `tgtet://auth/callback`

### Android:
- The deep link `tgtet://` will work automatically
- Add to Supabase: `tgtet://auth/callback`

### Web:
- Web uses `http://localhost:8081/auth/callback` (already handled in code)
- For production web, add your domain: `https://yourdomain.com/auth/callback`

---

## Files Modified

1. ✅ `lib/auth-context.tsx` - Deep link redirect URL + auth state listener
2. ✅ `app/_layout.tsx` - Registered auth/callback route
3. ✅ `app/auth/callback.tsx` - Enhanced deep link handling

---

## Next Steps

1. ✅ Configure Supabase redirect URLs (Step 1 above)
2. ✅ Restart Expo dev server with `--clear`
3. ✅ Test OAuth flow
4. ✅ Verify sign-in works when closing browser after auth

If issues persist, check the console logs and compare with the expected logs above.
