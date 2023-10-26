import { useRef } from "react";

import { GameMapSVG } from "./game-map-svg";

export function GameMap() {
  const gameMap = useRef<HTMLObjectElement | null>(null);
  console.log(gameMap);
  return (
    <GameMapSVG className="min-w-[200px] max-h-[80vh] m-auto"></GameMapSVG>
  );
}
