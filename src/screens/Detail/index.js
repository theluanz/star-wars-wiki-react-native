import React from 'react';
import { ScreenScrollContainer, Hero, GoBack, Text } from '../../components';
import { useDataStore } from '~/services/stores';

export const Detail = () => {
  const { selectedData } = useDataStore();
  return (
    <ScreenScrollContainer>
      <Hero item={selectedData} onDetail />
      <Text ml={24} fontFamily="black" size={18}>
        Descrição
      </Text>
      <Text lh={20} mt={12} ml={24} mr={24} fontFamily="regular" size={14}>
        {selectedData.description}
      </Text>
      <GoBack />
    </ScreenScrollContainer>
  );
};
