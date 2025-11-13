import { useState, useCallback, useRef } from 'react';
import { ScrollView } from 'react-native';
import { QuestionStatusType } from './useQuestionStats';

export interface AnsweredQuestion {
  questionId: string;
  answer: string;
  timeSpent: number;
}

interface UseTestSessionProps {
  totalQuestions: number;
  onFinish: (answeredQuestions: AnsweredQuestion[]) => void | Promise<void>;
}

export function useTestSession({ totalQuestions, onFinish }: UseTestSessionProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answeredQuestions, setAnsweredQuestions] = useState<AnsweredQuestion[]>([]);
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());
  const [questionStatus, setQuestionStatus] = useState<{
    [key: number]: QuestionStatusType;
  }>({});
  // Store selected answers per question index
  const [questionAnswers, setQuestionAnswers] = useState<{ [key: number]: string }>({});
  // Track which questions have been visited
  const [visitedQuestions, setVisitedQuestions] = useState<Set<number>>(new Set([0]));

  const scrollViewRef = useRef<ScrollView>(null);

  const scrollToTop = useCallback(() => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: false });
  }, []);

  const navigateToQuestion = useCallback((index: number) => {
    // Before navigating away, if current question is visited but not answered, mark it as 'not-answered'
    setQuestionStatus((prev) => {
      const currentStatus = prev[currentQuestionIndex];
      // If current question is visited but has no status (not answered, not marked for review)
      if (!currentStatus && visitedQuestions.has(currentQuestionIndex)) {
        return {
          ...prev,
          [currentQuestionIndex]: 'not-answered',
        };
      }
      return prev;
    });

    setCurrentQuestionIndex(index);
    // Mark this question as visited
    setVisitedQuestions((prev) => new Set(prev).add(index));
    // Restore previously selected answer if exists
    setSelectedAnswer(questionAnswers[index] || null);
    setQuestionStartTime(Date.now());
    scrollToTop();
  }, [scrollToTop, questionAnswers, currentQuestionIndex, visitedQuestions]);

  const handleAnswerSelect = useCallback((answer: string, questionIndex: number) => {
    setSelectedAnswer(answer);
    const timeSpent = Date.now() - questionStartTime;

    // Store answer for this question index
    setQuestionAnswers((prev) => ({
      ...prev,
      [questionIndex]: answer,
    }));

    // Mark question as answered (preserve mark-for-review status if it exists)
    setQuestionStatus((prev) => {
      const currentStatus = prev[questionIndex];
      // If already marked for review, change to marked-for-review-answered
      if (currentStatus === 'marked-for-review') {
        return {
          ...prev,
          [questionIndex]: 'marked-for-review-answered',
        };
      }
      // Otherwise just mark as answered
      return {
        ...prev,
        [questionIndex]: 'answered',
      };
    });

    // Also store in answeredQuestions for final submission (local only)
    setAnsweredQuestions((prev) => {
      const existingIndex = prev.findIndex(q => q.questionId === `question-${questionIndex}`);
      const newAnswer = {
        questionId: `question-${questionIndex}`, // Temporary ID
        answer,
        timeSpent,
      };

      if (existingIndex !== -1) {
        const updated = [...prev];
        updated[existingIndex] = newAnswer;
        return updated;
      }
      return [...prev, newAnswer];
    });
  }, [questionStartTime]);

  const handleClearAnswer = useCallback(() => {
    setSelectedAnswer(null);
  }, []);

  const saveAnswer = useCallback(
    (questionId: string, answer: string, status: QuestionStatusType) => {
      const timeSpent = Date.now() - questionStartTime;

      setAnsweredQuestions((prev) => {
        // Check if this question was already answered
        const existingIndex = prev.findIndex(q => q.questionId === questionId);
        if (existingIndex !== -1) {
          // Replace the existing answer
          const updated = [...prev];
          updated[existingIndex] = { questionId, answer, timeSpent };
          return updated;
        }
        // Add new answer
        return [...prev, { questionId, answer, timeSpent }];
      });

      setQuestionStatus((prev) => ({
        ...prev,
        [currentQuestionIndex]: status,
      }));

      return { timeSpent };
    },
    [currentQuestionIndex, questionStartTime]
  );

  const handleNextQuestion = useCallback(() => {
    if (currentQuestionIndex < totalQuestions - 1) {
      navigateToQuestion(currentQuestionIndex + 1);
    } else {
      onFinish(answeredQuestions);
    }
  }, [currentQuestionIndex, totalQuestions, navigateToQuestion, onFinish, answeredQuestions]);

  const handlePreviousQuestion = useCallback(() => {
    if (currentQuestionIndex > 0) {
      navigateToQuestion(currentQuestionIndex - 1);
    }
  }, [currentQuestionIndex, navigateToQuestion]);

  const handleMarkForReview = useCallback(
    (questionId: string, onSave: (questionId: string, answer: string, timeSpent: number) => void) => {
      if (selectedAnswer) {
        // Answer selected - save it and mark as pink (marked-for-review-answered)
        const { timeSpent } = saveAnswer(questionId, selectedAnswer, 'marked-for-review-answered');
        onSave(questionId, selectedAnswer, timeSpent);
      } else {
        // No answer selected - mark as purple (marked-for-review)
        setQuestionStatus((prev) => ({
          ...prev,
          [currentQuestionIndex]: 'marked-for-review',
        }));
      }
      handleNextQuestion();
    },
    [selectedAnswer, currentQuestionIndex, saveAnswer, handleNextQuestion]
  );

  const handleSubmitAnswer = useCallback(
    (questionId: string, onSave: (questionId: string, answer: string, timeSpent: number) => void) => {
      if (selectedAnswer) {
        const { timeSpent } = saveAnswer(questionId, selectedAnswer, 'answered');
        onSave(questionId, selectedAnswer, timeSpent);
      }
      handleNextQuestion();
    },
    [selectedAnswer, saveAnswer, handleNextQuestion]
  );

  return {
    // State
    currentQuestionIndex,
    selectedAnswer,
    answeredQuestions,
    questionStatus,
    visitedQuestions,
    scrollViewRef,

    // Actions
    handleAnswerSelect,
    handleClearAnswer,
    handleSubmitAnswer,
    handleMarkForReview,
    handleNextQuestion,
    handlePreviousQuestion,
    navigateToQuestion,
  };
}
