import { Tabs, Redirect } from 'expo-router';
import { Text, View, ActivityIndicator } from 'react-native';
import { useAuth } from '../../lib/auth-context';

export default function TabLayout() {
  const { user, loading } = useAuth();

  // Show loading spinner while checking auth
  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" color="#3B82F6" />
      </View>
    );
  }

  // Redirect to login if not authenticated
  if (!user) {
    return <Redirect href="/login" />;
  }

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
