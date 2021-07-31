import React, { useEffect } from 'react';
import { ScreenScrollContainer, Text } from '../../components';
import { useFavorites } from '~/services/hooks';

export const FavoriteScreen = ({ navigation }) => {
  const { getFavorites } = useFavorites();
  const CallGetFavorites = async () => {
    const favorites = await getFavorites();
    // console.log({ favorites });
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      CallGetFavorites();
    });

    return unsubscribe;
  }, []);
  return (
    <ScreenScrollContainer withPadding>
      <Text fontFamily="bold" size={28}>
        Favoritos
      </Text>
    </ScreenScrollContainer>
  );
};
