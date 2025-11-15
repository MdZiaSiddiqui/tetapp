import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator, Image } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useSubject } from '../../hooks/useSupabaseData';
import { getQuestionsBySubjectAndMode } from '../../lib/api/questions';
import { getBookCover } from '../../lib/notes-data';
import { useProAccess } from '../../hooks/useProAccess';

// Language subjects that don't need language toggle
const LANGUAGE_SUBJECTS = ['english', 'hindi', 'telugu', 'urdu'];

// Subjects that only have Paper 2 (no Paper 1)
const PAPER_2_ONLY_SUBJECTS = ['social', 'science'];

export default function SubjectDetail() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const subjectId = params.id as string;
  const subjectName = params.name as string;
  const selectedPaperParam = params.selectedPaper as string;

  // Fetch subject details
  const { data: subject, isLoading, error } = useSubject(subjectId);

  // Get premium access information
  const { hasPaper1Access, hasPaper2Access, loading: proLoading } = useProAccess();

  // Determine available languages based on selected paper
  const isHindiPaper = selectedPaperParam?.includes('Hindi');
  const isTeluguPaper = selectedPaperParam?.includes('Telugu');
  const isUrduPaper = selectedPaperParam?.includes('Urdu');

  // Determine available language options based on paper selection
  let availableLanguages: Array<'English' | 'Telugu' | 'Urdu' | 'Hindi'> = ['English'];
  let defaultLanguage: 'English' | 'Telugu' | 'Urdu' | 'Hindi' = 'English';

  if (isHindiPaper) {
    // Hindi paper - no language selector needed (Hindi only)
    availableLanguages = ['Hindi'];
    defaultLanguage = 'Hindi';
  } else if (isTeluguPaper) {
    // Telugu paper - show English and Telugu only
    availableLanguages = ['English', 'Telugu'];
  } else if (isUrduPaper) {
    // Urdu paper - show English and Urdu only
    availableLanguages = ['English', 'Urdu'];
  }

  // State for language selection (only for non-language subjects)
  const [selectedLanguage, setSelectedLanguage] = useState<'English' | 'Telugu' | 'Urdu' | 'Hindi'>(defaultLanguage);
  const [fetchingQuestions, setFetchingQuestions] = useState(false);

  // Check if this is a language subject
  const isLanguageSubject = LANGUAGE_SUBJECTS.includes(subjectId.toLowerCase());

  // Show language selector only for non-language subjects and non-Hindi papers
  const showLanguageSelector = !isLanguageSubject && !isHindiPaper;

  // Determine which paper to show based on selection
  const showPaper1 = selectedPaperParam?.includes('Paper-1');
  const showPaper2 = selectedPaperParam?.includes('Paper-2') || selectedPaperParam?.includes('Paper 2');

  // If no selection is made, show both (backward compatibility)
  const showBothPapers = !selectedPaperParam;

  // Determine if user has access to the currently selected paper
  // Paper 1 corresponds to "UltraThink" tier (hasPaper1Access)
  // Paper 2 corresponds to other subjects
  const currentPaperAccess = showPaper1 ? hasPaper1Access : hasPaper2Access;
  const isPremiumLocked = !currentPaperAccess;

  const handleLockedPress = () => {
    router.push('/pricing');
  };

  const handleModePress = async (paper: 'Paper 1' | 'Paper 2', mode: 'practice' | 'test' | 'notes') => {
    try {
      setFetchingQuestions(true);

      // For language subjects, use the subject name as the language
      // (e.g., Telugu subject queries for language='Telugu')
      // For non-language subjects, use the user's selected language
      let language: 'English' | 'Telugu' | 'Urdu';
      if (isLanguageSubject) {
        // Capitalize first letter to match database format
        const subjectNameCapitalized = subjectName.charAt(0).toUpperCase() + subjectName.slice(1).toLowerCase();
        // Hindi is stored as English in the database
        if (subjectNameCapitalized === 'Hindi') {
          language = 'English';
        } else {
          language = subjectNameCapitalized as 'English' | 'Telugu' | 'Urdu';
        }
      } else {
        language = selectedLanguage === 'Hindi' ? 'English' : selectedLanguage;
      }

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
    <LinearGradient
      colors={['#faf5ff', '#f3e8ff', '#ede9fe']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      className="flex-1"
    >
      <StatusBar style="dark" />

      {/* Header */}
      <LinearGradient
        colors={['#9333ea', '#7e22ce']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="px-6 pt-16 pb-6"
      >
        <View className="items-center">
          <Text className="text-xl font-medium text-white">
            {subject?.name || subjectName} & Pedagogy
          </Text>
        </View>
      </LinearGradient>

      <ScrollView className="flex-1">
        <View className="px-6 py-6">
          {/* Notes Section */}
          {(() => {
            // Map subject IDs to note prefixes and display names for book covers
            const subjectToNoteData: Record<string, { prefix: string; displayName: string }> = {
              'mathematics': { prefix: 'maths', displayName: 'Mathematics' },
              'child-development': { prefix: 'development', displayName: 'Child Development & Pedagogy' },
              'environmental': { prefix: 'evs', displayName: 'Environmental Studies' },
              'social': { prefix: 'social', displayName: 'Social Studies' },
              'science': { prefix: 'physics', displayName: 'Physical Science' }, // Default to physics for science
              'english': { prefix: 'english', displayName: 'English' },
            };

            const noteData = subjectToNoteData[subjectId.toLowerCase()];

            // Only show notes if we have a mapping for this subject
            if (!noteData) return null;

            const { prefix: notePrefix, displayName: bookCoverSubject } = noteData;

            // Get the book cover image for this subject
            const bookCoverImage = getBookCover(bookCoverSubject);

            // Filter languages - for Hindi paper, only show English notes
            const notesLanguages = isHindiPaper ? ['English'] : availableLanguages;

            return (
              <View className="mb-8">
                <Text className="text-gray-800 font-bold text-lg mb-4">Study Notes</Text>

                <View className="flex-row flex-wrap justify-between">
                  {notesLanguages.map((lang) => {
                    const handleNotesPress = () => {
                      // If locked, redirect to pricing
                      if (isPremiumLocked) {
                        handleLockedPress();
                        return;
                      }

                      // Map language to note suffix
                      const langSuffix = lang.toLowerCase() === 'english' || lang.toLowerCase() === 'hindi'
                        ? 'eng'
                        : lang.toLowerCase() === 'telugu'
                        ? 'tel'
                        : 'urdu';

                      const noteId = `${notePrefix}-${langSuffix}`;

                      // Navigate to notes viewer
                      router.push({
                        pathname: '/notes/viewer',
                        params: { noteId },
                      });
                    };

                    return (
                      <TouchableOpacity
                        key={lang}
                        onPress={handleNotesPress}
                        className="w-[48%] mb-4"
                      >
                        <View style={{ position: 'relative' }} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                          {/* Display book cover image if available, otherwise show gradient */}
                          {bookCoverImage ? (
                            <Image
                              source={bookCoverImage}
                              className="w-full h-60"
                              resizeMode="cover"
                            />
                          ) : (
                            <View className="bg-gradient-to-br from-purple-500 to-purple-600 h-60 items-center justify-center">
                              <Ionicons name="book-outline" size={48} color="white" />
                            </View>
                          )}
                          <View className="p-3">
                            <Text className="text-gray-700 font-semibold text-center text-sm">
                              {lang}
                            </Text>
                          </View>

                          {/* Lock Icon Overlay */}
                          {isPremiumLocked && (
                            <View
                              style={{
                                position: 'absolute',
                                bottom: 50,
                                right: 8,
                                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                borderRadius: 12,
                                width: 24,
                                height: 24,
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <Ionicons name="lock-closed" size={14} color="#fbbf24" />
                            </View>
                          )}
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            );
          })()}

          {/* Language Toggle (only for non-language subjects and non-Hindi papers) */}
          {showLanguageSelector && (
            <View className="mb-6">
              <Text className="text-gray-700 font-semibold text-base mb-3">
                Select Language
              </Text>
              <View className="flex-row gap-3">
                {availableLanguages.map((lang) => (
                  <TouchableOpacity
                    key={lang}
                    onPress={() => setSelectedLanguage(lang)}
                    className={`flex-1 py-2.5 px-3 rounded-lg border-2 ${
                      selectedLanguage === lang
                        ? 'bg-purple-600 border-purple-600'
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

          {/* Practice & Test Sessions Grid */}
          <View className="mb-6">
            <Text className="text-gray-800 font-bold text-xl mb-5">Practice & Test Sessions</Text>

            {/* Generate 50 rows of Practice and Test */}
            {Array.from({ length: 50 }, (_, index) => {
              const sessionNumber = index + 1;
              const isLocked = isPremiumLocked;

              return (
                <View key={sessionNumber} className="flex-row justify-between mb-4">
                  {/* Practice Box */}
                  <TouchableOpacity
                    onPress={isLocked ? handleLockedPress : () => handleModePress('Paper 1', 'practice')}
                    disabled={fetchingQuestions}
                    activeOpacity={0.7}
                    className="flex-1 mr-2"
                  >
                    <View style={{ position: 'relative' }}>
                      <LinearGradient
                        colors={['#06b6d4', '#0891b2']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        className="p-4 shadow-lg"
                        style={{
                          borderRadius: 20,
                          shadowColor: '#06b6d4',
                          shadowOffset: { width: 0, height: 4 },
                          shadowOpacity: 0.3,
                          shadowRadius: 8,
                          elevation: 6,
                        }}
                      >
                        {/* Icon */}
                        <View className="flex-row items-center justify-between mb-2">
                          <View className="bg-white/20 rounded-full p-2">
                            <Ionicons name="pencil" size={20} color="white" />
                          </View>
                          <View className="bg-white/25 rounded-full px-3 py-1">
                            <Text className="text-white text-xs font-bold">30Q</Text>
                          </View>
                        </View>

                        {/* Title */}
                        <Text className="text-white font-bold text-lg mb-1">
                          Practice-{sessionNumber}
                        </Text>

                        {/* Subtitle */}
                        <View className="flex-row items-center">
                          <Ionicons name="checkmark-circle" size={14} color="rgba(255,255,255,0.8)" />
                          <Text className="text-white/80 text-xs ml-1">
                            Instant Feedback
                          </Text>
                        </View>
                      </LinearGradient>

                      {/* Lock Icon Overlay */}
                      {isLocked && (
                        <View
                          style={{
                            position: 'absolute',
                            bottom: 8,
                            right: 8,
                            backgroundColor: 'rgba(0, 0, 0, 0.6)',
                            borderRadius: 12,
                            width: 24,
                            height: 24,
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Ionicons name="lock-closed" size={14} color="#fbbf24" />
                        </View>
                      )}
                    </View>
                  </TouchableOpacity>

                  {/* Test Box */}
                  <TouchableOpacity
                    onPress={isLocked ? handleLockedPress : () => handleModePress('Paper 1', 'test')}
                    disabled={fetchingQuestions}
                    activeOpacity={0.7}
                    className="flex-1 ml-2"
                  >
                    <View style={{ position: 'relative' }}>
                      <LinearGradient
                        colors={['#8b5cf6', '#7c3aed']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        className="p-4 shadow-lg"
                        style={{
                          borderRadius: 20,
                          shadowColor: '#8b5cf6',
                          shadowOffset: { width: 0, height: 4 },
                          shadowOpacity: 0.3,
                          shadowRadius: 8,
                          elevation: 6,
                        }}
                      >
                        {/* Icon */}
                        <View className="flex-row items-center justify-between mb-2">
                          <View className="bg-white/20 rounded-full p-2">
                            <Ionicons name="timer" size={20} color="white" />
                          </View>
                          <View className="bg-white/25 rounded-full px-3 py-1">
                            <Text className="text-white text-xs font-bold">30Q</Text>
                          </View>
                        </View>

                        {/* Title */}
                        <Text className="text-white font-bold text-lg mb-1">
                          Test-{sessionNumber}
                        </Text>

                        {/* Subtitle */}
                        <View className="flex-row items-center">
                          <Ionicons name="trophy" size={14} color="rgba(255,255,255,0.8)" />
                          <Text className="text-white/80 text-xs ml-1">
                            Timed Challenge
                          </Text>
                        </View>
                      </LinearGradient>

                      {/* Lock Icon Overlay */}
                      {isLocked && (
                        <View
                          style={{
                            position: 'absolute',
                            bottom: 8,
                            right: 8,
                            backgroundColor: 'rgba(0, 0, 0, 0.6)',
                            borderRadius: 12,
                            width: 24,
                            height: 24,
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Ionicons name="lock-closed" size={14} color="#fbbf24" />
                        </View>
                      )}
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>

          {fetchingQuestions && (
            <View className="mt-4 bg-blue-50 p-4 rounded-xl mb-20">
              <ActivityIndicator size="small" color="#3b82f6" />
              <Text className="text-blue-600 text-center mt-2 text-sm">
                Fetching questions...
              </Text>
            </View>
          )}
        </View>
      </ScrollView>

      {/* Floating Back Button - Bottom Right */}
      <View className="absolute bottom-8 right-6" style={{ zIndex: 1000 }}>
        <TouchableOpacity
          onPress={() => router.back()}
          activeOpacity={0.8}
          style={{
            width: 56,
            height: 56,
            borderRadius: 28,
            backgroundColor: 'rgba(156, 163, 175, 0.3)',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: 'rgba(255, 255, 255, 0.4)',
          }}
        >
          <Ionicons name="chevron-back" size={28} color="#000000" />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
