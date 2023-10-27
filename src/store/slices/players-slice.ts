import type { EntityId, EntityState, PayloadAction } from "@reduxjs/toolkit";
// eslint-disable-next-line no-duplicate-imports
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import type { RootState } from "..";

import type { AvailableGameMapLocations } from "@/data/game-map";
import type { TAvailablePlayerColour } from "@/data/players";

export interface TPlayer {
  name: string;
  location: AvailableGameMapLocations;
  colour: TAvailablePlayerColour;
}

const playersAdapter = createEntityAdapter<TPlayer>({
  selectId: (player) => player.name,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

type TPlayersState = {
  players: EntityState<TPlayer>;
  activePlayer: EntityId | null;
};
const initialState: TPlayersState = {
  players: playersAdapter.getInitialState(),
  activePlayer: null,
};

const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    replacePlayerState(_state, action: PayloadAction<TPlayersState>) {
      return action.payload;
    },
    addPlayer(state, action: PayloadAction<Omit<TPlayer, "location">>) {
      playersAdapter.addOne(state.players, {
        location: "circus_main",
        ...action.payload,
      });
      if (!state.activePlayer) state.activePlayer = action.payload.name;
    },
    deletePlayer(state, action: PayloadAction<EntityId>) {
      const payload = action.payload;
      playersAdapter.removeOne(state.players, payload);
      if (state.activePlayer === payload) {
        state.activePlayer = null;
      }
    },
    setActivePlayer(state, action: PayloadAction<EntityId>) {
      state.activePlayer = action.payload;
    },
    updateActivePlayer(state, action: PayloadAction<Partial<TPlayer>>) {
      if (!state.activePlayer) return;
      const payload = action.payload;
      playersAdapter.updateOne(state.players, {
        id: state.activePlayer,
        changes: payload,
      });
    },
  },
});

export const {
  selectAll: selectAllPlayers,
  selectById: selectPlayerById,
  selectIds: selectPlayersIds,
  // Pass in a selector that returns the posts slice of state
} = playersAdapter.getSelectors<RootState>((state) => state.players.players);

export const {
  addPlayer,
  deletePlayer,
  setActivePlayer,
  replacePlayerState,
  updateActivePlayer,
} = playersSlice.actions;
export const playersReducer = playersSlice.reducer;
