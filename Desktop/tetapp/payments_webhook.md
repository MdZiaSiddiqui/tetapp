# Razorpay Webhook Payment Tracking

## Overview

The webhook handler provides **backup payment verification** when client-side verification fails (e.g., app crash after payment).

## Database Schema

### New Columns in `payments` Table

| Column | Type | Description |
|--------|------|-------------|
| `webhook_verified_at` | TIMESTAMPTZ | Timestamp when webhook successfully processed the payment |
| `webhook_event_id` | TEXT | Razorpay webhook event identifier for idempotency |

### Column Details

**webhook_verified_at:**
- `NULL` = Payment was verified via client-side only
- Non-NULL = Webhook also processed this payment

**webhook_event_id:**
- Used for idempotency to prevent duplicate processing
- Format: `{event}_{created_at}` e.g., `payment.captured_1699999999`

## Useful Queries

### Check if a payment was processed via webhook
```sql
SELECT * FROM payments WHERE webhook_verified_at IS NOT NULL;
```

### Find payments that might have failed client-side verification
```sql
SELECT * FROM payments
WHERE status = 'created'
AND created_at < NOW() - INTERVAL '1 hour';
```

### Check webhook processing history
```sql
SELECT order_id, payment_id, status, webhook_verified_at, webhook_event_id
FROM payments
WHERE webhook_event_id IS NOT NULL
ORDER BY webhook_verified_at DESC;
```

## Setup Steps

### 1. Deploy Webhook Function
```bash
supabase functions deploy razorpay-webhook --project-ref thvucacdrsexfcpkswpv
```

### 2. Apply Migration
```bash
supabase db push --project-ref thvucacdrsexfcpkswpv
```

### 3. Configure in Razorpay Dashboard
1. Go to **Settings** > **Webhooks**
2. Add URL: `https://thvucacdrsexfcpkswpv.supabase.co/functions/v1/razorpay-webhook`
3. Select events: `payment.captured`, `payment.failed`
4. Copy the webhook secret

### 4. Set Webhook Secret
```bash
supabase secrets set RAZORPAY_WEBHOOK_SECRET=<secret_from_dashboard> --project-ref thvucacdrsexfcpkswpv
```

## How It Works

```
Client                          Server                          Razorpay
  |                               |                               |
  |-- create-razorpay-order ----->|                               |
  |<-- order_id ------------------|                               |
  |                               |                               |
  |-------- Open SDK ------------------------------------->       |
  |<------- Payment Success -------------------------------       |
  |                               |                               |
  |-- verify-razorpay-payment --->|  (may fail)                   |
  |                               |                               |
  |                               |<-- payment.captured (webhook) |
  |                               |-- Grant pro access            |
```

## Event Handling

| Event | Action |
|-------|--------|
| `payment.captured` | Grant pro access, update status to `captured` |
| `payment.failed` | Update status to `failed` |

## Testing

1. In Razorpay Dashboard > Webhooks > Click on your webhook
2. Click **"Test"** to send a test event
3. Check logs:
```bash
supabase functions logs razorpay-webhook --project-ref thvucacdrsexfcpkswpv
```
