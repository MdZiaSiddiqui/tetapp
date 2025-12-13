import { View, Text, TouchableOpacity, ActivityIndicator, ScrollView, Image, TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../lib/auth-context';
import { supabase } from '../lib/supabase';
import GoogleLogo from '../components/GoogleLogo';
import OTPInput from '../components/auth/OTPInput';
import { subscribeToOtp, unsubscribeFromOtp, OtpSubscription } from '../lib/native/whatsapp-otp';
import { isValidIndianPhone, extractPhoneNumber, formatPhoneDisplay } from '../lib/api/whatsapp-otp';

type LoginStep = 'phone' | 'otp';

export default function Login() {
  const router = useRouter();
  const { user, isGuest, signInWithGoogle, signInAsGuest, sendPhoneOTP, verifyPhoneOTP } = useAuth();

  // UI state
  const [step, setStep] = useState<LoginStep>('phone');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Phone input state
  const [phoneNumber, setPhoneNumber] = useState('');

  // OTP input state
  const [otp, setOtp] = useState('');
  const [resendTimer, setResendTimer] = useState(0);

  // OTP subscription ref
  const [otpSubscription, setOtpSubscription] = useState<OtpSubscription>(null);

  // Redirect to appropriate screen if already logged in or guest
  useEffect(() => {
    const checkUserAndRedirect = async () => {
      if (isGuest) {
        router.replace('/(tabs)/home');
        return;
      }

      if (user) {
        try {
          // Check if user has phone number
          const { data: userData, error } = await supabase
            .from('user_profiles')
            .select('phone')
            .eq('id', user.id)
            .single();

          if (error) {
            console.log('Error checking phone:', error);
            router.replace('/(tabs)/home');
            return;
          }

          // If no phone, go to onboarding
          if (!userData?.phone) {
            router.replace('/onboarding/phone');
            return;
          }

          // Has phone, go to home
          router.replace('/(tabs)/home');
        } catch (err) {
          console.error('Error in checkUserAndRedirect:', err);
          router.replace('/(tabs)/home');
        }
      }
    };

    checkUserAndRedirect();
  }, [user, isGuest]);

  // Subscribe to WhatsApp OTP auto-fill when on OTP step
  useEffect(() => {
    if (step === 'otp') {
      const subscription = subscribeToOtp((receivedOtp) => {
        console.log('Auto-received OTP:', receivedOtp);
        setOtp(receivedOtp);
        // Auto-verify after receiving OTP
        handleVerifyOTP(receivedOtp);
      });
      setOtpSubscription(subscription);
    }

    return () => {
      if (otpSubscription) {
        unsubscribeFromOtp(otpSubscription);
        setOtpSubscription(null);
      }
    };
  }, [step]);

  // Resend timer countdown
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [resendTimer]);

  // Handle phone number input
  const handlePhoneChange = (text: string) => {
    // Only allow digits
    const cleaned = text.replace(/\D/g, '');
    // Format for display
    let formatted = cleaned;
    if (cleaned.length > 5) {
      formatted = `${cleaned.slice(0, 5)} ${cleaned.slice(5, 10)}`;
    }
    setPhoneNumber(formatted);
    setError(null);
  };

  // Send OTP
  const handleSendOTP = async () => {
    const cleanPhone = extractPhoneNumber(phoneNumber);

    if (!isValidIndianPhone(cleanPhone)) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const result = await sendPhoneOTP(cleanPhone);

      if (result.success) {
        setStep('otp');
        setResendTimer(30); // 30 second cooldown
      } else {
        setError(result.error || 'Failed to send OTP. Please try again.');
      }
    } catch (err: any) {
      setError(err.message || 'Failed to send OTP');
    } finally {
      setLoading(false);
    }
  };

  // Verify OTP
  const handleVerifyOTP = async (otpValue?: string) => {
    const otpToVerify = otpValue || otp;

    if (otpToVerify.length !== 4) {
      setError('Please enter the 4-digit OTP');
      return;
    }

    const cleanPhone = extractPhoneNumber(phoneNumber);

    try {
      setLoading(true);
      setError(null);

      const result = await verifyPhoneOTP(cleanPhone, otpToVerify);

      if (result.success) {
        console.log('Login successful, isNewUser:', result.isNewUser);
        // Navigation will happen via useEffect watching user state
        router.replace({
          pathname: '/(tabs)/home',
          params: { showPaperSelector: 'true' },
        });
      } else {
        setError(result.error || 'Invalid OTP. Please try again.');
      }
    } catch (err: any) {
      setError(err.message || 'Failed to verify OTP');
    } finally {
      setLoading(false);
    }
  };

  // Resend OTP
  const handleResendOTP = async () => {
    if (resendTimer > 0) return;

    const cleanPhone = extractPhoneNumber(phoneNumber);

    try {
      setLoading(true);
      setError(null);

      const result = await sendPhoneOTP(cleanPhone);

      if (result.success) {
        setResendTimer(30);
        setOtp('');
      } else {
        setError(result.error || 'Failed to resend OTP');
      }
    } catch (err: any) {
      setError(err.message || 'Failed to resend OTP');
    } finally {
      setLoading(false);
    }
  };

  // Go back to phone step
  const handleBackToPhone = () => {
    setStep('phone');
    setOtp('');
    setError(null);
  };

  // Google Sign In
  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      setError(null);

      console.log('Starting Google sign in from login screen...');
      const result = await signInWithGoogle();

      console.log('Sign in result:', result);

      if (result.success) {
        console.log('Sign in successful, checking phone number...');
        setTimeout(async () => {
          try {
            const { data: { session } } = await supabase.auth.getSession();

            if (session?.user?.id) {
              const { data: userData, error: userError } = await supabase
                .from('user_profiles')
                .select('phone')
                .eq('id', session.user.id)
                .single();

              if (userError) {
                console.log('Error fetching user data:', userError);
              }

              if (!userData?.phone) {
                console.log('No phone number found, redirecting to onboarding...');
                router.replace('/onboarding/phone');
                return;
              }
            }

            console.log('Phone number exists, navigating to home...');
            router.replace({
              pathname: '/(tabs)/home',
              params: { showPaperSelector: 'true' },
            });
          } catch (err) {
            console.error('Error checking phone:', err);
            router.replace({
              pathname: '/(tabs)/home',
              params: { showPaperSelector: 'true' },
            });
          }
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
        keyboardShouldPersistTaps="handled"
      >
        {/* Hero Section */}
        <View className="px-8 pt-16 pb-8">
          {/* App Logo */}
          <View className="items-center mb-8">
            <Image
              source={require('../Supacharge Logo.webp')}
              style={{ width: 120, height: 120 }}
              resizeMode="contain"
            />
          </View>

          {/* Complete Solution */}
          <View className="mb-6">
            <Text className="text-2xl font-bold text-gray-900 text-center mb-6">
              Complete Solution for
            </Text>

            {/* Paper 1 */}
            <View className="flex-row items-center mb-3">
              <Ionicons name="checkmark-circle" size={22} color="#9333ea" />
              <Text className="text-base text-gray-800 ml-3 font-medium">
                TS-TET Paper-1
              </Text>
            </View>

            {/* Paper 2 Math & Science */}
            <View className="flex-row items-center mb-3">
              <Ionicons name="checkmark-circle" size={22} color="#9333ea" />
              <Text className="text-base text-gray-800 ml-3 font-medium">
                TS-TET Paper-2 Maths & Science
              </Text>
            </View>

            {/* Paper 2 Social Studies */}
            <View className="flex-row items-center mb-4">
              <Ionicons name="checkmark-circle" size={22} color="#9333ea" />
              <Text className="text-base text-gray-800 ml-3 font-medium">
                TS-TET Paper-2 Social Studies
              </Text>
            </View>

            {/* Languages */}
            <Text className="text-lg text-gray-800 text-center font-bold">
              English, తెలుగు, اردو & हिन्दी
            </Text>
          </View>
        </View>

        {/* Spacer */}
        <View className="flex-1" />

        {/* Login Section */}
        <View className="px-8 pb-8 pt-4">
          {/* Error Message */}
          {error && (
            <View className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-4">
              <Text className="text-red-600 text-center font-medium">{error}</Text>
            </View>
          )}

          {step === 'phone' ? (
            <>
              {/* Phone Input Section */}
              <View className="mb-4">
                <Text className="text-gray-700 font-semibold mb-2 text-base">
                  Enter your mobile number
                </Text>
                <View className="flex-row items-center bg-white rounded-2xl border-2 border-gray-200 overflow-hidden">
                  <View className="px-4 py-4 border-r-2 border-gray-200 bg-gray-50">
                    <Text className="text-gray-800 font-semibold text-base">+91</Text>
                  </View>
                  <TextInput
                    className="flex-1 px-4 py-4 text-gray-800 text-base font-medium"
                    placeholder="98765 43210"
                    placeholderTextColor="#9CA3AF"
                    value={phoneNumber}
                    onChangeText={handlePhoneChange}
                    keyboardType="number-pad"
                    maxLength={11}
                    editable={!loading}
                    autoFocus
                  />
                </View>
              </View>

              {/* Send OTP Button */}
              <TouchableOpacity
                onPress={handleSendOTP}
                disabled={loading || phoneNumber.replace(/\D/g, '').length < 10}
                className={`rounded-full py-4 px-6 flex-row items-center justify-center mb-4 ${
                  loading || phoneNumber.replace(/\D/g, '').length < 10
                    ? 'bg-gray-300'
                    : 'bg-green-500'
                }`}
                activeOpacity={0.8}
                style={{
                  shadowColor: '#22c55e',
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.3,
                  shadowRadius: 8,
                  elevation: 4,
                }}
              >
                {loading ? (
                  <ActivityIndicator color="#fff" size="small" />
                ) : (
                  <>
                    <Ionicons name="logo-whatsapp" size={24} color="#fff" />
                    <Text className="text-white font-bold text-lg ml-3">
                      Send OTP via WhatsApp
                    </Text>
                  </>
                )}
              </TouchableOpacity>

              {/* Divider */}
              <View className="flex-row items-center mb-4">
                <View className="flex-1 h-px bg-gray-300" />
                <Text className="px-4 text-gray-500 font-medium">or</Text>
                <View className="flex-1 h-px bg-gray-300" />
              </View>

              {/* Google Sign In Button */}
              <TouchableOpacity
                onPress={handleGoogleSignIn}
                disabled={loading}
                className="bg-white rounded-full py-4 px-6 flex-row items-center justify-center mb-3"
                activeOpacity={0.8}
                style={{
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 8,
                  elevation: 2,
                }}
              >
                <GoogleLogo size={22} />
                <Text className="text-gray-700 font-semibold text-base ml-3">
                  Continue with Google
                </Text>
              </TouchableOpacity>

              {/* Guest Button */}
              <TouchableOpacity
                onPress={() => {
                  signInAsGuest();
                }}
                disabled={loading}
                className="border-2 border-gray-300 rounded-full py-3 px-6 flex-row items-center justify-center mb-4"
                activeOpacity={0.7}
              >
                <Ionicons name="person-outline" size={20} color="#6b7280" />
                <Text className="text-gray-600 font-semibold text-base ml-3">
                  Continue as Guest
                </Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              {/* OTP Verification Section */}
              <View className="mb-4">
                {/* Back Button */}
                <TouchableOpacity
                  onPress={handleBackToPhone}
                  className="flex-row items-center mb-4"
                  disabled={loading}
                >
                  <Ionicons name="arrow-back" size={24} color="#6b7280" />
                  <Text className="text-gray-600 font-medium ml-2">Change number</Text>
                </TouchableOpacity>

                <Text className="text-gray-700 font-semibold mb-2 text-base">
                  Enter verification code
                </Text>
                <Text className="text-gray-500 mb-4 text-sm">
                  OTP sent to +91 {formatPhoneDisplay(phoneNumber)}
                </Text>

                {/* OTP Input */}
                <OTPInput
                  value={otp}
                  onChange={setOtp}
                  length={4}
                  error={undefined}
                  disabled={loading}
                  autoFocus
                />
              </View>

              {/* Verify Button */}
              <TouchableOpacity
                onPress={() => handleVerifyOTP()}
                disabled={loading || otp.length !== 4}
                className={`rounded-full py-4 px-6 flex-row items-center justify-center mb-4 ${
                  loading || otp.length !== 4 ? 'bg-gray-300' : 'bg-purple-600'
                }`}
                activeOpacity={0.8}
                style={{
                  shadowColor: '#9333ea',
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.3,
                  shadowRadius: 8,
                  elevation: 4,
                }}
              >
                {loading ? (
                  <ActivityIndicator color="#fff" size="small" />
                ) : (
                  <>
                    <Ionicons name="checkmark-circle" size={24} color="#fff" />
                    <Text className="text-white font-bold text-lg ml-3">
                      Verify & Continue
                    </Text>
                  </>
                )}
              </TouchableOpacity>

              {/* Resend OTP */}
              <View className="items-center">
                {resendTimer > 0 ? (
                  <Text className="text-gray-500 text-sm">
                    Resend OTP in {resendTimer}s
                  </Text>
                ) : (
                  <TouchableOpacity onPress={handleResendOTP} disabled={loading}>
                    <Text className="text-purple-600 font-semibold text-sm">
                      Resend OTP
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </>
          )}

          {/* Terms & Privacy */}
          <View className="items-center mt-4">
            <Text className="text-gray-400 text-center text-xs mb-1">
              By continuing, you agree to our
            </Text>
            <View className="flex-row items-center justify-center">
              <TouchableOpacity
                onPress={() => router.push('/legal/terms')}
                activeOpacity={1}
              >
                <Text className="text-purple-600 font-medium text-xs">
                  Terms of Service
                </Text>
              </TouchableOpacity>
              <Text className="text-gray-400 text-xs"> and </Text>
              <TouchableOpacity
                onPress={() => router.push('/legal/privacy')}
                activeOpacity={1}
              >
                <Text className="text-purple-600 font-medium text-xs">
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
