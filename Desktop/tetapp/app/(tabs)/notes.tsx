import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

export default function NotesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  content: {
    flex: 1,
  },
});
