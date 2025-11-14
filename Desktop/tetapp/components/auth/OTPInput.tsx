/**
 * OTPInput Component
 * Custom 6-digit OTP input with auto-focus and paste support
 * Works with Expo Go - no native dependencies required
 */

import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, Platform } from 'react-native';

interface OTPInputProps {
  value: string;
  onChange: (otp: string) => void;
  length?: number;
  error?: string;
  disabled?: boolean;
  autoFocus?: boolean;
}

export default function OTPInput({
  value,
  onChange,
  length = 6,
  error,
  disabled = false,
  autoFocus = false,
}: OTPInputProps) {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(''));
  const [focusedIndex, setFocusedIndex] = useState<number | null>(autoFocus ? 0 : null);
  const inputRefs = useRef<(TextInput | null)[]>(new Array(length).fill(null));

  // Update OTP array when value prop changes
  useEffect(() => {
    if (value) {
      const otpArray = value.split('').slice(0, length);
      while (otpArray.length < length) {
        otpArray.push('');
      }
      setOtp(otpArray);
    }
  }, [value, length]);

  // Auto-focus first input on mount if autoFocus is true
  useEffect(() => {
    if (autoFocus && inputRefs.current[0]) {
      setTimeout(() => {
        inputRefs.current[0]?.focus();
      }, 100);
    }
  }, [autoFocus]);

  // Handle text change in individual input
  const handleChange = (text: string, index: number) => {
    // Handle paste event (when multiple digits are entered at once)
    if (text.length > 1) {
      handlePaste(text);
      return;
    }

    // Only allow digits
    const digit = text.replace(/\D/g, '');

    // Update OTP array
    const newOtp = [...otp];
    newOtp[index] = digit;
    setOtp(newOtp);

    // Notify parent component
    const otpString = newOtp.join('');
    onChange(otpString);

    // Auto-focus next input if digit was entered
    if (digit && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle backspace/delete
  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      // Move focus to previous input on backspace if current is empty
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Handle paste event
  const handlePaste = (pastedText: string) => {
    // Extract only digits from pasted text
    const digits = pastedText.replace(/\D/g, '').slice(0, length);

    // Create new OTP array
    const newOtp = new Array(length).fill('');
    for (let i = 0; i < digits.length; i++) {
      newOtp[i] = digits[i];
    }

    setOtp(newOtp);
    onChange(newOtp.join(''));

    // Focus on next empty input or last input
    const nextEmptyIndex = digits.length < length ? digits.length : length - 1;
    inputRefs.current[nextEmptyIndex]?.focus();
  };

  // Handle focus on individual box
  const handleFocus = (index: number) => {
    setFocusedIndex(index);
  };

  // Handle blur
  const handleBlur = () => {
    setFocusedIndex(null);
  };

  // Handle box press (for focusing)
  const handleBoxPress = (index: number) => {
    inputRefs.current[index]?.focus();
  };

  return (
    <View className="w-full">
      {/* OTP Input Boxes */}
      <View className="flex-row justify-between items-center">
        {otp.map((digit, index) => (
          <Pressable
            key={index}
            onPress={() => handleBoxPress(index)}
            className="flex-1 mx-1"
          >
            <View
              className={`aspect-square items-center justify-center rounded-xl border-2 ${
                error
                  ? 'border-red-500 bg-red-50'
                  : focusedIndex === index
                  ? 'border-blue-500 bg-blue-50'
                  : digit
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-300 bg-white'
              }`}
            >
              <TextInput
                ref={(ref) => (inputRefs.current[index] = ref)}
                className={`text-2xl font-bold text-center w-full ${
                  error ? 'text-red-600' : 'text-gray-800'
                }`}
                value={digit}
                onChangeText={(text) => handleChange(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                onFocus={() => handleFocus(index)}
                onBlur={handleBlur}
                keyboardType="number-pad"
                maxLength={1}
                selectTextOnFocus
                editable={!disabled}
                // iOS specific: hide cursor and selection
                caretHidden={Platform.OS === 'ios'}
              />
            </View>
          </Pressable>
        ))}
      </View>

      {/* Error Message */}
      {error && (
        <View className="mt-3">
          <Text className="text-red-500 text-sm font-medium text-center">
            {error}
          </Text>
        </View>
      )}

      {/* Helper Text */}
      {!error && (
        <View className="mt-3">
          <Text className="text-gray-500 text-sm text-center">
            Enter the 6-digit code sent to your phone
          </Text>
        </View>
      )}
    </View>
  );
}
