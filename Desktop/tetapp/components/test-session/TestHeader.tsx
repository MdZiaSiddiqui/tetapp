import { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface TestHeaderProps {
  currentQuestionNumber: number;
  totalQuestions: number;
  formattedTime: string;
  isLowTime?: boolean;
  onBack: () => void;
}

export const TestHeader = memo(function TestHeader({
  currentQuestionNumber,
  totalQuestions,
  formattedTime,
  isLowTime = false,
  onBack,
}: TestHeaderProps) {
  return (
    <View className="px-6 pt-16 pb-4 bg-white border-b border-gray-300 shadow-md">
      <View className="flex-row justify-between items-center mb-3">
        <TouchableOpacity
          onPress={onBack}
          className="flex items-center justify-center z-10"
          accessibilityRole="button"
          accessibilityLabel="Go back"
        >
          <Ionicons name="chevron-back" size={24} color="#000000" />
        </TouchableOpacity>

        <View className="absolute left-0 right-0 items-center" style={{ pointerEvents: 'none' }}>
          <Text className="text-gray-700 font-semibold text-base">
            Question {currentQuestionNumber} of {totalQuestions}
          </Text>
        </View>

        <View
          className={`px-3 py-1 rounded-full shadow-sm ${
            isLowTime ? 'bg-red-400' : 'bg-green-300'
          }`}
        >
          <Text className="text-black font-bold text-sm">
            {formattedTime}
          </Text>
        </View>
      </View>
    </View>
  );
});
