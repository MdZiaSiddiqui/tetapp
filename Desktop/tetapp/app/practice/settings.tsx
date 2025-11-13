import { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

type PracticeMode = 'practice' | 'test';
type Language = 'English' | 'Telugu' | 'Urdu';

export default function PracticeSettings() {
  const router = useRouter();
  const params = useLocalSearchParams();

  // Extract context (chapter or subject)
  const chapterId = params.chapterId as string | undefined;
  const chapterName = params.chapterName as string | undefined;
  const subjectId = params.subjectId as string | undefined;
  const subjectName = params.subjectName as string | undefined;
  const mode = params.mode as 'chapter' | 'subject' | undefined;

  // Settings state
  const [practiceMode, setPracticeMode] = useState<PracticeMode>('practice');
  const [language, setLanguage] = useState<Language>('English');
  const [questionCount, setQuestionCount] = useState('10');
  const [timerMinutes, setTimerMinutes] = useState('15');

  const startPractice = () => {
    const settings = {
      practiceMode,
      language,
      questionCount: parseInt(questionCount) || 10,
      timerMinutes: parseInt(timerMinutes) || 15,
      chapterId: mode === 'chapter' ? chapterId : undefined,
      subjectId: subjectId || undefined,
    };

    // Navigate to appropriate session screen based on mode
    // Practice mode: /practice/practice-session (no timer, instant feedback)
    // Test mode: /practice/test-session (with timer, no feedback)
    router.push({
      pathname: practiceMode === 'practice' ? '/practice/practice-session' : '/practice/test-session',
      params: settings as any,
    });
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <StatusBar style="dark" />

      <View className="px-6 pt-16 pb-6">
        {/* Header */}
        <TouchableOpacity onPress={() => router.back()} className="mb-4">
          <Text className="text-blue-500 text-lg">← Back</Text>
        </TouchableOpacity>

        <Text className="text-3xl font-bold text-gray-800 mb-2">
          Practice Settings
        </Text>
        <Text className="text-gray-600 mb-6">
          {mode === 'chapter'
            ? `${chapterName} - ${subjectName}`
            : mode === 'subject'
            ? subjectName
            : 'Customize your practice session'}
        </Text>

        {/* Practice Mode Selection */}
        <Text className="text-lg font-semibold text-gray-800 mb-3">
          Mode
        </Text>
        <View className="flex-row gap-3 mb-6">
          <TouchableOpacity
            onPress={() => setPracticeMode('practice')}
            className={`flex-1 p-4 rounded-2xl border ${
              practiceMode === 'practice'
                ? 'bg-blue-500 border-blue-500 shadow-lg'
                : 'bg-white border-gray-100 shadow-md'
            }`}
          >
            <Text
              className={`text-center font-semibold mb-1 ${
                practiceMode === 'practice' ? 'text-white' : 'text-gray-800'
              }`}
            >
              Practice
            </Text>
            <Text
              className={`text-center text-xs ${
                practiceMode === 'practice' ? 'text-blue-100' : 'text-gray-500'
              }`}
            >
              Instant feedback
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setPracticeMode('test')}
            className={`flex-1 p-4 rounded-2xl border ${
              practiceMode === 'test'
                ? 'bg-blue-500 border-blue-500 shadow-lg'
                : 'bg-white border-gray-100 shadow-md'
            }`}
          >
            <Text
              className={`text-center font-semibold mb-1 ${
                practiceMode === 'test' ? 'text-white' : 'text-gray-800'
              }`}
            >
              Test
            </Text>
            <Text
              className={`text-center text-xs ${
                practiceMode === 'test' ? 'text-blue-100' : 'text-gray-500'
              }`}
            >
              Results at end
            </Text>
          </TouchableOpacity>
        </View>

        {/* Language Selection */}
        <Text className="text-lg font-semibold text-gray-800 mb-3">
          Language
        </Text>
        <View className="flex-row gap-3 mb-6">
          {(['English', 'Telugu', 'Urdu'] as Language[]).map((lang) => (
            <TouchableOpacity
              key={lang}
              onPress={() => setLanguage(lang)}
              className={`flex-1 p-4 rounded-2xl border ${
                language === lang
                  ? 'bg-blue-500 border-blue-500 shadow-lg'
                  : 'bg-white border-gray-100 shadow-md'
              }`}
            >
              <Text
                className={`text-center font-semibold text-base ${
                  language === lang ? 'text-white' : 'text-gray-800'
                }`}
              >
                {lang}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Question Count */}
        <Text className="text-lg font-semibold text-gray-800 mb-3">
          Number of Questions
        </Text>
        <TextInput
          className="bg-gray-100 px-4 py-4 rounded-xl text-base mb-6"
          placeholder="10"
          value={questionCount}
          onChangeText={setQuestionCount}
          keyboardType="number-pad"
        />

        {/* Timer */}
        <Text className="text-lg font-semibold text-gray-800 mb-3">
          Timer (minutes)
        </Text>
        <TextInput
          className="bg-gray-100 px-4 py-4 rounded-xl text-base mb-8"
          placeholder="15"
          value={timerMinutes}
          onChangeText={setTimerMinutes}
          keyboardType="number-pad"
        />

        {/* Start Button */}
        <TouchableOpacity
          onPress={startPractice}
          className="bg-blue-500 py-4 px-8 rounded-xl shadow-lg"
        >
          <Text className="text-white text-center text-lg font-semibold">
            Start {practiceMode === 'test' ? 'Test' : 'Practice'} Session
          </Text>
        </TouchableOpacity>

        {/* Info Text */}
        {practiceMode === 'test' && (
          <View className="mt-4 bg-yellow-50 p-4 rounded-xl">
            <Text className="text-yellow-900 text-sm text-center">
              In Test mode, answers and explanations will only be shown after
              completing all questions
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}
