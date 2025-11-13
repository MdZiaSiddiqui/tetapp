import { Tabs } from 'expo-router';
import { Text } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#3b82f6',
        tabBarInactiveTintColor: '#9ca3af',
        tabBarStyle: {
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 24 }}>🏠</Text>
          ),
          tabBarLabel: '',
        }}
      />
      <Tabs.Screen
        name="revision"
        options={{
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 24 }}>🔄</Text>
          ),
          tabBarLabel: '',
        }}
      />
      <Tabs.Screen
        name="notes"
        options={{
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 24 }}>💳</Text>
          ),
          tabBarLabel: '',
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 24 }}>👤</Text>
          ),
          tabBarLabel: '',
        }}
      />
    </Tabs>
  );
}
