import { Nullable } from 'src/shared/types/common';

export interface PersistentStorage {
  getItem: (key: string) => Promise<Nullable<string>>;
  removeItem: (key: string) => Promise<void>;
  setItem: (key: string, value: string) => Promise<void>;
}

export interface PersistentStorageServiceDependencies {
  persistentStorageAdapter: PersistentStorage;
}

class PersistentStorageService implements PersistentStorage {
  private persistentStorageAdapter: PersistentStorage;

  constructor({
    persistentStorageAdapter,
  }: PersistentStorageServiceDependencies) {
    this.persistentStorageAdapter = persistentStorageAdapter;
  }

  async setItem(key: string, value: string) {
    return this.persistentStorageAdapter.setItem(key, value);
  }

  async getItem(key: string) {
    const data = this.persistentStorageAdapter.getItem(key);

    return data;
  }

  async removeItem(key: string) {
    return this.persistentStorageAdapter.removeItem(key);
  }
}

export default PersistentStorageService;
