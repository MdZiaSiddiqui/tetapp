# Google OAuth Client ID Configuration Values

## 📱 Android OAuth Client ID (Development)

Use these values when creating the **Android** OAuth client ID in Google Cloud Console:

### Form Fields:

| Field | Value |
|-------|-------|
| **Application type** | Android |
| **Name** | TET Android Dev |
| **Package name** | `com.tgtet.app` |
| **SHA-1 certificate fingerprint** | `FA:5E:C2:1D:25:97:6E:0A:E2:EB:03:B8:25:DF:86:A9:C1:AD:17:D1` |

### Additional Information:
- **SHA-256 fingerprint** (if needed): `03:CD:83:F7:BC:DB:E6:10:12:D5:59:C2:1C:E2:42:2A:EC:6F:7F:E7:FD:EE:1B:47:DE:03:0B:82:17:C2:77:8B`

---

## 🌐 Web OAuth Client ID (Required for Supabase)

You'll also need to create a **Web application** OAuth client ID:

### Form Fields:

| Field | Value |
|-------|-------|
| **Application type** | Web application |
| **Name** | TET Web |
| **Authorized redirect URIs** | `https://YOUR_SUPABASE_PROJECT_ID.supabase.co/auth/v1/callback` |

**Important**: Replace `YOUR_SUPABASE_PROJECT_ID` with your actual Supabase project ID.

You can find your Supabase project ID:
1. Go to your [Supabase Dashboard](https://app.supabase.com/)
2. Select your project
3. Look at the URL: `https://app.supabase.com/project/YOUR_PROJECT_ID`
4. Or go to Settings → General → Reference ID

---

## 🍎 iOS OAuth Client ID (Optional - for production)

If you plan to deploy to iOS, create an **iOS** OAuth client ID:

### Form Fields:

| Field | Value |
|-------|-------|
| **Application type** | iOS |
| **Name** | TET iOS |
| **Bundle ID** | `com.tgtet.app` |

---

## 📋 Step-by-Step Instructions

### Step 1: Create Web Client (Required First)

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Navigate to **APIs & Services** → **Credentials**
3. Click **Create Credentials** → **OAuth 2.0 Client ID**
4. Select **Web application**
5. Fill in the form with values from the table above
6. Click **Create**
7. **SAVE the Client ID and Client Secret** - you'll need these for Supabase!

### Step 2: Configure Supabase

1. Go to your [Supabase Dashboard](https://app.supabase.com/)
2. Select your project
3. Navigate to **Authentication** → **Providers**
4. Find **Google** and enable it
5. Enter:
   - **Client ID**: From Web OAuth Client
   - **Client Secret**: From Web OAuth Client
6. In **Authorized Client IDs** (optional), add:
   - Your Android Client ID (once created)
   - Your iOS Client ID (once created)
7. Click **Save**

### Step 3: Create Android Client (Optional for now)

1. In Google Cloud Console, click **Create Credentials** → **OAuth 2.0 Client ID** again
2. Select **Android**
3. Fill in the form with values from the Android table above
4. Click **Create**
5. Copy the Client ID
6. Add it to Supabase **Authorized Client IDs** (step 2.6 above)

### Step 4: Test Authentication

```bash
# Clear cache and restart
npm start -- --clear

# Then in the app:
# 1. Go to Profile tab
# 2. Tap "Sign In with Google"
# 3. Complete OAuth flow
```

---

## 🔍 For Production Builds

When you're ready to deploy to production:

### Android Production

1. Build your app with EAS Build:
   ```bash
   npm install -g eas-cli
   eas build --platform android
   ```

2. After the build completes, get the production SHA-1:
   ```bash
   eas credentials
   ```
   Or download from Google Play Console after uploading

3. Create a new Android OAuth Client ID with the production SHA-1
4. Add the production Client ID to Supabase

### iOS Production

1. Build your app with EAS Build:
   ```bash
   eas build --platform ios
   ```

2. Create iOS OAuth Client ID with your bundle identifier: `com.tgtet.app`
3. Add the iOS Client ID to Supabase

---

## 🚨 Important Notes

### For Testing (Now):
- **You only need the Web OAuth client** to test the authentication flow
- The Android client is optional for development with Expo Go
- The web client works across all platforms during development

### For Production (Later):
- You'll need platform-specific OAuth clients (Android/iOS)
- Get production SHA-1 from EAS Build or app stores
- Update Supabase with all client IDs

### Common Issues:

**"Redirect URI mismatch"**
- Make sure the redirect URI in Google Cloud Console exactly matches your Supabase callback URL
- No trailing slashes, must be exact

**"Invalid client"**
- Double-check Client ID and Secret in Supabase match the Web OAuth client

**"Sign in failed"**
- Check console logs for the actual redirect URL being used
- Verify OAuth consent screen is configured in Google Cloud Console

---

## ✅ Quick Start Checklist

- [ ] Create Web OAuth Client ID in Google Cloud Console
- [ ] Save Client ID and Client Secret
- [ ] Enable Google provider in Supabase
- [ ] Enter Client ID and Secret in Supabase
- [ ] Configure redirect URI in Google Cloud Console
- [ ] (Optional) Create Android OAuth Client ID
- [ ] (Optional) Add Android Client ID to Supabase Authorized Client IDs
- [ ] Test authentication in the app

---

**Need help?** Check the detailed guide in `GOOGLE_AUTH_SETUP.md`
