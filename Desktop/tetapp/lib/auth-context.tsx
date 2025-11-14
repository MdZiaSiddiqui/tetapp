import { createContext, useContext, useEffect, useState } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { supabase } from './supabase';
import { Platform } from 'react-native';

type GoogleSigninType = typeof import('@react-native-google-signin/google-signin')['GoogleSignin'];

let GoogleSignin: GoogleSigninType | undefined;

// Lazily require the native Google Sign-In module so Expo Go/web builds do not crash.
if (Platform.OS !== 'web') {
  try {
    const googleSigninModule = require('@react-native-google-signin/google-signin');
    GoogleSignin = googleSigninModule.GoogleSignin as GoogleSigninType;
  } catch (error) {
    console.warn('⚠️ Google Sign-In native module is not available. Falling back to Supabase only auth.', error);
  }
}

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
  const [isConfigured, setIsConfigured] = useState(false);

  useEffect(() => {
    // Configure Google Sign-In
    const configureGoogleSignIn = async () => {
      try {
        const webClientId = process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID;
        const iosClientId = process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID;

        if (!webClientId) {
          console.error('⚠️ EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID is not set in .env file');
          console.error('📋 Please follow NATIVE_GOOGLE_SIGNIN_SETUP.md for setup instructions');
          return;
        }

        if (!GoogleSignin) {
          console.info('ℹ️ Skipping Google Sign-In configuration because the native module is unavailable.');
          return;
        }

        GoogleSignin.configure({
          webClientId: webClientId,
          iosClientId: iosClientId, // Optional for iOS
          offlineAccess: true,
          scopes: ['profile', 'email'],
        });

        setIsConfigured(true);
        console.log('✅ Google Sign-In configured successfully');
        console.log('📱 Platform:', Platform.OS);
        console.log('🔑 Web Client ID:', webClientId ? 'Set' : 'Missing');
        console.log('🍎 iOS Client ID:', iosClientId ? 'Set' : 'Not set (optional)');
      } catch (error) {
        console.error('❌ Error configuring Google Sign-In:', error);
      }
    };

    configureGoogleSignIn();

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
      // Sign out from Google
      if (GoogleSignin) {
        await GoogleSignin.signOut();
      }

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
      if (!isConfigured) {
        return {
          success: false,
          error: 'Google Sign-In not configured. Check your .env file and follow NATIVE_GOOGLE_SIGNIN_SETUP.md',
        };
      }

      if (!GoogleSignin) {
        return {
          success: false,
          error:
            'Google Sign-In native module is not available in this build. Please run on a native build with @react-native-google-signin configured or use Supabase OAuth via the web flow.',
        };
      }

      console.log('🚀 Starting native Google Sign-In...');
      console.log('📱 Platform:', Platform.OS);

      // Check if device has Google Play Services (Android only)
      if (Platform.OS === 'android') {
        await GoogleSignin.hasPlayServices({
          showPlayServicesUpdateDialog: true,
        });
      }

      // Sign in with Google - NATIVE UI, NO BROWSER!
      console.log('📝 Presenting native Google Sign-In UI...');
      const userInfo = await GoogleSignin.signIn();
      console.log('✅ Google Sign-In successful!');
      console.log('👤 User:', userInfo.user.email);

      // Get the ID token
      console.log('🔑 Getting ID token...');
      const tokens = await GoogleSignin.getTokens();
      const { idToken } = tokens;

      if (!idToken) {
        return {
          success: false,
          error: 'No ID token received from Google',
        };
      }

      console.log('✅ ID token received');
      console.log('🔐 Signing in to Supabase with ID token...');

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

      if (!data.session) {
        return {
          success: false,
          error: 'No session created',
        };
      }

      console.log('✅ Signed in to Supabase successfully!');
      console.log('👤 Supabase User:', data.user?.email);
      console.log('🎉 Authentication complete!');

      return { success: true };
    } catch (error: any) {
      console.error('❌ Google Sign-In error:', error);

      // Handle specific error cases
      if (error.code === 'SIGN_IN_CANCELLED') {
        return {
          success: false,
          error: 'Sign in cancelled',
        };
      }

      if (error.code === 'IN_PROGRESS') {
        return {
          success: false,
          error: 'Sign in already in progress',
        };
      }

      if (error.code === 'PLAY_SERVICES_NOT_AVAILABLE') {
        return {
          success: false,
          error: 'Google Play Services not available. Please update Google Play Services.',
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
