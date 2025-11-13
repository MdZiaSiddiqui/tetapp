import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { useSubjectsWithStats } from '../../hooks/useSupabaseData';
import type { SubjectWithStats } from '../../lib/types/database.types';

export default function Home() {
  const router = useRouter();

  // Fetch subjects with statistics using our custom hook
  const { data: subjects, isLoading, error } = useSubjectsWithStats();

  const handleSubjectPress = (subject: SubjectWithStats) => {
    router.push({
      pathname: '/subjects/[id]',
      params: {
        id: subject.id,
        name: subject.name,
      },
    });
  };

  const renderSubjectCard = (subject: SubjectWithStats) => {
    return (
      <TouchableOpacity
        key={subject.id}
        className="w-[48%] mb-4 bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100"
        onPress={() => handleSubjectPress(subject)}
      >
        <View className="bg-gradient-to-br from-blue-500 to-blue-600 h-32 items-center justify-center">
          <Text className="text-white text-3xl font-bold">
            {subject.name.substring(0, 2).toUpperCase()}
          </Text>
        </View>
        <View className="p-4">
          <Text className="text-gray-800 font-semibold text-center" numberOfLines={2}>
            {subject.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  // Loading state
  if (isLoading) {
    return (
      <View className="flex-1 bg-gray-50 justify-center items-center">
        <ActivityIndicator size="large" color="#3b82f6" />
        <Text className="text-gray-600 mt-4">Loading subjects...</Text>
      </View>
    );
  }

  // Error state
  if (error) {
    return (
      <View className="flex-1 bg-gray-50 justify-center items-center px-6">
        <View className="bg-red-50 p-6 rounded-xl border border-red-200">
          <Text className="text-red-800 font-semibold text-lg text-center mb-2">
            Error Loading Subjects
          </Text>
          <Text className="text-red-600 text-center mb-4">
            {error.message || 'Failed to load subjects. Please try again.'}
          </Text>
          <TouchableOpacity
            className="bg-red-600 py-3 px-6 rounded-lg"
            onPress={() => window.location.reload()}
          >
            <Text className="text-white font-semibold text-center">Retry</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <StatusBar style="dark" />

      <View className="px-4 pt-16 pb-6">
        {/* All Subjects Grid */}
        {subjects && subjects.length > 0 ? (
          <View className="flex-row flex-wrap justify-between">
            {subjects.map(renderSubjectCard)}
          </View>
        ) : (
          <View className="bg-white p-6 rounded-xl">
            <Text className="text-gray-600 text-center">
              No subjects available yet. Please add subjects to get started.
            </Text>
          </View>
        )}

        {/* Bottom Text */}
        <View className="mt-8 mb-6 px-4">
          <Text className="text-gray-600 text-center text-sm leading-6">
            Select a subject to view chapters, explore topics, and start practicing questions
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
