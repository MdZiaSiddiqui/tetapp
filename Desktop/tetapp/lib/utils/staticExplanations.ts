/**
 * Static explanations for common questions.
 * This provides fallback explanations when dynamic explanations aren't available.
 */

type StaticExplanationMap = Record<string, string>;

// Add static explanations here for common questions
const STATIC_EXPLANATIONS: StaticExplanationMap = {
  // Example:
  // "What is 2+2?": "The answer is 4 because 2 plus 2 equals 4.",
};

/**
 * Retrieves a static explanation for a given question text.
 * Returns null if no static explanation is found.
 */
export const getStaticExplanation = (questionText: string): string | null => {
  if (!questionText || typeof questionText !== 'string') {
    return null;
  }

  const normalizedQuestion = questionText.trim().toLowerCase();

  // Check for exact match (case-insensitive)
  for (const [key, value] of Object.entries(STATIC_EXPLANATIONS)) {
    if (key.toLowerCase() === normalizedQuestion) {
      return value;
    }
  }

  // Check for partial match (if question contains the key)
  for (const [key, value] of Object.entries(STATIC_EXPLANATIONS)) {
    if (normalizedQuestion.includes(key.toLowerCase())) {
      return value;
    }
  }

  return null;
};

export default getStaticExplanation;
