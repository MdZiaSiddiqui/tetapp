import { cookies } from "next/headers";
import { createHmac, timingSafeEqual } from "crypto";

const SESSION_SECRET = process.env.SESSION_SECRET;

if (!SESSION_SECRET) {
  throw new Error(
    "Missing SESSION_SECRET environment variable. This is required for secure session management."
  );
}

export const SESSION_COOKIE_NAME = "pro_session";

export type SessionPayload = {
  userId: number;
  email: string;
  tier: "free" | "pro";
  lastLoginAt?: string | null;
  expiresAt: number; // Unix timestamp for session expiration
};

const sign = (payloadSegment: string) =>
  createHmac("sha256", SESSION_SECRET).update(payloadSegment).digest("base64url");

const encode = (payload: SessionPayload) =>
  Buffer.from(JSON.stringify(payload)).toString("base64url");

const decode = (payloadSegment: string): SessionPayload => {
  const json = Buffer.from(payloadSegment, "base64url").toString("utf8");
  return JSON.parse(json) as SessionPayload;
};

export const createSessionCookie = (payload: SessionPayload) => {
  const payloadSegment = encode(payload);
  const signature = sign(payloadSegment);
  return `${payloadSegment}.${signature}`;
};

export const verifySessionCookie = (raw: string): SessionPayload | null => {
  const [payloadSegment, signature] = raw.split(".");
  if (!payloadSegment || !signature) {
    return null;
  }

  const expectedSignature = sign(payloadSegment);
  const signatureBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expectedSignature);

  if (
    signatureBuffer.length !== expectedBuffer.length ||
    !timingSafeEqual(signatureBuffer, expectedBuffer)
  ) {
    return null;
  }

  try {
    const payload = decode(payloadSegment);
    
    // Check if session has expired
    if (payload.expiresAt && Date.now() > payload.expiresAt) {
      return null;
    }
    
    return payload;
  } catch {
    return null;
  }
};

export const persistSession = async (payload: SessionPayload) => {
  const value = createSessionCookie(payload);
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 7 days
  });
};

export const getSessionFromCookies = async (): Promise<SessionPayload | null> => {
  const cookieStore = await cookies();
  const cookie = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  if (!cookie) {
    return null;
  }

  return verifySessionCookie(cookie);
};

export const clearSession = async () => {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
};
