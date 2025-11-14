/**
 * PhoneInput Component
 * Custom phone number input with country code selector
 * Works with Expo Go - no native dependencies required
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  FlatList,
  Pressable,
} from 'react-native';

// Common country codes for easy selection
const COUNTRY_CODES = [
  { code: '+91', name: 'India', flag: '🇮🇳' },
  { code: '+1', name: 'USA', flag: '🇺🇸' },
  { code: '+44', name: 'UK', flag: '🇬🇧' },
  { code: '+971', name: 'UAE', flag: '🇦🇪' },
  { code: '+61', name: 'Australia', flag: '🇦🇺' },
  { code: '+86', name: 'China', flag: '🇨🇳' },
  { code: '+81', name: 'Japan', flag: '🇯🇵' },
  { code: '+65', name: 'Singapore', flag: '🇸🇬' },
  { code: '+92', name: 'Pakistan', flag: '🇵🇰' },
  { code: '+880', name: 'Bangladesh', flag: '🇧🇩' },
];

interface PhoneInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  autoFocus?: boolean;
}

export default function PhoneInput({
  value,
  onChangeText,
  placeholder = 'Enter phone number',
  error,
  disabled = false,
  autoFocus = false,
}: PhoneInputProps) {
  const [selectedCountryCode, setSelectedCountryCode] = useState(COUNTRY_CODES[0]);
  const [showCountryPicker, setShowCountryPicker] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  // Handle phone number input change
  const handlePhoneChange = (text: string) => {
    // Allow only digits
    const cleaned = text.replace(/\D/g, '');

    // Format for display (adds spaces for readability)
    let formatted = cleaned;
    if (cleaned.length > 5) {
      formatted = `${cleaned.slice(0, 5)} ${cleaned.slice(5)}`;
    }

    setPhoneNumber(formatted);

    // Pass complete phone number with country code to parent
    const completeNumber = `${selectedCountryCode.code}${cleaned}`;
    onChangeText(completeNumber);
  };

  // Handle country code selection
  const handleCountryCodeSelect = (country: typeof COUNTRY_CODES[0]) => {
    setSelectedCountryCode(country);
    setShowCountryPicker(false);

    // Update parent with new country code + existing number
    const cleaned = phoneNumber.replace(/\D/g, '');
    const completeNumber = `${country.code}${cleaned}`;
    onChangeText(completeNumber);
  };

  return (
    <View className="w-full">
      {/* Input Container */}
      <View
        className={`flex-row items-center border-2 rounded-xl overflow-hidden ${
          error
            ? 'border-red-500'
            : disabled
            ? 'border-gray-300 bg-gray-100'
            : 'border-gray-300 bg-white'
        }`}
      >
        {/* Country Code Selector */}
        <TouchableOpacity
          className="flex-row items-center px-4 py-4 border-r-2 border-gray-300"
          onPress={() => !disabled && setShowCountryPicker(true)}
          disabled={disabled}
          activeOpacity={0.7}
        >
          <Text className="text-2xl mr-1">{selectedCountryCode.flag}</Text>
          <Text className="text-gray-800 font-semibold text-base">
            {selectedCountryCode.code}
          </Text>
          <Text className="text-gray-400 ml-1">▼</Text>
        </TouchableOpacity>

        {/* Phone Number Input */}
        <TextInput
          className="flex-1 px-4 py-4 text-gray-800 text-base font-medium"
          placeholder={placeholder}
          placeholderTextColor="#9CA3AF"
          value={phoneNumber}
          onChangeText={handlePhoneChange}
          keyboardType="number-pad"
          maxLength={15}
          editable={!disabled}
          autoFocus={autoFocus}
        />
      </View>

      {/* Error Message */}
      {error && (
        <View className="mt-2">
          <Text className="text-red-500 text-sm font-medium">{error}</Text>
        </View>
      )}

      {/* Country Code Picker Modal */}
      <Modal
        visible={showCountryPicker}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowCountryPicker(false)}
      >
        <Pressable
          className="flex-1 bg-black/50 justify-end"
          onPress={() => setShowCountryPicker(false)}
        >
          <Pressable className="bg-white rounded-t-3xl" onPress={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <View className="border-b border-gray-200 py-4 px-6 flex-row items-center justify-between">
              <Text className="text-xl font-bold text-gray-800">
                Select Country Code
              </Text>
              <TouchableOpacity
                onPress={() => setShowCountryPicker(false)}
                className="p-2"
              >
                <Text className="text-gray-500 text-2xl">✕</Text>
              </TouchableOpacity>
            </View>

            {/* Country List */}
            <FlatList
              data={COUNTRY_CODES}
              keyExtractor={(item) => item.code}
              className="max-h-96"
              renderItem={({ item }) => (
                <TouchableOpacity
                  className={`flex-row items-center px-6 py-4 border-b border-gray-100 ${
                    item.code === selectedCountryCode.code ? 'bg-blue-50' : ''
                  }`}
                  onPress={() => handleCountryCodeSelect(item)}
                  activeOpacity={0.7}
                >
                  <Text className="text-3xl mr-3">{item.flag}</Text>
                  <View className="flex-1">
                    <Text className="text-gray-800 font-semibold text-base">
                      {item.name}
                    </Text>
                  </View>
                  <Text className="text-gray-600 font-medium text-base">
                    {item.code}
                  </Text>
                  {item.code === selectedCountryCode.code && (
                    <Text className="text-blue-600 ml-2 text-lg">✓</Text>
                  )}
                </TouchableOpacity>
              )}
            />

            {/* Bottom Padding for Safe Area */}
            <View className="h-8" />
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}
