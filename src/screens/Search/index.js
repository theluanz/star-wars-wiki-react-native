import React from 'react';
import { useState, useEffect } from 'react';
import { ScreenScrollContainer, Text, GridList, Input } from '~/components';
import { useGetData } from '~/services/hooks';

export const SearchScreen = () => {
  const { getSearchResult } = useGetData();
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState();

  const CallGetSearchResult = async () => {
    setLoading(true);
    const result = await getSearchResult(query);
    if (!result.error) {
      setResults(result);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (query.length > 0 && query.length % 3 === 0) {
      CallGetSearchResult(query);
    }
  }, [query]);

  return (
    <ScreenScrollContainer withPadding>
      <Text fontFamily="bold" size={28} mt={12} mb={12}>
        Pesquisar
      </Text>
      <Input
        mb={24}
        value={query}
        onChangeText={(text) => setQuery(text)}
        placeholder="Filme ou personagem"
      />
      <GridList loading={loading} data={results} type="search" />
    </ScreenScrollContainer>
  );
};
