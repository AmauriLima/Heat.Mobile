import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

import defaultTheme from './src/assets/styles/themes/default';

import { Home } from './src/screens';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <StatusBar style="light" />
      <Home />
    </ThemeProvider>
  );
}
