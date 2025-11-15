import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { type TierType } from '../../lib/pricing-config';

interface FeatureLockOverlayProps {
  tier: TierType;
  featureName: string;
  children: React.ReactNode;
}

/**
 * Overlay component that displays a blurred/locked state over premium content
 */
export default function FeatureLockOverlay({ tier, featureName, children }: FeatureLockOverlayProps) {
  const router = useRouter();

  const handleUnlock = () => {
    router.push({
      pathname: '/(tabs)/notes',
      params: { recommendedTier: tier },
    });
  };

  return (
    <View className="relative">
      {/* Blurred content */}
      <View className="opacity-30 pointer-events-none">
        {children}
      </View>

      {/* Lock overlay */}
      <View className="absolute inset-0 items-center justify-center">
        <LinearGradient
          colors={['rgba(147, 51, 234, 0.05)', 'rgba(147, 51, 234, 0.1)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          className="absolute inset-0"
        />

        <View className="bg-white rounded-2xl p-6 shadow-xl border border-purple-200 mx-6">
          <View className="items-center mb-4">
            <View className="w-16 h-16 bg-purple-100 rounded-full items-center justify-center mb-3">
              <Ionicons name="lock-closed" size={32} color="#9333ea" />
            </View>
            <Text className="text-xl font-bold text-gray-900 text-center mb-2">
              Premium Feature Locked
            </Text>
            <Text className="text-base text-gray-600 text-center">
              Unlock {featureName} with a Pro subscription
            </Text>
          </View>

          <TouchableOpacity
            onPress={handleUnlock}
            className="bg-purple-600 rounded-xl py-3 px-6"
            activeOpacity={0.8}
          >
            <Text className="text-white text-center font-bold text-base">
              Unlock Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
