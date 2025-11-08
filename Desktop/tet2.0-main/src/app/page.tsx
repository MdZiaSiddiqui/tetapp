"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { usePersistentCountdown } from "@/hooks/usePersistentCountdown";
import { PRO_OFFER_DURATION_SECONDS, PRO_OFFER_STORAGE_KEY } from "@/lib/proOfferTimer";

const LandingPage = () => {
  const router = useRouter();
  const [animatedFailedCount, setAnimatedFailedCount] = useState(0);
  const targetFailedCount = 106750;
  const animationDuration = 5000; // 3 seconds in milliseconds

  const timeLeft = usePersistentCountdown({
    durationSeconds: PRO_OFFER_DURATION_SECONDS,
    storageKey: PRO_OFFER_STORAGE_KEY,
  });
  
  // Feature rotation state
  const features = [
    "Smart Practice Mode",
    "Authentic Mock Tests",
    "Subject-wise Practice",
    "Smart Feedback"
  ];
  const [, setCurrentFeatureIndex] = useState(0);

  useEffect(() => {
    const animate = () => {
      const startTime = Date.now();
      
      const animateCount = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / animationDuration, 1);
        const currentCount = Math.floor(progress * targetFailedCount);
        setAnimatedFailedCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };

      requestAnimationFrame(animateCount);
    };

    // Run the animation immediately
    animate();

    // Set up an interval to restart the animation every 10 seconds
    const intervalId = setInterval(() => {
      setAnimatedFailedCount(0); // Reset to 0 before starting again
      animate();
    }, 15000); // every 6 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Feature rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setCurrentFeatureIndex((prevIndex) => (prevIndex + 1) % features.length);
      }, 500); // Half of the transition time for smooth effect
    }, 5000); // Change feature every 3 seconds

    return () => clearInterval(interval);
  }, [features.length]);

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
      title: " No time to prepare?⌛\n Quick practice anytime, on any device ✅",
      image: "/devices.webp",
      gradient: "from-sky-200 via-indigo-200 to-purple-200",
    },
    {
      title: " Not perfect with online format?\n Master the format with our realistic tests 🎯",
      image: "/mocktest.webp",
      gradient: "from-amber-200 via-orange-200 to-rose-200",
    },
    {
      title: " Tired of difficult, time-consuming books?\n Learn faster 🚀 with FREE easy eNotes (worth ₹1499) ",
      image: "/bookss.webp",
      gradient: "from-teal-200 via-emerald-200 to-cyan-200",
    },
    {
      title: " Boring and unproductive preparation?\n Use smart practice with instant feedback and insights ⚡",
      image: "/practicev.webp",
      gradient: "from-fuchsia-200 via-purple-200 to-indigo-200",
    },
    {
      title: " Struggling with weak subjects?\n Track and monitor progress for each subject 🔍📈",
      image: "/progress.webp",
      gradient: "from-lime-200 via-green-200 to-emerald-200",
    },
    {
      title: " No real learning with youtube videos?\n Use our focused active learning to truly remember 🧠",
      image: "/focus.webp",
      gradient: "from-blue-200 via-cyan-200 to-teal-200",
    },
  ];

  const marqueeCards = [...cards, ...cards];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-white via-[#f7f3ff] to-[#f0eaff] text-slate-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-[#d1bcff]/65 blur-3xl" />
        <div className="absolute bottom-0 -right-24 h-[24rem] w-[24rem] rounded-full bg-[#ffdff9]/60 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 h-64 w-64 -translate-x-1/2 rounded-[3rem] bg-[#b798ff]/55 blur-2xl" />
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center gap-2 px-4 pb-12 pt-28 sm:px-6 lg:px-8 sm:pt-32">
        <div className="relative z-10 max-w-4xl space-y-2 text-center">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.4em] text-black text-center block font-black">
              Telangana State Teacher Eligibility Test
            </span>
            <h1 className="text-4xl font-bold leading-none text-slate-900 sm:text-10xl sm:leading-tight text-center">
              <span className="font-bold text-3xl sm:text-5xl text-black">TS TET 2026</span>
              <br className="sm:hidden" />
              <span className="font-bold bg-gradient-to-r from-[#4ade80] via-[#86efac] to-[#bbf7d0] bg-clip-text text-transparent text-4xl sm:text-6xl"> made easy</span>
              <span className="italic font-light text-slate-500 text-3xl sm:text-5xl"> for</span>
              <br className="sm:hidden" />
              <span className="font-bold bg-gradient-to-r from-[#7d4dff] via-[#a877ff] to-[#d67dff] bg-clip-text text-transparent text-4xl sm:text-6xl"> busy teachers</span>
            </h1>
            <p className="text-sm sm:text-lg uppercase tracking-[0.2em] text-black text-center block font-black">
              <span className="text-slate-700">
                📚Books are no longer sufficient ! 
              </span>
              <br className="sm:hidden" />
              <span className="text-[#22c55e]">
                &nbsp;you need digital practice for computer-based ts tet
              </span> 🎯
            </p>
          <p className="text-xs uppercase tracking-[0.2em] text-black text-center block font-black">
            Teachers Attempted: <span className="sm:text-2xl text-xl text-slate-700">137,429</span> <br /> Teachers Failed: <span className="text-red-700 sm:text-2xl text-xl whitespace-nowrap">{animatedFailedCount.toLocaleString()}</span>
            <br /><span className="text-[10px] text-black italic" style={{ paddingLeft: '8.5rem', fontWeight: 500 }}><span className="lowercase">(in</span> TSTET 2025</span> <span className="text-[10px] text-black italic" style={{ fontWeight: 500 }}>Paper-2)</span>
          </p>
        </div>


        </div>

      </section>

      {/* Cards Carousel */}
      <section className="relative mx-auto w-full max-w-6xl px-4 pb-8 sm:px-6 lg:px-8 -mt-10">
        <div className="mb-0 text-slate-600">
          <h2 className="text-2xl font-semibold text-slate-900"></h2>
        </div>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent" />
          <div className="marquee">
            <div className="marquee-track">
              {marqueeCards.map((card, index) => (
                <div key={`${card.title}-${index}`} className="group relative w-72 flex-shrink-0">
                  <Card className="h-92 overflow-hidden border border-slate-200 bg-white shadow-[0_18px_36px_rgba(148,163,184,0.25)] backdrop-blur-xl flex flex-col">
                    <div className={`relative h-46 overflow-hidden bg-gradient-to-br ${card.gradient} flex-shrink-0`}>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.35),_transparent_60%)]" />
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className={
                          card.image === "/focus.webp"
                            ? "object-cover scale-128 object-left"
                            : card.image === "/practicev.webp" || card.image === "/devices.webp"
                              ? "object-cover scale-128"
                              : "object-cover"
                        }
                        sizes="288px"
                      />
                      <div className="absolute inset-x-6 bottom-6 rounded-full border border-white/70 bg-white/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-slate-500">
                        Pro
                      </div>
                    </div>
                    <CardContent className="space-y-2 bg-white p-1 flex flex-col flex-grow">
                      <h3 className="text-lg font-semibold pl-2">
                        {card.title.split('\n').map((line, index) => (
                          <span key={index} className={index === 0 ? "text-red-800 font-bold" : "text-green-800"}>
                            {line}
                            {index === 0 && <br />}
                          </span>
                        ))}
                      </h3>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative mx-auto max-w-3xl rounded-[2.5rem] border border-[#d8c8ff] bg-gradient-to-br from-white via-[#f4ecff] to-[#f6e8ff] px-6 py-6 text-center shadow-[0_32px_80px_rgba(160,125,255,0.28)] backdrop-blur-2xl">
        <div className="mx-auto max-w-xl space-y-4">
          <h2 className="text-3xl font-black bg-gradient-to-r from-yellow-700 via-yellow-500 to-purple-600 bg-clip-text text-transparent sm:text-4xl"> Unlimited PRO Access</h2>
          <p className="text-base text-slate-600"> <span className="line-through text-base text-black">₹4000/-</span> <span className="font-bold text-xl">₹1999/-</span></p>
          
          {/* Offer Pill from Hero Section */}
          <div className="inline-flex items-center rounded-full border border-[#d7c8ff] bg-white/85 px-5 py-2 text-sm text-[#7d4dff] shadow-[0_6px_24px_rgba(125,77,255,0.22)]">
            <span className="mr-2 text-lg">🎉</span>
            <span className="font-semibold tracking-wide">50% OFF! </span>
            <span className="ml-3 rounded-full bg-[#f4deff] px-3 py-1 font-medium text-[#b451ff]">
              Ends in {formatTime(timeLeft)}
            </span>
          </div>
          
          <Button
            size="lg"
            className="w-full justify-center rounded-full bg-gradient-to-r from-[#6a3bff] via-[#8f4eff] to-[#d67dff] px-8 py-7 text-base font-semibold text-white shadow-[0_16px_44px_rgba(143,78,255,0.3)] hover:shadow-[0_20px_52px_rgba(214,125,255,0.35)]"
            onClick={() => window.open("https://payments.cashfree.com/forms/testt22", "_blank")}
          >
            Get Pro Access Now
          </Button>
          <Button
            size="lg"
            className="w-full justify-center rounded-full bg-gradient-to-r from-[#f0fdf4] via-[#dcfce7] to-[#bbf7d0] px-8 py-7 text-base font-semibold text-[#166534] shadow-[0_12px_32px_rgba(34,197,94,0.18)] hover:from-[#dcfce7] hover:via-[#bbf7d0] hover:to-[#86efac] hover:text-[#14532d]"
            onClick={() => router.push("/try")}
          >
            <span className="text-black">Try Pro for Free</span>
          </Button>
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
        </div>
      </section>

      {/* Review Section */}
      <section className="relative mx-auto max-w-3xl mt-4">
        <div className="rounded-[2.5rem] border border-[#d8c8ff] bg-gradient-to-br from-white via-[#f4ecff] to-[#f6e8ff] shadow-[0_32px_80px_rgba(160,125,255,0.28)] backdrop-blur-2xl">
          <div className="p-2 space-y-2">
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
          </div>
        </div>
      </section>

      {/* FREE eNotes Section */}
      <section className="relative mx-auto max-w-3xl mt-4">
        <div className="rounded-[2.5rem] border border-[#d8c8ff] bg-gradient-to-br from-white via-[#f4ecff] to-[#f6e8ff] shadow-[0_32px_80px_rgba(160,125,255,0.28)] backdrop-blur-2xl">
          <div className="p-6 space-y-4">
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
                  className="w-full max-w-xs justify-center rounded-full bg-gradient-to-r from-[#f0fdf4] via-[#dcfce7] to-[#bbf7d0] px-6 py-6 text-base font-semibold text-[#166534] shadow-[0_12px_32px_rgba(34,197,94,0.18)] hover:from-[#dcfce7] hover:via-[#bbf7d0] hover:to-[#86efac] hover:text-[#14532d]"
                  onClick={() => router.push("/try")}
                >
                  Try Pro for Free
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative mx-auto mt-16 w-full max-w-6xl border-t border-slate-200/30 bg-white/20 px-4 py-4 sm:px-6 lg:px-8 backdrop-blur-xl">
        <div className="flex flex-row justify-between items-start gap-8 text-xs sm:text-sm text-slate-600">
          {/* Left Column */}
          <div className="flex flex-col items-start gap-1">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <a href="mailto:support@supacharge.me" className="font-bold hover:text-slate-900 focus:outline-none">support@supacharge.me</a>
            </div>
            <div className="flex flex-col items-start">
              <p>Brand name: <span className="text-[0.6rem] font-medium uppercase tracking-[0.2em] text-slate-700">Supacharge</span></p>
              <p>CIN: U62099TS2024PTC186931</p>
              <p className="-my-2">Company: <Image src="/onezn.png" alt="Company Logo" width={112} height={112} className="inline-block -ml-2" /></p>
              <p>Address: 18-12-418/b/10/1,<br /> Hb Nagar, Hyderabad<br />Telangana, India</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-2">
              <Image src="/Whatsapp Icons (2).png" alt="WhatsApp" width={16} height={16} />
              <a href="https://wa.me/916304102415" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-slate-900 focus:outline-none">+91 6304102415</a>
            </div>
            <button onClick={() => router.push("/terms-and-conditions")} className="hover:text-slate-900 cursor-pointer">Terms and Conditions</button>
            <button onClick={() => router.push("/about")} className="hover:text-slate-900 cursor-pointer">About us</button>
            <button onClick={() => router.push("/refund-policy")} className="hover:text-slate-900 cursor-pointer">Refund Policy</button>
            <button onClick={() => router.push("/privacy-policy")} className="hover:text-slate-900 cursor-pointer">Privacy Policy</button>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .marquee {
          overflow: hidden;
        }
        .marquee-track {
          --marquee-duration: 15s;
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
