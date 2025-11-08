'use client';

import { FormEvent, ReactNode, useEffect, useRef, useState } from "react";

const STORAGE_KEY = "trial-phone-number-captured";

type PhoneNumberGateProps = {
  children: ReactNode;
};

const sanitizePhone = (phone: string) => phone.replace(/[^0-9+]/g, "");

const isValidPhone = (phone: string) => {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 13;
};

const PhoneNumberGate = ({ children }: PhoneNumberGateProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasCheckedStorage, setHasCheckedStorage] = useState(false);
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [shouldLiftCard, setShouldLiftCard] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const grantAccess = (sanitizedPhone: string) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, sanitizedPhone);
    }

    setIsOpen(false);
  };

  useEffect(() => {
    if (typeof window === "undefined") {
      setHasCheckedStorage(true);
      return;
    }

    const stored = window.localStorage.getItem(STORAGE_KEY);
    setIsOpen(!stored);
    setHasCheckedStorage(true);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setShouldLiftCard(false);
      return;
    }

    if (typeof window === "undefined") {
      return;
    }

    const focusTimer = window.setTimeout(() => {
      const input = inputRef.current;
      if (!input) {
        return;
      }

      input.focus({ preventScroll: true });
      input.setSelectionRange(input.value.length, input.value.length);
    }, 0);

    return () => window.clearTimeout(focusTimer);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setShouldLiftCard(false);
      return;
    }

    if (typeof window === "undefined") {
      return;
    }

    const viewport = window.visualViewport;

    if (!viewport) {
      const prefersTouch = window.matchMedia?.("(pointer: coarse)").matches ?? false;
      setShouldLiftCard(prefersTouch && isInputFocused);
      return;
    }

    const updateLift = () => {
      const keyboardLikelyOpen = viewport.height < window.innerHeight - 120;
      setShouldLiftCard(isInputFocused && keyboardLikelyOpen);
    };

    updateLift();

    viewport.addEventListener("resize", updateLift);
    viewport.addEventListener("scroll", updateLift);

    return () => {
      viewport.removeEventListener("resize", updateLift);
      viewport.removeEventListener("scroll", updateLift);
    };
  }, [isOpen, isInputFocused]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmed = phone.trim();

    if (!trimmed) {
      setError("Please enter your phone number.");
      return;
    }

    const sanitized = sanitizePhone(trimmed);

    if (!isValidPhone(sanitized)) {
      setError("Enter a valid phone number");
      return;
    }

    setError(null);
    setIsSubmitting(true);
    grantAccess(sanitized);

    try {
      const response = await fetch("/api/trial-leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone: trimmed }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => ({}))) as { error?: string };
        console.warn("Failed to persist trial lead", data.error);
      }
    } catch (fetchError) {
      console.warn("Unable to persist trial lead", fetchError);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative">
      {children}
      {hasCheckedStorage && isOpen ? (
        <div
          className={`fixed inset-0 z-50 flex justify-center bg-black/60 px-4 py-8 ${shouldLiftCard ? "items-start pt-16" : "items-center"}`}
        >
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md rounded-xl bg-white p-6 shadow-2xl"
          >
            <h2 className="text-xl font-semibold text-gray-900">Get FREE instant demo access⚡</h2>
            <label className="mt-4 block text-sm font-medium text-gray-700" htmlFor="trial-phone">
              Phone number
            </label>
            <input
              id="trial-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              autoFocus
              ref={inputRef}
              required
              pattern="[0-9+\-()\s]+"
              title="Please enter a valid phone number"
              placeholder=""
              value={phone}
              onChange={(event) => {
                setPhone(event.target.value);
                if (error) {
                  setError(null);
                }
              }}
              onFocus={() => setIsInputFocused(true)}
              onBlur={() => setIsInputFocused(false)}
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-base text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/60"
            />
            {error ? <p className="mt-2 text-sm text-red-600">{error}</p> : null}
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-4 w-full rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white transition hover:from-indigo-500 hover:to-purple-500 disabled:cursor-not-allowed disabled:from-indigo-300 disabled:to-purple-300"
            >
              {isSubmitting ? "Saving..." : "Continue"}
            </button>
            <p className="mt-3 text-xs text-black text-center">No spam calls ever.</p>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default PhoneNumberGate;
