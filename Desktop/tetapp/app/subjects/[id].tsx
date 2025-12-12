import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator, Image } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState, useCallback } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { getQuestionsBySubjectAndMode } from '../../lib/api/questions';
import { getBookCover } from '../../lib/notes-data';
import { useProAccess } from '../../hooks/useProAccess';
import { useSubjectSessionStats, getSessionStatsForCard, useSessionHistory } from '../../hooks/useSessionStats';
import SessionHistoryModal from '../../components/SessionHistoryModal';
import { useQueryClient } from '@tanstack/react-query';

// Language subjects that don't need language toggle
const LANGUAGE_SUBJECTS = ['english', 'hindi', 'telugu', 'urdu'];

// Subjects that only have Paper 2 (no Paper 1)
const PAPER_2_ONLY_SUBJECTS = ['social', 'science'];

// Vertical Connector Component - always visible with card colors
const VerticalConnector = ({ type }: { type: 'practice' | 'test' }) => {
  // Colors matching the card gradients
  const baseColor = type === 'practice' ? '#06b6d4' : '#8b5cf6';
  const lightColor = type === 'practice' ? '#0891b2' : '#7c3aed';

  return (
    <View
      style={{
        position: 'absolute',
        bottom: -16,
        left: '50%',
        marginLeft: -2,
        width: 4,
        height: 16,
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Colored connector line - always visible */}
      <View
        style={{
          position: 'absolute',
          width: 4,
          height: '100%',
          backgroundColor: baseColor,
          shadowColor: baseColor,
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.6,
          shadowRadius: 8,
          elevation: 4,
        }}
      />
    </View>
  );
};

export default function SubjectDetail() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const subjectId = params.id as string;
  const subjectName = params.name as string;
  const selectedPaperParam = params.selectedPaper as string;

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

  // Session history state
  const [historyModalVisible, setHistoryModalVisible] = useState(false);
  const [selectedSession, setSelectedSession] = useState<{
    sessionNumber: number;
    mode: 'practice' | 'test';
  } | null>(null);

  // Query client for invalidating queries after navigation back
  const queryClient = useQueryClient();

  // Fetch session stats for all cards
  const { data: sessionStats, isLoading: statsLoading } = useSubjectSessionStats(subjectId);

  // Fetch history for currently selected session (for modal)
  const { data: sessionHistory, isLoading: historyLoading } = useSessionHistory(
    subjectId,
    selectedSession?.sessionNumber || 0,
    selectedSession?.mode || 'practice',
    historyModalVisible && !!selectedSession
  );

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

  // Determine which paper to use for practice/test sessions
  const currentPaper: 'Paper 1' | 'Paper 2' = showPaper2 ? 'Paper 2' : 'Paper 1';

  const handleLockedPress = () => {
    router.push('/(tabs)/pricing');
  };

  // Handle card press - show history modal if session has attempts
  const handleCardPress = (sessionNumber: number, mode: 'practice' | 'test', isLocked: boolean) => {
    if (isLocked) {
      handleLockedPress();
      return;
    }

    // Check if session has any history
    const stats = getSessionStatsForCard(sessionStats, sessionNumber, mode);
    if (stats && stats.attemptCount > 0) {
      // Show history modal
      setSelectedSession({ sessionNumber, mode });
      setHistoryModalVisible(true);
    } else {
      // No history - start new session directly
      handleModePress(currentPaper, mode, sessionNumber);
    }
  };

  // Handle starting a new session from modal
  const handleStartNew = useCallback(() => {
    if (!selectedSession) return;
    setHistoryModalVisible(false);
    handleModePress(currentPaper, selectedSession.mode, selectedSession.sessionNumber);
  }, [selectedSession, currentPaper]);

  // Handle viewing a previous attempt
  const handleViewAttempt = useCallback((attemptId: string) => {
    setHistoryModalVisible(false);
    router.push({
      pathname: '/practice/session-history',
      params: {
        sessionId: attemptId,
        subjectId,
        subjectName,
      },
    });
  }, [router, subjectId, subjectName]);

  const handleModePress = async (paper: 'Paper 1' | 'Paper 2', mode: 'practice' | 'test' | 'notes', sessionNumber: number = 1) => {
    try {
      setFetchingQuestions(true);

      // For language subjects, map subjectId to the database language field
      // For non-language subjects, use the user's selected language
      let language: 'English' | 'Telugu' | 'Urdu';
      if (isLanguageSubject) {
        // Map subjectId to database language field:
        // - Hindi, Urdu, and English subjects are stored with language='English'
        // - Telugu subject is stored with language='Telugu'
        if (subjectId === 'hindi' || subjectId === 'urdu' || subjectId === 'english') {
          language = 'English';
        } else if (subjectId === 'telugu') {
          language = 'Telugu';
        } else {
          // Fallback for unknown language subjects
          language = 'English';
        }
      } else {
        language = selectedLanguage === 'Hindi' ? 'English' : selectedLanguage;
      }

      // Determine question count: 60 for social subject, 30 for others
      const questionCount = subjectId === 'social' ? 60 : 30;

      // Fetch fixed question set for this session number
      const { data: questions, error } = await getQuestionsBySubjectAndMode(
        subjectId,
        language,
        paper,
        mode,
        questionCount,
        sessionNumber
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
            sessionNumber: sessionNumber.toString(),
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
            sessionNumber: sessionNumber.toString(),
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
            sessionNumber: sessionNumber.toString(),
          },
        });
      }
    } catch (err) {
      setFetchingQuestions(false);
      alert('Failed to fetch questions. Please try again.');
    }
  };

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
        <View className="flex-row items-center">
          {/* Back Button */}
          <TouchableOpacity
            onPress={() => router.back()}
            activeOpacity={1}
            className="mr-3"
          >
            <Ionicons name="chevron-back" size={28} color="white" />
          </TouchableOpacity>

          {/* Title */}
          <View className="flex-1">
            <Text className="text-xl font-medium text-white text-center mr-10">
              {subjectName} & Pedagogy
            </Text>
          </View>
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
                    // Map language to note suffix
                    const langSuffix = lang.toLowerCase() === 'english' || lang.toLowerCase() === 'hindi'
                      ? 'eng'
                      : lang.toLowerCase() === 'telugu'
                      ? 'tel'
                      : 'urdu';

                    const noteId = `${notePrefix}-${langSuffix}`;

                    // Free notes that don't require pro access
                    const FREE_NOTES = ['english-eng'];
                    const isFreeNote = FREE_NOTES.includes(noteId);

                    const handleNotesPress = () => {
                      // If locked and not a free note, redirect to pricing
                      if (isPremiumLocked && !isFreeNote) {
                        handleLockedPress();
                        return;
                      }

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
                        activeOpacity={1}
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

                          {/* Lock Icon Overlay - don't show for free notes */}
                          {isPremiumLocked && !isFreeNote && (
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

                          {/* FREE badge for free notes */}
                          {isFreeNote && (
                            <View
                              style={{
                                position: 'absolute',
                                top: 8,
                                right: 8,
                                backgroundColor: '#10b981',
                                borderRadius: 8,
                                paddingHorizontal: 8,
                                paddingVertical: 4,
                              }}
                            >
                              <Text style={{ color: 'white', fontSize: 10, fontWeight: '700' }}>FREE</Text>
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
                    activeOpacity={1}
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
              // First practice and test session (Practice-1 and Test-1) are always unlocked
              const isLocked = sessionNumber === 1 ? false : isPremiumLocked;
              const isLastItem = index === 49; // Check if this is the last item
              const questionBadge = subjectId === 'social' ? '60Q' : '30Q'; // Dynamic badge based on subject

              // Get session stats for history indicators
              const practiceStats = getSessionStatsForCard(sessionStats, sessionNumber, 'practice');
              const testStats = getSessionStatsForCard(sessionStats, sessionNumber, 'test');

              return (
                <View key={sessionNumber} className="mb-4">
                  <View className="flex-row justify-between">
                  {/* Practice Box */}
                  <TouchableOpacity
                    onPress={() => handleCardPress(sessionNumber, 'practice', isLocked)}
                    disabled={fetchingQuestions}
                    activeOpacity={1}
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
                            <Text className="text-white text-xs font-bold">{questionBadge}</Text>
                          </View>
                        </View>

                        {/* Title */}
                        <Text className="text-white font-bold text-lg mb-1">
                          Practice-{sessionNumber}
                        </Text>

                        {/* Subtitle - Show history if exists, otherwise show default */}
                        {practiceStats && practiceStats.attemptCount > 0 ? (
                          <View className="flex-row items-center">
                            <Ionicons name="trophy" size={14} color="rgba(255,255,255,0.9)" />
                            <Text className="text-white/90 text-xs ml-1 font-medium">
                              Best: {practiceStats.bestAccuracy.toFixed(0)}% ({practiceStats.attemptCount} {practiceStats.attemptCount === 1 ? 'try' : 'tries'})
                            </Text>
                          </View>
                        ) : (
                          <View className="flex-row items-center">
                            <Ionicons name="checkmark-circle" size={14} color="rgba(255,255,255,0.8)" />
                            <Text className="text-white/80 text-xs ml-1">
                              Instant Feedback
                            </Text>
                          </View>
                        )}
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

                      {/* Vertical Connector - Practice to Practice */}
                      {!isLastItem && <VerticalConnector type="practice" />}
                    </View>
                  </TouchableOpacity>

                  {/* Test Box */}
                  <TouchableOpacity
                    onPress={() => handleCardPress(sessionNumber, 'test', isLocked)}
                    disabled={fetchingQuestions}
                    activeOpacity={1}
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
                            <Text className="text-white text-xs font-bold">{questionBadge}</Text>
                          </View>
                        </View>

                        {/* Title */}
                        <Text className="text-white font-bold text-lg mb-1">
                          Test-{sessionNumber}
                        </Text>

                        {/* Subtitle - Show history if exists, otherwise show default */}
                        {testStats && testStats.attemptCount > 0 ? (
                          <View className="flex-row items-center">
                            <Ionicons name="trophy" size={14} color="rgba(255,255,255,0.9)" />
                            <Text className="text-white/90 text-xs ml-1 font-medium">
                              Best: {testStats.bestAccuracy.toFixed(0)}% ({testStats.attemptCount} {testStats.attemptCount === 1 ? 'try' : 'tries'})
                            </Text>
                          </View>
                        ) : (
                          <View className="flex-row items-center">
                            <Ionicons name="time-outline" size={14} color="rgba(255,255,255,0.8)" />
                            <Text className="text-white/80 text-xs ml-1">
                              Timed Challenge
                            </Text>
                          </View>
                        )}
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

                      {/* Vertical Connector - Test to Test */}
                      {!isLastItem && <VerticalConnector type="test" />}
                    </View>
                  </TouchableOpacity>
                  </View>
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

      {/* Session History Modal */}
      <SessionHistoryModal
        visible={historyModalVisible}
        onClose={() => {
          setHistoryModalVisible(false);
          setSelectedSession(null);
        }}
        sessionNumber={selectedSession?.sessionNumber || 0}
        mode={selectedSession?.mode || 'practice'}
        subjectName={subjectName}
        attempts={(sessionHistory || []).map((session: any) => ({
          id: session.id,
          completed_at: session.completed_at,
          accuracy: session.accuracy,
          correct_count: session.correct_count,
          total_questions: session.total_questions,
          time_taken_seconds: session.time_taken_seconds,
        }))}
        loading={historyLoading}
        onStartNew={handleStartNew}
        onViewAttempt={handleViewAttempt}
      />
    </LinearGradient>
  );
}
