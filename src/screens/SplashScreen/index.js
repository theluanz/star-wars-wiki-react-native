import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Text, Logo, Container } from '../../components';
import { StyleSheet, View } from 'react-native';

export const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 1000);
  }, [navigation]);

  return (
    <Container align="center" justify="center">
      <Logo />
      <Text>Star Wars - Wiki</Text>
      <StatusBar style="auto" />
    </Container>
  );
};
