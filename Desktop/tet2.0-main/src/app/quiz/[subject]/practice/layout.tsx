import { cookies } from "next/headers";

import { requireProAuth } from "@/lib/auth";

const DEMO_COOKIE = "supacharge-demo-access";

export default async function PracticeTestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const hasDemoAccess = cookieStore.get(DEMO_COOKIE)?.value === "1";

  if (!hasDemoAccess) {
    // Check if user is authenticated and has pro access
    await requireProAuth();
  }
  
  return <>{children}</>;
}
