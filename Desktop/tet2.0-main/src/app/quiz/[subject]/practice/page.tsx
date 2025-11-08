"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import LatexRenderer from "@/components/LatexRenderer";
import MarkdownLatexRenderer from "@/components/MarkdownLatexRenderer";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { recordQuizAttempt } from "@/actions/quizAttempts";
import {
  BookOpen,
  Calculator,
  FlaskConical,
  Users,
  Globe,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { TouchEvent as ReactTouchEvent } from "react";


import {
  getQuestionLimitForSubject,
  isSubjectSupported,
  SubjectSlug,
} from "@/lib/questions/subjects";
import {
  DEFAULT_LANGUAGE,
  getAvailableLanguagesForSubject,
  sanitizeQuestionLanguage,
  type QuestionLanguage,
} from "@/lib/questions/languages";
import { vibrate } from "@/lib/utils";
import { getDemoPracticeQuestions, isDemoSubject } from "@/data/demoQuestions";



const SWIPE_DISTANCE_THRESHOLD = 60;

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

export default function PracticeModePage() {
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
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>([]);
  const [showExplanations, setShowExplanations] = useState<boolean[]>([]);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [reloadFlag, setReloadFlag] = useState(0);
  const [showExitConfirmation, setShowExitConfirmation] = useState<boolean>(false);
  const allowHistoryNavigationRef = useRef(false);
  const guardInsertedRef = useRef(false);
  const showExitConfirmationRef = useRef(false);
  const quizStartRef = useRef(Date.now());
  const attemptSavedRef = useRef(false);
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "success" | "error">("idle");
  const [saveMessage, setSaveMessage] = useState<string | null>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

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
        const demoSet = getDemoPracticeQuestions(subjectSlug, language);

        setQuestions(demoSet);
        setCurrentQuestion(0);
        setSelectedAnswers(new Array<number | null>(demoSet.length).fill(null));
        setShowExplanations(new Array<boolean>(demoSet.length).fill(false));
        setScore(0);
        setQuizCompleted(false);
        quizStartRef.current = Date.now();
        attemptSavedRef.current = false;
        setSaveStatus("idle");
        setSaveMessage(null);

        if (!demoSet.length) {
          setLoadError("Demo questions are coming soon for this subject.");
        }

        setIsLoading(false);
        return;
      }

      try {
        const limit = getQuestionLimitForSubject(subjectSlug);
        const response = await fetch(
          `/api/questions?subject=${encodeURIComponent(subjectSlug)}&mode=practice&limit=${limit}&language=${language}`,
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

        setQuestions(normalized);
        setCurrentQuestion(0);
        setSelectedAnswers(new Array<number | null>(normalized.length).fill(null));
        setShowExplanations(new Array<boolean>(normalized.length).fill(false));
        setScore(0);
        setQuizCompleted(false);
        quizStartRef.current = Date.now();
        attemptSavedRef.current = false;
        setSaveStatus("idle");
        setSaveMessage(null);

        if (!normalized.length) {
          setLoadError("No questions available yet for this subject.");
        }
      } catch (error) {
        if (controller.signal.aborted) {
          return;
        }

        console.error("practice-mode: failed to load questions", error);
        setQuestions([]);
        setSelectedAnswers([]);
        setShowExplanations([]);
        setScore(0);
        setQuizCompleted(false);
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

    if (quizCompleted || isDemo) {
      return;
    }

    const pushGuardState = () => {
      const currentState = window.history.state ?? {};
      window.history.pushState({ ...currentState, __practiceGuard: true }, "", window.location.href);
    };

    if (!guardInsertedRef.current) {
      if (!window.history.state?.__practiceGuard) {
        pushGuardState();
      }
      guardInsertedRef.current = true;
    }

    const handlePopState = () => {
      if (allowHistoryNavigationRef.current) {
        allowHistoryNavigationRef.current = false;
        return;
      }

      if (quizCompleted) {
        return;
      }

      if (!showExitConfirmationRef.current) {
        setShowExitConfirmation(true);
      }

      pushGuardState();
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [quizCompleted, isDemo]);

  const handleAnswerSelect = (index: number) => {
    if (showExplanations[currentQuestion]) return;
    
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestion] = index;
    setSelectedAnswers(newSelectedAnswers);

    const newShowExplanations = [...showExplanations];
    newShowExplanations[currentQuestion] = true;
    setShowExplanations(newShowExplanations);
    
    if (index === questions[currentQuestion].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
      vibrate(40); // Vibrate for 50ms when correct answer is selected
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const shouldHandleSwipe = () => {
    if (typeof window === "undefined") {
      return true;
    }

    const hasCoarsePointer = window.matchMedia?.("(pointer: coarse)")?.matches ?? false;
    return hasCoarsePointer || window.innerWidth <= 1024;
  };

  const handleTouchStart = (event: ReactTouchEvent<HTMLDivElement>) => {
    if (!shouldHandleSwipe() || event.touches.length !== 1) {
      touchStartRef.current = null;
      return;
    }

    const touch = event.touches[0];
    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
    };
  };

  const handleTouchEnd = (event: ReactTouchEvent<HTMLDivElement>) => {
    if (!touchStartRef.current || !shouldHandleSwipe()) {
      touchStartRef.current = null;
      return;
    }

    const touch = event.changedTouches[0];

    if (!touch) {
      touchStartRef.current = null;
      return;
    }

    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;

    if (Math.abs(deltaX) >= SWIPE_DISTANCE_THRESHOLD && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) {
        handleNextQuestion();
      } else if (deltaX > 0) {
        handlePreviousQuestion();
      }
    }

    touchStartRef.current = null;
  };

  const handleRestartQuiz = () => {
    if (!subject || !isSubjectSupported(subject)) {
      router.push(fallbackRoute);
      return;
    }

    setReloadFlag((value) => value + 1);
  };

  const handleViewResponses = () => {
    if (!questions.length) {
      return;
    }

    setQuizCompleted(false);
    const targetIndex = 0;
    setCurrentQuestion(targetIndex);

    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
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
    setShowExitConfirmation(false);

    if (isDemo) {
      router.replace(fallbackRoute);
      return;
    }

    allowHistoryNavigationRef.current = true;
    router.push(fallbackRoute);
  };

  const cancelExit = () => {
    setShowExitConfirmation(false);
  };

  useEffect(() => {
    if (!quizCompleted || attemptSavedRef.current || !questions.length || isDemo) {
      return;
    }

    const persistAttempt = async () => {
      attemptSavedRef.current = true;
      setSaveStatus("saving");

      const timeSpentSeconds = Math.max(
        0,
        Math.round((Date.now() - (quizStartRef.current ?? Date.now())) / 1000),
      );

      const result = await recordQuizAttempt({
        subjectSlug: subject,
        mode: "practice",
        totalQuestions: questions.length,
        correctAnswers: score,
        timeSpentSeconds,
      });

      if (!result.success) {
        setSaveStatus("error");
        setSaveMessage(result.error);
        return;
      }

      setSaveStatus("success");
      setSaveMessage(null);
    };

    void persistAttempt();
  }, [quizCompleted, questions.length, score, subject, isDemo]);

  const subjectIcons: Record<string, LucideIcon> = {
    "child-development-pedagogy-paper1": GraduationCap,
    "child-development-pedagogy-paper2": GraduationCap,
    "english-paper1": BookOpen,
    "english-paper2": BookOpen,
    "mathematics-paper1": Calculator,
    "mathematics-paper2": Calculator,
    "environmental-studies-paper1": FlaskConical,
    "science-paper2": FlaskConical,
    "social-studies-paper1": Users,
    "social-studies-paper2": Users,
    "urdu-paper1": BookOpen,
    "urdu-paper2": BookOpen,
    "telugu-paper1": Globe,
    "telugu-paper2": Globe,
  };

  const getSubjectTitle = (subject: string) => {
    const title = subject
      .split('-')
      .map((word, index, array) => {
        if (word === 'paper1' && array[index - 1]) {
          return 'Paper-1';
        }
        if (word === 'paper2' && array[index - 1]) {
          return 'Paper-2';
        }
        // Filter out 'pedagogy' word
        if (word === 'pedagogy') {
          return '';
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .filter(word => word !== 'Paper1' && word !== 'Paper2' && word !== '')
      .join(' ');

    if (subject.startsWith('child-development')) {
      return <span className="block text-center">{title}</span>;
    }
    return title;
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
              {loadError ?? "Please check back soon for practice questions on this subject."}
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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-3 sm:p-4 md:p-6 lg:p-8 flex items-center justify-center">
        <Card className="w-full max-w-md mx-2">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-xl sm:text-2xl">Practice Completed!</CardTitle>
            <CardDescription className="text-base flex flex-col items-center justify-center gap-2">
              <span className="text-green-600 dark:text-green-400 font-bold text-2xl sm:text-3xl">Score:</span>
              <span className="text-black dark:text-white font-bold text-2xl sm:text-3xl">{score}/{questions.length}</span>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 px-4">
            <div className="text-center">
              <p className="text-base sm:text-lg font-semibold">
                {score === questions.length ? "Perfect! 🎉" : 
                 score >= questions.length / 2 ? "Good job! 👍" : 
                 "Keep practicing! 💪"}
              </p>
            </div>
            {isDemo ? (
              <Alert>
                <AlertDescription className="text-sm sm:text-base text-black leading-relaxed">
                  Unlock unlimited practice with 7300+ important previous year TSTET questions with detailed solutions and smart analysis with Pro.
                </AlertDescription>
              </Alert>
            ) : null}
            {saveStatus !== "idle" ? (
              <Alert variant={saveStatus === "error" ? "destructive" : "default"}>
                <AlertDescription className="text-black">
                  {saveStatus === "saving"
                    ? "Saving your progress..."
                    : saveStatus === "success"
                      ? "Progress saved! View it from Toggle Progress on the dashboard."
                      : saveMessage ?? "Unable to save your progress."}
                </AlertDescription>
              </Alert>
            ) : null}
            <div className="flex flex-col gap-2">
              {isDemo ? (
                <Button
                  asChild
                  className="w-full justify-center rounded-full bg-gradient-to-r from-[#6a3bff] via-[#8f4eff] to-[#d67dff] px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-[0_12px_30px_rgba(143,78,255,0.3)] hover:shadow-[0_16px_36px_rgba(214,125,255,0.35)] mb-2"
                >
                  <Link href="/try#pro-access">Checkout Pro Features</Link>
                </Button>
              ) : null}
              <Button onClick={handleViewResponses} className="w-full py-3 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 hover:opacity-90 text-white border-transparent font-bold">
                <ChevronLeft className="mr-2 h-4 w-4" />
                View Responses
              </Button>
              <Button onClick={handleRestartQuiz} className="w-full py-3">
                Practice Again
              </Button>
              <Button onClick={handleBackToModeSelection} variant="outline" className="w-full py-3">
                {exitButtonLabel}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const IconComponent = subjectIcons[subject];

  const latexBaseClasses = "[&_span.katex]:whitespace-normal [&_.katex]:!text-left";
  const latexBlockClasses = `${latexBaseClasses} [&_.katex-display]:overflow-x-auto [&_.katex-display]:px-3 [&_.katex-display]:py-2 [&_.katex-display]:my-4 [&_.katex-display]:rounded-lg [&_.katex-display_.katex]:!text-left`;
  const latexQuestionClasses = `${latexBlockClasses} [&_.katex-display]:bg-white/70 dark:[&_.katex-display]:bg-slate-900/40`;
  const latexOptionClasses = `${latexBaseClasses} [&_.katex-display]:overflow-x-auto [&_.katex-display]:px-2 [&_.katex-display]:py-1 [&_.katex-display]:my-2 [&_.katex-display]:rounded-md [&_.katex-display_.katex]:!text-left [&_.katex-display]:bg-transparent`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-3 sm:p-4 md:p-6 lg:p-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-4 sm:mb-6">
          <Button onClick={handleBackToModeSelection} variant="outline" size="sm" className="text-xs sm:text-sm">
            ← {isDemo ? "Back to Preview" : "Exit"}
          </Button>
        </div>
        {isDemo ? (
          <Alert className="mb-4 sm:mb-6 border border-dashed border-[#8f4eff]/40 bg-white/85">
            <AlertDescription className="text-sm sm:text-base text-black leading-relaxed">
              Limited Demo access uses sample questions only.
            </AlertDescription>
          </Alert>
        ) : null}
        
        <Card
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <CardHeader className="pb-4 sm:pb-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <CardTitle className="text-lg sm:text-xl font-bold bg-gradient-to-r from-[#6a3bff] via-[#8f4eff] to-[#d67dff] bg-clip-text text-transparent flex flex-row items-center justify-center gap-2">
                {IconComponent && <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-slate-900" />}
                {getSubjectTitle(subject)}
              </CardTitle>
              <div className="flex flex-col sm:items-end gap-2 w-full sm:w-auto">
                <div className="text-sm sm:text-base text-black dark:text-white text-center sm:text-left font-bold">
                  Question {currentQuestion + 1} of {questions.length}
                </div>
              </div>
            </div>
            <p className="sm:hidden text-xs text-muted-foreground text-center mt-1">
              Swipe left or right to move between questions.
            </p>
            <CardDescription className="text-lg sm:text-xl text-green-300 dark:text-green-400 text-center sm:text-left font-bold">
              <span>Score:</span> <span className="text-green-300 dark:text-green-400">{score}</span>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5 sm:space-y-6 px-4 sm:px-6">
            <h2 className={`text-base sm:text-lg font-semibold leading-relaxed ${latexQuestionClasses}`}>
              <LatexRenderer>{question.question}</LatexRenderer>
            </h2>

            <div className="space-y-2 sm:space-y-3">
              {question.options.map((option, index) => (
                <Button
                  key={index}
                  variant={selectedAnswers[currentQuestion] === index ? "default" : "outline"}
                  className={`w-full text-left justify-start items-start h-auto py-3 px-3 sm:px-4 text-sm sm:text-base whitespace-normal break-words leading-relaxed font-semibold ${latexOptionClasses} ${
                    showExplanations[currentQuestion] && index === question.correctAnswer
                      ? "bg-green-500 hover:bg-green-600 text-white"
                      : showExplanations[currentQuestion] && selectedAnswers[currentQuestion] === index && index !== question.correctAnswer
                      ? "bg-red-500 hover:bg-red-600 text-white"
                      : ""
                  }`}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showExplanations[currentQuestion]}
                >
                  <LatexRenderer>{option}</LatexRenderer>
                </Button>
              ))}
            </div>
            
            {showExplanations[currentQuestion] && (
              <Alert className={selectedAnswers[currentQuestion] === question.correctAnswer ? "border-green-500 bg-green-50 dark:bg-green-950" : "border-red-500 bg-red-50 dark:bg-red-950"}>
                <AlertDescription className={`text-sm sm:text-base font-normal leading-relaxed space-y-3 text-black dark:text-white break-words max-w-full overflow-hidden [&_p]:break-words [&_li]:break-words [&_strong]:font-semibold [&_strong]:text-sm [&_strong]:sm:text-base ${latexBlockClasses}`}>
                  <p className="font-bold text-sm sm:text-base text-[#1f2933]">
                    {selectedAnswers[currentQuestion] === question.correctAnswer ? "Correct!" : "Incorrect!"}
                  </p>
                  <div className="break-words whitespace-pre-wrap text-base sm:text-lg font-normal leading-relaxed">
                    <MarkdownLatexRenderer>{question.explanation}</MarkdownLatexRenderer>
                  </div>
                </AlertDescription>
              </Alert>
            )}
            
            <div className="flex flex-col-reverse sm:flex-row gap-2 mb-8">
              <Button
                onClick={handlePreviousQuestion}
                variant="outline"
                className={`w-full sm:w-1/2 py-3 text-sm sm:text-base ${currentQuestion === 0 ? 'bg-gray-200 text-gray-500 border-gray-300' : 'bg-gradient-to-r from-[#8f4eff] via-[#a67fff] to-[#d67dff] hover:opacity-90 text-white border-transparent'}`}
                disabled={currentQuestion === 0}
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous Question
              </Button>
              <Button
                onClick={handleNextQuestion}
                className={`w-full sm:w-1/2 py-3 text-sm sm:text-base ${currentQuestion < questions.length - 1 ? 'bg-gradient-to-r from-gray-900 via-purple-900 to-purple-700 hover:opacity-90 text-white border-transparent font-bold' : 'bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 hover:opacity-90 text-black border-transparent font-bold'}`}
              >
                {currentQuestion < questions.length - 1 ? "Next Question" : "Finish Practice"}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
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
                  Are you sure you want to quit the practice? Your progress will be lost.
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
