import { useEffect } from 'react';
import { View, Text, ActivityIndicator, Platform, Linking } from 'react-native';
import { useRouter, useLocalSearchParams, useGlobalSearchParams } from 'expo-router';
import { supabase } from '../../lib/supabase';
import * as WebBrowser from 'expo-web-browser';

export default function AuthCallback() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const globalParams = useGlobalSearchParams();

  useEffect(() => {
    // Handle the OAuth callback
    const handleCallback = async () => {
      try {
        console.log('=== Auth Callback Page Loaded ===');
        console.log('Platform:', Platform.OS);
        console.log('Route params:', params);
        console.log('Global params:', globalParams);

        let access_token: string | null = null;
        let refresh_token: string | null = null;

        if (Platform.OS === 'web') {
          // On web, get from URL hash
          const hash = window.location.hash;
          if (hash) {
            const hashParams = new URLSearchParams(hash.substring(1));
            access_token = hashParams.get('access_token');
            refresh_token = hashParams.get('refresh_token');
          }
        } else {
          // On mobile with deep links, check multiple sources for tokens

          // 1. Try route params first
          access_token = params.access_token as string || null;
          refresh_token = params.refresh_token as string || null;

          // 2. If not in route params, try getting from the initial URL
          if (!access_token) {
            try {
              const initialUrl = await Linking.getInitialURL();
              console.log('Initial deep link URL:', initialUrl);

              if (initialUrl) {
                // Parse hash fragment (#access_token=...)
                if (initialUrl.includes('#')) {
                  const hashPart = initialUrl.split('#')[1];
                  const hashParams = new URLSearchParams(hashPart);
                  access_token = hashParams.get('access_token');
                  refresh_token = hashParams.get('refresh_token');
                }

                // Parse query params (?access_token=...)
                if (!access_token && initialUrl.includes('?')) {
                  const queryPart = initialUrl.split('?')[1];
                  const queryParams = new URLSearchParams(queryPart);
                  access_token = queryParams.get('access_token');
                  refresh_token = queryParams.get('refresh_token');
                }
              }
            } catch (error) {
              console.error('Error getting initial URL:', error);
            }
          }

          // 3. Check global search params as fallback
          if (!access_token) {
            access_token = globalParams.access_token as string || null;
            refresh_token = globalParams.refresh_token as string || null;
          }
        }

        console.log('Callback - Access token found:', !!access_token);
        console.log('Callback - Refresh token found:', !!refresh_token);

        if (access_token) {
          // Set the session
          const { data, error } = await supabase.auth.setSession({
            access_token,
            refresh_token: refresh_token || '',
          });

          if (error) {
            console.error('Error setting session:', error);
            if (Platform.OS !== 'web') {
              WebBrowser.dismissBrowser();
            }
            router.replace('/login');
            return;
          }

          if (data.session) {
            console.log('✅ Session set successfully in callback!');
            console.log('User:', data.session.user.email);

            // Close the WebBrowser window first
            if (Platform.OS !== 'web') {
              WebBrowser.dismissBrowser();
            }

            // Small delay to ensure browser closes, then redirect
            setTimeout(() => {
              router.replace('/(tabs)/home');
            }, 100);
            return;
          }
        }

        // If no tokens or error, redirect to login
        console.error('No tokens found in callback URL');
        if (Platform.OS !== 'web') {
          WebBrowser.dismissBrowser();
        }
        router.replace('/login');
      } catch (error) {
        console.error('Error in auth callback:', error);
        if (Platform.OS !== 'web') {
          WebBrowser.dismissBrowser();
        }
        router.replace('/login');
      }
    };

    handleCallback();
  }, [params, globalParams]);

  return (
    <View className="flex-1 bg-white items-center justify-center">
      <ActivityIndicator size="large" color="#3b82f6" />
      <Text className="mt-4 text-gray-600">Completing sign in...</Text>
    </View>
  );
}
