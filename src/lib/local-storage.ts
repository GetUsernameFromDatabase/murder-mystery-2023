import type { RootState } from "@/store";

export type StorageKeyToValueType = {
  "game-state": RootState;
};
export type AvailableStorageKey = keyof StorageKeyToValueType;
export function saveToLocaleStorage<Key extends keyof StorageKeyToValueType>(
  key: Key,
  value: StorageKeyToValueType[Key],
) {
  const serializedState = JSON.stringify(value);
  localStorage.setItem(key, serializedState);
}

export function getFromLocaleStorage(key: AvailableStorageKey) {
  const storedItem = localStorage.getItem(key);
  if (!storedItem) return;
  // Would like to use StorageKeyToValueType[Key] here as well but
  //  circular reference protection will not allow this heresy
  return JSON.parse(storedItem);
}
