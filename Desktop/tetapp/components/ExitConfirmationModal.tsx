import { Modal, View, Text, TouchableOpacity, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeIn, FadeOut, SlideInDown, SlideOutDown } from 'react-native-reanimated';

interface ExitConfirmationModalProps {
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  mode?: 'practice' | 'test';
}

export default function ExitConfirmationModal({
  visible,
  onCancel,
  onConfirm,
  mode = 'practice',
}: ExitConfirmationModalProps) {
  const title = mode === 'practice' ? 'Exit Practice?' : 'Exit Test?';
  const message = mode === 'practice'
    ? 'Are you sure you want to exit this session?'
    : 'Are you sure you want to exit this test?';

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
              colors={['#faf5ff', '#f3e8ff']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              className="px-6 pt-8 pb-6"
            >
              <View className="items-center">
                {/* Icon */}
                <View className="w-20 h-20 bg-white rounded-full items-center justify-center shadow-lg mb-4">
                  <Ionicons
                    name="exit-outline"
                    size={40}
                    color={mode === 'practice' ? '#3b82f6' : '#ef4444'}
                  />
                </View>

                {/* Title */}
                <Text className="text-2xl font-bold text-gray-900 text-center mb-2">
                  {title}
                </Text>

                {/* Message */}
                <Text className="text-base text-gray-600 text-center leading-6">
                  {message}
                </Text>
              </View>
            </LinearGradient>

            {/* Action Buttons */}
            <View className="px-6 py-6 bg-white">
              <View className="gap-3">
                {/* Exit Button - Now Primary */}
                <TouchableOpacity
                  onPress={onConfirm}
                  className="bg-purple-600 rounded-2xl py-4 px-6 shadow-lg"
                  activeOpacity={1}
                >
                  <View className="flex-row items-center justify-center gap-2">
                    <Ionicons name="exit-outline" size={20} color="white" />
                    <Text className="text-white font-bold text-lg">
                      Exit Session
                    </Text>
                  </View>
                </TouchableOpacity>

                {/* Continue Button - Now Secondary */}
                <TouchableOpacity
                  onPress={onCancel}
                  className="bg-gray-100 rounded-2xl py-4 px-6"
                  activeOpacity={1}
                >
                  <View className="flex-row items-center justify-center gap-2">
                    <Ionicons name="play" size={20} color="#374151" />
                    <Text className="text-gray-700 font-semibold text-lg">
                      Continue {mode === 'practice' ? 'Practice' : 'Test'}
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
