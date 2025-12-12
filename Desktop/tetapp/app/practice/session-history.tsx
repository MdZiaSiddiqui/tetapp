import { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { GestureDetector, Gesture, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  runOnJS,
} from 'react-native-reanimated';
import MathText from '../../components/MathText';
import getQuestionExplanation from '../../lib/utils/getQuestionExplanation';
import { useSessionById } from '../../hooks/useSessionStats';

const SCREEN_WIDTH = Dimensions.get('window').width;

interface Question {
  id: string;
  question: string;
  difficulty: string;
  options: string[];
  correct_answer: string;
  solutions?: string | null;
  explanation?: string | null;
  solution?: string | null;
  answerExplanation?: string | null;
  answer_explanation?: string | null;
  detailedSolution?: string | null;
  detailed_solution?: string | null;
  image_url: string | null;
  tag: string | null;
  question_number?: number;
  filters?: {
    [key: string]: any;
  };
}

interface QuestionWithAnswer extends Question {
  userAnswer?: string;
  isCorrect?: boolean;
  status: 'correct' | 'incorrect' | 'unanswered';
  originalIndex: number;
}

export default function SessionHistory() {
  const params = useLocalSearchParams();
  const router = useRouter();
  const sessionId = params.sessionId as string;
  const subjectId = params.subjectId as string;
  const subjectName = params.subjectName as string;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [filter, setFilter] = useState<'all' | 'correct' | 'incorrect'>('all');
  const scrollViewRef = useRef<ScrollView>(null);
  const questionSectionY = useRef<number>(0);

  // Gesture animation values
  const translateX = useSharedValue(0);

  // Animated style for content
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  // Fetch the session data
  const { data: session, isLoading, error } = useSessionById(sessionId, !!sessionId);

  // Check if subject is Urdu (RTL language)
  const isUrduSubject = subjectId?.toLowerCase() === 'urdu' || subjectName?.toLowerCase() === 'urdu';

  // Parse questions and answers from session
  const questionsWithAnswers: QuestionWithAnswer[] = useMemo(() => {
    if (!session) return [];

    const questions = session.questions as Question[];
    const answers = session.answers as Record<string, string>;

    return questions.map((question, index) => {
      const userAnswerKey = answers[index.toString()];

      // Convert option key to option text for comparison
      const optionsArray = Array.isArray(question.options) ? question.options : [];
      const optionsMap = optionsArray.reduce((acc, option, idx) => {
        const key = String.fromCharCode(65 + idx); // A, B, C, D
        acc[key] = option;
        return acc;
      }, {} as Record<string, string>);

      const userAnswerText = userAnswerKey ? optionsMap[userAnswerKey] : undefined;
      const isCorrect = userAnswerText?.trim() === question.correct_answer?.trim();
      const status = !userAnswerKey ? 'unanswered' : isCorrect ? 'correct' : 'incorrect';

      return {
        ...question,
        userAnswer: userAnswerKey,
        isCorrect,
        status,
        originalIndex: index,
      };
    });
  }, [session]);

  // Filter questions based on selected filter
  const filteredQuestions = useMemo(() => {
    if (filter === 'all') return questionsWithAnswers;
    if (filter === 'correct') return questionsWithAnswers.filter(q => q.status === 'correct');
    return questionsWithAnswers.filter(q => q.status === 'incorrect' || q.status === 'unanswered');
  }, [questionsWithAnswers, filter]);

  // Reset to first question when filter changes
  useEffect(() => {
    setCurrentQuestionIndex(0);
  }, [filter]);

  // Get current question from filtered list
  const currentQuestion = filteredQuestions[currentQuestionIndex];

  // Scroll to question section
  const scrollToQuestion = useCallback(() => {
    scrollViewRef.current?.scrollTo({
      y: questionSectionY.current,
      animated: true,
    });
  }, []);

  // Navigation handlers
  const handleNext = useCallback(() => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      scrollToQuestion();
    }
  }, [currentQuestionIndex, filteredQuestions.length, scrollToQuestion]);

  const handlePrevious = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      scrollToQuestion();
    }
  }, [currentQuestionIndex, scrollToQuestion]);

  // Swipe gesture handlers
  const handleSwipeNext = useCallback(() => {
    handleNext();
  }, [handleNext]);

  const handleSwipePrevious = useCallback(() => {
    handlePrevious();
  }, [handlePrevious]);

  // Pan gesture for swipe navigation
  const panGesture = useMemo(() => Gesture.Pan()
    .activeOffsetX([-10, 10])
    .failOffsetY([-15, 15])
    .onUpdate((event) => {
      const canSwipeLeft = currentQuestionIndex < filteredQuestions.length - 1;
      const canSwipeRight = currentQuestionIndex > 0;

      if (event.translationX < 0 && !canSwipeLeft) {
        translateX.value = event.translationX * 0.2;
        return;
      }
      if (event.translationX > 0 && !canSwipeRight) {
        translateX.value = event.translationX * 0.2;
        return;
      }

      translateX.value = event.translationX;
    })
    .onEnd((event) => {
      const swipeThreshold = SCREEN_WIDTH * 0.12;
      const velocityThreshold = 500;

      const shouldSwipeLeft = (event.translationX < -swipeThreshold || event.velocityX < -velocityThreshold) && currentQuestionIndex < filteredQuestions.length - 1;
      const shouldSwipeRight = (event.translationX > swipeThreshold || event.velocityX > velocityThreshold) && currentQuestionIndex > 0;

      if (shouldSwipeLeft) {
        translateX.value = withTiming(-SCREEN_WIDTH, {
          duration: 200,
        }, (finished) => {
          'worklet';
          if (finished) {
            runOnJS(handleSwipeNext)();
            translateX.value = 0;
          }
        });
      } else if (shouldSwipeRight) {
        translateX.value = withTiming(SCREEN_WIDTH, {
          duration: 200,
        }, (finished) => {
          'worklet';
          if (finished) {
            runOnJS(handleSwipePrevious)();
            translateX.value = 0;
          }
        });
      } else {
        translateX.value = withSpring(0, {
          damping: 20,
          stiffness: 300,
        });
      }
    }), [currentQuestionIndex, filteredQuestions.length, handleSwipeNext, handleSwipePrevious]);

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  // Loading state
  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center bg-purple-50">
        <ActivityIndicator size="large" color="#7c3aed" />
        <Text className="mt-4 text-gray-600">Loading session...</Text>
      </View>
    );
  }

  // Error state
  if (error || !session) {
    return (
      <View className="flex-1 items-center justify-center bg-purple-50 px-6">
        <Ionicons name="alert-circle-outline" size={48} color="#DC2626" />
        <Text className="text-gray-700 text-center mt-4">
          Failed to load session. Please try again.
        </Text>
        <TouchableOpacity
          onPress={() => router.back()}
          className="mt-6 bg-purple-600 px-6 py-3 rounded-xl"
          activeOpacity={0.7}
        >
          <Text className="text-white font-semibold">Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <LinearGradient
        colors={['#faf5ff', '#f3e8ff', '#ede9fe']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        className="flex-1"
      >
        <StatusBar style="dark" />

        {/* Header */}
        <View className="px-6 pt-16 pb-4">
          <View className="flex-row items-center">
            <TouchableOpacity
              onPress={() => router.back()}
              className="mr-3"
              activeOpacity={0.7}
            >
              <Ionicons name="chevron-back" size={28} color="#374151" />
            </TouchableOpacity>
            <View className="flex-1">
              <Text className="text-lg font-bold text-gray-800">
                {session.mode === 'practice' ? 'Practice' : 'Test'}-{session.session_number}
              </Text>
              <Text className="text-sm text-gray-500">
                {subjectName} - {formatDate(session.completed_at)}
              </Text>
            </View>
          </View>
        </View>

        <ScrollView ref={scrollViewRef} className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="px-6 pb-6">
            {/* Score Card */}
            <View className="bg-white p-6 rounded-3xl mb-6 shadow-sm border border-gray-100">
              <View className="flex-row justify-around mb-6 pb-4 border-b border-gray-100">
                <View className="items-center flex-1">
                  <Text className="text-sm font-semibold text-gray-600 mb-2">
                    Score
                  </Text>
                  <Text className="text-4xl font-bold text-purple-700">
                    {session.correct_count}/{session.total_questions}
                  </Text>
                </View>

                <View className="items-center flex-1">
                  <Text className="text-sm font-semibold text-gray-600 mb-2">
                    Percentage
                  </Text>
                  <Text className="text-4xl font-bold text-purple-700">
                    {session.accuracy.toFixed(0)}%
                  </Text>
                </View>
              </View>

              <View className="flex-row justify-around">
                <View className="items-center flex-1">
                  <Text className="text-3xl font-bold text-green-500">
                    {session.correct_count}
                  </Text>
                  <Text className="text-gray-600 text-xs mt-1 font-medium">Correct</Text>
                </View>

                <View className="w-px bg-gray-200" />

                <View className="items-center flex-1">
                  <Text className="text-3xl font-bold text-red-500">
                    {session.incorrect_count}
                  </Text>
                  <Text className="text-gray-600 text-xs mt-1 font-medium">Incorrect</Text>
                </View>

                <View className="w-px bg-gray-200" />

                <View className="items-center flex-1">
                  <Text className="text-3xl font-bold text-yellow-500">
                    {session.skipped_count}
                  </Text>
                  <Text className="text-gray-600 text-xs mt-1 font-medium">Skipped</Text>
                </View>
              </View>
            </View>

            {/* Question Review Section */}
            <View
              className="mb-4"
              onLayout={(event) => {
                questionSectionY.current = event.nativeEvent.layout.y;
              }}
            >
              <Text className="text-2xl font-bold text-gray-800">
                Question Review
              </Text>
            </View>

            {/* Filter Toggle */}
            <View className="flex-row mb-4 gap-2">
              <TouchableOpacity
                onPress={() => setFilter('all')}
                className={`flex-1 py-2 px-3 rounded-full ${
                  filter === 'all' ? 'bg-purple-600' : 'bg-white border border-gray-300'
                }`}
                activeOpacity={0.7}
              >
                <Text className={`text-center font-semibold ${
                  filter === 'all' ? 'text-white' : 'text-gray-700'
                }`}>
                  All
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setFilter('correct')}
                className={`flex-1 py-2 px-3 rounded-full ${
                  filter === 'correct' ? 'bg-emerald-600' : 'bg-white border border-gray-300'
                }`}
                activeOpacity={0.7}
              >
                <Text className={`text-center font-semibold ${
                  filter === 'correct' ? 'text-white' : 'text-gray-700'
                }`}>
                  Correct
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setFilter('incorrect')}
                className={`flex-1 py-2 px-3 rounded-full ${
                  filter === 'incorrect' ? 'bg-rose-600' : 'bg-white border border-gray-300'
                }`}
                activeOpacity={0.7}
              >
                <Text className={`text-center font-semibold ${
                  filter === 'incorrect' ? 'text-white' : 'text-gray-700'
                }`}>
                  Incorrect
                </Text>
              </TouchableOpacity>
            </View>

            {/* Question Display with Swipe */}
            {filteredQuestions.length === 0 ? (
              <View className="bg-white p-8 rounded-2xl items-center mb-6">
                <Ionicons name="search-outline" size={48} color="#9CA3AF" />
                <Text className="text-gray-500 text-center mt-4 text-lg">
                  No {filter === 'correct' ? 'correct' : 'incorrect'} answers to review
                </Text>
              </View>
            ) : (
              <GestureDetector gesture={panGesture}>
                <Animated.View style={animatedStyle}>
                  {currentQuestion && (() => {
                    const isCorrect = currentQuestion.status === 'correct';
                    const isSkipped = currentQuestion.status === 'unanswered';
                    const explanation = getQuestionExplanation(currentQuestion);
                    const borderColor = isCorrect ? 'border-emerald-500' : 'border-rose-500';

                    return (
                      <View className={`mb-6 border ${borderColor} rounded-2xl overflow-hidden`}>
                        {/* Question Header */}
                        <View className="bg-white p-4 border-b border-gray-200">
                          <Text className="text-lg font-bold text-gray-800">
                            Question {currentQuestion.originalIndex + 1}
                            {filter !== 'all' && (
                              <Text className="text-sm font-normal text-gray-500">
                                {' '}({currentQuestionIndex + 1} of {filteredQuestions.length})
                              </Text>
                            )}
                          </Text>
                        </View>

                        {/* Question Content */}
                        <View className="bg-white p-4">
                          {currentQuestion.image_url && (
                            <Image
                              source={{ uri: currentQuestion.image_url }}
                              className="w-full h-48 rounded-xl mb-4"
                              resizeMode="contain"
                            />
                          )}
                          <View className="mb-4">
                            <MathText
                              text={currentQuestion.question}
                              fontSize="medium"
                              color="#111827"
                              isRTL={isUrduSubject}
                            />
                          </View>

                          {/* Options */}
                          <View className="mb-4">
                            {(() => {
                              const correctOptionKey = currentQuestion.options.findIndex(
                                (opt) => opt.trim() === currentQuestion.correct_answer.trim()
                              );
                              const correctKey = correctOptionKey >= 0 ? String.fromCharCode(65 + correctOptionKey) : '';

                              const optionsToShow: Array<{ key: string; option: string; isUserAnswer: boolean; isCorrect: boolean; isSkipped?: boolean }> = [];

                              if (isSkipped) {
                                optionsToShow.push({
                                  key: '-',
                                  option: 'No answer selected',
                                  isUserAnswer: true,
                                  isCorrect: false,
                                  isSkipped: true,
                                });
                              } else if (currentQuestion.userAnswer && currentQuestion.userAnswer !== correctKey) {
                                const userOptionIdx = currentQuestion.userAnswer.charCodeAt(0) - 65;
                                if (userOptionIdx >= 0 && userOptionIdx < currentQuestion.options.length) {
                                  optionsToShow.push({
                                    key: currentQuestion.userAnswer,
                                    option: currentQuestion.options[userOptionIdx],
                                    isUserAnswer: true,
                                    isCorrect: false,
                                  });
                                }
                              }

                              if (correctOptionKey >= 0) {
                                optionsToShow.push({
                                  key: correctKey,
                                  option: currentQuestion.options[correctOptionKey],
                                  isUserAnswer: currentQuestion.userAnswer === correctKey,
                                  isCorrect: true,
                                });
                              }

                              return optionsToShow.map((item, displayIdx) => {
                                let textColor = '#374151';
                                let labelBgColor = 'bg-gray-300';
                                let labelTextColor = 'text-gray-700';
                                let labelText = '';

                                if (item.isCorrect) {
                                  textColor = '#047857';
                                  labelBgColor = 'bg-emerald-500';
                                  labelTextColor = 'text-white';
                                  labelText = item.isUserAnswer ? 'Your Answer (Correct)' : 'Correct Answer';
                                } else if (item.isSkipped) {
                                  textColor = '#9CA3AF';
                                  labelBgColor = 'bg-rose-500';
                                  labelTextColor = 'text-white';
                                  labelText = 'Your Answer (Skipped)';
                                } else if (item.isUserAnswer) {
                                  textColor = '#DC2626';
                                  labelBgColor = 'bg-rose-500';
                                  labelTextColor = 'text-white';
                                  labelText = 'Your Answer (Wrong)';
                                }

                                return (
                                  <View key={displayIdx} className="mb-3">
                                    <Text className={`text-xs font-semibold mb-1 ${item.isCorrect ? 'text-emerald-600' : 'text-rose-600'} ${isUrduSubject ? 'text-right' : ''}`}>
                                      {labelText}
                                    </Text>
                                    <View
                                      className={`flex-row items-start ${isUrduSubject ? 'flex-row-reverse' : ''}`}
                                    >
                                      <View className={isUrduSubject ? 'ml-3 mt-0.5' : 'mr-3 mt-0.5'}>
                                        <View className={`w-7 h-7 rounded-full items-center justify-center ${labelBgColor}`}>
                                          <Text className={`text-sm font-bold ${labelTextColor}`}>
                                            {item.key}
                                          </Text>
                                        </View>
                                      </View>
                                      <View className="flex-1">
                                        <MathText
                                          text={item.option}
                                          fontSize="small"
                                          color={textColor}
                                          isRTL={isUrduSubject}
                                        />
                                      </View>
                                    </View>
                                  </View>
                                );
                              });
                            })()}
                          </View>

                          {/* Explanation */}
                          {explanation && (
                            <View className="bg-blue-50 p-4 rounded-xl">
                              <Text className={`text-xs font-semibold text-blue-600 mb-2 ${isUrduSubject ? 'text-right' : ''}`}>
                                EXPLANATION
                              </Text>
                              <MathText
                                text={explanation}
                                fontSize="small"
                                color="#1F2937"
                                isRTL={isUrduSubject}
                              />
                            </View>
                          )}
                        </View>
                      </View>
                    );
                  })()}
                </Animated.View>
              </GestureDetector>
            )}

            {/* Navigation Buttons */}
            {filteredQuestions.length > 0 && (
              <View className="flex-row gap-3 mb-6">
                <TouchableOpacity
                  onPress={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                  className={`flex-1 flex-row items-center justify-center py-4 rounded-xl ${
                    currentQuestionIndex === 0 ? 'bg-gray-200' : 'bg-indigo-600'
                  }`}
                  activeOpacity={0.7}
                >
                  <Ionicons
                    name="chevron-back"
                    size={24}
                    color={currentQuestionIndex === 0 ? '#9CA3AF' : 'white'}
                  />
                  <Text className={`ml-2 font-bold text-lg ${
                    currentQuestionIndex === 0 ? 'text-gray-400' : 'text-white'
                  }`}>
                    Previous
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={handleNext}
                  disabled={currentQuestionIndex === filteredQuestions.length - 1}
                  className={`flex-1 flex-row items-center justify-center py-4 rounded-xl ${
                    currentQuestionIndex === filteredQuestions.length - 1 ? 'bg-gray-200' : 'bg-indigo-600'
                  }`}
                  activeOpacity={0.7}
                >
                  <Text className={`mr-2 font-bold text-lg ${
                    currentQuestionIndex === filteredQuestions.length - 1 ? 'text-gray-400' : 'text-white'
                  }`}>
                    Next
                  </Text>
                  <Ionicons
                    name="chevron-forward"
                    size={24}
                    color={currentQuestionIndex === filteredQuestions.length - 1 ? '#9CA3AF' : 'white'}
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </ScrollView>
      </LinearGradient>
    </GestureHandlerRootView>
  );
}
