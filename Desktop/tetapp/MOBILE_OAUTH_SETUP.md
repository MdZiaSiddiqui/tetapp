# Mobile OAuth Setup Instructions

## The Problem
When testing on mobile, the OAuth redirect goes to `localhost` which doesn't work on phones because localhost refers to the phone itself, not your development computer.

## The Solution

### Step 1: Find Your Redirect URL

1. Open Expo on your phone
2. Try to sign in with Google
3. Check the Expo dev tools terminal - it will log: `Redirect URL: exp://192.168.x.x:8081` (or similar)
4. **Copy this exact URL**

### Step 2: Add Redirect URL to Supabase

1. Go to your Supabase Dashboard: https://supabase.com/dashboard
2. Select your project
3. Go to **Authentication** → **URL Configuration**
4. Scroll to **Redirect URLs** section
5. Click **Add URL** and add these URLs:

   ```
   exp://*
   tgtet://*
   http://localhost:8081/*
   ```

   The `*` is a wildcard that matches any path/port combination.

### Step 3: Test Again

1. Restart the Expo app on your phone
2. Try Google sign-in again
3. It should now:
   - Open Google sign-in in browser
   - Complete authentication
   - Redirect back to your app
   - Set the session and navigate to home

## Troubleshooting

### "Site can't be reached" on mobile
- This means the redirect URL isn't configured in Supabase
- Make sure you added `exp://*` to Supabase redirect URLs

### OAuth still fails
1. Check the Expo terminal for the exact redirect URL being used
2. Make sure that URL (or a wildcard pattern) is in Supabase
3. Try adding the specific URL if the wildcard doesn't work

### For Production (Standalone App)
When you build a standalone app (not using Expo Go), the redirect URL will be:
```
tgtet://
```
Make sure this is also added to your Supabase redirect URLs.

## Current Configuration

Your app is configured with:
- **Scheme**: `tgtet`
- **Bundle ID (iOS)**: `com.tgtet.app`
- **Package (Android)**: `com.tgtet.app`

The OAuth code will automatically use:
- `exp://...` when running in Expo Go
- `tgtet://` when running as a standalone app
- `http://localhost:8081` when running on web
