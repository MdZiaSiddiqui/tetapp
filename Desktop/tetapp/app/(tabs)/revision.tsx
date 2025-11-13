import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function Revision() {
  const router = useRouter();

  const handlePaperPress = (paperId: string, paperName: string) => {
    // TODO: Navigate to paper-specific screen
    console.log(`Selected: ${paperName}`);
  };

  const renderPaperCard = (paperId: string, paperName: string, paperNumber: string) => {
    return (
      <TouchableOpacity
        key={paperId}
        className="w-full mb-4 bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100"
        onPress={() => handlePaperPress(paperId, paperName)}
      >
        <View className="bg-gradient-to-br from-blue-500 to-blue-600 h-32 items-center justify-center">
          <Text className="text-white text-3xl font-bold">
            {paperNumber}
          </Text>
        </View>
        <View className="p-4">
          <Text className="text-gray-800 font-semibold text-center text-lg mb-2">
            {paperName}
          </Text>
          <View className="bg-blue-50 px-3 py-2 rounded-full self-center">
            <Text className="text-blue-600 text-sm font-semibold">
              Start Practice
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <StatusBar style="dark" />

      <View className="px-4 pt-16 pb-6">
        <Text className="text-3xl font-bold text-gray-800 mb-2">
          TS-TET Papers
        </Text>
        <Text className="text-gray-600 mb-6">
          Select a paper to start practicing
        </Text>

        {/* Paper Cards */}
        {renderPaperCard('paper-1', 'TS-TET Paper-1', 'P1')}
        {renderPaperCard('paper-2', 'TS-TET Paper-2', 'P2')}

        {/* Bottom Text */}
        <View className="mt-8 mb-6 px-4">
          <Text className="text-gray-600 text-center text-sm leading-6">
            Choose your paper to access subject-wise questions and mock tests
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
