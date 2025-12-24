import { createContext, useContext, useEffect, useState } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { supabase } from './supabase';
import Constants from 'expo-constants';
import { sendOTP, verifyOTP } from './api/whatsapp-otp';
import { initiateHandshake } from './native/whatsapp-otp';

// Conditionally import Google Sign-In (only works in development/production builds, not Expo Go)
let GoogleSignin: any = null;
let isSuccessResponse: any = null;
let isErrorWithCode: any = null;
let statusCodes: any = null;
let isGoogleSignInAvailable = false;

try {
  const googleSignInModule = require('@react-native-google-signin/google-signin');
  GoogleSignin = googleSignInModule.GoogleSignin;
  isSuccessResponse = googleSignInModule.isSuccessResponse;
  isErrorWithCode = googleSignInModule.isErrorWithCode;
  statusCodes = googleSignInModule.statusCodes;

  // Configure Google Sign-In with web client ID (required for Supabase)
  GoogleSignin.configure({
    webClientId: Constants.expoConfig?.extra?.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID || process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
    offlineAccess: true,
  });
  isGoogleSignInAvailable = true;
  console.log('Google Sign-In configured successfully');
} catch (error) {
  console.log('Google Sign-In not available (running in Expo Go). Use a development build for Google Sign-In.');
  isGoogleSignInAvailable = false;
}

type AuthContextType = {
  user: User | null;
  session: Session | null;
  loading: boolean;
  isGuest: boolean;
  isGoogleSignInAvailable: boolean;
  signOut: () => Promise<void>;
  signInWithGoogle: () => Promise<{ success: boolean; error?: string }>;
  signInAsGuest: () => void;
  sendPhoneOTP: (phone: string) => Promise<{ success: boolean; error?: string }>;
  verifyPhoneOTP: (phone: string, otp: string) => Promise<{ success: boolean; isNewUser?: boolean; error?: string }>;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  loading: true,
  isGuest: false,
  isGoogleSignInAvailable: false,
  signOut: async () => {},
  signInWithGoogle: async () => ({ success: false }),
  signInAsGuest: () => {},
  sendPhoneOTP: async () => ({ success: false }),
  verifyPhoneOTP: async () => ({ success: false }),
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [isGuest, setIsGuest] = useState(false);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      console.log('Auth state changed:', event, session?.user?.email);
      setSession(session);
      setUser(session?.user ?? null);

      // If signing out, ensure loading is false so UI can redirect
      if (event === 'SIGNED_OUT') {
        setLoading(false);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const signOut = async () => {
    try {
      // Clear guest state if guest
      if (isGuest) {
        setIsGuest(false);
        console.log('Guest signed out successfully');
        return;
      }

      // Sign out from Google (only if available)
      if (isGoogleSignInAvailable && GoogleSignin) {
        try {
          await GoogleSignin.signOut();
          console.log('Signed out from Google');
        } catch (googleError) {
          // Google sign out may fail if not signed in with Google
          console.log('Google sign out skipped');
        }
      }

      // Sign out from Supabase
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Error signing out from Supabase:', error);
        throw error;
      }

      console.log('Signed out successfully');
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  };

  const signInAsGuest = () => {
    console.log('Signing in as guest...');
    setIsGuest(true);
    console.log('Guest sign in successful');
  };

  // WhatsApp OTP Methods
  const sendPhoneOTP = async (phone: string): Promise<{ success: boolean; error?: string }> => {
    try {
      console.log('Sending OTP to:', phone);

      // Initiate WhatsApp handshake for zero-tap (Android only)
      initiateHandshake();

      // Send OTP via edge function
      const result = await sendOTP(phone);

      if (result.success) {
        console.log('OTP sent successfully');
        return { success: true };
      } else {
        console.error('Failed to send OTP:', result.error);
        return { success: false, error: result.error };
      }
    } catch (error: any) {
      console.error('Send OTP error:', error);
      return { success: false, error: error.message || 'Failed to send OTP' };
    }
  };

  const verifyPhoneOTP = async (
    phone: string,
    otp: string
  ): Promise<{ success: boolean; isNewUser?: boolean; error?: string }> => {
    try {
      console.log('Verifying OTP for:', phone);

      // Verify OTP via edge function
      const result = await verifyOTP(phone, otp);

      if (result.success) {
        console.log('OTP verified successfully, isNewUser:', result.is_new_user);

        // Use the magic link token to establish a session
        if (result.token_hash) {
          console.log('Using magic link token to establish session...');

          const { data: sessionData, error: sessionError } = await supabase.auth.verifyOtp({
            token_hash: result.token_hash,
            type: 'magiclink',
          });

          if (sessionError) {
            console.error('Failed to establish session:', sessionError);
            return {
              success: false,
              error: 'Failed to establish session. Please try again.',
            };
          }

          if (sessionData.session) {
            console.log('Session established successfully for user:', sessionData.session.user?.email);
            setSession(sessionData.session);
            setUser(sessionData.session.user);
          } else {
            console.warn('No session in verifyOtp response');
          }
        } else {
          console.warn('No token_hash in OTP verification response, trying getSession fallback...');
          // Fallback: try to get existing session (may not work)
          const { data: { session: newSession } } = await supabase.auth.getSession();
          if (newSession) {
            setSession(newSession);
            setUser(newSession.user);
          }
        }

        return {
          success: true,
          isNewUser: result.is_new_user,
        };
      } else {
        console.error('Failed to verify OTP:', result.error);
        return {
          success: false,
          error: result.error,
        };
      }
    } catch (error: any) {
      console.error('Verify OTP error:', error);
      return { success: false, error: error.message || 'Failed to verify OTP' };
    }
  };

  const signInWithGoogle = async (): Promise<{ success: boolean; error?: string }> => {
    try {
      // Check if Google Sign-In is available (not available in Expo Go)
      if (!isGoogleSignInAvailable || !GoogleSignin) {
        console.log('Google Sign-In not available');
        return {
          success: false,
          error: 'Google Sign-In is not available in Expo Go. Please use a development build or sign in as guest.',
        };
      }

      console.log('Starting native Google Sign-In...');

      // Check if play services are available (Android only)
      await GoogleSignin.hasPlayServices();

      // Perform native Google Sign-In
      const response = await GoogleSignin.signIn();

      if (isSuccessResponse(response)) {
        const { idToken } = response.data;

        if (!idToken) {
          console.error('No ID token received from Google');
          return {
            success: false,
            error: 'No ID token received from Google. Please try again.',
          };
        }

        console.log('Got Google ID token, authenticating with Supabase...');

        // Sign in to Supabase with the Google ID token
        const { data, error } = await supabase.auth.signInWithIdToken({
          provider: 'google',
          token: idToken,
        });

        if (error) {
          console.error('Supabase auth error:', error);
          return {
            success: false,
            error: error.message,
          };
        }

        if (data.session) {
          console.log('Successfully signed in:', data.session.user.email);
          return { success: true };
        }

        return {
          success: false,
          error: 'Failed to create session. Please try again.',
        };
      }

      // User cancelled the sign-in
      return {
        success: false,
        error: 'Sign in cancelled',
      };
    } catch (error: any) {
      console.error('Google Sign-In error:', error);

      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.SIGN_IN_CANCELLED:
            return {
              success: false,
              error: 'Sign in cancelled',
            };
          case statusCodes.IN_PROGRESS:
            return {
              success: false,
              error: 'Sign in already in progress',
            };
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            return {
              success: false,
              error: 'Google Play Services not available. Please install or update Google Play Services.',
            };
          default:
            return {
              success: false,
              error: error.message || 'An error occurred during sign in',
            };
        }
      }

      return {
        success: false,
        error: error.message || 'Failed to sign in with Google',
      };
    }
  };

  return (
    <AuthContext.Provider value={{ user, session, loading, isGuest, isGoogleSignInAvailable, signOut, signInWithGoogle, signInAsGuest, sendPhoneOTP, verifyPhoneOTP }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
