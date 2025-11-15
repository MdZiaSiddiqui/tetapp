import { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { HomeShape, InvertedHomeShape } from '../PentagonShapes';
import { QuestionStatusType } from '../../hooks/useQuestionStats';

interface QuestionGridProps {
  totalQuestions: number;
  currentQuestionIndex: number;
  questionStatus: { [key: number]: QuestionStatusType };
  visitedQuestions: Set<number>;
  onNavigate: (index: number) => void;
}

export const QuestionGrid = memo(function QuestionGrid({
  totalQuestions,
  currentQuestionIndex,
  questionStatus,
  visitedQuestions,
  onNavigate,
}: QuestionGridProps) {
  return (
    <>
      {/* MOCK TEST Header */}
      <View style={{ backgroundColor: '#4A7BA7', marginLeft: -16, marginRight: -16, marginTop: -16, paddingVertical: 16, paddingHorizontal: 24, marginBottom: 24 }}>
        <Text className="text-white text-2xl font-bold">MOCK TEST</Text>
      </View>

      {/* Choose a Question Label */}
      <Text className="text-gray-700 text-lg font-semibold mb-4">CHOOSE A QUESTION</Text>

      {/* Question Grid */}
      <View className="flex-row flex-wrap justify-center gap-2">
        {Array.from({ length: totalQuestions }).map((_, index) => {
          const status = questionStatus[index];
          const isCurrentQuestion = index === currentQuestionIndex;

          let shapeType: 'pentagon' | 'circle' | 'square' = 'square';
          let bgColor = '#9ca3af'; // Light-medium grey for not visited
          let textColor = 'text-white';
          let showGreenDot = false;

          if (status === 'answered') {
            shapeType = 'pentagon';
            bgColor = '#7CC94D'; // Green for answered
            textColor = 'text-white';
          } else if (status === 'marked-for-review') {
            shapeType = 'circle';
            bgColor = '#a855f7'; // Purple for marked for review (not answered)
            textColor = 'text-white';
          } else if (status === 'marked-for-review-answered') {
            shapeType = 'circle';
            bgColor = '#a855f7'; // Purple for marked for review (answered)
            textColor = 'text-white';
            showGreenDot = true; // Show green dot indicator
          } else if (status === 'not-answered' || visitedQuestions.has(index)) {
            // If this is the current question and not answered, show red pentagon
            if (isCurrentQuestion) {
              shapeType = 'pentagon';
              bgColor = '#ef4444'; // Red for current not answered
              textColor = 'text-white';
            } else {
              shapeType = 'pentagon';
              bgColor = '#ef4444'; // Red pentagon for visited but not answered
              textColor = 'text-white';
            }
          }

          // Render pentagon shape for answered questions
          if (shapeType === 'pentagon') {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => onNavigate(index)}
                style={{
                  position: 'relative',
                }}
                accessibilityRole="button"
                accessibilityLabel={`Question ${index + 1}, Answered`}
              >
                <InvertedHomeShape size={48} color={bgColor}>
                  <Text className={`${textColor} font-bold text-base`}>
                    {index + 1}
                  </Text>
                </InvertedHomeShape>
              </TouchableOpacity>
            );
          }

          // Render square shape for not visited questions
          if (shapeType === 'square') {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => onNavigate(index)}
                style={{
                  position: 'relative',
                }}
                accessibilityRole="button"
                accessibilityLabel={`Question ${index + 1}, Not Visited`}
              >
                <View
                  style={{
                    width: 48,
                    height: 48,
                    backgroundColor: bgColor,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Text className={`${textColor} font-bold text-base`}>
                    {index + 1}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }

          // Render circle shape for all other states
          return (
            <TouchableOpacity
              key={index}
              onPress={() => onNavigate(index)}
              style={{
                position: 'relative',
              }}
              accessibilityRole="button"
              accessibilityLabel={`Question ${index + 1}${status === 'marked-for-review-answered' ? ', Marked for Review (Answered)' : status === 'marked-for-review' ? ', Marked for Review' : ''}`}
            >
              <View
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 24,
                  backgroundColor: bgColor,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text className={`${textColor} font-bold text-base`}>
                  {index + 1}
                </Text>
              </View>

              {/* Green dot indicator for marked-for-review-answered */}
              {showGreenDot && (
                <View
                  style={{
                    position: 'absolute',
                    right: 2,
                    bottom: 2,
                    width: 16,
                    height: 16,
                    borderRadius: 8,
                    backgroundColor: '#22c55e',
                    borderWidth: 2,
                    borderColor: '#ffffff',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {/* Three white lines */}
                  <View style={{ width: 8, height: 1.5, backgroundColor: '#ffffff', marginBottom: 1 }} />
                  <View style={{ width: 8, height: 1.5, backgroundColor: '#ffffff', marginBottom: 1 }} />
                  <View style={{ width: 8, height: 1.5, backgroundColor: '#ffffff' }} />
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
});
