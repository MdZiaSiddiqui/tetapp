# MSG91 Phone Authentication Setup Guide

This guide will help you set up MSG91 OTP-based phone authentication for the TET app.

## Overview

The app uses MSG91's OTP service to send and verify one-time passwords (OTPs) via SMS for user authentication. This replaces the previous Google Sign-In authentication.

## Prerequisites

1. A MSG91 account ([Sign up here](https://control.msg91.com/signup/))
2. Credits in your MSG91 account for sending SMS
3. Your app's environment configured with Supabase

## Step 1: Create MSG91 Account

1. Go to [MSG91 Sign Up](https://control.msg91.com/signup/)
2. Create an account using your email
3. Verify your email address
4. Complete the KYC process (required for sending SMS in production)

## Step 2: Get Your Auth Key

1. Log in to [MSG91 Dashboard](https://control.msg91.com/app/)
2. Navigate to **Settings** → **API Keys**
3. Copy your **Auth Key** (looks like: `123456Abcd7890Efgh12`)
4. Keep this key secure - you'll add it to your `.env` file

## Step 3: Create an OTP Template

MSG91 requires you to create a template for OTP messages.

### Creating the Template:

1. In MSG91 Dashboard, go to **OTP** → **Templates**
2. Click **Create New Template**
3. Fill in the template details:

   **Template Name:** `TET_App_OTP` (or your preferred name)

   **Message Content:**
   ```
   Your TET verification code is ##OTP##. Valid for 10 minutes. Do not share this code with anyone.
   ```

   **Variables:**
   - `##OTP##` - This will be replaced with the actual 6-digit OTP

4. Submit the template for approval (usually takes a few hours in production)
5. Once approved, copy the **Template ID** (looks like: `6571234567890abcdef12345`)

### Template Variables (Optional)

You can add custom variables to your template:
- `##Param1##` - Custom parameter 1
- `##Param2##` - Custom parameter 2
- `##Param3##` - Custom parameter 3

Example with variables:
```
Hi ##Param1##, your TET verification code is ##OTP##. Valid for 10 minutes.
```

## Step 4: Add Credits to Your Account

1. Go to **Billing** → **Add Credits**
2. Purchase SMS credits
   - Development: Start with a small pack (~500 SMS)
   - Production: Based on expected user volume

**Pricing:** Check current rates on [MSG91 Pricing](https://msg91.com/pricing)

## Step 5: Configure Your App

### Update .env File

1. Copy `.env.example` to `.env` if you haven't already:
   ```bash
   cp .env.example .env
   ```

2. Add your MSG91 credentials to `.env`:
   ```env
   # MSG91 OTP SERVICE (REQUIRED)
   EXPO_PUBLIC_MSG91_AUTH_KEY=your-auth-key-here
   EXPO_PUBLIC_MSG91_TEMPLATE_ID=your-template-id-here
   ```

3. Replace the placeholder values:
   - `your-auth-key-here` → Your actual MSG91 Auth Key from Step 2
   - `your-template-id-here` → Your Template ID from Step 3

### Example Configuration:
```env
# Supabase Configuration
EXPO_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# MSG91 OTP Service
EXPO_PUBLIC_MSG91_AUTH_KEY=123456Abcd7890Efgh12
EXPO_PUBLIC_MSG91_TEMPLATE_ID=6571234567890abcdef12345

# App Configuration
EXPO_PUBLIC_APP_NAME=TGTET
EXPO_PUBLIC_ENV=development
```

## Step 6: Install Dependencies

The app already has all required dependencies. Just run:

```bash
npm install
# or
bun install
```

**Note:** The Google Sign-In package has been removed from `package.json`.

## Step 7: Test the Authentication Flow

### Development Testing

1. Start the development server:
   ```bash
   npm start
   # or
   bun start
   ```

2. Open the app in Expo Go or your development build

3. Navigate to the Login screen

4. Test the phone auth flow:
   - Enter your phone number with country code
   - Click "Send OTP"
   - Check your phone for the OTP SMS
   - Enter the 6-digit code
   - Click "Verify & Continue"
   - You should be redirected to the home screen

### Testing Tips

**Use Test Numbers (Development):**
- MSG91 provides test numbers for development
- Check MSG91 docs for current test numbers
- These don't deduct credits

**Test OTP Codes:**
- In development, you can see OTPs in MSG91 Dashboard → OTP → Logs
- Monitor delivery status and any errors

**Common Issues:**
- **OTP not received:** Check MSG91 logs for delivery status
- **Invalid OTP:** Verify template is approved and active
- **Auth key error:** Double-check the key in `.env` file
- **Template error:** Ensure template ID is correct

## Step 8: Production Setup

Before going to production:

### 1. Complete KYC Verification
- Submit required documents to MSG91
- Wait for approval (usually 1-2 business days)
- Verified accounts have higher sending limits

### 2. Get Your Sender ID Approved
- Submit your brand name/sender ID
- Follow MSG91's sender ID guidelines
- Approval required for production use

### 3. Update Security Settings
- Enable IP whitelisting in MSG91 dashboard
- Set rate limits to prevent abuse
- Monitor usage and set up alerts

### 4. Test Thoroughly
- Test with multiple phone numbers
- Test different country codes
- Test resend OTP functionality
- Test error scenarios (invalid OTP, expired OTP)

### 5. Configure Supabase
- Ensure Supabase project is in production mode
- Set up proper Row Level Security (RLS) policies
- Configure user metadata for phone numbers

## How It Works

### Authentication Flow:

1. **User enters phone number** → PhoneInput component validates format
2. **Click "Send OTP"** → Calls MSG91 API to send SMS
3. **MSG91 sends SMS** → User receives 6-digit OTP on their phone
4. **User enters OTP** → OTPInput component captures code
5. **Click "Verify"** → Verifies OTP with MSG91
6. **OTP verified** → Creates/signs in user in Supabase
7. **Session created** → User redirected to home screen

### Components:

- **`lib/api/msg91.ts`** - MSG91 API integration (send, verify, resend)
- **`components/auth/PhoneInput.tsx`** - Phone number input with country picker
- **`components/auth/OTPInput.tsx`** - 6-digit OTP input boxes
- **`lib/auth-context.tsx`** - Auth state management and session handling
- **`app/login.tsx`** - Login UI with phone auth flow

## API Endpoints Used

### Send OTP
```
POST https://control.msg91.com/api/v5/otp
Params: template_id, mobile, authkey, realTimeResponse
```

### Verify OTP
```
GET https://control.msg91.com/api/v5/otp/verify
Params: mobile, otp, authkey
```

### Resend OTP
```
GET https://control.msg91.com/api/v5/otp/retry
Params: mobile, authkey, retrytype
```

## Customization

### Change OTP Length
OTP is currently 6 digits (MSG91 default). To change:
1. Update MSG91 template settings
2. Update OTPInput component `length` prop in `login.tsx`

### Change Resend Timer
Default is 60 seconds. To change:
```tsx
// In login.tsx
setResendTimer(90); // Change to 90 seconds
```

### Add Template Variables
Pass custom params when sending OTP:
```typescript
// In lib/auth-context.tsx
await sendOTP(phoneNumber, {
  Param1: 'User Name',
  Param2: 'Custom Message'
});
```

### Customize Phone Input
Edit `components/auth/PhoneInput.tsx`:
- Add/remove country codes in `COUNTRY_CODES` array
- Change default country (currently India +91)
- Modify formatting logic

## Troubleshooting

### OTP Not Received
1. Check MSG91 Dashboard → OTP → Logs for delivery status
2. Verify phone number format (must include country code)
3. Check account credits
4. Verify template is approved and active

### "MSG91 credentials not configured" Error
1. Ensure `.env` file exists in project root
2. Verify variable names: `EXPO_PUBLIC_MSG91_AUTH_KEY` and `EXPO_PUBLIC_MSG91_TEMPLATE_ID`
3. Restart Expo dev server after changing `.env`

### "Invalid OTP" Error
1. Verify you're entering the correct code from SMS
2. Check if OTP has expired (default 10 minutes)
3. Try resending OTP

### Session Not Created After Verification
1. Check Supabase connection
2. Verify Supabase environment variables
3. Check browser console for Supabase errors

### Package Installation Issues
After removing Google Sign-In:
```bash
# Remove node_modules and reinstall
rm -rf node_modules
npm install

# Clear Metro bundler cache
npx expo start --clear
```

## Security Best Practices

1. **Never commit `.env` file** - It's already in `.gitignore`
2. **Rotate API keys regularly** - Update in MSG91 dashboard
3. **Monitor usage** - Set up alerts for unusual activity
4. **Rate limiting** - Implement on your backend to prevent abuse
5. **OTP expiration** - MSG91 default is 10 minutes (configurable)
6. **Secure Supabase** - Use RLS policies to protect user data

## Support & Resources

- **MSG91 Documentation:** [https://docs.msg91.com/](https://docs.msg91.com/)
- **MSG91 Dashboard:** [https://control.msg91.com/app/](https://control.msg91.com/app/)
- **MSG91 Support:** [support@msg91.com](mailto:support@msg91.com)
- **Supabase Docs:** [https://supabase.com/docs](https://supabase.com/docs)

## Cost Estimate

**MSG91 SMS Pricing (as of 2024):**
- India: ₹0.15 - ₹0.25 per SMS
- International: Varies by country ($0.01 - $0.10 per SMS)

**Monthly Cost Example:**
- 1,000 users signing up/month
- Average 1.5 OTPs per user (including resends)
- Total: 1,500 SMS
- Cost: ₹225 - ₹375 per month (~$3-5 USD)

## Migration from Google Sign-In

If you had existing users with Google Sign-In:

1. **Existing users can't auto-migrate** - They'll need to sign up again with phone
2. **Data preservation** - Ensure user data is linked by email or user ID
3. **Communication** - Notify users about the auth method change
4. **Transition period** - Consider keeping both methods temporarily (requires additional setup)

## Next Steps

✅ MSG91 account created
✅ Auth key and template ID obtained
✅ `.env` file configured
✅ Dependencies installed
✅ Test authentication successful

**You're all set!** 🎉

For issues or questions, refer to the troubleshooting section or contact support.
