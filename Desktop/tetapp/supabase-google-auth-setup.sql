-- ============================================
-- Google OAuth Authentication Setup for Supabase
-- With Free/Pro User Tier Management
-- ============================================

-- Enable UUID extension (if not already enabled)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- 1. USER PROFILES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS public.user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  full_name TEXT,
  avatar_url TEXT,

  -- Subscription tier management
  tier TEXT NOT NULL DEFAULT 'free' CHECK (tier IN ('free', 'pro')),
  subscription_status TEXT DEFAULT 'active' CHECK (subscription_status IN ('active', 'cancelled', 'expired', 'trial')),
  subscription_start_date TIMESTAMPTZ,
  subscription_end_date TIMESTAMPTZ,

  -- OAuth provider info
  provider TEXT DEFAULT 'google',
  provider_id TEXT,

  -- Usage tracking for free tier limits
  practice_sessions_count INTEGER DEFAULT 0,
  test_sessions_count INTEGER DEFAULT 0,
  monthly_sessions_limit INTEGER DEFAULT 10, -- Free tier limit
  last_session_reset_date TIMESTAMPTZ DEFAULT NOW(),

  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),

  UNIQUE(email)
);

-- Add index for faster lookups
CREATE INDEX IF NOT EXISTS idx_user_profiles_email ON public.user_profiles(email);
CREATE INDEX IF NOT EXISTS idx_user_profiles_tier ON public.user_profiles(tier);

-- ============================================
-- 2. SUBSCRIPTION PLANS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS public.subscription_plans (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL UNIQUE,
  tier TEXT NOT NULL CHECK (tier IN ('free', 'pro')),
  price_monthly DECIMAL(10, 2) DEFAULT 0.00,
  price_yearly DECIMAL(10, 2) DEFAULT 0.00,

  -- Features
  features JSONB DEFAULT '{}',
  monthly_sessions_limit INTEGER,
  has_analytics BOOLEAN DEFAULT false,
  has_revision_mode BOOLEAN DEFAULT false,
  has_custom_tests BOOLEAN DEFAULT false,

  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert default plans
INSERT INTO public.subscription_plans (name, tier, price_monthly, price_yearly, features, monthly_sessions_limit, has_analytics, has_revision_mode, has_custom_tests)
VALUES
  ('Free', 'free', 0.00, 0.00,
   '{"description": "Basic features for learning", "support": "Community"}',
   10, false, false, false),
  ('Pro', 'pro', 9.99, 99.99,
   '{"description": "Unlimited access with premium features", "support": "Priority Email"}',
   NULL, true, true, true)
ON CONFLICT (name) DO NOTHING;

-- ============================================
-- 3. USER SESSIONS TRACKING
-- ============================================
CREATE TABLE IF NOT EXISTS public.user_sessions_log (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  session_type TEXT NOT NULL CHECK (session_type IN ('practice', 'test', 'revision')),
  started_at TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ,
  questions_attempted INTEGER DEFAULT 0,

  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_user_sessions_user_id ON public.user_sessions_log(user_id);
CREATE INDEX IF NOT EXISTS idx_user_sessions_created_at ON public.user_sessions_log(created_at);

-- ============================================
-- 4. AUTO-CREATE USER PROFILE TRIGGER
-- ============================================
-- This function runs when a new user signs up via Google OAuth
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.user_profiles (
    id,
    email,
    full_name,
    avatar_url,
    tier,
    subscription_status,
    provider,
    provider_id
  )
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data->>'full_name',
    NEW.raw_user_meta_data->>'avatar_url',
    'free', -- Default to free tier
    'active',
    NEW.raw_app_meta_data->>'provider',
    NEW.raw_user_meta_data->>'provider_id'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Drop trigger if exists and recreate
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- ============================================
-- 5. UPDATE TIMESTAMP TRIGGER
-- ============================================
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS update_user_profiles_updated_at ON public.user_profiles;
CREATE TRIGGER update_user_profiles_updated_at
  BEFORE UPDATE ON public.user_profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

DROP TRIGGER IF EXISTS update_subscription_plans_updated_at ON public.subscription_plans;
CREATE TRIGGER update_subscription_plans_updated_at
  BEFORE UPDATE ON public.subscription_plans
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- ============================================
-- 6. SESSION LIMIT ENFORCEMENT FUNCTIONS
-- ============================================
-- Check if user can start a new session
CREATE OR REPLACE FUNCTION public.can_start_session(user_uuid UUID)
RETURNS BOOLEAN AS $$
DECLARE
  user_tier TEXT;
  current_sessions INTEGER;
  sessions_limit INTEGER;
  last_reset TIMESTAMPTZ;
BEGIN
  SELECT tier, practice_sessions_count + test_sessions_count, monthly_sessions_limit, last_session_reset_date
  INTO user_tier, current_sessions, sessions_limit, last_reset
  FROM public.user_profiles
  WHERE id = user_uuid;

  -- Pro users have unlimited sessions
  IF user_tier = 'pro' THEN
    RETURN TRUE;
  END IF;

  -- Reset counter if it's a new month
  IF EXTRACT(MONTH FROM last_reset) != EXTRACT(MONTH FROM NOW()) THEN
    UPDATE public.user_profiles
    SET practice_sessions_count = 0,
        test_sessions_count = 0,
        last_session_reset_date = NOW()
    WHERE id = user_uuid;
    RETURN TRUE;
  END IF;

  -- Check if under limit
  RETURN current_sessions < sessions_limit;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Increment session count
CREATE OR REPLACE FUNCTION public.increment_session_count(
  user_uuid UUID,
  session_type_param TEXT
)
RETURNS VOID AS $$
BEGIN
  IF session_type_param = 'practice' THEN
    UPDATE public.user_profiles
    SET practice_sessions_count = practice_sessions_count + 1
    WHERE id = user_uuid;
  ELSIF session_type_param = 'test' THEN
    UPDATE public.user_profiles
    SET test_sessions_count = test_sessions_count + 1
    WHERE id = user_uuid;
  END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================
-- 7. UPGRADE TO PRO FUNCTION
-- ============================================
CREATE OR REPLACE FUNCTION public.upgrade_to_pro(
  user_uuid UUID,
  duration_months INTEGER DEFAULT 1
)
RETURNS VOID AS $$
BEGIN
  UPDATE public.user_profiles
  SET
    tier = 'pro',
    subscription_status = 'active',
    subscription_start_date = NOW(),
    subscription_end_date = NOW() + (duration_months || ' months')::INTERVAL,
    monthly_sessions_limit = NULL -- Unlimited for pro
  WHERE id = user_uuid;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================
-- 8. DOWNGRADE TO FREE FUNCTION
-- ============================================
CREATE OR REPLACE FUNCTION public.downgrade_to_free(user_uuid UUID)
RETURNS VOID AS $$
BEGIN
  UPDATE public.user_profiles
  SET
    tier = 'free',
    subscription_status = 'cancelled',
    subscription_end_date = NOW(),
    monthly_sessions_limit = 10
  WHERE id = user_uuid;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================
-- 9. ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================
-- Enable RLS on all tables
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscription_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_sessions_log ENABLE ROW LEVEL SECURITY;

-- User Profiles Policies
-- Users can view their own profile
CREATE POLICY "Users can view own profile"
  ON public.user_profiles
  FOR SELECT
  USING (auth.uid() = id);

-- Users can update their own profile (except tier and subscription fields)
CREATE POLICY "Users can update own profile"
  ON public.user_profiles
  FOR UPDATE
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Service role can do anything (for server-side operations)
CREATE POLICY "Service role has full access to user_profiles"
  ON public.user_profiles
  FOR ALL
  USING (auth.role() = 'service_role');

-- Subscription Plans Policies
-- Anyone can view subscription plans
CREATE POLICY "Anyone can view subscription plans"
  ON public.subscription_plans
  FOR SELECT
  TO authenticated
  USING (active = true);

-- User Sessions Log Policies
-- Users can view their own sessions
CREATE POLICY "Users can view own sessions"
  ON public.user_sessions_log
  FOR SELECT
  USING (auth.uid() = user_id);

-- Users can insert their own sessions
CREATE POLICY "Users can insert own sessions"
  ON public.user_sessions_log
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Service role has full access
CREATE POLICY "Service role has full access to sessions"
  ON public.user_sessions_log
  FOR ALL
  USING (auth.role() = 'service_role');

-- ============================================
-- 10. HELPFUL QUERY FUNCTIONS
-- ============================================
-- Get user's current plan details
CREATE OR REPLACE FUNCTION public.get_user_plan(user_uuid UUID)
RETURNS TABLE (
  tier TEXT,
  subscription_status TEXT,
  sessions_used INTEGER,
  sessions_limit INTEGER,
  days_remaining INTEGER,
  has_analytics BOOLEAN,
  has_revision_mode BOOLEAN,
  has_custom_tests BOOLEAN
) AS $$
BEGIN
  RETURN QUERY
  SELECT
    up.tier,
    up.subscription_status,
    (up.practice_sessions_count + up.test_sessions_count) AS sessions_used,
    up.monthly_sessions_limit AS sessions_limit,
    CASE
      WHEN up.subscription_end_date IS NULL THEN NULL
      ELSE EXTRACT(DAY FROM (up.subscription_end_date - NOW()))::INTEGER
    END AS days_remaining,
    sp.has_analytics,
    sp.has_revision_mode,
    sp.has_custom_tests
  FROM public.user_profiles up
  LEFT JOIN public.subscription_plans sp ON up.tier = sp.tier
  WHERE up.id = user_uuid;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================
-- SETUP COMPLETE
-- ============================================
-- Next steps:
-- 1. Go to Supabase Dashboard > Authentication > Providers
-- 2. Enable Google provider
-- 3. Add your Google OAuth Client ID and Secret
-- 4. Configure authorized redirect URIs in Google Cloud Console:
--    - https://your-project-ref.supabase.co/auth/v1/callback
--    - exp://localhost:8081 (for Expo development)
--    - Your production app scheme
-- 5. Test authentication flow
--
-- For testing:
-- SELECT * FROM public.user_profiles;
-- SELECT * FROM public.subscription_plans;
-- SELECT public.can_start_session('user-uuid-here');
-- SELECT * FROM public.get_user_plan('user-uuid-here');
