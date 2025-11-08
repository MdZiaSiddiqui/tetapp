"use client";

import { useActionState, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import clsx from "clsx";

import { loginAction, type LoginState } from "@/actions/auth";
import { Button } from "@/components/ui/button";

const getInitialState = (reason: string | null): LoginState => {
  if (reason === "pro-required") {
    return {
      status: "error",
      message: "Pro access is required. Please sign in with a Pro account.",
    };
  }

  return { status: "idle" };
};

export const LoginForm = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const reason = searchParams.get("reason");
  const [state, formAction, isPending] = useActionState(
    loginAction,
    getInitialState(reason),
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const savedEmail = localStorage.getItem("userEmail");
    if (savedEmail) {
      setEmail(savedEmail);
    }
    const savedPassword = localStorage.getItem("userPassword");
    if (savedPassword) {
      setPassword(savedPassword);
    }
  }, []);

  useEffect(() => {
    router.prefetch("/dashboard");
  }, [router]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    localStorage.setItem("userEmail", newEmail);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    localStorage.setItem("userPassword", newPassword);
  };

  return (
    <form action={formAction} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-slate-600">
          Username
        </label>
        <input
          id="email"
          name="email"
          type="text"
          autoComplete="username"
          required
          value={email}
          onChange={handleEmailChange}
          className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-[#8f4eff] focus:ring-4 focus:ring-[#8f4eff]/10"
          placeholder="Enter your username"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="password" className="block text-sm font-medium text-slate-600">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          value={password}
          onChange={handlePasswordChange}
          className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-[#8f4eff] focus:ring-4 focus:ring-[#8f4eff]/10"
          placeholder="Enter your password"
        />
      </div>

      <Button
        type="submit"
        disabled={isPending}
        className="w-full bg-gradient-to-r from-[#6a3bff] via-[#8646ff] to-[#c06bff] text-white shadow-[0_10px_26px_rgba(134,70,255,0.28)] hover:shadow-[0_14px_36px_rgba(192,107,255,0.32)]"
      >
        {isPending ? "Signing in..." : "Login"}
      </Button>

      <p
        aria-live="polite"
        className={clsx(
          "text-sm font-medium text-red-600",
          state.status === "error" ? "opacity-100" : "opacity-0",
        )}
      >
        {state.status === "error" ? state.message : " "}
      </p>
    </form>
  );
};

export default LoginForm;
