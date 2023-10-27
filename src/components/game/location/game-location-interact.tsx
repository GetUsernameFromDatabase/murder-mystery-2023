/* eslint-disable security/detect-object-injection */
import { useState } from "react";
import { useDispatch } from "react-redux";

import { Button } from "../../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../ui/dialog";

import { LocationNpcView } from "./location-npc-view";
import { PlayerNotOnLocation } from "./player-not-on-location";
import { PlayerOnLocation } from "./player-on-location";

import {
  type TAvailableCircusPeople,
  gameCircusPeople,
} from "@/data/circus-people";
import {
  type AvailableGameMapLocations,
  gameMapLocations,
} from "@/data/game-map";
import { type TAvailableGameTokens } from "@/data/game-tokens";
import { useActivePlayer } from "@/hooks/use-player";
import { updateActivePlayer } from "@/store/slices/players-slice";

interface GameLocationInteractProperties {
  location: AvailableGameMapLocations;
  open?: boolean;
  dialogWantsToClose?: () => void;
}
function GameLocationInteract({
  location,
  ...properties
}: GameLocationInteractProperties) {
  const dispatch = useDispatch();
  const activePlayer = useActivePlayer();
  const [currentView, setCurrentView] = useState<TAvailableGameTokens | null>(
    null,
  );

  const circusPeople = gameCircusPeople[location as TAvailableCircusPeople];

  const display = {
    locationLable: location ? gameMapLocations[location].label : "No Location",
    circusPeopleLable: circusPeople?.name
      ? `Behold ${circusPeople?.name}`
      : "No one here, hmmm",
  };

  const updatePlayerLocation = () =>
    dispatch(updateActivePlayer({ location: location }));

  const defaultView = (
    <>
      {activePlayer ? (
        activePlayer.location === location ? (
          <PlayerOnLocation
            location={location}
            onTokenSelect={setCurrentView}
          />
        ) : (
          <PlayerNotOnLocation onClick={updatePlayerLocation} />
        )
      ) : (
        "//TODO: decide wether there is a choice to set a player active here or don't show it in parent"
      )}
    </>
  );
  const view = () => {
    switch (currentView) {
      case "npc": {
        return LocationNpcView({
          location: location as TAvailableCircusPeople,
        });
      }
      case "curiosity": {
        return defaultView;
      }
      default: {
        return defaultView;
      }
    }
  };
  return (
    <Dialog
      open={properties.open}
      onOpenChange={(state) => {
        if (!state && properties.dialogWantsToClose) {
          properties.dialogWantsToClose();
        }
      }}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{display.locationLable}</DialogTitle>
          <DialogDescription>
            {!currentView && "Choose an interaction"}
            {currentView === "npc" && display.circusPeopleLable}
            {currentView === "curiosity" && "MARION, YOUR TIME TO SHINE"}
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-6 mx-auto">{view()}</div>
        <DialogFooter className="sm:justify-between">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          {currentView && (
            <Button
              type="button"
              variant="secondary"
              onClick={() => setCurrentView(null)}
            >
              Back
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default GameLocationInteract;
