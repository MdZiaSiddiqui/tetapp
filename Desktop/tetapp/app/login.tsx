import { View, Text, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useAuth } from '../lib/auth-context';

export default function Login() {
  const router = useRouter();
  const { user, signInWithGoogle } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Redirect to home if already logged in
  useEffect(() => {
    if (user) {
      router.replace('/(tabs)/home');
    }
  }, [user]);

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
          router.replace({
            pathname: '/(tabs)/home',
            params: { showPaperSelector: 'true' }
          });
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

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Section */}
        <View className="px-8 pt-20 pb-12">
          {/* App Logo */}
          <View className="items-center mb-8">
            <View className="w-28 h-28 bg-blue-500 rounded-[32px] items-center justify-center shadow-lg mb-6">
              <Text className="text-white text-6xl font-bold">T</Text>
            </View>

            <Text className="text-5xl font-bold text-gray-900 text-center mb-3">
              Welcome to TET
            </Text>
            <Text className="text-gray-500 text-center text-lg leading-relaxed">
              Your ultimate companion for exam preparation and success
            </Text>
          </View>
        </View>

        {/* Features Section */}
        <View className="px-8 mb-auto">
          <View className="space-y-6">
            {/* Feature 1 */}
            <View className="flex-row items-start">
              <View className="w-12 h-12 bg-blue-50 rounded-2xl items-center justify-center mr-4">
                <Text className="text-2xl">📚</Text>
              </View>
              <View className="flex-1">
                <Text className="text-gray-900 font-semibold text-lg mb-1">
                  Comprehensive Study Material
                </Text>
                <Text className="text-gray-600 text-base leading-relaxed">
                  Access curated content across all subjects
                </Text>
              </View>
            </View>

            {/* Feature 2 */}
            <View className="flex-row items-start">
              <View className="w-12 h-12 bg-green-50 rounded-2xl items-center justify-center mr-4">
                <Text className="text-2xl">🎯</Text>
              </View>
              <View className="flex-1">
                <Text className="text-gray-900 font-semibold text-lg mb-1">
                  Practice & Test Modes
                </Text>
                <Text className="text-gray-600 text-base leading-relaxed">
                  Multiple practice modes to boost your preparation
                </Text>
              </View>
            </View>

            {/* Feature 3 */}
            <View className="flex-row items-start">
              <View className="w-12 h-12 bg-purple-50 rounded-2xl items-center justify-center mr-4">
                <Text className="text-2xl">📊</Text>
              </View>
              <View className="flex-1">
                <Text className="text-gray-900 font-semibold text-lg mb-1">
                  Track Your Progress
                </Text>
                <Text className="text-gray-600 text-base leading-relaxed">
                  Detailed analytics and performance insights
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Bottom Section - Google Sign In */}
        <View className="px-8 pb-10 pt-8">
          {/* Error Message */}
          {error && (
            <View className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-6">
              <Text className="text-red-600 text-center font-medium">{error}</Text>
            </View>
          )}

          {/* Google Sign In Button */}
          <TouchableOpacity
            onPress={handleGoogleSignIn}
            disabled={loading}
            className="bg-white border-2 border-gray-200 rounded-2xl py-5 px-6 flex-row items-center justify-center mb-4 shadow-sm active:scale-95"
            activeOpacity={0.8}
            style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 8,
              elevation: 3,
            }}
          >
            {loading ? (
              <ActivityIndicator color="#4285F4" size="small" />
            ) : (
              <>
                {/* Google Icon */}
                <View className="mr-3">
                  <Text className="text-2xl">G</Text>
                </View>
                <Text className="text-gray-900 font-semibold text-lg">
                  Continue with Google
                </Text>
              </>
            )}
          </TouchableOpacity>

          {/* Terms & Privacy */}
          <Text className="text-gray-400 text-center text-sm leading-relaxed">
            By continuing, you agree to our{'\n'}
            <Text className="text-blue-500 font-medium">Terms of Service</Text>
            {' '}and{' '}
            <Text className="text-blue-500 font-medium">Privacy Policy</Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
