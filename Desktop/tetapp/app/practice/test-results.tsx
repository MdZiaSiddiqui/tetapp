import { useState } from 'react';
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
  markedForReview?: boolean;
}

export default function TestResults() {
  const router = useRouter();
  const params = useLocalSearchParams();

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
  })();

  // Parse answers data
  const answersData: Record<string, string> = (() => {
    try {
      if (!params.answers) return {};
      return JSON.parse(params.answers as string);
    } catch (error) {
      console.error('[test-results] Error parsing answers:', error);
      return {};
    }
  })();

  // Parse marked for review data (array of question indices)
  const markedForReviewData: Set<number> = (() => {
    try {
      if (!params.markedForReview) return new Set();
      const parsed = JSON.parse(params.markedForReview as string);
      return new Set(Array.isArray(parsed) ? parsed.map(Number) : []);
    } catch (error) {
      console.error('[test-results] Error parsing markedForReview:', error);
      return new Set();
    }
  })();

  // Create questions with answers
  const questionsWithAnswers: QuestionWithAnswer[] = questionsData.map((question, index) => {
    const userAnswer = answersData[index];
    const isCorrect = userAnswer === question.correct_answer;
    const status = !userAnswer ? 'unanswered' : isCorrect ? 'correct' : 'incorrect';
    const markedForReview = markedForReviewData.has(index);

    return {
      ...question,
      userAnswer,
      isCorrect,
      status,
      markedForReview,
    };
  });

  return (
    <View className="flex-1 bg-gray-50">
      <StatusBar style="dark" />

      {/* Header */}
      <LinearGradient
        colors={['#3B82F6', '#2563EB']}
        className="pt-12 pb-6"
      >
        <View className="px-6 flex-row items-center justify-between">
          <TouchableOpacity
            onPress={() => router.back()}
            className="mr-4"
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Ionicons name="arrow-back" size={28} color="white" />
          </TouchableOpacity>
          <Text className="text-white text-2xl font-bold flex-1">Test Results</Text>
          <View style={{ width: 28 }} />
        </View>
      </LinearGradient>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
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
                {correctCount}/{totalQuestions}
              </Text>
              <Text className="text-gray-600 mt-2 text-lg">Score</Text>
            </View>

            <View className="flex-row justify-around pt-4 border-t border-blue-200">
              <View className="items-center flex-1">
                <Text className="text-3xl font-bold text-green-500">
                  {correctCount}
                </Text>
                <Text className="text-gray-600 text-sm mt-1">Correct</Text>
              </View>
              <View className="items-center flex-1">
                <Text className="text-3xl font-bold text-red-500">
                  {incorrectCount}
                </Text>
                <Text className="text-gray-600 text-sm mt-1">Incorrect</Text>
              </View>
              <View className="items-center flex-1">
                <Text className="text-3xl font-bold text-orange-500">
                  {skippedCount}
                </Text>
                <Text className="text-gray-600 text-sm mt-1">Skipped</Text>
              </View>
            </View>
          </View>

          {/* Quick Actions */}
          <View className="space-y-3 mb-8">
            <TouchableOpacity
              onPress={() => router.push('/(tabs)/analytics')}
              className="bg-green-500 py-4 px-8 rounded-xl"
            >
              <Text className="text-white text-center text-lg font-semibold">
                View Analytics
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push('/(tabs)/home')}
              className="bg-gray-100 py-4 px-8 rounded-xl"
            >
              <Text className="text-gray-700 text-center text-lg font-semibold">
                Back to Home
              </Text>
            </TouchableOpacity>
          </View>

          {/* Divider */}
          <View className="border-t border-gray-300 mb-6" />

          {/* All Questions Section */}
          <Text className="text-2xl font-bold text-gray-800 mb-4">
            Question Review
          </Text>

          {/* Render all questions */}
          {questionsWithAnswers.map((question, questionIndex) => {
            const isCorrect = question.status === 'correct';
            const isSkipped = question.status === 'unanswered';
            const explanation = getQuestionExplanation(question);

            return (
              <View key={question.id} className="mb-8">
                {/* Question Header */}
                <View className="bg-white p-4 rounded-t-2xl border-b-2 border-gray-200">
                  <View className="flex-row items-center justify-between mb-2">
                    <Text className="text-lg font-bold text-gray-800">
                      Question {questionIndex + 1}
                    </Text>
                    <View className="flex-row items-center gap-2">
                      <View className={`px-3 py-1 rounded-full ${
                        isCorrect ? 'bg-green-500' : isSkipped ? 'bg-orange-500' : 'bg-red-500'
                      }`}>
                        <Text className="text-white text-xs font-semibold">
                          {isCorrect ? '✓ Correct' : isSkipped ? '○ Skipped' : '✗ Incorrect'}
                        </Text>
                      </View>
                      {question.markedForReview && (
                        <View className="px-3 py-1 rounded-full bg-purple-500">
                          <Text className="text-white text-xs font-semibold">🔖 Review</Text>
                        </View>
                      )}
                    </View>
                  </View>
                </View>

                {/* Question Content */}
                <View className="bg-white p-6 rounded-b-2xl mb-2">
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
                  />
                </View>

                {/* Your Response */}
                <View className="bg-gray-50 p-4 rounded-xl mb-2">
                  <Text className="text-xs font-semibold text-gray-600 mb-2">YOUR RESPONSE</Text>
                  <View className="flex-row items-center">
                    {question.userAnswer ? (
                      <>
                        <View className={`w-8 h-8 rounded-full items-center justify-center ${
                          isCorrect ? 'bg-green-500' : 'bg-red-500'
                        }`}>
                          <Text className="text-white font-bold">{question.userAnswer}</Text>
                        </View>
                        <Text className={`ml-2 text-sm font-semibold ${
                          isCorrect ? 'text-green-700' : 'text-red-700'
                        }`}>
                          {isCorrect ? 'Correct' : 'Incorrect'}
                        </Text>
                      </>
                    ) : (
                      <>
                        <View className="w-8 h-8 rounded-full items-center justify-center bg-orange-500">
                          <Ionicons name="remove" size={20} color="white" />
                        </View>
                        <Text className="ml-2 text-sm font-semibold text-orange-700">
                          Not Answered
                        </Text>
                      </>
                    )}
                  </View>
                </View>

                {/* Options */}
                <View className="mb-2">
                  {question.options.map((option, idx) => {
                    const optionKey = String.fromCharCode(65 + idx);
                    const isUserAnswer = question.userAnswer === optionKey;
                    const isCorrectAnswer = question.correct_answer === optionKey;

                    let bgColor = 'bg-white border-gray-200';
                    let borderWidth = 'border';

                    if (isCorrectAnswer) {
                      bgColor = 'bg-green-50 border-green-500';
                      borderWidth = 'border-2';
                    } else if (isUserAnswer && !isCorrectAnswer) {
                      bgColor = 'bg-red-50 border-red-500';
                      borderWidth = 'border-2';
                    }

                    return (
                      <View
                        key={idx}
                        className={`mb-2 p-3 rounded-xl ${borderWidth} ${bgColor} flex-row items-start`}
                      >
                        <View className="mr-2 mt-1">
                          <View className={`w-7 h-7 rounded-full items-center justify-center ${
                            isCorrectAnswer ? 'bg-green-500' : isUserAnswer ? 'bg-red-500' : 'bg-gray-300'
                          }`}>
                            <Text className={`text-sm font-bold ${
                              isCorrectAnswer || isUserAnswer ? 'text-white' : 'text-gray-700'
                            }`}>
                              {optionKey}
                            </Text>
                          </View>
                        </View>
                        <View className="flex-1">
                          <MathText
                            text={option}
                            fontSize="small"
                            color="#374151"
                          />
                          {isCorrectAnswer && (
                            <Text className="text-green-600 font-semibold mt-1 text-xs">
                              ✓ Correct Answer
                            </Text>
                          )}
                          {isUserAnswer && !isCorrectAnswer && (
                            <Text className="text-red-600 font-semibold mt-1 text-xs">
                              ✗ Your Answer
                            </Text>
                          )}
                        </View>
                      </View>
                    );
                  })}
                </View>

                {/* Explanation */}
                {explanation && (
                  <View className="bg-blue-50 p-4 rounded-xl">
                    <Text className="text-xs font-semibold text-blue-600 mb-2">
                      EXPLANATION
                    </Text>
                    <MathText
                      text={explanation}
                      fontSize="small"
                      color="#1F2937"
                    />
                  </View>
                )}
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
