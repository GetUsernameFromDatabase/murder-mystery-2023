import { Outlet } from "react-router-dom";

import PlayerList from "@/components/game/player/player-list";

export function LayoutGame() {
  return (
    <div className="flex flex-row m-4">
      <aside className="w-96 mr-4">
        <PlayerList></PlayerList>
      </aside>
      <Outlet></Outlet>
    </div>
  );
}
