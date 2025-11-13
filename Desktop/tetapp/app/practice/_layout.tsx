import { Stack } from 'expo-router';

export default function PracticeLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        presentation: 'card'
      }}
    >
      <Stack.Screen name="settings" />
      <Stack.Screen name="practice-session" />
      <Stack.Screen name="test-session" />
      <Stack.Screen name="results" />
      <Stack.Screen name="test-results" />
    </Stack>
  );
}
