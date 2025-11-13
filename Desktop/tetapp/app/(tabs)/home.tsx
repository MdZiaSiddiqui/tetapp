import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator, Modal } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useSubjectsWithStats } from '../../hooks/useSupabaseData';
import type { SubjectWithStats } from '../../lib/types/database.types';

const PAPER_OPTIONS = [
  'TS-TET Paper-1 (English/Telugu)',
  'TS-TET Paper-1 (English/Urdu)',
  'TS-TET Paper-1 (English/Hindi)',
  'TS-TET Paper-2 Math & Science (English/Telugu)',
  'TS-TET Paper-2 Math & Science (English/Urdu)',
  'TS-TET Paper-2 Math & Science (English/Hindi)',
  'TS-TET Paper-2 Social Studies (English/Telugu)',
  'TS-TET Paper-2 Social Studies (English/Urdu)',
  'TS-TET Paper-2 Social Studies (English/Hindi)',
];

// Helper function to determine which subjects to show based on paper type
function getFilteredSubjects(
  subjects: SubjectWithStats[],
  selectedPaper: string
): SubjectWithStats[] {
  // Determine paper type and language from selection
  const isPaper1 = selectedPaper.includes('Paper-1');
  const isMathScience = selectedPaper.includes('Math & Science');
  const isSocialStudies = selectedPaper.includes('Social Studies');
  const language = selectedPaper.includes('Telugu')
    ? 'telugu'
    : selectedPaper.includes('Urdu')
    ? 'urdu'
    : selectedPaper.includes('Hindi')
    ? 'hindi'
    : '';

  // Define which subjects to show for each paper type
  let allowedSubjectIds: string[] = [];

  if (isPaper1) {
    // Paper-1: Maths, Child Development, English, EVS, Language
    allowedSubjectIds = [
      'mathematics',
      'child-development',
      'english',
      'environmental',
    ];
    if (language) allowedSubjectIds.push(language);
  } else if (isMathScience) {
    // Paper-2 Math & Science: Maths, Child Development, English, Science, Language
    allowedSubjectIds = [
      'mathematics',
      'child-development',
      'english',
      'science',
    ];
    if (language) allowedSubjectIds.push(language);
  } else if (isSocialStudies) {
    // Paper-2 Social Studies: Child Development, English, Social Studies, Language
    allowedSubjectIds = ['child-development', 'english', 'social'];
    if (language) allowedSubjectIds.push(language);
  }

  // Filter subjects based on allowed IDs
  return subjects.filter((subject) =>
    allowedSubjectIds.includes(subject.id)
  );
}

export default function Home() {
  const router = useRouter();
  const [selectedPaper, setSelectedPaper] = useState(PAPER_OPTIONS[0]);
  const [showDropdown, setShowDropdown] = useState(false);

  // Fetch subjects with statistics using our custom hook
  const { data: subjects, isLoading, error } = useSubjectsWithStats();

  // Filter subjects based on selected paper
  const filteredSubjects =
    subjects && subjects.length > 0
      ? getFilteredSubjects(subjects, selectedPaper)
      : [];

  const handleSubjectPress = (subject: SubjectWithStats) => {
    router.push({
      pathname: '/subjects/[id]',
      params: {
        id: subject.id,
        name: subject.name,
        selectedPaper: selectedPaper, // Pass the selected paper type
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
            {subject.name} & Pedagogy
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  // Loading state
  if (isLoading) {
    return (
      <LinearGradient
        colors={['#faf5ff', '#f3e8ff', '#ede9fe']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        className="flex-1 justify-center items-center"
      >
        <ActivityIndicator size="large" color="#9333ea" />
        <Text className="text-purple-800 mt-4 font-semibold">Loading subjects...</Text>
      </LinearGradient>
    );
  }

  // Error state
  if (error) {
    return (
      <LinearGradient
        colors={['#faf5ff', '#f3e8ff', '#ede9fe']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        className="flex-1 justify-center items-center px-6"
      >
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
      </LinearGradient>
    );
  }

  return (
    <LinearGradient
      colors={['#faf5ff', '#f3e8ff', '#ede9fe']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      className="flex-1"
    >
      <StatusBar style="dark" />
      <ScrollView className="flex-1">
        <View className="px-4 pt-16 pb-6">
        {/* Paper Selector */}
        <View className="mb-6">
          <TouchableOpacity
            onPress={() => setShowDropdown(true)}
            className="bg-white rounded-xl px-6 py-5 shadow-sm border border-gray-200 flex-row items-center justify-between"
          >
            <Text className="text-2xl font-bold text-gray-800 flex-1 text-center">
              {selectedPaper}
            </Text>
            <Ionicons name="chevron-down" size={24} color="#4B5563" />
          </TouchableOpacity>
        </View>

        {/* Dropdown Modal */}
        <Modal
          visible={showDropdown}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setShowDropdown(false)}
        >
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => setShowDropdown(false)}
            className="flex-1 bg-black/50 justify-center items-center px-6"
          >
            <View className="bg-white rounded-2xl w-full max-w-md shadow-xl">
              <ScrollView className="max-h-[700px]">
                {PAPER_OPTIONS.map((option, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      setSelectedPaper(option);
                      setShowDropdown(false);
                    }}
                    className={`px-6 py-5 border-b border-gray-100 ${
                      selectedPaper === option ? 'bg-blue-50' : ''
                    }`}
                  >
                    <Text
                      className={`text-lg ${
                        selectedPaper === option
                          ? 'text-blue-600 font-bold'
                          : 'text-gray-700 font-medium'
                      }`}
                    >
                      {option}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </TouchableOpacity>
        </Modal>

        {/* All Subjects Grid */}
        {filteredSubjects && filteredSubjects.length > 0 ? (
          <View className="flex-row flex-wrap justify-between">
            {filteredSubjects.map(renderSubjectCard)}
          </View>
        ) : (
          <View className="bg-white p-6 rounded-xl">
            <Text className="text-gray-600 text-center">
              No subjects available for the selected paper type.
            </Text>
          </View>
        )}

        </View>
      </ScrollView>
    </LinearGradient>
  );
}
