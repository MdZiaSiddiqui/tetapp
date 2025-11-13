/**
 * API utilities for fetching chapters from Supabase
 */

import { supabase } from '../supabase';
import type { Chapter, ChapterWithStats, DbResult, DbResultArray } from '../types/database.types';

/**
 * Get all chapters
 * @returns Array of all chapters
 */
export async function getChapters(): Promise<DbResultArray<Chapter>> {
  try {
    const { data, error } = await supabase
      .from('chapters')
      .select('*')
      .order('name', { ascending: true });

    if (error) {
      return { data: null, error };
    }

    return { data, error: null };
  } catch (error) {
    return { data: null, error: error as Error };
  }
}

/**
 * Get chapters by subject ID
 * @param subjectId - Subject ID (e.g., 'child-development')
 * @returns Array of chapters for the subject
 */
export async function getChaptersBySubject(
  subjectId: string
): Promise<DbResultArray<Chapter>> {
  try {
    const { data, error } = await supabase
      .from('chapters')
      .select('*')
      .eq('subject_id', subjectId)
      .order('name', { ascending: true });

    if (error) {
      return { data: null, error };
    }

    return { data, error: null };
  } catch (error) {
    return { data: null, error: error as Error };
  }
}

/**
 * Get chapters by subject ID with statistics
 * @param subjectId - Subject ID (e.g., 'child-development')
 * @returns Array of chapters with question counts and languages
 */
export async function getChaptersBySubjectWithStats(
  subjectId: string
): Promise<DbResultArray<ChapterWithStats>> {
  try {
    const { data: chapters, error: chaptersError } = await supabase
      .from('chapters')
      .select('*')
      .eq('subject_id', subjectId)
      .order('name', { ascending: true });

    if (chaptersError) {
      return { data: null, error: chaptersError };
    }

    if (!chapters) {
      return { data: [], error: null };
    }

    // For each chapter, get question count and available languages
    const chaptersWithStats = await Promise.all(
      chapters.map(async (chapter) => {
        // Get question count
        const { count: questionCount } = await supabase
          .from('questions')
          .select('*', { count: 'exact', head: true })
          .eq('chapter_id', chapter.id);

        // Get available languages for this chapter
        const { data: questions } = await supabase
          .from('questions')
          .select('language')
          .eq('chapter_id', chapter.id);

        const uniqueLanguages = questions
          ? [...new Set(questions.map(q => q.language as 'English' | 'Telugu' | 'Urdu'))]
          : [];

        return {
          ...chapter,
          question_count: questionCount || 0,
          languages: uniqueLanguages,
        };
      })
    );

    return { data: chaptersWithStats, error: null };
  } catch (error) {
    return { data: null, error: error as Error };
  }
}

/**
 * Get a single chapter by ID
 * @param chapterId - Chapter UUID
 * @returns Single chapter
 */
export async function getChapterById(chapterId: string): Promise<DbResult<Chapter>> {
  try {
    const { data, error } = await supabase
      .from('chapters')
      .select('*')
      .eq('id', chapterId)
      .single();

    if (error) {
      return { data: null, error };
    }

    return { data, error: null };
  } catch (error) {
    return { data: null, error: error as Error };
  }
}

/**
 * Get a single chapter by ID with statistics
 * @param chapterId - Chapter UUID
 * @returns Single chapter with stats
 */
export async function getChapterByIdWithStats(
  chapterId: string
): Promise<DbResult<ChapterWithStats>> {
  try {
    const { data: chapter, error: chapterError } = await supabase
      .from('chapters')
      .select('*')
      .eq('id', chapterId)
      .single();

    if (chapterError) {
      return { data: null, error: chapterError };
    }

    // Get question count
    const { count: questionCount } = await supabase
      .from('questions')
      .select('*', { count: 'exact', head: true })
      .eq('chapter_id', chapterId);

    // Get available languages
    const { data: questions } = await supabase
      .from('questions')
      .select('language')
      .eq('chapter_id', chapterId);

    const uniqueLanguages = questions
      ? [...new Set(questions.map(q => q.language as 'English' | 'Telugu' | 'Urdu'))]
      : [];

    const chapterWithStats: ChapterWithStats = {
      ...chapter,
      question_count: questionCount || 0,
      languages: uniqueLanguages,
    };

    return { data: chapterWithStats, error: null };
  } catch (error) {
    return { data: null, error: error as Error };
  }
}

/**
 * Get chapter by subject and paper
 * @param subjectId - Subject ID (e.g., 'child-development')
 * @param paper - Paper name ('Paper 1' or 'Paper 2')
 * @returns Single chapter
 */
export async function getChapterBySubjectAndPaper(
  subjectId: string,
  paper: 'Paper 1' | 'Paper 2'
): Promise<DbResult<Chapter>> {
  try {
    const { data, error } = await supabase
      .from('chapters')
      .select('*')
      .eq('subject_id', subjectId)
      .eq('name', paper)
      .single();

    if (error) {
      return { data: null, error };
    }

    return { data, error: null };
  } catch (error) {
    return { data: null, error: error as Error };
  }
}

/**
 * Get all chapters with question counts
 * Useful for displaying chapter lists with metadata
 * @param subjectId - Optional subject ID to filter by
 * @returns Array of chapters with question counts
 */
export async function getChaptersWithQuestionCounts(
  subjectId?: string
): Promise<DbResultArray<ChapterWithStats>> {
  try {
    let query = supabase
      .from('chapters')
      .select(`
        *,
        questions:questions(count)
      `)
      .order('name', { ascending: true });

    if (subjectId) {
      query = query.eq('subject_id', subjectId);
    }

    const { data: chapters, error } = await query;

    if (error) {
      return { data: null, error };
    }

    if (!chapters) {
      return { data: [], error: null };
    }

    // Transform the data to include question_count
    const chaptersWithStats = chapters.map((chapter: any) => ({
      ...chapter,
      question_count: chapter.questions?.[0]?.count || 0,
    }));

    return { data: chaptersWithStats, error: null };
  } catch (error) {
    return { data: null, error: error as Error };
  }
}

/**
 * Get chapters by paper (across all subjects)
 * @param paper - Paper name ('Paper 1' or 'Paper 2')
 * @returns Array of chapters for the specified paper
 */
export async function getChaptersByPaper(
  paper: 'Paper 1' | 'Paper 2'
): Promise<DbResultArray<Chapter>> {
  try {
    const { data, error } = await supabase
      .from('chapters')
      .select('*')
      .eq('name', paper)
      .order('subject_id', { ascending: true });

    if (error) {
      return { data: null, error };
    }

    return { data, error: null };
  } catch (error) {
    return { data: null, error: error as Error };
  }
}

/**
 * Get chapters with their subject information
 * @param subjectId - Optional subject ID to filter by
 * @returns Array of chapters with subject details
 */
export async function getChaptersWithSubjects(
  subjectId?: string
): Promise<DbResultArray<Chapter & { subject: any }>> {
  try {
    let query = supabase
      .from('chapters')
      .select(`
        *,
        subject:subjects(*)
      `)
      .order('name', { ascending: true });

    if (subjectId) {
      query = query.eq('subject_id', subjectId);
    }

    const { data, error } = await query;

    if (error) {
      return { data: null, error };
    }

    return { data, error: null };
  } catch (error) {
    return { data: null, error: error as Error };
  }
}
