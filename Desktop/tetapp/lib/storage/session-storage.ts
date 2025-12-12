import AsyncStorage from '@react-native-async-storage/async-storage';
import { SessionData, SavedSession } from '../api/sessions';

const SESSION_STORAGE_KEY = '@practice_sessions';

export interface LocalSession {
  id: string;
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
 * Generate a unique ID for local sessions
 */
function generateLocalId(): string {
  return `local_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}

/**
 * Get all local sessions from storage
 */
async function getAllLocalSessions(): Promise<LocalSession[]> {
  try {
    const data = await AsyncStorage.getItem(SESSION_STORAGE_KEY);
    if (!data) return [];
    return JSON.parse(data) as LocalSession[];
  } catch (error) {
    console.error('[session-storage] Error getting local sessions:', error);
    return [];
  }
}

/**
 * Save all sessions to storage
 */
async function saveAllLocalSessions(sessions: LocalSession[]): Promise<void> {
  try {
    await AsyncStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(sessions));
  } catch (error) {
    console.error('[session-storage] Error saving local sessions:', error);
  }
}

/**
 * Save a session locally for guest users
 */
export async function saveLocalSession(data: Omit<SessionData, 'userId'>): Promise<{ data: LocalSession | null; error: Error | null }> {
  try {
    const sessions = await getAllLocalSessions();

    const newSession: LocalSession = {
      id: generateLocalId(),
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
      completed_at: new Date().toISOString(),
      created_at: new Date().toISOString(),
    };

    sessions.unshift(newSession); // Add to beginning (newest first)

    // Keep only last 100 sessions to prevent storage bloat
    const trimmedSessions = sessions.slice(0, 100);
    await saveAllLocalSessions(trimmedSessions);

    console.log('[session-storage] Local session saved:', newSession.id);
    return { data: newSession, error: null };
  } catch (error) {
    console.error('[session-storage] Error saving local session:', error);
    return { data: null, error: error as Error };
  }
}

/**
 * Get session history for a specific subject/session number
 */
export async function getLocalSessionHistory(
  subjectId: string,
  sessionNumber: number,
  mode: 'practice' | 'test'
): Promise<{ data: LocalSession[] | null; error: Error | null }> {
  try {
    const sessions = await getAllLocalSessions();

    const filtered = sessions.filter(
      (s) =>
        s.subject_id === subjectId &&
        s.session_number === sessionNumber &&
        s.mode === mode
    );

    return { data: filtered, error: null };
  } catch (error) {
    console.error('[session-storage] Error getting local session history:', error);
    return { data: null, error: error as Error };
  }
}

/**
 * Get the latest local session for a subject/session number
 */
export async function getLatestLocalSession(
  subjectId: string,
  sessionNumber: number,
  mode: 'practice' | 'test'
): Promise<{ data: LocalSession | null; error: Error | null }> {
  try {
    const { data: sessions, error } = await getLocalSessionHistory(subjectId, sessionNumber, mode);

    if (error || !sessions || sessions.length === 0) {
      return { data: null, error };
    }

    // Sessions are already sorted newest first
    return { data: sessions[0], error: null };
  } catch (error) {
    console.error('[session-storage] Error getting latest local session:', error);
    return { data: null, error: error as Error };
  }
}

/**
 * Get aggregated stats for all sessions of a subject
 */
export async function getLocalSubjectSessionStats(
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
    const sessions = await getAllLocalSessions();

    const filtered = sessions.filter((s) => s.subject_id === subjectId);

    // Aggregate by session_number and mode
    const statsMap = new Map<string, {
      sessionNumber: number;
      mode: 'practice' | 'test';
      attemptCount: number;
      bestAccuracy: number;
      lastAttempt: string;
    }>();

    filtered.forEach((session) => {
      const key = `${session.session_number}-${session.mode}`;
      const existing = statsMap.get(key);

      if (existing) {
        existing.attemptCount += 1;
        existing.bestAccuracy = Math.max(existing.bestAccuracy, session.accuracy);
      } else {
        statsMap.set(key, {
          sessionNumber: session.session_number,
          mode: session.mode,
          attemptCount: 1,
          bestAccuracy: session.accuracy,
          lastAttempt: session.completed_at,
        });
      }
    });

    return { data: Array.from(statsMap.values()), error: null };
  } catch (error) {
    console.error('[session-storage] Error getting local subject stats:', error);
    return { data: null, error: error as Error };
  }
}

/**
 * Get a local session by ID
 */
export async function getLocalSessionById(
  sessionId: string
): Promise<{ data: LocalSession | null; error: Error | null }> {
  try {
    const sessions = await getAllLocalSessions();
    const session = sessions.find((s) => s.id === sessionId);
    return { data: session || null, error: null };
  } catch (error) {
    console.error('[session-storage] Error getting local session by ID:', error);
    return { data: null, error: error as Error };
  }
}

/**
 * Delete a local session
 */
export async function deleteLocalSession(sessionId: string): Promise<{ error: Error | null }> {
  try {
    const sessions = await getAllLocalSessions();
    const filtered = sessions.filter((s) => s.id !== sessionId);
    await saveAllLocalSessions(filtered);
    console.log('[session-storage] Local session deleted:', sessionId);
    return { error: null };
  } catch (error) {
    console.error('[session-storage] Error deleting local session:', error);
    return { error: error as Error };
  }
}

/**
 * Clear all local sessions
 */
export async function clearAllLocalSessions(): Promise<{ error: Error | null }> {
  try {
    await AsyncStorage.removeItem(SESSION_STORAGE_KEY);
    console.log('[session-storage] All local sessions cleared');
    return { error: null };
  } catch (error) {
    console.error('[session-storage] Error clearing local sessions:', error);
    return { error: error as Error };
  }
}

/**
 * Migrate local sessions to cloud when user signs in
 */
export async function migrateLocalSessionsToCloud(
  userId: string,
  saveSessionFn: (data: SessionData) => Promise<{ data: any; error: Error | null }>
): Promise<{ migratedCount: number; error: Error | null }> {
  try {
    const sessions = await getAllLocalSessions();

    if (sessions.length === 0) {
      return { migratedCount: 0, error: null };
    }

    let migratedCount = 0;

    for (const session of sessions) {
      const { error } = await saveSessionFn({
        userId,
        subjectId: session.subject_id,
        sessionNumber: session.session_number,
        mode: session.mode,
        paper: session.paper,
        language: session.language,
        questions: session.questions,
        answers: session.answers,
        markedForReview: session.marked_for_review,
        totalQuestions: session.total_questions,
        answeredCount: session.answered_count,
        correctCount: session.correct_count,
        incorrectCount: session.incorrect_count,
        skippedCount: session.skipped_count,
        accuracy: session.accuracy,
        timeTakenSeconds: session.time_taken_seconds || undefined,
      });

      if (!error) {
        migratedCount++;
      }
    }

    // Clear local sessions after migration
    if (migratedCount > 0) {
      await clearAllLocalSessions();
    }

    console.log(`[session-storage] Migrated ${migratedCount} sessions to cloud`);
    return { migratedCount, error: null };
  } catch (error) {
    console.error('[session-storage] Error migrating sessions:', error);
    return { migratedCount: 0, error: error as Error };
  }
}
