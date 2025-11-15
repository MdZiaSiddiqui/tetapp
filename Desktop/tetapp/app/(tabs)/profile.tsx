import { View, Text, TouchableOpacity, ScrollView, Alert, Linking, Share } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { useAuth } from '../../lib/auth-context';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '../../lib/supabase';
import { Ionicons } from '@expo/vector-icons';
import { useProAccess } from '../../hooks/useProAccess';
import { TIER_NAMES } from '../../lib/pricing-config';

export default function Profile() {
  const router = useRouter();
  const { user, signOut, loading } = useAuth();

  // Fetch user profile
  const { data: profile } = useQuery({
    queryKey: ['profile', user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', user?.id)
        .single();
      if (error) throw error;
      return data;
    },
    enabled: !!user?.id,
  });

  // Get pro access details
  const {
    tier,
    isProActive,
    isFree,
    expiresAt,
    daysRemaining,
    packageType,
    loading: proLoading,
  } = useProAccess();

  const handleSignOut = async () => {
    Alert.alert(
      'Log Out',
      'Are you sure you want to log out?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Log Out',
          style: 'destructive',
          onPress: async () => {
            await signOut();
            router.replace('/login');
          },
        },
      ]
    );
  };

  const handleWhatsAppPress = () => {
    const phoneNumber = '916304102415';
    const url = `whatsapp://send?phone=${phoneNumber}`;
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(url);
        } else {
          Alert.alert('Error', 'WhatsApp is not installed on your device');
        }
      })
      .catch((err) => console.error('Error opening WhatsApp:', err));
  };

  const handleEmailPress = () => {
    const email = 'support@supacharge.me';
    const url = `mailto:${email}`;
    Linking.openURL(url).catch((err) => console.error('Error opening email:', err));
  };

  const handlePrivacyPolicy = () => {
    router.push('/legal/privacy');
  };

  const handleTermsOfService = () => {
    router.push('/legal/terms');
  };


  // Redirect to login if not authenticated
  if (!user && !loading) {
    router.replace('/login');
    return null;
  }

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
        contentContainerStyle={{ paddingBottom: 40, paddingTop: 60 }}
        showsVerticalScrollIndicator={false}
      >
        {/* User Info Card - Minimalist Design */}
        <View className="bg-white mx-6 mt-6 rounded-3xl p-6 border border-gray-100">
          {/* Email and Log Out */}
          <View className="mb-4">
            <Text className="text-xs text-gray-400 mb-2">Email</Text>
            <View className="flex-row items-center justify-between">
              <Text className="text-sm text-gray-700 flex-1">{user?.email || 'email@example.com'}</Text>
              <TouchableOpacity
                onPress={handleSignOut}
                className="bg-gray-100 px-4 py-2 rounded-full ml-3"
              >
                <Text className="text-gray-900 font-medium text-xs">Log Out</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Phone/Number placeholder */}
          <View>
            <Text className="text-xs text-gray-400 mb-2">Number</Text>
            <Text className="text-sm text-gray-700">
              {profile?.phone || 'Not provided'}
            </Text>
          </View>
        </View>

        {/* Your Plan Section */}
        <View className="mx-6 mt-6 bg-white rounded-3xl p-6 border border-gray-100">
          <Text className="text-xs text-gray-400 mb-4">Your Plan</Text>

          {/* Plan Details */}
          <View className="mb-4">
            <View className="flex-row items-center justify-between mb-2">
              <Text className="text-gray-900 text-lg font-bold">
                {isFree ? 'Free Plan' : TIER_NAMES[tier]}
              </Text>
              {isProActive && (
                <View className="bg-green-100 px-3 py-1 rounded-full">
                  <Text className="text-green-700 text-xs font-medium">Active</Text>
                </View>
              )}
            </View>

            {/* Plan Description */}
            <Text className="text-gray-600 text-sm mb-3">
              {isFree
                ? 'Limited access to practice questions'
                : isProActive
                ? tier === 'both'
                  ? 'Full access to Paper-1 & Paper-2'
                  : tier === 'paper1'
                  ? 'Full access to Paper-1'
                  : 'Full access to Paper-2'
                : 'Plan expired'}
            </Text>

            {/* Validity Information */}
            {!isFree && (
              <View className="bg-gray-50 p-4 rounded-xl">
                {isProActive ? (
                  <>
                    <View className="flex-row items-center mb-2">
                      <Ionicons name="calendar-outline" size={16} color="#6B7280" />
                      <Text className="text-gray-600 text-xs ml-2">Valid Until</Text>
                    </View>
                    <Text className="text-gray-900 text-base font-medium mb-1">
                      {expiresAt?.toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </Text>
                    <Text className="text-gray-500 text-xs">
                      {daysRemaining !== null &&
                        `${daysRemaining} ${daysRemaining === 1 ? 'day' : 'days'} remaining`}
                    </Text>
                  </>
                ) : (
                  <>
                    <View className="flex-row items-center mb-2">
                      <Ionicons name="warning-outline" size={16} color="#DC2626" />
                      <Text className="text-red-600 text-xs ml-2 font-medium">Plan Expired</Text>
                    </View>
                    <Text className="text-gray-600 text-sm">
                      Your subscription expired on{' '}
                      {expiresAt?.toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </Text>
                  </>
                )}
              </View>
            )}

            {/* Package Type for Active Plans */}
            {isProActive && packageType && (
              <View className="mt-3 flex-row items-center">
                <Ionicons name="time-outline" size={14} color="#6B7280" />
                <Text className="text-gray-500 text-xs ml-1">
                  {packageType === '3_months' ? '3 Months' : '1 Year'} Plan
                </Text>
              </View>
            )}
          </View>

          {/* Upgrade/Renew Button */}
          {(isFree || !isProActive) && (
            <TouchableOpacity
              className="bg-gray-900 rounded-xl p-4 flex-row items-center justify-between"
              activeOpacity={0.8}
              onPress={() => router.push('/(tabs)/notes')}
            >
              <Text className="text-white font-semibold text-base">
                {isFree ? 'Upgrade to Pro' : 'Renew Subscription'}
              </Text>
              <Ionicons name="arrow-forward" size={20} color="white" />
            </TouchableOpacity>
          )}
        </View>

        {/* Contact Support Section - Modern Minimal */}
        <View className="bg-white mx-6 mt-6 rounded-3xl p-6 border border-gray-100">
          <Text className="text-xs text-gray-400 mb-4">Contact Support</Text>

          {/* WhatsApp */}
          <TouchableOpacity
            onPress={handleWhatsAppPress}
            className="flex-row items-center py-3 border-b border-gray-100"
            activeOpacity={0.7}
          >
            <View className="w-10 h-10 bg-green-500 rounded-full items-center justify-center mr-3">
              <Ionicons name="logo-whatsapp" size={20} color="white" />
            </View>
            <View className="flex-1">
              <Text className="text-gray-900 text-base font-medium">WhatsApp</Text>
              <Text className="text-gray-500 text-xs">+91 6304102415</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
          </TouchableOpacity>

          {/* Email */}
          <TouchableOpacity
            onPress={handleEmailPress}
            className="flex-row items-center py-3"
            activeOpacity={0.7}
          >
            <View className="w-10 h-10 bg-blue-500 rounded-full items-center justify-center mr-3">
              <Ionicons name="mail" size={20} color="white" />
            </View>
            <View className="flex-1">
              <Text className="text-gray-900 text-base font-medium">Email</Text>
              <Text className="text-gray-500 text-xs">support@supacharge.me</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
          </TouchableOpacity>
        </View>

        {/* Links Section - Ultra Minimal */}
        <View className="mx-6 mt-6">
          <TouchableOpacity
            onPress={handleTermsOfService}
            className="py-4"
            activeOpacity={0.7}
          >
            <Text className="text-gray-700 text-base">Terms of Service</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handlePrivacyPolicy}
            className="py-4"
            activeOpacity={0.7}
          >
            <Text className="text-gray-700 text-base">Privacy Policy</Text>
          </TouchableOpacity>
        </View>

        {/* Version Info */}
        <View className="mx-6 mt-8">
          <Text className="text-gray-400 text-xs text-center">
            Version 1.0.0
          </Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
