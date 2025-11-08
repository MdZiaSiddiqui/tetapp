import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function vibrate(duration: number = 200) {
  if (typeof window !== 'undefined' && 'vibrate' in navigator) {
    navigator.vibrate(duration);
  }
}
