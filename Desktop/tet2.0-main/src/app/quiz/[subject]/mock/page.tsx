"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import LatexRenderer from "@/components/LatexRenderer";
import MarkdownLatexRenderer from "@/components/MarkdownLatexRenderer";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { recordQuizAttempt } from "@/actions/quizAttempts";
import {
  getQuestionLimitForSubject,
  isSubjectSupported,
  SubjectSlug,
} from "@/lib/questions/subjects";
import { getDemoMockQuestions, isDemoSubject } from "@/data/demoQuestions";
import {
  DEFAULT_LANGUAGE,
  getAvailableLanguagesForSubject,
  sanitizeQuestionLanguage,
  type QuestionLanguage,
} from "@/lib/questions/languages";


interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuestionsResponse {
  questions?: Array<{
    id?: string;
    question?: string;
    options?: string[];
    correctAnswer?: number;
    explanation?: string | null;
  }>;
  language?: QuestionLanguage;
  error?: string;
}

export default function MockTestModePage() {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const subject = params.subject as string;
  const searchParams = useSearchParams();
  const isDemo = searchParams.get("demo") === "true";
  const fallbackRoute = isDemo ? "/try" : "/dashboard";
  const backButtonLabel = isDemo ? "Back to Free Preview" : "Back to Dashboard";
  const exitButtonLabel = isDemo ? "Exit to Preview" : "Exit";
  const demoSubjectEnabled = isDemo && isDemoSubject(subject);
  const requestedLanguage = sanitizeQuestionLanguage(searchParams.get("lang"));
  const availableLanguages = useMemo(
    () => getAvailableLanguagesForSubject(subject),
    [subject],
  );
  const language = useMemo<QuestionLanguage>(() => {
    return availableLanguages.includes(requestedLanguage)
      ? requestedLanguage
      : availableLanguages[0] ?? DEFAULT_LANGUAGE;
  }, [availableLanguages, requestedLanguage]);
  
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [reloadFlag, setReloadFlag] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [visitedQuestions, setVisitedQuestions] = useState<boolean[]>([]);
  const [markedForReview, setMarkedForReview] = useState<boolean[]>([]);
  const [showExitConfirmation, setShowExitConfirmation] = useState<boolean>(false);
  const allowHistoryNavigationRef = useRef(false);
  const guardInsertedRef = useRef(false);
  const showExitConfirmationRef = useRef(false);
  const attemptSavedRef = useRef(false);
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "success" | "error">("idle");
  const [saveMessage, setSaveMessage] = useState<string | null>(null);
  const submitButtonRef = useRef<HTMLButtonElement | null>(null);
  const questionContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Scroll to top when quiz is completed
    if (quizCompleted) {
      window.scrollTo(0, 0);
    }
  }, [quizCompleted]);

  useEffect(() => {
    const fallbackPath = fallbackRoute;

    if (!subject || !isSubjectSupported(subject)) {
      router.push(fallbackPath);
      return;
    }

    if (isDemo && !demoSubjectEnabled) {
      router.push("/try");
      return;
    }

    const controller = new AbortController();
    const subjectSlug = subject as SubjectSlug;

    const loadQuestions = async () => {
      setIsLoading(true);
      setLoadError(null);

      if (demoSubjectEnabled) {
        const demoSet = getDemoMockQuestions(subjectSlug, language);
        const initialAnswers = new Array<number>(demoSet.length).fill(-1);
        const initialVisited = new Array<boolean>(demoSet.length).fill(false);
        if (demoSet.length > 0) {
          initialVisited[0] = true;
        }

        if (!controller.signal.aborted) {
          setQuestions(demoSet);
          setUserAnswers(initialAnswers);
          setVisitedQuestions(initialVisited);
          setMarkedForReview(new Array<boolean>(demoSet.length).fill(false));
          setCurrentQuestion(0);
          setQuizCompleted(false);
          setScore(0);
          setTimeLeft(demoSet.length > 0 ? demoSet.length * 60 : 0);
          attemptSavedRef.current = false;
          setSaveStatus("idle");
          setSaveMessage(null);
        }

        if (!demoSet.length) {
          setLoadError("Demo questions are coming soon for this subject.");
        }

        setIsLoading(false);
        return;
      }

      try {
        const limit = getQuestionLimitForSubject(subjectSlug);
        const response = await fetch(
          `/api/questions?subject=${encodeURIComponent(subjectSlug)}&mode=mock&limit=${limit}&language=${language}`,
          { signal: controller.signal },
        );

        const payload = (await response.json()) as QuestionsResponse;

        if (!response.ok) {
          throw new Error(payload.error ?? "Failed to load questions.");
        }

        const normalized: Question[] = (payload.questions ?? []).map((question, index) => ({
          id: question?.id ?? `${subjectSlug}-${index}`,
          question: question?.question ?? "",
          options: Array.isArray(question?.options) ? question.options : [],
          correctAnswer:
            typeof question?.correctAnswer === "number" && Number.isFinite(question.correctAnswer)
              ? question.correctAnswer
              : 0,
          explanation: question?.explanation ?? "",
        }));

        const initialAnswers = new Array<number>(normalized.length).fill(-1);
        const initialVisited = new Array<boolean>(normalized.length).fill(false);
        if (normalized.length > 0) {
          initialVisited[0] = true;
        }

        if (!controller.signal.aborted) {
          setQuestions(normalized);
          setUserAnswers(initialAnswers);
          setVisitedQuestions(initialVisited);
          setMarkedForReview(new Array<boolean>(normalized.length).fill(false));
          setCurrentQuestion(0);
          setQuizCompleted(false);
          setScore(0);
          setTimeLeft(normalized.length > 0 ? normalized.length * 60 : 0);
          attemptSavedRef.current = false;
          setSaveStatus("idle");
          setSaveMessage(null);
        }

        if (!normalized.length) {
          setLoadError("No mock test questions available yet for this subject.");
        }
      } catch (error) {
        if (controller.signal.aborted) {
          return;
        }

        console.error("mock-mode: failed to load questions", error);
        setQuestions([]);
        setUserAnswers([]);
        setVisitedQuestions([]);
        setMarkedForReview([]);
        setCurrentQuestion(0);
        setQuizCompleted(false);
        setScore(0);
        setTimeLeft(0);
        setLoadError(
          error instanceof Error
            ? error.message
            : "Unable to load questions. Please try again.",
        );
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    void loadQuestions();

    return () => {
      controller.abort();
    };
  }, [subject, router, reloadFlag, fallbackRoute, isDemo, demoSubjectEnabled, language]);

  useEffect(() => {
    if (!subject || !isSubjectSupported(subject)) {
      return;
    }

    const rawLanguageParam = searchParams.get("lang");
    const normalizedLanguageParam = sanitizeQuestionLanguage(rawLanguageParam);
    const hasExplicitParam = rawLanguageParam !== null;

    if (normalizedLanguageParam === language) {
      if (language === DEFAULT_LANGUAGE && !hasExplicitParam) {
        return;
      }

      if (language !== DEFAULT_LANGUAGE) {
        return;
      }
    }

    const params = new URLSearchParams(searchParams.toString());

    if (language === DEFAULT_LANGUAGE) {
      params.delete("lang");
    } else {
      params.set("lang", language);
    }

    const queryString = params.toString();
    router.replace(`${pathname}${queryString ? `?${queryString}` : ""}`, { scroll: false });
  }, [language, pathname, router, searchParams, subject]);

  useEffect(() => {
    showExitConfirmationRef.current = showExitConfirmation;
  }, [showExitConfirmation]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    // If the quiz is completed, remove the event listener and disable the guard.
    if (quizCompleted) {
      // The listener is removed by the cleanup function of the previous effect run.
      // We don't need to do anything else here. The absence of the listener allows default navigation.
      return;
    }

    // Initialize guard only once
    if (!guardInsertedRef.current) {
      const currentState = window.history.state ?? {};
      if (!currentState.__mockTestGuard) {
        // Add a guard history entry so the first back gesture stays on the page
        window.history.pushState({ ...currentState, __mockTestGuard: true }, '', window.location.href);
      }
      guardInsertedRef.current = true;
    }

    const handlePopState = () => {
      if (allowHistoryNavigationRef.current) {
        allowHistoryNavigationRef.current = false;
        return;
      }

      // This condition is now technically unreachable because the listener is removed when quizCompleted is true.
      // But kept for logical completeness if the structure changes.
      if (quizCompleted) {
        return;
      }

      if (!showExitConfirmationRef.current) {
        setShowExitConfirmation(true);
      }

      // Keep the guard entry active so further back gestures do not leave the page
      const currentState = window.history.state ?? {};
      window.history.pushState({ ...currentState, __mockTestGuard: true }, '', window.location.href);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [quizCompleted]); // Add quizCompleted to the dependency array

  const finalizeQuiz = useCallback((answers: number[] = userAnswers) => {
    const finalScore = answers.reduce((total, answer, index) => {
      if (answer !== -1 && answer === questions[index]?.correctAnswer) {
        return total + 1;
      }
      return total;
    }, 0);

    setScore(finalScore);
    setQuizCompleted(true);
  }, [questions, userAnswers]);

  useEffect(() => {
    if (!questions.length || quizCompleted) {
      return;
    }

    if (timeLeft <= 0) {
      finalizeQuiz();
      return;
    }

    const timerId = setTimeout(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearTimeout(timerId);
  }, [timeLeft, quizCompleted, questions.length, finalizeQuiz]);

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

  const scrollQuestionIntoView = useCallback(() => {
    if (typeof window === "undefined") {
      return;
    }

    const coarsePointer = window.matchMedia?.("(pointer: coarse)")?.matches ?? false;
    const narrowViewport = window.matchMedia?.("(max-width: 1024px)")?.matches ?? false;

    if (!coarsePointer && !narrowViewport) {
      return;
    }

    const scrollTarget = questionContainerRef.current;

    window.requestAnimationFrame(() => {
      if (scrollTarget) {
        const { top } = scrollTarget.getBoundingClientRect();
        const targetOffset = Math.max(0, window.scrollY + top - 16);
        window.scrollTo({ top: targetOffset, behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  }, []);

  useEffect(() => {
    if (!questions.length) {
      return;
    }

    scrollQuestionIntoView();
  }, [currentQuestion, questions.length, scrollQuestionIntoView]);

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

  const handleSaveAndNext = () => {
    if (!questions.length) return;

    const isLastQuestion = currentQuestion === questions.length - 1;

    if (isLastQuestion) {
      if (typeof window !== "undefined") {
        const isMobileViewport = window.matchMedia("(max-width: 767px)").matches;
        const docElement = document.documentElement;
        const previousScrollBehavior = docElement.style.scrollBehavior;

        if (isMobileViewport) {
          docElement.style.scrollBehavior = "smooth";
          window.requestAnimationFrame(() => {
            submitButtonRef.current?.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
            window.setTimeout(() => {
              submitButtonRef.current?.focus({ preventScroll: true });
              docElement.style.scrollBehavior = previousScrollBehavior;
            }, 300);
          });
        } else {
          submitButtonRef.current?.focus({ preventScroll: true });
        }
      }
      return;
    }

    handleNextQuestion();
  };

  const handlePreviousQuestion = () => {
    if (!questions.length) return;

    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleRestartQuiz = () => {
    if (!subject || !isSubjectSupported(subject)) {
      router.push(fallbackRoute);
      return;
    }

    setReloadFlag((value) => value + 1);
  };

  const handleBackToModeSelection = () => {
    if (quizCompleted) {
      allowHistoryNavigationRef.current = true;
      router.push(fallbackRoute);
    } else {
      setShowExitConfirmation(true);
    }
  };

  const confirmExit = () => {
    allowHistoryNavigationRef.current = true;
    setShowExitConfirmation(false);
    // Use a small timeout to allow the UI to update before navigation
    setTimeout(() => {
      router.push(fallbackRoute);
    }, 10);
  };

  const cancelExit = () => {
    // Use setTimeout for consistent UI update batching
    setTimeout(() => {
      setShowExitConfirmation(false);
    }, 0);
  };

  useEffect(() => {
    if (!quizCompleted || attemptSavedRef.current || !questions.length || isDemo) {
      return;
    }

    const abortController = new AbortController();
    const { signal } = abortController;

    const persistAttempt = async () => {
      // Check if the component is still mounted or if the effect should be aborted
      if (signal.aborted) return;

      attemptSavedRef.current = true;
      setSaveStatus("saving");

      const totalAllocated = questions.length * 60;
      const timeSpentSeconds = Math.max(0, totalAllocated - Math.max(0, timeLeft));

      try {
        if (signal.aborted) return; // Check again before the potentially long-running call
        const result = await recordQuizAttempt({
          subjectSlug: subject,
          mode: "mock",
          totalQuestions: questions.length,
          correctAnswers: score,
          timeSpentSeconds,
        });

        if (signal.aborted) return; // Check before updating state

        if (!result.success) {
          setSaveStatus("error");
          setSaveMessage(result.error);
          return;
        }

        setSaveStatus("success");
        setSaveMessage(null);
      } catch (error) {
        if (signal.aborted) return; // Check before updating state for unexpected errors
        console.error("Failed to persist quiz attempt:", error);
        setSaveStatus("error");
        setSaveMessage("An unexpected error occurred while saving.");
      }
    };

    // Do not await, let it run in the background
    void persistAttempt();

    // Cleanup function to abort if the component unmounts
    return () => {
      abortController.abort();
    };
  }, [quizCompleted, questions.length, score, subject, timeLeft, isDemo]);

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
    finalizeQuiz();
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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-3 sm:p-4 md:p-6 lg:p-8 flex items-center justify-center">
        <Card className="w-full max-w-md mx-2">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl font-bold text-center bg-gradient-to-r from-[#6a3bff] via-[#8f4eff] to-[#d67dff] bg-clip-text text-transparent">
              {getSubjectTitle(subject)}
            </CardTitle>
          </CardHeader>
        </Card>
      </div>
    );
  }

  if (!questions.length) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-3 sm:p-4 md:p-6 lg:p-8 flex items-center justify-center">
        <Card className="w-full max-w-md mx-2">
          <CardHeader className="text-center">
            <CardTitle>{loadError ? "Unable to Load Questions" : "No Questions Available"}</CardTitle>
            <CardDescription className="text-base whitespace-pre-line">
              {loadError ?? "Please check back soon for mock tests on this subject."}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <Button
              onClick={() => setReloadFlag((value) => value + 1)}
              disabled={isLoading}
              className="w-full"
            >
              {isLoading ? "Reloading..." : "Try Again"}
            </Button>
            <Button onClick={handleBackToModeSelection} variant="outline" className="w-full">
              {backButtonLabel}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (quizCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-3 sm:p-4 md:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex justify-start">
            <Button onClick={handleBackToModeSelection} variant="outline" size="sm" className="text-xs sm:text-sm">
              ← {isDemo ? "Back to Preview" : "Exit"}
            </Button>
          </div>
          <Card className="w-full">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl sm:text-2xl">Mock Test Completed!</CardTitle>
              <CardDescription className="text-lg font-bold text-center">
                You scored {score} out of {questions.length}
                <br />
                <span className="text-xl font-bold">Percentage: {Math.round((score / questions.length) * 100)}%</span>
                <br />
                {score === questions.length ? "Perfect! 🎉" :
                 score >= questions.length / 2 ? "Good job! 🎉" :
                 "Keep practicing! 💪"}
              </CardDescription>
            </CardHeader>
          <CardContent className="flex flex-col gap-2 px-4">
            {isDemo ? (
              <Alert className="-mt-2">
                <AlertDescription className="text-sm sm:text-base text-black leading-relaxed">
                  Master exam format with full subject wise mock tests with 7300+ important previous year TSTET questions with detailed solutions and smart analysis with Pro.
                </AlertDescription>
              </Alert>
            ) : null}
            {saveStatus !== "idle" ? (
              <Alert variant={saveStatus === "error" ? "destructive" : "default"} className="-mt-2">
                <AlertDescription className="text-black">
                  {saveStatus === "saving"
                    ? "Saving your progress..."
                    : saveStatus === "success"
                      ? "Progress saved! Check it from progress on the dashboard."
                      : saveMessage ?? "Unable to save your progress."}
                </AlertDescription>
              </Alert>
            ) : null}
            {isDemo ? (
              <Button
                asChild
                className="w-full justify-center rounded-full bg-gradient-to-r from-[#6a3bff] via-[#8f4eff] to-[#d67dff] px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-[0_12px_30px_rgba(143,78,255,0.3)] hover:shadow-[0_16px_36px_rgba(214,125,255,0.35)] mb-2"
              >
                <Link href="/try#pro-access">Checkout Pro Features</Link>
              </Button>
            ) : null}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-[#1f2933]">Question Review</h3>
              {questions.map((q, index) => {
                  const userAnswer = userAnswers[index];
                  const isCorrect = userAnswer === q.correctAnswer;
                  return (
                    <Card key={q.id} className={`p-4 ${isCorrect ? 'border-green-500 bg-green-50' : 'border-red-200 bg-red-50'}`}>
                      <div className="space-y-2">
                        <p className="text-sm sm:text-base font-semibold text-[#1f2d3d]">
                          <span className="font-semibold text-[#1f2933]">Question {index + 1}:</span>{' '}
                          <span className="font-semibold text-[#243447]">
                            <LatexRenderer>{q.question}</LatexRenderer>
                          </span>
                        </p>
                        <div>
                          <p className={`font-medium ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                            Your Answer: {userAnswer !== -1 ? <LatexRenderer>{q.options[userAnswer]}</LatexRenderer> : 'Not Answered'}
                          </p>
                          <p className="font-medium text-green-700">
                            Correct Answer: <LatexRenderer>{q.options[q.correctAnswer]}</LatexRenderer>
                          </p>
                        </div>
                        <div className="text-base sm:text-lg font-normal text-[#2d3d4f] leading-relaxed">
                          <span className="font-medium text-[#1f2933]">Explanation:</span>{' '}
                          <MarkdownLatexRenderer>{q.explanation}</MarkdownLatexRenderer>
                        </div>
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
                  {exitButtonLabel}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const isLastQuestion = currentQuestion === questions.length - 1;

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
    const visited = normalizedVisited[index];
    const answered = normalizedAnswers[index] !== -1;
    const marked = normalizedMarked[index];
    const isCurrent = index === currentQuestion;

    if (!visited) {
      return "notVisited";
    }

    if (marked && answered) {
      return "markedAnswered";
    }

    if (marked) {
      return "marked";
    }

    if (answered) {
      return "answered";
    }

    if (isCurrent) {
      return "current";
    }

    return "notAnswered";
  };

  const statusBadgeStyle = {
    clipPath: "polygon(0% 18%, 50% 0%, 100% 18%, 100% 100%, 0% 100%)"
  } as const;

  const questionStatusStyles: Record<string, string> = {
    current: "bg-gradient-to-b from-[#f05a28] to-[#c4411d] text-white shadow-md",
    answered: "bg-gradient-to-b from-[#8dc63f] to-[#4f8f1f] text-white shadow",
    notAnswered: "bg-gradient-to-b from-[#f05a28] to-[#c4411d] text-white shadow",
    notVisited: "bg-white text-[#2f3a4a] border border-[#c5ccd6]",
    marked: "bg-gradient-to-b from-[#833f9c] to-[#632d80] text-white shadow-md",
    markedAnswered: "bg-gradient-to-b from-[#2d5016] to-[#0d1f00] text-white shadow-md ring-2 ring-[#a3d977]"
  };

  return (
    <div className="min-h-screen bg-[#edf1f5] p-3 sm:p-4 md:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto space-y-4 sm:space-y-6">
        <div className="flex justify-between items-center">
          <Button onClick={handleBackToModeSelection} variant="outline" size="sm" className="text-xs sm:text-sm">
            ← {isDemo ? "Back to Preview" : "Exit"}
          </Button>
        </div>

        {isDemo ? (
          <Alert className="border border-dashed border-[#0b6fa4]/40 bg-white/80">
            <AlertDescription className="text-sm sm:text-base text-black leading-relaxed">
              Limited Demo access uses sample questions only. Master exam format with full subject wise mock tests with 7300+ important previous year TSTET questions with detailed solutions and smart analysis with Pro.
            </AlertDescription>
          </Alert>
        ) : null}

        <div ref={questionContainerRef} className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          <div className="flex-1">
            <Card className="border border-[#ccd1d9] shadow-[0_4px_12px_rgba(0,0,0,0.05)] py-0 gap-0 rounded-xl overflow-hidden">
              <CardHeader className="bg-[#f7f7f7] border-b border-[#d5d9df] px-4 pt-2 pb-0 space-y-0 gap-y-0">
                <div className="flex flex-col gap-0">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-0">
                    <CardTitle className="text-base sm:text-lg font-semibold text-[#1e3d66] pb-1">
                      {getSubjectTitle(subject)} Mock Test
                    </CardTitle>
                  </div>
                  <div className="flex items-center justify-between text-sm sm:text-base text-[#2f3f52] font-semibold">
                    <span className="text-[#2f3f52] leading-tight">Question No. {currentQuestion + 1}</span>
                    <div className="flex items-center gap-1 text-sm sm:text-base leading-tight">
                      <span>Time Left :</span>
                      <span className="text-[#d9534f] leading-tight">{formatTime(timeLeft)}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="px-4 sm:px-6 pt-4 pb-6 space-y-6 bg-white">
                <div className="space-y-4">
                  <h2 className="text-base sm:text-lg font-semibold text-[#2c3e50] leading-relaxed">
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
                          <span className="text-[#2d3e50] leading-relaxed font-semibold"><LatexRenderer>{option}</LatexRenderer></span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  {/* On mobile, Previous/Save & Next appear first */}
                  <div className="flex gap-2 w-full sm:w-auto order-first sm:order-last">
                    <Button
                      onClick={handlePreviousQuestion}
                      disabled={currentQuestion === 0}
                      className="flex-1 sm:flex-none bg-[#6c757d] hover:bg-[#5a6268] disabled:opacity-50 disabled:cursor-not-allowed text-white px-6"
                    >
                      <ChevronLeft className="mr-2 h-4 w-4" />
                      Previous
                    </Button>
                    <Button
                      onClick={handleSaveAndNext}
                      className="flex-1 sm:flex-none bg-green-600 hover:bg-green-700 text-white px-6"
                    >
                      Save & Next
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  {/* On mobile, Mark/Clear appear second */}
                  <div className="flex flex-col sm:flex-row gap-2 order-last sm:order-first">
                    <Button
                      variant="outline"
                      onClick={handleMarkForReviewAndNext}
                      className={`border-[#55266f] ${normalizedAnswers[currentQuestion] !== -1 ? 'bg-[#2d5016] hover:bg-[#0d1f00]' : 'bg-[#7a3ba0] hover:bg-[#55266f]'} text-white px-4`}
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
                    Answered &amp; Marked for Review 
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
                    const currentIndicatorClass = index === currentQuestion ? "ring-2 ring-offset-1 ring-[#0b6fa4]" : "";
                    return (
                      <button
                        key={index}
                        onClick={() => handleQuestionNavigation(index)}
                        className={`h-10 text-xs font-semibold rounded-sm transition focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#0b6fa4] ${
                          status === "notVisited" ? "" : "border border-transparent"
                        } ${statusClass} ${currentIndicatorClass}`}
                      >
                        {index + 1}
                      </button>
                    );
                  })}
                </div>
                <div className="pt-2">
                  <Button
                    onClick={handleSubmit}
                    className={`w-full bg-[#0c84c6] hover:bg-[#0a6d9f] text-white ${isLastQuestion ? "submit-button-glow" : ""}`}
                    ref={submitButtonRef}
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
                <AlertDescription className="text-black">
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
      <style jsx>{`
        .submit-button-glow {
          position: relative;
          isolation: isolate;
          box-shadow: 0 0 10px 4px rgba(12, 132, 198, 0.25);
          transition: box-shadow 0.3s ease;
        }

        .submit-button-glow::after {
          content: "";
          position: absolute;
          inset: -4px;
          border-radius: inherit;
          border: 2px solid rgba(12, 132, 198, 0.65);
          box-shadow: 0 0 18px 6px rgba(12, 132, 198, 0.55);
          opacity: 0.8;
          transform-origin: center;
          animation: submitGlowBorder 2.2s ease-in-out infinite;
          pointer-events: none;
          z-index: -1;
        }

        @keyframes submitGlowBorder {
          0% {
            opacity: 0.45;
            transform: scale(0.97);
            box-shadow: 0 0 12px 4px rgba(12, 132, 198, 0.35);
          }
          50% {
            opacity: 1;
            transform: scale(1);
            box-shadow: 0 0 26px 10px rgba(12, 132, 198, 0.7);
          }
          100% {
            opacity: 0.45;
            transform: scale(0.97);
            box-shadow: 0 0 12px 4px rgba(12, 132, 198, 0.35);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .submit-button-glow::after {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
