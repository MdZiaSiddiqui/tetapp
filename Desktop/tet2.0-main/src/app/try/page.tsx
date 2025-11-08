import DashboardClient, {
  type DashboardProgressRecord,
  type DashboardAttemptRecord,
} from "@/app/dashboard/DashboardClient";
import DemoCookieSetter from "./DemoCookieSetter";
import PhoneNumberGate from "./PhoneNumberGate";

const daysAgo = (days: number) => {
  const date = new Date(Date.now() - days * 24 * 60 * 60 * 1000);
  return date.toISOString();
};

const demoProgress: DashboardProgressRecord[] = [
  // Paper 1 - EVS
  {
    subjectSlug: "evs-paper1",
    paper: "paper1",
    mode: "practice",
    attempts: 3,
    lastAttemptedAt: daysAgo(1),
    lastScorePercent: 33,
    lastCorrectAnswers: Math.round(25 * 0.33),
    lastTotalQuestions: 25,
    bestScorePercent: 42,
    bestCorrectAnswers: Math.round(25 * 0.42),
    bestTotalQuestions: 25,
  },
  {
    subjectSlug: "evs-paper1",
    paper: "paper1",
    mode: "mock",
    attempts: 1,
    lastAttemptedAt: daysAgo(3),
    lastScorePercent: 35,
    lastCorrectAnswers: Math.round(50 * 0.35),
    lastTotalQuestions: 50,
    bestScorePercent: 62,
    bestCorrectAnswers: Math.round(50 * 0.62),
    bestTotalQuestions: 50,
  },
  // Paper 1 - Child Development
  {
    subjectSlug: "child-development-paper1",
    paper: "paper1",
    mode: "practice",
    attempts: 4,
    lastAttemptedAt: daysAgo(2),
    lastScorePercent: 20,
    lastCorrectAnswers: Math.round(25 * 0.20),
    lastTotalQuestions: 25,
    bestScorePercent: 45,
    bestCorrectAnswers: Math.round(25 * 0.45),
    bestTotalQuestions: 25,
  },
  {
    subjectSlug: "child-development-paper1",
    paper: "paper1",
    mode: "mock",
    attempts: 2,
    lastAttemptedAt: daysAgo(5),
    lastScorePercent: 33,
    lastCorrectAnswers: Math.round(50 * 0.33),
    lastTotalQuestions: 50,
    bestScorePercent: 33, // Assuming best is same as last if not specified for mock
    bestCorrectAnswers: Math.round(50 * 0.33),
    bestTotalQuestions: 50,
  },
  // Paper 2 - Math
  {
    subjectSlug: "mathematics-paper2",
    paper: "paper2",
    mode: "practice",
    attempts: 5,
    lastAttemptedAt: daysAgo(4),
    lastScorePercent: 15,
    lastCorrectAnswers: Math.round(25 * 0.15),
    lastTotalQuestions: 25,
    bestScorePercent: 33,
    bestCorrectAnswers: Math.round(25 * 0.33),
    bestTotalQuestions: 25,
  },
  {
    subjectSlug: "mathematics-paper2",
    paper: "paper2",
    mode: "mock",
    attempts: 2,
    lastAttemptedAt: daysAgo(7),
    lastScorePercent: 60, // Slightly different from original science-paper2
    lastCorrectAnswers: Math.round(50 * 0.60),
    lastTotalQuestions: 50,
    bestScorePercent: 70, // Slightly different from original science-paper2
    bestCorrectAnswers: Math.round(50 * 0.70),
    bestTotalQuestions: 50,
  },
  // Paper 2 - English
  {
    subjectSlug: "english-paper2",
    paper: "paper2",
    mode: "practice",
    attempts: 3,
    lastAttemptedAt: daysAgo(2),
    lastScorePercent: 40,
    lastCorrectAnswers: Math.round(25 * 0.40),
    lastTotalQuestions: 25,
    bestScorePercent: 67,
    bestCorrectAnswers: Math.round(25 * 0.67),
    bestTotalQuestions: 25,
  },
  {
    subjectSlug: "english-paper2",
    paper: "paper2",
    mode: "mock",
    attempts: 1,
    lastAttemptedAt: daysAgo(6),
    lastScorePercent: 65, // Slightly different from original urdu-paper2
    lastCorrectAnswers: Math.round(50 * 0.65),
    lastTotalQuestions: 50,
    bestScorePercent: 65, // Assuming best is same as last if not specified for mock
    bestCorrectAnswers: Math.round(50 * 0.65),
    bestTotalQuestions: 50,
  },
];

const demoAttempts: DashboardAttemptRecord[] = [
  // EVS Paper 1 Attempts (Practice & Mock) - /30
  { id: 1, subjectSlug: "evs-paper1", mode: "practice", scorePercent: 8, completedAt: daysAgo(25) }, // ~25% of 30 is 7.5
  { id: 2, subjectSlug: "evs-paper1", mode: "practice", scorePercent: 9, completedAt: daysAgo(20) }, // ~30% of 30 is 9
  { id: 3, subjectSlug: "evs-paper1", mode: "mock", scorePercent: 8, completedAt: daysAgo(18) }, // ~28% of 30 is 8.4 (slight low)
  { id: 4, subjectSlug: "evs-paper1", mode: "practice", scorePercent: 11, completedAt: daysAgo(15) }, // ~35% of 30 is 10.5
  { id: 5, subjectSlug: "evs-paper1", mode: "practice", scorePercent: 10, completedAt: daysAgo(1) }, // ~33% of 30 is 9.9 (last practice)
  { id: 6, subjectSlug: "evs-paper1", mode: "mock", scorePercent: 11, completedAt: daysAgo(3) }, // ~35% of 30 is 10.5 (last mock)
  { id: 7, subjectSlug: "evs-paper1", mode: "practice", scorePercent: 13, completedAt: daysAgo(5) }, // ~42% of 30 is 12.6 (best practice)

  // Child Development Paper 1 Attempts (Practice & Mock) - /30
  { id: 8, subjectSlug: "child-development-paper1", mode: "practice", scorePercent: 5, completedAt: daysAgo(24) }, // ~18% of 30 is 5.4
  { id: 9, subjectSlug: "child-development-paper1", mode: "practice", scorePercent: 7, completedAt: daysAgo(21) }, // ~22% of 30 is 6.6
  { id: 10, subjectSlug: "child-development-paper1", mode: "practice", scorePercent: 8, completedAt: daysAgo(18) }, // ~25% of 30 is 7.5 (slight low)
  { id: 11, subjectSlug: "child-development-paper1", mode: "mock", scorePercent: 9, completedAt: daysAgo(16) }, // ~30% of 30 is 9
  { id: 12, subjectSlug: "child-development-paper1", mode: "practice", scorePercent: 12, completedAt: daysAgo(12) }, // ~40% of 30 is 12
  { id: 13, subjectSlug: "child-development-paper1", mode: "practice", scorePercent: 6, completedAt: daysAgo(2) }, // ~20% of 30 is 6 (last practice, low)
  { id: 14, subjectSlug: "child-development-paper1", mode: "practice", scorePercent: 14, completedAt: daysAgo(8) }, // ~45% of 30 is 13.5 (best practice)
  { id: 15, subjectSlug: "child-development-paper1", mode: "mock", scorePercent: 10, completedAt: daysAgo(5) }, // ~33% of 30 is 9.9 (last mock)

  // Mathematics Paper 2 Attempts (Practice & Mock) - /30
  { id: 16, subjectSlug: "mathematics-paper2", mode: "practice", scorePercent: 4, completedAt: daysAgo(23) }, // ~12% of 30 is 3.6
  { id: 17, subjectSlug: "mathematics-paper2", mode: "practice", scorePercent: 5, completedAt: daysAgo(19) }, // ~18% of 30 is 5.4
  { id: 18, subjectSlug: "mathematics-paper2", mode: "mock", scorePercent: 5, completedAt: daysAgo(17) }, // ~15% of 30 is 4.5 (slight low)
  { id: 19, subjectSlug: "mathematics-paper2", mode: "practice", scorePercent: 8, completedAt: daysAgo(14) }, // ~25% of 30 is 7.5
  { id: 20, subjectSlug: "mathematics-paper2", mode: "practice", scorePercent: 5, completedAt: daysAgo(4) }, // ~15% of 30 is 4.5 (last practice, low)
  { id: 21, subjectSlug: "mathematics-paper2", mode: "practice", scorePercent: 10, completedAt: daysAgo(9) }, // ~33% of 30 is 9.9 (best practice)
  { id: 22, subjectSlug: "mathematics-paper2", mode: "mock", scorePercent: 18, completedAt: daysAgo(7) }, // ~60% of 30 is 18 (last mock)

  // English Paper 2 Attempts (Practice & Mock) - /30
  { id: 23, subjectSlug: "english-paper2", mode: "practice", scorePercent: 11, completedAt: daysAgo(22) }, // ~35% of 30 is 10.5
  { id: 24, subjectSlug: "english-paper2", mode: "practice", scorePercent: 13, completedAt: daysAgo(20) }, // ~42% of 30 is 12.6
  { id: 25, subjectSlug: "english-paper2", mode: "mock", scorePercent: 11, completedAt: daysAgo(18) }, // ~38% of 30 is 11.4 (slight low)
  { id: 26, subjectSlug: "english-paper2", mode: "practice", scorePercent: 17, completedAt: daysAgo(15) }, // ~55% of 30 is 16.5
  { id: 27, subjectSlug: "english-paper2", mode: "practice", scorePercent: 12, completedAt: daysAgo(2) }, // ~40% of 30 is 12 (last practice, low)
  { id: 28, subjectSlug: "english-paper2", mode: "practice", scorePercent: 20, completedAt: daysAgo(10) }, // ~67% of 30 is 20.1 (best practice)
  { id: 29, subjectSlug: "english-paper2", mode: "mock", scorePercent: 20, completedAt: daysAgo(6) }, // ~65% of 30 is 19.5 (last mock)
];

const demoConfig = {
  enabled: true,
  accessibleSubjects: {
    "child-development-pedagogy-paper2": {
      practice: "/quiz/child-development-pedagogy-paper2/practice?demo=true",
      mock: "/quiz/child-development-pedagogy-paper2/mock?demo=true",
    },
    "mathematics-paper1": {
      practice: "/quiz/mathematics-paper1/practice?demo=true",
      mock: "/quiz/mathematics-paper1/mock?demo=true",
    },
  },
  proCtaHref: "https://payments.cashfree.com/forms/testt22",
  proCtaExternal: true,
  proCtaLabel: "Unlock Pro",
  bannerMessage:
    "You're on Limited Demo Access. Upgrade to Pro for Unlimited Practice, Mock Tests, Performance Tracking & More.",
};

const TryPage = () => {
  return (
    <PhoneNumberGate>
      <DemoCookieSetter />
      <DashboardClient
        userEmail="guest@supacharge.me"
        progress={demoProgress}
        attempts={demoAttempts}
        demoConfig={demoConfig}
      />
    </PhoneNumberGate>
  );
};

export default TryPage;
