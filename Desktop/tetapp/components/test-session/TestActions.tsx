import { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface TestActionsProps {
  currentQuestionIndex: number;
  totalQuestions: number;
  onPrevious: () => void;
  onMarkForReview: () => void;
  onSubmit: () => void;
  isSubmitting?: boolean;
}

export const TestActions = memo(function TestActions({
  currentQuestionIndex,
  totalQuestions,
  onPrevious,
  onMarkForReview,
  onSubmit,
  isSubmitting = false,
}: TestActionsProps) {
  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion = currentQuestionIndex >= totalQuestions - 1;

  return (
    <View className="border-t border-gray-300 bg-white px-4 pt-3 pb-5">
      <View className="flex-row justify-between mb-4">
        <TouchableOpacity
          onPress={onPrevious}
          disabled={isFirstQuestion}
          className={`py-3 px-3 rounded-lg mr-2 items-center justify-center ${
            isFirstQuestion
              ? 'bg-gray-300'
              : 'bg-blue-600 active:bg-blue-700'
          }`}
          accessibilityRole="button"
          accessibilityLabel="Previous question"
        >
          <Ionicons
            name="chevron-back"
            size={24}
            color="white"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onMarkForReview}
          disabled={isSubmitting}
          className={`py-3 px-4 rounded-lg flex-1 mr-2 ${
            isSubmitting ? 'bg-purple-300' : 'bg-purple-500'
          }`}
          accessibilityRole="button"
          accessibilityLabel="Mark for review"
        >
          <Text className="text-white text-center font-semibold text-base">
            Mark for review
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onSubmit}
          disabled={isSubmitting}
          className={`py-3 px-4 rounded-lg flex-1 ${
            isSubmitting ? 'bg-green-300' : 'bg-green-600 active:bg-green-700'
          }`}
          accessibilityRole="button"
          accessibilityLabel={isLastQuestion ? 'Submit test' : 'Save and next question'}
        >
          <View className="flex-row items-center justify-center">
            <Text className="text-white font-semibold text-base mr-1">
              {isSubmitting ? 'Saving...' : isLastQuestion ? 'Submit' : 'Save & Next'}
            </Text>
            {!isSubmitting && !isLastQuestion && (
              <Ionicons name="chevron-forward" size={20} color="white" />
            )}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
});
