import React from 'react';
import { Text, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';
import theme from './src/global/styles/theme';
import { Home } from './src/screens/Home';
import { SignIn } from './src/screens/SignIn';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="default"
        backgroundColor={theme.colors.secundary}
        translucent
      />
      <Routes />
    </ThemeProvider>
  );
}
