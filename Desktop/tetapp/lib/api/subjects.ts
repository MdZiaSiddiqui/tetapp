/**
 * API utilities for fetching subjects from Supabase
 */

import { supabase } from '../supabase';
import type { Subject, SubjectWithStats, DbResult, DbResultArray } from '../types/database.types';

/**
 * Get all subjects
 * @returns Array of all TET subjects
 */
export async function getSubjects(): Promise<DbResultArray<Subject>> {
  try {
    const { data, error } = await supabase
      .from('subjects')
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
 * Get all subjects with statistics (question count, chapter count)
 * @returns Array of subjects with stats
 */
export async function getSubjectsWithStats(): Promise<DbResultArray<SubjectWithStats>> {
  try {
    // Get subjects with chapter counts
    const { data: subjects, error: subjectsError } = await supabase
      .from('subjects')
      .select(`
        *,
        chapters:chapters(count)
      `)
      .order('name', { ascending: true });

    if (subjectsError) {
      return { data: null, error: subjectsError };
    }

    if (!subjects) {
      return { data: [], error: null };
    }

    // For each subject, get question count and available papers
    const subjectsWithStats = await Promise.all(
      subjects.map(async (subject: any) => {
        // Get question count
        const { count: questionCount } = await supabase
          .from('questions')
          .select('*', { count: 'exact', head: true })
          .eq('subject_id', subject.id);

        // Get available papers for this subject
        const { data: papers } = await supabase
          .from('chapters')
          .select('name')
          .eq('subject_id', subject.id);

        const uniquePapers = papers
          ? [...new Set(papers.map(p => p.name as 'Paper 1' | 'Paper 2'))]
          : [];

        return {
          ...subject,
          question_count: questionCount || 0,
          chapter_count: subject.chapters?.[0]?.count || 0,
          papers: uniquePapers,
        };
      })
    );

    return { data: subjectsWithStats, error: null };
  } catch (error) {
    return { data: null, error: error as Error };
  }
}

/**
 * Get a single subject by ID
 * @param subjectId - Subject ID (e.g., 'child-development')
 * @returns Single subject
 */
export async function getSubjectById(subjectId: string): Promise<DbResult<Subject>> {
  try {
    const { data, error } = await supabase
      .from('subjects')
      .select('*')
      .eq('id', subjectId)
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
 * Get a single subject by ID with statistics
 * @param subjectId - Subject ID (e.g., 'child-development')
 * @returns Single subject with stats
 */
export async function getSubjectByIdWithStats(
  subjectId: string
): Promise<DbResult<SubjectWithStats>> {
  try {
    // Get subject with chapter count
    const { data: subject, error: subjectError } = await supabase
      .from('subjects')
      .select(`
        *,
        chapters:chapters(count)
      `)
      .eq('id', subjectId)
      .single();

    if (subjectError) {
      return { data: null, error: subjectError };
    }

    // Get question count
    const { count: questionCount } = await supabase
      .from('questions')
      .select('*', { count: 'exact', head: true })
      .eq('subject_id', subjectId);

    // Get available papers
    const { data: papers } = await supabase
      .from('chapters')
      .select('name')
      .eq('subject_id', subjectId);

    const uniquePapers = papers
      ? [...new Set(papers.map(p => p.name as 'Paper 1' | 'Paper 2'))]
      : [];

    const subjectWithStats: SubjectWithStats = {
      ...subject,
      question_count: questionCount || 0,
      chapter_count: (subject as any).chapters?.[0]?.count || 0,
      papers: uniquePapers,
    };

    return { data: subjectWithStats, error: null };
  } catch (error) {
    return { data: null, error: error as Error };
  }
}

/**
 * Search subjects by name
 * @param searchTerm - Search term (case-insensitive)
 * @returns Array of matching subjects
 */
export async function searchSubjects(searchTerm: string): Promise<DbResultArray<Subject>> {
  try {
    const { data, error } = await supabase
      .from('subjects')
      .select('*')
      .ilike('name', `%${searchTerm}%`)
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
 * Get subjects by paper availability
 * @param paper - Paper to filter by ('Paper 1' or 'Paper 2')
 * @returns Array of subjects that have the specified paper
 */
export async function getSubjectsByPaper(
  paper: 'Paper 1' | 'Paper 2'
): Promise<DbResultArray<Subject>> {
  try {
    // Get all chapters with the specified paper
    const { data: chapters, error: chaptersError } = await supabase
      .from('chapters')
      .select('subject_id')
      .eq('name', paper);

    if (chaptersError) {
      return { data: null, error: chaptersError };
    }

    if (!chapters || chapters.length === 0) {
      return { data: [], error: null };
    }

    // Get unique subject IDs
    const subjectIds = [...new Set(chapters.map(c => c.subject_id))];

    // Get subjects
    const { data: subjects, error: subjectsError } = await supabase
      .from('subjects')
      .select('*')
      .in('id', subjectIds)
      .order('name', { ascending: true });

    if (subjectsError) {
      return { data: null, error: subjectsError };
    }

    return { data: subjects, error: null };
  } catch (error) {
    return { data: null, error: error as Error };
  }
}
