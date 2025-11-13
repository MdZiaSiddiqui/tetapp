import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useAuth } from '../../lib/auth-context';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '../../lib/supabase';

export default function Profile() {
  const router = useRouter();
  const { user, signOut } = useAuth();

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
      'Sign Out',
      'Are you sure you want to sign out?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Sign Out',
          style: 'destructive',
          onPress: async () => {
            await signOut();
            // Navigate to home after sign out
            router.replace('/(tabs)/home');
          },
        },
      ]
    );
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <StatusBar style="dark" />

      <View className="px-6 pt-16 pb-6">
        <Text className="text-3xl font-bold text-gray-800 mb-6">
          Profile
        </Text>

        {/* User Info Card */}
        <View className="bg-blue-50 p-6 rounded-2xl mb-6">
          <View className="items-center mb-4">
            <View className="w-24 h-24 bg-blue-500 rounded-full items-center justify-center mb-4">
              <Text className="text-white text-4xl">
                {profile?.full_name?.charAt(0).toUpperCase() || '?'}
              </Text>
            </View>

            <Text className="text-2xl font-bold text-gray-800">
              {profile?.full_name || 'User'}
            </Text>
            <Text className="text-gray-600 mt-1">{user?.email}</Text>
          </View>

          <View className="flex-row justify-around pt-4 border-t border-blue-200">
            <View className="items-center">
              <Text className="text-3xl font-bold text-blue-500">
                {profile?.level || 1}
              </Text>
              <Text className="text-gray-600 text-sm mt-1">Level</Text>
            </View>

            <View className="w-px bg-blue-200" />

            <View className="items-center">
              <Text className="text-3xl font-bold text-blue-500">
                {profile?.total_questions_attempted || 0}
              </Text>
              <Text className="text-gray-600 text-sm mt-1">Questions</Text>
            </View>
          </View>
        </View>

        {/* Options */}
        <View className="space-y-3 mb-6">
          <TouchableOpacity className="bg-gray-50 p-4 rounded-xl flex-row justify-between items-center">
            <View>
              <Text className="text-lg font-semibold text-gray-800">
                Edit Profile
              </Text>
              <Text className="text-gray-500 text-sm mt-1">
                Update your personal information
              </Text>
            </View>
            <Text className="text-gray-400 text-2xl">›</Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-gray-50 p-4 rounded-xl flex-row justify-between items-center mt-3">
            <View>
              <Text className="text-lg font-semibold text-gray-800">
                Notifications
              </Text>
              <Text className="text-gray-500 text-sm mt-1">
                Manage notification preferences
              </Text>
            </View>
            <Text className="text-gray-400 text-2xl">›</Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-gray-50 p-4 rounded-xl flex-row justify-between items-center mt-3">
            <View>
              <Text className="text-lg font-semibold text-gray-800">
                Study Reminders
              </Text>
              <Text className="text-gray-500 text-sm mt-1">
                Set up daily study reminders
              </Text>
            </View>
            <Text className="text-gray-400 text-2xl">›</Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-gray-50 p-4 rounded-xl flex-row justify-between items-center mt-3">
            <View>
              <Text className="text-lg font-semibold text-gray-800">
                Dark Mode
              </Text>
              <Text className="text-gray-500 text-sm mt-1">
                Toggle dark mode theme
              </Text>
            </View>
            <Text className="text-gray-400 text-2xl">›</Text>
          </TouchableOpacity>
        </View>

        {/* About Section */}
        <View className="border-t border-gray-200 pt-6">
          <TouchableOpacity className="py-3">
            <Text className="text-gray-700 text-base">Help & Support</Text>
          </TouchableOpacity>

          <TouchableOpacity className="py-3">
            <Text className="text-gray-700 text-base">Privacy Policy</Text>
          </TouchableOpacity>

          <TouchableOpacity className="py-3">
            <Text className="text-gray-700 text-base">Terms of Service</Text>
          </TouchableOpacity>

          <View className="py-3">
            <Text className="text-gray-500 text-sm">Version 1.0.0</Text>
          </View>
        </View>

        {/* Sign Out Button */}
        <TouchableOpacity
          onPress={handleSignOut}
          className="bg-red-500 py-4 px-8 rounded-xl mt-6"
        >
          <Text className="text-white text-center text-lg font-semibold">
            Sign Out
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
