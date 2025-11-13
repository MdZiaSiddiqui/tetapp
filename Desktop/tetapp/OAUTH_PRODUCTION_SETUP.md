# OAuth Setup for Production

## Current Setup (Development with Expo Go)

The app is currently configured to work with Expo Go in development:
- Uses your computer's network IP (e.g., `http://10.58.57.113:8081`)
- Browser stays in-app and closes automatically after auth
- Supabase redirects to the correct IP

## For Production (Standalone App)

When you build a standalone app (not Expo Go), you'll need to update the OAuth configuration:

### 1. Update Supabase Redirect URLs

In **Supabase Dashboard → Authentication → URL Configuration**, add:

**For iOS:**
```
tgtet://auth/callback
com.tgtet.app://auth/callback
```

**For Android:**
```
tgtet://auth/callback
com.tgtet.app://auth/callback
```

**Keep for Web:**
```
https://yourdomain.com/auth/callback
```

### 2. Update Site URL in Supabase

In **Supabase Dashboard → Settings → API → Site URL**, set:
- **Production**: `https://yourdomain.com` (your actual domain)
- **Development**: Keep it as your current IP for Expo Go testing

### 3. Code Changes for Production

The code will automatically detect the environment:

```typescript
// Development (Expo Go): Uses network IP (10.58.57.113:8081)
// Production (Standalone): Uses app scheme (tgtet://)
// Web: Uses window.location.origin
```

No code changes needed! The app detects the platform automatically.

### 4. Testing Production OAuth

After building your standalone app:

1. Install the app on a device
2. Try Google sign-in
3. Browser should open, authenticate, and return to app
4. Session should be set automatically

### 5. Common Issues in Production

**Issue**: "Invalid redirect URI"
**Fix**: Make sure `tgtet://auth/callback` is in Supabase redirect URLs

**Issue**: Browser doesn't return to app
**Fix**: Check that `scheme: "tgtet"` is in app.json

**Issue**: Session not persisting
**Fix**: AsyncStorage should handle this automatically, but check that it's properly configured in lib/supabase.ts

## Current Configuration Files

- **app.json**: Contains `scheme: "tgtet"`
- **lib/auth-context.tsx**: Auto-detects environment
- **app/auth/callback.tsx**: Handles OAuth callback and closes browser

## For Deep Linking (Alternative Method)

If you want to use deep links instead of in-app browser:

1. Change from `WebBrowser.openAuthSessionAsync` to `Linking.openURL`
2. The app will open system browser
3. System browser redirects to `tgtet://` which opens the app
4. Deep link listener catches the callback

**Current approach (in-app browser) is recommended** because:
- Better user experience (stays in app)
- More reliable
- Easier to manage session state
