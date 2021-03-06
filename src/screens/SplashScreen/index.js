import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Text, Logo, Container } from '~/components';

export const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 1000);
  }, [navigation]);

  return (
    <Container align="center" justify="center">
      <Logo />
      <Text fontFamily="bold" mt={12}>
        Star Wars - Wiki
      </Text>
      <StatusBar style="auto" />
    </Container>
  );
};
