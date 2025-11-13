import { getStaticExplanation } from './staticExplanations';

type PossibleExplanation = string | null | undefined;

type GenericQuestion = Record<string, unknown> | null | undefined;

const EXPLANATION_KEYS = [
  'solutions',
  'explanation',
  'solution',
  'solutionText',
  'solution_text',
  'answerExplanation',
  'answer_explanation',
  'detailedSolution',
  'detailed_solution',
  'explanationText',
  'explanation_text',
];

const isNonEmptyString = (value: unknown): value is string =>
  typeof value === 'string' && value.trim().length > 0;

const extractFromObject = (value: Record<string, unknown>): string | null => {
  for (const key of ['text', 'content', 'value']) {
    if (key in value) {
      const candidate = (value as Record<string, unknown>)[key];
      const normalized = normalizeExplanationValue(candidate);
      if (normalized) {
        return normalized;
      }
    }
  }
  return null;
};

const normalizeExplanationValue = (value: unknown): string | null => {
  if (!value) {
    return null;
  }

  if (isNonEmptyString(value)) {
    return value.trim();
  }

  if (Array.isArray(value)) {
    const parts = value
      .map((item) => normalizeExplanationValue(item))
      .filter((part): part is string => !!part);

    if (parts.length === 0) {
      return null;
    }

    const joined = parts.join('\n');
    return joined.trim().length > 0 ? joined : null;
  }

  if (typeof value === 'object') {
    return extractFromObject(value as Record<string, unknown>);
  }

  const stringified = String(value).trim();
  return stringified.length > 0 ? stringified : null;
};

/**
 * Safely fetches the best available explanation text from a question record.
 * Attempts multiple known keys and gracefully handles varied data shapes.
 */
export const getQuestionExplanation = (question: GenericQuestion): string | null => {
  if (!question || typeof question !== 'object') {
    return null;
  }

  for (const key of EXPLANATION_KEYS) {
    if (key in question) {
      const candidate = (question as Record<string, unknown>)[key] as PossibleExplanation;
      const normalized = normalizeExplanationValue(candidate);
      if (normalized) {
        return normalized;
      }
    }
  }

  const possibleQuestionText = (() => {
    const record = question as Record<string, unknown>;
    const candidate = record.question ?? record.text;
    return typeof candidate === 'string' ? candidate : null;
  })();

  if (possibleQuestionText) {
    const staticExplanation = getStaticExplanation(possibleQuestionText);
    if (staticExplanation) {
      return staticExplanation;
    }
  }

  return null;
};

export default getQuestionExplanation;
