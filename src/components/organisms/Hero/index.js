import React, { useMemo, useEffect, useState } from 'react';
import {
  HeroContainer,
  ButtonsView,
  HeroImageBackground,
  HeroGradient,
} from './styles';
import { colors } from '~/styles/colors';
import { Text, Logo } from '~/components/atoms';
import {
  Tag,
  IconButton,
  PlayButton,
  FavoriteStateModal,
} from '~/components/molecules';
import { useFavorites } from '~/services/hooks';
import { useNavigation } from '@react-navigation/core';
import { useDataStore } from '~/services/stores';

export const Hero = ({ item, onDetail }) => {
  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = useState(false);
  const [showFavoriteModal, setShowFavoriteModal] = useState(null);
  const { setSelectedData } = useDataStore();
  const { image_url, title, subtitle, type } = item;
  const { addFavorite, getFavorites, removeFavorite } = useFavorites();

  const checkIsFavorite = async () => {
    const favorites = await getFavorites();
    const isInFavorite = favorites.filter(
      (favorite) => favorite.id === item.id && favorite.type === item.type
    );
    setIsFavorite(isInFavorite.length > 0);
  };

  const closeFavoriteModal = () => {
    setTimeout(() => {
      setShowFavoriteModal(null);
    }, 1000);
  };

  useEffect(() => {
    checkIsFavorite();
  }, []);

  const addDataToFavorite = async () => {
    await addFavorite(item);
    setShowFavoriteModal('added');
    checkIsFavorite();
    closeFavoriteModal();
  };
  const removeDataToFavorite = async () => {
    await removeFavorite(item);
    setShowFavoriteModal('removed');
    checkIsFavorite();
    closeFavoriteModal();
  };

  const onPressWatch = () => {
    setSelectedData(item);
    navigation.navigate('Watch');
  };

  const onPressDetail = () => {
    setSelectedData(item);
    navigation.navigate('Detail');
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
            {item.type === 'Filme' ? (
              <PlayButton onPress={onPressWatch} />
            ) : null}
            {!onDetail && (
              <IconButton
                onPress={onPressDetail}
                label="Saiba mais"
                iconName="information-circle-outline"
              />
            )}
          </ButtonsView>
        </HeroGradient>
      </HeroImageBackground>
      {showFavoriteModal && (
        <FavoriteStateModal
          type={showFavoriteModal}
          visible={!!showFavoriteModal}
          onClose={() => setShowFavoriteModal(null)}
        />
      )}
    </HeroContainer>
  );
};
