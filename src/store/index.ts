import { configureStore } from "@reduxjs/toolkit";

import { playersReducer, replacePlayerState } from "./slices/players-slice";

import { getFromLocaleStorage, saveToLocaleStorage } from "@/lib/local-storage";

// TODO: redux undo -- https://www.npmjs.com/package/redux-undo

export const store = configureStore({
  preloadedState: getFromLocaleStorage("game-state"),
  reducer: {
    players: playersReducer,
  },
});
// Save store state to localStorage whenever the state changes
store.subscribe(() => {
  const state = store.getState();
  saveToLocaleStorage("game-state", state);
});

/**
 * Use this with care, requires store
 * This will replace store state without absolutely any type schecking
 * TODO: add type checking -- zod?
 */
export function replaceStoreState(newState: RootState) {
  store.dispatch(replacePlayerState(newState.players));
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
