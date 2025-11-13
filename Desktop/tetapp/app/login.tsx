import { View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useAuth } from '../lib/auth-context';

export default function Login() {
  const router = useRouter();
  const { user, signInWithGoogle } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Redirect to home if already logged in
  if (user) {
    router.replace('/(tabs)/home');
    return null;
  }

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      setError(null);

      console.log('Starting Google sign in from login screen...');
      const result = await signInWithGoogle();

      console.log('Sign in result:', result);

      if (result.success) {
        console.log('✅ Sign in successful, navigating to home...');
        // Use setTimeout to ensure session is fully propagated
        setTimeout(() => {
          router.replace('/(tabs)/home');
        }, 500);
      } else if (result.error) {
        console.error('Sign in failed:', result.error);
        setError(result.error);
      }
    } catch (err: any) {
      console.error('Google sign in error:', err);
      setError(err.message || 'Failed to sign in with Google');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />

      {/* Header */}
      <View className="flex-1 justify-center items-center px-8">
        <View className="items-center mb-12">
          {/* App Logo/Icon - You can replace this with your actual logo */}
          <View className="w-24 h-24 bg-blue-500 rounded-3xl items-center justify-center mb-6">
            <Text className="text-white text-5xl font-bold">T</Text>
          </View>

          <Text className="text-4xl font-bold text-gray-800 mb-2">
            Welcome to TET
          </Text>
          <Text className="text-gray-600 text-center text-lg">
            Your ultimate exam preparation companion
          </Text>
        </View>

        {/* Error Message */}
        {error && (
          <View className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 w-full">
            <Text className="text-red-600 text-center">{error}</Text>
          </View>
        )}

        {/* Google Sign In Button */}
        <TouchableOpacity
          onPress={handleGoogleSignIn}
          disabled={loading}
          className="bg-white border-2 border-gray-300 rounded-xl py-4 px-6 flex-row items-center justify-center w-full mb-4 shadow-sm"
          activeOpacity={0.7}
        >
          {loading ? (
            <ActivityIndicator color="#4285F4" />
          ) : (
            <>
              {/* Google Icon */}
              <View className="mr-3">
                <Text className="text-2xl">🔍</Text>
              </View>
              <Text className="text-gray-800 font-semibold text-lg">
                Continue with Google
              </Text>
            </>
          )}
        </TouchableOpacity>

        {/* Skip Sign In (Guest Mode) - Optional */}
        <TouchableOpacity
          onPress={() => router.replace('/(tabs)/home')}
          disabled={loading}
          className="py-3"
        >
          <Text className="text-gray-500 text-base">
            Continue as Guest
          </Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View className="px-8 pb-8">
        <Text className="text-gray-400 text-center text-sm">
          By continuing, you agree to our{' '}
          <Text className="text-blue-500">Terms of Service</Text> and{' '}
          <Text className="text-blue-500">Privacy Policy</Text>
        </Text>
      </View>
    </View>
  );
}
