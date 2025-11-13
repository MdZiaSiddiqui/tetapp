import { useState, useEffect, useRef } from 'react';

interface UseTestTimerProps {
  initialSeconds: number;
  onTimeUp: () => void;
  enabled?: boolean;
}

export function useTestTimer({ initialSeconds, onTimeUp, enabled = true }: UseTestTimerProps) {
  const [timeRemaining, setTimeRemaining] = useState(initialSeconds);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!enabled) return;

    timerRef.current = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          onTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [enabled, onTimeUp]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return {
    timeRemaining,
    formattedTime: formatTime(timeRemaining),
    isLowTime: timeRemaining <= 60, // Last minute warning
  };
}
