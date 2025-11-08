"use server";

import { supabaseServiceClient } from "@/lib/supabase/service";
import { getSessionFromCookies } from "@/lib/session";

export type RecordQuizAttemptInput = {
  subjectSlug: string;
  mode: "practice" | "mock";
  totalQuestions: number;
  correctAnswers: number;
  timeSpentSeconds?: number | null;
};

export type RecordQuizAttemptResult =
  | { success: true }
  | { success: false; error: string };

const sanitizeInteger = (value: number, fallback = 0) =>
  Number.isFinite(value) ? Math.trunc(value) : fallback;

export const recordQuizAttempt = async (
  input: RecordQuizAttemptInput,
): Promise<RecordQuizAttemptResult> => {
  const session = await getSessionFromCookies();

  if (!session) {
    return { success: false, error: "Not authenticated." };
  }

  const subjectSlug = input.subjectSlug?.trim();
  if (!subjectSlug) {
    return { success: false, error: "Missing subject slug." };
  }

  const totalQuestions = sanitizeInteger(input.totalQuestions);
  const correctAnswers = Math.max(
    0,
    Math.min(sanitizeInteger(input.correctAnswers), totalQuestions),
  );

  if (totalQuestions <= 0) {
    return { success: false, error: "Total questions must be greater than zero." };
  }

  const timeSpentSeconds = input.timeSpentSeconds ?? null;

  try {
    const supabase = supabaseServiceClient();
    const { error } = await supabase.from("quiz_attempts").insert({
      user_id: session.userId,
      subject_slug: subjectSlug,
      mode: input.mode,
      total_questions: totalQuestions,
      correct_answers: correctAnswers,
      time_spent_seconds: timeSpentSeconds,
    });

    if (error) {
      console.error("recordQuizAttempt: unable to insert", error);
      return { success: false, error: "Failed to store quiz attempt." };
    }

    return { success: true };
  } catch (error) {
    console.error("recordQuizAttempt: unexpected error", error);
    return { success: false, error: "Unexpected error occurred." };
  }
};
