import { createContext, useContext, useEffect, useState } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { supabase } from './supabase';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Constants from 'expo-constants';

// Configure Google Sign-In
GoogleSignin.configure({
  webClientId: Constants.expoConfig?.extra?.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID || process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
  scopes: ['profile', 'email'],
  offlineAccess: true,
});

type AuthContextType = {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signOut: () => Promise<void>;
  signInWithGoogle: () => Promise<{ success: boolean; error?: string }>;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  loading: true,
  signOut: async () => {},
  signInWithGoogle: async () => ({ success: false }),
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

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

    return () => subscription.unsubscribe();
  }, []);

  const signOut = async () => {
    try {
      // Sign out from Supabase
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Error signing out from Supabase:', error);
        throw error;
      }

      console.log('✅ Signed out successfully');
    } catch (error) {
      console.error('❌ Error signing out:', error);
      throw error;
    }
  };

  const signInWithGoogle = async (): Promise<{ success: boolean; error?: string }> => {
    try {
      console.log('🚀 Starting Native Google Sign-In...');

      // Check if Google Play services are available (Android)
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

      // Sign in with Google - shows native bottom sheet popup
      const userInfo = await GoogleSignin.signIn();
      console.log('✅ Google Sign-In successful:', userInfo.data?.user.email);

      // Get the ID token from Google
      const idToken = userInfo.data?.idToken;
      if (!idToken) {
        console.error('❌ No ID token received from Google');
        return {
          success: false,
          error: 'No ID token received from Google',
        };
      }

      console.log('🔑 Got ID token, signing in to Supabase...');

      // Sign in to Supabase using the Google ID token
      const { data, error } = await supabase.auth.signInWithIdToken({
        provider: 'google',
        token: idToken,
      });

      if (error) {
        console.error('❌ Supabase sign-in error:', error);
        return {
          success: false,
          error: error.message,
        };
      }

      if (data.session) {
        console.log('✅ Supabase session created successfully!');
        console.log('User:', data.session.user.email);
        return { success: true };
      }

      return {
        success: false,
        error: 'Failed to create session',
      };
    } catch (error: any) {
      console.error('❌ Google Sign-In error:', error);

      // Handle user cancellation
      if (error.code === 'SIGN_IN_CANCELLED') {
        console.log('⚠️ User cancelled sign in');
        return {
          success: false,
          error: 'Sign in cancelled',
        };
      }

      return {
        success: false,
        error: error.message || 'Failed to sign in with Google',
      };
    }
  };

  return (
    <AuthContext.Provider value={{ user, session, loading, signOut, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
