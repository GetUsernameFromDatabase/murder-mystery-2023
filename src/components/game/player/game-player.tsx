import { Accessibility, Ticket, VenetianMask } from "lucide-react";
import { useDispatch } from "react-redux";

import { Button } from "../../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";

import { useActivePlayer } from "@/hooks/use-player";
import { cn } from "@/lib/utils";
import {
  type TPlayer,
  deletePlayer,
  setActivePlayer,
} from "@/store/slices/players-slice";

interface PlayerProperties extends React.HtmlHTMLAttributes<HTMLDivElement> {
  player: TPlayer;
}

function GamePlayer({ player, className, ...properties }: PlayerProperties) {
  const dispatch = useDispatch();
  const activePlayer = useActivePlayer();
  const isActivePlayer = player.name === activePlayer?.name;

  const setPlayerActive = () => dispatch(setActivePlayer(player.name));
  const deleteCurrentPlayer = () => dispatch(deletePlayer(player.name));
  return (
    <div
      className={cn("flex items-center justify-between space-x-4", className)}
      {...properties}
    >
      <div className="flex items-center space-x-4">
        <VenetianMask className={`text-[${player.colour}]`}></VenetianMask>
        <div>
          <p className="text-sm font-medium leading-none">{player.name}</p>
        </div>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            title={isActivePlayer ? "Active Player" : ""}
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            {isActivePlayer ? (
              <Ticket className="h-4 w-4" aria-label="Active Player" />
            ) : (
              <Accessibility
                className="h-4 w-4"
                aria-label="Non-Active Player"
              />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          <DropdownMenuItem onClick={setPlayerActive} disabled={isActivePlayer}>
            Set Active
          </DropdownMenuItem>
          <DropdownMenuItem onClick={deleteCurrentPlayer}>
            Delete
            <DropdownMenuShortcut>⌘d</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default GamePlayer;
