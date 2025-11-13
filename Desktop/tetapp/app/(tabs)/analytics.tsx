import { View, Text, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../lib/auth-context';

export default function Analytics() {
  const { user } = useAuth();

  // Fetch user profile
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

  // Fetch performance by difficulty
  const { data: difficultyStats } = useQuery({
    queryKey: ['difficulty-stats', user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('user_attempts')
        .select(`
          is_correct,
          question:questions(difficulty)
        `)
        .eq('user_id', user?.id);

      if (error) throw error;

      const stats = {
        easy: { total: 0, correct: 0 },
        medium: { total: 0, correct: 0 },
        difficult: { total: 0, correct: 0 },
      };

      data?.forEach((attempt: any) => {
        const difficulty = attempt.question?.difficulty;
        if (difficulty && stats[difficulty as keyof typeof stats]) {
          stats[difficulty as keyof typeof stats].total++;
          if (attempt.is_correct) {
            stats[difficulty as keyof typeof stats].correct++;
          }
        }
      });

      return {
        easy: stats.easy.total > 0 ? (stats.easy.correct / stats.easy.total) * 100 : 0,
        medium: stats.medium.total > 0 ? (stats.medium.correct / stats.medium.total) * 100 : 0,
        difficult: stats.difficult.total > 0 ? (stats.difficult.correct / stats.difficult.total) * 100 : 0,
      };
    },
    enabled: !!user?.id,
  });

  // Fetch performance by subject
  const { data: subjectStats } = useQuery({
    queryKey: ['subject-stats', user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('user_attempts')
        .select(`
          is_correct,
          question:questions(
            subject:subjects(name)
          )
        `)
        .eq('user_id', user?.id);

      if (error) throw error;

      const statsMap: { [key: string]: { total: number; correct: number } } = {};

      data?.forEach((attempt: any) => {
        const subjectName = attempt.question?.subject?.name;
        if (subjectName) {
          if (!statsMap[subjectName]) {
            statsMap[subjectName] = { total: 0, correct: 0 };
          }
          statsMap[subjectName].total++;
          if (attempt.is_correct) {
            statsMap[subjectName].correct++;
          }
        }
      });

      return Object.entries(statsMap)
        .map(([name, stats]) => ({
          name,
          percentage: (stats.correct / stats.total) * 100,
          total: stats.total,
        }))
        .sort((a, b) => b.percentage - a.percentage);
    },
    enabled: !!user?.id,
  });

  // Calculate overall accuracy
  const { data: overallAccuracy } = useQuery({
    queryKey: ['overall-accuracy', user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('user_attempts')
        .select('is_correct')
        .eq('user_id', user?.id);

      if (error) throw error;

      const total = data?.length || 0;
      const correct = data?.filter((a) => a.is_correct).length || 0;

      return total > 0 ? (correct / total) * 100 : 0;
    },
    enabled: !!user?.id,
  });

  return (
    <ScrollView className="flex-1 bg-white">
      <StatusBar style="dark" />

      <View className="px-6 pt-16 pb-6">
        <Text className="text-3xl font-bold text-gray-800 mb-2">
          Analytics
        </Text>
        <Text className="text-gray-600 mb-6">
          Track your performance and progress
        </Text>

        {/* Overall Stats */}
        <View className="bg-blue-50 p-6 rounded-2xl mb-6">
          <Text className="text-gray-700 font-semibold text-lg mb-4">
            Overall Performance
          </Text>

          <View className="items-center mb-4">
            <Text className="text-6xl font-bold text-blue-500">
              {overallAccuracy?.toFixed(1)}%
            </Text>
            <Text className="text-gray-600 mt-2">Success Rate</Text>
          </View>

          <View className="flex-row justify-around pt-4 border-t border-blue-200">
            <View className="items-center">
              <Text className="text-2xl font-bold text-blue-500">
                {profile?.total_questions_attempted || 0}
              </Text>
              <Text className="text-gray-600 text-sm mt-1">Questions</Text>
            </View>

            <View className="w-px bg-blue-200" />

            <View className="items-center">
              <Text className="text-2xl font-bold text-blue-500">
                Level {profile?.level || 1}
              </Text>
              <Text className="text-gray-600 text-sm mt-1">Your Level</Text>
            </View>
          </View>
        </View>

        {/* Performance by Difficulty */}
        <Text className="text-xl font-bold text-gray-800 mb-4">
          Success Rate by Difficulty
        </Text>

        <View className="space-y-3 mb-6">
          <View className="bg-green-50 p-4 rounded-xl">
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-gray-700 font-semibold">Easy</Text>
              <Text className="text-green-600 font-bold">
                {difficultyStats?.easy.toFixed(1)}%
              </Text>
            </View>
            <View className="bg-white h-3 rounded-full overflow-hidden">
              <View
                className="bg-green-500 h-full"
                style={{ width: `${difficultyStats?.easy || 0}%` }}
              />
            </View>
          </View>

          <View className="bg-yellow-50 p-4 rounded-xl mt-3">
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-gray-700 font-semibold">Medium</Text>
              <Text className="text-yellow-600 font-bold">
                {difficultyStats?.medium.toFixed(1)}%
              </Text>
            </View>
            <View className="bg-white h-3 rounded-full overflow-hidden">
              <View
                className="bg-yellow-500 h-full"
                style={{ width: `${difficultyStats?.medium || 0}%` }}
              />
            </View>
          </View>

          <View className="bg-red-50 p-4 rounded-xl mt-3">
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-gray-700 font-semibold">Difficult</Text>
              <Text className="text-red-600 font-bold">
                {difficultyStats?.difficult.toFixed(1)}%
              </Text>
            </View>
            <View className="bg-white h-3 rounded-full overflow-hidden">
              <View
                className="bg-red-500 h-full"
                style={{ width: `${difficultyStats?.difficult || 0}%` }}
              />
            </View>
          </View>
        </View>

        {/* Performance by Subject */}
        <Text className="text-xl font-bold text-gray-800 mb-4">
          Subject-wise Performance
        </Text>

        {subjectStats?.map((subject, index) => (
          <View key={index} className="bg-gray-50 p-4 rounded-xl mb-3">
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-gray-700 font-semibold flex-1">
                {subject.name}
              </Text>
              <Text className="text-gray-500 text-sm mr-2">
                {subject.total} questions
              </Text>
              <Text className="text-blue-600 font-bold">
                {subject.percentage.toFixed(1)}%
              </Text>
            </View>
            <View className="bg-white h-2 rounded-full overflow-hidden">
              <View
                className="bg-blue-500 h-full"
                style={{ width: `${subject.percentage}%` }}
              />
            </View>
          </View>
        ))}

        {(!subjectStats || subjectStats.length === 0) && (
          <View className="bg-gray-50 p-8 rounded-xl items-center">
            <Text className="text-gray-500 text-center">
              No data available yet. Start practicing to see your stats!
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}
