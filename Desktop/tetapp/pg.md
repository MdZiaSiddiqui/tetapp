# Payment Gateway Integration Documentation

## Overview

This application uses **Razorpay** as the payment gateway to process Pro plan subscriptions. The integration follows a secure client-server architecture with server-side verification, webhook support, and automatic credential provisioning.

### Key Features

- Secure payment processing via Razorpay Checkout
- Server-side payment verification
- Webhook support for payment events
- Rate limiting on all payment endpoints
- Automatic Pro credential assignment
- Facebook Pixel tracking for purchases
- PostHog analytics integration
- Phone number prefilling for seamless checkout

---

## Architecture

### Components

```
┌─────────────────┐
│   Frontend      │
│  UnlockProClient│
└────────┬────────┘
         │
         │ 1. Create Order
         ▼
┌─────────────────────┐
│ /api/razorpay/order │
│  (Server Route)     │
└────────┬────────────┘
         │
         │ 2. Return Order ID
         ▼
┌─────────────────────┐
│  Razorpay Checkout  │
│   (Client Widget)   │
└────────┬────────────┘
         │
         │ 3. Payment Success
         ▼
┌──────────────────────┐
│ /api/razorpay/verify │
│   (Server Route)     │
└────────┬─────────────┘
         │
         │ 4. Verify & Assign Credentials
         ▼
┌──────────────────────┐
│  Supabase Database   │
│  - claim_pro_cred    │
│  - create_pro_user   │
└──────────────────────┘
```

### Parallel Webhook Flow

```
Razorpay Payment Event
         │
         ▼
┌───────────────────────┐
│ /api/razorpay/webhook │
│   (Server Route)      │
└────────┬──────────────┘
         │
         │ Store Event
         ▼
┌──────────────────────┐
│  razorpay_events     │
│  (Audit Table)       │
└──────────────────────┘
```

---

## Payment Flow

### Step 1: Order Creation

**Endpoint:** `POST /api/razorpay/order`

**Location:** `src/app/api/razorpay/order/route.ts:20`

**Request Body:**
```json
{
  "phone": "+919876543210" // Optional
}
```

**Process:**
1. Rate limit check (10 requests/minute per IP and per user)
2. Sanitize phone number (strip non-numeric characters except +)
3. Create Razorpay order with configured amount and currency
4. Attach metadata (phone, plan name, description) to order notes

**Response:**
```json
{
  "id": "order_xxx",
  "amount": 39900, // in paisa
  "currency": "INR",
  "receipt": "pro_1234567890_abcd1234",
  "status": "created",
  "notes": {
    "customer_phone": "+919876543210",
    "plan": "Supacharge TS-TET",
    "description": "TS-TET Pro"
  }
}
```

**Key Code Sections:**
- Order creation: `src/app/api/razorpay/order/route.ts:79-88`
- Rate limiting: `src/app/api/razorpay/order/route.ts:24-62`

---

### Step 2: Razorpay Checkout

**Component:** `UnlockProClient`

**Location:** `src/app/unlock-pro/UnlockProClient.tsx:82`

**Checkout Initialization:**
```typescript
const checkout = new window.Razorpay({
  key: PUBLIC_KEY,
  amount: order.amount,
  currency: order.currency,
  name: planName,
  description: planDescription,
  order_id: order.id,
  prefill: { contact: storedPhone },
  handler: async (response) => { /* ... */ },
  theme: { color: "#6a3bff" }
});
```

**Key Features:**
- Auto-loads Razorpay checkout.js script: `src/app/unlock-pro/UnlockProClient.tsx:43-59`
- Phone number prefilling from localStorage or URL params: `src/app/unlock-pro/UnlockProClient.tsx:114-174`
- Event handlers for payment.failed and modal.closed: `src/app/unlock-pro/UnlockProClient.tsx:278-298`
- PostHog tracking for checkout events: `src/app/unlock-pro/UnlockProClient.tsx:300-306`

---

### Step 3: Payment Verification

**Endpoint:** `POST /api/razorpay/verify`

**Location:** `src/app/api/razorpay/verify/route.ts:19`

**Request Body:**
```json
{
  "orderId": "order_xxx",
  "paymentId": "pay_xxx",
  "signature": "signature_xxx"
}
```

**Verification Steps:**

1. **Rate Limiting** (`src/app/api/razorpay/verify/route.ts:23-61`)
   - 60 requests/hour per IP
   - 60 requests/hour per user

2. **Signature Verification** (`src/app/api/razorpay/verify/route.ts:84-91`)
   ```typescript
   const isSignatureValid = razorpayClient.verifyPaymentSignature(
     { order_id: orderId, payment_id: paymentId },
     signature
   );
   ```
   - Uses HMAC SHA256 with Razorpay key secret
   - Implementation: `src/lib/payments/razorpay.ts:34-35`

3. **Payment Status Check** (`src/app/api/razorpay/verify/route.ts:93-100`)
   - Fetch payment from Razorpay API
   - Verify status is "captured"
   - Ensures payment is not just authorized but actually captured

4. **Amount & Currency Validation** (`src/app/api/razorpay/verify/route.ts:106-118`)
   - Verify amount matches expected price (39900 paisa = ₹399)
   - Verify currency is INR
   - Configuration: `src/lib/payments/config.ts:1-24`

5. **Credential Claiming** (`src/app/api/razorpay/verify/route.ts:125-143`)
   ```typescript
   const { data } = await supabase.rpc("claim_pro_credential", {
     p_phone: phone,
     p_payment_id: paymentId,
   });
   ```
   - Atomically reserves an unused credential from pool
   - Associates phone number and payment ID
   - Returns email and password

6. **User Creation/Upgrade** (`src/app/api/razorpay/verify/route.ts:155-166`)
   ```typescript
   const { data } = await supabase.rpc("create_pro_user", {
     p_email: credential.credential_email,
     p_password: credential.credential_password,
   });
   ```
   - Creates new Pro user or upgrades existing user
   - Sets pro_expires_at to far future date (2099)

**Response:**
```json
{
  "success": true,
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "pro_expires_at": "2099-12-31T23:59:59Z"
  },
  "credentials": {
    "email": "user@example.com",
    "password": "securePassword123"
  }
}
```

**Error Handling:**
- P0002 error code: No credentials available (503 response)
- Other errors: Generic 500 with support message
- All errors logged with context

---

### Step 4: Client-Side Post-Payment

**Location:** `src/app/unlock-pro/UnlockProClient.tsx:211-266`

**Process:**
1. Display "Verifying your payment..." message
2. Call /api/razorpay/verify endpoint
3. Store credentials in localStorage: `src/app/unlock-pro/UnlockProClient.tsx:61-68`
   - `userEmail`
   - `userPassword`
   - `proPaymentId`
   - `proCredentialsCachedAt`
4. Track Facebook Pixel Purchase event: `src/app/unlock-pro/UnlockProClient.tsx:239-247`
   ```typescript
   trackPurchase({
     value: 399,
     currency: 'INR',
     transaction_id: response.razorpay_payment_id,
     content_name: 'TS TET Pro Access',
     content_ids: ['pro-plan'],
     num_items: 1,
   });
   ```
5. Redirect to `/login?unlocked=1` after 800ms

---

## Webhook Integration

**Endpoint:** `POST /api/razorpay/webhook`

**Location:** `src/app/api/razorpay/webhook/route.ts:39`

### Purpose
Webhooks provide server-side notifications about payment events asynchronously. While the main payment flow uses the `/verify` endpoint for immediate activation, webhooks serve as:
- Audit trail for all payment events
- Backup mechanism for failed verifications
- Foundation for future automated workflows

### Webhook Verification

**Signature Validation** (`src/app/api/razorpay/webhook/route.ts:52-57`)
```typescript
const isValid = validateWebhookSignature(
  rawBody,
  signature,
  WEBHOOK_SECRET
);
```

**Security:**
- Raw body required for signature validation
- Uses `x-razorpay-signature` header
- Validates against `RAZORPAY_WEBHOOK_SECRET`
- Rejects invalid signatures with 400 error

### Event Storage

**Database Table:** `razorpay_events`

**Fields Stored:**
- `event_id`: Unique event identifier
- `event_type`: e.g., "payment.captured", "order.paid"
- `order_id`: Associated order ID
- `payment_id`: Payment ID if applicable
- `status`: Payment/order status
- `payload`: Full event JSON for auditing

**Implementation:** `src/app/api/razorpay/webhook/route.ts:70-83`

**Duplicate Handling:**
- Primary key constraint on event_id
- Silently ignores duplicate events (error code 23505)
- Other errors are logged but don't fail the webhook

### Supported Events

Common Razorpay events stored:
- `payment.authorized`
- `payment.captured`
- `payment.failed`
- `order.paid`
- `refund.created`
- `refund.processed`

---

## Security Features

### 1. Rate Limiting

**Implementation:** Uses in-memory rate limiter

**Limits:**

| Endpoint | Bucket | Limit | Window |
|----------|--------|-------|--------|
| /order (IP) | `razorpay:order:ip` | 10 req | 1 minute |
| /order (User) | `razorpay:order:user` | 10 req | 1 minute |
| /verify (IP) | `razorpay:verify:ip` | 60 req | 1 hour |
| /verify (User) | `razorpay:verify:user` | 60 req | 1 hour |

**Response on Rate Limit:**
```json
{
  "error": "Too many attempts. Please try again later."
}
```
**Headers:** `Retry-After: <seconds>`

### 2. Input Sanitization

**Phone Number Sanitization:**
```typescript
const sanitizePhone = (phone: string) => phone.replace(/[^0-9+]/g, "");
```
- Location: `src/app/api/razorpay/order/route.ts:18`
- Removes all characters except digits and +
- Applied before storing in order notes and database

**String Normalization:**
```typescript
const normalize = (value: unknown): string =>
  typeof value === "string" ? value.trim() : "";
```
- Location: `src/app/api/razorpay/verify/route.ts:8`
- Ensures type safety and trims whitespace

### 3. Payment Verification

**Multi-Layer Verification:**
1. Cryptographic signature validation (HMAC SHA256)
2. Payment status check (must be "captured")
3. Order ID matching
4. Amount validation (exact match required)
5. Currency validation (must be INR)

**Server-Only Secrets:**
```typescript
import "server-only"; // Ensures module never runs on client
```
- Location: `src/lib/payments/razorpay.ts:1`
- Prevents accidental secret exposure to browser

### 4. Webhook Signature Verification

All webhook requests must:
- Provide valid `x-razorpay-signature` header
- Match signature computed from raw body + webhook secret
- Razorpay utility validates using HMAC SHA256

---

## Configuration

### Environment Variables

**Required:**

```env
# Server-side keys (never exposed to client)
RAZORPAY_KEY_ID=rzp_live_xxx
RAZORPAY_KEY_SECRET=your_secret_key

# Client-side key (safe to expose)
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_live_xxx

# Webhook verification
RAZORPAY_WEBHOOK_SECRET=your_webhook_secret
```

**Test Mode:**
```env
RAZORPAY_TEST_KEY_ID=rzp_test_xxx
RAZORPAY_TEST_SECRET_KEY=test_secret_key
NEXT_PUBLIC_RAZORPAY_TEST_KEY_ID=rzp_test_xxx
```

**Optional Overrides:**
```env
PRO_PLAN_PRICE_INR=399
PRO_PLAN_NAME=Supacharge TS-TET
PRO_PLAN_DESCRIPTION=TS-TET Pro
PRO_PLAN_CURRENCY=INR
```

### Payment Configuration

**File:** `src/lib/payments/config.ts`

**Defaults:**
- Price: ₹399 (39,900 paisa)
- Plan Name: "Supacharge TS-TET"
- Description: "TS-TET Pro"
- Currency: INR

**Price Conversion:**
```typescript
export const PRO_PLAN_PRICE_PAISA = Math.round(PRO_PLAN_PRICE_INR * 100);
```
- Razorpay requires amounts in smallest currency unit (paisa for INR)

### Razorpay Client Initialization

**File:** `src/lib/payments/razorpay.ts`

**Singleton Pattern:**
```typescript
let client: Razorpay | null = null;

const getClient = (): Razorpay => {
  if (!client) {
    client = new Razorpay({ key_id: KEY_ID, key_secret: KEY_SECRET });
  }
  return client;
};
```

**Key Fallback Chain:**
1. `RAZORPAY_KEY_ID`
2. `RAZORPAY_TEST_KEY_ID`
3. `NEXT_PUBLIC_RAZORPAY_KEY_ID`
4. `NEXT_PUBLIC_RAZORPAY_TEST_KEY_ID`

**Error on Missing Credentials:**
Throws error if no valid key pair found: `src/lib/payments/razorpay.ts:14-18`

---

## Database Integration

### Tables

#### 1. `pro_credentials_pool`

**Purpose:** Pre-provisioned email/password pairs for Pro users

**Schema:**
```sql
CREATE TABLE pro_credentials_pool (
  id BIGSERIAL PRIMARY KEY,
  credential_email TEXT UNIQUE NOT NULL,
  credential_password TEXT NOT NULL,
  assigned BOOLEAN DEFAULT false,
  assigned_to_phone TEXT,
  assigned_to_payment_id TEXT,
  assigned_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);
```

**Provisioning Credentials:**
```sql
WITH created AS (
  SELECT * FROM public.create_pro_user('user@1.1', 'paSsword#a12')
)
INSERT INTO public.pro_credentials_pool (credential_email, credential_password)
VALUES ('user@1.1', 'paSsword#a12')
ON CONFLICT (credential_email) DO UPDATE
  SET credential_password = excluded.credential_password,
      assigned = false,
      assigned_to_phone = null,
      assigned_to_payment_id = null,
      assigned_at = null,
      updated_at = timezone('utc', now());
```

#### 2. `razorpay_events`

**Purpose:** Audit log for all webhook events

**Schema:**
```sql
CREATE TABLE razorpay_events (
  id BIGSERIAL PRIMARY KEY,
  event_id TEXT UNIQUE, -- from x-razorpay-event-id header
  event_type TEXT, -- e.g., "payment.captured"
  order_id TEXT,
  payment_id TEXT,
  status TEXT,
  payload JSONB, -- full event data
  created_at TIMESTAMPTZ DEFAULT now()
);
```

### Stored Procedures

#### 1. `claim_pro_credential`

**Signature:**
```sql
claim_pro_credential(p_phone TEXT, p_payment_id TEXT)
RETURNS TABLE(credential_email TEXT, credential_password TEXT)
```

**Behavior:**
- Atomically reserves first available credential
- Sets `assigned = true`
- Records phone and payment_id
- Sets `assigned_at` timestamp
- Returns claimed credential

**Error:** Raises `P0002` if no credentials available

**Called in:** `src/app/api/razorpay/verify/route.ts:125`

#### 2. `create_pro_user`

**Signature:**
```sql
create_pro_user(p_email TEXT, p_password TEXT)
RETURNS TABLE(id UUID, email TEXT, pro_expires_at TIMESTAMPTZ)
```

**Behavior:**
- Creates new user in `auth.users` if doesn't exist
- Updates existing user's `pro_expires_at` to 2099-12-31
- Returns user record

**Called in:** `src/app/api/razorpay/verify/route.ts:155`

---

## TypeScript Types

**File:** `src/types/razorpay.d.ts`

### Client-Side Types

```typescript
interface RazorpayCheckoutHandlerResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

interface RazorpayCheckoutFailedResponse {
  error: {
    code: string;
    description: string;
    source: string;
    step: string;
    reason: string;
    metadata?: {
      order_id?: string;
      payment_id?: string;
    };
  };
}

interface RazorpayCheckoutOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description?: string;
  image?: string;
  order_id: string;
  handler: (response: RazorpayCheckoutHandlerResponse) => void;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  notes?: Record<string, string>;
  theme?: {
    color?: string;
  };
}

interface Window {
  Razorpay: new (options: RazorpayCheckoutOptions) => RazorpayInstance;
}
```

---

## Testing

### Local Development with Webhooks

1. **Start Next.js dev server:**
   ```bash
   npm run dev
   ```

2. **Start ngrok tunnel:**
   ```bash
   ngrok http 3000
   ```

3. **Configure Razorpay Dashboard:**
   - Navigate to Settings > Webhooks
   - Add webhook URL: `https://your-ngrok-url.ngrok.io/api/razorpay/webhook`
   - Select events to receive
   - Generate webhook secret
   - Add secret to `.env.local` as `RAZORPAY_WEBHOOK_SECRET`

### Test Payment Flow

1. **Navigate to checkout:**
   ```
   http://localhost:3000/unlock-pro
   ```

2. **Checkout opens automatically**

3. **Use Razorpay test card:**
   - Card Number: `4111 1111 1111 1111`
   - Expiry: `12/25` (any future date)
   - CVV: `123` (any 3 digits)
   - OTP: Any 6 digits

4. **Verify success flow:**
   - Credentials appear on screen
   - Redirect to `/login?unlocked=1`
   - Credentials saved in localStorage
   - Facebook Pixel Purchase event fired

5. **Check database:**
   ```sql
   -- View claimed credential
   SELECT * FROM pro_credentials_pool
   WHERE assigned_to_payment_id = 'pay_xxx';

   -- View webhook events
   SELECT * FROM razorpay_events
   ORDER BY created_at DESC
   LIMIT 10;
   ```

### Test Scenarios

#### Success Path
1. Create order → Success
2. Complete payment → Success
3. Verify payment → Credentials returned
4. Login with credentials → Access granted

#### Error Scenarios

**No credentials available:**
- Expected: 503 error with message to contact support
- Database: All credentials in pool have `assigned = true`

**Invalid signature:**
- Expected: 400 error "Invalid payment signature"
- Cause: Tampered payment response

**Payment not captured:**
- Expected: 409 error "Payment is not captured yet"
- Cause: Payment authorized but not captured by Razorpay

**Amount mismatch:**
- Expected: 400 error "Payment amount is invalid"
- Cause: Payment amount doesn't match configured price

**Rate limit exceeded:**
- Expected: 429 error with Retry-After header
- Cause: Too many requests from same IP/user

---

## Error Handling

### Frontend Error States

**Component:** `UnlockProClient`

**Error Phase:** `src/app/unlock-pro/UnlockProClient.tsx:70-75`
```typescript
type FlowPhase = "opening" | "processing" | "error";

type FlowState = {
  phase: FlowPhase;
  message: string;
};
```

**Error Display:**
- Card title changes to "Payment Incomplete"
- Error message displayed prominently
- Retry button appears
- Motivational message: "Failure is the stepping stone to success."

**Common Error Messages:**

1. **Script load failure:**
   ```
   "Unable to load Razorpay checkout. Check your connection and try again."
   ```

2. **Order creation failure:**
   ```
   "Unable to create a payment order. Please try again."
   ```

3. **Payment failed:**
   ```
   "Payment was not completed. If an amount was deducted,
    it will be refunded automatically."
   ```

4. **Verification failure:**
   ```
   "We could not verify the payment. Please contact support
    with your payment ID."
   ```

5. **Modal closed:**
   ```
   "Checkout was closed before payment could complete.
    Click retry to try again."
   ```

### Backend Error Responses

**Standard Error Format:**
```json
{
  "error": "Human-readable error message"
}
```

**HTTP Status Codes:**

| Code | Meaning | Example |
|------|---------|---------|
| 400 | Bad Request | Invalid signature, missing fields |
| 409 | Conflict | Payment not captured yet |
| 429 | Too Many Requests | Rate limit exceeded |
| 500 | Internal Server Error | Razorpay API failure |
| 503 | Service Unavailable | No credentials available |

### Logging

**Server-Side Logging:**
```typescript
console.error("razorpay order create failed", error);
console.error("razorpay verify failed", error);
console.error("razorpay webhook: invalid signature", { eventId });
```

**Client-Side Logging:**
```typescript
console.error("unlock-pro: order creation failed", error);
console.error("unlock-pro: payment failed", failure);
console.error("unlock-pro: verification failed", error);
```

---

## Analytics & Tracking

### Facebook Pixel

**Implementation:** `src/lib/facebookPixel.ts`

**Purchase Event:** `src/app/unlock-pro/UnlockProClient.tsx:239-247`
```typescript
trackPurchase({
  value: 399,
  currency: 'INR',
  transaction_id: response.razorpay_payment_id,
  content_name: 'TS TET Pro Access',
  content_ids: ['pro-plan'],
  num_items: 1,
});
```

**Triggers:** On successful payment verification, before redirect

### PostHog

**Checkout Opened Event:** `src/app/unlock-pro/UnlockProClient.tsx:300-306`
```typescript
posthog.capture("checkout_widget_opened", {
  page: "unlock-pro",
  provider: "razorpay",
  orderId: order.id,
  amount: order.amount,
  currency: order.currency,
});
```

**Custom Events:** Can be extended for additional tracking needs

---

## Phone Number Management

### Storage Keys

**Constants:**
- `PRO_CHECKOUT_PHONE_STORAGE_KEY`: For checkout flow
- `TRIAL_PHONE_STORAGE_KEY`: From trial/demo flow

**Priority:**
1. Phone from URL parameter (`?phone=+919876543210`)
2. Phone from Pro checkout localStorage
3. Phone from trial localStorage

### Validation

**Function:** `isValidPhoneNumber(phone: string)`
- Basic format validation
- Ensures phone is suitable for Razorpay prefill

**Sanitization:** `sanitizePhoneNumber(phone: string)`
- Removes all non-numeric characters except +
- Consistent format for storage and API calls

---

## Best Practices

### Security
1. Never expose `RAZORPAY_KEY_SECRET` to client
2. Always verify payment signature on server
3. Validate amount and currency on server
4. Use rate limiting on all payment endpoints
5. Store webhook events for audit trail
6. Validate webhook signatures

### User Experience
1. Auto-open checkout on `/unlock-pro` page load
2. Prefill phone number from previous interactions
3. Show clear error messages with retry option
4. Prevent page unload during payment verification
5. Display progress indicators during async operations
6. Redirect to login automatically after success

### Error Handling
1. Log all errors with context
2. Provide user-friendly error messages
3. Offer retry mechanism for transient failures
4. Direct users to support for critical issues
5. Store payment ID for support reference

### Testing
1. Use Razorpay test mode for development
2. Test all error scenarios
3. Verify webhook signature validation
4. Test rate limiting behavior
5. Check credential pool depletion scenario
6. Validate analytics tracking

---

## Common Issues & Solutions

### Issue: "No credentials available" error

**Cause:** Credential pool is empty

**Solution:**
```sql
-- Provision more credentials
WITH created AS (
  SELECT * FROM public.create_pro_user('newuser@example.com', 'SecurePass123')
)
INSERT INTO public.pro_credentials_pool (credential_email, credential_password)
VALUES ('newuser@example.com', 'SecurePass123');
```

### Issue: Webhook signature validation fails

**Cause:** Incorrect webhook secret or body parsing

**Solution:**
1. Verify `RAZORPAY_WEBHOOK_SECRET` matches dashboard
2. Ensure raw body is used for signature validation
3. Check no middleware is parsing body before webhook handler

### Issue: Payment succeeds but verification fails

**Cause:** Network timeout, server error, or race condition

**Solution:**
1. Check Razorpay dashboard for payment status
2. Manually verify using payment ID
3. User should contact support with payment ID
4. Support can manually assign credentials

### Issue: Rate limit triggering for legitimate users

**Cause:** Shared IP (office, VPN) or rapid retries

**Solution:**
1. Increase rate limits in code if appropriate
2. Implement exponential backoff on client side
3. Show clear "Retry-After" message to users

---

## Future Enhancements

### Potential Improvements

1. **Automated Webhook Processing**
   - Currently webhooks only store events
   - Could implement automatic credential assignment
   - Retry failed verification attempts

2. **Subscription Management**
   - Add subscription renewal support
   - Implement expiration handling
   - Email notifications for expiring subscriptions

3. **Refund Handling**
   - Webhook listener for refund events
   - Automatic Pro access revocation
   - Update credential pool on refund

4. **Multiple Payment Methods**
   - Add UPI, Netbanking, Wallet options
   - Payment method preferences
   - Region-specific payment options

5. **Enhanced Analytics**
   - Conversion funnel tracking
   - Abandonment analysis
   - Revenue reporting dashboard

6. **Improved Error Recovery**
   - Automatic retry for transient failures
   - Support ticket auto-creation
   - Payment reconciliation tool

---

## Support & Debugging

### Debugging Checklist

1. **Check environment variables:**
   ```bash
   echo $RAZORPAY_KEY_ID
   echo $NEXT_PUBLIC_RAZORPAY_KEY_ID
   echo $RAZORPAY_WEBHOOK_SECRET
   ```

2. **Verify Razorpay dashboard:**
   - Check payment status
   - View webhook logs
   - Confirm webhook URL is correct

3. **Check server logs:**
   ```bash
   # Filter for razorpay errors
   grep "razorpay" logs/app.log
   ```

4. **Inspect database:**
   ```sql
   -- Check credential availability
   SELECT COUNT(*) FROM pro_credentials_pool WHERE assigned = false;

   -- View recent assignments
   SELECT * FROM pro_credentials_pool
   WHERE assigned = true
   ORDER BY assigned_at DESC
   LIMIT 10;

   -- Check webhook events
   SELECT event_type, status, created_at
   FROM razorpay_events
   ORDER BY created_at DESC
   LIMIT 20;
   ```

5. **Browser console:**
   - Check for JavaScript errors
   - Verify Razorpay script loaded
   - Inspect network requests

### Support Information

**Required for Support:**
1. Payment ID (`pay_xxx`)
2. Order ID (`order_xxx`)
3. Timestamp of payment attempt
4. Error message displayed
5. Phone number used (for credential lookup)

**Support Flow:**
1. User provides payment details
2. Support verifies payment in Razorpay dashboard
3. If payment captured but credentials not assigned:
   - Manually run credential claim
   - Provide credentials to user
4. If payment failed/pending:
   - Check for automatic refund
   - Advise user on next steps

---

## File Reference

### Core Payment Files

| File | Purpose | Key Functions |
|------|---------|---------------|
| `src/lib/payments/razorpay.ts` | Razorpay client singleton | `getClient()`, `verifyPaymentSignature()` |
| `src/lib/payments/config.ts` | Payment configuration | Price, plan name, currency |
| `src/app/api/razorpay/order/route.ts` | Order creation endpoint | Rate limiting, order creation |
| `src/app/api/razorpay/verify/route.ts` | Payment verification | Signature verification, credential assignment |
| `src/app/api/razorpay/webhook/route.ts` | Webhook handler | Event storage, signature validation |
| `src/app/unlock-pro/UnlockProClient.tsx` | Checkout UI component | Razorpay integration, user flow |
| `src/types/razorpay.d.ts` | TypeScript definitions | Razorpay types |

---

## Conclusion

This payment gateway integration provides a secure, reliable, and user-friendly checkout experience. Key strengths:

- **Security:** Multi-layer verification, rate limiting, server-side validation
- **Reliability:** Error handling, retry mechanisms, audit logging
- **User Experience:** Auto-checkout, phone prefilling, clear status messages
- **Maintainability:** Clean separation of concerns, comprehensive types
- **Observability:** Detailed logging, analytics tracking, webhook storage

The architecture is designed to be extensible for future enhancements while maintaining security and reliability as primary concerns.
