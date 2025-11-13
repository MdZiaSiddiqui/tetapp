/**
 * USAGE EXAMPLE: How to fetch and display questions by chapter
 *
 * This file demonstrates how to use the questions API in your React Native components.
 * Copy the relevant code into your actual components as needed.
 */

import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { getQuestionsByChapter, getQuestionsWithDetails } from './lib/api/questions';
import type { Question } from './lib/types/database.types';

/**
 * Example 1: Fetch questions when user clicks on "Enzymes" chapter
 */
export function EnzymeQuestionsScreen() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['questions', 'biochemistry', 'enzymes'],
    queryFn: async () => {
      const result = await getQuestionsByChapter('Biochemistry', 'Enzymes');
      if (result.error) throw result.error;
      return result.data;
    },
  });

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#3B82F6" />
        <Text className="mt-4 text-gray-600">Loading questions...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 justify-center items-center p-6">
        <Text className="text-red-600 text-center">
          Error loading questions: {error.message}
        </Text>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-6">
        <Text className="text-2xl font-bold mb-2">Enzymes</Text>
        <Text className="text-gray-600 mb-6">
          {data?.length || 0} questions available
        </Text>

        {data?.map((question, index) => (
          <QuestionCard key={question.id} question={question} index={index} />
        ))}
      </View>
    </ScrollView>
  );
}

/**
 * Example 2: Generic chapter questions component
 */
interface ChapterQuestionsProps {
  subjectName: string;
  chapterName: string;
}

export function ChapterQuestionsScreen({ subjectName, chapterName }: ChapterQuestionsProps) {
  const { data: questions, isLoading } = useQuery({
    queryKey: ['questions', subjectName, chapterName],
    queryFn: async () => {
      const result = await getQuestionsByChapter(subjectName, chapterName);
      if (result.error) throw result.error;
      return result.data;
    },
  });

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <ScrollView className="flex-1 bg-white p-6">
      <Text className="text-2xl font-bold mb-2">{chapterName}</Text>
      <Text className="text-lg text-gray-600 mb-6">{subjectName}</Text>

      <View className="mb-4">
        <Text className="text-sm text-gray-500">
          {questions?.length || 0} questions
        </Text>
      </View>

      {questions?.map((question, index) => (
        <QuestionCard key={question.id} question={question} index={index} />
      ))}
    </ScrollView>
  );
}

/**
 * Example 3: Question Card Component
 */
interface QuestionCardProps {
  question: Question;
  index: number;
}

function QuestionCard({ question, index }: QuestionCardProps) {
  const [showAnswer, setShowAnswer] = React.useState(false);

  // Parse the correct answer from filters
  const correctAnswer = question.filters?.correct_answer || '';

  return (
    <View className="mb-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
      {/* Question Header */}
      <View className="flex-row items-center justify-between mb-3">
        <Text className="text-sm font-semibold text-blue-600">
          Question {index + 1}
        </Text>
        <View className="flex-row gap-2">
          {question.tag && (
            <View className="px-2 py-1 bg-purple-100 rounded">
              <Text className="text-xs text-purple-700">{question.tag}</Text>
            </View>
          )}
          <View className={`px-2 py-1 rounded ${
            question.difficulty === 'easy' ? 'bg-green-100' :
            question.difficulty === 'medium' ? 'bg-yellow-100' :
            'bg-red-100'
          }`}>
            <Text className={`text-xs font-medium ${
              question.difficulty === 'easy' ? 'text-green-700' :
              question.difficulty === 'medium' ? 'text-yellow-700' :
              'text-red-700'
            }`}>
              {question.difficulty}
            </Text>
          </View>
        </View>
      </View>

      {/* Question Text */}
      <Text className="text-base text-gray-800 mb-4">
        {question.question}
      </Text>

      {/* Options */}
      <View className="space-y-2 mb-4">
        {question.options.map((option, optionIndex) => (
          <View
            key={optionIndex}
            className={`p-3 rounded-lg ${
              showAnswer && option === correctAnswer
                ? 'bg-green-100 border border-green-500'
                : 'bg-white border border-gray-300'
            }`}
          >
            <Text className={`${
              showAnswer && option === correctAnswer
                ? 'text-green-800 font-semibold'
                : 'text-gray-700'
            }`}>
              {option}
            </Text>
          </View>
        ))}
      </View>

      {/* Show Answer Button */}
      <TouchableOpacity
        onPress={() => setShowAnswer(!showAnswer)}
        className="py-2 px-4 bg-blue-500 rounded-lg"
      >
        <Text className="text-white text-center font-semibold">
          {showAnswer ? 'Hide Answer' : 'Show Answer'}
        </Text>
      </TouchableOpacity>

      {/* Answer Explanation */}
      {showAnswer && (
        <View className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <Text className="text-sm font-semibold text-blue-900 mb-2">
            Explanation:
          </Text>
          <Text className="text-sm text-blue-800 leading-6">
            {question.solutions}
          </Text>
        </View>
      )}
    </View>
  );
}

/**
 * Example 4: Fetch questions with filters (for practice mode)
 */
export function usePracticeQuestions(
  subjectIds?: string[],
  difficulty?: 'easy' | 'medium' | 'difficult',
  count: number = 10
) {
  return useQuery({
    queryKey: ['practice-questions', subjectIds, difficulty, count],
    queryFn: async () => {
      const { getRandomQuestions } = await import('./lib/api/questions');

      const result = await getRandomQuestions({
        subject_id: subjectIds?.[0], // You can extend this to handle multiple subjects
        difficulty,
        count,
      });

      if (result.error) throw result.error;
      return result.data;
    },
  });
}

/**
 * Example 5: Get chapters with question counts
 */
export function SubjectChaptersScreen({ subjectId }: { subjectId: string }) {
  const { data: chapters } = useQuery({
    queryKey: ['chapters-with-counts', subjectId],
    queryFn: async () => {
      const { getChaptersWithQuestionCounts } = await import('./lib/api/questions');
      const result = await getChaptersWithQuestionCounts(subjectId);
      if (result.error) throw result.error;
      return result.data;
    },
  });

  return (
    <ScrollView className="flex-1 bg-white p-6">
      <Text className="text-2xl font-bold mb-6">Chapters</Text>

      {chapters?.map((chapter) => (
        <TouchableOpacity
          key={chapter.id}
          className="p-4 mb-3 bg-gray-50 rounded-xl border border-gray-200"
        >
          <View className="flex-row justify-between items-center">
            <View className="flex-1">
              <Text className="text-lg font-semibold text-gray-800">
                {chapter.name}
              </Text>
              {chapter.description && (
                <Text className="text-sm text-gray-600 mt-1">
                  {chapter.description}
                </Text>
              )}
            </View>
            <View className="ml-4 px-3 py-1 bg-blue-100 rounded-full">
              <Text className="text-blue-700 font-semibold">
                {/* @ts-ignore - Supabase count relation */}
                {chapter.questions?.[0]?.count || 0}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
