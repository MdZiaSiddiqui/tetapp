import 'dotenv/config';
import { supabaseServiceClient } from "@/lib/supabase/service";


import {
  SUPPORTED_SUBJECT_SLUGS,
  SubjectSlug,
} from "@/lib/questions/subjects";

import { childDevelopmentPaper1Questions } from "@/data/childDevelopmentPaper1Data";
import { childDevelopmentPaper2Questions } from "@/data/childDevelopmentPaper2Data";
import { englishPaper1Questions } from "@/data/englishPaper1Data";
import { englishPaper2Questions } from "@/data/englishPaper2Data";
import { environmentalPaper1Questions } from "@/data/environmentalPaper1Data";
import { mathematicsPaper1Questions } from "@/data/mathematicsPaper1Data";
import { mathematicsPaper2Questions } from "@/data/mathematicsPaper2Data";
import { sciencePaper2Questions } from "@/data/sciencePaper2Data";
import { socialPaper1Questions } from "@/data/socialPaper1Data";
import { socialPaper2Questions } from "@/data/socialPaper2Data";
import { teluguPaper1Questions } from "@/data/teluguPaper1Data";
import { teluguPaper2Questions } from "@/data/teluguPaper2Data";
import { urduPaper1Questions } from "@/data/urduPaper1Data";
import { urduPaper2Questions } from "@/data/urduPaper2Data";

type SourceQuestion = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

const subjectQuestions: Record<SubjectSlug, SourceQuestion[]> = {
  "child-development-pedagogy-paper1": childDevelopmentPaper1Questions,
  "child-development-pedagogy-paper2": childDevelopmentPaper2Questions,
  "english-paper1": englishPaper1Questions,
  "english-paper2": englishPaper2Questions,
  "mathematics-paper1": mathematicsPaper1Questions,
  "mathematics-paper2": mathematicsPaper2Questions,
  "environmental-studies-paper1": environmentalPaper1Questions,
  "science-paper2": sciencePaper2Questions,
  "social-studies-paper1": socialPaper1Questions,
  "social-studies-paper2": socialPaper2Questions,
  "urdu-paper1": urduPaper1Questions,
  "urdu-paper2": urduPaper2Questions,
  "telugu-paper1": teluguPaper1Questions,
  "telugu-paper2": teluguPaper2Questions,
};

const chunk = <T,>(items: T[], size: number): T[][] => {
  if (size <= 0) {
    return [items];
  }

  const result: T[][] = [];

  for (let i = 0; i < items.length; i += size) {
    result.push(items.slice(i, i + size));
  }

  return result;
};

const normalizeQuestion = (question: SourceQuestion, fallbackId: string) => ({
  source_question_id: question.id ?? fallbackId,
  question: question.question.trim(),
  options: question.options,
  correct_answer: question.correctAnswer,
  explanation: question.explanation ?? null,
});

async function main() {
  const supabase = supabaseServiceClient();

  for (const subjectSlug of SUPPORTED_SUBJECT_SLUGS) {
    const questions = subjectQuestions[subjectSlug];

    if (!questions?.length) {
      console.warn(`[seed-questions] ⚠️  No questions found for subject ${subjectSlug}, skipping.`);
      continue;
    }

    console.log(`[seed-questions] ▶️  Syncing ${subjectSlug} (${questions.length} questions)`);

    const { error: deleteError } = await supabase
      .from("quiz_questions")
      .delete()
      .eq("subject_slug", subjectSlug);

    if (deleteError) {
      throw new Error(`Failed to clean existing data for ${subjectSlug}: ${deleteError.message}`);
    }

    const batches = chunk(questions, 500);

    for (const [batchIndex, batch] of batches.entries()) {
      const payload = batch.map((question, index) => ({
        subject_slug: subjectSlug,
        ...normalizeQuestion(question, `${subjectSlug}-${batchIndex}-${index}`),
      }));

      const { error } = await supabase.from("quiz_questions").insert(payload);
      if (error) {
        throw new Error(`Failed to insert batch ${batchIndex + 1} for ${subjectSlug}: ${error.message}`);
      }
    }

    console.log(`[seed-questions] ✅  ${subjectSlug} synced.`);
  }

  console.log("[seed-questions] 🎉 All questions synced successfully.");
}

main().catch((error) => {
  console.error("[seed-questions] ❌ Unexpected failure", error);
  process.exit(1);
});
