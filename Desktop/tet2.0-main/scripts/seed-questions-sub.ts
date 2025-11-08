import 'dotenv/config';
import { supabaseServiceClient } from "@/lib/supabase/service";
import {
  SUPPORTED_SUBJECT_SLUGS,
  SubjectSlug,
} from "@/lib/questions/subjects";
import { urduPaper1Questions } from "@/data/urduPaper1Data";

type SourceQuestion = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string | null | undefined;
};

const SUBJECT: SubjectSlug = "urdu-paper1";

const chunk = <T,>(items: T[], size: number): T[][] => {
  if (size <= 0) return [items];
  const out: T[][] = [];
  for (let i = 0; i < items.length; i += size) out.push(items.slice(i, i + size));
  return out;
};

const normalizeQuestion = (q: SourceQuestion, fallbackId: string) => ({
  source_question_id: q.id ?? fallbackId,
  question: q.question.trim(),
  options: q.options,
  correct_answer: q.correctAnswer,
  explanation: q.explanation ?? null,
});

async function main() {
  const supabase = supabaseServiceClient();

  if (!SUPPORTED_SUBJECT_SLUGS.includes(SUBJECT)) {
    throw new Error(`Subject not supported: ${SUBJECT}`);
  }

  console.log(`[seed-questions] ▶️  Syncing ${SUBJECT} (${urduPaper1Questions.length} questions)`);

  const { error: delErr } = await supabase.from("quiz_questions")
    .delete()
    .eq("subject_slug", SUBJECT);
  if (delErr) throw new Error(`Cleanup failed: ${delErr.message}`);

  const batches = chunk(urduPaper1Questions, 500);

  for (const [batchIndex, batch] of batches.entries()) {
    const payload = batch.map((q, idx) => ({
      subject_slug: SUBJECT,
      ...normalizeQuestion(q, `${SUBJECT}-${batchIndex}-${idx}`),
    }));

    const { error } = await supabase.from("quiz_questions").insert(payload);
    if (error) throw new Error(`Insert failed at batch ${batchIndex + 1}: ${error.message}`);
  }

  console.log(`[seed-questions] ✅  ${SUBJECT} synced.`);
}

main().catch((error) => {
  console.error("[seed-questions] ❌ Unexpected failure", error);
  process.exit(1);
});

