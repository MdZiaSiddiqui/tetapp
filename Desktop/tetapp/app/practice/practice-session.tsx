import { useState, useEffect, useCallback, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,
  Dimensions,
  Vibration,
  BackHandler,
} from 'react-native';
import { useRouter, useLocalSearchParams, useFocusEffect } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../lib/auth-context';
import { useProAccess } from '../../hooks/useProAccess';
import UpgradePrompt from '../../components/premium/UpgradePrompt';
import ExitConfirmationModal from '../../components/ExitConfirmationModal';
import LoadingBar from '../../components/LoadingBar';
import { GestureDetector, Gesture, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  runOnJS,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated';
import { HomeShape, InvertedHomeShape } from '../../components/PentagonShapes';
import { Ionicons } from '@expo/vector-icons';
import MathText from '../../components/MathText';
import getQuestionExplanation from '../../lib/utils/getQuestionExplanation';
import { LinearGradient } from 'expo-linear-gradient';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const SWIPE_THRESHOLD = 50; // Optimized threshold for smooth gestures
const SWIPE_VELOCITY_THRESHOLD = 500; // Velocity-based threshold

interface Question {
  id: string;
  question: string;
  difficulty: string;
  options: string[];
  correct_answer: string;
  solutions?: string | null;
  explanation?: string | null;  // Added: Some data sources use 'explanation' instead of 'solutions'
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

interface AnsweredQuestion {
  questionId: string;
  answer: string;
  timeSpent: number;
  isCorrect: boolean;
}

export default function PracticeSession() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const { hasPaper1Access, hasPaper2Access, loading: proLoading } = useProAccess();

  // Determine which paper access to check based on params
  const paperParam = params.paper as string | undefined;
  const isPaper1 = paperParam?.includes('Paper 1') || paperParam?.includes('Paper-1');
  const isPaper2 = paperParam?.includes('Paper 2') || paperParam?.includes('Paper-2');
  const sessionNumber = params.sessionNumber ? parseInt(params.sessionNumber as string) : 1;
  // Session 1 is always free, others require premium access
  const hasRequiredAccess = sessionNumber === 1 ? true : (isPaper2 ? hasPaper2Access : hasPaper1Access);
  const requiredTier = isPaper2 ? 'paper2' : 'paper1';

  // Check if subject is Urdu (RTL language)
  const subjectId = params.subjectId as string | undefined;
  const subjectName = params.subjectName as string | undefined;
  const isUrduSubject = subjectId?.toLowerCase() === 'urdu' || subjectName?.toLowerCase() === 'urdu';

  // Session state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answeredQuestions, setAnsweredQuestions] = useState<AnsweredQuestion[]>([]);
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());
  const [showExplanation, setShowExplanation] = useState(false);
  // Store selected answers and explanation state for each question index
  const [questionAnswers, setQuestionAnswers] = useState<{ [key: number]: string }>({});
  const [questionExplanations, setQuestionExplanations] = useState<{ [key: number]: boolean }>({});
  // Font size control
  const [fontSize, setFontSize] = useState<'xs' | 'small' | 'medium' | 'large' | 'xl' | '2xl' | '3xl'>('medium');
  // Explanation position: 'inline' = between options (current), 'bottom' = after all options
  const [explanationPosition, setExplanationPosition] = useState<'inline' | 'bottom'>('inline');
  // Exit confirmation modal
  const [showExitModal, setShowExitModal] = useState(false);

  // ScrollView ref for scrolling to top
  const scrollViewRef = useRef<ScrollView>(null);

  // Gesture animation values
  const translateX = useSharedValue(0);
  const opacity = useSharedValue(1);

  // Fetch questions based on params
  const { data: questions, isLoading, error } = useQuery({
    queryKey: ['practice-questions', params],
    queryFn: async () => {
      let query = supabase
        .from('questions')
        .select('*')
        .limit(parseInt(params.questionCount as string) || 10);

      // Apply filters based on params
      if (params.chapterId) {
        query = query.eq('chapter_id', params.chapterId);
      } else if (params.subjectId) {
        query = query.eq('subject_id', params.subjectId);
      } else if (params.subjectIds) {
        const subjectIds = (params.subjectIds as string).split(',');
        query = query.in('subject_id', subjectIds);
      }

      if (params.language) {
        query = query.eq('language', params.language);
      }

      if (params.paper) {
        query = query.eq('paper', params.paper);
      }

      if (params.showImageOnly === 'true') {
        query = query.not('image_url', 'is', null);
      }

      const { data, error } = await query;
      if (error) throw error;

      // Shuffle questions using Fisher-Yates algorithm for randomness
      if (data && data.length > 0) {
        const shuffled = [...data];
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled as Question[];
      }

      return data as Question[];
    },
    staleTime: Infinity,
  });

  // Save attempt to database
  const saveAttemptMutation = useMutation({
    mutationFn: async (data: {
      questionId: string;
      answer: string;
      timeSpent: number;
      isCorrect: boolean;
    }) => {
      const { error } = await supabase.from('user_attempts').insert({
        user_id: user?.id!,
        question_id: data.questionId,
        selected_answer: data.answer,
        is_correct: data.isCorrect,
        time_taken: Math.floor(data.timeSpent / 1000),
        mode: 'practice',
      });

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] });
      queryClient.invalidateQueries({ queryKey: ['difficulty-stats'] });
      queryClient.invalidateQueries({ queryKey: ['subject-stats'] });
    },
  });

  // Handle answer selection - instant feedback
  const handleAnswerSelect = (answer: string) => {
    if (showExplanation || !questions) return;

    setSelectedAnswer(answer);
    // Store answer for current question
    setQuestionAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: answer,
    }));

    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswer = currentQuestion.correct_answer;

    // Convert options array to object to get the full text of selected answer
    const optionsArray = Array.isArray(currentQuestion.options) ? currentQuestion.options : [];
    const optionsMap = optionsArray.reduce((acc, option, index) => {
      const key = String.fromCharCode(65 + index); // A, B, C, D
      acc[key] = option;
      return acc;
    }, {} as Record<string, string>);

    // Compare full text of selected option with correct answer
    const selectedOptionText = optionsMap[answer];
    const isCorrect = selectedOptionText === correctAnswer;
    const timeSpent = Date.now() - questionStartTime;

    // Vibration feedback - short vibration for correct answer
    if (isCorrect) {
      Vibration.vibrate(50); // 50ms gentle vibration
    }

    // Update answered questions
    const answeredQuestion: AnsweredQuestion = {
      questionId: currentQuestion.id,
      answer: answer,
      timeSpent,
      isCorrect,
    };

    setAnsweredQuestions((prev) => [...prev, answeredQuestion]);

    // Save to database
    saveAttemptMutation.mutate({
      questionId: currentQuestion.id,
      answer: answer,
      timeSpent,
      isCorrect,
    });

    // Show explanation instantly
    setShowExplanation(true);
    // Store that explanation was shown for this question
    setQuestionExplanations((prev) => ({
      ...prev,
      [currentQuestionIndex]: true,
    }));
  };

  // Handle next question
  const handleNextQuestion = () => {
    if (!questions) return;

    if (currentQuestionIndex < questions.length - 1) {
      // Move to next question
      const nextIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextIndex);
      // Restore previously selected answer and explanation state if exists
      setSelectedAnswer(questionAnswers[nextIndex] || null);
      setShowExplanation(questionExplanations[nextIndex] || false);
      setQuestionStartTime(Date.now());
      // Scroll to top
      scrollViewRef.current?.scrollTo({ y: 0, animated: true });
    } else {
      // Finish session
      handleFinishSession();
    }
  };

  // Handle previous question
  const handlePreviousQuestion = () => {
    if (!questions || currentQuestionIndex === 0) return;

    const prevIndex = currentQuestionIndex - 1;
    setCurrentQuestionIndex(prevIndex);
    // Restore previously selected answer and explanation state if exists
    setSelectedAnswer(questionAnswers[prevIndex] || null);
    setShowExplanation(questionExplanations[prevIndex] || false);
    setQuestionStartTime(Date.now());
    // Scroll to top
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  };

  // Finish session and navigate to results
  const handleFinishSession = () => {
    if (!questions) return;

    // Calculate correct answers from questionAnswers (which tracks all answered questions)
    const correctCount = Object.entries(questionAnswers).reduce((count, [indexStr, answer]) => {
      const index = parseInt(indexStr);
      const question = questions[index];
      const correctAnswer = question.correct_answer;
      const optionsArray = Array.isArray(question.options) ? question.options : [];
      const optionsMap = optionsArray.reduce((acc, option, idx) => {
        const key = String.fromCharCode(65 + idx); // A, B, C, D
        acc[key] = option;
        return acc;
      }, {} as Record<string, string>);

      const selectedOptionText = optionsMap[answer];
      return selectedOptionText === correctAnswer ? count + 1 : count;
    }, 0);

    // answeredCount is the number of questions that have been answered (keys in questionAnswers)
    const answeredCount = Object.keys(questionAnswers).length;

    // Skipped questions count (unanswered)
    const skippedCount = questions.length - answeredCount;

    // Incorrect count includes both wrong answers and skipped questions
    const incorrectCount = (answeredCount - correctCount) + skippedCount;

    router.replace({
      pathname: '/practice/results',
      params: {
        totalQuestions: questions.length,
        answeredCount: answeredCount,
        correctCount,
        incorrectCount,
        skippedCount,
        subjectId: params.subjectId as string | undefined,
        subjectName: params.subjectName as string | undefined,
        questions: JSON.stringify(questions),
        answers: JSON.stringify(questionAnswers),
      },
    });
  };

  // Handle exit
  const handleExit = () => {
    setShowExitModal(true);
  };

  const handleConfirmExit = () => {
    setShowExitModal(false);
    router.back();
  };

  // Handle hardware back button - show exit confirmation
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        setShowExitModal(true);
        return true; // Prevent default back behavior
      };

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress
      );

      return () => subscription.remove();
    }, [])
  );

  // Handle swipe to previous question
  const handleSwipePrevious = () => {
    if (!questions || currentQuestionIndex === 0) return;

    const prevIndex = currentQuestionIndex - 1;
    setCurrentQuestionIndex(prevIndex);
    // Restore previously selected answer and explanation state if exists
    setSelectedAnswer(questionAnswers[prevIndex] || null);
    setShowExplanation(questionExplanations[prevIndex] || false);
    setQuestionStartTime(Date.now());
    // Scroll to top
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  };

  // Handle swipe to next question
  const handleSwipeNext = () => {
    if (!questions) return;
    handleNextQuestion();
  };

  // Pan gesture for swipe navigation - Optimized for smoothness
  const panGesture = Gesture.Pan()
    .activeOffsetX([-10, 10]) // Sensitive horizontal activation
    .failOffsetY([-50, 50]) // Allow vertical scrolling
    .onUpdate((event) => {
      // Allow swipe in both directions (removed explanation requirement for next)
      const canSwipeLeft = currentQuestionIndex < (questions?.length ?? 0) - 1;
      const canSwipeRight = currentQuestionIndex > 0;

      if (event.translationX < 0 && !canSwipeLeft) {
        translateX.value = event.translationX * 0.1; // Rubber band effect
        return;
      }
      if (event.translationX > 0 && !canSwipeRight) {
        translateX.value = event.translationX * 0.1; // Rubber band effect
        return;
      }

      translateX.value = event.translationX;
      // No opacity fade - keep content visible during swipe
    })
    .onEnd((event) => {
      const canSwipeLeft = currentQuestionIndex < (questions?.length ?? 0) - 1;
      const canSwipeRight = currentQuestionIndex > 0;

      // Check both distance and velocity for natural feel
      const shouldSwipeLeft = (Math.abs(event.translationX) > SWIPE_THRESHOLD || Math.abs(event.velocityX) > SWIPE_VELOCITY_THRESHOLD) && event.translationX < 0 && canSwipeLeft;
      const shouldSwipeRight = (Math.abs(event.translationX) > SWIPE_THRESHOLD || Math.abs(event.velocityX) > SWIPE_VELOCITY_THRESHOLD) && event.translationX > 0 && canSwipeRight;

      // Swipe left (next question)
      if (shouldSwipeLeft) {
        // Fast timing animation for instant transition
        translateX.value = withTiming(-SCREEN_WIDTH, {
          duration: 200,
        }, (finished) => {
          'worklet';
          if (finished) {
            runOnJS(handleSwipeNext)();
            translateX.value = 0;
          }
        });
      }
      // Swipe right (previous question)
      else if (shouldSwipeRight) {
        // Fast timing animation for instant transition
        translateX.value = withTiming(SCREEN_WIDTH, {
          duration: 200,
        }, (finished) => {
          'worklet';
          if (finished) {
            runOnJS(handleSwipePrevious)();
            translateX.value = 0;
          }
        });
      }
      // Snap back smoothly
      else {
        translateX.value = withSpring(0, {
          damping: 30,
          stiffness: 400,
          mass: 0.5,
        });
      }
    });

  // Animated style for content
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  // Pro access check - Loading state
  if (proLoading) {
    return <LoadingBar message="Loading..." />;
  }

  // Pro access check - No access
  if (!hasRequiredAccess) {
    return <UpgradePrompt tier={requiredTier} feature="Practice Mode" />;
  }

  // Loading state
  if (isLoading) {
    return (
      <View className="flex-1 bg-white justify-center items-center">
        <ActivityIndicator size="large" color="#3B82F6" />
        <Text className="text-gray-600 mt-4 text-lg">Loading questions...</Text>
      </View>
    );
  }

  // Error state
  if (error || !questions || questions.length === 0) {
    return (
      <View className="flex-1 bg-white justify-center items-center px-6">
        <Text className="text-2xl mb-4">😕</Text>
        <Text className="text-gray-900 text-xl font-bold mb-2">No questions found</Text>
        <Text className="text-gray-600 text-center mb-6">
          Try adjusting your filters or selecting a different chapter.
        </Text>
        <TouchableOpacity
          onPress={() => router.back()}
          className="bg-blue-500 px-8 py-4 rounded-xl"
          activeOpacity={1}
        >
          <Text className="text-white font-bold text-lg">Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Get current question data
  const currentQuestion = questions[currentQuestionIndex];
  const correctAnswerText = currentQuestion.correct_answer;

  // Convert options array to object
  const optionsArray = Array.isArray(currentQuestion.options) ? currentQuestion.options : [];
  const options = optionsArray.reduce((acc, option, index) => {
    const key = String.fromCharCode(65 + index); // A, B, C, D
    acc[key] = option;
    return acc;
  }, {} as Record<string, string>);

  // Find the correct answer key (A/B/C/D) by matching the option text
  const correctAnswerKey = Object.entries(options).find(
    ([_, optionText]) => optionText === correctAnswerText
  )?.[0];

  // Compare selected answer letter with correct answer letter
  const isCorrect = selectedAnswer === correctAnswerKey;

  // Calculate stats
  const correctAnswers = answeredQuestions.filter((q) => q.isCorrect).length;
  const totalAnswered = answeredQuestions.length;
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  // Get answer status for a question index
  const getQuestionStatus = (index: number) => {
    // Check if this question has been answered by looking at questionAnswers
    const hasAnswer = questionAnswers[index] !== undefined;
    if (!hasAnswer) return 'unanswered';

    // Find the question and check if answer is correct
    const question = questions[index];
    const correctAnswer = question.correct_answer;
    const optionsArray = Array.isArray(question.options) ? question.options : [];
    const optionsMap = optionsArray.reduce((acc, option, idx) => {
      const key = String.fromCharCode(65 + idx); // A, B, C, D
      acc[key] = option;
      return acc;
    }, {} as Record<string, string>);

    const selectedOptionText = optionsMap[questionAnswers[index]];
    const isCorrect = selectedOptionText === correctAnswer;

    return isCorrect ? 'correct' : 'wrong';
  };

  // Navigate to specific question
  const navigateToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
    setSelectedAnswer(questionAnswers[index] || null);
    setShowExplanation(questionExplanations[index] || false);
    setQuestionStartTime(Date.now());
    // Scroll to top
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  };

  // Get question font size (exactly 14% larger than options)
  const getQuestionFontSize = (): number => {
    // Map fontSize to pixel values
    const fontSizeMap = {
      'xs': 14,
      'small': 16,
      'medium': 18,
      'large': 22,
      'xl': 26,
      '2xl': 30,
      '3xl': 36,
    };

    const baseFontSize = fontSizeMap[fontSize] || 18;
    // Return exactly 14% larger
    return baseFontSize * 1.14;
  };

  // Get explanation font size (10% larger than base)
  const getExplanationFontSize = (): number => {
    const fontSizeMap = {
      'xs': 14,
      'small': 16,
      'medium': 18,
      'large': 22,
      'xl': 26,
      '2xl': 30,
      '3xl': 36,
    };

    const baseFontSize = fontSizeMap[fontSize] || 18;
    return baseFontSize * 1.1;
  };

  // Get font size classes based on fontSize state
  const getQuestionFontSizeClass = () => {
    switch (fontSize) {
      case 'xs':
        return 'text-base';
      case 'small':
        return 'text-lg';
      case 'medium':
        return 'text-xl';
      case 'large':
        return 'text-2xl';
      case 'xl':
        return 'text-3xl';
      case '2xl':
        return 'text-4xl';
      case '3xl':
        return 'text-5xl';
      default:
        return 'text-xl';
    }
  };

  const getOptionFontSizeClass = () => {
    switch (fontSize) {
      case 'xs':
        return 'text-xs';
      case 'small':
        return 'text-sm';
      case 'medium':
        return 'text-base';
      case 'large':
        return 'text-lg';
      case 'xl':
        return 'text-xl';
      case '2xl':
        return 'text-2xl';
      case '3xl':
        return 'text-3xl';
      default:
        return 'text-base';
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View className="flex-1 bg-white">
        <StatusBar style="dark" />

      {/* Header */}
      <View className="px-6 pt-16 pb-4 bg-white border-b border-gray-200">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-gray-900 font-bold text-base">
            Question {currentQuestionIndex + 1} of {questions.length}
          </Text>

          <LinearGradient
            colors={['#8b5cf6', '#a855f7']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20 }}
          >
            <Text style={{ color: '#ffffff', fontWeight: '800', fontSize: 14, letterSpacing: 1.2 }}>
              SCORE: {totalAnswered === 0 ? '0' : correctAnswers}
            </Text>
          </LinearGradient>
        </View>

        {/* Progress bar */}
        <View className="bg-gray-200 h-2 rounded-full overflow-hidden">
          <LinearGradient
            colors={['#7c3aed', '#a855f7']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            className="h-full"
            style={{ width: `${progress}%` }}
          />
        </View>
      </View>


      {/* Content */}
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[{ flex: 1 }, animatedStyle]}>
          <ScrollView
            ref={scrollViewRef}
            showsVerticalScrollIndicator={true}
            contentContainerStyle={{ paddingBottom: 24, flexGrow: 1 }}
          >
            <View className="px-6 py-6">
          {/* Question */}
          <View className="mb-6">
            {currentQuestion.image_url && (
              <Image
                source={{ uri: currentQuestion.image_url }}
                className="w-full h-48 rounded-xl mb-4"
                resizeMode="contain"
              />
            )}
            <MathText
              text={currentQuestion.question}
              fontSize={getQuestionFontSize()}
              color="#111827"
              style={{ fontWeight: 'bold' }}
              isRTL={isUrduSubject}
            />
          </View>

          {/* Options */}
          <View className="mb-6">
            {(() => {
              // For inline mode: reorder options when explanation is shown
              // For bottom mode: show all options in original order
              let optionEntries = Object.entries(options);

              if (explanationPosition === 'inline') {
                // INLINE MODE: Show only selected/correct options first, then explanation, then rest
                if (showExplanation && !isCorrect && selectedAnswer && correctAnswerKey) {
                  // Filter to only correct and selected options, ordered: correct first, then selected wrong
                  const correctEntry = optionEntries.find(([key]) => key === correctAnswerKey);
                  const selectedEntry = optionEntries.find(([key]) => key === selectedAnswer);
                  optionEntries = [correctEntry, selectedEntry].filter(Boolean) as [string, string][];
                } else if (showExplanation && isCorrect) {
                  // For correct answers, only show the selected (correct) option
                  optionEntries = optionEntries.filter(([key]) => key === selectedAnswer);
                }
              }
              // BOTTOM MODE: Keep all options in original order (no filtering)

              return optionEntries.map(([key, value]) => {
                const isSelected = selectedAnswer === key;
                const isCorrectOption = key === correctAnswerKey;
                const showCorrect = showExplanation && isCorrectOption;
                const showWrong = showExplanation && isSelected && !isCorrect;
                const isOtherIncorrect = showExplanation && !isCorrectOption && !isSelected;

                // For INLINE mode: skip non-selected, non-correct options (shown later)
                if (explanationPosition === 'inline' && showExplanation && !isCorrectOption && !isSelected) {
                  return null;
                }

                let containerStyle = 'bg-white border-gray-100 shadow-md';
                let textStyle = 'text-black font-semibold';

                if (showCorrect) {
                  containerStyle = 'bg-green-100 border-gray-100 shadow-lg';
                  textStyle = 'text-black font-semibold';
                } else if (showWrong) {
                  containerStyle = 'bg-red-100 border-gray-100 shadow-lg';
                  textStyle = 'text-black font-semibold';
                } else if (isOtherIncorrect) {
                  // Other incorrect options (only shown in bottom mode) - grey-red tint
                  containerStyle = 'bg-gray-200 border-gray-100 shadow-md';
                  textStyle = 'text-gray-600 font-semibold';
                } else if (isSelected) {
                  containerStyle = 'bg-blue-500 border-blue-500 shadow-lg';
                  textStyle = 'text-white font-semibold';
                }

                return (
                  <TouchableOpacity
                    key={key}
                    onPress={() => handleAnswerSelect(key)}
                    disabled={showExplanation}
                    className={`p-4 rounded-2xl mb-5 border ${containerStyle}`}
                    activeOpacity={1}
                  >
                    <View className={`flex-row items-center ${isUrduSubject ? 'flex-row-reverse' : ''}`}>
                      <MathText
                        text={value}
                        fontSize={fontSize}
                        color={showCorrect ? '#111827' : showWrong ? '#111827' : isOtherIncorrect ? '#111827' : isSelected ? '#ffffff' : '#000000'}
                        style={{ flex: 1, fontWeight: '600' }}
                        isRTL={isUrduSubject}
                      />
                    </View>
                  </TouchableOpacity>
                );
              });
            })()}
          </View>

          {/* Explanation - INLINE position (between options) */}
          {showExplanation && explanationPosition === 'inline' && isCorrect && (
            <View className="mt-0 bg-white p-4 rounded-2xl shadow-md border-2 border-green-500" style={{ overflow: 'hidden', borderRadius: 16 }}>
              <Text className={`text-gray-700 font-bold mb-2 text-base ${isUrduSubject ? 'text-right' : ''}`}>Explanation:</Text>
              <View style={{ width: '100%' }}>
                {(() => {
                  const explanationText = getQuestionExplanation(currentQuestion);
                  try {
                    console.log('[practice-session] explanationText for question', currentQuestion.id || currentQuestion.question_number || currentQuestion.question?.substring?.(0,40) || 'unknown', {
                      type: typeof explanationText,
                      length: typeof explanationText === 'string' ? explanationText.length : 'N/A',
                      preview: typeof explanationText === 'string' ? explanationText.substring(0, 200) : null,
                    });
                  } catch (e) {
                    // ignore logging errors
                  }
                  const hasExplanation = typeof explanationText === 'string' && explanationText.trim().length > 0;

                  return hasExplanation ? (
                    <MathText
                      text={explanationText}
                      fontSize={getExplanationFontSize()}
                      color="#111827"
                      style={{ width: '100%' }}
                      isRTL={isUrduSubject}
                    />
                  ) : (
                    <Text className={`text-gray-500 italic text-sm ${isUrduSubject ? 'text-right' : ''}`}>
                      No explanation available for this question.
                    </Text>
                  );
                })()}
              </View>
            </View>
          )}
          {showExplanation && explanationPosition === 'inline' && !isCorrect && (
            <LinearGradient
              colors={['#9333ea', '#c084fc', '#9333ea']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{ marginTop: 0, borderRadius: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3, padding: 2, overflow: 'hidden' }}
            >
              <View className="bg-white p-4" style={{ borderRadius: 14, overflow: 'hidden' }}>
                <Text className={`text-gray-700 font-bold mb-2 text-base ${isUrduSubject ? 'text-right' : ''}`}>Explanation:</Text>
                <View style={{ width: '100%' }}>
                  {(() => {
                    const explanationText = getQuestionExplanation(currentQuestion);
                    const hasExplanation = typeof explanationText === 'string' && explanationText.trim().length > 0;

                    return hasExplanation ? (
                      <MathText
                        text={explanationText}
                        fontSize={getExplanationFontSize()}
                        color="#111827"
                        style={{ width: '100%' }}
                        isRTL={isUrduSubject}
                      />
                    ) : (
                      <Text className={`text-gray-500 italic text-sm ${isUrduSubject ? 'text-right' : ''}`}>
                        No explanation available for this question.
                      </Text>
                    );
                  })()}
                </View>
              </View>
            </LinearGradient>
          )}

          {/* Other incorrect options - shown below explanation (INLINE mode only) */}
          {showExplanation && explanationPosition === 'inline' && (
            <View className="mt-4 mb-6">
              {Object.entries(options).map(([key, value]) => {
                const isSelected = selectedAnswer === key;
                const isCorrectOption = key === correctAnswerKey;

                // Skip the correct option and selected option (already shown above)
                if (isCorrectOption || isSelected) {
                  return null;
                }

                // Show all other incorrect options - grey-red tint
                return (
                  <View
                    key={key}
                    className="p-4 rounded-2xl mb-5 bg-gray-200 border border-gray-100 shadow-md"
                  >
                    <View className={`flex-row items-center ${isUrduSubject ? 'flex-row-reverse' : ''}`}>
                      <MathText
                        text={value}
                        fontSize={fontSize}
                        color="#4b5563"
                        style={{ flex: 1, fontWeight: '600' }}
                        isRTL={isUrduSubject}
                      />
                    </View>
                  </View>
                );
              })}
            </View>
          )}

          {/* Explanation - BOTTOM position (after all options) */}
          {showExplanation && explanationPosition === 'bottom' && isCorrect && (
            <View className="mt-0 bg-white p-4 rounded-2xl shadow-md border-2 border-green-500" style={{ overflow: 'hidden', borderRadius: 16 }}>
              <Text className={`text-gray-700 font-bold mb-2 text-base ${isUrduSubject ? 'text-right' : ''}`}>Explanation:</Text>
              <View style={{ width: '100%' }}>
                {(() => {
                  const explanationText = getQuestionExplanation(currentQuestion);
                  const hasExplanation = typeof explanationText === 'string' && explanationText.trim().length > 0;

                  return hasExplanation ? (
                    <MathText
                      text={explanationText}
                      fontSize={getExplanationFontSize()}
                      color="#111827"
                      style={{ width: '100%' }}
                      isRTL={isUrduSubject}
                    />
                  ) : (
                    <Text className={`text-gray-500 italic text-sm ${isUrduSubject ? 'text-right' : ''}`}>
                      No explanation available for this question.
                    </Text>
                  );
                })()}
              </View>
            </View>
          )}
          {showExplanation && explanationPosition === 'bottom' && !isCorrect && (
            <LinearGradient
              colors={['#9333ea', '#c084fc', '#9333ea']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{ marginTop: 0, borderRadius: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3, padding: 2, overflow: 'hidden' }}
            >
              <View className="bg-white p-4" style={{ borderRadius: 14, overflow: 'hidden' }}>
                <Text className={`text-gray-700 font-bold mb-2 text-base ${isUrduSubject ? 'text-right' : ''}`}>Explanation:</Text>
                <View style={{ width: '100%' }}>
                  {(() => {
                    const explanationText = getQuestionExplanation(currentQuestion);
                    const hasExplanation = typeof explanationText === 'string' && explanationText.trim().length > 0;

                    return hasExplanation ? (
                      <MathText
                        text={explanationText}
                        fontSize={getExplanationFontSize()}
                        color="#111827"
                        style={{ width: '100%' }}
                        isRTL={isUrduSubject}
                      />
                    ) : (
                      <Text className={`text-gray-500 italic text-sm ${isUrduSubject ? 'text-right' : ''}`}>
                        No explanation available for this question.
                      </Text>
                    );
                  })()}
                </View>
              </View>
            </LinearGradient>
          )}

          {/* Question number bubbles - Grid layout with 5 per row */}
          <View className="mt-6 mb-4 bg-gray-50 rounded-2xl p-4">
            <View className="flex-row flex-wrap justify-center gap-2">
              {questions.map((_, index) => {
                const status = getQuestionStatus(index);
                const isCurrentQuestion = index === currentQuestionIndex;

                // Render boxes based on status
                if (status === 'correct') {
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => navigateToQuestion(index)}
                      style={{
                        position: 'relative',
                      }}
                      activeOpacity={1}
                    >
                      <View
                        style={{
                          width: 48,
                          height: 48,
                          backgroundColor: '#dcfce7',
                          borderRadius: 8,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <Text style={{ color: '#166534', fontWeight: 'bold', fontSize: 14 }}>
                          {index + 1}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                } else if (status === 'wrong') {
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => navigateToQuestion(index)}
                      style={{
                        position: 'relative',
                      }}
                      activeOpacity={1}
                    >
                      <View
                        style={{
                          width: 48,
                          height: 48,
                          backgroundColor: '#fecaca',
                          borderRadius: 8,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <Text style={{ color: '#991b1b', fontWeight: 'bold', fontSize: 14 }}>
                          {index + 1}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                } else {
                  // Unanswered - white box
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => navigateToQuestion(index)}
                      style={{
                        position: 'relative',
                      }}
                      activeOpacity={1}
                    >
                      <View
                        style={{
                          width: 48,
                          height: 48,
                          backgroundColor: '#ffffff',
                          borderRadius: 8,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <Text className="text-black font-bold text-base">
                          {index + 1}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                }
              })}
            </View>
          </View>

          {/* Font Size Adjustment - Outside grid card */}
          <View className="mt-4">
            <View className="flex-row justify-start items-center gap-3">
              <Text className="text-gray-700 font-medium">Text Size:</Text>

              <TouchableOpacity
                onPress={() => {
                  if (fontSize === 'small') setFontSize('xs');
                  else if (fontSize === 'medium') setFontSize('small');
                  else if (fontSize === 'large') setFontSize('medium');
                  else if (fontSize === 'xl') setFontSize('large');
                  else if (fontSize === '2xl') setFontSize('xl');
                  else if (fontSize === '3xl') setFontSize('2xl');
                }}
                disabled={fontSize === 'xs'}
                className={`w-10 h-10 rounded-full items-center justify-center ${
                  fontSize === 'xs' ? 'bg-gray-200' : 'bg-black'
                }`}
                activeOpacity={1}
              >
                <Text className={`text-xl font-bold ${fontSize === 'xs' ? 'text-gray-400' : 'text-white'}`}>
                  −
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  if (fontSize === 'xs') setFontSize('small');
                  else if (fontSize === 'small') setFontSize('medium');
                  else if (fontSize === 'medium') setFontSize('large');
                  else if (fontSize === 'large') setFontSize('xl');
                  else if (fontSize === 'xl') setFontSize('2xl');
                  else if (fontSize === '2xl') setFontSize('3xl');
                }}
                disabled={fontSize === '3xl'}
                className={`w-10 h-10 rounded-full items-center justify-center ${
                  fontSize === '3xl' ? 'bg-gray-200' : 'bg-black'
                }`}
                activeOpacity={1}
              >
                <Text className={`text-xl font-bold ${fontSize === '3xl' ? 'text-gray-400' : 'text-white'}`}>
                  +
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Explanation Position Toggle - Outside grid card */}
          <View className="mt-4">
            <View className="flex-row justify-start items-center gap-3">
              <Text className="text-gray-700 font-medium">Explanation:</Text>
              <View className="flex-row bg-gray-200 rounded-full p-1">
                <TouchableOpacity
                  onPress={() => setExplanationPosition('inline')}
                  className={`px-4 py-2 rounded-full ${
                    explanationPosition === 'inline' ? 'bg-black' : 'bg-transparent'
                  }`}
                  activeOpacity={1}
                >
                  <Text className={`text-sm font-medium ${
                    explanationPosition === 'inline' ? 'text-white' : 'text-gray-600'
                  }`}>
                    Inline
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setExplanationPosition('bottom')}
                  className={`px-4 py-2 rounded-full ${
                    explanationPosition === 'bottom' ? 'bg-black' : 'bg-transparent'
                  }`}
                  activeOpacity={1}
                >
                  <Text className={`text-sm font-medium ${
                    explanationPosition === 'bottom' ? 'text-white' : 'text-gray-600'
                  }`}>
                    Bottom
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
            </View>
          </ScrollView>
        </Animated.View>
      </GestureDetector>

      {/* Bottom navigation buttons */}
      <View className="px-4 pt-3 pb-6 bg-white">
        <View className="flex-row gap-2">
          <TouchableOpacity
            onPress={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
            className="flex-1 rounded-lg overflow-hidden"
            activeOpacity={1}
          >
            {currentQuestionIndex === 0 ? (
              <View className="bg-gray-300 py-3">
                <View className="flex-row items-center justify-center gap-1">
                  <Ionicons name="chevron-back" size={18} color="white" />
                  <Text className="text-white text-center text-base font-semibold">
                    Previous
                  </Text>
                </View>
              </View>
            ) : (
              <LinearGradient
                colors={['#312e81', '#7c3aed']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                className="py-3"
              >
                <View className="flex-row items-center justify-center gap-1">
                  <Ionicons name="chevron-back" size={18} color="white" />
                  <Text className="text-white text-center text-base font-semibold">
                    Previous
                  </Text>
                </View>
              </LinearGradient>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleNextQuestion}
            className="flex-1 rounded-lg overflow-hidden"
            activeOpacity={1}
          >
            <LinearGradient
              colors={currentQuestionIndex < questions.length - 1 ? ['#8b5cf6', '#a855f7'] : ['#f59e0b', '#eab308']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              className="py-3"
            >
              <View className="flex-row items-center justify-center gap-1">
                <Text className="text-white text-center text-base font-semibold">
                  {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Finish'}
                </Text>
                {currentQuestionIndex < questions.length - 1 && (
                  <Ionicons name="chevron-forward" size={18} color="white" />
                )}
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>

      {/* Exit Confirmation Modal */}
      <ExitConfirmationModal
        visible={showExitModal}
        onCancel={() => setShowExitModal(false)}
        onConfirm={handleConfirmExit}
        mode="practice"
      />
      </View>
    </GestureHandlerRootView>
  );
}
