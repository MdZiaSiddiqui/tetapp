import { memo } from 'react';
import { View, Text } from 'react-native';
import { HomeShape, InvertedHomeShape } from '../PentagonShapes';
import { QuestionStats as QuestionStatsType } from '../../hooks/useQuestionStats';

interface QuestionStatsProps {
  stats: QuestionStatsType;
}

export const QuestionStats = memo(function QuestionStats({ stats }: QuestionStatsProps) {
  return (
    <View className="gap-3">
      {/* Answered */}
      <View className="flex-row items-center gap-3 pt-6">
        <View style={{ width: 48, height: 45, justifyContent: 'center', alignItems: 'center' }}>
          <HomeShape size={45} color="#7CC94D">
            <Text className="text-white font-bold text-sm">
              {stats.answered}
            </Text>
          </HomeShape>
        </View>
        <Text className="text-sm text-gray-700 font-medium flex-1">
          Answered
        </Text>
      </View>

      {/* Not Answered */}
      <View className="flex-row items-center gap-3">
        <View style={{ width: 48, height: 45, justifyContent: 'center', alignItems: 'center' }}>
          <InvertedHomeShape size={45} color="#ef4444">
            <Text className="text-white font-bold text-sm">
              {stats.notAnswered}
            </Text>
          </InvertedHomeShape>
        </View>
        <Text className="text-sm text-gray-700 font-medium flex-1">
          Not Answered
        </Text>
      </View>

      {/* Not Visited */}
      <View className="flex-row items-center gap-3">
        <View
          style={{
            width: 48,
            height: 48,
            backgroundColor: '#9ca3af',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          className="shadow-sm"
        >
          <Text className="text-white font-bold text-sm">
            {stats.notVisited}
          </Text>
        </View>
        <Text className="text-sm text-gray-700 font-medium flex-1">
          Not visited
        </Text>
      </View>

      {/* Marked for Review */}
      <View className="flex-row items-center gap-3">
        <View
          style={{
            width: 48,
            height: 48,
            borderRadius: 24,
            backgroundColor: '#a855f7',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          className="shadow-sm"
        >
          <Text className="text-white font-bold text-sm">
            {stats.markedForReview}
          </Text>
        </View>
        <Text className="text-sm text-gray-700 font-medium flex-1">
          Marked for review
        </Text>
      </View>

      {/* Marked for Review + Answered */}
      <View className="flex-row items-center gap-3">
        <View style={{ width: 48, height: 48, position: 'relative', justifyContent: 'center', alignItems: 'center' }}>
          <View
            style={{
              width: 48,
              height: 48,
              borderRadius: 24,
              backgroundColor: '#a855f7',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            className="shadow-sm"
          >
            <Text className="text-white font-bold text-sm">
              {stats.markedForReviewAnswered}
            </Text>
          </View>
          {/* Green dot indicator */}
          <View
            style={{
              position: 'absolute',
              right: 0,
              bottom: 0,
              width: 14,
              height: 14,
              borderRadius: 7,
              backgroundColor: '#22c55e',
              borderWidth: 2,
              borderColor: '#ffffff',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* Three white lines */}
            <View style={{ width: 7, height: 1.5, backgroundColor: '#ffffff', marginBottom: 0.5 }} />
            <View style={{ width: 7, height: 1.5, backgroundColor: '#ffffff', marginBottom: 0.5 }} />
            <View style={{ width: 7, height: 1.5, backgroundColor: '#ffffff' }} />
          </View>
        </View>
        <Text className="text-sm text-gray-700 font-medium flex-1">
          Answered and marked for review (will be considered for evaluation)
        </Text>
      </View>
    </View>
  );
});
