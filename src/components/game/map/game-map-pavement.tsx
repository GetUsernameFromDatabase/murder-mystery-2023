/* eslint-disable security/detect-object-injection */
import {
  type AvailableGameMapLocations,
  gameMapLocations,
} from "@/data/game-map";
import { useActivePlayer } from "@/hooks/use-player";
import { cn } from "@/lib/utils";

export interface GameMapTentPavementProperties {
  id: AvailableGameMapLocations;
  children: React.ReactNode;
  onPavementClick?: (location: AvailableGameMapLocations) => void;
}
export function GameMapTentPavement({
  id,
  ...properties
}: GameMapTentPavementProperties) {
  const activePlayer = useActivePlayer();
  return (
    <g
      id={id}
      className={cn(
        "fill-[#d8ae50] hover:fill-teal-600",
        activePlayer?.location === id &&
          `fill-[${activePlayer.colour}] hover:fill-[${activePlayer.colour}]/80`,
      )}
      onClick={() => {
        if (properties.onPavementClick) properties.onPavementClick(id);
      }}
    >
      <title>{gameMapLocations[id].label}</title>
      {properties.children}
    </g>
  );
}
