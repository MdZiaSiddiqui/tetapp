-- ============================================
-- Session History - Store complete practice/test session data
-- ============================================

-- Create practice_sessions table
CREATE TABLE IF NOT EXISTS practice_sessions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  subject_id TEXT NOT NULL,
  session_number INTEGER NOT NULL,
  mode TEXT CHECK (mode IN ('practice', 'test')) NOT NULL,
  paper TEXT CHECK (paper IN ('Paper 1', 'Paper 2')),
  language TEXT CHECK (language IN ('English', 'Telugu', 'Urdu')),

  -- Session data
  questions JSONB NOT NULL,           -- Full question objects array
  answers JSONB NOT NULL,             -- User answers: { "0": "A", "1": "B", ... }
  marked_for_review JSONB DEFAULT '[]', -- Array of question indices

  -- Results
  total_questions INTEGER NOT NULL,
  answered_count INTEGER NOT NULL,
  correct_count INTEGER NOT NULL,
  incorrect_count INTEGER NOT NULL,
  skipped_count INTEGER NOT NULL,
  accuracy DECIMAL(5,2) NOT NULL,
  time_taken_seconds INTEGER,         -- Total time for test mode

  -- Metadata
  completed_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for efficient queries
CREATE INDEX IF NOT EXISTS idx_sessions_user_subject
  ON practice_sessions(user_id, subject_id, session_number, mode);
CREATE INDEX IF NOT EXISTS idx_sessions_completed
  ON practice_sessions(completed_at DESC);
CREATE INDEX IF NOT EXISTS idx_sessions_user_id
  ON practice_sessions(user_id);

-- Enable RLS
ALTER TABLE practice_sessions ENABLE ROW LEVEL SECURITY;

-- Users can view their own sessions
CREATE POLICY "Users can view their own sessions"
  ON practice_sessions
  FOR SELECT
  USING (auth.uid() = user_id);

-- Users can insert their own sessions
CREATE POLICY "Users can insert their own sessions"
  ON practice_sessions
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Users can delete their own sessions
CREATE POLICY "Users can delete their own sessions"
  ON practice_sessions
  FOR DELETE
  USING (auth.uid() = user_id);

-- ============================================
-- Verification
-- ============================================
DO $$
BEGIN
  RAISE NOTICE 'practice_sessions table created successfully';
END $$;
