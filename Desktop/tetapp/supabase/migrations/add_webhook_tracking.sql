-- ============================================
-- Add Webhook Tracking Columns to Payments Table
-- ============================================
--
-- This migration adds columns to track webhook processing for better
-- debugging and idempotency handling.
--

-- Add webhook tracking columns
ALTER TABLE public.payments ADD COLUMN IF NOT EXISTS webhook_verified_at TIMESTAMPTZ;
ALTER TABLE public.payments ADD COLUMN IF NOT EXISTS webhook_event_id TEXT;

-- Create index for webhook event ID (for idempotency checks)
CREATE INDEX IF NOT EXISTS idx_payments_webhook_event_id ON public.payments(webhook_event_id);

-- ============================================
-- VERIFICATION
-- ============================================

DO $$
BEGIN
  RAISE NOTICE '✅ Webhook tracking columns added to payments table';
  RAISE NOTICE '📊 New columns: webhook_verified_at, webhook_event_id';
  RAISE NOTICE '🔒 Index created for webhook_event_id';
END $$;

-- ============================================
-- NOTES
-- ============================================

/*
🔄 NEW COLUMNS:

webhook_verified_at: Timestamp when webhook successfully processed the payment
  - NULL means payment was verified via client-side only
  - Non-NULL means webhook also processed this payment

webhook_event_id: Razorpay webhook event identifier
  - Used for idempotency to prevent duplicate processing
  - Format: {event}_{created_at} e.g., "payment.captured_1699999999"

📝 USAGE:

To check if a payment was processed via webhook:
SELECT * FROM payments WHERE webhook_verified_at IS NOT NULL;

To find payments that might have failed client-side verification:
SELECT * FROM payments
WHERE status = 'created'
AND created_at < NOW() - INTERVAL '1 hour';

To check webhook processing history:
SELECT order_id, payment_id, status, webhook_verified_at, webhook_event_id
FROM payments
WHERE webhook_event_id IS NOT NULL
ORDER BY webhook_verified_at DESC;
*/
