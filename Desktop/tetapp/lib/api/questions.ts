/**
 * API utilities for fetching questions from Supabase
 */

import { supabase } from '../supabase';
import type { Question, QuestionWithDetails, FetchQuestionsParams } from '../types/database.types';

/**
 * Fetch questions by chapter name and subject
 * @param subjectName - Name of the subject (e.g., "Biochemistry")
 * @param chapterName - Name of the chapter (e.g., "Enzymes")
 * @returns Array of questions for the specified chapter
 */
export async function getQuestionsByChapter(
  subjectName: string,
  chapterName: string
): Promise<{ data: Question[] | null; error: Error | null }> {
  try {
    // First, get the chapter ID
    const { data: chapter, error: chapterError } = await supabase
      .from('chapters')
      .select('id, subject_id')
      .eq('name', chapterName)
      .single();

    if (chapterError) {
      return { data: null, error: chapterError };
    }

    // Verify the chapter belongs to the correct subject
    const { data: subject, error: subjectError } = await supabase
      .from('subjects')
      .select('id, name')
      .eq('id', chapter.subject_id)
      .single();

    if (subjectError) {
      return { data: null, error: subjectError };
    }

    if (subject.name !== subjectName) {
      return {
        data: null,
        error: new Error(`Chapter "${chapterName}" does not belong to subject "${subjectName}"`),
      };
    }

    // Fetch questions for this chapter
    const { data: questions, error: questionsError } = await supabase
      .from('questions')
      .select('*')
      .eq('chapter_id', chapter.id)
      .order('created_at', { ascending: true });

    if (questionsError) {
      return { data: null, error: questionsError };
    }

    return { data: questions, error: null };
  } catch (error) {
    return { data: null, error: error as Error };
  }
}

/**
 * Fetch questions by chapter ID
 * @param chapterId - UUID of the chapter
 * @returns Array of questions for the specified chapter
 */
export async function getQuestionsByChapterId(
  chapterId: string
): Promise<{ data: Question[] | null; error: Error | null }> {
  const { data, error } = await supabase
    .from('questions')
    .select('*')
    .eq('chapter_id', chapterId)
    .order('created_at', { ascending: true });

  return { data, error };
}

/**
 * Fetch questions with optional filters
 * @param params - Filter parameters
 * @returns Filtered array of questions
 */
export async function getQuestions(
  params: FetchQuestionsParams = {}
): Promise<{ data: Question[] | null; error: Error | null }> {
  let query = supabase.from('questions').select('*');

  // Apply filters
  if (params.subject_id) {
    query = query.eq('subject_id', params.subject_id);
  }

  if (params.chapter_id) {
    query = query.eq('chapter_id', params.chapter_id);
  }

  if (params.difficulty) {
    query = query.eq('difficulty', params.difficulty);
  }

  if (params.paper) {
    query = query.eq('paper', params.paper);
  }

  if (params.language) {
    query = query.eq('language', params.language);
  }

  if (params.tag) {
    query = query.eq('tag', params.tag);
  }

  // Apply pagination
  if (params.limit) {
    query = query.limit(params.limit);
  }

  if (params.offset) {
    query = query.range(params.offset, params.offset + (params.limit || 10) - 1);
  }

  const { data, error } = await query.order('question_number', { ascending: true });

  return { data, error };
}

/**
 * Fetch questions with related subject and chapter details
 * @param params - Filter parameters
 * @returns Questions with subject and chapter information
 */
export async function getQuestionsWithDetails(
  params: FetchQuestionsParams = {}
): Promise<{ data: QuestionWithDetails[] | null; error: Error | null }> {
  let query = supabase
    .from('questions')
    .select(`
      *,
      subject:subjects(id, name),
      chapter:chapters(id, name, description)
    `);

  // Apply filters (same as getQuestions)
  if (params.subject_id) {
    query = query.eq('subject_id', params.subject_id);
  }

  if (params.chapter_id) {
    query = query.eq('chapter_id', params.chapter_id);
  }

  if (params.difficulty) {
    query = query.eq('difficulty', params.difficulty);
  }

  if (params.tag) {
    query = query.eq('tag', params.tag);
  }

  if (params.limit) {
    query = query.limit(params.limit);
  }

  if (params.offset) {
    query = query.range(params.offset, params.offset + (params.limit || 10) - 1);
  }

  const { data, error } = await query.order('created_at', { ascending: true });

  return { data: data as QuestionWithDetails[] | null, error };
}

/**
 * Fetch a random set of questions based on filters
 * @param params - Filter parameters
 * @returns Random questions matching the criteria
 */
export async function getRandomQuestions(
  params: FetchQuestionsParams & { count: number }
): Promise<{ data: Question[] | null; error: Error | null }> {
  const { count, ...filterParams } = params;

  // First, get all matching questions
  const { data: allQuestions, error } = await getQuestions(filterParams);

  if (error || !allQuestions) {
    return { data: null, error };
  }

  // Shuffle and take the required count
  const shuffled = allQuestions.sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, count);

  return { data: selected, error: null };
}

/**
 * Get question count by chapter
 * @param chapterId - UUID of the chapter
 * @returns Count of questions in the chapter
 */
export async function getQuestionCountByChapter(
  chapterId: string
): Promise<{ count: number | null; error: Error | null }> {
  const { count, error } = await supabase
    .from('questions')
    .select('*', { count: 'exact', head: true })
    .eq('chapter_id', chapterId);

  return { count, error };
}

/**
 * Get all chapters with question counts
 * @param subjectId - Optional subject ID to filter by
 * @returns Chapters with their question counts
 */
export async function getChaptersWithQuestionCounts(subjectId?: string) {
  let query = supabase
    .from('chapters')
    .select(`
      *,
      questions:questions(count)
    `);

  if (subjectId) {
    query = query.eq('subject_id', subjectId);
  }

  const { data, error } = await query.order('name', { ascending: true });

  return { data, error };
}

// ============================================
// TET-SPECIFIC FUNCTIONS
// ============================================

/**
 * Get questions by subject, paper, and language
 * @param subjectId - Subject ID (e.g., 'child-development')
 * @param paper - Paper name ('Paper 1' or 'Paper 2')
 * @param language - Language ('English', 'Telugu', or 'Urdu')
 * @param limit - Optional limit
 * @returns Questions matching the criteria
 */
export async function getQuestionsBySubjectPaperLanguage(
  subjectId: string,
  paper: 'Paper 1' | 'Paper 2',
  language: 'English' | 'Telugu' | 'Urdu',
  limit?: number
): Promise<{ data: Question[] | null; error: Error | null }> {
  let query = supabase
    .from('questions')
    .select('*')
    .eq('subject_id', subjectId)
    .eq('paper', paper)
    .eq('language', language)
    .order('question_number', { ascending: true });

  if (limit) {
    query = query.limit(limit);
  }

  const { data, error } = await query;
  return { data, error };
}

/**
 * Get random questions for practice mode
 * Filters by subject, paper, language, difficulty
 * @param params - Filter parameters with count
 * @returns Random questions
 */
export async function getRandomQuestionsForPractice(
  params: FetchQuestionsParams & { count: number }
): Promise<{ data: Question[] | null; error: Error | null }> {
  const { count, ...filterParams } = params;

  // Get all matching questions
  const { data: allQuestions, error } = await getQuestions(filterParams);

  if (error || !allQuestions || allQuestions.length === 0) {
    return { data: null, error };
  }

  // Shuffle using Fisher-Yates algorithm
  const shuffled = [...allQuestions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Take required count
  const selected = shuffled.slice(0, Math.min(count, shuffled.length));

  return { data: selected, error: null };
}

/**
 * Get question count by filters
 * @param params - Filter parameters
 * @returns Count of matching questions
 */
export async function getQuestionCount(
  params: FetchQuestionsParams = {}
): Promise<{ count: number | null; error: Error | null }> {
  let query = supabase
    .from('questions')
    .select('*', { count: 'exact', head: true });

  if (params.subject_id) {
    query = query.eq('subject_id', params.subject_id);
  }

  if (params.chapter_id) {
    query = query.eq('chapter_id', params.chapter_id);
  }

  if (params.difficulty) {
    query = query.eq('difficulty', params.difficulty);
  }

  if (params.paper) {
    query = query.eq('paper', params.paper);
  }

  if (params.language) {
    query = query.eq('language', params.language);
  }

  if (params.tag) {
    query = query.eq('tag', params.tag);
  }

  const { count, error } = await query;
  return { count, error };
}

/**
 * Get available languages for a subject and paper
 * @param subjectId - Subject ID
 * @param paper - Paper name
 * @returns Array of available languages
 */
export async function getAvailableLanguages(
  subjectId: string,
  paper: 'Paper 1' | 'Paper 2'
): Promise<{ data: ('English' | 'Telugu' | 'Urdu')[] | null; error: Error | null }> {
  const { data, error } = await supabase
    .from('questions')
    .select('language')
    .eq('subject_id', subjectId)
    .eq('paper', paper);

  if (error || !data) {
    return { data: null, error };
  }

  const uniqueLanguages = [...new Set(data.map(q => q.language as 'English' | 'Telugu' | 'Urdu'))];
  return { data: uniqueLanguages, error: null };
}

/**
 * Get question statistics for a subject
 * @param subjectId - Subject ID
 * @returns Statistics object
 */
export async function getQuestionStats(subjectId: string): Promise<{
  data: {
    total: number;
    by_paper: Record<string, number>;
    by_language: Record<string, number>;
    by_difficulty: Record<string, number>;
  } | null;
  error: Error | null;
}> {
  try {
    const { data: questions, error } = await supabase
      .from('questions')
      .select('paper, language, difficulty')
      .eq('subject_id', subjectId);

    if (error || !questions) {
      return { data: null, error };
    }

    const stats = {
      total: questions.length,
      by_paper: {} as Record<string, number>,
      by_language: {} as Record<string, number>,
      by_difficulty: {} as Record<string, number>,
    };

    questions.forEach(q => {
      // Count by paper
      stats.by_paper[q.paper] = (stats.by_paper[q.paper] || 0) + 1;

      // Count by language
      stats.by_language[q.language] = (stats.by_language[q.language] || 0) + 1;

      // Count by difficulty
      stats.by_difficulty[q.difficulty] = (stats.by_difficulty[q.difficulty] || 0) + 1;
    });

    return { data: stats, error: null };
  } catch (error) {
    return { data: null, error: error as Error };
  }
}

/**
 * Get questions for a subject by mode (Practice, Test, or Notes)
 * Uses fixed question sets based on session number for consistent test experiences
 * @param subjectId - Subject ID
 * @param language - Language filter (English, Telugu, or Urdu)
 * @param paper - Paper filter ('Paper 1' or 'Paper 2')
 * @param mode - Mode type ('practice', 'test', or 'notes')
 * @param count - Number of questions to fetch (default: 30, social subject gets 60)
 * @param sessionNumber - Session number (1-50) to determine which question set to fetch
 * @returns Fixed set of questions for the specified session
 */
export async function getQuestionsBySubjectAndMode(
  subjectId: string,
  language: 'English' | 'Telugu' | 'Urdu',
  paper: 'Paper 1' | 'Paper 2',
  mode: 'practice' | 'test' | 'notes',
  count: number = 30,
  sessionNumber: number = 1
): Promise<{ data: Question[] | null; error: Error | null }> {
  try {
    console.log('🔍 [getQuestionsBySubjectAndMode] Query params:', { subjectId, language, paper, mode, count, sessionNumber });

    // Fetch all questions for this subject, language, and paper ordered by question_number
    let query = supabase
      .from('questions')
      .select('*')
      .eq('subject_id', subjectId)
      .eq('language', language)
      .eq('paper', paper)
      .order('question_number', { ascending: true });

    const { data: allQuestions, error } = await query;

    console.log('✅ [getQuestionsBySubjectAndMode] Query result:', {
      found: allQuestions?.length || 0,
      error: error?.message,
      filters: { subjectId, language, paper }
    });

    if (error || !allQuestions || allQuestions.length === 0) {
      // Try alternative paper formats
      console.log('⚠️ [DEBUG] Trying alternative paper formats...');
      const alternativePapers = [
        paper.replace(' ', '-'),  // 'Paper-2'
        paper.replace(' ', ''),   // 'Paper2'
        `Paper-${paper.split(' ')[1]}`,  // Ensure hyphen format
      ];

      for (const altPaper of alternativePapers) {
        const { data: altData, error: altError } = await supabase
          .from('questions')
          .select('*')
          .eq('subject_id', subjectId)
          .eq('language', language)
          .eq('paper', altPaper);

        console.log(`🔄 Trying paper format "${altPaper}":`, { found: altData?.length || 0 });

        if (altData && altData.length > 0) {
          console.log(`✅ Found questions with paper="${altPaper}"`);
          return { data: null, error }; // Still return error but with debug info
        }
      }

      return { data: null, error };
    }

    // Calculate the question range for this session
    // Session 1: questions 0-29, Session 2: questions 30-59, etc.
    const totalQuestions = allQuestions.length;
    const startIndex = ((sessionNumber - 1) * count) % totalQuestions;

    // Select questions for this session with wrap-around
    const selected: Question[] = [];
    for (let i = 0; i < count && i < totalQuestions; i++) {
      const index = (startIndex + i) % totalQuestions;
      selected.push(allQuestions[index]);
    }

    console.log('📋 [getQuestionsBySubjectAndMode] Selected questions:', {
      sessionNumber,
      startIndex,
      totalAvailable: totalQuestions,
      selectedCount: selected.length,
      questionRange: `${startIndex + 1} to ${((startIndex + selected.length - 1) % totalQuestions) + 1}`
    });

    return { data: selected, error: null };
  } catch (error) {
    return { data: null, error: error as Error };
  }
}
