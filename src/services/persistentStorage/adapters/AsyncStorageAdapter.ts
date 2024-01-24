import AsyncStorage from '@react-native-async-storage/async-storage';

import { PersistentStorage } from 'src/services/persistentStorage/PersistentStorageService';

const AsyncStorageAdapter = (): PersistentStorage => {
  return {
    getItem: async (key) => {
      const itemValue = await AsyncStorage.getItem(key);

      return itemValue;
    },
    removeItem: async (key) => {
      await AsyncStorage.removeItem(key);
    },
    setItem: async (key, value) => {
      await AsyncStorage.setItem(key, value);
    },
  };
};

export default AsyncStorageAdapter;
