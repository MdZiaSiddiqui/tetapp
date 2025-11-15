import { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import MathText from '../../components/MathText';
import getQuestionExplanation from '../../lib/utils/getQuestionExplanation';

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
}

export default function TestResults() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const scrollViewRef = useRef<ScrollView>(null);
  const incorrectSectionRef = useRef<View>(null);
  const skippedSectionRef = useRef<View>(null);
  const correctSectionRef = useRef<View>(null);

  // Parse params
  const totalQuestions = parseInt(params.totalQuestions as string) || 0;
  const answeredCount = parseInt(params.answeredCount as string) || 0;
  const correctCount = parseInt(params.correctCount as string) || 0;
  const incorrectCount = parseInt(params.incorrectCount as string) || 0;
  const skippedCount = parseInt(params.skippedCount as string) || 0;
  const accuracy = totalQuestions > 0 ? (correctCount / totalQuestions) * 100 : 0;

  // Parse questions data
  const questionsData: Question[] = (() => {
    try {
      if (!params.questions) {
        console.warn('[test-results] No questions param found');
        return [];
      }

      const rawParam = params.questions as string;
      console.log('[test-results] Questions param length:', rawParam.length, 'chars');
      console.log('[test-results] First 200 chars:', rawParam.substring(0, 200));
      console.log('[test-results] Last 200 chars:', rawParam.substring(rawParam.length - 200));

      const parsed = JSON.parse(rawParam);

      if (!Array.isArray(parsed)) {
        console.error('[test-results] Parsed questions is not an array:', typeof parsed);
        return [];
      }

      console.log('[test-results] Successfully parsed', parsed.length, 'questions');

      // Log first question's explanation field types
      if (parsed.length > 0) {
        const firstQ = parsed[0];
        console.log('[test-results] First question explanation fields:', {
          id: firstQ.id,
          solutions_type: typeof firstQ.solutions,
          solutions_isArray: Array.isArray(firstQ.solutions),
          solutions_length: Array.isArray(firstQ.solutions) ? firstQ.solutions.length : firstQ.solutions?.length,
          explanation_type: typeof firstQ.explanation,
          solution_type: typeof firstQ.solution,
        });
      }

      return parsed;
    } catch (error) {
      console.error('[test-results] Error parsing questions:', error);
      return [];
    }
  })();

  // Parse user answers (format: { "0": "A", "1": "B", ... })
  const userAnswers: { [key: number]: string } = params.userAnswers
    ? JSON.parse(params.userAnswers as string)
    : {};

  // Categorize questions
  const categorizedQuestions: {
    incorrect: QuestionWithAnswer[];
    unanswered: QuestionWithAnswer[];
    correct: QuestionWithAnswer[];
  } = questionsData.reduce(
    (acc, question, index) => {
      const userAnswer = userAnswers[index];
      const correctAnswer = question.correct_answer;

      // Convert options to map
      const optionsArray = Array.isArray(question.options) ? question.options : [];
      const optionsMap = optionsArray.reduce((map, option, idx) => {
        const key = String.fromCharCode(65 + idx); // A, B, C, D
        map[key] = option;
        return map;
      }, {} as Record<string, string>);

      const selectedOptionText = userAnswer ? optionsMap[userAnswer] : undefined;
      const isCorrect = selectedOptionText === correctAnswer;

      const questionWithAnswer: QuestionWithAnswer = {
        ...question,
        userAnswer,
        isCorrect,
        status: !userAnswer ? 'unanswered' : isCorrect ? 'correct' : 'incorrect',
      };

      if (!userAnswer) {
        acc.unanswered.push(questionWithAnswer);
      } else if (isCorrect) {
        acc.correct.push(questionWithAnswer);
      } else {
        acc.incorrect.push(questionWithAnswer);
      }

      return acc;
    },
    { incorrect: [], unanswered: [], correct: [] } as {
      incorrect: QuestionWithAnswer[];
      unanswered: QuestionWithAnswer[];
      correct: QuestionWithAnswer[];
    }
  );

  // Initialize all questions as expanded (open by default)
  const [expandedQuestions, setExpandedQuestions] = useState<Set<string>>(
    () => new Set(questionsData.map(q => q.id))
  );

  const toggleQuestion = (questionId: string) => {
    setExpandedQuestions((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(questionId)) {
        newSet.delete(questionId);
      } else {
        newSet.add(questionId);
      }
      return newSet;
    });
  };

  const scrollToSection = (sectionRef: React.RefObject<View>) => {
    if (sectionRef.current && scrollViewRef.current) {
      sectionRef.current.measureLayout(
        // @ts-ignore - measureLayout exists on View
        scrollViewRef.current,
        (x, y) => {
          scrollViewRef.current?.scrollTo({ y: y - 20, animated: true });
        },
        () => {}
      );
    }
  };

  const renderQuestion = (question: QuestionWithAnswer, index: number) => {
    const isExpanded = expandedQuestions.has(question.id);

    // Convert options to map
    const optionsArray = Array.isArray(question.options) ? question.options : [];
    const options = optionsArray.reduce((map, option, idx) => {
      const key = String.fromCharCode(65 + idx); // A, B, C, D
      map[key] = option;
      return map;
    }, {} as Record<string, string>);

    // Find correct answer key
    const correctAnswerKey = Object.entries(options).find(
      ([_, text]) => text === question.correct_answer
    )?.[0];

    const statusColor =
      question.status === 'correct'
        ? 'bg-green-50 border-green-200'
        : question.status === 'incorrect'
        ? 'bg-red-50 border-red-200'
        : 'bg-orange-50 border-orange-200';

    const statusIcon =
      question.status === 'correct' ? '✓' : question.status === 'incorrect' ? '✗' : '○';

    return (
      <View key={question.id} className={`mb-4 rounded-2xl border ${statusColor} overflow-hidden`}>
        <TouchableOpacity
          onPress={() => toggleQuestion(question.id)}
          className="p-4"
          activeOpacity={0.7}
        >
          <View className="flex-row items-center justify-between mb-2">
            <View className="flex-row items-center flex-1">
              <Text className="text-2xl mr-3">{statusIcon}</Text>
              <Text className="text-base font-semibold text-gray-900 flex-1">
                Question {index + 1}
              </Text>
            </View>
            <Ionicons
              name={isExpanded ? 'chevron-up' : 'chevron-down'}
              size={24}
              color="#6B7280"
            />
          </View>

          {!isExpanded && (
            <View className="ml-11">
              <MathText
                text={question.question}
                fontSize="small"
                color="#374151"
              />
            </View>
          )}
        </TouchableOpacity>

        {isExpanded && (
          <View className="px-4 pb-4">
            {/* Question with Image */}
            <View className="mb-4">
              {question.image_url && (
                <Image
                  source={{ uri: question.image_url }}
                  className="w-full h-48 rounded-xl mb-4"
                  resizeMode="contain"
                />
              )}
              <MathText
                text={question.question}
                fontSize="medium"
                color="#111827"
                style={{ fontWeight: '600' }}
              />
            </View>

            {/* Options */}
            <View className="mb-4">
              {Object.entries(options).map(([key, value]) => {
                const isUserAnswer = question.userAnswer === key;
                const isCorrectAnswer = key === correctAnswerKey;

                let optionStyle = 'bg-white border-gray-200';
                let textStyle = 'text-gray-900';
                let icon = null;

                if (isCorrectAnswer) {
                  optionStyle = 'bg-green-100 border-green-300';
                  textStyle = 'text-green-900 font-semibold';
                  icon = <Text className="text-green-600 text-lg ml-2">✓</Text>;
                } else if (isUserAnswer && !isCorrectAnswer) {
                  optionStyle = 'bg-red-100 border-red-300';
                  textStyle = 'text-red-900 font-semibold';
                  icon = <Text className="text-red-600 text-lg ml-2">✗</Text>;
                }

                return (
                  <View
                    key={key}
                    className={`p-3 rounded-xl mb-2 border ${optionStyle}`}
                  >
                    <View className="flex-row items-center justify-between">
                      <View className="flex-1">
                        <MathText
                          text={`${key}. ${value}`}
                          fontSize="small"
                          color={isCorrectAnswer ? '#14532d' : isUserAnswer ? '#7f1d1d' : '#111827'}
                          style={{ fontWeight: (isCorrectAnswer || isUserAnswer) ? '600' : 'normal' }}
                        />
                      </View>
                      {icon}
                    </View>
                  </View>
                );
              })}
            </View>

            {/* Explanation */}
            {(() => {
              const resolvedExplanation = getQuestionExplanation(question);
              const hasExplanation = typeof resolvedExplanation === 'string' && resolvedExplanation.trim().length > 0;

              // Debug: Log explanation length
              if (hasExplanation && resolvedExplanation) {
                const length = resolvedExplanation.length;
                if (length > 5000) {
                  console.warn(`Question ${index + 1} has very long explanation: ${length} chars`, {
                    questionId: question.id,
                    firstChars: resolvedExplanation.substring(0, 100)
                  });
                }
              }

              if (!hasExplanation) {
                return null;
              }

              // Green border for correct answers
              if (question.status === 'correct') {
                return (
                  <View className="bg-white p-4 rounded-xl border-2 border-green-500" style={{ minHeight: 80 }}>
                    <Text className="text-xs font-semibold text-gray-700 mb-2">
                      EXPLANATION
                    </Text>
                    <View style={{ width: '100%' }}>
                      <MathText
                        text={resolvedExplanation}
                        fontSize="small"
                        color="#111827"
                        style={{ width: '100%', flex: 1 }}
                      />
                    </View>
                  </View>
                );
              }

              // Purple gradient border for incorrect answers
              return (
                <LinearGradient
                  colors={['#9333ea', '#c084fc', '#9333ea']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  className="rounded-xl p-0.5"
                  style={{ minHeight: 80 }}
                >
                  <View className="bg-white p-4 rounded-xl h-full">
                    <Text className="text-xs font-semibold text-gray-700 mb-2">
                      EXPLANATION
                    </Text>
                    <View style={{ width: '100%' }}>
                      <MathText
                        text={resolvedExplanation}
                        fontSize="small"
                        color="#111827"
                        style={{ width: '100%', flex: 1 }}
                      />
                    </View>
                  </View>
                </LinearGradient>
              );
            })()}
          </View>
        )}
      </View>
    );
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />

      {/* Header */}
      <View className="px-6 pt-16 pb-4 bg-white border-b border-gray-200">
        <View className="flex-row items-center justify-between">
          <TouchableOpacity onPress={() => router.push('/(tabs)/home')}>
            <Ionicons name="close" size={28} color="#000" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-gray-900">Test Results</Text>
          <View style={{ width: 28 }} />
        </View>
      </View>

      <ScrollView
        ref={scrollViewRef}
        className="flex-1"
        showsVerticalScrollIndicator={false}
      >
        <View className="px-6 py-6">
          {/* Stats Summary */}
          <View className="items-center mb-8">
            <Text className="text-6xl mb-4">🎉</Text>
            <Text className="text-3xl font-bold text-gray-800 mb-2">
              Test Complete!
            </Text>
          </View>

          {/* Score Card */}
          <View className="bg-blue-50 p-6 rounded-2xl mb-6">
            <View className="items-center mb-4">
              <Text className="text-6xl font-bold text-blue-500">
                {accuracy.toFixed(0)}%
              </Text>
              <Text className="text-gray-600 mt-2 text-lg">Accuracy</Text>
            </View>

            <View className="flex-row justify-around pt-4 border-t border-blue-200">
              <View className="items-center flex-1">
                <Text className="text-3xl font-bold text-green-500">
                  {correctCount}
                </Text>
                <Text className="text-gray-600 text-xs mt-1">Correct</Text>
              </View>

              <View className="w-px bg-blue-200" />

              <View className="items-center flex-1">
                <Text className="text-3xl font-bold text-red-500">
                  {incorrectCount}
                </Text>
                <Text className="text-gray-600 text-xs mt-1">Incorrect</Text>
              </View>

              <View className="w-px bg-blue-200" />

              <View className="items-center flex-1">
                <Text className="text-3xl font-bold text-orange-500">
                  {skippedCount}
                </Text>
                <Text className="text-gray-600 text-xs mt-1">Skipped</Text>
              </View>

              <View className="w-px bg-blue-200" />

              <View className="items-center flex-1">
                <Text className="text-3xl font-bold text-blue-500">
                  {totalQuestions}
                </Text>
                <Text className="text-gray-600 text-xs mt-1">Total</Text>
              </View>
            </View>
          </View>

          {/* Section Navigation Buttons */}
          <View className="mb-8">
            <Text className="text-sm font-semibold text-gray-700 mb-3">
              Jump to Section
            </Text>
            <View className="flex-row gap-3">
              {incorrectCount > 0 && (
                <TouchableOpacity
                  onPress={() => scrollToSection(incorrectSectionRef)}
                  className="flex-1 py-3 px-4 rounded-xl border-2 bg-white border-red-200"
                >
                  <Text className="text-center font-semibold text-red-500">
                    Incorrect
                  </Text>
                  <Text className="text-center text-xs mt-1 text-red-400">
                    {incorrectCount}
                  </Text>
                </TouchableOpacity>
              )}

              {skippedCount > 0 && (
                <TouchableOpacity
                  onPress={() => scrollToSection(skippedSectionRef)}
                  className="flex-1 py-3 px-4 rounded-xl border-2 bg-white border-orange-200"
                >
                  <Text className="text-center font-semibold text-orange-500">
                    Skipped
                  </Text>
                  <Text className="text-center text-xs mt-1 text-orange-400">
                    {skippedCount}
                  </Text>
                </TouchableOpacity>
              )}

              {correctCount > 0 && (
                <TouchableOpacity
                  onPress={() => scrollToSection(correctSectionRef)}
                  className="flex-1 py-3 px-4 rounded-xl border-2 bg-white border-green-200"
                >
                  <Text className="text-center font-semibold text-green-500">
                    Correct
                  </Text>
                  <Text className="text-center text-xs mt-1 text-green-400">
                    {correctCount}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>

          {/* Incorrect Questions Section */}
          {categorizedQuestions.incorrect.length > 0 && (
            <View ref={incorrectSectionRef} className="mb-8">
              <View className="flex-row items-center mb-4">
                <View className="bg-red-500 w-1 h-6 rounded-full mr-3" />
                <Text className="text-xl font-bold text-gray-900">
                  Incorrect ({categorizedQuestions.incorrect.length})
                </Text>
              </View>
              {categorizedQuestions.incorrect.map((question, index) =>
                renderQuestion(question, questionsData.indexOf(question))
              )}
            </View>
          )}

          {/* Unanswered Questions Section */}
          {categorizedQuestions.unanswered.length > 0 && (
            <View ref={skippedSectionRef} className="mb-8">
              <View className="flex-row items-center mb-4">
                <View className="bg-orange-500 w-1 h-6 rounded-full mr-3" />
                <Text className="text-xl font-bold text-gray-900">
                  Skipped ({categorizedQuestions.unanswered.length})
                </Text>
              </View>
              {categorizedQuestions.unanswered.map((question, index) =>
                renderQuestion(question, questionsData.indexOf(question))
              )}
            </View>
          )}

          {/* Correct Questions Section */}
          {categorizedQuestions.correct.length > 0 && (
            <View ref={correctSectionRef} className="mb-8">
              <View className="flex-row items-center mb-4">
                <View className="bg-green-500 w-1 h-6 rounded-full mr-3" />
                <Text className="text-xl font-bold text-gray-900">
                  Correct ({categorizedQuestions.correct.length})
                </Text>
              </View>
              {categorizedQuestions.correct.map((question, index) =>
                renderQuestion(question, questionsData.indexOf(question))
              )}
            </View>
          )}

          {/* Actions */}
          <View className="space-y-3 mt-8">
            <TouchableOpacity
              onPress={() => router.push('/(tabs)/analytics')}
              className="bg-green-500 py-4 px-8 rounded-xl"
            >
              <Text className="text-white text-center text-lg font-semibold">
                View Detailed Analytics
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push('/(tabs)/home')}
              className="bg-blue-500 py-4 px-8 rounded-xl mt-3"
            >
              <Text className="text-white text-center text-lg font-semibold">
                Start New Practice
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push('/(tabs)/home')}
              className="bg-gray-100 py-4 px-8 rounded-xl mt-3"
            >
              <Text className="text-gray-700 text-center text-lg font-semibold">
                Back to Home
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
