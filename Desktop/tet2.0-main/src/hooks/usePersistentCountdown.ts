"use client";

import { useEffect, useRef, useState } from "react";

const SECOND_IN_MS = 1000;

type UsePersistentCountdownOptions = {
  durationSeconds: number;
  storageKey: string;
};

/**
 * Shares a countdown across client pages by persisting the deadline in localStorage.
 */
export function usePersistentCountdown({
  durationSeconds,
  storageKey,
}: UsePersistentCountdownOptions) {
  const [timeLeft, setTimeLeft] = useState(() => {
    return Math.max(0, Math.floor(durationSeconds));
  });
  const deadlineRef = useRef<number | null>(null);

  useEffect(() => {
    if (durationSeconds <= 0) {
      setTimeLeft(0);
      deadlineRef.current = null;
      return;
    }

    if (typeof window === "undefined") {
      return;
    }

    const now = Date.now();
    const persisted = window.localStorage.getItem(storageKey);
    let deadline = persisted ? Number.parseInt(persisted, 10) : Number.NaN;

    if (!Number.isFinite(deadline)) {
      deadline = now + durationSeconds * SECOND_IN_MS;
      window.localStorage.setItem(storageKey, String(deadline));
    }

    deadlineRef.current = deadline;

    const syncTimeLeft = () => {
      if (deadlineRef.current === null) {
        setTimeLeft(0);
        return 0;
      }

      const remainingMs = deadlineRef.current - Date.now();
      const nextTimeLeft = Math.max(0, Math.round(remainingMs / SECOND_IN_MS));
      setTimeLeft(nextTimeLeft);
      return nextTimeLeft;
    };

    syncTimeLeft();

    const intervalId = window.setInterval(() => {
      const next = syncTimeLeft();
      if (next <= 0) {
        window.clearInterval(intervalId);
      }
    }, SECOND_IN_MS);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [durationSeconds, storageKey]);

  return timeLeft;
}
