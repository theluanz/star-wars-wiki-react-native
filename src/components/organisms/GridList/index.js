import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Card, Container, Text } from '~/components';
import { theme } from '~/styles';
import { SeparetorView, NoDataImage } from './styles';
import noDataFavorites from '~/../assets/no_favorites.png';
import noDataSearch from '~/../assets/no_results.png';
export const GridList = ({ data, type, loading }) => {
  return (
    <FlatList
      refreshing={loading}
      numColumns={3}
      data={data}
      renderItem={({ item }) => <Card size="large" item={item} />}
      keyExtractor={(item) => String(item.id)}
      ItemSeparatorComponent={() => <SeparetorView />}
      ListEmptyComponent={() => (
        <Container
          align="center"
          justify="center"
          h={theme.metrics.height / 1.5}>
          <NoDataImage
            resizeMode="contain"
            source={type === 'favorites' ? noDataFavorites : noDataSearch}
          />
          <Text fontFamily="bold" size={16} mt={12}>
            {`Nenhum ${
              type === 'favorites' ? 'favorito' : 'resultado'
            } encontrado`}
          </Text>
        </Container>
      )}
    />
  );
};
