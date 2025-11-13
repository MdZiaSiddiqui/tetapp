import { useMemo } from 'react';

export type QuestionStatusType =
  | 'answered'
  | 'not-answered'
  | 'not-visited'
  | 'marked-for-review'
  | 'marked-for-review-answered';

interface UseQuestionStatsProps {
  questionStatus: { [key: number]: QuestionStatusType };
  totalQuestions: number;
  currentQuestionIndex: number;
}

export interface QuestionStats {
  answered: number;
  notAnswered: number;
  notVisited: number;
  markedForReview: number;
  markedForReviewAnswered: number;
}

export function useQuestionStats({
  questionStatus,
  totalQuestions,
  currentQuestionIndex,
}: UseQuestionStatsProps): QuestionStats {
  return useMemo(() => {
    let answered = 0;
    let notAnswered = 0;
    let notVisited = 0;
    let markedForReview = 0;
    let markedForReviewAnswered = 0;

    for (let index = 0; index < totalQuestions; index++) {
      const status = questionStatus[index];
      if (status === 'answered') {
        answered++;
      } else if (status === 'not-answered') {
        notAnswered++;
      } else if (status === 'marked-for-review') {
        markedForReview++;
      } else if (status === 'marked-for-review-answered') {
        markedForReviewAnswered++;
      } else if (!status) {
        // No status means not visited yet
        notVisited++;
      }
    }

    return { answered, notAnswered, notVisited, markedForReview, markedForReviewAnswered };
  }, [questionStatus, totalQuestions, currentQuestionIndex]);
}
