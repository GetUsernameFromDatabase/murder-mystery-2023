/* eslint-disable unicorn/no-nested-ternary */
import { useDispatch } from "react-redux";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

import type { AvailableGameMapLocations } from "@/data/game-map";
// eslint-disable-next-line no-duplicate-imports
import { gameMapLocations } from "@/data/game-map";
import { useActivePlayer } from "@/hooks/use-player";
import { updateActivePlayer } from "@/store/slices/players-slice";

function PlayerOnLocation() {
  return (
    <>
      <Avatar className="w-16 h-16">
        <AvatarImage
          src={new URL("/game/token-npc.png", import.meta.url).href}
        />
        <AvatarFallback>NPC</AvatarFallback>
      </Avatar>
      <Avatar className="w-16 h-16">
        <AvatarImage
          src={new URL("/game/token-curiosity.png", import.meta.url).href}
        />
        <AvatarFallback>curiosity</AvatarFallback>
      </Avatar>
    </>
  );
}

function PlayerNotOnLocation(properties: { onClick: () => void }) {
  return <Button onClick={properties.onClick}>Move here</Button>;
}

interface GameLocationInteractProperties {
  location: AvailableGameMapLocations;
  open?: boolean;
  dialogWantsToClose?: () => void;
}
function GameLocationInteract({
  ...properties
}: GameLocationInteractProperties) {
  const dispatch = useDispatch();
  const activePlayer = useActivePlayer();

  const display = {
    locationLable: properties.location
      ? gameMapLocations[properties.location].label
      : "No Location",
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
            {`Location: ${display.locationLable}`}
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-6 mx-auto">
          {activePlayer ? (
            activePlayer.location === properties.location ? (
              <PlayerOnLocation />
            ) : (
              <PlayerNotOnLocation
                onClick={() =>
                  dispatch(
                    updateActivePlayer({ location: properties.location }),
                  )
                }
              />
            )
          ) : (
            "//TODO: decide wether there is a choice to set a player active here or don't show it in parent"
          )}
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default GameLocationInteract;
