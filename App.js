import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { SplashScreen, Home } from './src/screens';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  SourceSansPro_400Regular,
  SourceSansPro_700Bold,
  SourceSansPro_600SemiBold,
  SourceSansPro_900Black,
} from '@expo-google-fonts/source-sans-pro';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/styles';
import { Routes } from './src/routes';
import { StatusBar } from 'react-native';
// AsyncStorage.clear();
export default function App() {
  let [fontsLoaded] = useFonts({
    SourceSansPro_400Regular,
    SourceSansPro_700Bold,
    SourceSansPro_600SemiBold,
    SourceSansPro_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  StatusBar.setBarStyle('light-content');

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <Routes />
    </ThemeProvider>
  );
}
