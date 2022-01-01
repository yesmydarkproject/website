export type StorageType = "session" | "local";
export type UseStorageReturnValue = {
  getItem: (key: string, type: StorageType) => string;
  setItem: (key: string, value: string, type: StorageType) => boolean;
  removeItem: (key: string, type: StorageType) => void;
};

const useStorage = (): UseStorageReturnValue => {
  type StorageName = "localStorage" | "sessionStorage";
  const getStorageName = (type: StorageType): StorageName => `${type}Storage`;
  const isBrowser: boolean = ((): boolean => typeof window !== "undefined")();

  return {
    getItem: (key, type) =>
      isBrowser ? window[getStorageName(type)][key] : null,
    setItem: (key, value, type) => {
      if (!isBrowser) return false;
      window[getStorageName(type)].setItem(key, value);
      return true;
    },
    removeItem: (key, type) => {
      window[getStorageName(type)].removeItem(key);
    },
  };
};

export default useStorage;
