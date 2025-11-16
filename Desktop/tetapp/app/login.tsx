import { View, Text, TouchableOpacity, ActivityIndicator, ScrollView, Image } from 'react-native';
import { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../lib/auth-context';
import GoogleLogo from '../components/GoogleLogo';

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
    <LinearGradient
      colors={['#faf5ff', '#f3e8ff', '#ede9fe']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      className="flex-1"
    >
      <StatusBar style="dark" />

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Section */}
        <View className="px-8 pt-20 pb-12">
          {/* App Logo */}
          <View className="items-center mb-12">
            <Image
              source={require('../Supacharge Logo.webp')}
              style={{ width: 160, height: 160 }}
              resizeMode="contain"
            />
          </View>

          {/* Complete Solution */}
          <View className="mb-8">
            <Text className="text-3xl font-bold text-gray-900 text-center mb-8">
              Complete Solution for
            </Text>

            {/* Paper 1 */}
            <View className="flex-row items-center mb-4">
              <Ionicons name="checkmark-circle" size={24} color="#9333ea" />
              <Text className="text-lg text-gray-800 ml-3 font-medium">
                TS-TET Paper-1
              </Text>
            </View>

            {/* Paper 2 Math & Science */}
            <View className="flex-row items-center mb-4">
              <Ionicons name="checkmark-circle" size={24} color="#9333ea" />
              <Text className="text-lg text-gray-800 ml-3 font-medium">
                TS-TET Paper-2 Maths & Science
              </Text>
            </View>

            {/* Paper 2 Social Studies */}
            <View className="flex-row items-center mb-6">
              <Ionicons name="checkmark-circle" size={24} color="#9333ea" />
              <Text className="text-lg text-gray-800 ml-3 font-medium">
                TS-TET Paper-2 Social Studies
              </Text>
            </View>

            {/* Languages */}
            <Text className="text-xl text-gray-800 text-center font-bold">
              English, తెలుగు, اردو & हिन्दी
            </Text>
          </View>
        </View>

        {/* Spacer */}
        <View className="flex-1" />

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
            className="bg-white rounded-full py-5 px-6 flex-row items-center justify-center mb-4 active:scale-95"
            activeOpacity={0.9}
            style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.12,
              shadowRadius: 12,
              elevation: 4,
            }}
          >
            {loading ? (
              <ActivityIndicator color="#4285F4" size="small" />
            ) : (
              <>
                {/* Google Icon */}
                <View className="mr-3">
                  <GoogleLogo size={24} />
                </View>
                <Text className="text-gray-900 font-semibold text-lg">
                  Continue with Google
                </Text>
              </>
            )}
          </TouchableOpacity>

          {/* Terms & Privacy */}
          <View className="items-center">
            <Text className="text-gray-400 text-center text-sm mb-1">
              By continuing, you agree to our
            </Text>
            <View className="flex-row items-center justify-center">
              <TouchableOpacity
                onPress={() => router.push('/legal/terms')}
                activeOpacity={0.7}
              >
                <Text className="text-purple-600 font-medium text-sm">
                  Terms of Service
                </Text>
              </TouchableOpacity>
              <Text className="text-gray-400 text-sm"> and </Text>
              <TouchableOpacity
                onPress={() => router.push('/legal/privacy')}
                activeOpacity={0.7}
              >
                <Text className="text-purple-600 font-medium text-sm">
                  Privacy Policy
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
