import { useQuery } from '@tanstack/react-query';
import { useAuth } from '../lib/auth-context';
import { getSubjectSessionStats, getSessionHistory, getSessionById, SavedSession } from '../lib/api/sessions';
import {
  getLocalSubjectSessionStats,
  getLocalSessionHistory,
  getLocalSessionById,
  LocalSession,
} from '../lib/storage/session-storage';

export interface SessionStats {
  sessionNumber: number;
  mode: 'practice' | 'test';
  attemptCount: number;
  bestAccuracy: number;
  lastAttempt: string;
}

/**
 * Hook to get session statistics for a subject (for displaying on cards)
 */
export function useSubjectSessionStats(subjectId: string) {
  const { user, isGuest } = useAuth();

  return useQuery({
    queryKey: ['subject-session-stats', subjectId, user?.id, isGuest],
    queryFn: async (): Promise<SessionStats[]> => {
      if (user) {
        // Signed-in user - fetch from Supabase
        const { data, error } = await getSubjectSessionStats(user.id, subjectId);
        if (error) {
          console.error('[useSessionStats] Error fetching cloud stats:', error);
          return [];
        }
        return data || [];
      } else if (isGuest) {
        // Guest user - fetch from local storage
        const { data, error } = await getLocalSubjectSessionStats(subjectId);
        if (error) {
          console.error('[useSessionStats] Error fetching local stats:', error);
          return [];
        }
        return data || [];
      }
      return [];
    },
    enabled: !!subjectId && (!!user || isGuest),
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  });
}

/**
 * Get stats for a specific session card
 */
export function getSessionStatsForCard(
  stats: SessionStats[] | undefined,
  sessionNumber: number,
  mode: 'practice' | 'test'
): { attemptCount: number; bestAccuracy: number } | null {
  if (!stats) return null;

  const sessionStats = stats.find(
    (s) => s.sessionNumber === sessionNumber && s.mode === mode
  );

  if (!sessionStats) return null;

  return {
    attemptCount: sessionStats.attemptCount,
    bestAccuracy: sessionStats.bestAccuracy,
  };
}

/**
 * Hook to get session history for a specific session
 */
export function useSessionHistory(
  subjectId: string,
  sessionNumber: number,
  mode: 'practice' | 'test',
  enabled: boolean = true
) {
  const { user, isGuest } = useAuth();

  return useQuery({
    queryKey: ['session-history', subjectId, sessionNumber, mode, user?.id, isGuest],
    queryFn: async (): Promise<(SavedSession | LocalSession)[]> => {
      if (user) {
        // Signed-in user - fetch from Supabase
        const { data, error } = await getSessionHistory(user.id, subjectId, sessionNumber, mode);
        if (error) {
          console.error('[useSessionHistory] Error fetching cloud history:', error);
          return [];
        }
        return data || [];
      } else if (isGuest) {
        // Guest user - fetch from local storage
        const { data, error } = await getLocalSessionHistory(subjectId, sessionNumber, mode);
        if (error) {
          console.error('[useSessionHistory] Error fetching local history:', error);
          return [];
        }
        return data || [];
      }
      return [];
    },
    enabled: enabled && !!subjectId && (!!user || isGuest),
  });
}

/**
 * Hook to get a single session by ID
 */
export function useSessionById(sessionId: string | null, enabled: boolean = true) {
  const { user, isGuest } = useAuth();

  return useQuery({
    queryKey: ['session-by-id', sessionId, user?.id, isGuest],
    queryFn: async (): Promise<SavedSession | LocalSession | null> => {
      if (!sessionId) return null;

      // Check if it's a local session (starts with 'local_')
      if (sessionId.startsWith('local_')) {
        const { data, error } = await getLocalSessionById(sessionId);
        if (error) {
          console.error('[useSessionById] Error fetching local session:', error);
          return null;
        }
        return data;
      } else {
        // Cloud session
        const { data, error } = await getSessionById(sessionId);
        if (error) {
          console.error('[useSessionById] Error fetching cloud session:', error);
          return null;
        }
        return data;
      }
    },
    enabled: enabled && !!sessionId && (!!user || isGuest),
  });
}
