import { supabase } from '../supabase';

export interface SessionData {
  userId: string;
  subjectId: string;
  sessionNumber: number;
  mode: 'practice' | 'test';
  paper: 'Paper 1' | 'Paper 2';
  language: 'English' | 'Telugu' | 'Urdu';
  questions: any[];
  answers: Record<string, string>;
  markedForReview?: number[];
  totalQuestions: number;
  answeredCount: number;
  correctCount: number;
  incorrectCount: number;
  skippedCount: number;
  accuracy: number;
  timeTakenSeconds?: number;
}

export interface SavedSession {
  id: string;
  user_id: string;
  subject_id: string;
  session_number: number;
  mode: 'practice' | 'test';
  paper: 'Paper 1' | 'Paper 2';
  language: 'English' | 'Telugu' | 'Urdu';
  questions: any[];
  answers: Record<string, string>;
  marked_for_review: number[];
  total_questions: number;
  answered_count: number;
  correct_count: number;
  incorrect_count: number;
  skipped_count: number;
  accuracy: number;
  time_taken_seconds: number | null;
  completed_at: string;
  created_at: string;
}

/**
 * Save a completed session to the database
 */
export async function saveSession(data: SessionData): Promise<{ data: SavedSession | null; error: Error | null }> {
  try {
    const { data: session, error } = await supabase
      .from('practice_sessions')
      .insert({
        user_id: data.userId,
        subject_id: data.subjectId,
        session_number: data.sessionNumber,
        mode: data.mode,
        paper: data.paper,
        language: data.language,
        questions: data.questions,
        answers: data.answers,
        marked_for_review: data.markedForReview || [],
        total_questions: data.totalQuestions,
        answered_count: data.answeredCount,
        correct_count: data.correctCount,
        incorrect_count: data.incorrectCount,
        skipped_count: data.skippedCount,
        accuracy: data.accuracy,
        time_taken_seconds: data.timeTakenSeconds || null,
      })
      .select()
      .single();

    if (error) {
      console.error('[sessions] Error saving session:', error);
      return { data: null, error: new Error(error.message) };
    }

    console.log('[sessions] Session saved successfully:', session?.id);
    return { data: session, error: null };
  } catch (err) {
    console.error('[sessions] Unexpected error saving session:', err);
    return { data: null, error: err as Error };
  }
}

/**
 * Get all sessions for a specific subject/session number
 */
export async function getSessionHistory(
  userId: string,
  subjectId: string,
  sessionNumber: number,
  mode: 'practice' | 'test'
): Promise<{ data: SavedSession[] | null; error: Error | null }> {
  try {
    const { data: sessions, error } = await supabase
      .from('practice_sessions')
      .select('*')
      .eq('user_id', userId)
      .eq('subject_id', subjectId)
      .eq('session_number', sessionNumber)
      .eq('mode', mode)
      .order('completed_at', { ascending: false });

    if (error) {
      console.error('[sessions] Error fetching session history:', error);
      return { data: null, error: new Error(error.message) };
    }

    return { data: sessions, error: null };
  } catch (err) {
    console.error('[sessions] Unexpected error fetching session history:', err);
    return { data: null, error: err as Error };
  }
}

/**
 * Get the most recent session for a specific subject/session number
 */
export async function getLatestSession(
  userId: string,
  subjectId: string,
  sessionNumber: number,
  mode: 'practice' | 'test'
): Promise<{ data: SavedSession | null; error: Error | null }> {
  try {
    const { data: session, error } = await supabase
      .from('practice_sessions')
      .select('*')
      .eq('user_id', userId)
      .eq('subject_id', subjectId)
      .eq('session_number', sessionNumber)
      .eq('mode', mode)
      .order('completed_at', { ascending: false })
      .limit(1)
      .maybeSingle();

    if (error) {
      console.error('[sessions] Error fetching latest session:', error);
      return { data: null, error: new Error(error.message) };
    }

    return { data: session, error: null };
  } catch (err) {
    console.error('[sessions] Unexpected error fetching latest session:', err);
    return { data: null, error: err as Error };
  }
}

/**
 * Get session summary stats for a subject (aggregated data for all sessions)
 */
export async function getSubjectSessionStats(
  userId: string,
  subjectId: string
): Promise<{
  data: {
    sessionNumber: number;
    mode: 'practice' | 'test';
    attemptCount: number;
    bestAccuracy: number;
    lastAttempt: string;
  }[] | null;
  error: Error | null;
}> {
  try {
    const { data: sessions, error } = await supabase
      .from('practice_sessions')
      .select('session_number, mode, accuracy, completed_at')
      .eq('user_id', userId)
      .eq('subject_id', subjectId)
      .order('completed_at', { ascending: false });

    if (error) {
      console.error('[sessions] Error fetching subject stats:', error);
      return { data: null, error: new Error(error.message) };
    }

    // Aggregate stats by session_number and mode
    const statsMap = new Map<string, {
      sessionNumber: number;
      mode: 'practice' | 'test';
      attemptCount: number;
      bestAccuracy: number;
      lastAttempt: string;
    }>();

    sessions?.forEach((session) => {
      const key = `${session.session_number}-${session.mode}`;
      const existing = statsMap.get(key);

      if (existing) {
        existing.attemptCount += 1;
        existing.bestAccuracy = Math.max(existing.bestAccuracy, session.accuracy);
        // Keep the most recent attempt (already sorted desc)
      } else {
        statsMap.set(key, {
          sessionNumber: session.session_number,
          mode: session.mode as 'practice' | 'test',
          attemptCount: 1,
          bestAccuracy: session.accuracy,
          lastAttempt: session.completed_at,
        });
      }
    });

    return { data: Array.from(statsMap.values()), error: null };
  } catch (err) {
    console.error('[sessions] Unexpected error fetching subject stats:', err);
    return { data: null, error: err as Error };
  }
}

/**
 * Get a specific session by ID
 */
export async function getSessionById(
  sessionId: string
): Promise<{ data: SavedSession | null; error: Error | null }> {
  try {
    const { data: session, error } = await supabase
      .from('practice_sessions')
      .select('*')
      .eq('id', sessionId)
      .single();

    if (error) {
      console.error('[sessions] Error fetching session by ID:', error);
      return { data: null, error: new Error(error.message) };
    }

    return { data: session, error: null };
  } catch (err) {
    console.error('[sessions] Unexpected error fetching session by ID:', err);
    return { data: null, error: err as Error };
  }
}

/**
 * Delete a session
 */
export async function deleteSession(sessionId: string): Promise<{ error: Error | null }> {
  try {
    const { error } = await supabase
      .from('practice_sessions')
      .delete()
      .eq('id', sessionId);

    if (error) {
      console.error('[sessions] Error deleting session:', error);
      return { error: new Error(error.message) };
    }

    console.log('[sessions] Session deleted successfully:', sessionId);
    return { error: null };
  } catch (err) {
    console.error('[sessions] Unexpected error deleting session:', err);
    return { error: err as Error };
  }
}
