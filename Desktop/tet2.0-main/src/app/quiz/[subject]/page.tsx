"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function QuizPage() {
  const params = useParams();
  const router = useRouter();
  const subject = params.subject as string;

  useEffect(() => {
    if (!subject) {
      return;
    }

    router.push(`/quiz/${subject}/mode`);
  }, [subject, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 md:p-8 flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Loading Quiz Mode...</CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
}
