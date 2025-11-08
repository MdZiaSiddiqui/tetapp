"use client";

import { useState, useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import LatexRenderer from "@/components/LatexRenderer";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { paper1, convertToQuestionFormat } from "@/data/quizData";
import { urduQuestions, convertUrduToQuestionFormat } from "@/data/urduData";
import { mathQuestions, convertMathToQuestionFormat } from "@/data/mathData";
import { teluguQuestions, convertTeluguToQuestionFormat } from "@/data/teluguData";
import { scienceQuestions, convertScienceToQuestionFormat } from "@/data/scienceData";
import { mathPaper2Questions, convertMathPaper2ToQuestionFormat } from "@/data/mathPaper2Data";
import { englishQuestions, convertEnglishToQuestionFormat } from "@/data/englishData";
import { environmentalQuestions, convertEnvironmentalToQuestionFormat } from "@/data/environmentalData";
import { socialQuestions, convertSocialToQuestionFormat } from "@/data/socialData";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizData {
  [key: string]: Question[];
}

const quizData: QuizData = {
  "child-development-pedagogy-paper1": convertToQuestionFormat(paper1),
  "child-development-pedagogy-paper2": convertToQuestionFormat(paper1),
  "urdu-paper1": convertUrduToQuestionFormat(urduQuestions),
  "urdu-paper2": convertUrduToQuestionFormat(urduQuestions),
  "telugu-paper1": convertTeluguToQuestionFormat(teluguQuestions),
  "telugu-paper2": convertTeluguToQuestionFormat(teluguQuestions),
  "english-paper1": convertEnglishToQuestionFormat(englishQuestions),
  "english-paper2": convertEnglishToQuestionFormat(englishQuestions),
  "mathematics-paper1": convertMathToQuestionFormat(mathQuestions),
  "mathematics-paper2": convertMathPaper2ToQuestionFormat(mathPaper2Questions),
  "science-paper2": convertScienceToQuestionFormat(scienceQuestions),
  "environmental-studies-paper1": convertEnvironmentalToQuestionFormat(environmentalQuestions),
  "social-studies-paper2": convertSocialToQuestionFormat(socialQuestions),
};

export default function MockTestModePage() {
  const params = useParams();
  const router = useRouter();
  const subject = params.subject as string;
  
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [visitedQuestions, setVisitedQuestions] = useState<boolean[]>([]);
  const [markedForReview, setMarkedForReview] = useState<boolean[]>([]);
  const [showExitConfirmation, setShowExitConfirmation] = useState<boolean>(false);
  const allowHistoryNavigationRef = useRef(false);
  const guardInsertedRef = useRef(false);
  const showExitConfirmationRef = useRef(false);

  useEffect(() => {
    if (subject && quizData[subject]) {
      // Keep questions in original order for mock test
      const quizQuestions = quizData[subject];
      setQuestions(quizQuestions);
      setUserAnswers(new Array(quizQuestions.length).fill(-1));
      const initialVisited = new Array(quizQuestions.length).fill(false);
      if (quizQuestions.length > 0) {
        initialVisited[0] = true;
      }
      setVisitedQuestions(initialVisited);
      setMarkedForReview(new Array(quizQuestions.length).fill(false));
      setCurrentQuestion(0);
      setQuizCompleted(false);
      setTimeLeft(quizQuestions.length * 60);
      setScore(0);
    } else {
      router.push("/");
    }
  }, [subject, router]);

  useEffect(() => {
    showExitConfirmationRef.current = showExitConfirmation;
  }, [showExitConfirmation]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const pushGuardState = () => {
      const currentState = window.history.state ?? {};
      window.history.pushState({ ...currentState, __mockTestGuard: true }, '', window.location.href);
    };

    if (!guardInsertedRef.current) {
      if (!window.history.state?.__mockTestGuard) {
        // Add a guard history entry so the first back gesture stays on the page
        pushGuardState();
      }
      guardInsertedRef.current = true;
    }

    const handlePopState = () => {
      if (allowHistoryNavigationRef.current) {
        allowHistoryNavigationRef.current = false;
        return;
      }

      if (!showExitConfirmationRef.current) {
        setShowExitConfirmation(true);
      }

      // Keep the guard entry active so further back gestures do not leave the page
      pushGuardState();
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  useEffect(() => {
    if (!questions.length || quizCompleted) {
      return;
    }

    if (timeLeft <= 0) {
      finalizeQuiz(userAnswers);
      return;
    }

    const timerId = setTimeout(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearTimeout(timerId);
  }, [timeLeft, quizCompleted, questions.length, userAnswers]);

  useEffect(() => {
    if (!questions.length) {
      return;
    }

    setVisitedQuestions(prev => {
      if (prev.length !== questions.length) {
        return prev;
      }

      if (prev[currentQuestion]) {
        return prev;
      }

      const updated = [...prev];
      updated[currentQuestion] = true;
      return updated;
    });
  }, [currentQuestion, questions, userAnswers]);

  const finalizeQuiz = (answers: number[] = userAnswers) => {
    const finalScore = answers.reduce((total, answer, index) => {
      if (answer !== -1 && answer === questions[index]?.correctAnswer) {
        return total + 1;
      }
      return total;
    }, 0);

    setScore(finalScore);
    setQuizCompleted(true);
  };

  const handleAnswerSelect = (index: number) => {
    if (quizCompleted) return;

    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = index;
    setUserAnswers(newUserAnswers);
  };

  const handleNextQuestion = () => {
    if (!questions.length) return;

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setQuizCompleted(false);
    const resetLength = questions.length;
    setUserAnswers(new Array(resetLength).fill(-1));
    const resetVisited = new Array(resetLength).fill(false);
    if (resetLength > 0) {
      resetVisited[0] = true;
    }
    setVisitedQuestions(resetVisited);
    setMarkedForReview(new Array(resetLength).fill(false));
    setScore(0);
    setTimeLeft(resetLength * 60);
  };

  const handleBackToModeSelection = () => {
    setShowExitConfirmation(true);
  };

  const confirmExit = () => {
    allowHistoryNavigationRef.current = true;
    setShowExitConfirmation(false);
    router.push("/");
  };

  const cancelExit = () => {
    setShowExitConfirmation(false);
  };

  const handleQuestionNavigation = (index: number) => {
    if (quizCompleted) return;
    if (index === currentQuestion) return;

    setCurrentQuestion(index);
  };

  const handleClearResponse = () => {
    if (quizCompleted) return;

    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = -1;
    setUserAnswers(updatedAnswers);
  };

  const handleMarkForReviewAndNext = () => {
    if (!questions.length || quizCompleted) return;

    setMarkedForReview(prev => {
      if (prev.length !== questions.length) {
        return prev;
      }

      const updated = [...prev];
      updated[currentQuestion] = !updated[currentQuestion];
      return updated;
    });

    handleNextQuestion();
  };

  const handleSubmit = () => {
    if (!questions.length) return;
    finalizeQuiz(userAnswers);
  };

  const getSubjectTitle = (subject: string) => {
    return subject
      .split('-')
      .map((word, index, array) => {
        if (word === 'paper1' && array[index - 1]) {
          return 'Paper-1';
        }
        if (word === 'paper2' && array[index - 1]) {
          return 'Paper-2';
        }
        if (word === 'pedagogy' && array[index - 1] === 'development') {
          return 'and Pedagogy';
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .filter(word => word !== 'Paper1' && word !== 'Paper2')
      .join(' ');
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  if (!questions.length) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-3 sm:p-4 md:p-6 lg:p-8 flex items-center justify-center">
        <Card className="w-full max-w-md mx-2">
          <CardHeader>
            <CardTitle>Loading Quiz...</CardTitle>
          </CardHeader>
        </Card>
      </div>
    );
  }

  if (quizCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-3 sm:p-4 md:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <Card className="w-full">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl sm:text-2xl">Mock Test Completed!</CardTitle>
              <CardDescription className="text-base">
                You scored {score} out of {questions.length}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 px-4">
              <div className="text-center">
                <p className="text-base sm:text-lg font-semibold">
                  {score === questions.length ? "Perfect! 🎉" :
                   score >= questions.length / 2 ? "Good job! 👍" :
                   "Keep practicing! 💪"}
                </p>
                <p className="text-sm sm:text-base mt-2">
                  Percentage: {Math.round((score / questions.length) * 100)}%
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Question Review</h3>
                {questions.map((q, index) => {
                  const userAnswer = userAnswers[index];
                  const isCorrect = userAnswer === q.correctAnswer;
                  return (
                    <Card key={q.id} className={`p-4 ${isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'}`}>
                      <div className="space-y-2">
                        <p className="font-medium"><span className="font-bold">Question {index + 1}:</span> <LatexRenderer>{q.question}</LatexRenderer></p>
                        <div>
                          <p className={`font-medium ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                            Your Answer: {userAnswer !== -1 ? <LatexRenderer>{q.options[userAnswer]}</LatexRenderer> : 'Not Answered'}
                          </p>
                          <p className="font-medium text-green-700">
                            Correct Answer: <LatexRenderer>{q.options[q.correctAnswer]}</LatexRenderer>
                          </p>
                        </div>
                        <p className="text-sm text-gray-600"><span className="font-semibold">Explanation:</span> <LatexRenderer>{q.explanation}</LatexRenderer></p>
                      </div>
                    </Card>
                  );
                })}
              </div>
              <div className="flex flex-col gap-2">
                <Button onClick={handleRestartQuiz} className="w-full py-3">
                  Retake Mock Test
                </Button>
                <Button onClick={handleBackToModeSelection} variant="outline" className="w-full py-3">
                  Exit
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  const normalizedVisited = visitedQuestions.length === questions.length
    ? visitedQuestions
    : new Array(questions.length).fill(false);

  const normalizedMarked = markedForReview.length === questions.length
    ? markedForReview
    : new Array(questions.length).fill(false);

  const normalizedAnswers = userAnswers.length === questions.length
    ? userAnswers
    : new Array(questions.length).fill(-1);

  let answeredWithoutMark = 0;
  let notAnsweredCount = 0;
  let markedCount = 0;
  let markedAndAnsweredCount = 0;
  let visitedCount = 0;

  questions.forEach((_, index) => {
    const visited = normalizedVisited[index];
    if (!visited) {
      return;
    }

    visitedCount += 1;
    const answered = normalizedAnswers[index] !== -1;
    const marked = normalizedMarked[index];

    if (marked && answered) {
      markedAndAnsweredCount += 1;
    } else if (marked && !answered) {
      markedCount += 1;
    } else if (answered) {
      answeredWithoutMark += 1;
    } else {
      notAnsweredCount += 1;
    }
  });

  const notVisitedCount = questions.length - visitedCount;

  const getQuestionStatus = (index: number) => {
    if (index === currentQuestion) {
      return "current";
    }

    const visited = normalizedVisited[index];
    if (!visited) {
      return "notVisited";
    }

    const answered = normalizedAnswers[index] !== -1;
    const marked = normalizedMarked[index];

    if (marked && answered) {
      return "markedAnswered";
    }

    if (marked) {
      return "marked";
    }

    if (answered) {
      return "answered";
    }

    return "notAnswered";
  };

  const statusBadgeStyle = {
    clipPath: "polygon(0% 18%, 50% 0%, 100% 18%, 100% 100%, 0% 100%)"
  } as const;

  const questionStatusStyles: Record<string, string> = {
    current: "bg-gradient-to-b from-[#f05a28] to-[#c4411d] text-white shadow-md",
    answered: "bg-gradient-to-b from-[#8dc63f] to-[#4f8f1f] text-white shadow",
    notAnswered: "bg-gradient-to-b from-[#f69b2d] to-[#d75c06] text-white shadow",
    notVisited: "bg-white text-[#2f3a4a] border border-[#c5ccd6]",
    marked: "bg-gradient-to-b from-[#833f9c] to-[#632d80] text-white shadow-md",
    markedAnswered: "bg-gradient-to-b from-[#2d5016] to-[#0d1f00] text-white shadow-md"
  };

  return (
    <div className="min-h-screen bg-[#edf1f5] p-3 sm:p-4 md:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto space-y-4 sm:space-y-6">
        <div className="flex justify-between items-center">
          <Button onClick={handleBackToModeSelection} variant="outline" size="sm" className="text-xs sm:text-sm">
            ← Exit
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          <div className="flex-1">
            <Card className="border border-[#ccd1d9] shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
              <CardHeader className="bg-[#f7f7f7] border-b border-[#d5d9df] pb-4">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <CardTitle className="text-base sm:text-lg font-semibold text-[#1e3d66]">
                      {getSubjectTitle(subject)} Mock Test
                    </CardTitle>
                    <div className="text-xs sm:text-sm font-semibold text-[#2f3f52]">
                      Time Left : <span className="text-[#d9534f]">{formatTime(timeLeft)}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#4a4f57]">
                    <span className="inline-flex items-center gap-2">
                      <span className="bg-[#0096d6] text-white rounded-full px-2 py-1 text-xs uppercase tracking-wide">TG TET</span>
                    </span>
                    <span className="ml-auto text-[#6d7682]">Question No. {currentQuestion + 1}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="px-4 sm:px-6 py-6 space-y-6 bg-white">
                <div className="space-y-4">
                  <h2 className="text-base sm:text-lg font-semibold text-[#2c3e50] leading-snug">
                    <LatexRenderer>{question.question}</LatexRenderer>
                  </h2>
                  <div className="space-y-3">
                    {question.options.map((option, index) => {
                      const isSelected = normalizedAnswers[currentQuestion] === index;
                      return (
                        <label
                          key={index}
                          className={`flex items-start gap-3 border rounded px-4 py-3 cursor-pointer transition-all duration-150 text-sm sm:text-base ${
                            isSelected
                              ? "border-[#2e6aa6] bg-[#e8f2fb] shadow-[0_2px_6px_rgba(0,0,0,0.08)]"
                              : "border-[#d1d5db] bg-white hover:border-[#2e6aa6]"
                          }`}
                        >
                          <input
                            type="radio"
                            name={`question-${currentQuestion}`}
                            className="mt-1 h-4 w-4 accent-[#f05a28]"
                            checked={isSelected}
                            onChange={() => handleAnswerSelect(index)}
                          />
                          <span className="text-[#2d3e50] leading-relaxed"><LatexRenderer>{option}</LatexRenderer></span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button
                      variant="outline"
                      onClick={handleMarkForReviewAndNext}
                      className="border-[#c6ccd4] bg-white text-[#2f3f52] hover:bg-[#f5f7fa] px-4"
                    >
                      {markedForReview[currentQuestion] ? "Unmark & Next" : "Mark for Review & Next"}
                    </Button>
                    <Button
                      variant="outline"
                      onClick={handleClearResponse}
                      className="border-[#c6ccd4] bg-white text-[#2f3f52] hover:bg-[#f5f7fa] px-4"
                    >
                      Clear Response
                    </Button>
                  </div>
                  <div className="flex gap-2 w-full sm:w-auto">
                    <Button
                      onClick={handleNextQuestion}
                      className="flex-1 sm:flex-none bg-[#0b6fa4] hover:bg-[#095b82] text-white px-6"
                    >
                      Save & Next
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <aside className="w-full lg:w-[320px]">
            <div className="bg-white border border-[#c8d1dc] rounded-md shadow-[0_6px_16px_rgba(0,0,0,0.08)] overflow-hidden">
              <div className="bg-[#f2f4f7] border-b border-[#d9dde4] px-4 py-3">
                <div className="flex items-center justify-between text-[#2d3d4f] text-sm font-semibold">
                  <span>Time Left</span>
                  <span className="text-[#d9534f]">{formatTime(timeLeft)}</span>
                </div>
              </div>


              <div className="px-4 py-4 space-y-3 border-b border-[#d9dde4] bg-white">
                <div className="flex items-center gap-3">
                  <div
                    className="h-11 w-9 flex items-center justify-center text-xs font-semibold text-white bg-gradient-to-b from-[#8dc63f] to-[#4f8f1f]"
                    style={statusBadgeStyle}
                  >
                    {answeredWithoutMark}
                  </div>
                  <div className="text-xs sm:text-sm text-[#2d3d4f] font-medium leading-tight">Answered</div>
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className="h-11 w-9 flex items-center justify-center text-xs font-semibold text-white bg-gradient-to-b from-[#f05a28] to-[#c4411d]"
                    style={statusBadgeStyle}
                  >
                    {notAnsweredCount}
                  </div>
                  <div className="text-xs sm:text-sm text-[#2d3d4f] font-medium leading-tight">Not Answered</div>
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className="h-11 w-9 flex items-center justify-center text-xs font-semibold text-white bg-gradient-to-b from-[#c7ccd6] to-[#9ea6b4]"
                    style={statusBadgeStyle}
                  >
                    {notVisitedCount}
                  </div>
                  <div className="text-xs sm:text-sm text-[#2d3d4f] font-medium leading-tight">Not Visited</div>
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className="h-11 w-9 flex items-center justify-center text-xs font-semibold text-white bg-gradient-to-b from-[#7a3ba0] to-[#55266f]"
                    style={statusBadgeStyle}
                  >
                    {markedCount}
                  </div>
                  <div className="text-xs sm:text-sm text-[#2d3d4f] font-medium leading-tight">Marked for Review</div>
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className="h-11 w-9 flex items-center justify-center text-xs font-semibold text-white bg-gradient-to-b from-[#2d5016] to-[#0d1f00]"
                    style={statusBadgeStyle}
                  >
                    {markedAndAnsweredCount}
                  </div>
                  <div className="text-xs sm:text-sm text-[#2d3d4f] font-medium leading-tight">
                    Answered &amp; Marked for Review (will also be evaluated)
                  </div>
                </div>
              </div>

              <div className="bg-[#0b6fa4] text-white px-4 py-2 text-sm font-semibold uppercase tracking-wide">
                Mock Test
              </div>
              <div className="bg-[#f5f8fc] border-t border-[#c8d1dc] px-4 pb-5 pt-4 space-y-4">
                <p className="text-xs font-semibold text-[#2d3d4f] uppercase tracking-[0.08em]">Choose a Question</p>
                <div className="grid grid-cols-4 gap-2">
                  {questions.map((_, index) => {
                    const status = getQuestionStatus(index);
                    const statusClass = questionStatusStyles[status] || questionStatusStyles.notVisited;
                    return (
                      <button
                        key={index}
                        onClick={() => handleQuestionNavigation(index)}
                        className={`h-10 text-xs font-semibold rounded-sm transition focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#0b6fa4] ${
                          status === "notVisited" ? "" : "border border-transparent"
                        } ${statusClass}`}
                      >
                        {index + 1}
                      </button>
                    );
                  })}
                </div>
                <div className="pt-2">
                  <Button
                    onClick={handleSubmit}
                    className="w-full bg-[#0c84c6] hover:bg-[#0a6d9f] text-white"
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {showExitConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Confirm Exit</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <AlertDescription>
                  Are you sure you want to quit the mock test? Your progress will be lost.
                </AlertDescription>
              </Alert>
              <div className="flex flex-col sm:flex-row gap-2 justify-end">
                <Button variant="outline" onClick={cancelExit}>
                  Cancel
                </Button>
                <Button onClick={confirmExit}>
                  Yes, Quit
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
