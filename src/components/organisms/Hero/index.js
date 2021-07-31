import React, { useMemo, useEffect, useState } from 'react';
import {
  HeroContainer,
  ButtonsView,
  HeroImageBackground,
  HeroGradient,
} from './style';
import { colors } from '~/styles/colors';
import { Text, Logo } from '~/components/atoms';
import { Tag, IconButton, PlayButton } from '~/components/molecules';
import { useFavorites } from '~/services/hooks';

export const Hero = ({ item, onDetail }) => {
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const { image_url, title, subtitle, type } = item;
  const { addFavorite, getFavorites, removeFavorite } = useFavorites();

  const checkIsFavorite = async () => {
    setLoading(true);
    const favorites = await getFavorites();
    // console.log({ favorites });
    const isInFavorite = favorites.filter(
      (favorite) => favorite.id === item.id && favorite.type === item.type
    );
    setIsFavorite(isInFavorite.length > 0);
    setLoading(false);
  };

  useEffect(() => {
    checkIsFavorite();
  }, []);

  const addDataToFavorite = async () => {
    await addFavorite(item);
    checkIsFavorite();
  };
  const removeDataToFavorite = async () => {
    await removeFavorite(item);
    checkIsFavorite();
  };

  return (
    <HeroContainer>
      <HeroImageBackground
        source={{
          uri: image_url,
        }}>
        <HeroGradient colors={[colors.dark, 'transparent', colors.dark]}>
          {!onDetail && <Logo size="small" />}

          <Tag mt={onDetail ? 224 : 200}>{type}</Tag>
          <Text mt={8} fontFamily="bold" size={28}>
            {title}
          </Text>
          <Text fontFamily="regular" size={18}>
            {subtitle}
          </Text>
          <ButtonsView>
            <IconButton
              onPress={() =>
                !isFavorite ? addDataToFavorite() : removeDataToFavorite()
              }
              label={!isFavorite ? 'Add. Favorito' : 'Del. favorite'}
              iconName={
                !isFavorite ? 'add-circle-outline' : 'remove-circle-outline'
              }
            />
            <PlayButton />
            {!onDetail && (
              <IconButton
                label="Saiba mais"
                iconName="information-circle-outline"
              />
            )}
          </ButtonsView>
        </HeroGradient>
      </HeroImageBackground>
    </HeroContainer>
  );
};
