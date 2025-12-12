import { Modal, View, Text, TouchableOpacity, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeIn, FadeOut, SlideInDown, SlideOutDown } from 'react-native-reanimated';

interface QuestionStats {
  answered: number;
  notAnswered: number;
  marked: number;
  notVisited: number;
}

interface SubmitTestConfirmationModalProps {
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  stats: QuestionStats;
  totalQuestions: number;
}

export default function SubmitTestConfirmationModal({
  visible,
  onCancel,
  onConfirm,
  stats,
  totalQuestions,
}: SubmitTestConfirmationModalProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      statusBarTranslucent
      onRequestClose={onCancel}
    >
      {/* Backdrop */}
      <Pressable
        onPress={onCancel}
        className="flex-1 bg-black/50"
        style={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <Animated.View
          entering={FadeIn.duration(200)}
          exiting={FadeOut.duration(200)}
          className="absolute inset-0"
        />

        {/* Modal Content */}
        <Pressable onPress={(e) => e.stopPropagation()}>
          <Animated.View
            entering={SlideInDown.duration(300).springify()}
            exiting={SlideOutDown.duration(200)}
            className="mx-6 bg-white rounded-3xl overflow-hidden shadow-2xl"
            style={{ maxWidth: 400, width: '100%' }}
          >
            {/* Header with gradient */}
            <LinearGradient
              colors={['#fef3c7', '#fde68a']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              className="px-6 pt-8 pb-6"
            >
              <View className="items-center">
                {/* Icon */}
                <View className="w-20 h-20 bg-white rounded-full items-center justify-center shadow-lg mb-4">
                  <Ionicons
                    name="checkmark-done-circle"
                    size={40}
                    color="#f59e0b"
                  />
                </View>

                {/* Title */}
                <Text className="text-2xl font-bold text-gray-900 text-center mb-2">
                  Submit Test?
                </Text>

                {/* Message */}
                <Text className="text-base text-gray-600 text-center leading-6">
                  Review your progress before submitting
                </Text>
              </View>
            </LinearGradient>

            {/* Statistics */}
            <View className="px-6 py-6 bg-gray-50">
              <View className="bg-white rounded-2xl p-4 shadow-sm">
                {/* Total Questions */}
                <View className="flex-row justify-between items-center py-3 border-b border-gray-100">
                  <View className="flex-row items-center gap-2">
                    <View className="w-8 h-8 bg-blue-100 rounded-full items-center justify-center">
                      <Ionicons name="list" size={16} color="#3b82f6" />
                    </View>
                    <Text className="text-gray-700 font-medium">Total Questions</Text>
                  </View>
                  <Text className="text-gray-900 font-bold text-lg">{totalQuestions}</Text>
                </View>

                {/* Answered */}
                <View className="flex-row justify-between items-center py-3 border-b border-gray-100">
                  <View className="flex-row items-center gap-2">
                    <View className="w-8 h-8 bg-green-100 rounded-full items-center justify-center">
                      <Ionicons name="checkmark" size={16} color="#10b981" />
                    </View>
                    <Text className="text-gray-700 font-medium">Answered</Text>
                  </View>
                  <Text className="text-green-600 font-bold text-lg">{stats.answered}</Text>
                </View>

                {/* Not Answered */}
                <View className="flex-row justify-between items-center py-3 border-b border-gray-100">
                  <View className="flex-row items-center gap-2">
                    <View className="w-8 h-8 bg-red-100 rounded-full items-center justify-center">
                      <Ionicons name="close" size={16} color="#ef4444" />
                    </View>
                    <Text className="text-gray-700 font-medium">Not Answered</Text>
                  </View>
                  <Text className="text-red-600 font-bold text-lg">{stats.notAnswered}</Text>
                </View>

                {/* Marked for Review */}
                <View className="flex-row justify-between items-center py-3 border-b border-gray-100">
                  <View className="flex-row items-center gap-2">
                    <View className="w-8 h-8 bg-purple-100 rounded-full items-center justify-center">
                      <Ionicons name="flag" size={16} color="#a855f7" />
                    </View>
                    <Text className="text-gray-700 font-medium">Marked for Review</Text>
                  </View>
                  <Text className="text-purple-600 font-bold text-lg">{stats.marked}</Text>
                </View>

                {/* Not Visited */}
                <View className="flex-row justify-between items-center py-3">
                  <View className="flex-row items-center gap-2">
                    <View className="w-8 h-8 bg-gray-100 rounded-full items-center justify-center">
                      <Ionicons name="eye-off" size={16} color="#6b7280" />
                    </View>
                    <Text className="text-gray-700 font-medium">Not Visited</Text>
                  </View>
                  <Text className="text-gray-600 font-bold text-lg">{stats.notVisited}</Text>
                </View>
              </View>

              {/* Warning if questions unanswered */}
              {stats.notAnswered > 0 && (
                <View className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-3">
                  <View className="flex-row items-start gap-2">
                    <Ionicons name="warning" size={20} color="#f59e0b" />
                    <Text className="text-amber-800 text-sm flex-1 leading-5">
                      You have {stats.notAnswered} unanswered question{stats.notAnswered > 1 ? 's' : ''}.
                      These will be marked as incorrect.
                    </Text>
                  </View>
                </View>
              )}
            </View>

            {/* Action Buttons */}
            <View className="px-6 pb-6 bg-gray-50">
              <View className="gap-3">
                {/* Submit Button */}
                <TouchableOpacity
                  onPress={onConfirm}
                  className="rounded-2xl overflow-hidden shadow-lg"
                  activeOpacity={1}
                >
                  <LinearGradient
                    colors={['#f59e0b', '#eab308', '#fbbf24']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    className="py-4 px-6"
                  >
                    <View className="flex-row items-center justify-center gap-2">
                      <Ionicons name="checkmark-done" size={20} color="white" />
                      <Text className="text-white font-bold text-lg">
                        Submit Test
                      </Text>
                    </View>
                  </LinearGradient>
                </TouchableOpacity>

                {/* Continue Test Button */}
                <TouchableOpacity
                  onPress={onCancel}
                  className="bg-white border-2 border-gray-200 rounded-2xl py-4 px-6"
                  activeOpacity={1}
                >
                  <View className="flex-row items-center justify-center gap-2">
                    <Ionicons name="arrow-back" size={20} color="#374151" />
                    <Text className="text-gray-700 font-semibold text-lg">
                      Continue Test
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </Animated.View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}
