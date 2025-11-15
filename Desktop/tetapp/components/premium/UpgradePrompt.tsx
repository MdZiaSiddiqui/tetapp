import { View, Text, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { TIER_NAMES, TIER_FEATURES, type TierType } from '../../lib/pricing-config';

interface UpgradePromptProps {
  tier: TierType;
  feature?: string; // e.g., "Practice Mode", "Test Mode", "Revision"
  fullScreen?: boolean;
}

export default function UpgradePrompt({ tier, feature = 'this feature', fullScreen = true }: UpgradePromptProps) {
  const router = useRouter();

  const handleUpgrade = () => {
    router.push({
      pathname: '/pricing',
      params: { recommendedTier: tier },
    });
  };

  const features = TIER_FEATURES[tier];

  if (fullScreen) {
    return (
      <View className="flex-1 bg-white">
        <LinearGradient
          colors={['#faf5ff', '#f3e8ff', '#ede9fe']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          className="flex-1"
        >
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View className="flex-1 px-6 pt-20 pb-10">
              {/* Lock Icon */}
              <View className="items-center mb-8">
                <View className="w-24 h-24 bg-purple-100 rounded-full items-center justify-center">
                  <Ionicons name="lock-closed" size={48} color="#9333ea" />
                </View>
              </View>

              {/* Title */}
              <Text className="text-3xl font-bold text-gray-900 text-center mb-4">
                Unlock {feature}
              </Text>

              {/* Description */}
              <Text className="text-lg text-gray-600 text-center mb-8">
                Upgrade to {TIER_NAMES[tier]} to access {feature} and more premium features.
              </Text>

              {/* Features List */}
              <View className="bg-white rounded-2xl p-6 mb-8 shadow-sm border border-purple-100">
                <Text className="text-xl font-bold text-gray-900 mb-4">
                  What's included:
                </Text>
                {features.map((feat, index) => (
                  <View key={index} className="flex-row items-start mb-3">
                    <Ionicons name="checkmark-circle" size={24} color="#9333ea" />
                    <Text className="text-base text-gray-700 ml-3 flex-1">
                      {feat}
                    </Text>
                  </View>
                ))}
              </View>

              {/* CTA Button */}
              <TouchableOpacity
                onPress={handleUpgrade}
                className="bg-purple-600 rounded-2xl py-4 px-6 shadow-lg mb-4"
                activeOpacity={0.8}
              >
                <Text className="text-white text-center font-bold text-lg">
                  Upgrade Now
                </Text>
              </TouchableOpacity>

              {/* Back Button */}
              <TouchableOpacity
                onPress={() => router.back()}
                className="bg-gray-100 rounded-2xl py-4 px-6"
                activeOpacity={0.8}
              >
                <Text className="text-gray-700 text-center font-semibold text-lg">
                  Go Back
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </LinearGradient>
      </View>
    );
  }

  // Modal version for inline prompts
  return (
    <View className="bg-purple-50 rounded-2xl p-6 border-2 border-purple-200">
      <View className="items-center mb-4">
        <View className="w-16 h-16 bg-purple-100 rounded-full items-center justify-center">
          <Ionicons name="lock-closed" size={32} color="#9333ea" />
        </View>
      </View>

      <Text className="text-xl font-bold text-gray-900 text-center mb-2">
        Premium Feature
      </Text>

      <Text className="text-base text-gray-600 text-center mb-4">
        Upgrade to {TIER_NAMES[tier]} to unlock {feature}
      </Text>

      <TouchableOpacity
        onPress={handleUpgrade}
        className="bg-purple-600 rounded-xl py-3 px-6"
        activeOpacity={0.8}
      >
        <Text className="text-white text-center font-bold text-base">
          View Plans
        </Text>
      </TouchableOpacity>
    </View>
  );
}
