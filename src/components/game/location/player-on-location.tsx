import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  type TAvailableCircusPeople,
  gameCircusPeople,
} from "@/data/circus-people";
import type { AvailableGameMapLocations } from "@/data/game-map";
import { type TAvailableGameTokens, gameTokens } from "@/data/game-tokens";

interface PlayerOnLocationProperties {
  location: AvailableGameMapLocations;
  onTokenSelect: (token: TAvailableGameTokens) => void;
}
export function PlayerOnLocation({
  location,
  onTokenSelect,
}: PlayerOnLocationProperties) {
  // TODO: fix this type mess
  const circusPeople = gameCircusPeople[location as TAvailableCircusPeople];
  return (
    <>
      {circusPeople && (
        <Avatar
          className="w-16 h-16 cursor-pointer"
          onClick={() => onTokenSelect("npc")}
        >
          <AvatarImage src={gameTokens.npc.url.href} />
          <AvatarFallback>NPC</AvatarFallback>
        </Avatar>
      )}

      <Avatar
        className="w-16 h-16 cursor-pointer"
        onClick={() => onTokenSelect("curiosity")}
      >
        <AvatarImage src={gameTokens.curiosity.url.href} />
        <AvatarFallback>curiosity</AvatarFallback>
      </Avatar>
    </>
  );
}
