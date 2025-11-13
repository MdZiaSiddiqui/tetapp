import { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../lib/auth-context';

interface Question {
  id: string;
  question_text: string;
  question_type: 'mcq' | 'image' | 'case';
  difficulty: string;
  options: any;
  correct_answer: string;
  explanation: string;
  image_url: string | null;
  case_scenario_id: string | null;
}

export default function RevisionSession() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answeredQuestions, setAnsweredQuestions] = useState<
    { questionId: string; answer: string; timeSpent: number }[]
  >([]);
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());
  const [timeRemaining, setTimeRemaining] = useState(
    (parseInt(params.timerMinutes as string) || 15) * 60
  );
  const [showExplanation, setShowExplanation] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Fetch revision questions based on mode
  const { data: questions, isLoading } = useQuery({
    queryKey: ['revision-questions', params],
    queryFn: async () => {
      const limit = parseInt(params.questionCount as string) || 10;
      let questionIds: string[] = [];

      if (params.revisionMode === 'mistakes_3days') {
        // Get questions from last 3 days mistakes
        const threeDaysAgo = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString();
        const { data: attempts, error } = await supabase
          .from('user_attempts')
          .select('question_id')
          .eq('user_id', user?.id)
          .eq('is_correct', false)
          .gte('created_at', threeDaysAgo)
          .limit(limit);

        if (error) throw error;
        questionIds = [...new Set(attempts?.map(a => a.question_id) || [])];

      } else if (params.revisionMode === 'bookmarks') {
        // Get bookmarked questions
        const { data: bookmarks, error } = await supabase
          .from('bookmarks')
          .select('question_id')
          .eq('user_id', user?.id)
          .limit(limit);

        if (error) throw error;
        questionIds = bookmarks?.map(b => b.question_id) || [];

      } else if (params.revisionMode === 'deep_revision') {
        // Get all wrong attempts
        const { data: attempts, error } = await supabase
          .from('user_attempts')
          .select('question_id')
          .eq('user_id', user?.id)
          .eq('is_correct', false)
          .limit(limit * 2); // Get more to ensure unique questions

        if (error) throw error;
        questionIds = [...new Set(attempts?.map(a => a.question_id) || [])];
      }

      if (questionIds.length === 0) {
        return [];
      }

      // Fetch actual questions
      let query = supabase
        .from('questions')
        .select('*')
        .in('id', questionIds)
        .limit(limit);

      // Apply subject filter if provided
      if (params.subjectIds) {
        const subjectIds = (params.subjectIds as string).split(',');
        query = query.in('subject_id', subjectIds);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data as Question[];
    },
    enabled: !!user?.id,
  });

  // Check if current question is bookmarked
  const { data: bookmark } = useQuery({
    queryKey: ['bookmark', questions?.[currentQuestionIndex]?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('bookmarks')
        .select('*')
        .eq('user_id', user?.id)
        .eq('question_id', questions?.[currentQuestionIndex]?.id)
        .maybeSingle();
      if (error) throw error;
      setIsBookmarked(!!data);
      return data;
    },
    enabled: !!questions && !!user?.id && currentQuestionIndex < questions.length,
  });

  // Timer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleFinishSession();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Save attempt mutation
  const saveAttempt = useMutation({
    mutationFn: async (data: {
      questionId: string;
      answer: string;
      timeSpent: number;
    }) => {
      const currentQuestion = questions?.find((q) => q.id === data.questionId);
      const isCorrect = data.answer === currentQuestion?.correct_answer;

      const { error } = await supabase.from('user_attempts').insert({
        user_id: user?.id!,
        question_id: data.questionId,
        selected_answer: data.answer,
        is_correct: isCorrect,
        time_taken: Math.floor(data.timeSpent / 1000),
        mode: 'revision',
      });

      if (error) throw error;
      return isCorrect;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] });
      queryClient.invalidateQueries({ queryKey: ['difficulty-stats'] });
      queryClient.invalidateQueries({ queryKey: ['subject-stats'] });
    },
  });

  // Toggle bookmark mutation
  const toggleBookmark = useMutation({
    mutationFn: async (questionId: string) => {
      if (isBookmarked) {
        const { error } = await supabase
          .from('bookmarks')
          .delete()
          .eq('user_id', user?.id)
          .eq('question_id', questionId);
        if (error) throw error;
      } else {
        const { error } = await supabase.from('bookmarks').insert({
          user_id: user?.id!,
          question_id: questionId,
        });
        if (error) throw error;
      }
      setIsBookmarked(!isBookmarked);
    },
  });

  const handleAnswerSelect = (answer: string) => {
    if (showExplanation) return;
    setSelectedAnswer(answer);
  };

  const handleSubmitAnswer = () => {
    if (!selectedAnswer) {
      Alert.alert('Please select an answer');
      return;
    }

    const timeSpent = Date.now() - questionStartTime;
    const currentQuestion = questions?.[currentQuestionIndex];

    if (currentQuestion) {
      setAnsweredQuestions((prev) => [
        ...prev,
        {
          questionId: currentQuestion.id,
          answer: selectedAnswer,
          timeSpent,
        },
      ]);

      saveAttempt.mutate({
        questionId: currentQuestion.id,
        answer: selectedAnswer,
        timeSpent,
      });

      setShowExplanation(true);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < (questions?.length || 0) - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setQuestionStartTime(Date.now());
    } else {
      handleFinishSession();
    }
  };

  const handleFinishSession = () => {
    router.replace({
      pathname: '/practice/results',
      params: {
        totalQuestions: questions?.length || 0,
        answeredCount: answeredQuestions.length,
      },
    });
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (isLoading || !questions) {
    return (
      <View className="flex-1 bg-white justify-center items-center">
        <Text className="text-gray-600">Loading revision questions...</Text>
      </View>
    );
  }

  if (questions.length === 0) {
    return (
      <View className="flex-1 bg-white justify-center items-center px-6">
        <Text className="text-6xl mb-4">🎯</Text>
        <Text className="text-2xl font-bold text-gray-800 mb-2 text-center">
          No Questions Found
        </Text>
        <Text className="text-gray-600 text-center mb-6">
          You don't have any questions in this category yet. Keep practicing!
        </Text>
        <TouchableOpacity
          onPress={() => router.back()}
          className="bg-blue-500 py-4 px-8 rounded-xl"
        >
          <Text className="text-white text-lg font-semibold">Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const options = currentQuestion.options as { [key: string]: string };
  const isCorrect = selectedAnswer === currentQuestion.correct_answer;

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />

      {/* Header */}
      <View className="px-6 pt-16 pb-4 border-b border-gray-200">
        <View className="flex-row justify-between items-center mb-3">
          <TouchableOpacity onPress={() => router.back()}>
            <Text className="text-purple-500 text-lg">← Exit</Text>
          </TouchableOpacity>

          <View className="bg-red-100 px-4 py-2 rounded-full">
            <Text className="text-red-600 font-bold">
              {formatTime(timeRemaining)}
            </Text>
          </View>
        </View>

        <View className="flex-row justify-between items-center">
          <Text className="text-gray-600">
            Question {currentQuestionIndex + 1} of {questions.length}
          </Text>

          <TouchableOpacity
            onPress={() => toggleBookmark.mutate(currentQuestion.id)}
          >
            <Text className="text-2xl">{isBookmarked ? '⭐' : '☆'}</Text>
          </TouchableOpacity>
        </View>

        <View className="bg-gray-200 h-2 rounded-full mt-3">
          <View
            className="bg-purple-500 h-full rounded-full"
            style={{
              width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
            }}
          />
        </View>
      </View>

      <ScrollView className="flex-1">
        <View className="px-6 py-6">
          {/* Question */}
          <View className="mb-6">
            <View className="bg-purple-50 px-3 py-1 rounded-full self-start mb-3">
              <Text className="text-purple-600 text-xs font-semibold uppercase">
                Revision • {currentQuestion.difficulty}
              </Text>
            </View>

            {currentQuestion.image_url && (
              <Image
                source={{ uri: currentQuestion.image_url }}
                className="w-full h-48 rounded-xl mb-4"
                resizeMode="cover"
              />
            )}

            <Text className="text-xl font-semibold text-gray-800">
              {currentQuestion.question_text}
            </Text>
          </View>

          {/* Options */}
          <View className="space-y-3">
            {Object.entries(options).map(([key, value]) => {
              const isSelected = selectedAnswer === key;
              const isCorrectOption = key === currentQuestion.correct_answer;
              const showCorrect = showExplanation && isCorrectOption;
              const showWrong = showExplanation && isSelected && !isCorrect;

              return (
                <TouchableOpacity
                  key={key}
                  onPress={() => handleAnswerSelect(key)}
                  disabled={showExplanation}
                  className={`p-4 rounded-xl border-2 ${
                    showCorrect
                      ? 'bg-green-50 border-green-500'
                      : showWrong
                      ? 'bg-red-50 border-red-500'
                      : isSelected
                      ? 'bg-purple-50 border-purple-500'
                      : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <View className="flex-row items-center">
                    <View
                      className={`w-8 h-8 rounded-full border-2 items-center justify-center mr-3 ${
                        showCorrect
                          ? 'bg-green-500 border-green-500'
                          : showWrong
                          ? 'bg-red-500 border-red-500'
                          : isSelected
                          ? 'bg-purple-500 border-purple-500'
                          : 'border-gray-300'
                      }`}
                    >
                      <Text
                        className={`font-bold ${
                          showCorrect || showWrong || isSelected
                            ? 'text-white'
                            : 'text-gray-600'
                        }`}
                      >
                        {key}
                      </Text>
                    </View>
                    <Text
                      className={`flex-1 ${
                        showCorrect || showWrong
                          ? 'font-semibold'
                          : 'text-gray-800'
                      }`}
                    >
                      {value}
                    </Text>
                    {showCorrect && <Text className="text-xl">✓</Text>}
                    {showWrong && <Text className="text-xl">✗</Text>}
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Explanation */}
          {showExplanation && (
            <View className="mt-6 bg-purple-50 p-4 rounded-xl">
              <Text className="font-bold text-gray-800 mb-2">Explanation:</Text>
              <Text className="text-gray-700">{currentQuestion.explanation}</Text>
            </View>
          )}
        </View>
      </ScrollView>

      {/* Bottom Actions */}
      <View className="px-6 py-4 border-t border-gray-200">
        {!showExplanation ? (
          <TouchableOpacity
            onPress={handleSubmitAnswer}
            disabled={!selectedAnswer}
            className={`py-4 px-8 rounded-xl ${
              selectedAnswer ? 'bg-purple-500' : 'bg-gray-300'
            }`}
          >
            <Text className="text-white text-center text-lg font-semibold">
              Submit Answer
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={handleNextQuestion}
            className="bg-purple-500 py-4 px-8 rounded-xl"
          >
            <Text className="text-white text-center text-lg font-semibold">
              {currentQuestionIndex < questions.length - 1
                ? 'Next Question'
                : 'Finish Session'}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
