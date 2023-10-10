/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaView, StyleSheet } from 'react-native';

import LoginScreen from './src/screens/LoginScreen';

import React from 'react';
import { theme } from './src/utils';
import { ThemeProvider } from '@rneui/themed';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <LoginScreen />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4FD3DA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
