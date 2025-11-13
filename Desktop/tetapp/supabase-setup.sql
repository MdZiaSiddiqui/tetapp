-- ============================================
-- TET Exam App - Complete Database Setup
-- Run this in your Supabase SQL Editor
-- This will create all tables, indexes, policies, and seed initial data
-- ============================================

-- ============================================
-- STEP 1: DROP EXISTING TABLES (Clean Slate)
-- ============================================

-- Drop tables in reverse dependency order
DROP TABLE IF EXISTS user_attempts CASCADE;
DROP TABLE IF EXISTS questions CASCADE;
DROP TABLE IF EXISTS chapters CASCADE;
DROP TABLE IF EXISTS subjects CASCADE;

-- Drop storage bucket if exists
DELETE FROM storage.objects WHERE bucket_id = 'question-images';
DELETE FROM storage.buckets WHERE id = 'question-images';

-- ============================================
-- STEP 2: CREATE HELPER FUNCTIONS
-- ============================================

-- Create or replace updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ============================================
-- STEP 3: CREATE SUBJECTS TABLE
-- ============================================

CREATE TABLE subjects (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create updated_at trigger for subjects
CREATE TRIGGER update_subjects_updated_at
  BEFORE UPDATE ON subjects
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Enable RLS on subjects table
ALTER TABLE subjects ENABLE ROW LEVEL SECURITY;

-- Allow public read access to all subjects
CREATE POLICY "Allow public read access to subjects"
  ON subjects
  FOR SELECT
  USING (true);

-- Allow authenticated users to manage subjects
CREATE POLICY "Allow authenticated users to manage subjects"
  ON subjects
  FOR ALL
  TO authenticated
  USING (true);

-- ============================================
-- STEP 4: CREATE CHAPTERS TABLE
-- ============================================

CREATE TABLE chapters (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  subject_id TEXT NOT NULL REFERENCES subjects(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for better query performance
CREATE INDEX idx_chapters_subject_id ON chapters(subject_id);

-- Create updated_at trigger for chapters
CREATE TRIGGER update_chapters_updated_at
  BEFORE UPDATE ON chapters
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Enable RLS on chapters table
ALTER TABLE chapters ENABLE ROW LEVEL SECURITY;

-- Allow public read access to all chapters
CREATE POLICY "Allow public read access to chapters"
  ON chapters
  FOR SELECT
  USING (true);

-- Allow authenticated users to manage chapters
CREATE POLICY "Allow authenticated users to manage chapters"
  ON chapters
  FOR ALL
  TO authenticated
  USING (true);

-- ============================================
-- STEP 5: CREATE QUESTIONS TABLE
-- ============================================

CREATE TABLE questions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  subject_id TEXT NOT NULL REFERENCES subjects(id) ON DELETE CASCADE,
  chapter_id UUID NOT NULL REFERENCES chapters(id) ON DELETE CASCADE,
  question TEXT NOT NULL,
  options JSONB NOT NULL DEFAULT '[]'::jsonb,
  correct_answer TEXT NOT NULL,
  solutions TEXT NOT NULL,
  difficulty TEXT CHECK (difficulty IN ('easy', 'medium', 'difficult')) DEFAULT 'medium',
  paper TEXT CHECK (paper IN ('Paper 1', 'Paper 2')),
  language TEXT CHECK (language IN ('English', 'Telugu', 'Urdu')) DEFAULT 'English',
  question_number INTEGER,
  tag TEXT,
  image_url TEXT,
  reference TEXT,
  filters JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX idx_questions_subject_id ON questions(subject_id);
CREATE INDEX idx_questions_chapter_id ON questions(chapter_id);
CREATE INDEX idx_questions_difficulty ON questions(difficulty);
CREATE INDEX idx_questions_paper ON questions(paper);
CREATE INDEX idx_questions_language ON questions(language);
CREATE INDEX idx_questions_tag ON questions(tag);
CREATE INDEX idx_questions_question_number ON questions(question_number);

-- Create updated_at trigger
CREATE TRIGGER update_questions_updated_at
  BEFORE UPDATE ON questions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Enable RLS on questions table
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;

-- Allow public read access to all questions
CREATE POLICY "Allow public read access to questions"
  ON questions
  FOR SELECT
  USING (true);

-- Allow authenticated users to insert questions
CREATE POLICY "Allow authenticated users to insert questions"
  ON questions
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Allow authenticated users to update questions
CREATE POLICY "Allow authenticated users to update questions"
  ON questions
  FOR UPDATE
  TO authenticated
  USING (true);

-- Allow authenticated users to delete questions
CREATE POLICY "Allow authenticated users to delete questions"
  ON questions
  FOR DELETE
  TO authenticated
  USING (true);

-- ============================================
-- STEP 6: CREATE USER_ATTEMPTS TABLE
-- ============================================

CREATE TABLE user_attempts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  question_id UUID NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
  selected_answer TEXT NOT NULL,
  is_correct BOOLEAN NOT NULL,
  time_taken INTEGER, -- in seconds
  mode TEXT CHECK (mode IN ('practice', 'test', 'revision')) DEFAULT 'practice',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX idx_user_attempts_user_id ON user_attempts(user_id);
CREATE INDEX idx_user_attempts_question_id ON user_attempts(question_id);
CREATE INDEX idx_user_attempts_mode ON user_attempts(mode);
CREATE INDEX idx_user_attempts_created_at ON user_attempts(created_at);

-- Enable RLS on user_attempts table
ALTER TABLE user_attempts ENABLE ROW LEVEL SECURITY;

-- Allow users to view their own attempts
CREATE POLICY "Users can view their own attempts"
  ON user_attempts
  FOR SELECT
  USING (auth.uid() = user_id);

-- Allow users to insert their own attempts
CREATE POLICY "Users can insert their own attempts"
  ON user_attempts
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Allow users to delete their own attempts
CREATE POLICY "Users can delete their own attempts"
  ON user_attempts
  FOR DELETE
  USING (auth.uid() = user_id);

-- ============================================
-- STEP 7: CREATE STORAGE BUCKET
-- ============================================

-- Create storage bucket for question images
INSERT INTO storage.buckets (id, name, public)
VALUES ('question-images', 'question-images', true)
ON CONFLICT (id) DO NOTHING;

-- Allow public access to view images
CREATE POLICY "Public Access to Question Images"
ON storage.objects FOR SELECT
USING ( bucket_id = 'question-images' );

-- Allow authenticated users to upload images
CREATE POLICY "Authenticated users can upload question images"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK ( bucket_id = 'question-images' );

-- Allow authenticated users to update images
CREATE POLICY "Authenticated users can update question images"
ON storage.objects FOR UPDATE
TO authenticated
USING ( bucket_id = 'question-images' );

-- Allow authenticated users to delete images
CREATE POLICY "Authenticated users can delete question images"
ON storage.objects FOR DELETE
TO authenticated
USING ( bucket_id = 'question-images' );

-- ============================================
-- STEP 8: SEED TET SUBJECTS
-- ============================================

INSERT INTO subjects (id, name, description) VALUES
  ('child-development', 'Child Development', 'Child Development and Pedagogy - TET Paper 1 & 2'),
  ('mathematics', 'Mathematics', 'Mathematics - TET Paper 1 & 2'),
  ('science', 'Science', 'Physical Science - TET Paper 2'),
  ('social', 'Social Studies', 'Social Studies - TET Paper 2'),
  ('english', 'English', 'English Language - TET Paper 1 & 2'),
  ('environmental', 'Environmental Studies', 'Environmental Studies - TET Paper 1'),
  ('hindi', 'Hindi', 'Hindi Language - TET Paper 1 & 2'),
  ('urdu', 'Urdu', 'Urdu Language - TET Paper 1 & 2')
ON CONFLICT (id) DO UPDATE
SET
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  updated_at = NOW();

-- ============================================
-- STEP 9: SEED CHAPTERS
-- ============================================

-- Child Development chapters
INSERT INTO chapters (subject_id, name, description) VALUES
  ('child-development', 'Paper 1', 'Child Development and Pedagogy - Paper 1'),
  ('child-development', 'Paper 2', 'Child Development and Pedagogy - Paper 2')
ON CONFLICT DO NOTHING;

-- Mathematics chapters
INSERT INTO chapters (subject_id, name, description) VALUES
  ('mathematics', 'Paper 1', 'Mathematics - Paper 1'),
  ('mathematics', 'Paper 2', 'Mathematics - Paper 2')
ON CONFLICT DO NOTHING;

-- Science chapter (Paper 2 only)
INSERT INTO chapters (subject_id, name, description) VALUES
  ('science', 'Paper 2', 'Physical Science - Paper 2')
ON CONFLICT DO NOTHING;

-- Social Studies chapter (Paper 2 only)
INSERT INTO chapters (subject_id, name, description) VALUES
  ('social', 'Paper 2', 'Social Studies - Paper 2')
ON CONFLICT DO NOTHING;

-- English chapters
INSERT INTO chapters (subject_id, name, description) VALUES
  ('english', 'Paper 1', 'English Language - Paper 1'),
  ('english', 'Paper 2', 'English Language - Paper 2')
ON CONFLICT DO NOTHING;

-- Environmental Studies chapter (Paper 1 only)
INSERT INTO chapters (subject_id, name, description) VALUES
  ('environmental', 'Paper 1', 'Environmental Studies - Paper 1')
ON CONFLICT DO NOTHING;

-- Hindi chapters
INSERT INTO chapters (subject_id, name, description) VALUES
  ('hindi', 'Paper 1', 'Hindi Language - Paper 1'),
  ('hindi', 'Paper 2', 'Hindi Language - Paper 2')
ON CONFLICT DO NOTHING;

-- Urdu chapters
INSERT INTO chapters (subject_id, name, description) VALUES
  ('urdu', 'Paper 1', 'Urdu Language - Paper 1'),
  ('urdu', 'Paper 2', 'Urdu Language - Paper 2')
ON CONFLICT DO NOTHING;

-- ============================================
-- STEP 10: VERIFY SETUP
-- ============================================

-- Display results
DO $$
DECLARE
  subject_count INTEGER;
  chapter_count INTEGER;
  question_count INTEGER;
BEGIN
  SELECT COUNT(*) INTO subject_count FROM subjects;
  SELECT COUNT(*) INTO chapter_count FROM chapters;
  SELECT COUNT(*) INTO question_count FROM questions;

  RAISE NOTICE '✅ Database setup complete!';
  RAISE NOTICE '📊 Subjects created: %', subject_count;
  RAISE NOTICE '📖 Chapters created: %', chapter_count;
  RAISE NOTICE '❓ Questions: % (Run seeding script to populate)', question_count;
END $$;

-- Show structure
SELECT
  s.name as subject,
  c.name as chapter,
  COUNT(q.id) as question_count
FROM subjects s
LEFT JOIN chapters c ON c.subject_id = s.id
LEFT JOIN questions q ON q.chapter_id = c.id
GROUP BY s.name, c.name
ORDER BY s.name, c.name;

-- ============================================
-- STEP 11: USEFUL VIEWS (OPTIONAL)
-- ============================================

-- Create a view for question statistics
CREATE OR REPLACE VIEW question_stats AS
SELECT
  s.id as subject_id,
  s.name as subject_name,
  c.id as chapter_id,
  c.name as chapter_name,
  q.paper,
  q.language,
  q.difficulty,
  COUNT(*) as question_count
FROM subjects s
LEFT JOIN chapters c ON c.subject_id = s.id
LEFT JOIN questions q ON q.chapter_id = c.id
GROUP BY s.id, s.name, c.id, c.name, q.paper, q.language, q.difficulty
ORDER BY s.name, c.name, q.paper, q.language;

-- Create a view for user progress
CREATE OR REPLACE VIEW user_progress_summary AS
SELECT
  u.user_id,
  s.name as subject_name,
  COUNT(*) as total_attempts,
  SUM(CASE WHEN u.is_correct THEN 1 ELSE 0 END) as correct_answers,
  ROUND(
    (SUM(CASE WHEN u.is_correct THEN 1 ELSE 0 END)::NUMERIC / COUNT(*)::NUMERIC) * 100,
    2
  ) as accuracy_percentage,
  AVG(u.time_taken) as avg_time_seconds,
  MAX(u.created_at) as last_attempted
FROM user_attempts u
JOIN questions q ON q.id = u.question_id
JOIN subjects s ON s.id = q.subject_id
GROUP BY u.user_id, s.name
ORDER BY u.user_id, s.name;

-- ============================================
-- NOTES
-- ============================================

/*
✅ Database Structure Created:
- subjects (8 TET subjects)
- chapters (~15 chapters - Paper 1 & 2)
- questions (ready for ~4,000 questions)
- user_attempts (for tracking user progress)

✅ Security:
- Row Level Security (RLS) enabled on all tables
- Public read access for questions
- User-specific access for attempts
- Storage bucket for question images

✅ Performance:
- Indexes on all foreign keys
- Indexes on commonly queried fields (paper, language, difficulty)
- Views for quick stats

🚀 Next Steps:
1. Run the seeding script to populate questions:
   npm run seed:tet

2. Verify data was inserted:
   SELECT COUNT(*) FROM questions;

3. Test the app:
   npm start

📚 Sample Queries:

-- Get all subjects with question counts
SELECT
  s.name,
  COUNT(q.id) as question_count
FROM subjects s
LEFT JOIN questions q ON q.subject_id = s.id
GROUP BY s.name;

-- Get questions for a specific subject, paper, and language
SELECT *
FROM questions
WHERE subject_id = 'mathematics'
  AND paper = 'Paper 1'
  AND language = 'English'
ORDER BY question_number;

-- Get user accuracy by subject
SELECT *
FROM user_progress_summary
WHERE user_id = 'YOUR_USER_ID';
*/
