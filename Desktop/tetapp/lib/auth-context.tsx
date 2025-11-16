import { createContext, useContext, useEffect, useState } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { supabase } from './supabase';
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';
import Constants from 'expo-constants';

// Configure WebBrowser for authentication
WebBrowser.maybeCompleteAuthSession();

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
      console.log('🚀 Starting In-Browser Google Sign-In...');

      // Create the OAuth URL
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: AuthSession.makeRedirectUri({
            scheme: 'tgtet',
            path: 'auth/callback',
          }),
          skipBrowserRedirect: true,
        },
      });

      if (error) {
        console.error('❌ Error creating OAuth URL:', error);
        return {
          success: false,
          error: error.message,
        };
      }

      if (!data?.url) {
        console.error('❌ No OAuth URL received');
        return {
          success: false,
          error: 'Failed to get authentication URL',
        };
      }

      console.log('🌐 Opening browser for authentication...');

      // Open the OAuth URL in the browser
      const result = await WebBrowser.openAuthSessionAsync(
        data.url,
        AuthSession.makeRedirectUri({
          scheme: 'tgtet',
          path: 'auth/callback',
        })
      );

      if (result.type === 'cancel') {
        console.log('⚠️ User cancelled sign in');
        return {
          success: false,
          error: 'Sign in cancelled',
        };
      }

      if (result.type === 'success') {
        console.log('✅ Browser authentication successful');

        // Extract the URL params
        const url = result.url;
        const params = new URLSearchParams(url.split('#')[1] || url.split('?')[1]);
        const accessToken = params.get('access_token');
        const refreshToken = params.get('refresh_token');

        if (accessToken && refreshToken) {
          // Set the session in Supabase
          const { data: sessionData, error: sessionError } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken,
          });

          if (sessionError) {
            console.error('❌ Error setting session:', sessionError);
            return {
              success: false,
              error: sessionError.message,
            };
          }

          console.log('✅ Session created successfully!');
          console.log('User:', sessionData.session?.user.email);
          return { success: true };
        }
      }

      return {
        success: false,
        error: 'Failed to complete authentication',
      };
    } catch (error: any) {
      console.error('❌ Google Sign-In error:', error);
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
