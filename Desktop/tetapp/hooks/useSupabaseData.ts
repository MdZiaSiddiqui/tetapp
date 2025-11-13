/**
 * React Query hooks for Supabase data fetching
 * Provides caching, loading states, and error handling out of the box
 */

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import type {
  Subject,
  SubjectWithStats,
  Chapter,
  ChapterWithStats,
  Question,
  FetchQuestionsParams,
} from '../lib/types/database.types';

// Import API functions
import {
  getSubjects,
  getSubjectsWithStats,
  getSubjectById,
  getSubjectByIdWithStats,
  searchSubjects,
  getSubjectsByPaper,
} from '../lib/api/subjects';

import {
  getChapters,
  getChaptersBySubject,
  getChaptersBySubjectWithStats,
  getChapterById,
  getChapterByIdWithStats,
  getChapterBySubjectAndPaper,
  getChaptersWithQuestionCounts,
} from '../lib/api/chapters';

import {
  getQuestions,
  getQuestionsByChapterId,
  getQuestionsWithDetails,
  getRandomQuestionsForPractice,
  getQuestionCount,
  getAvailableLanguages,
  getQuestionStats,
  getQuestionsBySubjectPaperLanguage,
} from '../lib/api/questions';

// ============================================
// SUBJECT HOOKS
// ============================================

/**
 * Get all subjects
 */
export function useSubjects() {
  return useQuery({
    queryKey: ['subjects'],
    queryFn: async () => {
      const { data, error } = await getSubjects();
      if (error) throw error;
      return data;
    },
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
}

/**
 * Get all subjects with statistics
 */
export function useSubjectsWithStats() {
  return useQuery({
    queryKey: ['subjects', 'with-stats'],
    queryFn: async () => {
      const { data, error } = await getSubjectsWithStats();
      if (error) throw error;
      return data;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

/**
 * Get a single subject by ID
 */
export function useSubject(subjectId: string) {
  return useQuery({
    queryKey: ['subjects', subjectId],
    queryFn: async () => {
      const { data, error } = await getSubjectById(subjectId);
      if (error) throw error;
      return data;
    },
    enabled: !!subjectId,
    staleTime: 1000 * 60 * 10,
  });
}

/**
 * Get a single subject by ID with statistics
 */
export function useSubjectWithStats(subjectId: string) {
  return useQuery({
    queryKey: ['subjects', subjectId, 'with-stats'],
    queryFn: async () => {
      const { data, error } = await getSubjectByIdWithStats(subjectId);
      if (error) throw error;
      return data;
    },
    enabled: !!subjectId,
    staleTime: 1000 * 60 * 5,
  });
}

/**
 * Search subjects by name
 */
export function useSearchSubjects(searchTerm: string) {
  return useQuery({
    queryKey: ['subjects', 'search', searchTerm],
    queryFn: async () => {
      const { data, error } = await searchSubjects(searchTerm);
      if (error) throw error;
      return data;
    },
    enabled: searchTerm.length > 0,
    staleTime: 1000 * 60 * 5,
  });
}

/**
 * Get subjects by paper
 */
export function useSubjectsByPaper(paper: 'Paper 1' | 'Paper 2') {
  return useQuery({
    queryKey: ['subjects', 'by-paper', paper],
    queryFn: async () => {
      const { data, error } = await getSubjectsByPaper(paper);
      if (error) throw error;
      return data;
    },
    staleTime: 1000 * 60 * 10,
  });
}

// ============================================
// CHAPTER HOOKS
// ============================================

/**
 * Get all chapters
 */
export function useChapters() {
  return useQuery({
    queryKey: ['chapters'],
    queryFn: async () => {
      const { data, error } = await getChapters();
      if (error) throw error;
      return data;
    },
    staleTime: 1000 * 60 * 10,
  });
}

/**
 * Get chapters by subject ID
 */
export function useChaptersBySubject(subjectId: string) {
  return useQuery({
    queryKey: ['chapters', 'by-subject', subjectId],
    queryFn: async () => {
      const { data, error } = await getChaptersBySubject(subjectId);
      if (error) throw error;
      return data;
    },
    enabled: !!subjectId,
    staleTime: 1000 * 60 * 10,
  });
}

/**
 * Get chapters by subject ID with statistics
 */
export function useChaptersBySubjectWithStats(subjectId: string) {
  return useQuery({
    queryKey: ['chapters', 'by-subject', subjectId, 'with-stats'],
    queryFn: async () => {
      const { data, error } = await getChaptersBySubjectWithStats(subjectId);
      if (error) throw error;
      return data;
    },
    enabled: !!subjectId,
    staleTime: 1000 * 60 * 5,
  });
}

/**
 * Get a single chapter by ID
 */
export function useChapter(chapterId: string) {
  return useQuery({
    queryKey: ['chapters', chapterId],
    queryFn: async () => {
      const { data, error } = await getChapterById(chapterId);
      if (error) throw error;
      return data;
    },
    enabled: !!chapterId,
    staleTime: 1000 * 60 * 10,
  });
}

/**
 * Get a single chapter by ID with statistics
 */
export function useChapterWithStats(chapterId: string) {
  return useQuery({
    queryKey: ['chapters', chapterId, 'with-stats'],
    queryFn: async () => {
      const { data, error } = await getChapterByIdWithStats(chapterId);
      if (error) throw error;
      return data;
    },
    enabled: !!chapterId,
    staleTime: 1000 * 60 * 5,
  });
}

/**
 * Get chapter by subject and paper
 */
export function useChapterBySubjectAndPaper(
  subjectId: string,
  paper: 'Paper 1' | 'Paper 2'
) {
  return useQuery({
    queryKey: ['chapters', 'by-subject-paper', subjectId, paper],
    queryFn: async () => {
      const { data, error } = await getChapterBySubjectAndPaper(subjectId, paper);
      if (error) throw error;
      return data;
    },
    enabled: !!subjectId && !!paper,
    staleTime: 1000 * 60 * 10,
  });
}

// ============================================
// QUESTION HOOKS
// ============================================

/**
 * Get questions with filters
 */
export function useQuestions(params: FetchQuestionsParams = {}) {
  return useQuery({
    queryKey: ['questions', params],
    queryFn: async () => {
      const { data, error } = await getQuestions(params);
      if (error) throw error;
      return data;
    },
    staleTime: 1000 * 60 * 5,
  });
}

/**
 * Get questions by chapter ID
 */
export function useQuestionsByChapter(chapterId: string) {
  return useQuery({
    queryKey: ['questions', 'by-chapter', chapterId],
    queryFn: async () => {
      const { data, error } = await getQuestionsByChapterId(chapterId);
      if (error) throw error;
      return data;
    },
    enabled: !!chapterId,
    staleTime: 1000 * 60 * 5,
  });
}

/**
 * Get questions by subject, paper, and language
 */
export function useQuestionsBySubjectPaperLanguage(
  subjectId: string,
  paper: 'Paper 1' | 'Paper 2',
  language: 'English' | 'Telugu' | 'Urdu',
  limit?: number
) {
  return useQuery({
    queryKey: ['questions', 'by-spl', subjectId, paper, language, limit],
    queryFn: async () => {
      const { data, error } = await getQuestionsBySubjectPaperLanguage(
        subjectId,
        paper,
        language,
        limit
      );
      if (error) throw error;
      return data;
    },
    enabled: !!subjectId && !!paper && !!language,
    staleTime: 1000 * 60 * 5,
  });
}

/**
 * Get random questions for practice
 */
export function useRandomQuestions(
  params: FetchQuestionsParams & { count: number },
  enabled: boolean = true
) {
  return useQuery({
    queryKey: ['questions', 'random', params],
    queryFn: async () => {
      const { data, error } = await getRandomQuestionsForPractice(params);
      if (error) throw error;
      return data;
    },
    enabled,
    staleTime: 0, // Don't cache random questions
    gcTime: 0, // Don't keep in cache
  });
}

/**
 * Get question count
 */
export function useQuestionCount(params: FetchQuestionsParams = {}) {
  return useQuery({
    queryKey: ['questions', 'count', params],
    queryFn: async () => {
      const { count, error } = await getQuestionCount(params);
      if (error) throw error;
      return count;
    },
    staleTime: 1000 * 60 * 5,
  });
}

/**
 * Get available languages for a subject and paper
 */
export function useAvailableLanguages(
  subjectId: string,
  paper: 'Paper 1' | 'Paper 2'
) {
  return useQuery({
    queryKey: ['questions', 'languages', subjectId, paper],
    queryFn: async () => {
      const { data, error } = await getAvailableLanguages(subjectId, paper);
      if (error) throw error;
      return data;
    },
    enabled: !!subjectId && !!paper,
    staleTime: 1000 * 60 * 10,
  });
}

/**
 * Get question statistics for a subject
 */
export function useQuestionStats(subjectId: string) {
  return useQuery({
    queryKey: ['questions', 'stats', subjectId],
    queryFn: async () => {
      const { data, error } = await getQuestionStats(subjectId);
      if (error) throw error;
      return data;
    },
    enabled: !!subjectId,
    staleTime: 1000 * 60 * 5,
  });
}

// ============================================
// UTILITY HOOKS
// ============================================

/**
 * Prefetch subjects (useful for optimistic UI)
 */
export function usePrefetchSubjects() {
  const queryClient = useQueryClient();

  return () => {
    queryClient.prefetchQuery({
      queryKey: ['subjects'],
      queryFn: async () => {
        const { data } = await getSubjects();
        return data;
      },
    });
  };
}

/**
 * Invalidate all queries (refresh all data)
 */
export function useInvalidateQueries() {
  const queryClient = useQueryClient();

  return () => {
    queryClient.invalidateQueries({ queryKey: ['subjects'] });
    queryClient.invalidateQueries({ queryKey: ['chapters'] });
    queryClient.invalidateQueries({ queryKey: ['questions'] });
  };
}
