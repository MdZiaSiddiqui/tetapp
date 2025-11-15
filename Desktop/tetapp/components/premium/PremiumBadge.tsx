import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

interface PremiumBadgeProps {
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
}

export default function PremiumBadge({ size = 'medium', showText = true }: PremiumBadgeProps) {
  const iconSize = size === 'small' ? 12 : size === 'medium' ? 16 : 20;
  const textSize = size === 'small' ? 'text-xs' : size === 'medium' ? 'text-sm' : 'text-base';
  const padding = size === 'small' ? 'px-2 py-1' : size === 'medium' ? 'px-3 py-1.5' : 'px-4 py-2';

  return (
    <LinearGradient
      colors={['#fbbf24', '#f59e0b', '#d97706']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className={`rounded-full ${padding} flex-row items-center shadow-sm`}
    >
      <Ionicons name="star" size={iconSize} color="#ffffff" />
      {showText && (
        <Text className={`text-white font-bold ml-1 ${textSize}`}>
          PRO
        </Text>
      )}
    </LinearGradient>
  );
}
