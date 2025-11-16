import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../lib/auth-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function PracticeResults() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { user } = useAuth();

  const totalQuestions = parseInt(params.totalQuestions as string) || 0;
  const answeredCount = parseInt(params.answeredCount as string) || 0;
  const correctCount = parseInt(params.correctCount as string) || 0;
  const skippedCount = parseInt(params.skippedCount as string) || 0;
  const subjectId = params.subjectId as string | undefined;
  const subjectName = params.subjectName as string | undefined;
  const questionsJson = params.questions as string | undefined;
  const answersJson = params.answers as string | undefined;

  // Use passed incorrectCount if available, otherwise calculate (includes skipped as incorrect)
  const incorrectCount = params.incorrectCount
    ? parseInt(params.incorrectCount as string)
    : (totalQuestions - correctCount);

  // Calculate accuracy based on total questions (skipped questions count as incorrect)
  const accuracy = totalQuestions > 0 ? (correctCount / totalQuestions) * 100 : 0;

  // Fetch recent session results for additional stats (average time)
  const { data: dbSessionResults } = useQuery({
    queryKey: ['session-results', user?.id],
    queryFn: async () => {
      // Get attempts from the last 5 minutes (current session)
      const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000).toISOString();

      const { data, error } = await supabase
        .from('user_attempts')
        .select('*')
        .eq('user_id', user?.id)
        .gte('created_at', fiveMinutesAgo)
        .order('created_at', { ascending: false })
        .limit(totalQuestions);

      if (error) throw error;

      const totalTime = data?.reduce((sum, a) => sum + a.time_taken, 0) || 0;

      return {
        averageTime: data?.length ? totalTime / data.length : 0,
      };
    },
    enabled: !!user?.id,
  });

  // Combine params data with database stats
  const sessionResults = {
    total: totalQuestions,
    answered: answeredCount,
    correct: correctCount,
    incorrect: incorrectCount,
    skipped: skippedCount,
    accuracy: accuracy,
    averageTime: dbSessionResults?.averageTime || 0,
  };

  // Fetch updated profile
  const { data: profile } = useQuery({
    queryKey: ['profile', user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', user?.id)
        .single();
      if (error) throw error;
      return data;
    },
    enabled: !!user?.id,
  });

  return (
    <LinearGradient
      colors={['#faf5ff', '#f3e8ff', '#ede9fe']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      className="flex-1"
    >
      <StatusBar style="dark" />
      <ScrollView className="flex-1">
        <View className="px-6 pt-16 pb-6">
          {/* Completion Header */}
          <View className="items-center mb-8">
            <Text className="text-6xl mb-4">🎉</Text>
            <Text className="text-3xl font-bold text-gray-800 mb-2">
              Session Complete!
            </Text>
          </View>

          {/* Score Card */}
          <View className="bg-white p-6 rounded-2xl mb-6 shadow-lg">
            {/* Score and Percentage */}
            <View className="flex-row justify-around items-center mb-6">
              <View className="items-center flex-1">
                <Text className="text-gray-600 mb-2 text-sm font-medium">Score</Text>
                <Text className="text-5xl font-bold text-purple-600">
                  {sessionResults.correct}/{sessionResults.total}
                </Text>
              </View>

              <View className="w-px h-16 bg-gray-200" />

              <View className="items-center flex-1">
                <Text className="text-gray-600 mb-2 text-sm font-medium">Percentage</Text>
                <Text className="text-5xl font-bold text-purple-600">
                  {sessionResults.accuracy.toFixed(1)}%
                </Text>
              </View>
            </View>

            {/* Stats Breakdown */}
            <View className="flex-row justify-around pt-4 border-t border-gray-200">
              <View className="items-center flex-1">
                <Text className="text-3xl font-bold text-green-500">
                  {sessionResults.correct}
                </Text>
                <Text className="text-gray-600 text-xs mt-1 font-medium">Correct</Text>
              </View>

              <View className="w-px bg-gray-200" />

              <View className="items-center flex-1">
                <Text className="text-3xl font-bold text-red-500">
                  {sessionResults.incorrect}
                </Text>
                <Text className="text-gray-600 text-xs mt-1 font-medium">Incorrect</Text>
              </View>

              <View className="w-px bg-gray-200" />

              <View className="items-center flex-1">
                <Text className="text-3xl font-bold text-orange-500">
                  {sessionResults.skipped}
                </Text>
                <Text className="text-gray-600 text-xs mt-1 font-medium">Skipped</Text>
              </View>
            </View>
          </View>

          {/* Actions */}
          <View className="space-y-3">
            <TouchableOpacity
              onPress={() => {
                router.back();
              }}
              className="bg-purple-600 py-4 px-8 rounded-xl shadow-md"
              activeOpacity={0.7}
            >
              <Text className="text-white text-center text-lg font-semibold">
                Done
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
