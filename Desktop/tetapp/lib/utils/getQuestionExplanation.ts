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
    // Remove duplicates before joining
    const uniqueParts = new Set<string>();

    value.forEach((item) => {
      const normalized = normalizeExplanationValue(item);
      if (normalized) {
        uniqueParts.add(normalized);
      }
    });

    if (uniqueParts.size === 0) {
      return null;
    }

    // If there's only one unique part, return it directly (no newlines)
    if (uniqueParts.size === 1) {
      return Array.from(uniqueParts)[0];
    }

    // Join unique parts with newlines
    const joined = Array.from(uniqueParts).join('\n');
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

  // Maximum reasonable explanation length (3,000 characters)
  // Typical explanations: 200-1000 chars
  // Detailed explanations: 1000-2000 chars
  // Very detailed: 2000-3000 chars
  // Anything beyond 3000 is likely a data issue
  const MAX_EXPLANATION_LENGTH = 3000;

  for (const key of EXPLANATION_KEYS) {
    if (key in question) {
      const candidate = (question as Record<string, unknown>)[key] as PossibleExplanation;

      // DEBUG: Log raw data type and structure
      if (candidate !== null && candidate !== undefined) {
        const dataType = Array.isArray(candidate) ? 'array' : typeof candidate;
        const arrayLength = Array.isArray(candidate) ? candidate.length : 'N/A';
        const preview = typeof candidate === 'string'
          ? candidate.substring(0, 100)
          : Array.isArray(candidate)
            ? `Array(${arrayLength}): ${JSON.stringify(candidate.slice(0, 3))}...`
            : JSON.stringify(candidate).substring(0, 100);

        console.log(`[getQuestionExplanation] Found key "${key}":`, {
          type: dataType,
          arrayLength,
          preview,
          questionId: (question as any).id || 'unknown'
        });
      }

      const normalized = normalizeExplanationValue(candidate);
      if (normalized) {
        // Log explanation length for all explanations
        console.log(
          `[getQuestionExplanation] Normalized explanation length: ${normalized.length} chars ` +
          `(Key: "${key}", Question ID: ${(question as any).id || 'unknown'})`
        );

        // Check for suspiciously long explanations (possible data issue)
        if (normalized.length > MAX_EXPLANATION_LENGTH) {
          console.warn(
            `getQuestionExplanation: Explanation exceeds max length (${normalized.length} chars). ` +
            `Truncating. Key: "${key}", Question ID: ${(question as any).id || 'unknown'}`,
            '\nFirst 200 chars:', normalized.substring(0, 200),
            '\n...Last 200 chars:', normalized.substring(normalized.length - 200)
          );

          // Smart truncation - try to cut at sentence or paragraph boundary
          let truncated = normalized.substring(0, MAX_EXPLANATION_LENGTH);

          // Try to find last sentence ending (period, question mark, or exclamation)
          const lastSentence = Math.max(
            truncated.lastIndexOf('. '),
            truncated.lastIndexOf('? '),
            truncated.lastIndexOf('! ')
          );

          // If we found a sentence boundary in the last 20% of the truncated text, use it
          if (lastSentence > MAX_EXPLANATION_LENGTH * 0.8) {
            truncated = truncated.substring(0, lastSentence + 1);
          }

          return truncated + '\n\n[Content truncated - explanation too long]';
        }
        return normalized;
      }
    }
  }

  // Debug: if we reached here, no explanation was found under expected keys
  try {
    const availableKeys = Object.keys(question as Record<string, unknown>);
    console.warn('[getQuestionExplanation] No explanation found. Available keys:', availableKeys.slice(0, 50));
    // Also print small preview of keys that look like explanation-containing fields
    for (const k of EXPLANATION_KEYS) {
      if (k in (question as Record<string, unknown>)) {
        const v = (question as Record<string, unknown>)[k];
        console.warn(`[getQuestionExplanation] Key present but empty/invalid: ${k}`, typeof v, (typeof v === 'string' ? (v as string).substring(0, 120) : v));
      }
    }
  } catch (e) {
    // ignore logging errors
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
