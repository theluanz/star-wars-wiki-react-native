import React from 'react';
import { ButtonContainer } from './styles';
import { Text } from '~/components/atoms';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '~/styles';

export const PlayButton = ({ onPress }) => {
  return (
    <ButtonContainer onPress={onPress}>
      <Ionicons
        name="play"
        size={theme.metrics.px(12)}
        color={theme.colors.black}
      />
      <Text fontFamily="bold" size={14}>
        Assistir
      </Text>
    </ButtonContainer>
  );
};
