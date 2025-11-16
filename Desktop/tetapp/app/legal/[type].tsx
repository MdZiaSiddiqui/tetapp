import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { TERMS_OF_SERVICE, PRIVACY_POLICY, REFUND_POLICY } from '../../constants/legal';

export default function LegalDocument() {
  const router = useRouter();
  const { type } = useLocalSearchParams<{ type: 'terms' | 'privacy' | 'refund' }>();

  const getTitle = () => {
    switch (type) {
      case 'terms':
        return 'Terms of Service';
      case 'privacy':
        return 'Privacy Policy';
      case 'refund':
        return 'Refund Policy';
      default:
        return 'Legal Document';
    }
  };

  const getContent = () => {
    switch (type) {
      case 'terms':
        return TERMS_OF_SERVICE;
      case 'privacy':
        return PRIVACY_POLICY;
      case 'refund':
        return REFUND_POLICY;
      default:
        return '';
    }
  };

  const title = getTitle();
  const content = getContent();

  return (
    <LinearGradient
      colors={['#faf5ff', '#f3e8ff', '#ede9fe']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      className="flex-1"
    >
      <StatusBar style="dark" />

      {/* Header */}
      <View className="pt-14 pb-4 px-6 flex-row items-center">
        <TouchableOpacity
          onPress={() => router.back()}
          className="mr-4 w-10 h-10 bg-white rounded-full items-center justify-center"
          activeOpacity={1}
        >
          <Ionicons name="arrow-back" size={20} color="#000" />
        </TouchableOpacity>
        <Text className="text-2xl font-bold text-gray-900">{title}</Text>
      </View>

      {/* Content */}
      <ScrollView
        className="flex-1 px-6"
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="bg-white rounded-3xl p-6 border border-gray-100">
          <Text className="text-gray-700 text-sm leading-6">
            {content}
          </Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
