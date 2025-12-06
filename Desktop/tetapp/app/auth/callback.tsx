import { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { supabase } from '../../lib/supabase';

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      // Check if there's an existing session
      const { data: { session } } = await supabase.auth.getSession();

      if (session) {
        // User is authenticated, redirect to home
        router.replace('/(tabs)/home');
      } else {
        // No session, redirect to login or home
        router.replace('/(tabs)/home');
      }
    };

    checkSession();
  }, []);

  return (
    <View className="flex-1 bg-white items-center justify-center">
      <ActivityIndicator size="large" color="#3b82f6" />
      <Text className="mt-4 text-gray-600">Completing sign in...</Text>
    </View>
  );
}
