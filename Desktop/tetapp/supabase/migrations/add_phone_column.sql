-- ============================================
-- TET App - Add Phone Column
-- Migration: Add phone field to users table
-- ============================================

-- Add phone column to user_profiles table
ALTER TABLE public.user_profiles ADD COLUMN IF NOT EXISTS phone TEXT;

-- Create index for phone lookups
CREATE INDEX IF NOT EXISTS idx_user_profiles_phone ON public.user_profiles(phone);

-- ============================================
-- VERIFY MIGRATION
-- ============================================

DO $$
BEGIN
  RAISE NOTICE '✅ Phone column added to users table!';
END $$;

/*
📝 Usage:
- Phone numbers are stored with country code: +919876543210
- Used for user contact and notifications
*/
