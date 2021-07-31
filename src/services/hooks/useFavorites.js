import AsyncStorage from '@react-native-async-storage/async-storage';

const DB_KEY = '@StarWarsWiki:favorites';
export const useFavorites = () => {
  const addFavorite = async (data) => {
    try {
      let newDb;
      const value = await AsyncStorage.getItem(DB_KEY);
      if (value !== null) {
        // já existe um banco de dados
        const db = JSON.parse(value);
        newDb = [...db, data];
      } else {
        // preciso criar um novo banco de dados
        newDb = [data];
      }
      const jsonValue = JSON.stringify(newDb);
      await AsyncStorage.setItem(DB_KEY, jsonValue);
      console.log({ newDb });

      return newDb;
    } catch (error) {
      console.log({ error });
      return { error };
    }
  };

  const getFavorites = async () => {
    const value = await AsyncStorage.getItem(DB_KEY);
    if (value !== null) {
      const db = JSON.parse(value);
      console.log({ db });

      return db;
    }
    return [];
  };

  const removeFavorite = async (data) => {
    try {
      let newDb;
      const value = await AsyncStorage.getItem(DB_KEY);
      if (value !== null) {
        // já existe um banco de dados
        const db = JSON.parse(value);
        newDb = db.filter(
          (item) => item.id !== data.id && item.type !== data.type
        );
      } else {
        // preciso criar um novo banco de dados
        newDb = [data];
      }
      console.log({ newDb });
      const jsonValue = JSON.stringify(newDb);
      await AsyncStorage.setItem(DB_KEY, jsonValue);
      return newDb;
    } catch (error) {
      console.log({ error });
      return { error };
    }
  };

  return {
    addFavorite,
    getFavorites,
    removeFavorite,
  };
};
