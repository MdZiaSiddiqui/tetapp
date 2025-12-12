import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { useAuth } from '../../lib/auth-context';
import { supabase } from '../../lib/supabase';

export default function PhoneOnboarding() {
  const router = useRouter();
  const { user } = useAuth();
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validatePhone = (phoneNumber: string): boolean => {
    // Remove any non-digit characters
    const digitsOnly = phoneNumber.replace(/\D/g, '');
    // Must be exactly 10 digits for Indian phone numbers
    return digitsOnly.length === 10;
  };

  const handlePhoneChange = (text: string) => {
    // Only allow digits
    const digitsOnly = text.replace(/\D/g, '');
    // Limit to 10 digits
    setPhone(digitsOnly.slice(0, 10));
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const handleContinue = async () => {
    if (!validatePhone(phone)) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }

    if (!user?.id) {
      setError('User not authenticated. Please try again.');
      return;
    }

    try {
      setLoading(true);
      setError(null);

      // Save phone number to Supabase user_profiles table
      const { error: updateError } = await supabase
        .from('user_profiles')
        .update({ phone: `+91${phone}` })
        .eq('id', user.id);

      if (updateError) {
        console.error('Error saving phone:', updateError);
        setError(`Failed to save: ${updateError.message}`);
        return;
      }

      console.log('Phone number saved successfully');

      // Navigate to home
      router.replace({
        pathname: '/(tabs)/home',
        params: { showPaperSelector: 'true' }
      });
    } catch (err: any) {
      console.error('Error saving phone:', err);
      setError(err.message || 'Something went wrong. Please try again.');
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

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <View className="flex-1 px-8 justify-center">
          {/* Logo */}
          <View className="items-center mb-8">
            <Image
              source={require('../../Supacharge Logo.webp')}
              style={{ width: 100, height: 100 }}
              resizeMode="contain"
            />
          </View>

          {/* Title */}
          <View className="mb-8">
            <Text className="text-2xl font-bold text-gray-900 text-center mb-2">
              What's your phone number?
            </Text>
            <Text className="text-gray-500 text-center">
              We'll use this to keep you updated about your exam preparation
            </Text>
          </View>

          {/* Phone Input */}
          <View className="mb-6">
            <View
              className="bg-white rounded-2xl flex-row items-center overflow-hidden"
              style={{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.08,
                shadowRadius: 8,
                elevation: 2,
              }}
            >
              {/* Country Code */}
              <View className="bg-gray-50 px-4 py-4 border-r border-gray-200">
                <Text className="text-gray-700 font-semibold text-lg">+91</Text>
              </View>

              {/* Phone Input */}
              <TextInput
                className="flex-1 px-4 py-4 text-lg text-gray-900"
                placeholder="Enter phone number"
                placeholderTextColor="#9CA3AF"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={handlePhoneChange}
                maxLength={10}
                autoFocus
              />
            </View>

            {/* Error Message */}
            {error && (
              <View className="mt-3 bg-red-50 border border-red-200 rounded-xl p-3">
                <Text className="text-red-600 text-center text-sm">{error}</Text>
              </View>
            )}
          </View>

          {/* Continue Button */}
          <TouchableOpacity
            onPress={handleContinue}
            disabled={loading || phone.length !== 10}
            className={`rounded-full py-5 px-6 items-center justify-center ${
              phone.length === 10 ? 'bg-gray-900' : 'bg-gray-300'
            }`}
            activeOpacity={0.8}
            style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.12,
              shadowRadius: 12,
              elevation: 4,
            }}
          >
            {loading ? (
              <ActivityIndicator color="white" size="small" />
            ) : (
              <Text className={`font-semibold text-lg ${
                phone.length === 10 ? 'text-white' : 'text-gray-500'
              }`}>
                Continue
              </Text>
            )}
          </TouchableOpacity>

          {/* Helper Text */}
          <View className="mt-6 items-center">
            <Text className="text-gray-400 text-sm text-center">
              Your phone number will be stored securely and used only for important updates
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}
