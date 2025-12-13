-- WhatsApp OTP Storage Table
-- Stores hashed OTPs for phone verification

CREATE TABLE IF NOT EXISTS phone_otps (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  phone TEXT NOT NULL,
  otp_hash TEXT NOT NULL,
  expires_at TIMESTAMPTZ NOT NULL,
  attempts INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for fast phone lookups
CREATE INDEX IF NOT EXISTS idx_phone_otps_phone ON phone_otps(phone);

-- Index for expiry cleanup
CREATE INDEX IF NOT EXISTS idx_phone_otps_expires ON phone_otps(expires_at);

-- RLS policies
ALTER TABLE phone_otps ENABLE ROW LEVEL SECURITY;

-- Only allow service role to access this table (edge function uses service role)
CREATE POLICY "Service role full access on phone_otps" ON phone_otps
  FOR ALL
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

-- Function to cleanup expired OTPs (can be called periodically)
CREATE OR REPLACE FUNCTION cleanup_expired_otps()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  DELETE FROM phone_otps WHERE expires_at < NOW();
END;
$$;

-- Comment on table
COMMENT ON TABLE phone_otps IS 'Stores hashed OTPs for WhatsApp phone verification';
COMMENT ON COLUMN phone_otps.phone IS '10-digit phone number without country code';
COMMENT ON COLUMN phone_otps.otp_hash IS 'bcrypt hash of the OTP';
COMMENT ON COLUMN phone_otps.expires_at IS 'OTP expiration timestamp';
COMMENT ON COLUMN phone_otps.attempts IS 'Number of verification attempts';
