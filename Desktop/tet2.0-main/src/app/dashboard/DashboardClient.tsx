"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState, useTransition } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  BookOpen,
  Users,
  Calculator,
  TreePine,
  Globe,
  Atom,
  FileText,
  Pen,
  LogOut,
  Lock,
} from "lucide-react";
import { logoutAction } from "@/actions/auth";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { usePersistentCountdown } from "@/hooks/usePersistentCountdown";
import { PRO_OFFER_DURATION_SECONDS, PRO_OFFER_STORAGE_KEY } from "@/lib/proOfferTimer";
import { cn, vibrate } from "@/lib/utils";
import {
  DEFAULT_LANGUAGE,
  getAvailableLanguagesForSubject,
  LANGUAGE_LABELS,
  sanitizeQuestionLanguage,
  type QuestionLanguage,
} from "@/lib/questions/languages";

export type DashboardProgressRecord = {
  subjectSlug: string;
  paper: "paper1" | "paper2";
  mode: "practice" | "mock";
  attempts: number;
  lastAttemptedAt: string | null;
  lastScorePercent: number | null;
  lastCorrectAnswers: number | null;
  lastTotalQuestions: number | null;
  bestScorePercent: number | null;
  bestCorrectAnswers: number | null;
  bestTotalQuestions: number | null;
};

type ModeKey = DashboardProgressRecord["mode"];
type PaperKey = DashboardProgressRecord["paper"];

export type DashboardAttemptRecord = {
  id: number;
  subjectSlug: string;
  mode: ModeKey;
  scorePercent: number | null;
  completedAt: string | null;
};

type DemoAccessibleSubjects = Record<string, Partial<Record<ModeKey, string>>>;

type DemoConfig = {
  enabled?: boolean;
  accessibleSubjects?: DemoAccessibleSubjects;
  proCtaHref?: string;
  proCtaExternal?: boolean;
  proCtaLabel?: string;
  bannerMessage?: string;
};

const SUBJECT_TITLE_MAP: Record<string, string> = {
  "child-development-pedagogy-paper1": "Child Development and Pedagogy",
  "child-development-pedagogy-paper2": "Child Development and Pedagogy",
  "english-paper1": "Language II (English)",
  "english-paper2": "Language II (English)",
  "mathematics-paper1": "Mathematics",
  "mathematics-paper2": "Mathematics",
  "environmental-studies-paper1": "Environmental Studies",
  "science-paper2": "Science",
  "social-studies-paper1": "Social Studies",
  "social-studies-paper2": "Social Studies",
  "urdu-paper1": "Language I - Urdu",
  "urdu-paper2": "Language I - Urdu",
  "telugu-paper1": "Language I - Telugu",
  "telugu-paper2": "Language I - Telugu",
};

const SUBJECT_ORDER: Record<PaperKey, string[]> = {
  paper1: [
    "child-development-pedagogy-paper1",
    "english-paper1",
    "mathematics-paper1",
    "environmental-studies-paper1",
    "social-studies-paper1",
    "urdu-paper1",
    "telugu-paper1",
  ],
  paper2: [
    "child-development-pedagogy-paper2",
    "english-paper2",
    "mathematics-paper2",
    "science-paper2",
    "social-studies-paper2",
    "urdu-paper2",
    "telugu-paper2",
  ],
};

const LANGUAGE_PREFERENCE_STORAGE_KEY = "dashboard-language-preferences";
const PREFERRED_LANGUAGE_STORAGE_KEY = "dashboard-preferred-language";

const ALL_DASHBOARD_SUBJECTS = Array.from(
  new Set<string>([...SUBJECT_ORDER.paper1, ...SUBJECT_ORDER.paper2]),
);

const LAST_PAPER_STORAGE_KEY = "dashboard-last-paper";

const formatSubjectTitle = (slug: string) => {
  const mapped = SUBJECT_TITLE_MAP[slug];
  if (mapped) {
    return mapped;
  }

  return slug
    .split("-")
    .map((word) => {
      if (word === "paper1") {
        return "Paper 1";
      }
      if (word === "paper2") {
        return "Paper 2";
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};

const MODE_COLORS: Record<ModeKey, { stroke: string; area: string; dot: string; grid: string }> = {
  practice: {
    stroke: "#7c3aed",
    area: "#c4b5fd",
    dot: "#6d28d9",
    grid: "rgba(124, 58, 237, 0.12)",
  },
  mock: {
    stroke: "#f97316",
    area: "#fbbf24",
    dot: "#ea580c",
    grid: "rgba(249, 115, 22, 0.12)",
  },
};

const SUBJECT_CARD_CLASSNAME =
  "hover:shadow-xl transition-all duration-300 border border-slate-200/50 bg-white/80 backdrop-blur-sm gap-1.5 py-4 sm:py-5";
const SUBJECT_CARD_HEADER_CLASSNAME = "px-5 pb-1";
const SUBJECT_CARD_CONTENT_CLASSNAME = "flex flex-col gap-1.5 px-5 pt-0 pb-4";
const SUBJECT_CARD_STACK_CLASSNAME = "flex flex-col gap-1";

const clampPercent = (value: number | null | undefined) => {
  if (value === null || value === undefined || Number.isNaN(Number(value))) {
    return 0;
  }
  return Math.max(0, Math.min(100, Number(value)));
};

type DashboardClientProps = {
  userEmail: string;
  lastLoginAt?: string | null;
  progress?: DashboardProgressRecord[];
  attempts?: DashboardAttemptRecord[];
  demoConfig?: DemoConfig;
};

export default function DashboardClient({
  userEmail,
  lastLoginAt,
  progress = [],
  attempts = [],
  demoConfig,
}: DashboardClientProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [showProgress, setShowProgress] = useState(false);
  const [paperTab, setPaperTab] = useState<PaperKey>("paper2");
  const isDemo = Boolean(demoConfig?.enabled);
  const timeLeft = usePersistentCountdown({
    durationSeconds: PRO_OFFER_DURATION_SECONDS,
    storageKey: PRO_OFFER_STORAGE_KEY,
  });
  const accessibleSubjects = useMemo<DemoAccessibleSubjects>(
    () => demoConfig?.accessibleSubjects ?? {},
    [demoConfig],
  );
  const subjectLanguageOptions = useMemo<Record<string, QuestionLanguage[]>>(
    () =>
      ALL_DASHBOARD_SUBJECTS.reduce((acc, subject) => {
        acc[subject] = getAvailableLanguagesForSubject(subject);
        return acc;
      }, {} as Record<string, QuestionLanguage[]>),
    [],
  );
  const [selectedLanguages, setSelectedLanguages] = useState<Record<string, QuestionLanguage>>(() => {
    const initial: Record<string, QuestionLanguage> = {};
    ALL_DASHBOARD_SUBJECTS.forEach((subject) => {
      const options = subjectLanguageOptions[subject] ?? [DEFAULT_LANGUAGE];
      initial[subject] = options[0] ?? DEFAULT_LANGUAGE;
    });
    return initial;
  });
  const [preferredLanguage, setPreferredLanguage] = useState<QuestionLanguage>(DEFAULT_LANGUAGE);
  const hydrationRef = useRef(false);

  const applyPreferredLanguage = useCallback(
    (requested: QuestionLanguage) => {
      const target = sanitizeQuestionLanguage(requested);

      setPreferredLanguage((prev) => (prev === target ? prev : target));

      setSelectedLanguages((prev) => {
        let changed = false;
        const next: Record<string, QuestionLanguage> = {};

        ALL_DASHBOARD_SUBJECTS.forEach((subject) => {
          const options = subjectLanguageOptions[subject] ?? [DEFAULT_LANGUAGE];
          const fallback = options[0] ?? DEFAULT_LANGUAGE;
          const value = options.includes(target) ? target : fallback;
          next[subject] = value;
          if (prev[subject] !== value) {
            changed = true;
          }
        });

        return changed ? next : prev;
      });
    },
    [subjectLanguageOptions],
  );
  const defaultCtaHref = "https://payments.cashfree.com/forms/testt22";
  const proCtaHref = demoConfig?.proCtaHref ?? defaultCtaHref;
  const proCtaLabel = demoConfig?.proCtaLabel ?? "Unlock Pro Access";
  const proCtaExternal = demoConfig?.proCtaExternal ?? true;
  const bannerMessage = demoConfig?.bannerMessage ??
    "You're viewing a free preview. Only Urdu practice and mock test samples are available.";
  const formattedLastLogin = !isDemo && lastLoginAt
    ? new Date(lastLoginAt).toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      })
    : null;

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const storedPreferred = window.localStorage.getItem(PREFERRED_LANGUAGE_STORAGE_KEY);
    if (storedPreferred) {
      const normalized = sanitizeQuestionLanguage(storedPreferred);
      applyPreferredLanguage(normalized);
      hydrationRef.current = true;
      return;
    }

    const storedMap = window.localStorage.getItem(LANGUAGE_PREFERENCE_STORAGE_KEY);
    if (storedMap) {
      try {
        const parsed = JSON.parse(storedMap) as Record<string, unknown>;
        if (parsed && typeof parsed === "object") {
          const firstMatch = ALL_DASHBOARD_SUBJECTS.find((subject) => {
            return typeof parsed[subject] === "string";
          });

          if (firstMatch) {
            const raw = parsed[firstMatch];
            if (typeof raw === "string") {
              const normalized = sanitizeQuestionLanguage(raw);
              applyPreferredLanguage(normalized);
              hydrationRef.current = true;
              return;
            }
          }
        }
      } catch (error) {
        console.warn("dashboard: failed to restore language preferences", error);
      }
    }

    applyPreferredLanguage(DEFAULT_LANGUAGE);
    hydrationRef.current = true;
  }, [applyPreferredLanguage]);

  useEffect(() => {
    if (typeof window === "undefined" || !hydrationRef.current) {
      return;
    }

    window.localStorage.setItem(
      LANGUAGE_PREFERENCE_STORAGE_KEY,
      JSON.stringify(selectedLanguages),
    );
  }, [selectedLanguages]);

  useEffect(() => {
    if (typeof window === "undefined" || !hydrationRef.current) {
      return;
    }

    window.localStorage.setItem(PREFERRED_LANGUAGE_STORAGE_KEY, preferredLanguage);
  }, [preferredLanguage]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const scrollToHash = () => {
      const hash = window.location.hash.replace(/^#/, "");
      if (!hash) {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        return true;
      }

      const element = document.getElementById(hash);
      if (!element) {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        return false;
      }

      element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
      return true;
    };

    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    requestAnimationFrame(() => {
      const scrolled = scrollToHash();
      if (!scrolled) {
        timeoutId = setTimeout(() => {
          scrollToHash();
        }, 300);
      }
    });

    const stored = window.localStorage.getItem(LAST_PAPER_STORAGE_KEY);
    if (stored === "paper1" || stored === "paper2") {
      setPaperTab(stored);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  const handlePaperTabChange = (value: string) => {
    const nextPaper: PaperKey = value === "paper1" ? "paper1" : "paper2";
    setPaperTab(nextPaper);

    if (typeof window !== "undefined") {
      window.localStorage.setItem(LAST_PAPER_STORAGE_KEY, nextPaper);
    }
  };

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleDemoCta = () => {
    if (!proCtaHref) {
      return;
    }

    vibrate(50);

    if (proCtaExternal && typeof window !== "undefined") {
      window.open(proCtaHref, "_blank", "noopener,noreferrer");
      return;
    }

    router.push(proCtaHref);
  };

  const handleLockedCta = () => {
    vibrate(50);

    if (typeof window === "undefined") {
      return;
    }

    const target = window.document.getElementById("pro-access");
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const getSelectedLanguage = (subjectSlug: string): QuestionLanguage => {
    const options = subjectLanguageOptions[subjectSlug] ?? [DEFAULT_LANGUAGE];
    const selected = selectedLanguages[subjectSlug];
    if (selected && options.includes(selected)) {
      return selected;
    }

    return options[0] ?? DEFAULT_LANGUAGE;
  };

  const handleSubjectLanguageSelect = (requested: QuestionLanguage) => {
    applyPreferredLanguage(requested);
  };

  const appendLanguageParam = (href: string, language: QuestionLanguage): string => {
    const [basePathWithQuery, hashFragment] = href.split("#", 2);
    const [path, queryString] = basePathWithQuery.split("?", 2);
    const params = new URLSearchParams(queryString ?? "");
    params.set("lang", language);
    const newPath = params.toString() ? `${path}?${params.toString()}` : path;
    return hashFragment ? `${newPath}#${hashFragment}` : newPath;
  };

  const renderLanguageSelector = (subjectSlug: string) => {
    const options = subjectLanguageOptions[subjectSlug] ?? [DEFAULT_LANGUAGE];
    if (options.length <= 1) {
      return null;
    }

    const value = getSelectedLanguage(subjectSlug);

    return (
      <div className="space-y-1 rounded-2xl border border-slate-200 bg-white/85 p-2.5 shadow-sm backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/70">
        <div className="flex items-center gap-2 text-[0.65rem] uppercase tracking-wide font-semibold text-slate-600 dark:text-slate-200">
          <Globe className="h-3.5 w-3.5 text-slate-400 dark:text-slate-500" aria-hidden="true" />
          Language
        </div>
        <div className="flex flex-wrap gap-1.5">
          {options.map((option) => {
            const isActive = option === value;
            return (
              <button
                key={option}
                type="button"
                onClick={() => handleSubjectLanguageSelect(option)}
                className={cn(
                  "rounded-full border px-3 py-1 text-xs font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900",
                  isActive
                    ? "border-transparent bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#ec4899] text-white shadow-md focus-visible:ring-[#c4b5fd] dark:focus-visible:ring-[#c4b5fd]"
                    : "border-slate-200 bg-white/90 text-slate-600 hover:border-slate-300 hover:text-slate-900 focus-visible:ring-[#d6bcfa] dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-white dark:focus-visible:ring-[#c4b5fd]"
                )}
                aria-pressed={isActive}
              >
                {LANGUAGE_LABELS[option] ?? option.toUpperCase()}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  const practiceButtonGradient = "bg-gradient-to-r from-[#d1bcff] to-pink-100 hover:from-[#c4b5fd] hover:to-pink-200";

  const getActionConfig = (subjectSlug: string, mode: ModeKey) => {
    if (!isDemo) {
      return { href: `/quiz/${subjectSlug}/${mode}`, locked: false } as const;
    }

    const subjectConfig = accessibleSubjects[subjectSlug];
    const accessibleHref = subjectConfig?.[mode];

    if (accessibleHref) {
      return { href: accessibleHref, locked: false } as const;
    }

    return { href: null, locked: true } as const;
  };

  const renderActionButton = (
    subjectSlug: string,
    mode: ModeKey,
    label: string,
  ) => {
    const language = getSelectedLanguage(subjectSlug);
    const { href, locked } = getActionConfig(subjectSlug, mode);
    const destination = href ? appendLanguageParam(href, language) : null;
    const buttonVariant = mode === "practice" ? "secondary" : "default";
    const buttonClassName = cn(
      "w-full flex items-center justify-center gap-2",
      mode === "practice" ? practiceButtonGradient : undefined,
      locked ? "opacity-95" : undefined,
    );

    if (locked || !destination) {
      return (
        <Button
          type="button"
          variant={buttonVariant}
          className={buttonClassName}
          onClick={handleLockedCta}
        >
          {label}
          <Lock className="h-4 w-4" aria-hidden="true" />
        </Button>
      );
    }

    return (
      <Link href={destination} className="block w-full" onClick={() => vibrate(100)}>
        <Button
          variant={buttonVariant}
          className={buttonClassName}
        >
          {label}
        </Button>
      </Link>
    );
  };

  const progressByMode = useMemo(() => {
    const base: Record<ModeKey, Record<PaperKey, DashboardProgressRecord[]>> = {
      practice: { paper1: [], paper2: [] },
      mock: { paper1: [], paper2: [] },
    };

    progress.forEach((entry) => {
      base[entry.mode][entry.paper].push(entry);
    });

    return base;
  }, [progress]);

  const attemptsByMode = useMemo(() => {
    const base: Record<ModeKey, DashboardAttemptRecord[]> = {
      practice: [],
      mock: [],
    };

    attempts.forEach((entry) => {
      base[entry.mode].push(entry);
    });

    return base;
  }, [attempts]);

  const handleLogout = () => {
    startTransition(async () => {
      await logoutAction();
    });
  };

  const formatPercent = (value: number | null) => {
    if (value === null || value === undefined) {
      return "—";
    }
    const rounded = Number.isFinite(value) ? Number(value).toFixed(0) : value;
    return `${rounded}%`;
  };

  const formatAttempt = (
    correct: number | null,
    total: number | null,
    percent: number | null,
  ) => {
    if (correct === null || total === null) {
      return "—";
    }
    const percentLabel = percent === null || percent === undefined ? "" : ` (${formatPercent(percent)})`;
    return `${correct}/${total}${percentLabel}`;
  };

  const formatDateTime = (value: string | null) => {
    if (!value) {
      return "—";
    }

    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
      return "—";
    }

    return date.toLocaleString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  };

  const renderProgressRows = (mode: ModeKey, paper: PaperKey) => {
    const rows = progressByMode[mode][paper];
    if (!rows.length) {
      return (
        <div className="rounded-lg border border-dashed border-slate-200 bg-white/60 p-4 text-sm text-slate-500">
          No {mode} attempts for {paper === "paper1" ? "Paper-1" : "Paper-2"} yet.
        </div>
      );
    }

    const orderedSlugs = SUBJECT_ORDER[paper] ?? [];
    const ordered: DashboardProgressRecord[] = orderedSlugs
      .map((slug) => rows.find((row) => row.subjectSlug === slug))
      .filter(Boolean) as DashboardProgressRecord[];

    const extras = rows.filter((row) => !orderedSlugs.includes(row.subjectSlug));
    const list = [...ordered, ...extras];

    return (
      <div className="space-y-3">
        {list.map((row) => (
          <div
            key={`${row.subjectSlug}-${row.mode}`}
            className="rounded-xl border border-slate-200/70 bg-white/80 p-4 shadow-sm"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-semibold text-slate-900">
                {formatSubjectTitle(row.subjectSlug)}
              </p>
              <p className="text-xs text-slate-500">
                Last attempt: <span className="font-medium text-slate-700">{formatDateTime(row.lastAttemptedAt)}</span>
              </p>
            </div>
            <div className="mt-3 grid grid-cols-1 gap-2 text-xs text-slate-600 sm:grid-cols-3">
              <div className="text-sm">
                <span className="font-medium text-slate-700">Attempts:</span> {row.attempts}
              </div>
              <div>
                <span className="font-medium text-slate-700">Last Score:</span> {formatAttempt(
                  row.lastCorrectAnswers,
                  row.lastTotalQuestions,
                  row.lastScorePercent,
                )}
              </div>
              <div>
                <span className="font-medium text-slate-700">Best score⭐:</span> {formatAttempt(
                  row.bestCorrectAnswers,
                  row.bestTotalQuestions,
                  row.bestScorePercent,
                )}
              </div>
            </div>
            <SubjectAttemptsChart
              attempts={attemptsByMode[mode].filter(
                (attempt) => attempt.subjectSlug === row.subjectSlug,
              )}
              mode={mode}
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-white via-[#f7f3ff] to-[#f0eaff] text-slate-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-[#d1bcff]/65 blur-3xl" />
        <div className="absolute -bottom-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-[#ffdff9]/60 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 h-64 w-64 -translate-x-1/2 rounded-[3rem] bg-[#b798ff]/55 blur-2xl" />
      </div>

      {/* Navbar */}
      <nav className="fixed inset-x-0 top-0 z-50 mx-4 mt-4 rounded-full border border-slate-200/60 bg-white/70 backdrop-blur-xl shadow-sm">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div
            className="flex items-center gap-2 cursor-pointer focus:outline-none"
            onClick={() => router.push("/")}
          >
            <Image
              src="/Supacharge Logo.webp"
              alt="Supacharge TS-TET"
              width={32}
              height={32}
              className="h-8 w-8"
              priority
            />
            <span className="text-[0.6rem] sm:text-lg font-medium uppercase tracking-[0.2em] text-slate-700">
              Supacharge TS-TET
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-medium text-slate-700">
                {isDemo ? "Guest Preview" : userEmail}
              </p>
              {isDemo ? (
                <p className="text-xs text-slate-400">Limited demo access</p>
              ) : formattedLastLogin ? (
                <p className="text-xs text-slate-400">Last login {formattedLastLogin}</p>
              ) : null}
            </div>
            {isDemo ? (
              <Button
                size="sm"
                onClick={handleDemoCta}
                className="rounded-full bg-gradient-to-r from-[#6a3bff] via-[#8f4eff] to-[#d67dff] px-5 text-white shadow-[0_12px_32px_rgba(143,78,255,0.25)] hover:opacity-95"
              >
                {proCtaLabel}
              </Button>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                disabled={isPending}
                className="text-gray-500 hover:text-gray-700"
              >
                <LogOut className="h-4 w-4 mr-1" />
                {isPending ? "Logging out..." : "Logout"}
              </Button>
            )}
          </div>
        </div>
      </nav>

      {/* Spacer to offset the fixed navbar height */}
      <div className="h-24 sm:h-28" aria-hidden />

      {isDemo ? (
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 mb-2">
          <Alert className="border border-dashed border-[#8f4eff]/40 bg-white/80 shadow-sm">
            <AlertDescription className="text-black">{bannerMessage}</AlertDescription>
          </Alert>
        </div>
      ) : null}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="mb-6 flex justify-center">
          <Button
            variant={showProgress ? "secondary" : "outline"}
            size="lg"
            onClick={() => setShowProgress((prev) => !prev)}
            className="font-medium bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white border-yellow-500 shadow-lg px-8 py-6 text-lg"
          >
            {showProgress ? "Close progress 📈" : "Check your progress 📈"}
          </Button>
        </div>

        {showProgress ? (
          <Card className="mb-8 border border-slate-200/70 bg-white/80 backdrop-blur-sm shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">Your Progress</CardTitle>
              <CardDescription>
                Track your most recent and best scores for practice and mock tests.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Tabs defaultValue="practice">
                <TabsList className="grid w-full grid-cols-2 bg-slate-100 p-1 rounded-lg">
                  <TabsTrigger value="practice" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md">
                    Practice
                  </TabsTrigger>
                  <TabsTrigger value="mock" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md">
                    Mock Tests
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="practice" className="mt-6 space-y-6">
                  <Tabs value={paperTab} onValueChange={handlePaperTabChange}>
                    <TabsList className="grid w-full grid-cols-2 bg-slate-100 p-1 rounded-lg">
                      <TabsTrigger value="paper1" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md">
                        Paper-1
                      </TabsTrigger>
                      <TabsTrigger value="paper2" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md">
                        Paper-2
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="paper1" className="mt-4">
                      {renderProgressRows("practice", "paper1")}
                    </TabsContent>
                    <TabsContent value="paper2" className="mt-4">
                      {renderProgressRows("practice", "paper2")}
                    </TabsContent>
                  </Tabs>
                </TabsContent>
                <TabsContent value="mock" className="mt-6 space-y-6">
                  <Tabs value={paperTab} onValueChange={handlePaperTabChange}>
                    <TabsList className="grid w-full grid-cols-2 bg-slate-100 p-1 rounded-lg">
                      <TabsTrigger value="paper1" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md">
                        Paper-1
                      </TabsTrigger>
                      <TabsTrigger value="paper2" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md">
                        Paper-2
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="paper1" className="mt-4">
                      {renderProgressRows("mock", "paper1")}
                    </TabsContent>
                    <TabsContent value="paper2" className="mt-4">
                      {renderProgressRows("mock", "paper2")}
                    </TabsContent>
                  </Tabs>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        ) : null}

        {/* Subject Selection */}
        <Tabs value={paperTab} onValueChange={handlePaperTabChange} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6 bg-slate-100 p-1 rounded-lg">
            <TabsTrigger value="paper1" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md">Paper-1</TabsTrigger>
            <TabsTrigger value="paper2" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md">Paper-2</TabsTrigger>
          </TabsList>
          
          <TabsContent value="paper1" className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className={SUBJECT_CARD_CLASSNAME}>
                <CardHeader className={SUBJECT_CARD_HEADER_CLASSNAME}>
                  <div className={SUBJECT_CARD_STACK_CLASSNAME}>
                    <div className="flex items-center gap-2">
                      <Calculator className="h-6 w-6 text-[#d67dff]" />
                      <CardTitle className="text-slate-900">Mathematics</CardTitle>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">30 Marks</span>
                      <span className="bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded">Mandatory</span>
                    </div>
                    <CardDescription>Mandatory for all</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className={SUBJECT_CARD_CONTENT_CLASSNAME}>
                  {renderLanguageSelector("mathematics-paper1")}
                  {renderActionButton("mathematics-paper1", "practice", "Practice")}
                  {renderActionButton("mathematics-paper1", "mock", "Mock Test")}
                </CardContent>
              </Card>

              <Card className={SUBJECT_CARD_CLASSNAME}>
                <CardHeader className={SUBJECT_CARD_HEADER_CLASSNAME}>
                  <div className={SUBJECT_CARD_STACK_CLASSNAME}>
                    <div className="flex items-center gap-2">
                      <TreePine className="h-6 w-6 text-[#4ade80]" />
                      <CardTitle className="text-slate-900">Environmental Studies</CardTitle>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">30 Marks</span>
                      <span className="bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded">Mandatory</span>
                    </div>
                    <CardDescription>Mandatory for all</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className={SUBJECT_CARD_CONTENT_CLASSNAME}>
                  {renderLanguageSelector("environmental-studies-paper1")}
                  {renderActionButton("environmental-studies-paper1", "practice", "Practice")}
                  {renderActionButton("environmental-studies-paper1", "mock", "Mock Test")}
                </CardContent>
              </Card>

              <Card className={SUBJECT_CARD_CLASSNAME}>
                <CardHeader className={SUBJECT_CARD_HEADER_CLASSNAME}>
                  <div className={SUBJECT_CARD_STACK_CLASSNAME}>
                    <div className="flex items-center gap-2">
                      <Users className="h-6 w-6 text-[#6a3bff]" />
                      <CardTitle className="text-slate-900">Child Development and Pedagogy</CardTitle>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">30 Marks</span>
                      <span className="bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded">Mandatory</span>
                    </div>
                    <CardDescription>Mandatory for all</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className={SUBJECT_CARD_CONTENT_CLASSNAME}>
                  {renderLanguageSelector("child-development-pedagogy-paper1")}
                  {renderActionButton("child-development-pedagogy-paper1", "practice", "Practice")}
                  {renderActionButton("child-development-pedagogy-paper1", "mock", "Mock Test")}
                </CardContent>
              </Card>

              <Card className={SUBJECT_CARD_CLASSNAME}>
                <CardHeader className={SUBJECT_CARD_HEADER_CLASSNAME}>
                  <div className={SUBJECT_CARD_STACK_CLASSNAME}>
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-6 w-6 text-[#8f4eff]" />
                      <CardTitle className="text-slate-900">Language II (English)</CardTitle>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">30 Marks</span>
                      <span className="bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded">Mandatory</span>
                    </div>
                    <CardDescription>Mandatory for all</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className={SUBJECT_CARD_CONTENT_CLASSNAME}>
                  {renderLanguageSelector("english-paper1")}
                  {renderActionButton("english-paper1", "practice", "Practice")}
                  {renderActionButton("english-paper1", "mock", "Mock Test")}
                </CardContent>
              </Card>

              <Card className={SUBJECT_CARD_CLASSNAME}>
                <CardHeader className={SUBJECT_CARD_HEADER_CLASSNAME}>
                  <div className={SUBJECT_CARD_STACK_CLASSNAME}>
                    <div className="flex items-center gap-2">
                      <FileText className="h-6 w-6 text-[#a78bfa]" />
                      <CardTitle className="text-slate-900">Language I - Urdu</CardTitle>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">30 Marks</span>
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Elective</span>
                    </div>
                    <CardDescription>For Language - I Urdu teachers</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className={SUBJECT_CARD_CONTENT_CLASSNAME}>
                  {renderLanguageSelector("urdu-paper1")}
                  {renderActionButton("urdu-paper1", "practice", "Practice")}
                  {renderActionButton("urdu-paper1", "mock", "Mock Test")}
                </CardContent>
              </Card>

              <Card className={SUBJECT_CARD_CLASSNAME}>
                <CardHeader className={SUBJECT_CARD_HEADER_CLASSNAME}>
                  <div className={SUBJECT_CARD_STACK_CLASSNAME}>
                    <div className="flex items-center gap-2">
                      <Pen className="h-6 w-6 text-[#f472b6]" />
                      <CardTitle className="text-slate-900">Language I - Telugu</CardTitle>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">30 Marks</span>
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Elective</span>
                    </div>
                    <CardDescription>For Language - I Telugu teachers</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className={SUBJECT_CARD_CONTENT_CLASSNAME}>
                  {renderLanguageSelector("telugu-paper1")}
                  {renderActionButton("telugu-paper1", "practice", "Practice")}
                  {renderActionButton("telugu-paper1", "mock", "Mock Test")}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="paper2" className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className={SUBJECT_CARD_CLASSNAME}>
                <CardHeader className={SUBJECT_CARD_HEADER_CLASSNAME}>
                  <div className={SUBJECT_CARD_STACK_CLASSNAME}>
                    <div className="flex items-center gap-2">
                      <Users className="h-6 w-6 text-[#6a3bff]" />
                      <CardTitle className="text-slate-900">Child Development and Pedagogy</CardTitle>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">30 Marks</span>
                      <span className="bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded">Mandatory</span>
                    </div>
                    <CardDescription>Mandatory for all</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className={SUBJECT_CARD_CONTENT_CLASSNAME}>
                  {renderLanguageSelector("child-development-pedagogy-paper2")}
                  {renderActionButton("child-development-pedagogy-paper2", "practice", "Practice")}
                  {renderActionButton("child-development-pedagogy-paper2", "mock", "Mock Test")}
                </CardContent>
              </Card>

              <Card className={SUBJECT_CARD_CLASSNAME}>
                <CardHeader className={SUBJECT_CARD_HEADER_CLASSNAME}>
                  <div className={SUBJECT_CARD_STACK_CLASSNAME}>
                    <div className="flex items-center gap-2">
                      <Calculator className="h-6 w-6 text-[#d67dff]" />
                      <CardTitle className="text-slate-900">Mathematics</CardTitle>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">30 Marks</span>
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Elective</span>
                    </div>
                    <CardDescription>For Math & Science teachers</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className={SUBJECT_CARD_CONTENT_CLASSNAME}>
                  {renderLanguageSelector("mathematics-paper2")}
                  {renderActionButton("mathematics-paper2", "practice", "Practice")}
                  {renderActionButton("mathematics-paper2", "mock", "Mock Test")}
                </CardContent>
              </Card>

              <Card className={SUBJECT_CARD_CLASSNAME}>
                <CardHeader className={SUBJECT_CARD_HEADER_CLASSNAME}>
                  <div className={SUBJECT_CARD_STACK_CLASSNAME}>
                    <div className="flex items-center gap-2">
                      <Atom className="h-6 w-6 text-[#14b8a6]" />
                      <CardTitle className="text-slate-900">Science</CardTitle>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">30 Marks</span>
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Elective</span>
                    </div>
                    <CardDescription>For Math & Science teachers</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className={SUBJECT_CARD_CONTENT_CLASSNAME}>
                  {renderLanguageSelector("science-paper2")}
                  {renderActionButton("science-paper2", "practice", "Practice")}
                  {renderActionButton("science-paper2", "mock", "Mock Test")}
                </CardContent>
              </Card>

              <Card className={SUBJECT_CARD_CLASSNAME}>
                <CardHeader className={SUBJECT_CARD_HEADER_CLASSNAME}>
                  <div className={SUBJECT_CARD_STACK_CLASSNAME}>
                    <div className="flex items-center gap-2">
                      <Globe className="h-6 w-6 text-[#7c3aed]" />
                      <CardTitle className="text-slate-900">Social Studies</CardTitle>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">60 Marks</span>
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Elective</span>
                    </div>
                    <CardDescription>For Social Studies teachers</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className={SUBJECT_CARD_CONTENT_CLASSNAME}>
                  {renderLanguageSelector("social-studies-paper2")}
                  {renderActionButton("social-studies-paper2", "practice", "Practice")}
                  {renderActionButton("social-studies-paper2", "mock", "Mock Test")}
                </CardContent>
              </Card>

              <Card className={SUBJECT_CARD_CLASSNAME}>
                <CardHeader className={SUBJECT_CARD_HEADER_CLASSNAME}>
                  <div className={SUBJECT_CARD_STACK_CLASSNAME}>
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-6 w-6 text-[#8f4eff]" />
                      <CardTitle className="text-slate-900">Language II (English)</CardTitle>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">30 Marks</span>
                      <span className="bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded">Mandatory</span>
                    </div>
                    <CardDescription>Mandatory for all</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className={SUBJECT_CARD_CONTENT_CLASSNAME}>
                  {renderLanguageSelector("english-paper2")}
                  {renderActionButton("english-paper2", "practice", "Practice")}
                  {renderActionButton("english-paper2", "mock", "Mock Test")}
                </CardContent>
              </Card>

              <Card className={SUBJECT_CARD_CLASSNAME}>
                <CardHeader className={SUBJECT_CARD_HEADER_CLASSNAME}>
                  <div className={SUBJECT_CARD_STACK_CLASSNAME}>
                    <div className="flex items-center gap-2">
                      <FileText className="h-6 w-6 text-[#a78bfa]" />
                      <CardTitle className="text-slate-900">Language I - Urdu</CardTitle>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">30 Marks</span>
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Elective</span>
                    </div>
                    <CardDescription>For Language - I Urdu teachers</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className={SUBJECT_CARD_CONTENT_CLASSNAME}>
                  {renderLanguageSelector("urdu-paper2")}
                  {renderActionButton("urdu-paper2", "practice", "Practice")}
                  {renderActionButton("urdu-paper2", "mock", "Mock Test")}
                </CardContent>
              </Card>

              <Card className={SUBJECT_CARD_CLASSNAME}>
                <CardHeader className={SUBJECT_CARD_HEADER_CLASSNAME}>
                  <div className={SUBJECT_CARD_STACK_CLASSNAME}>
                    <div className="flex items-center gap-2">
                      <Pen className="h-6 w-6 text-[#f472b6]" />
                      <CardTitle className="text-slate-900">Language I - Telugu</CardTitle>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">30 Marks</span>
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Elective</span>
                    </div>
                    <CardDescription>For Language - I Telugu teachers</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className={SUBJECT_CARD_CONTENT_CLASSNAME}>
                  {renderLanguageSelector("telugu-paper2")}
                  {renderActionButton("telugu-paper2", "practice", "Practice")}
                  {renderActionButton("telugu-paper2", "mock", "Mock Test")}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
        {isDemo && (
          <div className="relative max-w-3xl mx-auto mt-12">
            <span id="pro-access" className="absolute -top-24 left-0 h-px w-px" aria-hidden="true" />
            <Card className="rounded-[2.5rem] border border-[#d8c8ff] bg-gradient-to-br from-white via-[#f4ecff] to-[#f6e8ff] shadow-[0_32px_80px_rgba(160,125,255,0.28)] backdrop-blur-2xl">
              <CardContent className="p-6 space-y-4">
                <div className="text-center">
                  <h2 className="text-3xl font-black bg-gradient-to-r from-yellow-700 via-yellow-500 to-purple-600 bg-clip-text text-transparent sm:text-4xl"> Unlimited PRO Access</h2>
                  <p className="text-base text-slate-600"> <span className="line-through text-base text-black">₹4000/-</span> <span className="font-bold text-xl">₹1999/-</span></p>
                </div>
                
                <div className="flex justify-center">
                  <div className="inline-flex items-center rounded-full border border-[#d7c8ff] bg-white/85 px-5 py-2 text-sm text-[#7d4dff] shadow-[0_6px_24px_rgba(125,77,255,0.22)]">
                    <span className="mr-2 text-lg">🎉</span>
                    <span className="font-semibold tracking-wide">50% OFF! </span>
                    <span className="ml-3 rounded-full bg-[#f4deff] px-3 py-1 font-medium text-[#b451ff]">
                      Ends in {formatTime(timeLeft)}
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-col gap-3">
                  <Button
                    size="lg"
                    className="w-full justify-center rounded-full bg-gradient-to-r from-[#6a3bff] via-[#8f4eff] to-[#d67dff] px-8 py-7 text-base font-semibold text-white shadow-[0_16px_44px_rgba(143,78,255,0.3)] hover:shadow-[0_20px_52px_rgba(214,125,255,0.35)]"
                    onClick={handleDemoCta}
                  >
                    Get Pro Access Now
                  </Button>
                </div>
                <div className="flex items-center justify-center gap-1 pt-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`h-5 w-5 ${star <= 5 ? "text-yellow-400" : "text-gray-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-lg font-semibold text-slate-700">4.8/5</span>
                </div>
                
                <div className="mt-6 space-y-3 text-left">
                  <div className="flex items-start gap-2">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-black font-bold">TS TET Paper I</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-black font-bold">TS TET Paper II (Maths & Science)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-black font-bold">TS TET Paper II (Social)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-black font-bold">Language I & II - Telugu, Urdu & English</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-black font-bold">FREE 🎁  &apos;TS-TET made Easy&apos; eNotes worth 1499/-</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-black font-bold"> Unlimited Quick practice anytime, on any device📱💻</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-black font-bold">Smart & Fun practice mode with instant feedback & solution insights💡</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-black font-bold">Unlimited subject-wise 🎯 authentic mock tests to master the exam</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-black font-bold">Advanced subject-wise progress monitoring🔍📈  to fix weak subjects</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
        {isDemo && (
          <div className="relative max-w-3xl mx-auto mt-4">
            <Card className="rounded-[2.5rem] border border-[#d8c8ff] bg-gradient-to-br from-white via-[#f4ecff] to-[#f6e8ff] shadow-[0_32px_80px_rgba(160,125,255,0.28)] backdrop-blur-2xl">
              <CardContent className="p-2 space-y-2">
                <div className="text-center space-y-2">
                  <div>
                    <div className="flex items-center justify-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={`madhuri-${star}`}
                          className={`h-4 w-4 ${star <= 5 ? "text-yellow-400" : "text-gray-300"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm font-semibold text-slate-700 italic">“Few minutes of daily smart practice took me from 57/150 to 92/150 in just two months”</p>
                    <p className="text-sm font-bold text-black">- Madhuri (SA)</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={`sameer-${star}`}
                          className={`h-4 w-4 ${star <= 5 ? "text-yellow-400" : "text-gray-300"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm font-semibold text-slate-700 italic">“I failed in tg tet 2025 by 16 marks. If I had this last year, I would have passed”</p>
                    <p className="text-sm font-bold text-black">- Sameer (SGT)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
        {isDemo && (
          <div className="relative max-w-3xl mx-auto mt-4">
            <Card className="rounded-[2.5rem] border border-[#d8c8ff] bg-gradient-to-br from-white via-[#f4ecff] to-[#f6e8ff] shadow-[0_32px_80px_rgba(160,125,255,0.28)] backdrop-blur-2xl">
              <CardContent className="p-6 space-y-4">
                <div className="text-center">
                  <h2 className="text-lg font-black text-black sm:text-xl"> FREE 🎁 TS-TET made <span className="text-green-600">easy</span> eNotes worth 1499/-</h2>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/bookss.webp"
                    alt="TS-TET eNotes"
                    width={300}
                    height={300}
                    className="rounded-lg shadow-md"
                  />
                </div>
                <div className="flex items-center justify-center gap-1 pt-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`h-5 w-5 ${star <= 5 ? "text-yellow-400" : "text-gray-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm font-semibold text-slate-700">4.77/5</span>
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-slate-700 italic">&ldquo;Loved the easy notes, completed a subject in just 3 days&rdquo;</p>
                  <p className="text-sm font-bold text-black">- Meraj ( SGT )</p>
                  <div className="flex justify-center mt-4">
                    <Button
                      size="lg"
                      className="w-full max-w-xs justify-center rounded-full bg-gradient-to-r from-[#6a3bff] via-[#8f4eff] to-[#d67dff] px-6 py-6 text-base font-semibold text-white shadow-[0_16px_44px_rgba(143,78,255,0.3)] hover:shadow-[0_20px_52px_rgba(214,125,255,0.35)]"
                      onClick={handleDemoCta}
                    >
                      Get Pro Access Now
                    </Button>
                  </div>
                </div>
            </CardContent>
            </Card>
          </div>
        )}
    </div>
  );
}

type SubjectAttemptsChartProps = {
  attempts: DashboardAttemptRecord[];
  mode: ModeKey;
};

const SubjectAttemptsChart = ({ attempts, mode }: SubjectAttemptsChartProps) => {
  const rawChartId = useId();
  if (!attempts.length) {
    return null;
  }

  const chartId = rawChartId.replace(/[^a-zA-Z0-9-_]/g, "");
  const colors = MODE_COLORS[mode];
  const padding = { top: 24, right: 56, bottom: 56, left: 56 } as const;
  const height = 240;
  const pointSpacing = 120;

  const ordered = attempts.map((attempt, index) => ({ attempt, index }));
  const plotWidthBase = Math.max(1, ordered.length - 1);
  const width = Math.max(
    560,
    padding.left + padding.right + plotWidthBase * pointSpacing,
  );
  const plotWidth = width - padding.left - padding.right;
  const plotHeight = height - padding.top - padding.bottom;

  const points = ordered.map(({ attempt }, index) => ({
    index,
    percent: clampPercent(attempt.scorePercent),
    raw: attempt,
  }));

  const getX = (index: number) => {
    if (points.length === 1) {
      return padding.left + plotWidth / 2;
    }
    return padding.left + (index / (points.length - 1)) * plotWidth;
  };

  const getY = (percent: number) => padding.top + (1 - percent / 100) * plotHeight;

  const linePath = points
    .map((point, idx) => {
      const x = getX(point.index);
      const y = getY(point.percent);
      return `${idx === 0 ? "M" : "L"}${x},${y}`;
    })
    .join(" ");

  const firstX = getX(points[0].index);
  const lastX = getX(points[points.length - 1].index);
  const baseLineY = padding.top + plotHeight;
  const areaPath = `${linePath} L ${lastX},${baseLineY} L ${firstX},${baseLineY} Z`;

  const gridTicks = [100, 80, 60, 40, 20, 0];

  const formatAttemptLabel = (attempt: DashboardAttemptRecord, index: number) => {
    const attemptNumber = `Attempt ${index + 1}`;
    if (!attempt.completedAt) {
      return attemptNumber;
    }
    const date = new Date(attempt.completedAt);
    if (Number.isNaN(date.getTime())) {
      return attemptNumber;
    }
    return `${attemptNumber} • ${date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })}`;
  };

  const formatScoreText = (value: number | null) => {
    if (value === null || value === undefined) {
      return "—";
    }
    const rounded = Math.round(value * 10) / 10;
    return `${Number.isInteger(rounded) ? rounded.toFixed(0) : rounded.toFixed(1)}%`;
  };

  return (
    <div className="mt-4 space-y-3">
      <div className="overflow-x-auto pb-4">
        <svg
          width={width}
          height={height}
          className="h-60 min-w-full"
          role="img"
          aria-label={`${mode} attempt history chart`}
        >
          <defs>
            <linearGradient
              id={`attempt-gradient-${chartId}-${mode}`}
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor={colors.area} stopOpacity="0.6" />
              <stop offset="85%" stopColor={colors.area} stopOpacity="0.08" />
            </linearGradient>
          </defs>

          {gridTicks.map((tick) => {
            const isGoalLine = tick === 60;
            const y = getY(tick);
            return (
              <g key={tick}>
                <line
                  x1={padding.left}
                  x2={width - padding.right}
                  y1={y}
                  y2={y}
                  stroke={isGoalLine ? "#22c55e" : colors.grid}
                  strokeWidth={isGoalLine ? 2.5 : 1}
                  strokeDasharray={isGoalLine ? "4 4" : "6 6"}
                />
                <text
                  x={padding.left - 12}
                  y={y + 4}
                  fontSize={11}
                  fill={isGoalLine ? "#16a34a" : "#64748b"}
                  textAnchor="end"
                >
                  {tick}%
                </text>
              </g>
            );
          })}

          <line
            x1={padding.left}
            x2={width - padding.right}
            y1={baseLineY}
            y2={baseLineY}
            stroke="#cbd5f5"
            strokeWidth={1}
          />

          <path
            d={areaPath}
            fill={`url(#attempt-gradient-${chartId}-${mode})`}
            opacity={0.9}
          />

          <path
            d={linePath}
            fill="none"
            stroke={colors.stroke}
            strokeWidth={3}
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {points.map((point, idx) => {
            const x = getX(point.index);
            const y = getY(point.percent);
            const isLatest = idx === points.length - 1;
            const hasScore = point.raw.scorePercent !== null;
            return (
              <g key={point.raw.id ?? idx}>
                <circle
                  cx={x}
                  cy={y}
                  r={isLatest ? 7 : 5.5}
                  fill={hasScore ? colors.dot : "#94a3b8"}
                  stroke="#f8fafc"
                  strokeWidth={2}
                />
                <text
                  x={x}
                  y={y - 14}
                  fontSize={11}
                  fontWeight={isLatest ? 600 : 500}
                  fill="#0f172a"
                  textAnchor="middle"
                >
                  {hasScore ? `${Math.round(point.percent)}%` : "—"}
                </text>
              </g>
            );
          })}

          {points.map((point) => {
            const x = getX(point.index);
            return (
              <text
                key={`label-${point.raw.id ?? point.index}`}
                x={x}
                y={baseLineY + 22}
                fontSize={11}
                fill="#475569"
                textAnchor="middle"
              >
                {point.index + 1}
              </text>
            );
          })}
        </svg>
      </div>
      <div className="flex min-w-full snap-x snap-mandatory gap-3 overflow-x-auto pb-2">
        {points.map((point) => (
          <div
            key={`meta-${point.raw.id ?? point.index}`}
            className="snap-start rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs shadow-sm"
          >
            <p className="font-semibold text-slate-700">
              {formatAttemptLabel(point.raw, point.index)}
            </p>
            <p className="text-slate-500">
              Score: {formatScoreText(point.raw.scorePercent)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
