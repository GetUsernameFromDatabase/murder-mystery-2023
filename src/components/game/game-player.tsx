import { Accessibility, Ticket } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import { cn } from "@/lib/utils";
import type { RootState } from "@/store";
import {
  type TPlayer,
  deletePlayer,
  setActivePlayer,
} from "@/store/slices/players-slice";

interface PlayerProperties extends React.HtmlHTMLAttributes<HTMLDivElement> {
  player: TPlayer;
}

function GamePlayer({ player, className, ...properties }: PlayerProperties) {
  const activePlayer = useSelector(
    (state: RootState) => state.players.activePlayer,
  );
  const dispatch = useDispatch();
  const setPlayerActive = () => dispatch(setActivePlayer(player.id));
  const deleteCurrentPlayer = () => dispatch(deletePlayer(player.id));
  const isActivePlayer = player.id === activePlayer?.id;
  return (
    <div
      className={cn("flex items-center justify-between space-x-4", className)}
      {...properties}
    >
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage src="/game/player-token.png" />
          <AvatarFallback>PC</AvatarFallback>
        </Avatar>
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
