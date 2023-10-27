import { useSelector } from "react-redux";

import type { RootState } from "@/store";
import { selectPlayerById } from "@/store/slices/players-slice";

export const useActivePlayer = () => {
  return useSelector((state: RootState) => {
    if (!state.players.activePlayer) return null;
    return selectPlayerById(state, state.players.activePlayer);
  });
};
