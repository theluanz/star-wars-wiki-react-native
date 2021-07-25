import React from 'react';
import { GoBackContainer } from './styles';
import { useNavigation } from '@react-navigation/core';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '~/styles';

export const GoBack = () => {
  const navigation = useNavigation();
  return (
    <GoBackContainer onPress={() => navigation.navigate('Home')}>
      <Ionicons
        name="chevron-back"
        color={theme.colors.white}
        size={theme.metrics.px(28)}
      />
    </GoBackContainer>
  );
};
