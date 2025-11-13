import { memo } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

interface OptionButtonProps {
  optionKey: string;
  value: string;
  isSelected: boolean;
  onPress: (key: string) => void;
  disabled?: boolean;
  fontSize?: string;
}

export const OptionButton = memo(function OptionButton({
  optionKey,
  value,
  isSelected,
  onPress,
  disabled = false,
  fontSize = 'text-base',
}: OptionButtonProps) {
  return (
    <TouchableOpacity
      onPress={() => onPress(optionKey)}
      disabled={disabled}
      activeOpacity={0.7}
      className={`p-4 rounded-2xl mb-3 border ${
        isSelected
          ? 'bg-blue-500 border-blue-500 shadow-lg'
          : 'bg-white border-gray-100 shadow-md'
      } ${disabled ? 'opacity-50' : ''}`}
      accessibilityRole="radio"
      accessibilityState={{ checked: isSelected }}
      accessibilityLabel={`Option ${optionKey}: ${value}`}
    >
      <Text className={`${fontSize} ${
        isSelected ? 'text-white font-semibold' : 'text-black font-semibold'
      }`}>
        {value}
      </Text>
    </TouchableOpacity>
  );
});
