/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {ThemeProvider} from './src/theme/Theme';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './src/navigation/Navigation';

function App(): JSX.Element {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
