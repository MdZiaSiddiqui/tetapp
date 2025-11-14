# Supabase Configuration Checklist for Google OAuth

## Quick Setup Checklist

### ✅ Step 1: Google Cloud Console
- [ ] Created OAuth 2.0 Client ID (Web Application)
- [ ] Added redirect URI: `https://thvucacdrsexfcpkswpv.supabase.co/auth/v1/callback`
- [ ] Copied Client ID
- [ ] Copied Client Secret

### ✅ Step 2: Supabase Dashboard

#### URL Configuration
- [ ] Navigate to: **Authentication** → **URL Configuration**
- [ ] Add to Redirect URLs: `tetapp://auth/callback`
- [ ] Click **Save**

#### Google Provider
- [ ] Navigate to: **Authentication** → **Providers**
- [ ] Find **Google** provider
- [ ] Toggle **Enabled** to ON (green)
- [ ] Paste **Google Client ID**
- [ ] Paste **Google Client Secret**
- [ ] Click **Save**

### ✅ Step 3: Verify Setup

Run these checks in order:

1. **Google Cloud Console**:
   ```
   ✓ Authorized redirect URIs contains:
     https://thvucacdrsexfcpkswpv.supabase.co/auth/v1/callback
   ```

2. **Supabase Authentication → URL Configuration**:
   ```
   ✓ Redirect URLs contains:
     tetapp://auth/callback
   ```

3. **Supabase Authentication → Providers → Google**:
   ```
   ✓ Enabled: ON (green toggle)
   ✓ Client ID: Filled with your Google Client ID
   ✓ Client Secret: Filled with your Google Client Secret
   ```

4. **App Configuration** (`app.config.js`):
   ```
   ✓ scheme: "tetapp"
   ```

### ✅ Step 4: Test

```bash
npx expo start --clear
```

Then:
1. Click "Continue with Google" in the app
2. Browser should open with Google sign-in
3. After signing in, browser redirects back to app
4. User should be logged in

## Common Mistakes

### ❌ Wrong: Missing redirect URL in Supabase
```
Error: "No tokens found in callback URL"
Fix: Add tetapp://auth/callback to Supabase → Authentication → URL Configuration
```

### ❌ Wrong: Google provider not enabled
```
Error: "No OAuth URL generated"
Fix: Enable Google provider in Supabase → Authentication → Providers
```

### ❌ Wrong: Wrong redirect URI in Google Console
```
Error: "redirect_uri_mismatch"
Fix: Add https://thvucacdrsexfcpkswpv.supabase.co/auth/v1/callback to Google Cloud Console
```

### ❌ Wrong: Scheme mismatch
```
Error: "Browser doesn't redirect back"
Fix: Make sure app.config.js has scheme: "tetapp" and Supabase has tetapp://auth/callback
```

## Debug Logs to Check

When testing, look for these console logs:

### ✅ Success Flow:
```
🚀 Starting browser-based Google Sign-In...
🔗 Redirect URI: tetapp://auth/callback
🌐 Opening browser for authentication...
OAuth URL: https://thvucacdrsexfcpkswpv.supabase.co/auth/v1/authorize?...
Browser result type: success
✅ Browser returned with URL: tetapp://auth/callback#access_token=...
Access token found: true
Refresh token found: true
✅ Session created successfully!
User: your.email@gmail.com
```

### ❌ Failure - No tokens:
```
🚀 Starting browser-based Google Sign-In...
Browser result type: success
✅ Browser returned with URL: tetapp://auth/callback
Access token found: false
Refresh token found: false
❌ No tokens found in callback URL
```
**Fix**: Check Supabase Redirect URLs configuration

### ❌ Failure - No OAuth URL:
```
🚀 Starting browser-based Google Sign-In...
❌ OAuth error: Invalid request
```
**Fix**: Enable Google provider in Supabase

## Your Project Details

- **Supabase Project URL**: `https://thvucacdrsexfcpkswpv.supabase.co`
- **App URL Scheme**: `tetapp://`
- **Redirect URI for App**: `tetapp://auth/callback`
- **Redirect URI for Google Console**: `https://thvucacdrsexfcpkswpv.supabase.co/auth/v1/callback`

## Need Help?

1. Check the console logs - they tell you exactly what's happening
2. Review the detailed guide: `BROWSER_GOOGLE_AUTH_SETUP.md`
3. Make sure all checkboxes above are ✅
4. Clear cache and restart: `npx expo start --clear`
