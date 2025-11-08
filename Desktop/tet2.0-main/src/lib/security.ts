// Rate limiting for authentication attempts
const MAX_LOGIN_ATTEMPTS = 5;
const LOCKOUT_DURATION = 15 * 60 * 1000; // 15 minutes
const attempts = new Map<string, { count: number; lastAttempt: number }>();

export const checkRateLimit = (email: string): boolean => {
  const now = Date.now();
  const userAttempts = attempts.get(email);
  
  if (!userAttempts) {
    attempts.set(email, { count: 1, lastAttempt: now });
    return true;
  }
  
  // Reset if lockout period has passed
  if (now - userAttempts.lastAttempt > LOCKOUT_DURATION) {
    attempts.set(email, { count: 1, lastAttempt: now });
    return true;
  }
  
  // Check if user has exceeded max attempts
  if (userAttempts.count >= MAX_LOGIN_ATTEMPTS) {
    return false;
  }
  
  // Increment attempt count
  userAttempts.count++;
  userAttempts.lastAttempt = now;
  return true;
};

export const clearRateLimit = (email: string): void => {
  attempts.delete(email);
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
};

export const validatePassword = (password: string): { isValid: boolean; message?: string } => {
  if (password.length < 6) {
    return { isValid: false, message: "Password must be at least 6 characters long" };
  }
  
  if (password.length > 128) {
    return { isValid: false, message: "Password is too long" };
  }
  
  return { isValid: true };
};
