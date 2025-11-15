import { memo } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import MathText from '../MathText';

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
  // Convert Tailwind fontSize class to MathText fontSize type
  const getMathTextFontSize = (): 'xs' | 'small' | 'medium' | 'large' | 'xl' | '2xl' | '3xl' => {
    switch (fontSize) {
      case 'text-xs':
        return 'xs';
      case 'text-sm':
        return 'small';
      case 'text-base':
        return 'medium';
      case 'text-lg':
        return 'large';
      case 'text-xl':
        return 'xl';
      case 'text-2xl':
        return '2xl';
      case 'text-3xl':
        return '3xl';
      default:
        return 'medium';
    }
  };

  return (
    <TouchableOpacity
      onPress={() => onPress(optionKey)}
      disabled={disabled}
      activeOpacity={0.7}
      className={`p-4 rounded-2xl mb-5 border ${
        isSelected
          ? 'bg-blue-500 border-blue-500 shadow-lg'
          : 'bg-white border-gray-100 shadow-md'
      } ${disabled ? 'opacity-50' : ''}`}
      accessibilityRole="radio"
      accessibilityState={{ checked: isSelected }}
      accessibilityLabel={`Option ${optionKey}: ${value}`}
    >
      <MathText
        text={value}
        fontSize={getMathTextFontSize()}
        color={isSelected ? '#ffffff' : '#000000'}
        style={{ fontWeight: '600' }}
      />
    </TouchableOpacity>
  );
});
