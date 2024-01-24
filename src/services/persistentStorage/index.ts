import AsyncStorageAdapter from 'src/services/persistentStorage/adapters/AsyncStorageAdapter';
import PersistentStorageService from 'src/services/persistentStorage/PersistentStorageService';

const persistentStorageService = new PersistentStorageService({
  persistentStorageAdapter: AsyncStorageAdapter(),
});

export default persistentStorageService;
