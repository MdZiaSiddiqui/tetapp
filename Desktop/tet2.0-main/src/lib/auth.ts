import { redirect } from "next/navigation";
import { getSessionFromCookies } from "./session";

/**
 * Server-side authentication check for protected pages
 * This function should be called in server components or server actions
 * to ensure the user is authenticated before accessing protected content
 */
export async function requireAuth() {
  const session = await getSessionFromCookies();
  
  if (!session) {
    // Redirect to login page if no session exists
    redirect("/login?reason=auth-required");
  }
  
  return session;
}

/**
 * Server-side authentication check for pro-only pages
 * This function ensures the user is authenticated and has a pro tier
 */
export async function requireProAuth() {
  const session = await requireAuth();
  
  if (session.tier !== "pro") {
    // Redirect to login page if user is not a pro member
    redirect("/login?reason=pro-required");
  }
  
  return session;
}