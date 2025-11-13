import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../lib/auth-context';

export default function PracticeResults() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { user } = useAuth();

  const totalQuestions = parseInt(params.totalQuestions as string) || 0;
  const answeredCount = parseInt(params.answeredCount as string) || 0;
  const correctCount = parseInt(params.correctCount as string) || 0;
  const skippedCount = parseInt(params.skippedCount as string) || 0;

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
    <ScrollView className="flex-1 bg-white">
      <StatusBar style="dark" />

      <View className="px-6 pt-16 pb-6">
        {/* Completion Header */}
        <View className="items-center mb-8">
          <Text className="text-6xl mb-4">🎉</Text>
          <Text className="text-3xl font-bold text-gray-800 mb-2">
            Session Complete!
          </Text>
        </View>

        {/* Score Card */}
        <View className="bg-blue-50 p-6 rounded-2xl mb-6">
          <View className="items-center mb-4">
            <Text className="text-6xl font-bold text-blue-500">
              {sessionResults.accuracy.toFixed(0)}%
            </Text>
            <Text className="text-gray-600 mt-2 text-lg">Accuracy</Text>
          </View>

          <View className="flex-row justify-around pt-4 border-t border-blue-200">
            <View className="items-center flex-1">
              <Text className="text-3xl font-bold text-green-500">
                {sessionResults.correct}
              </Text>
              <Text className="text-gray-600 text-xs mt-1">Correct</Text>
            </View>

            <View className="w-px bg-blue-200" />

            <View className="items-center flex-1">
              <Text className="text-3xl font-bold text-red-500">
                {sessionResults.incorrect}
              </Text>
              <Text className="text-gray-600 text-xs mt-1">Incorrect</Text>
            </View>

            <View className="w-px bg-blue-200" />

            <View className="items-center flex-1">
              <Text className="text-3xl font-bold text-orange-500">
                {sessionResults.skipped}
              </Text>
              <Text className="text-gray-600 text-xs mt-1">Skipped</Text>
            </View>

            <View className="w-px bg-blue-200" />

            <View className="items-center flex-1">
              <Text className="text-3xl font-bold text-blue-500">
                {sessionResults.total}
              </Text>
              <Text className="text-gray-600 text-xs mt-1">Total</Text>
            </View>
          </View>
        </View>

        {/* Actions */}
        <View className="space-y-3">
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
  );
}
