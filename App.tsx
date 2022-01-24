import React from 'react';
import { Text, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import theme from './src/global/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar
        barStyle="default"
        backgroundColor={theme.colors.secundary}
        translucent
      />
    </ThemeProvider>
  );
}
