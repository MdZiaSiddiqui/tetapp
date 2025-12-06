import { View, Text, TouchableOpacity, ScrollView, Alert, Linking, Share, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { useAuth } from '../../lib/auth-context';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { supabase } from '../../lib/supabase';
import { Ionicons } from '@expo/vector-icons';
import { useProAccess } from '../../hooks/useProAccess';
import { TIER_NAMES } from '../../lib/pricing-config';
import { useState } from 'react';

export default function Profile() {
  const router = useRouter();
  const { user, signOut, loading, isGuest } = useAuth();
  const queryClient = useQueryClient();

  // Phone edit state
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [phoneValue, setPhoneValue] = useState('');
  const [isSavingPhone, setIsSavingPhone] = useState(false);

  // Fetch user profile
  const { data: profile, refetch: refetchProfile } = useQuery({
    queryKey: ['profile', user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('user_profiles')
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
    hasPaper1Access,
    hasPaper2Access,
    paper1ExpiresAt,
    paper2ExpiresAt,
    paper1DaysRemaining,
    paper2DaysRemaining,
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

  const handleRefundPolicy = () => {
    router.push('/legal/refund');
  };

  const handleTermsOfService = () => {
    router.push('/legal/terms');
  };

  const handleEditPhone = () => {
    setPhoneValue(profile?.phone || '');
    setIsEditingPhone(true);
  };

  const handleCancelPhoneEdit = () => {
    setIsEditingPhone(false);
    setPhoneValue('');
  };

  const handleSavePhone = async () => {
    if (!user?.id) return;

    setIsSavingPhone(true);
    try {
      const { error } = await supabase
        .from('user_profiles')
        .update({ phone: phoneValue.trim() || null })
        .eq('id', user.id);

      if (error) throw error;

      await queryClient.invalidateQueries({ queryKey: ['profile', user.id] });
      setIsEditingPhone(false);
      setPhoneValue('');
    } catch (error) {
      Alert.alert('Error', 'Failed to update phone number. Please try again.');
      console.error('Error updating phone:', error);
    } finally {
      setIsSavingPhone(false);
    }
  };

  // Redirect to login if not authenticated (and not guest)
  if (!user && !isGuest && !loading) {
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
                activeOpacity={1}
              >
                <Text className="text-gray-900 font-medium text-xs">Log Out</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Phone/Number */}
          <View>
            <Text className="text-xs text-gray-400 mb-2">Number</Text>
            {isEditingPhone ? (
              <View className="flex-row items-center">
                <TextInput
                  value={phoneValue}
                  onChangeText={setPhoneValue}
                  placeholder="Enter phone number"
                  keyboardType="phone-pad"
                  className="flex-1 text-sm text-gray-700 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200"
                  autoFocus
                />
                <TouchableOpacity
                  onPress={handleSavePhone}
                  disabled={isSavingPhone}
                  className="ml-2 bg-gray-900 px-3 py-2 rounded-lg"
                  activeOpacity={0.7}
                >
                  <Text className="text-white text-xs font-medium">
                    {isSavingPhone ? 'Saving...' : 'Save'}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleCancelPhoneEdit}
                  className="ml-2 px-3 py-2"
                  activeOpacity={0.7}
                >
                  <Ionicons name="close" size={18} color="#6B7280" />
                </TouchableOpacity>
              </View>
            ) : (
              <View className="flex-row items-center justify-between">
                <Text className="text-sm text-gray-700 flex-1">
                  {profile?.phone || 'Not provided'}
                </Text>
                <TouchableOpacity
                  onPress={handleEditPhone}
                  className="p-2"
                  activeOpacity={0.7}
                >
                  <Ionicons name="pencil" size={16} color="#6B7280" />
                </TouchableOpacity>
              </View>
            )}
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

            {/* Validity Information - Simplified UI */}
            {!isFree && (
              <>
                {/* Paper 1 only - show validity directly */}
                {tier === 'paper1' && paper1ExpiresAt && (
                  <View className="mt-1">
                    <Text className="text-gray-700 text-sm">
                      {hasPaper1Access ? 'Valid until' : 'Expired on'}{' '}
                      {paper1ExpiresAt.toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </Text>
                    {hasPaper1Access && paper1DaysRemaining !== null && (
                      <Text className="text-gray-500 text-xs mt-1">
                        {paper1DaysRemaining} {paper1DaysRemaining === 1 ? 'day' : 'days'} remaining
                      </Text>
                    )}
                  </View>
                )}

                {/* Paper 2 only - show validity directly */}
                {tier === 'paper2' && paper2ExpiresAt && (
                  <View className="mt-1">
                    <Text className="text-gray-700 text-sm">
                      {hasPaper2Access ? 'Valid until' : 'Expired on'}{' '}
                      {paper2ExpiresAt.toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </Text>
                    {hasPaper2Access && paper2DaysRemaining !== null && (
                      <Text className="text-gray-500 text-xs mt-1">
                        {paper2DaysRemaining} {paper2DaysRemaining === 1 ? 'day' : 'days'} remaining
                      </Text>
                    )}
                  </View>
                )}

                {/* Both papers - show compact rows */}
                {tier === 'both' && (
                  <View className="mt-3 gap-2">
                    {paper1ExpiresAt && (
                      <View className="flex-row items-center justify-between">
                        <Text className="text-gray-700 text-sm">Paper 1</Text>
                        <Text className="text-gray-500 text-sm">
                          {hasPaper1Access ? `${paper1DaysRemaining} days left` : 'Expired'}
                        </Text>
                      </View>
                    )}
                    {paper2ExpiresAt && (
                      <View className="flex-row items-center justify-between">
                        <Text className="text-gray-700 text-sm">Paper 2</Text>
                        <Text className="text-gray-500 text-sm">
                          {hasPaper2Access ? `${paper2DaysRemaining} days left` : 'Expired'}
                        </Text>
                      </View>
                    )}
                  </View>
                )}
              </>
            )}
          </View>

          {/* Upgrade/Renew Button */}
          {(isFree || !hasPaper1Access || !hasPaper2Access) && (
            <TouchableOpacity
              className="bg-gray-900 rounded-xl p-4 flex-row items-center justify-between"
              activeOpacity={1}
              onPress={() => router.push('/(tabs)/pricing')}
            >
              <Text className="text-white font-semibold text-base">
                {isFree ? 'Upgrade to Pro' : !hasPaper1Access && !hasPaper2Access ? 'Renew Subscription' : 'Extend or Add Plan'}
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
            activeOpacity={1}
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
            activeOpacity={1}
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
        <View className="mx-6 mt-6 flex-row items-center justify-center">
          <TouchableOpacity
            onPress={handleTermsOfService}
            activeOpacity={1}
          >
            <Text className="text-gray-700 text-sm">Terms of Service</Text>
          </TouchableOpacity>

          <Text className="text-gray-400 text-sm mx-2">•</Text>

          <TouchableOpacity
            onPress={handlePrivacyPolicy}
            activeOpacity={1}
          >
            <Text className="text-gray-700 text-sm">Privacy Policy</Text>
          </TouchableOpacity>

          <Text className="text-gray-400 text-sm mx-2">•</Text>

          <TouchableOpacity
            onPress={handleRefundPolicy}
            activeOpacity={1}
          >
            <Text className="text-gray-700 text-sm">Refund Policy</Text>
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
