# WhatsApp Zero-tap OTP Login via authkey.io

## Overview
Implement WhatsApp Zero-tap OTP authentication using **authkey.io** as the WhatsApp Business API provider. authkey.io handles the Meta/WhatsApp integration, making implementation simpler.

**Key Benefit**: Zero-tap = OTP auto-fills in app without user copying/pasting (Android only)

---

## Architecture

```
┌─────────────────┐      ┌──────────────────┐      ┌─────────────────┐
│   React Native  │ ──── │  Supabase Edge   │ ──── │   authkey.io    │
│   App (Expo)    │      │   Function       │      │  (WhatsApp API) │
└─────────────────┘      └──────────────────┘      └─────────────────┘
        │                         │                        │
        │  1. Request OTP         │                        │
        │ ───────────────────────>│  2. Generate OTP       │
        │                         │  3. Store in DB        │
        │                         │  4. Call authkey.io ───│──> WhatsApp
        │                         │                        │
        │  5. WhatsApp broadcasts │                        │
        │     OTP to app (zero-tap)                        │
        │<────────────────────────│                        │
        │                         │                        │
        │  6. Verify OTP          │                        │
        │ ───────────────────────>│  7. Authenticate       │
```

---

## Pre-requisites: authkey.io Setup

### 1. Create authkey.io Account
1. Go to [console.authkey.io](https://console.authkey.io)
2. Sign up and verify your account
3. Navigate to **My Account > Profile** to get your `authkey`

### 2. Create Zero-tap WhatsApp Template in authkey.io
In authkey.io portal, create a **WhatsApp Authentication Template** with:

- **Template Type**: Authentication (OTP)
- **Code Delivery**: Zero-tap auto-fill
- **Package Name**: `com.tgtet.app`
- **App Signature Hash**: `<YOUR_11_CHAR_HASH>` (see below)
- **Template Content**: `{#otp#} is your verification code`

Note down the **Template ID (wid)** after creation.

### 3. Generate App Signature Hash (11 characters)

```bash
# Using Google's script:
./sms_retriever_hash_v9.sh --package "com.tgtet.app" --keystore ~/.android/debug.keystore

# For release build:
./sms_retriever_hash_v9.sh --package "com.tgtet.app" --keystore /path/to/release.keystore
```

**Alternative method using keytool:**
```bash
keytool -exportcert -alias androiddebugkey -keystore ~/.android/debug.keystore | xxd -p | tr -d "[:space:]" | head -c 32 | sha256sum | head -c 11
```

### 4. Environment Variables
```env
# Supabase Edge Function Secrets (set via Supabase dashboard)
AUTHKEY_IO_KEY=your-authkey-here
AUTHKEY_WHATSAPP_WID=your-template-id-here
```

---

## Implementation Steps

### Step 1: Create Supabase Edge Function
**File:** `supabase/functions/whatsapp-otp/index.ts` (NEW)

Two endpoints:
- `POST /send` - Generate OTP, store hash, send via authkey.io
- `POST /verify` - Verify OTP, create/login user

```typescript
// authkey.io API call (GET method)
const authkeyUrl = new URL('https://console.authkey.io/restapi/request.php');
authkeyUrl.searchParams.append('authkey', AUTHKEY_IO_KEY);
authkeyUrl.searchParams.append('mobile', phoneNumber);
authkeyUrl.searchParams.append('country_code', '91');
authkeyUrl.searchParams.append('wid', AUTHKEY_WHATSAPP_WID);
authkeyUrl.searchParams.append('otp', generatedOtp);

const response = await fetch(authkeyUrl.toString());
```

### Step 2: Create OTP Database Table
**File:** `supabase/migrations/create_phone_otps.sql` (NEW)

```sql
CREATE TABLE phone_otps (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  phone TEXT NOT NULL,
  otp_hash TEXT NOT NULL,
  expires_at TIMESTAMPTZ NOT NULL,
  attempts INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_phone_otps_phone ON phone_otps(phone);
CREATE INDEX idx_phone_otps_expires ON phone_otps(expires_at);
```

### Step 3: Android Native Module for Zero-tap

**Files to Create:**
- `android/app/src/main/java/com/tgtet/app/OtpCodeReceiver.java`
- `android/app/src/main/java/com/tgtet/app/WhatsAppOtpModule.java`
- `android/app/src/main/java/com/tgtet/app/WhatsAppOtpPackage.java`
- Update `android/app/src/main/AndroidManifest.xml`
- Update `android/app/src/main/java/com/tgtet/app/MainApplication.java`

**OtpCodeReceiver.java** - Receives broadcasted OTP:
```java
public class OtpCodeReceiver extends BroadcastReceiver {
    @Override
    public void onReceive(Context context, Intent intent) {
        PendingIntent pendingIntent = intent.getParcelableExtra("_ci_");
        String creatorPackage = pendingIntent.getCreatorPackage();

        if ("com.whatsapp".equals(creatorPackage) ||
            "com.whatsapp.w4b".equals(creatorPackage)) {
            String otpCode = intent.getStringExtra("code");
            // Emit event to React Native
            WhatsAppOtpModule.emitOtpReceived(otpCode);
        }
    }
}
```

**WhatsAppOtpModule.java** - Native module for handshake:
```java
@ReactModule(name = "WhatsAppOtpModule")
public class WhatsAppOtpModule extends ReactContextBaseJavaModule {

    @ReactMethod
    public void sendOtpIntentToWhatsApp() {
        // Initiate handshake with WhatsApp
        sendIntent("com.whatsapp");
        sendIntent("com.whatsapp.w4b");
    }

    @ReactMethod
    public void isWhatsAppInstalled(Promise promise) {
        // Check if WhatsApp is installed
    }
}
```

**AndroidManifest.xml additions:**
```xml
<queries>
    <package android:name="com.whatsapp"/>
    <package android:name="com.whatsapp.w4b"/>
</queries>

<receiver
    android:name=".OtpCodeReceiver"
    android:exported="true">
    <intent-filter>
        <action android:name="com.whatsapp.otp.OTP_RETRIEVED" />
    </intent-filter>
</receiver>
```

### Step 4: Create React Native Bridge
**File:** `lib/native/whatsapp-otp.ts` (NEW)

```typescript
import { NativeModules, NativeEventEmitter, Platform } from 'react-native';

const { WhatsAppOtpModule } = NativeModules;

export function initiateHandshake(): void {
  if (Platform.OS === 'android' && WhatsAppOtpModule) {
    WhatsAppOtpModule.sendOtpIntentToWhatsApp();
  }
}

export function subscribeToOtp(callback: (otp: string) => void) {
  if (Platform.OS !== 'android' || !WhatsAppOtpModule) return null;

  const eventEmitter = new NativeEventEmitter(WhatsAppOtpModule);
  return eventEmitter.addListener('onOtpReceived', callback);
}

export async function isWhatsAppInstalled(): Promise<boolean> {
  if (Platform.OS !== 'android' || !WhatsAppOtpModule) return false;
  return WhatsAppOtpModule.isWhatsAppInstalled();
}
```

### Step 5: Create Client API Wrapper
**File:** `lib/api/whatsapp-otp.ts` (NEW)

```typescript
import { supabase } from '../supabase';

export async function sendOTP(phone: string) {
  const { data, error } = await supabase.functions.invoke('whatsapp-otp', {
    body: { action: 'send', phone }
  });
  return { data, error };
}

export async function verifyOTP(phone: string, otp: string) {
  const { data, error } = await supabase.functions.invoke('whatsapp-otp', {
    body: { action: 'verify', phone, otp }
  });
  return { data, error };
}
```

### Step 6: Update Login Screen
**File:** `app/login.tsx` (MODIFY)

Replace Google Sign-In with Phone + OTP flow:
1. Phone number input with +91 prefix
2. "Send OTP via WhatsApp" button
3. OTP input (4 digits) with auto-fill support
4. Verify button
5. Keep "Continue as Guest"

### Step 7: Update OTPInput Component
**File:** `components/auth/OTPInput.tsx` (MODIFY)

- Change default `length` from 6 to 4

### Step 8: Update Auth Context
**File:** `lib/auth-context.tsx` (MODIFY)

Add methods:
- `sendPhoneOTP(phone: string)` - Initiates handshake + sends OTP
- `verifyPhoneOTP(phone: string, otp: string)` - Verifies + creates session
- Handle anonymous Supabase user creation

---

## Files Summary

| File | Action | Description |
|------|--------|-------------|
| `supabase/functions/whatsapp-otp/index.ts` | CREATE | Edge Function for send/verify |
| `supabase/migrations/create_phone_otps.sql` | CREATE | OTP storage table |
| `android/app/.../OtpCodeReceiver.java` | CREATE | Broadcast receiver |
| `android/app/.../WhatsAppOtpModule.java` | CREATE | Native module |
| `android/app/.../WhatsAppOtpPackage.java` | CREATE | Package registration |
| `android/app/src/main/AndroidManifest.xml` | MODIFY | Register receiver |
| `android/app/.../MainApplication.java` | MODIFY | Add package |
| `lib/native/whatsapp-otp.ts` | CREATE | RN bridge |
| `lib/api/whatsapp-otp.ts` | CREATE | API wrapper |
| `app/login.tsx` | MODIFY | New login UI |
| `components/auth/OTPInput.tsx` | MODIFY | 4-digit default |
| `lib/auth-context.tsx` | MODIFY | Phone auth methods |
| `.env.example` | MODIFY | Document env vars |

---

## User Flow

```
┌─────────────────────────────────────┐
│          Login Screen               │
│  ┌─────────────────────────────┐    │
│  │ +91 │ 98765 43210           │    │
│  └─────────────────────────────┘    │
│                                     │
│  [  Send OTP via WhatsApp  ]        │
│                                     │
│  ─────── or ───────                 │
│                                     │
│  [  Continue as Guest  ]            │
└─────────────────────────────────────┘
              │
              ▼ Tap "Send OTP"

     App initiates WhatsApp handshake
     Edge Function sends OTP via authkey.io
     WhatsApp delivers message

              ▼ Zero-tap magic!
┌─────────────────────────────────────┐
│        OTP Received!                │
│                                     │
│      ┌───┐ ┌───┐ ┌───┐ ┌───┐        │
│      │ 1 │ │ 2 │ │ 3 │ │ 4 │  ✓     │
│      └───┘ └───┘ └───┘ └───┘        │
│                                     │
│  OTP auto-filled from WhatsApp      │
│                                     │
│  [        Verify        ]           │
└─────────────────────────────────────┘
              │
              ▼ Auto-verify or tap Verify
┌─────────────────────────────────────┐
│        Welcome to TGTET!            │
│              ✓                      │
└─────────────────────────────────────┘
```

---

## Fallback Behavior

If zero-tap fails:
1. **One-tap**: User taps button in WhatsApp to autofill
2. **Copy code**: User manually copies from WhatsApp

The app always shows OTP input fields as backup.

---

## iOS Support

Zero-tap is **Android only**. On iOS:
- OTP is sent via WhatsApp
- User manually copies the code
- Same great UX, just requires copy-paste

---

## Security Features

1. **Rate Limiting**: Max 3 OTP requests per phone per 10 minutes
2. **OTP Expiry**: 5-minute validity
3. **Attempt Limits**: Max 3 verification attempts per OTP
4. **Hash Storage**: OTP stored as bcrypt hash
5. **Phone Validation**: Strict 10-digit validation

---

## Expo Configuration

Since this requires native code, you need **Expo Dev Client**:

```bash
# Install dev client
npx expo install expo-dev-client

# Build development build
npx expo prebuild
npx expo run:android
```

---

## Checklist Before Implementation

- [ ] authkey.io account created
- [ ] authkey.io `authkey` obtained
- [ ] WhatsApp Zero-tap template created with:
  - [ ] Package name: `com.tgtet.app`
  - [ ] App signature hash (11 chars)
- [ ] Template ID (wid) noted
- [ ] Environment variables ready

---

## authkey.io API Reference

### Send OTP (GET Request)
```
https://console.authkey.io/restapi/request.php?
  authkey=YOUR_AUTHKEY&
  mobile=9876543210&
  country_code=91&
  wid=YOUR_TEMPLATE_ID&
  otp=1234
```

### Send OTP (POST Request)
```
POST https://console.authkey.io/restapi/requestjson.php
Headers:
  Authorization: Basic <Your Authkey>
  Content-Type: application/json

Body:
{
  "country_code": "91",
  "mobile": "9876543210",
  "wid": "YOUR_TEMPLATE_ID",
  "type": "text",
  "bodyValues": {"otp": "1234"}
}
```

### Check Balance
```
https://console.authkey.io/restapi/getbalance.php?authkey=YOUR_AUTHKEY
```

---

## Zero-tap WhatsApp Documentation Reference

For detailed WhatsApp zero-tap implementation:
- See `OTP_WSAP.MD` in project root
- Official docs: [WhatsApp Business API Authentication Templates](https://developers.facebook.com/docs/whatsapp/business-management-api/authentication-templates)
