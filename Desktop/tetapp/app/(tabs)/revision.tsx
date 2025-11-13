import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function Revision() {
  const router = useRouter();

  const handlePaperPress = (paperId: string, paperName: string) => {
    // TODO: Navigate to paper-specific screen
    console.log(`Selected: ${paperName}`);
  };

  const renderPaperCard = (
    paperId: string,
    paperName: string,
    languages: string,
    bgColor: string = 'bg-blue-500'
  ) => {
    return (
      <TouchableOpacity
        key={paperId}
        className="w-full mb-3 bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100"
        onPress={() => handlePaperPress(paperId, paperName)}
      >
        <View className="flex-row items-center p-4">
          <View className={`${bgColor} w-12 h-12 rounded-lg items-center justify-center mr-4`}>
            <Text className="text-white text-lg font-bold">
              {paperName.includes('Paper-1') ? 'P1' : 'P2'}
            </Text>
          </View>
          <View className="flex-1">
            <Text className="text-gray-800 font-semibold text-base">
              {paperName} {languages}
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

        {/* Paper 1 - Language Options */}
        <View className="mb-6">
          <Text className="text-xl font-bold text-gray-800 mb-4">
            Paper-1 (Classes I-V)
          </Text>
          {renderPaperCard(
            'paper-1-telugu',
            'TS-TET Paper-1',
            'English / Telugu',
            'bg-blue-500'
          )}
          {renderPaperCard(
            'paper-1-urdu',
            'TS-TET Paper-1',
            'English / Urdu',
            'bg-blue-500'
          )}
          {renderPaperCard(
            'paper-1-hindi',
            'TS-TET Paper-1',
            'English / Hindi',
            'bg-blue-500'
          )}
        </View>

        {/* Paper 2 - Math & Science */}
        <View className="mb-6">
          <Text className="text-xl font-bold text-gray-800 mb-4">
            Paper-2 Math & Science (Classes VI-VIII)
          </Text>
          {renderPaperCard(
            'paper-2-math-science-telugu',
            'TS-TET Paper-2 Math & Science',
            'English / Telugu',
            'bg-green-500'
          )}
          {renderPaperCard(
            'paper-2-math-science-urdu',
            'TS-TET Paper-2 Math & Science',
            'English / Urdu',
            'bg-green-500'
          )}
          {renderPaperCard(
            'paper-2-math-science-hindi',
            'TS-TET Paper-2 Math & Science',
            'English / Hindi',
            'bg-green-500'
          )}
        </View>

        {/* Paper 2 - Social Studies */}
        <View className="mb-6">
          <Text className="text-xl font-bold text-gray-800 mb-4">
            Paper-2 Social Studies (Classes VI-VIII)
          </Text>
          {renderPaperCard(
            'paper-2-social-telugu',
            'TS-TET Paper-2 Social Studies',
            'English / Telugu',
            'bg-purple-500'
          )}
          {renderPaperCard(
            'paper-2-social-urdu',
            'TS-TET Paper-2 Social Studies',
            'English / Urdu',
            'bg-purple-500'
          )}
          {renderPaperCard(
            'paper-2-social-hindi',
            'TS-TET Paper-2 Social Studies',
            'English / Hindi',
            'bg-purple-500'
          )}
        </View>

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
