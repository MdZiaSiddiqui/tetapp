import { View, Text, TouchableOpacity, ScrollView, Alert, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { useAuth } from '../../lib/auth-context';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '../../lib/supabase';
import { Ionicons } from '@expo/vector-icons';

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
    Alert.alert('Privacy Policy', 'Privacy policy content will be displayed here.');
  };

  const handleTermsOfService = () => {
    Alert.alert('Terms of Service', 'Terms of service content will be displayed here.');
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

        {/* Unlock Pro Button - Prominent */}
        <TouchableOpacity
          className="mx-6 mt-6 bg-gray-900 rounded-2xl p-6 shadow-lg"
          activeOpacity={0.8}
        >
          <View className="flex-row items-center justify-between">
            <View className="flex-1">
              <Text className="text-white text-xl font-bold mb-1">Unlock Pro</Text>
              <Text className="text-gray-300 text-sm">Get unlimited access to all features</Text>
            </View>
            <Ionicons name="arrow-forward" size={24} color="white" />
          </View>
        </TouchableOpacity>

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
