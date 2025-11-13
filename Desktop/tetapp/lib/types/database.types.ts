/**
 * Database Types for Supabase Tables
 * Type definitions for the TET Exam Study App
 */

export interface Subject {
  id: string; // kebab-case ID (e.g., 'child-development', 'mathematics')
  name: string; // Display name (e.g., 'Child Development', 'Mathematics')
  description?: string;
  created_at: string;
  updated_at: string;
}

export interface Chapter {
  id: string; // UUID
  subject_id: string; // Foreign key to subjects.id
  name: string; // 'Paper 1' or 'Paper 2'
  description?: string;
  created_at: string;
  updated_at: string;
}

export interface Question {
  id: string; // UUID
  subject_id: string; // Foreign key to subjects.id
  chapter_id: string; // Foreign key to chapters.id
  question: string; // Question text
  tag?: string; // Optional tag (e.g., 'Child Development - Paper 1')
  image_url?: string; // Optional image URL
  options: string[]; // Array of 4 option strings
  correct_answer: string; // The correct option text
  solutions: string; // Explanation/solution
  reference?: string; // Optional reference
  difficulty: 'easy' | 'medium' | 'difficult';
  paper: 'Paper 1' | 'Paper 2'; // TET paper number
  language: 'English' | 'Telugu' | 'Urdu'; // Question language
  question_number?: number; // Original question number from source
  filters?: {
    [key: string]: any; // Legacy field for additional metadata
  };
  created_at: string;
  updated_at: string;
}

// Extended types with relationships
export interface QuestionWithDetails extends Question {
  subject?: Subject;
  chapter?: Chapter;
}

// Request/Query types
export interface FetchQuestionsParams {
  subject_id?: string;
  chapter_id?: string;
  difficulty?: 'easy' | 'medium' | 'difficult';
  paper?: 'Paper 1' | 'Paper 2';
  language?: 'English' | 'Telugu' | 'Urdu';
  tag?: string;
  limit?: number;
  offset?: number;
}

export interface PracticeSessionSettings {
  mode: 'all' | 'easy' | 'medium' | 'difficult';
  questionType: 'all' | 'mcq' | 'image' | 'case';
  questionCount: number;
  timerMinutes: number;
  subjectIds?: string[];
  chapterIds?: string[];
  paper?: 'Paper 1' | 'Paper 2';
  language?: 'English' | 'Telugu' | 'Urdu';
}

// TET-specific types
export interface SubjectWithStats extends Subject {
  question_count?: number;
  chapter_count?: number;
  papers?: ('Paper 1' | 'Paper 2')[];
}

export interface ChapterWithStats extends Chapter {
  question_count?: number;
  languages?: ('English' | 'Telugu' | 'Urdu')[];
}

// Database response types
export type DbResult<T> = {
  data: T | null;
  error: Error | null;
};

export type DbResultArray<T> = {
  data: T[] | null;
  error: Error | null;
};
