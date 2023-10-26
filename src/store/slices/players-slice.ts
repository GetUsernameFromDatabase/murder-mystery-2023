import type { PayloadAction } from "@reduxjs/toolkit";
// eslint-disable-next-line no-duplicate-imports
import { createSlice } from "@reduxjs/toolkit";

export interface TPlayer {
  id: number;
  name: string;
}

interface TPlayersState {
  players: TPlayer[];
  activePlayer: TPlayer | null;
}

const initialState: TPlayersState = {
  players: [],
  activePlayer: null,
};

/** Throws error if does not find index */
function findPlayerIndex(state: TPlayersState, id: TPlayer["id"]) {
  const playerIndex = state.players.findIndex((player) => player.id === id);
  if (typeof playerIndex !== "number") {
    throw new TypeError(`Player with id "${id}" not found`);
  }
  return playerIndex;
}

const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    addPlayer(state, action: PayloadAction<Omit<TPlayer, "id">>) {
      state.players.push({
        id: state.players.length,
        name: action.payload.name,
      });
    },
    deletePlayer(state, action: PayloadAction<TPlayer["id"]>) {
      const id = action.payload;
      const playerIndex = findPlayerIndex(state, id);

      state.players.splice(playerIndex, 1);
      if (state.activePlayer?.id === id) {
        state.activePlayer = null;
      }
    },
    setActivePlayer(state, action: PayloadAction<TPlayer["id"]>) {
      const id = action.payload;
      const playerIndex = findPlayerIndex(state, id);

      // eslint-disable-next-line security/detect-object-injection
      state.activePlayer = state.players[playerIndex];
    },
  },
});

export const { addPlayer, deletePlayer, setActivePlayer } =
  playersSlice.actions;
export const playersReducer = playersSlice.reducer;
