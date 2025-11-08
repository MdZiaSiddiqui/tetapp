export const SUPPORTED_SUBJECT_SLUGS = [
  "child-development-pedagogy-paper1",
  "child-development-pedagogy-paper2",
  "english-paper1",
  "english-paper2",
  "mathematics-paper1",
  "mathematics-paper2",
  "environmental-studies-paper1",
  "science-paper2",
  "social-studies-paper2",
  "urdu-paper1",
  "urdu-paper2",
  "telugu-paper1",
  "telugu-paper2",
] as const;

export type SubjectSlug = (typeof SUPPORTED_SUBJECT_SLUGS)[number];

const SUBJECT_SET = new Set<string>(SUPPORTED_SUBJECT_SLUGS);

export const isSubjectSupported = (subject: string): subject is SubjectSlug =>
  SUBJECT_SET.has(subject);

export const DEFAULT_QUESTION_COUNT = 30;
export const SOCIAL_STUDIES_QUESTION_COUNT = 60;

export const getQuestionLimitForSubject = (subject: string): number =>
  subject.startsWith("social") ? SOCIAL_STUDIES_QUESTION_COUNT : DEFAULT_QUESTION_COUNT;

export type QuizMode = "practice" | "mock";
