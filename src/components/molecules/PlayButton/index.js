import React from 'react';
import { PlayButtonContainer } from './styles';
import { Text } from '~/components/atoms';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '~/styles';

export const PlayButton = ({ onPress }) => {
  return (
    <PlayButtonContainer onPress={onPress}>
      <Ionicons
        onPress={onPress}
        name="play"
        size={theme.metrics.px(16)}
        color={theme.colors.black}
      />
      <Text ml={4} fontFamily="bold" size={16} color="black">
        Assistir
      </Text>
    </PlayButtonContainer>
  );
};
