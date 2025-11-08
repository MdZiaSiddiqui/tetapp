"use server";

import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

import { supabaseServiceClient } from "@/lib/supabase/service";
import {
  clearSession,
  getSessionFromCookies,
  persistSession,
  type SessionPayload,
} from "@/lib/session";
import { 
  checkRateLimit, 
  clearRateLimit, 
  validateEmail, 
  validatePassword 
} from "@/lib/security";

export type LoginState =
  | { status: "idle" }
  | { status: "error"; message: string };

const toState = (message: string): LoginState => ({ status: "error", message });

export const loginAction = async (
  _prevState: LoginState,
  formData: FormData,
): Promise<LoginState> => {
  const email = String(formData.get("email") || "").trim().toLowerCase();
  const password = String(formData.get("password") || "").trim();

  // Input validation
  if (!validateEmail(email)) {
    return toState("Please enter a valid email address.");
  }

  const passwordValidation = validatePassword(password);
  if (!passwordValidation.isValid) {
    return toState(passwordValidation.message || "Invalid password format.");
  }

  // Rate limiting
  if (!checkRateLimit(email)) {
    return toState("Too many failed attempts. Please try again in 15 minutes.");
  }

  const supabase = supabaseServiceClient();

  type CredentialRecord = { password_hash: string };

  type UserWithCredentials = {
    id: number;
    email: string;
    tier: string | null;
    is_active: boolean | null;
    last_login_at: string | null;
    user_credentials: CredentialRecord | CredentialRecord[] | null;
  };

  const { data: user, error } = await supabase
    .from("users")
    .select(
      "id, email, tier, is_active, last_login_at, user_credentials!inner(password_hash)",
    )
    .eq("email", email)
    .maybeSingle<UserWithCredentials>();

  if (error) {
    console.error("loginAction: unable to query users", error);
    return toState("Unable to sign in right now. Please try again.");
  }

  if (!user) {
    return toState("Invalid email or password.");
  }

  if (user.tier !== "pro") {
    return toState("Pro Access not found on this email address.");
  }

  if (user.is_active === false) {
    return toState("This account has been deactivated. Please contact support.");
  }

  const credentials = Array.isArray(user.user_credentials)
    ? user.user_credentials[0]
    : user.user_credentials;

  if (!credentials || !credentials.password_hash) {
    return toState("Account is missing credentials. Please contact support.");
  }

  const passwordMatches = await bcrypt.compare(
    password,
    credentials.password_hash,
  );

  if (!passwordMatches) {
    return toState("Invalid email or password.");
  }

  // Clear rate limit on successful login
  clearRateLimit(email);

  const lastLoginAt = new Date().toISOString();
  const session: SessionPayload = {
    userId: user.id,
    email: user.email,
    tier: user.tier,
    lastLoginAt,
    expiresAt: Date.now() + (7 * 24 * 60 * 60 * 1000), // 7 days from now
  };

  const [updateResult] = await Promise.all([
    supabase.from("users").update({ last_login_at: lastLoginAt }).eq("id", user.id),
    persistSession(session),
  ]);

  if (updateResult?.error) {
    console.error("loginAction: unable to update last_login_at", updateResult.error);
  }

  redirect("/dashboard");
};

export const logoutAction = async () => {
  await clearSession();
  redirect("/");
};

export const requireProSession = async () => {
  const session = await getSessionFromCookies();
  if (!session || session.tier !== "pro") {
    redirect("/login?reason=pro-required");
  }
  return session;
};
