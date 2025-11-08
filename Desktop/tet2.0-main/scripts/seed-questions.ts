import 'dotenv/config';
import { supabaseServiceClient } from "@/lib/supabase/service";


import {
  SUPPORTED_SUBJECT_SLUGS,
  SubjectSlug,
} from "@/lib/questions/subjects";

import { childDevelopmentPaper1Questions } from "@/data/childDevelopmentPaper1Data";
import { childDevelopmentPaper2Questions } from "@/data/childDevelopmentPaper2Data";
import { environmentalPaper1Questions } from "@/data/environmentalPaper1Data";
import { mathematicsPaper1Questions } from "@/data/mathematicsPaper1Data";
import { mathematicsPaper2Questions } from "@/data/mathematicsPaper2Data";
import { sciencePaper2Questions } from "@/data/sciencePaper2Data";
import { socialPaper2Questions } from "@/data/socialPaper2Data";
import { englishPaper1Questions } from "@/data/englishPaper1Data";
import { englishPaper2Questions } from "@/data/englishPaper2Data";
import { teluguPaper1Questions } from "@/data/teluguPaper1Data";
import { teluguPaper2Questions } from "@/data/teluguPaper2Data";
import { urduPaper1Questions } from "@/data/urduPaper1Data";
import { urduPaper2Questions } from "@/data/urduPaper2Data";



type SourceQuestion = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number | string | null | undefined;
  explanation: string | null | undefined;
  correct?: string | number | null;
};

const subjectQuestions: Record<SubjectSlug, SourceQuestion[]> = {
  "child-development-pedagogy-paper1": childDevelopmentPaper1Questions,
  "child-development-pedagogy-paper2": childDevelopmentPaper2Questions,
  "mathematics-paper1": mathematicsPaper1Questions,
  "mathematics-paper2": mathematicsPaper2Questions,
  "environmental-studies-paper1": environmentalPaper1Questions,
  "science-paper2": sciencePaper2Questions,
  "social-studies-paper2": socialPaper2Questions,
  "english-paper1": englishPaper1Questions,
  "english-paper2": englishPaper2Questions,
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

const normalizeQuestion = (question: SourceQuestion, fallbackId: string) => {
  const sanitizedOptions = Array.isArray(question.options)
    ? question.options.map((option) => (typeof option === "string" ? option : String(option ?? "")))
    : [];

  if (sanitizedOptions.length === 0) {
    throw new Error(
      `[seed-questions] Encountered question without options (question id: ${question.id ?? fallbackId})`
    );
  }

  const questionText = typeof question.question === "string" ? question.question.trim() : "";

  const candidateIndices: Array<number> = [];
  const candidateStrings: Array<string> = [];

  const addCandidate = (value: number | string | null | undefined) => {
    if (typeof value === "number" && Number.isFinite(value)) {
      candidateIndices.push(Math.trunc(value));
      return;
    }

    if (typeof value === "string") {
      const trimmed = value.trim();
      if (trimmed.length === 0) {
        return;
      }

      const numeric = Number.parseInt(trimmed, 10);
      if (!Number.isNaN(numeric)) {
        candidateIndices.push(numeric);
      }

      candidateStrings.push(trimmed);
    }
  };

  addCandidate(question.correctAnswer);
  addCandidate(question.correct);

  let normalizedCorrectAnswer = candidateIndices.find(
    (index) => Number.isInteger(index) && index >= 0 && index < sanitizedOptions.length
  );

  if (normalizedCorrectAnswer === undefined) {
    const matchFromStrings = candidateStrings
      .map((value) =>
        sanitizedOptions.findIndex((option) => option.trim() === value)
      )
      .find((index) => index !== undefined && index >= 0);

    if (typeof matchFromStrings === "number" && matchFromStrings >= 0) {
      normalizedCorrectAnswer = matchFromStrings;
    }
  }

  if (normalizedCorrectAnswer === undefined) {
    normalizedCorrectAnswer = 0;
  }

  return {
    source_question_id: String(question.id ?? fallbackId),
    question: questionText,
    options: sanitizedOptions,
    correct_answer: normalizedCorrectAnswer,
    explanation: question.explanation ?? null,
  };
};

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
