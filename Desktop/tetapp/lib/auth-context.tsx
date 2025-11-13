import { createContext, useContext, useEffect, useState } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { supabase } from './supabase';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';
import { Platform } from 'react-native';

// This is required for the WebBrowser to work properly
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
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  };

  const signInWithGoogle = async (): Promise<{ success: boolean; error?: string }> => {
    try {
      // Get the redirect URL based on platform
      let redirectUrl: string;

      if (Platform.OS === 'web') {
        // On web, use localhost
        redirectUrl = `${window.location.origin}/auth/callback`;
      } else {
        // For mobile (Expo Go and standalone apps) - use deep link
        const scheme = Constants.expoConfig?.scheme || 'tgtet';
        redirectUrl = `${scheme}://auth/callback`;
        console.log('📱 Mobile redirect URL (deep link):', redirectUrl);
      }

      console.log('🔐 Starting OAuth with redirect:', redirectUrl);

      const { data, error: signInError } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: redirectUrl,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      });

      if (signInError) {
        console.error('Sign in error:', signInError);
        return { success: false, error: signInError.message };
      }

      if (!data?.url) {
        return { success: false, error: 'No OAuth URL received' };
      }

      console.log('🌐 Opening browser for OAuth...');

      // Create a promise that resolves when auth state changes
      const authStatePromise = new Promise<{ success: boolean; error?: string }>((resolve) => {
        const timeout = setTimeout(() => {
          console.log('⏱️ Auth state change timeout');
          resolve({ success: false, error: 'Authentication timeout' });
        }, 30000); // 30 second timeout

        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
          console.log('🔄 Auth state change:', event, 'Session:', !!session);

          if (event === 'SIGNED_IN' && session) {
            console.log('✅ Auth state: User signed in!');
            clearTimeout(timeout);
            subscription.unsubscribe();
            resolve({ success: true });
          } else if (event === 'SIGNED_OUT') {
            console.log('⚠️ Auth state: User signed out');
            clearTimeout(timeout);
            subscription.unsubscribe();
            resolve({ success: false, error: 'Sign in failed' });
          }
        });
      });

      // Open the browser for OAuth
      const browserPromise = WebBrowser.openAuthSessionAsync(
        data.url,
        redirectUrl,
        {
          showInRecents: false,
        }
      ).then((result) => {
        console.log('=== Browser Result ===');
        console.log('Type:', result.type);
        if (result.type === 'success') {
          console.log('URL:', result.url);
        }
        console.log('=====================');

        // On mobile, even if browser is dismissed, the callback might have succeeded
        if (result.type === 'success' && result.url) {
          console.log('✅ Got redirect URL:', result.url);

          // Extract tokens from the redirect URL
          const url = result.url;
          let access_token: string | null = null;
          let refresh_token: string | null = null;

          // Check for hash params (#access_token=...)
          if (url.includes('#')) {
            const hashPart = url.split('#')[1];
            const hashParams = new URLSearchParams(hashPart);
            access_token = hashParams.get('access_token');
            refresh_token = hashParams.get('refresh_token');
          }

          // Check for query params (?access_token=...)
          if (!access_token && url.includes('?')) {
            const queryPart = url.split('?')[1];
            const queryParams = new URLSearchParams(queryPart);
            access_token = queryParams.get('access_token');
            refresh_token = queryParams.get('refresh_token');
          }

          console.log('Access token found:', !!access_token);
          console.log('Refresh token found:', !!refresh_token);

          if (access_token) {
            // Set the session directly here
            console.log('Setting session with tokens...');
            return supabase.auth.setSession({
              access_token,
              refresh_token: refresh_token || '',
            }).then(({ data: sessionData, error: sessionError }) => {
              if (sessionError) {
                console.error('Session error:', sessionError);
                return { success: false, error: sessionError.message };
              }

              if (sessionData.session) {
                console.log('🎉 Session set successfully!');
                return { success: true };
              }

              return { success: false, error: 'Failed to create session' };
            });
          }

          // Check for error in redirect
          const errorParam = url.includes('?')
            ? new URLSearchParams(url.split('?')[1]).get('error')
            : null;

          if (errorParam) {
            console.error('OAuth error:', errorParam);
            return { success: false, error: errorParam };
          }

          return { success: false, error: 'No access token in redirect URL' };
        }

        if (result.type === 'cancel' || result.type === 'dismiss') {
          console.log('🚪 Browser dismissed or cancelled');
          // Don't fail immediately - the callback might have succeeded
          return null;
        }

        console.error('Unexpected browser result:', result);
        return null;
      });

      // Race between browser result and auth state change
      const browserResult = await browserPromise;

      if (browserResult && browserResult.success) {
        console.log('✅ Browser flow completed successfully');
        return browserResult;
      }

      if (browserResult && browserResult.error) {
        console.log('❌ Browser flow failed with error:', browserResult.error);
        return browserResult;
      }

      // Browser was dismissed/cancelled - wait for auth state change
      console.log('⏳ Waiting for auth state change...');
      const authResult = await authStatePromise;
      return authResult;
    } catch (err: any) {
      console.error('Google sign in error:', err);
      return {
        success: false,
        error: err.message || 'Failed to sign in with Google'
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
