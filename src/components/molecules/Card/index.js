import React from 'react';
import { CardImage, CardContainer } from './styles';

export const Card = ({ item }) => {
  return (
    <CardContainer align="center">
      <CardImage source={{ uri: item.image_url }} />
    </CardContainer>
  );
};
