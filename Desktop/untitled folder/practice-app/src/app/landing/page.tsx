"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";

const LandingPage = () => {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(3 * 57 * 60); 

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const cards = [
    {
      title: "Mobile + Desktop Unlimited Access",
      description: "Use the app seamlessly on both your phone and laptop.",
      emoji: "📱💻",
      gradient: "from-sky-200 via-indigo-200 to-purple-200",
    },
    {
      title: "Practice Mode Card",
      description: "Adaptive practice that keeps you focused on tricky topics.",
      emoji: "🧠",
      gradient: "from-amber-200 via-orange-200 to-rose-200",
    },
    {
      title: "Real Mock Test",
      description: "Face the exact exam pressure with real TS-TET patterns.",
      emoji: "📋",
      gradient: "from-teal-200 via-emerald-200 to-cyan-200",
    },
    {
      title: "eNotes worth 1200/- for Free",
      description: "Download concise expert notes covering Paper I & II.",
      emoji: "📚",
      gradient: "from-fuchsia-200 via-purple-200 to-indigo-200",
    },
  ];

  const marqueeCards = [...cards, ...cards];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-sky-50 to-indigo-100 text-slate-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-sky-200/70 blur-3xl" />
        <div className="absolute -bottom-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-amber-100/70 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 h-64 w-64 -translate-x-1/2 rounded-[3rem] bg-indigo-200/60 blur-2xl" />
      </div>

      {/* Navbar */}
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <span className="text-lg font-medium uppercase tracking-[0.3em] text-slate-700">
            TS-TET Prep
          </span>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="border-slate-200 bg-white/80 text-slate-700 hover:border-slate-300 hover:bg-white"
              onClick={() => router.push("/dashboard")}
            >
              Login
            </Button>
            <Button
              className="bg-gradient-to-r from-indigo-500 to-cyan-400 text-white shadow-[0_8px_24px_rgba(37,99,235,0.25)] hover:shadow-[0_12px_32px_rgba(6,182,212,0.35)]"
              onClick={() => router.push("/dashboard")}
            >
              Buy Pro
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 pt-20 pb-24 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
        <div className="relative z-10 max-w-2xl space-y-6">
          <div className="inline-flex items-center rounded-full border border-indigo-100 bg-white/80 px-5 py-2 text-sm text-indigo-600 shadow-[0_6px_24px_rgba(15,23,42,0.18)]">
            <span className="mr-2 text-lg">🎉</span>
            <span className="font-semibold tracking-wide">OFFER : 50% OFF !</span>
            <span className="ml-3 rounded-full bg-rose-100 px-3 py-1 font-medium text-rose-600">
              {formatTime(timeLeft)}
            </span>
          </div>

          <div className="space-y-4">
            <span className="text-sm uppercase tracking-[0.4em] text-slate-500">
              TS-TET 2026 Prep
            </span>
            <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Crack TS-TET with Smart Practice & Real Mock Tests
            </h1>
          </div>

          <div className="space-y-2 text-lg text-slate-600">
            <p>
              190,047 attempted TS‑TET, <span className="font-semibold text-rose-500">160,974 failed.</span>
            </p>
            <p>
              TS-TET made easy with Smart Practice Mode and real exam‑style Mock Tests. Covers Paper I & II, all
              subjects and languages (Telugu, Urdu, English).
            </p>
          </div>

        </div>

        <div className="relative z-10 flex-1">
          <div className="relative mx-auto max-w-md rounded-[2rem] border border-slate-200/70 bg-white/90 p-6 shadow-[0_24px_60px_rgba(148,163,184,0.35)] backdrop-blur-xl">
            <div className="absolute -top-6 right-8 flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-1 text-xs font-medium uppercase tracking-[0.3em] text-slate-500">
              Pro Access
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-indigo-200 via-sky-100 to-purple-100 p-6">
              <div className="rounded-2xl bg-white/80 p-5 text-sm text-slate-700 shadow-inner">
                <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Smart Practice Snapshot</p>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm">
                    <div>
                      <p className="text-sm text-slate-500">Today&apos;s Focus</p>
                      <p className="text-lg font-semibold text-slate-900">Child Development</p>
                    </div>
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-600">
                      78% Ready
                    </span>
                  </div>
                  <div className="rounded-2xl border border-dashed border-indigo-100 p-4 bg-white/70">
                    <p className="text-sm text-slate-500">Next Mock Test</p>
                    <div className="mt-3 flex items-end justify-between">
                      <p className="text-3xl font-semibold text-slate-900">Paper II</p>
                      <span className="text-xs uppercase tracking-[0.3em] text-slate-400">8:00 PM Today</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-xs text-slate-500">
                    <div className="rounded-xl bg-white p-3 text-center shadow-sm">
                      <p className="text-2xl font-semibold text-slate-900">36</p>
                      <p>Mocks done</p>
                    </div>
                    <div className="rounded-xl bg-white p-3 text-center shadow-sm">
                      <p className="text-2xl font-semibold text-slate-900">92%</p>
                      <p>Accuracy</p>
                    </div>
                    <div className="rounded-xl bg-white p-3 text-center shadow-sm">
                      <p className="text-2xl font-semibold text-slate-900">04</p>
                      <p>Languages</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Carousel */}
      <section className="relative mx-auto w-full max-w-6xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mb-8 text-slate-600">
          <h2 className="text-2xl font-semibold text-slate-900">Everything you need inside Pro</h2>
        </div>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent" />
          <div className="marquee">
            <div className="marquee-track">
              {marqueeCards.map((card, index) => (
                <div key={`${card.title}-${index}`} className="group relative w-72 flex-shrink-0">
                  <Card className="overflow-hidden border border-slate-200 bg-white shadow-[0_18px_36px_rgba(148,163,184,0.25)] backdrop-blur-xl">
                    <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${card.gradient}`}>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.35),_transparent_60%)]" />
                      <span className="absolute right-6 top-6 text-4xl drop-shadow-sm">{card.emoji}</span>
                      <div className="absolute inset-x-6 bottom-6 rounded-full border border-white/70 bg-white/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-slate-500">
                        Featured
                      </div>
                    </div>
                    <CardContent className="space-y-2 bg-white p-6">
                      <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
                      <p className="text-sm text-slate-600">{card.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative mx-auto max-w-3xl rounded-[2.5rem] border border-indigo-100 bg-gradient-to-br from-white via-indigo-50 to-sky-100 px-6 py-6 text-center shadow-[0_32px_80px_rgba(148,163,184,0.35)] backdrop-blur-2xl">
        <div className="mx-auto max-w-xl space-y-4">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Buy Pro at just ₹2200/-</h2>
          <p className="text-base text-slate-600">Unlimited Use for 1 Year. Everything Included</p>
          <Button
            size="lg"
            className="w-full justify-center rounded-full bg-gradient-to-r from-emerald-300 via-teal-300 to-sky-400 px-8 py-7 text-base font-semibold text-slate-900 shadow-[0_16px_40px_rgba(110,231,183,0.3)] hover:shadow-[0_20px_48px_rgba(56,189,248,0.35)]"
            onClick={() => router.push("/dashboard")}
          >
            Get Pro Access Now
          </Button>
        </div>
      </section>

      <style jsx>{`
        .marquee {
          overflow: hidden;
        }
        .marquee-track {
          --marquee-duration: 9s;
          display: flex;
          gap: 1.5rem;
          width: max-content;
          will-change: transform;
          animation: marquee var(--marquee-duration) linear infinite;
        }
        @keyframes marquee {
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
