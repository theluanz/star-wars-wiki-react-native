import React from 'react';
import {
  ModalBackgroundContainer,
  Modal,
  ModalContentContainer,
  FavoriteImage,
} from './styles';
import { Text } from '~/components';
import favoriteAddedImage from '~/../assets/favorite-added.png';
import favoriteRemovedImage from '~/../assets/favorite-removed.png';

export const FavoriteStateModal = ({ visible, onClose, type }) => {
  return (
    <Modal visible={visible} trasparent={true} onRequestClose={onClose}>
      <ModalBackgroundContainer>
        <ModalContentContainer>
          <FavoriteImage
            source={
              type === 'added' ? favoriteAddedImage : favoriteRemovedImage
            }
          />
          <Text mt={24} fontFamily="bold" size={26} align="center">
            {`Favorito ${
              type === 'added' ? 'adicionado' : 'removido'
            } com sucesso!`}
          </Text>
        </ModalContentContainer>
      </ModalBackgroundContainer>
    </Modal>
  );
};
