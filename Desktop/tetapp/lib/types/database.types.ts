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

// User Profile with Pro Access
export interface UserProfile {
  id: string; // UUID - references auth.users(id)
  email: string;
  full_name?: string;
  avatar_url?: string;

  // Subscription tier management (legacy)
  tier: 'free' | 'pro';
  subscription_status?: 'active' | 'cancelled' | 'expired' | 'trial';
  subscription_start_date?: string;
  subscription_end_date?: string;

  // Pro Access Management (new)
  pro_tier: 'free' | 'paper1' | 'paper2' | 'both';
  pro_access_paper: string[]; // ['paper1', 'paper2']
  pro_package_type?: '3_months' | '1_year';
  pro_purchased_at?: string;
  pro_expires_at?: string;
  razorpay_payment_id?: string;
  razorpay_order_id?: string;

  // OAuth provider info
  provider?: string;
  provider_id?: string;

  // Usage tracking for free tier limits
  practice_sessions_count?: number;
  test_sessions_count?: number;
  monthly_sessions_limit?: number;
  last_session_reset_date?: string;

  // User stats (from profile query)
  level?: number;
  total_questions_attempted?: number;

  // Timestamps
  created_at: string;
  updated_at: string;
}

// Payment Transaction
export interface Payment {
  id: string; // UUID
  user_id: string; // UUID - references auth.users(id)

  // Razorpay IDs
  order_id: string;
  payment_id?: string;
  razorpay_signature?: string;

  // Purchase details
  tier: 'paper1' | 'paper2' | 'both';
  package_type: '3_months' | '1_year';
  amount: number; // in paisa
  currency: string; // 'INR'

  // Payment status
  status: 'created' | 'authorized' | 'captured' | 'failed' | 'refunded';
  payment_method?: string;

  // Metadata
  notes?: Record<string, any>;

  // Timestamps
  created_at: string;
  updated_at: string;
  paid_at?: string;
}

// User Pro Status (from view)
export interface UserProStatus {
  user_id: string;
  email: string;
  full_name?: string;
  pro_tier: 'free' | 'paper1' | 'paper2' | 'both';
  pro_access_paper: string[];
  pro_package_type?: '3_months' | '1_year';
  pro_purchased_at?: string;
  pro_expires_at?: string;
  pro_status?: 'active' | 'expired' | 'inactive' | null;
  days_remaining?: number | null;
  razorpay_payment_id?: string;
  created_at: string;
  updated_at: string;
}

// Razorpay Order Creation Request
export interface CreateOrderRequest {
  tier: 'paper1' | 'paper2' | 'both';
  package: '3_months' | '1_year';
}

// Razorpay Order Response
export interface RazorpayOrder {
  id: string;
  entity: 'order';
  amount: number;
  amount_paid: number;
  amount_due: number;
  currency: string;
  receipt: string;
  status: 'created' | 'attempted' | 'paid';
  attempts: number;
  notes: Record<string, string>;
  created_at: number;
}

// Payment Verification Request
export interface VerifyPaymentRequest {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

// Payment Verification Response
export interface VerifyPaymentResponse {
  success: boolean;
  message: string;
  user?: UserProfile;
  payment?: Payment;
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
