import { requireProSession } from "@/actions/auth";
import { supabaseServiceClient } from "@/lib/supabase/service";

import DashboardClient, {
  type DashboardProgressRecord,
  type DashboardAttemptRecord,
} from "./DashboardClient";

const DashboardPage = async () => {
  const session = await requireProSession();

  const supabase = supabaseServiceClient();
  const { data: attemptsData, error: attemptsError } = await supabase
    .from("quiz_attempts")
    .select(
      "id, subject_slug, paper, mode, correct_answers, total_questions, score_percent, completed_at",
    )
    .eq("user_id", session.userId)
    .order("completed_at", { ascending: true });

  if (attemptsError) {
    console.error("DashboardPage: unable to load attempts", attemptsError);
  }

  type AttemptRow = {
    id: number;
    subject_slug: string;
    paper: string | null;
    mode: string | null;
    correct_answers: number | null;
    total_questions: number | null;
    score_percent: string | number | null;
    completed_at: string | null;
  };

  const decodedAttempts = (attemptsData ?? []) as AttemptRow[];

  const attempts: DashboardAttemptRecord[] = decodedAttempts.map((row) => ({
    id: row.id,
    subjectSlug: row.subject_slug,
    mode: (row.mode === "mock" ? "mock" : "practice") as DashboardAttemptRecord["mode"],
    scorePercent:
      row.score_percent === null || row.score_percent === undefined
        ? null
        : Number(row.score_percent),
    completedAt: row.completed_at,
  }));

  type ProgressAccumulator = {
    data: DashboardProgressRecord;
    lastCompletedTs: number | null;
    bestScoreValue: number;
    bestCompletedTs: number | null;
  };

  const progressMap = new Map<string, ProgressAccumulator>();

  decodedAttempts.forEach((row) => {
    const key = `${row.subject_slug}-${row.mode}`;
    const currentPercent =
      row.score_percent === null || row.score_percent === undefined
        ? null
        : Number(row.score_percent);
    const completedAt = row.completed_at ?? null;
    const completedTs = completedAt ? Date.parse(completedAt) : null;
    const currentPaper =
      (row.paper === "paper2" ? "paper2" : "paper1") as DashboardProgressRecord["paper"];
    const currentMode =
      (row.mode === "mock" ? "mock" : "practice") as DashboardProgressRecord["mode"];
    const currentScoreValue = Number.isFinite(currentPercent ?? NaN)
      ? Number(currentPercent)
      : Number.NEGATIVE_INFINITY;

    const existing = progressMap.get(key);

    if (!existing) {
      progressMap.set(key, {
        data: {
          subjectSlug: row.subject_slug,
          paper: currentPaper,
          mode: currentMode,
          attempts: 1,
          lastAttemptedAt: completedAt,
          lastScorePercent: currentPercent,
          lastCorrectAnswers: row.correct_answers ?? null,
          lastTotalQuestions: row.total_questions ?? null,
          bestScorePercent: currentPercent,
          bestCorrectAnswers: row.correct_answers ?? null,
          bestTotalQuestions: row.total_questions ?? null,
        },
        lastCompletedTs: completedTs,
        bestScoreValue: currentScoreValue,
        bestCompletedTs: completedTs,
      });
      return;
    }

    existing.data.attempts += 1;

    if (
      completedTs !== null &&
      (existing.lastCompletedTs === null || completedTs > existing.lastCompletedTs)
    ) {
      existing.data.lastAttemptedAt = completedAt;
      existing.data.lastScorePercent = currentPercent;
      existing.data.lastCorrectAnswers = row.correct_answers ?? null;
      existing.data.lastTotalQuestions = row.total_questions ?? null;
      existing.lastCompletedTs = completedTs;
    }

    if (
      currentScoreValue > existing.bestScoreValue ||
      (
        currentScoreValue === existing.bestScoreValue &&
        completedTs !== null &&
        (existing.bestCompletedTs === null || completedTs > existing.bestCompletedTs)
      )
    ) {
      existing.data.bestScorePercent = currentPercent;
      existing.data.bestCorrectAnswers = row.correct_answers ?? null;
      existing.data.bestTotalQuestions = row.total_questions ?? null;
      existing.bestScoreValue = currentScoreValue;
      existing.bestCompletedTs = completedTs;
    }
  });

  const progress = Array.from(progressMap.values()).map((entry) => entry.data);

  return (
    <DashboardClient
      userEmail={session.email}
      lastLoginAt={session.lastLoginAt}
      progress={progress}
      attempts={attempts}
    />
  );
};

export default DashboardPage;
