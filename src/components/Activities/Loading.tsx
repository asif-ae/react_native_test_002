import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const Loading: React.FC = () => (
  <View style={styles.center}>
    <ActivityIndicator size="large" color="#a9d100" />
    <Text style={styles.loadingText}>Loading...</Text>
  </View>
);

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f6fa',
  },
  loadingText: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
  },
});

export default Loading;
