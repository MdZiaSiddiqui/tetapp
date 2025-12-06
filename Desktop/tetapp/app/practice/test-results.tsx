import { useState, useCallback, useRef, useMemo, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
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
  markedForReview?: boolean;
  originalIndex: number;
}

export default function TestResults() {
  const params = useLocalSearchParams();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [filter, setFilter] = useState<'all' | 'correct' | 'incorrect'>('all');
  const scrollViewRef = useRef<ScrollView>(null);
  const questionSectionY = useRef<number>(0);

  // Gesture animation values - must be called before any conditional returns
  const translateX = useSharedValue(0);

  // Animated style for content - must be called before any conditional returns
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  // Parse params (safe to do even if params is empty)
  const totalQuestions = parseInt(params?.totalQuestions as string) || 0;
  const answeredCount = parseInt(params?.answeredCount as string) || 0;
  const correctCount = parseInt(params?.correctCount as string) || 0;
  const incorrectCount = parseInt(params?.incorrectCount as string) || 0;
  const skippedCount = parseInt(params?.skippedCount as string) || 0;
  const accuracy = totalQuestions > 0 ? (correctCount / totalQuestions) * 100 : 0;

  // Check if subject is Urdu (RTL language)
  const subjectId = params?.subjectId as string | undefined;
  const subjectName = params?.subjectName as string | undefined;
  const isUrduSubject = subjectId?.toLowerCase() === 'urdu' || subjectName?.toLowerCase() === 'urdu';

  // Parse questions data
  const questionsData: Question[] = useMemo(() => {
    try {
      if (!params?.questions) {
        return [];
      }
      const rawParam = params.questions as string;
      const parsed = JSON.parse(rawParam);
      if (!Array.isArray(parsed)) {
        console.error('[test-results] Parsed questions is not an array:', typeof parsed);
        return [];
      }
      return parsed;
    } catch (error) {
      console.error('[test-results] Error parsing questions:', error);
      return [];
    }
  }, [params?.questions]);

  // Parse answers data
  const answersData: Record<string, string> = useMemo(() => {
    try {
      if (!params?.answers) return {};
      return JSON.parse(params.answers as string);
    } catch (error) {
      console.error('[test-results] Error parsing answers:', error);
      return {};
    }
  }, [params?.answers]);

  // Parse marked for review data (array of question indices)
  const markedForReviewData: Set<number> = useMemo(() => {
    try {
      if (!params?.markedForReview) return new Set();
      const parsed = JSON.parse(params.markedForReview as string);
      return new Set(Array.isArray(parsed) ? parsed.map(Number) : []);
    } catch (error) {
      console.error('[test-results] Error parsing markedForReview:', error);
      return new Set();
    }
  }, [params?.markedForReview]);

  // Create questions with answers
  const questionsWithAnswers: QuestionWithAnswer[] = useMemo(() => {
    return questionsData.map((question, index) => {
      const userAnswerKey = answersData[index]; // This is "A", "B", "C", or "D"

      // Convert option key to option text for comparison
      const optionsArray = Array.isArray(question.options) ? question.options : [];
      const optionsMap = optionsArray.reduce((acc, option, idx) => {
        const key = String.fromCharCode(65 + idx); // A, B, C, D
        acc[key] = option;
        return acc;
      }, {} as Record<string, string>);

      const userAnswerText = userAnswerKey ? optionsMap[userAnswerKey] : undefined;
      // Use trimmed comparison to avoid whitespace issues
      const isCorrect = userAnswerText?.trim() === question.correct_answer?.trim();
      const status = !userAnswerKey ? 'unanswered' : isCorrect ? 'correct' : 'incorrect';
      const markedForReview = markedForReviewData.has(index);

      return {
        ...question,
        userAnswer: userAnswerKey, // Keep as key for display purposes
        isCorrect,
        status,
        markedForReview,
        originalIndex: index,
      };
    });
  }, [questionsData, answersData, markedForReviewData]);

  // Filter questions based on selected filter
  const filteredQuestions = useMemo(() => {
    if (filter === 'all') return questionsWithAnswers;
    if (filter === 'correct') return questionsWithAnswers.filter(q => q.status === 'correct');
    return questionsWithAnswers.filter(q => q.status === 'incorrect' || q.status === 'unanswered');
  }, [questionsWithAnswers, filter]);

  // Count questions by status for filter badges
  const correctQuestionsCount = questionsWithAnswers.filter(q => q.status === 'correct').length;
  const incorrectQuestionsCount = questionsWithAnswers.filter(q => q.status === 'incorrect' || q.status === 'unanswered').length;

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

  // Defensive check for navigation context - show loading if params not ready
  if (!params || Object.keys(params).length === 0) {
    return (
      <View className="flex-1 items-center justify-center bg-purple-50">
        <ActivityIndicator size="large" color="#7c3aed" />
        <Text className="mt-4 text-gray-600">Loading results...</Text>
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

        <ScrollView ref={scrollViewRef} className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="px-6 pt-16 pb-6">
            {/* Stats Summary */}
            <View className="items-center mb-8">
              <Text className="text-6xl mb-4">🎉</Text>
              <Text className="text-3xl font-bold text-gray-800 mb-2">
                Test Complete!
              </Text>
            </View>

            {/* Score Card */}
            <View className="bg-white p-6 rounded-3xl mb-6 shadow-sm border border-gray-100">
              <View className="flex-row justify-around mb-6 pb-4 border-b border-gray-100">
                <View className="items-center flex-1">
                  <Text className="text-sm font-semibold text-gray-600 mb-2">
                    Score
                  </Text>
                  <Text className="text-4xl font-bold text-purple-700">
                    {correctCount}/{totalQuestions}
                  </Text>
                </View>

                <View className="items-center flex-1">
                  <Text className="text-sm font-semibold text-gray-600 mb-2">
                    Percentage
                  </Text>
                  <Text className="text-4xl font-bold text-purple-700">
                    {accuracy.toFixed(0)}%
                  </Text>
                </View>
              </View>

              <View className="flex-row justify-around">
                <View className="items-center flex-1">
                  <Text className="text-sm font-semibold text-gray-600 mb-2">
                    Correct
                  </Text>
                  <Text className="text-4xl font-bold text-purple-700">
                    {correctCount}
                  </Text>
                </View>
                <View className="items-center flex-1">
                  <Text className="text-sm font-semibold text-gray-600 mb-2">
                    Incorrect
                  </Text>
                  <Text className="text-4xl font-bold text-purple-700">
                    {incorrectCount}
                  </Text>
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

            {/* Single Question Display with Swipe */}
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

            // Determine border color based on status
            const borderColor = isCorrect ? 'border-emerald-500' : 'border-rose-500';

            // Debug log to check data format
            console.log('[test-results] Question data:', {
              userAnswerKey: currentQuestion.userAnswer,
              correctAnswerText: currentQuestion.correct_answer,
              status: currentQuestion.status,
              isCorrect: currentQuestion.isCorrect,
            });

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

                  {/* Options - Show selected answer, then correct answer, then explanation */}
                  <View className="mb-4">
                    {(() => {
                      // Find the correct option key by matching text
                      const correctOptionKey = currentQuestion.options.findIndex(
                        (opt) => opt.trim() === currentQuestion.correct_answer.trim()
                      );
                      const correctKey = correctOptionKey >= 0 ? String.fromCharCode(65 + correctOptionKey) : '';

                      // Build array of options to show: user's answer first (if wrong), then correct answer
                      const optionsToShow: Array<{ key: string; option: string; isUserAnswer: boolean; isCorrect: boolean; isSkipped?: boolean }> = [];

                      // If user skipped the question, show "Your Answer (Skipped)" first
                      if (isSkipped) {
                        optionsToShow.push({
                          key: '-',
                          option: 'No answer selected',
                          isUserAnswer: true,
                          isCorrect: false,
                          isSkipped: true,
                        });
                      }
                      // If user answered and it's wrong, show their answer first (in red)
                      else if (currentQuestion.userAnswer && currentQuestion.userAnswer !== correctKey) {
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

                      // Always show correct answer (in green)
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
                          // Correct answer is always green
                          textColor = '#047857';
                          labelBgColor = 'bg-emerald-500';
                          labelTextColor = 'text-white';
                          labelText = item.isUserAnswer ? 'Your Answer (Correct)' : 'Correct Answer';
                        } else if (item.isSkipped) {
                          // Skipped question is red
                          textColor = '#9CA3AF';
                          labelBgColor = 'bg-rose-500';
                          labelTextColor = 'text-white';
                          labelText = 'Your Answer (Skipped)';
                        } else if (item.isUserAnswer) {
                          // Wrong chosen answer is red
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
