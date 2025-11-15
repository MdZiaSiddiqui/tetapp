import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator, Modal, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useState, useEffect } from 'react';
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
  const params = useLocalSearchParams();
  const [selectedPaper, setSelectedPaper] = useState(PAPER_OPTIONS[0]);
  const [showDropdown, setShowDropdown] = useState(false);

  // Fetch subjects with statistics using our custom hook
  const { data: subjects, isLoading, error } = useSubjectsWithStats();

  // Handle paper selection from revision tab
  useEffect(() => {
    if (params.selectedPaper && typeof params.selectedPaper === 'string') {
      // Check if the paper is in the available options
      if (PAPER_OPTIONS.includes(params.selectedPaper)) {
        setSelectedPaper(params.selectedPaper);
      }
    }
  }, [params.selectedPaper]);

  // Auto-open paper selector for new users after authentication
  useEffect(() => {
    if (params.showPaperSelector === 'true') {
      // Small delay to ensure smooth transition
      setTimeout(() => {
        setShowDropdown(true);
      }, 300);
    }
  }, [params.showPaperSelector]);

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
    const isSocialStudies = subject.id === 'social';
    const isScience = subject.id === 'science';
    const isChildDevelopment = subject.id === 'child-development';
    const isMathematics = subject.id === 'mathematics';
    const isUrdu = subject.id === 'urdu';
    const isTelugu = subject.id === 'telugu';
    const isEnglish = subject.id === 'english';
    const isHindi = subject.id === 'hindi';
    const isEnvironmental = subject.id === 'environmental';

    return (
      <TouchableOpacity
        key={subject.id}
        className="w-[48%] mb-4 bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100"
        onPress={() => handleSubjectPress(subject)}
      >
        {isSocialStudies ? (
          <View className="h-32 items-center justify-center bg-white">
            <Image
              source={require('../../Circle Crop Image (17)-modified.png')}
              className="w-24 h-24"
              resizeMode="contain"
            />
          </View>
        ) : isScience ? (
          <View className="h-32 items-center justify-center bg-white">
            <Image
              source={require('../../Gemini Generated Image (58)-modified.png')}
              className="w-24 h-24"
              resizeMode="contain"
            />
          </View>
        ) : isChildDevelopment ? (
          <View className="h-32 items-center justify-center bg-white">
            <Image
              source={require('../../Gemini Generated Image (58) copy-modified.png')}
              className="w-24 h-24"
              resizeMode="contain"
            />
          </View>
        ) : isMathematics ? (
          <View className="h-32 items-center justify-center bg-white">
            <Image
              source={require('../../ChatGPT Image Nov 15, 2025, 05_02_42 PM-modified (1).png')}
              className="w-24 h-24"
              resizeMode="contain"
            />
          </View>
        ) : isUrdu ? (
          <View className="h-32 items-center justify-center bg-white">
            <Image
              source={require('../../ChatGPT Image Nov 15, 2025, 05_07_14 PM-modified.png')}
              className="w-24 h-24"
              resizeMode="contain"
            />
          </View>
        ) : isTelugu ? (
          <View className="h-32 items-center justify-center bg-white">
            <Image
              source={require('../../ChatGPT Image Nov 15, 2025, 05_09_19 PM-modified.png')}
              className="w-24 h-24"
              resizeMode="contain"
            />
          </View>
        ) : isEnglish ? (
          <View className="h-32 items-center justify-center bg-white">
            <Image
              source={require('../../ChatGPT Image Nov 15, 2025, 05_20_40 PM-modified (1).png')}
              className="w-24 h-24"
              resizeMode="contain"
            />
          </View>
        ) : isHindi ? (
          <View className="h-32 items-center justify-center bg-white">
            <Image
              source={require('../../ChatGPT Image Nov 15, 2025, 05_08_14 PM-modified.png')}
              className="w-24 h-24"
              resizeMode="contain"
            />
          </View>
        ) : isEnvironmental ? (
          <View className="h-32 items-center justify-center bg-white">
            <Image
              source={require('../../ChatGPT Image Nov 15, 2025, 05_21_50 PM-modified.png')}
              className="w-24 h-24"
              resizeMode="contain"
            />
          </View>
        ) : (
          <View className="bg-gradient-to-br from-purple-500 to-purple-600 h-32 items-center justify-center">
            <Text className="text-white text-3xl font-bold">
              {subject.name.substring(0, 2).toUpperCase()}
            </Text>
          </View>
        )}
        <View className="p-4">
          <Text className="text-gray-800 font-semibold text-center text-base" numberOfLines={2}>
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
            onPress={() => {
              console.log('Paper selector clicked, opening dropdown...');
              setShowDropdown(true);
            }}
            activeOpacity={0.7}
            className="bg-purple-600 rounded-2xl px-8 py-7 shadow-lg flex-row items-center justify-between"
          >
            <View className="flex-row items-center flex-shrink justify-center gap-2">
              <Text className="text-xl font-bold text-white text-center" numberOfLines={2}>
                {selectedPaper}
              </Text>
            </View>
            <View className="ml-3">
              <Ionicons name="chevron-down" size={28} color="#FFFFFF" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Dropdown Modal */}
        {showDropdown && console.log('Modal should be visible now')}
        <Modal
          visible={showDropdown}
          transparent={true}
          animationType="fade"
          onRequestClose={() => {
            console.log('Modal close requested');
            setShowDropdown(false);
          }}
        >
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              console.log('Overlay clicked, closing modal');
              setShowDropdown(false);
            }}
            className="flex-1 bg-black/50 justify-center items-center px-6"
          >
            <TouchableOpacity
              activeOpacity={1}
              onPress={(e) => {
                e.stopPropagation();
                console.log('Modal content clicked, not closing');
              }}
              className="bg-white rounded-2xl w-full max-w-md shadow-xl"
            >
              <View className="py-4 px-6 border-b border-gray-200">
                <Text className="text-xl font-bold text-gray-800 text-center">
                  Select Paper Type
                </Text>
              </View>
              <ScrollView className="max-h-[600px]">
                {PAPER_OPTIONS.map((option, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => {
                        console.log('Paper option selected:', option);
                        setSelectedPaper(option);
                        setShowDropdown(false);
                      }}
                      className={`px-6 py-5 border-b border-gray-100 ${
                        selectedPaper === option ? 'bg-blue-50' : ''
                      }`}
                    >
                      <View className="flex-row items-center justify-between">
                        <Text
                          className={`text-base flex-1 ${
                            selectedPaper === option
                              ? 'text-blue-600 font-bold'
                              : 'text-gray-700 font-medium'
                          }`}
                          numberOfLines={2}
                        >
                          {option}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </TouchableOpacity>
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
