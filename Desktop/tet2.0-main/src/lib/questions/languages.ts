import { isSubjectSupported, type SubjectSlug } from "./subjects";

export const QUESTION_LANGUAGES = ["en", "te", "ur"] as const;

export type QuestionLanguage = (typeof QUESTION_LANGUAGES)[number];

export const DEFAULT_LANGUAGE: QuestionLanguage = "en";

export const LANGUAGE_LABELS: Record<QuestionLanguage, string> = {
  en: "English",
  te: "తెలుగు",
  ur: "اردو",
};

const SUBJECT_LANGUAGE_OVERRIDES: Partial<Record<SubjectSlug, QuestionLanguage[]>> = {
  "child-development-pedagogy-paper1": ["en", "te", "ur"],
  "child-development-pedagogy-paper2": ["en", "te", "ur"],
  "environmental-studies-paper1": ["en", "te", "ur"],
  "mathematics-paper1": ["en", "te", "ur"],
  "mathematics-paper2": ["en", "te", "ur"],
  "science-paper2": ["en", "te", "ur"],
  "social-studies-paper2": ["en", "te", "ur"],
};

const uniqueOrder = (languages: QuestionLanguage[]): QuestionLanguage[] => {
  const seen = new Set<QuestionLanguage>();
  const result: QuestionLanguage[] = [];

  languages.forEach((language) => {
    if (!seen.has(language)) {
      seen.add(language);
      result.push(language);
    }
  });

  return result;
};

export const sanitizeQuestionLanguage = (
  value: string | null | undefined,
): QuestionLanguage => {
  const normalized = (value ?? "").trim().toLowerCase();

  if (QUESTION_LANGUAGES.includes(normalized as QuestionLanguage)) {
    return normalized as QuestionLanguage;
  }

  return DEFAULT_LANGUAGE;
};

export const getAvailableLanguagesForSubject = (
  subject: string,
): QuestionLanguage[] => {
  if (!isSubjectSupported(subject)) {
    return [DEFAULT_LANGUAGE];
  }

  const slug = subject as SubjectSlug;
  const overrides = SUBJECT_LANGUAGE_OVERRIDES[slug];

  if (!overrides || overrides.length === 0) {
    return [DEFAULT_LANGUAGE];
  }

  const normalized = overrides.filter((language) => QUESTION_LANGUAGES.includes(language));
  if (!normalized.includes(DEFAULT_LANGUAGE)) {
    normalized.unshift(DEFAULT_LANGUAGE);
  }

  return uniqueOrder(normalized);
};

export const coerceLanguageForSubject = (
  subject: string,
  requested: QuestionLanguage,
): QuestionLanguage => {
  const available = getAvailableLanguagesForSubject(subject);
  return available.includes(requested) ? requested : available[0] ?? DEFAULT_LANGUAGE;
};

export const hasAlternateLanguageForSubject = (subject: string): boolean => {
  const available = getAvailableLanguagesForSubject(subject);
  return available.length > 1;
};
