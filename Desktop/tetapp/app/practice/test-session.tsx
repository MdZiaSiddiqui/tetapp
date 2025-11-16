import { useMemo, useCallback, useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import { useRouter, useLocalSearchParams, useFocusEffect } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../lib/auth-context';
import { useProAccess } from '../../hooks/useProAccess';
import UpgradePrompt from '../../components/premium/UpgradePrompt';
import ExitConfirmationModal from '../../components/ExitConfirmationModal';
import SubmitTestConfirmationModal from '../../components/SubmitTestConfirmationModal';
import LoadingBar from '../../components/LoadingBar';
import { useTestTimer } from '../../hooks/useTestTimer';
import { useQuestionStats } from '../../hooks/useQuestionStats';
import { useTestSession } from '../../hooks/useTestSession';
import { TestActions } from '../../components/test-session/TestActions';
import { OptionButton } from '../../components/test-session/OptionButton';
import { QuestionStats } from '../../components/test-session/QuestionStats';
import { QuestionGrid } from '../../components/test-session/QuestionGrid';
import MathText from '../../components/MathText';
import { LinearGradient } from 'expo-linear-gradient';
import { GestureDetector, Gesture, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  runOnJS,
} from 'react-native-reanimated';

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

export default function TestSession() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { user } = useAuth();
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

  // Font size control
  const [fontSize, setFontSize] = useState<'xs' | 'small' | 'medium' | 'large' | 'xl' | '2xl' | '3xl'>('medium');
  // Exit confirmation modal
  const [showExitModal, setShowExitModal] = useState(false);
  // Submit test confirmation modal
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  // Fetch questions
  const {
    data: questions,
    isLoading,
    error: questionsError,
  } = useQuery({
    queryKey: ['test-questions', params],
    queryFn: async () => {
      let query = supabase
        .from('questions')
        .select('*')
        .limit(parseInt(params.questionCount as string) || 10);

      // Apply chapter filter (highest priority)
      if (params.chapterId) {
        query = query.eq('chapter_id', params.chapterId);
      }
      // Apply subject filter if no chapter specified
      else if (params.subjectId) {
        query = query.eq('subject_id', params.subjectId);
      }
      // Legacy support for multiple subjects
      else if (params.subjectIds) {
        const subjectIds = (params.subjectIds as string).split(',');
        query = query.in('subject_id', subjectIds);
      }

      // Apply language filter
      if (params.language) {
        query = query.eq('language', params.language);
      }

      // Apply paper filter
      if (params.paper) {
        query = query.eq('paper', params.paper);
      }

      // Apply advanced filters
      if (params.showImageOnly === 'true') {
        query = query.not('image_url', 'is', null);
      }

      const { data, error } = await query;
      if (error) throw error;

      // DEBUG: Log raw data from database
      if (data && data.length > 0) {
        console.log('[test-session] Fetched', data.length, 'questions from database');
        const firstQ = data[0];
        console.log('[test-session] First question raw data:', {
          id: firstQ.id,
          question_preview: firstQ.question?.substring(0, 50),
          solutions_type: typeof firstQ.solutions,
          solutions_isArray: Array.isArray(firstQ.solutions),
          solutions_value: Array.isArray(firstQ.solutions)
            ? `Array(${firstQ.solutions.length}): [${firstQ.solutions.slice(0, 2).map((s: any) => typeof s)}...]`
            : typeof firstQ.solutions === 'string'
              ? `String(${firstQ.solutions.length} chars): ${firstQ.solutions.substring(0, 50)}...`
              : firstQ.solutions,
          explanation_type: typeof firstQ.explanation,
          explanation_isArray: Array.isArray(firstQ.explanation),
        });

        // Check if any field is unexpectedly large
        Object.keys(firstQ).forEach((key) => {
          const value = firstQ[key];
          if (typeof value === 'string' && value.length > 5000) {
            console.warn(`[test-session] Field "${key}" is very large:`, value.length, 'chars');
          } else if (Array.isArray(value) && value.length > 100) {
            console.warn(`[test-session] Field "${key}" is a large array:`, value.length, 'elements');
          }
        });
      }

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
    retry: 2,
    retryDelay: 1000,
  });

  // Helper function to calculate correct answers count
  const calculateCorrectCount = useCallback((answeredQuestions: Array<{ questionId: string; answer: string; timeSpent: number }>) => {
    if (!questions) return 0;

    return answeredQuestions.reduce((count, answered) => {
      // Extract question index from temporary ID (format: "question-0", "question-1", etc.)
      const questionIndex = parseInt(answered.questionId.replace('question-', ''));
      const question = questions[questionIndex];
      if (!question) return count;

      const correctAnswer = question.correct_answer;
      const optionsArray = Array.isArray(question.options) ? question.options : [];
      const optionsMap = optionsArray.reduce((acc, option, idx) => {
        const key = String.fromCharCode(65 + idx); // A, B, C, D
        acc[key] = option;
        return acc;
      }, {} as Record<string, string>);

      const selectedOptionText = optionsMap[answered.answer];
      return selectedOptionText === correctAnswer ? count + 1 : count;
    }, 0);
  }, [questions]);

  // Session management
  const {
    currentQuestionIndex,
    selectedAnswer,
    answeredQuestions,
    questionStatus,
    visitedQuestions,
    scrollViewRef,
    handleAnswerSelect,
    handleSubmitAnswer,
    handleMarkForReview,
    handleNextQuestion,
    handlePreviousQuestion,
    navigateToQuestion,
  } = useTestSession({
    totalQuestions: questions?.length || 0,
    onFinish: async (answeredQuestions) => {
      // Calculate correct answers count
      const correctCount = calculateCorrectCount(answeredQuestions);
      const answeredCount = answeredQuestions.length;
      const totalQuestions = questions?.length || 0;

      // Skipped questions count (unanswered)
      const skippedCount = totalQuestions - answeredCount;

      // Incorrect count only includes wrong answers (not skipped)
      const incorrectCount = answeredCount - correctCount;

      // Build user answers object from answeredQuestions (format: { "0": "A", "1": "B", ... })
      const userAnswersMap: { [key: number]: string } = {};
      answeredQuestions.forEach((answered) => {
        const questionIndex = parseInt(answered.questionId.replace('question-', ''));
        userAnswersMap[questionIndex] = answered.answer;
      });

      // Extract marked for review question indices
      const markedForReviewIndices: number[] = [];
      Object.entries(questionStatus).forEach(([index, status]) => {
        if (status === 'marked-for-review' || status === 'marked-for-review-answered') {
          markedForReviewIndices.push(parseInt(index));
        }
      });

      // Navigate to test results with questions and answers data
      router.replace({
        pathname: '/practice/test-results',
        params: {
          totalQuestions: totalQuestions,
          answeredCount: answeredCount,
          correctCount: correctCount,
          incorrectCount: incorrectCount,
          skippedCount: skippedCount,
          questions: JSON.stringify(questions),
          answers: JSON.stringify(userAnswersMap),
          markedForReview: JSON.stringify(markedForReviewIndices),
          subjectId: subjectId || '',
          subjectName: subjectName || '',
        },
      });
    },
  });

  // Timer
  const { formattedTime, isLowTime } = useTestTimer({
    initialSeconds: (parseInt(params.timerMinutes as string) || 30) * 60,
    onTimeUp: async () => {
      // Calculate correct answers count
      const correctCount = calculateCorrectCount(answeredQuestions);
      const answeredCount = answeredQuestions.length;
      const totalQuestions = questions?.length || 0;

      // Skipped questions count (unanswered)
      const skippedCount = totalQuestions - answeredCount;

      // Incorrect count only includes wrong answers (not skipped)
      const incorrectCount = answeredCount - correctCount;

      // Build user answers object from answeredQuestions (format: { "0": "A", "1": "B", ... })
      const userAnswersMap: { [key: number]: string } = {};
      answeredQuestions.forEach((answered) => {
        const questionIndex = parseInt(answered.questionId.replace('question-', ''));
        userAnswersMap[questionIndex] = answered.answer;
      });

      // Extract marked for review question indices
      const markedForReviewIndices: number[] = [];
      Object.entries(questionStatus).forEach(([index, status]) => {
        if (status === 'marked-for-review' || status === 'marked-for-review-answered') {
          markedForReviewIndices.push(parseInt(index));
        }
      });

      // Navigate to test results with questions and answers data
      router.replace({
        pathname: '/practice/test-results',
        params: {
          totalQuestions: totalQuestions,
          answeredCount: answeredCount,
          correctCount: correctCount,
          incorrectCount: incorrectCount,
          skippedCount: skippedCount,
          questions: JSON.stringify(questions),
          answers: JSON.stringify(userAnswersMap),
          markedForReview: JSON.stringify(markedForReviewIndices),
          subjectId: subjectId || '',
          subjectName: subjectName || '',
        },
      });
    },
    enabled: !!questions && questions.length > 0,
  });

  // Statistics
  const questionStats = useQuestionStats({
    questionStatus,
    totalQuestions: questions?.length || 0,
    currentQuestionIndex,
  });

  // Handle exit with confirmation
  const handleExit = useCallback(() => {
    setShowExitModal(true);
  }, []);

  const handleConfirmExit = useCallback(() => {
    setShowExitModal(false);
    router.back();
  }, [router]);

  // Handle finish test early - show confirmation modal
  const handleFinishTest = useCallback(() => {
    if (!questions) return;
    setShowSubmitModal(true);
  }, [questions]);

  // Actually submit the test after confirmation
  const handleConfirmSubmit = useCallback(() => {
    if (!questions) return;
    setShowSubmitModal(false);

    // Calculate correct answers count
    const correctCount = calculateCorrectCount(answeredQuestions);
    const answeredCount = answeredQuestions.length;
    const totalQuestions = questions.length;

    // Skipped questions count (unanswered)
    const skippedCount = totalQuestions - answeredCount;

    // Incorrect count only includes wrong answers (not skipped)
    const incorrectCount = answeredCount - correctCount;

    // Build user answers object from answeredQuestions (format: { "0": "A", "1": "B", ... })
    const userAnswersMap: { [key: number]: string } = {};
    answeredQuestions.forEach((answered) => {
      const questionIndex = parseInt(answered.questionId.replace('question-', ''));
      userAnswersMap[questionIndex] = answered.answer;
    });

    // Extract marked for review question indices
    const markedForReviewIndices: number[] = [];
    Object.entries(questionStatus).forEach(([index, status]) => {
      if (status === 'marked-for-review' || status === 'marked-for-review-answered') {
        markedForReviewIndices.push(parseInt(index));
      }
    });

    // Navigate to test results with questions and answers data
    router.replace({
      pathname: '/practice/test-results',
      params: {
        totalQuestions: totalQuestions,
        answeredCount: answeredCount,
        correctCount: correctCount,
        incorrectCount: incorrectCount,
        skippedCount: skippedCount,
        questions: JSON.stringify(questions),
        answers: JSON.stringify(userAnswersMap),
        markedForReview: JSON.stringify(markedForReviewIndices),
        subjectId: subjectId || '',
        subjectName: subjectName || '',
      },
    });
  }, [questions, answeredQuestions, calculateCorrectCount, router, questionStatus, subjectId, subjectName]);

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

  // Gesture animation values
  const translateX = useSharedValue(0);

  // Swipe gesture handlers
  const handleSwipeNext = useCallback(() => {
    handleNextQuestion();
  }, [handleNextQuestion]);

  const handleSwipePrevious = useCallback(() => {
    handlePreviousQuestion();
  }, [handlePreviousQuestion]);

  // Pan gesture for swipe navigation
  const panGesture = Gesture.Pan()
    .activeOffsetX([-10, 10]) // Lower threshold - easier to activate horizontal swipes
    .failOffsetY([-15, 15]) // Higher threshold - less likely to fail on slight vertical movement
    .onUpdate((event) => {
      const canSwipeLeft = currentQuestionIndex < (questions?.length ?? 0) - 1;
      const canSwipeRight = currentQuestionIndex > 0;

      if (event.translationX < 0 && !canSwipeLeft) {
        translateX.value = event.translationX * 0.2; // Resistance at boundary
        return;
      }
      if (event.translationX > 0 && !canSwipeRight) {
        translateX.value = event.translationX * 0.2; // Resistance at boundary
        return;
      }

      translateX.value = event.translationX;
    })
    .onEnd((event) => {
      // Much lower threshold - only 12% of screen width or velocity-based
      const swipeThreshold = SCREEN_WIDTH * 0.12;
      const velocityThreshold = 500; // pixels per second

      const shouldSwipeLeft = (event.translationX < -swipeThreshold || event.velocityX < -velocityThreshold) && currentQuestionIndex < (questions?.length ?? 0) - 1;
      const shouldSwipeRight = (event.translationX > swipeThreshold || event.velocityX > velocityThreshold) && currentQuestionIndex > 0;

      // Swipe left (next question)
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
      }
      // Swipe right (previous question)
      else if (shouldSwipeRight) {
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
      // Snap back
      else {
        translateX.value = withSpring(0, {
          damping: 20,
          stiffness: 300,
        });
      }
    });

  // Animated style for content
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  // Handle answer selection - store locally only (no API call)
  const onAnswerSelect = useCallback(
    (answer: string) => {
      // Just update selected answer locally - no API call
      handleAnswerSelect(answer, currentQuestionIndex);
    },
    [currentQuestionIndex, handleAnswerSelect]
  );

  // Handlers with navigation only
  const onSubmitAnswer = useCallback(() => {
    // Check if this is the last question
    const isLastQuestion = currentQuestionIndex >= (questions?.length || 0) - 1;

    if (isLastQuestion) {
      // Show confirmation modal on last question
      setShowSubmitModal(true);
    } else {
      // Just navigate to next - answers stored locally
      handleNextQuestion();
    }
  }, [currentQuestionIndex, questions, handleNextQuestion]);

  const onMarkForReview = useCallback(() => {
    const currentQuestion = questions?.[currentQuestionIndex];
    handleMarkForReview(
      currentQuestion?.id || '',
      () => {} // No-op callback since we're not saving via API during test
    );
  }, [currentQuestionIndex, questions, handleMarkForReview]);

  // Get font size value for questions (14% larger than default)
  const getQuestionFontSize = () => {
    switch (fontSize) {
      case 'xs':
        return 16;  // 14 * 1.14
      case 'small':
        return 18;  // 16 * 1.14
      case 'medium':
        return 21;  // 18 * 1.14
      case 'large':
        return 25;  // 22 * 1.14
      case 'xl':
        return 30;  // 26 * 1.14
      case '2xl':
        return 34;  // 30 * 1.14
      case '3xl':
        return 41;  // 36 * 1.14
      default:
        return 21;
    }
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

  // Memoize current question data
  const currentQuestion = useMemo(
    () => questions?.[currentQuestionIndex],
    [questions, currentQuestionIndex]
  );

  const options = useMemo(() => {
    if (!currentQuestion) return {};
    const optionsArray = Array.isArray(currentQuestion.options)
      ? currentQuestion.options
      : [];
    return optionsArray.reduce((acc, option, index) => {
      const key = String.fromCharCode(65 + index); // A, B, C, D
      acc[key] = option;
      return acc;
    }, {} as { [key: string]: string });
  }, [currentQuestion]);

  // Pro access check - Loading state
  if (proLoading) {
    return <LoadingBar message="Loading..." />;
  }

  // Pro access check - No access
  if (!hasRequiredAccess) {
    return <UpgradePrompt tier={requiredTier} feature="Test Mode" />;
  }

  // Error handling
  if (questionsError) {
    return (
      <View className="flex-1 bg-white justify-center items-center px-6">
        <Text className="text-red-600 text-lg font-semibold mb-2">
          Error Loading Questions
        </Text>
        <Text className="text-gray-600 text-center mb-4">
          {questionsError.message || 'Failed to load questions. Please try again.'}
        </Text>
        <Text
          onPress={() => router.back()}
          className="text-blue-600 font-semibold"
        >
          Go Back
        </Text>
      </View>
    );
  }

  // Loading state
  if (isLoading || !questions || questions.length === 0) {
    return (
      <View className="flex-1 bg-white justify-center items-center">
        <Text className="text-gray-600">
          {isLoading ? 'Loading questions...' : 'No questions found'}
        </Text>
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View className="flex-1 bg-white">
        <StatusBar style="dark" />

        {/* Custom Header with Question Number and Timer - Blue Bar Style */}
        <View style={{ backgroundColor: '#4A7BA7', paddingTop: 60, paddingBottom: 16, paddingHorizontal: 24 }}>
          <View className="flex-row justify-between items-center">
            {/* Question Number */}
            <Text className="text-white text-xl font-bold">
              Question {currentQuestionIndex + 1}/{questions.length}
            </Text>

            {/* Timer */}
            <View style={{
              backgroundColor: isLowTime ? '#FEE2E2' : '#FFFFFF',
              paddingHorizontal: 16,
              paddingVertical: 8,
              borderRadius: 8
            }}>
              <Text style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: isLowTime ? '#DC2626' : '#1F2937'
              }}>
                {formattedTime}
              </Text>
            </View>
          </View>
        </View>

        <GestureDetector gesture={panGesture}>
          <Animated.View style={[{ flex: 1 }, animatedStyle]}>
            <ScrollView
              ref={scrollViewRef}
              className="flex-1"
              showsVerticalScrollIndicator={false}
            >
              <View className="px-6 py-6">
            {/* Question */}
            <View className="mb-6">
              {currentQuestion?.image_url && (
                <Image
                  source={{ uri: currentQuestion.image_url }}
                  className="w-full h-48 rounded-xl mb-4"
                  resizeMode="contain"
                />
              )}
              <MathText
                text={currentQuestion?.question || ''}
                fontSize={getQuestionFontSize()}
                color="#111827"
                style={{ fontWeight: 'bold' }}
                isRTL={isUrduSubject}
              />
            </View>

            {/* Options - pointerEvents="box-none" prevents gesture conflicts */}
            <View className="mb-8 pb-6" pointerEvents="box-none">
              {Object.entries(options).map(([key, value]) => (
                <OptionButton
                  key={key}
                  optionKey={key}
                  value={value}
                  isSelected={selectedAnswer === key}
                  onPress={onAnswerSelect}
                  disabled={false}
                  fontSize={getOptionFontSizeClass()}
                  isRTL={isUrduSubject}
                />
              ))}
            </View>

            {/* Statistics & Question Grid */}
            <View className="p-4 mb-6" style={{ backgroundColor: '#F3F4F6', borderRadius: 20 }}>
              <QuestionGrid
                totalQuestions={questions.length}
                currentQuestionIndex={currentQuestionIndex}
                questionStatus={questionStatus}
                visitedQuestions={visitedQuestions}
                onNavigate={navigateToQuestion}
              />

              <QuestionStats stats={questionStats} />

              {/* Submit Test Button */}
              <TouchableOpacity
                onPress={handleFinishTest}
                className="mt-4 rounded-xl overflow-hidden"
                style={{ backgroundColor: '#4A7BA7' }}
                activeOpacity={1}
              >
                <View className="py-3 px-6">
                  <Text className="text-white text-center text-base font-bold">
                    Submit Test
                  </Text>
                </View>
              </TouchableOpacity>

              {/* Font Size Adjustment */}
              <View className="mt-4">
                <View className="flex-row justify-center items-center gap-3">
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
              </View>
            </View>
          </ScrollView>
        </Animated.View>
      </GestureDetector>

      {/* Bottom Actions */}
      <TestActions
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={questions.length}
        onPrevious={handlePreviousQuestion}
        onMarkForReview={onMarkForReview}
        onSubmit={onSubmitAnswer}
        isSubmitting={false}
      />

      {/* Exit Confirmation Modal */}
      <ExitConfirmationModal
        visible={showExitModal}
        onCancel={() => setShowExitModal(false)}
        onConfirm={handleConfirmExit}
        mode="test"
      />

      {/* Submit Test Confirmation Modal */}
      <SubmitTestConfirmationModal
        visible={showSubmitModal}
        onCancel={() => setShowSubmitModal(false)}
        onConfirm={handleConfirmSubmit}
        stats={{
          answered: questionStats.answered,
          notAnswered: questionStats.notAnswered,
          marked: questionStats.marked,
          notVisited: questionStats.notVisited,
        }}
        totalQuestions={questions.length}
      />
    </View>
  </GestureHandlerRootView>
  );
}
