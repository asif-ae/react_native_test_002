import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ErrorStateProps {
  errorMessage: string;
}

const ErrorState: React.FC<ErrorStateProps> = ({ errorMessage }) => (
  <View style={styles.center}>
    <Text style={styles.errorText}>{errorMessage}</Text>
  </View>
);

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f6fa',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
  },
});

export default ErrorState;
