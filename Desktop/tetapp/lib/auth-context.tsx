import { createContext, useContext, useEffect, useState } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { supabase } from './supabase';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri } from 'expo-auth-session';

// Complete the web browser session when auth is done
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
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
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
      console.log('🚀 Starting browser-based Google Sign-In...');

      // Create a redirect URI for the app
      const redirectTo = makeRedirectUri({
        scheme: 'tetapp',
        path: 'auth/callback',
      });

      console.log('🔗 Redirect URI:', redirectTo);

      // Sign in with Google using Supabase's OAuth (opens browser)
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo,
          skipBrowserRedirect: false,
        },
      });

      if (error) {
        console.error('❌ OAuth error:', error);
        return {
          success: false,
          error: error.message,
        };
      }

      if (!data.url) {
        return {
          success: false,
          error: 'No OAuth URL generated',
        };
      }

      console.log('🌐 Opening browser for authentication...');
      console.log('OAuth URL:', data.url);

      // Open the OAuth URL in the browser
      const result = await WebBrowser.openAuthSessionAsync(
        data.url,
        redirectTo
      );

      console.log('Browser result type:', result.type);

      if (result.type === 'success' && result.url) {
        console.log('✅ Browser returned with URL:', result.url);

        // Extract tokens from the URL
        const url = result.url;
        let access_token: string | null = null;
        let refresh_token: string | null = null;

        // Check for hash fragment (#access_token=...)
        if (url.includes('#')) {
          const hashPart = url.split('#')[1];
          const hashParams = new URLSearchParams(hashPart);
          access_token = hashParams.get('access_token');
          refresh_token = hashParams.get('refresh_token');
        }

        // Check for query params (?access_token=...)
        if (!access_token && url.includes('?')) {
          const queryPart = url.split('?')[1]?.split('#')[0];
          const queryParams = new URLSearchParams(queryPart);
          access_token = queryParams.get('access_token');
          refresh_token = queryParams.get('refresh_token');
        }

        console.log('Access token found:', !!access_token);
        console.log('Refresh token found:', !!refresh_token);

        if (access_token && refresh_token) {
          // Set the session with the tokens
          const { data: sessionData, error: sessionError } = await supabase.auth.setSession({
            access_token,
            refresh_token,
          });

          if (sessionError) {
            console.error('❌ Error setting session:', sessionError);
            return {
              success: false,
              error: sessionError.message,
            };
          }

          if (sessionData.session) {
            console.log('✅ Session created successfully!');
            console.log('User:', sessionData.session.user.email);
            return { success: true };
          }
        }

        console.error('❌ No tokens found in callback URL');
        return {
          success: false,
          error: 'Authentication failed - no tokens received',
        };
      } else if (result.type === 'cancel') {
        console.log('⚠️ User cancelled sign in');
        return {
          success: false,
          error: 'Sign in cancelled',
        };
      } else {
        console.error('❌ Unexpected browser result:', result);
        return {
          success: false,
          error: 'Authentication failed',
        };
      }
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
