import "dotenv/config";
import { supabaseServiceClient } from "@/lib/supabase/service";
import { childDevelopmentPaper1UrduQuestions } from "@/data/childDevelopmentPaper1DataUrdu";
import { coerceLanguageForSubject, DEFAULT_LANGUAGE, type QuestionLanguage } from "@/lib/questions/languages";
import { isSubjectSupported, type SubjectSlug } from "@/lib/questions/subjects";

const LANGUAGE_TABLE_MAP: Record<QuestionLanguage, string> = {
  en: "quiz_questions",
  ur: "quiz_questions_urdu",
  te: "quiz_questions_telugu",
};

type SourceQuestion = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number | string | null | undefined;
  explanation: string | null | undefined;
};

type TranslationPayload = {
  subject: SubjectSlug;
  language: QuestionLanguage;
  questions: SourceQuestion[];
};

const TRANSLATION_SOURCES: TranslationPayload[] = [
  {
    subject: "child-development-pedagogy-paper1",
    language: "ur",
    questions: childDevelopmentPaper1UrduQuestions,
  },
];

const chunk = <T,>(items: T[], size: number): T[][] => {
  if (size <= 0) {
    return [items];
  }

  const result: T[][] = [];

  for (let index = 0; index < items.length; index += size) {
    result.push(items.slice(index, index + size));
  }

  return result;
};

const normalizeQuestion = (question: SourceQuestion, fallbackId: string) => {
  const options = Array.isArray(question.options) ? question.options : [];

  if (!options.length) {
    throw new Error(
      `[seed-questions-translations] Encountered question without options (question id: ${
        question.id ?? fallbackId
      })`,
    );
  }

  const correctCandidates: number[] = [];
  const textCandidates: string[] = [];

  const addCandidate = (value: SourceQuestion["correctAnswer"]) => {
    if (typeof value === "number" && Number.isInteger(value)) {
      correctCandidates.push(value);
      return;
    }

    if (typeof value === "string") {
      const trimmed = value.trim();
      if (!trimmed) {
        return;
      }

      const digitsOnly = /^\d+$/;
      if (digitsOnly.test(trimmed)) {
        const numeric = Number.parseInt(trimmed, 10);
        if (!Number.isNaN(numeric)) {
          correctCandidates.push(numeric);
        }
      }

      textCandidates.push(trimmed);
    }
  };

  addCandidate(question.correctAnswer);

  const resolvedIndex = correctCandidates.find(
    (candidate) => candidate >= 0 && candidate < options.length,
  );

  if (resolvedIndex !== undefined) {
    return {
      source_question_id: String(question.id ?? fallbackId),
      question: question.question ?? "",
      options,
      correct_answer: resolvedIndex,
      explanation: question.explanation ?? null,
    };
  }

  const matchFromText = textCandidates
    .map((candidate) => {
      const candidateTrimmed = candidate.trim();
      const candidateFirstLine = candidateTrimmed.split("\n")[0]?.trim() ?? "";

      return options.findIndex((option) => {
        const optionTrimmed = option?.trim() ?? "";
        if (!optionTrimmed) {
          return false;
        }

        if (optionTrimmed === candidateTrimmed) {
          return true;
        }

        const optionFirstLine = optionTrimmed.split("\n")[0]?.trim() ?? "";

        return (
          optionFirstLine === candidateTrimmed ||
          optionFirstLine === candidateFirstLine ||
          optionTrimmed === candidateFirstLine
        );
      });
    })
    .find((index) => index !== undefined && index >= 0);

  return {
    source_question_id: String(question.id ?? fallbackId),
    question: question.question ?? "",
    options,
    correct_answer: typeof matchFromText === "number" && matchFromText >= 0 ? matchFromText : 0,
    explanation: question.explanation ?? null,
  };
};

async function main() {
  const supabase = supabaseServiceClient();

  for (const { subject, language, questions } of TRANSLATION_SOURCES) {
    if (!isSubjectSupported(subject)) {
      console.warn(
        `[seed-questions-translations] ⚠️  Subject ${subject} is not supported. Skipping.`,
      );
      continue;
    }

    const normalizedLanguage = coerceLanguageForSubject(subject, language);

    if (normalizedLanguage === DEFAULT_LANGUAGE) {
      console.warn(
        `[seed-questions-translations] ⚠️  Subject ${subject} does not support alternate language ${language}. Skipping.`,
      );
      continue;
    }

    const targetTable = LANGUAGE_TABLE_MAP[normalizedLanguage];

    if (!targetTable) {
      console.warn(
        `[seed-questions-translations] ⚠️  No translation table mapped for language ${normalizedLanguage}. Skipping ${subject}.`,
      );
      continue;
    }

    if (!questions?.length) {
      console.warn(
        `[seed-questions-translations] ⚠️  No translation questions available for ${subject} (${normalizedLanguage}). Skipping.`,
      );
      continue;
    }

    console.log(
      `[seed-questions-translations] ▶️  Syncing ${subject} (${normalizedLanguage}) with ${questions.length} questions`,
    );

    const { error: deleteError } = await supabase
      .from(targetTable)
      .delete()
      .eq("subject_slug", subject);

    if (deleteError) {
      throw new Error(
        `[seed-questions-translations] Failed to clean existing data for ${subject} (${normalizedLanguage}): ${deleteError.message}`,
      );
    }

    const batches = chunk(questions, 500);

    for (const [batchIndex, batch] of batches.entries()) {
      const payload = batch.map((question, index) => ({
        subject_slug: subject,
        ...normalizeQuestion(question, `${subject}-${batchIndex}-${index}`),
      }));

      const { error } = await supabase.from(targetTable).insert(payload);
      if (error) {
        throw new Error(
          `[seed-questions-translations] Failed to insert batch ${batchIndex + 1} for ${subject} (${normalizedLanguage}): ${error.message}`,
        );
      }
    }

    console.log(
      `[seed-questions-translations] ✅  ${subject} (${normalizedLanguage}) synced successfully.`,
    );
  }

  console.log("[seed-questions-translations] 🎉 All translations synced successfully.");
}

main().catch((error) => {
  console.error("[seed-questions-translations] ❌ Unexpected failure", error);
  process.exit(1);
});
