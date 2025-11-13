import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useSubject } from '../../hooks/useSupabaseData';
import { getQuestionsBySubjectAndMode } from '../../lib/api/questions';

// Language subjects that don't need language toggle
const LANGUAGE_SUBJECTS = ['english', 'hindi', 'telugu', 'urdu'];

export default function SubjectDetail() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const subjectId = params.id as string;
  const subjectName = params.name as string;

  // Fetch subject details
  const { data: subject, isLoading, error } = useSubject(subjectId);

  // State for language selection (only for non-language subjects)
  const [selectedLanguage, setSelectedLanguage] = useState<'English' | 'Telugu' | 'Urdu'>('English');
  const [fetchingQuestions, setFetchingQuestions] = useState(false);

  // Check if this is a language subject
  const isLanguageSubject = LANGUAGE_SUBJECTS.includes(subjectId.toLowerCase());

  const handleModePress = async (paper: 'Paper 1' | 'Paper 2', mode: 'practice' | 'test' | 'notes') => {
    try {
      setFetchingQuestions(true);

      // For language subjects, always use English as the language
      const language = isLanguageSubject ? 'English' : selectedLanguage;

      // Fetch 30 random questions
      const { data: questions, error } = await getQuestionsBySubjectAndMode(
        subjectId,
        language,
        paper,
        mode
      );

      setFetchingQuestions(false);

      if (error || !questions || questions.length === 0) {
        // Enhanced error message with more debug info
        console.log('❌ No questions found:', {
          subjectId,
          subjectName,
          language,
          paper,
          questionsCount: questions?.length,
          error: error?.message
        });

        alert(
          `No questions available\n\n` +
          `Subject: ${subjectName}\n` +
          `Paper: ${paper}\n` +
          `Language: ${language}\n\n` +
          `Please check:\n` +
          `1. Questions exist in database for this subject\n` +
          `2. Subject ID matches: ${subjectId}\n` +
          `3. Paper and language values are correct`
        );
        return;
      }

      // Navigate based on mode
      if (mode === 'practice') {
        router.push({
          pathname: '/practice/practice-session',
          params: {
            subjectId,
            subjectName,
            language,
            paper,
            mode: 'practice',
            questionCount: questions.length.toString(),
          },
        });
      } else if (mode === 'test') {
        router.push({
          pathname: '/practice/test-session',
          params: {
            subjectId,
            subjectName,
            language,
            paper,
            mode: 'test',
            questionCount: questions.length.toString(),
          },
        });
      } else {
        // Notes mode - show questions in practice mode but with notes emphasis
        router.push({
          pathname: '/practice/practice-session',
          params: {
            subjectId,
            subjectName,
            language,
            paper,
            mode: 'notes',
            questionCount: questions.length.toString(),
          },
        });
      }
    } catch (err) {
      setFetchingQuestions(false);
      alert('Failed to fetch questions. Please try again.');
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <View className="flex-1 bg-white justify-center items-center">
        <ActivityIndicator size="large" color="#3b82f6" />
        <Text className="text-gray-600 mt-4">Loading subject...</Text>
      </View>
    );
  }

  // Error state
  if (error) {
    return (
      <View className="flex-1 bg-white justify-center items-center px-6">
        <View className="bg-red-50 p-6 rounded-xl border border-red-200">
          <Text className="text-red-800 font-semibold text-lg text-center mb-2">
            Error Loading Subject
          </Text>
          <Text className="text-red-600 text-center mb-4">
            {error.message || 'Failed to load subject. Please try again.'}
          </Text>
          <TouchableOpacity
            onPress={() => router.back()}
            className="bg-red-600 py-3 px-6 rounded-lg"
          >
            <Text className="text-white font-semibold text-center">Go Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />

      {/* Header */}
      <View className="px-6 pt-16 pb-6 bg-blue-500">
        <View className="flex-row justify-end mb-4">
          <TouchableOpacity onPress={() => router.back()} className="p-1">
            <Ionicons name="chevron-back" size={28} color="white" />
          </TouchableOpacity>
        </View>
        <Text className="text-3xl font-bold text-white mb-2">
          {subject?.name || subjectName}
        </Text>
      </View>

      <ScrollView className="flex-1">
        <View className="px-6 py-6">
          {/* Language Toggle (only for non-language subjects) */}
          {!isLanguageSubject && (
            <View className="mb-6">
              <Text className="text-gray-700 font-semibold text-base mb-3">
                Select Language
              </Text>
              <View className="flex-row space-x-3">
                {(['English', 'Telugu', 'Urdu'] as const).map((lang) => (
                  <TouchableOpacity
                    key={lang}
                    onPress={() => setSelectedLanguage(lang)}
                    className={`flex-1 py-2.5 px-3 rounded-lg border-2 ${
                      selectedLanguage === lang
                        ? 'bg-blue-500 border-blue-500'
                        : 'bg-white border-gray-300'
                    }`}
                  >
                    <Text
                      className={`text-center font-semibold text-sm ${
                        selectedLanguage === lang ? 'text-white' : 'text-gray-700'
                      }`}
                    >
                      {lang}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          )}

          {/* Paper 1 Section */}
          <View className="mb-6">
            <Text className="text-gray-800 font-bold text-lg mb-3">Paper 1</Text>

            {/* Practice Button */}
            <TouchableOpacity
              onPress={() => handleModePress('Paper 1', 'practice')}
              disabled={fetchingQuestions}
              className="bg-green-500 py-3 px-4 rounded-lg shadow-sm active:bg-green-600 mb-2"
            >
              <Text className="text-white text-center font-semibold text-sm">
                Practice
              </Text>
            </TouchableOpacity>

            {/* Test Button */}
            <TouchableOpacity
              onPress={() => handleModePress('Paper 1', 'test')}
              disabled={fetchingQuestions}
              className="bg-orange-500 py-3 px-4 rounded-lg shadow-sm active:bg-orange-600 mb-2"
            >
              <Text className="text-white text-center font-semibold text-sm">
                Test
              </Text>
            </TouchableOpacity>

            {/* Notes Button */}
            <TouchableOpacity
              onPress={() => handleModePress('Paper 1', 'notes')}
              disabled={fetchingQuestions}
              className="bg-purple-500 py-3 px-4 rounded-lg shadow-sm active:bg-purple-600"
            >
              <Text className="text-white text-center font-semibold text-sm">
                Notes
              </Text>
            </TouchableOpacity>
          </View>

          {/* Paper 2 Section */}
          <View className="mb-4">
            <Text className="text-gray-800 font-bold text-lg mb-3">Paper 2</Text>

            {/* Practice Button */}
            <TouchableOpacity
              onPress={() => handleModePress('Paper 2', 'practice')}
              disabled={fetchingQuestions}
              className="bg-green-500 py-3 px-4 rounded-lg shadow-sm active:bg-green-600 mb-2"
            >
              <Text className="text-white text-center font-semibold text-sm">
                Practice
              </Text>
            </TouchableOpacity>

            {/* Test Button */}
            <TouchableOpacity
              onPress={() => handleModePress('Paper 2', 'test')}
              disabled={fetchingQuestions}
              className="bg-orange-500 py-3 px-4 rounded-lg shadow-sm active:bg-orange-600 mb-2"
            >
              <Text className="text-white text-center font-semibold text-sm">
                Test
              </Text>
            </TouchableOpacity>

            {/* Notes Button */}
            <TouchableOpacity
              onPress={() => handleModePress('Paper 2', 'notes')}
              disabled={fetchingQuestions}
              className="bg-purple-500 py-3 px-4 rounded-lg shadow-sm active:bg-purple-600"
            >
              <Text className="text-white text-center font-semibold text-sm">
                Notes
              </Text>
            </TouchableOpacity>
          </View>

          {fetchingQuestions && (
            <View className="mt-4 bg-blue-50 p-4 rounded-xl">
              <ActivityIndicator size="small" color="#3b82f6" />
              <Text className="text-blue-600 text-center mt-2 text-sm">
                Fetching questions...
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
