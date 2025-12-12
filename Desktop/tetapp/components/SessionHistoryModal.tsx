import { View, Text, TouchableOpacity, Modal, ScrollView, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface SessionAttempt {
  id: string;
  completed_at: string;
  accuracy: number;
  correct_count: number;
  total_questions: number;
  time_taken_seconds?: number | null;
}

interface SessionHistoryModalProps {
  visible: boolean;
  onClose: () => void;
  sessionNumber: number;
  mode: 'practice' | 'test';
  subjectName: string;
  attempts: SessionAttempt[];
  loading?: boolean;
  onStartNew: () => void;
  onViewAttempt: (attemptId: string) => void;
}

export default function SessionHistoryModal({
  visible,
  onClose,
  sessionNumber,
  mode,
  subjectName,
  attempts,
  loading,
  onStartNew,
  onViewAttempt,
}: SessionHistoryModalProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const formatDuration = (seconds: number | null | undefined) => {
    if (!seconds) return '--';
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  const getScoreColor = (accuracy: number) => {
    if (accuracy >= 80) return 'text-green-600';
    if (accuracy >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getBgColor = (accuracy: number) => {
    if (accuracy >= 80) return 'bg-green-50';
    if (accuracy >= 60) return 'bg-yellow-50';
    return 'bg-red-50';
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View className="flex-1 bg-black/50 justify-end">
        <View className="bg-white rounded-t-3xl max-h-[85%]">
          {/* Header */}
          <View className="flex-row items-center justify-between px-6 py-4 border-b border-gray-100">
            <View className="flex-1">
              <Text className="text-xl font-bold text-gray-900">
                {mode === 'practice' ? 'Practice' : 'Test'}-{sessionNumber}
              </Text>
              <Text className="text-sm text-gray-500">{subjectName}</Text>
            </View>
            <TouchableOpacity
              onPress={onClose}
              className="w-10 h-10 rounded-full bg-gray-100 items-center justify-center"
              activeOpacity={0.7}
            >
              <Ionicons name="close" size={24} color="#374151" />
            </TouchableOpacity>
          </View>

          {/* Content */}
          <ScrollView className="px-6 py-4" showsVerticalScrollIndicator={false}>
            {loading ? (
              <View className="py-12 items-center">
                <ActivityIndicator size="large" color="#7c3aed" />
                <Text className="text-gray-500 mt-4">Loading history...</Text>
              </View>
            ) : attempts.length === 0 ? (
              <View className="py-12 items-center">
                <Ionicons name="document-text-outline" size={48} color="#9CA3AF" />
                <Text className="text-gray-500 mt-4 text-center">
                  No previous attempts found.{'\n'}Start your first session!
                </Text>
              </View>
            ) : (
              <>
                <Text className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">
                  Previous Attempts ({attempts.length})
                </Text>
                {attempts.map((attempt, index) => (
                  <View
                    key={attempt.id}
                    className={`mb-3 rounded-xl overflow-hidden border border-gray-100 ${getBgColor(attempt.accuracy)}`}
                  >
                    <View className="p-4">
                      {/* Score and Date Row */}
                      <View className="flex-row items-center justify-between mb-2">
                        <View className="flex-row items-center">
                          <Text className={`text-2xl font-bold ${getScoreColor(attempt.accuracy)}`}>
                            {attempt.accuracy.toFixed(0)}%
                          </Text>
                          <Text className="text-gray-500 text-sm ml-2">
                            ({attempt.correct_count}/{attempt.total_questions})
                          </Text>
                        </View>
                        {index === 0 && (
                          <View className="bg-purple-100 px-2 py-1 rounded-full">
                            <Text className="text-purple-700 text-xs font-semibold">Latest</Text>
                          </View>
                        )}
                      </View>

                      {/* Meta info */}
                      <View className="flex-row items-center mb-3">
                        <Ionicons name="calendar-outline" size={14} color="#6B7280" />
                        <Text className="text-gray-500 text-xs ml-1">{formatDate(attempt.completed_at)}</Text>
                        {mode === 'test' && attempt.time_taken_seconds && (
                          <>
                            <Text className="text-gray-300 mx-2">•</Text>
                            <Ionicons name="time-outline" size={14} color="#6B7280" />
                            <Text className="text-gray-500 text-xs ml-1">
                              {formatDuration(attempt.time_taken_seconds)}
                            </Text>
                          </>
                        )}
                      </View>

                      {/* Action Button */}
                      <TouchableOpacity
                        onPress={() => onViewAttempt(attempt.id)}
                        className="flex-row items-center justify-center bg-purple-600 py-2.5 px-4 rounded-lg"
                        activeOpacity={0.7}
                      >
                        <Ionicons name="eye-outline" size={16} color="white" />
                        <Text className="text-white font-medium text-sm ml-1">View Responses</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
              </>
            )}
          </ScrollView>

          {/* Footer - Start New Button */}
          <View className="px-6 py-4 border-t border-gray-100">
            <TouchableOpacity
              onPress={onStartNew}
              className="bg-gray-900 py-4 rounded-xl flex-row items-center justify-center"
              activeOpacity={0.7}
            >
              <Ionicons name="add-circle-outline" size={20} color="white" />
              <Text className="text-white font-semibold text-base ml-2">Start New Session</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
