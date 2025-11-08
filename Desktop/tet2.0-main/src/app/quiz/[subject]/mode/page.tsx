"use client";

import { useParams, useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ModeSelectionPage() {
  const params = useParams();
  const router = useRouter();
  const subject = params.subject as string;

  const getSubjectTitle = (subject: string) => {
    return subject
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-3 sm:p-4 md:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4 sm:mb-6">
          <Button onClick={() => router.push("/")} variant="outline" size="sm" className="text-xs sm:text-sm">
            ← Back to Home
          </Button>
        </div>
        
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2">
            {getSubjectTitle(subject)}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Select a quiz mode to begin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="text-xl">Practice Mode</CardTitle>
              <CardDescription>
                Random order of questions with immediate feedback
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6 text-sm sm:text-base">
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Questions appear in random order
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Immediate feedback after each response
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Detailed explanations for each answer
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  No time limit
                </li>
              </ul>
              <Link href={`/quiz/${subject}/practice`}>
                <Button className="w-full">Start Practice</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="text-xl">Mock Test Mode</CardTitle>
              <CardDescription>
                Simulated exam experience with timer
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6 text-sm sm:text-base">
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Questions in fixed order
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Timer for each question
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Final score at the end
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Exam-like experience
                </li>
              </ul>
              <Link href={`/quiz/${subject}/mock`}>
                <Button className="w-full">Start Mock Test</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}