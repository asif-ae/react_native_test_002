/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Navigation from './src/navigation/Navigation';

// Create a QueryClient instance
const queryClient = new QueryClient();

function App(): React.JSX.Element {
  const backgroundStyle = {
    backgroundColor: '#ffffff',
  };

  return (
    <SafeAreaView style={[backgroundStyle, styles.container]}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <QueryClientProvider client={queryClient}>
        <Navigation />
      </QueryClientProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
