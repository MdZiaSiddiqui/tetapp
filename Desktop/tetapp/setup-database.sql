-- Medical Study App - Database Setup Script
-- Run this in your Supabase SQL editor to populate the subjects table

-- Insert all medical subjects
INSERT INTO subjects (id, name, created_at, updated_at) VALUES
  ('anatomy', 'Anatomy', NOW(), NOW()),
  ('physiology', 'Physiology', NOW(), NOW()),
  ('biochemistry', 'Biochemistry', NOW(), NOW()),
  ('pathology', 'Pathology', NOW(), NOW()),
  ('pharmacology', 'Pharmacology', NOW(), NOW()),
  ('microbiology', 'Microbiology', NOW(), NOW()),
  ('medicine', 'Medicine', NOW(), NOW()),
  ('surgery', 'Surgery', NOW(), NOW()),
  ('pediatrics', 'Pediatrics', NOW(), NOW()),
  ('obgyn', 'Obstetrics & Gynecology', NOW(), NOW()),
  ('psychiatry', 'Psychiatry', NOW(), NOW()),
  ('radiology', 'Radiology', NOW(), NOW())
ON CONFLICT (id) DO NOTHING;

-- Verify the insertion
SELECT * FROM subjects ORDER BY name;
