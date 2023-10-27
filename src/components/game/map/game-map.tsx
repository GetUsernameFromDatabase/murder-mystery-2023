import { useState } from "react";

import GameLocationInteract from "../location/game-location-interact";

import { GameMapSVG } from "./game-map-svg";

import type { AvailableGameMapLocations } from "@/data/game-map";

export function GameMap() {
  const [selectedLocation, setSelectedLocation] =
    useState<AvailableGameMapLocations | null>(null);
  const [showLocationInteract, setShowLocationInteract] = useState(false);

  return (
    <>
      <GameMapSVG
        className="min-w-[200px] max-h-[80vh] m-auto"
        onPavementClick={(location) => {
          setSelectedLocation(location);
          setShowLocationInteract(true);
        }}
      ></GameMapSVG>
      {selectedLocation && (
        <GameLocationInteract
          location={selectedLocation}
          open={showLocationInteract}
          dialogWantsToClose={() => {
            setShowLocationInteract(false);
            // This is to avoid component visually reacting to location change before closing
            // TODO: find a better way
            setTimeout(() => {
              setSelectedLocation(null);
            }, 200);
          }}
        ></GameLocationInteract>
      )}
    </>
  );
}
