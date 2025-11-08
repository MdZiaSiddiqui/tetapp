import { NextRequest, NextResponse } from "next/server";
import { supabaseServiceClient } from "@/lib/supabase/service";
import { SESSION_COOKIE_NAME, verifySessionCookie } from "@/lib/session";
import {
  getQuestionLimitForSubject,
  isSubjectSupported,
  QuizMode,
  SubjectSlug,
} from "@/lib/questions/subjects";
import {
  coerceLanguageForSubject,
  sanitizeQuestionLanguage,
  type QuestionLanguage,
} from "@/lib/questions/languages";

const VALID_MODES: QuizMode[] = ["practice", "mock"];

const sanitizeMode = (value: string | null | undefined): QuizMode => {
  const lower = (value ?? "practice").trim().toLowerCase();
  return VALID_MODES.includes(lower as QuizMode) ? (lower as QuizMode) : "practice";
};

const clampLimit = (requested: number | null | undefined, fallback: number): number => {
  if (!Number.isFinite(requested) || requested === null || requested === undefined) {
    return fallback;
  }

  const parsed = Math.trunc(requested);
  if (parsed <= 0) {
    return fallback;
  }

  return Math.min(parsed, 200);
};

export async function GET(req: NextRequest) {
  const rawCookie = req.cookies.get(SESSION_COOKIE_NAME)?.value ?? null;
  const session = rawCookie ? verifySessionCookie(rawCookie) : null;
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);

  const rawSubject = searchParams.get("subject")?.trim() ?? "";
  if (!rawSubject) {
    return NextResponse.json({ error: "Missing subject parameter." }, { status: 400 });
  }

  if (!isSubjectSupported(rawSubject)) {
    return NextResponse.json({ error: "Unsupported subject." }, { status: 404 });
  }

  const subject: SubjectSlug = rawSubject;
  const mode = sanitizeMode(searchParams.get("mode"));
  const limit = clampLimit(
    searchParams.get("limit") ? Number(searchParams.get("limit")) : null,
    getQuestionLimitForSubject(subject),
  );
  const requestedLanguage = sanitizeQuestionLanguage(searchParams.get("language"));
  const language: QuestionLanguage = coerceLanguageForSubject(subject, requestedLanguage);

  try {
    const supabase = supabaseServiceClient();
    const { data, error } = await supabase.rpc("get_random_questions_multilang", {
      p_subject_slug: subject,
      p_mode: mode,
      p_limit: limit,
      p_language: language,
    });

    if (error) {
      console.error("questions GET: rpc failure", error);
      return NextResponse.json({ error: "Failed to load questions." }, { status: 500 });
    }

    type QuestionRow = {
      id: string;
      subject_slug: string;
      mode: QuizMode;
      question: string;
      options: string[] | null;
      correct_answer: number | null;
      explanation: string | null;
      language?: QuestionLanguage;
    };

    const rows = (data ?? []) as QuestionRow[];

    const questions = rows.map((row) => ({
      id: row.id,
      subjectSlug: row.subject_slug,
      mode: row.mode,
      question: row.question,
      options: row.options ?? [],
      correctAnswer: Number.isFinite(row.correct_answer)
        ? Number(row.correct_answer)
        : 0,
      explanation: row.explanation ?? "",
    }));

  return NextResponse.json({ questions, language }, { status: 200 });
  } catch (error) {
    console.error("questions GET: unexpected error", error);
    return NextResponse.json({ error: "Unexpected error." }, { status: 500 });
  }
}
