import { useSelector } from "react-redux";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import AddPlayer from "./add-player";
import GamePlayer from "./game-player";

import type { RootState } from "@/store";
import { selectAllPlayers } from "@/store/slices/players-slice";

const PlayerList: React.FC = () => {
  const players = useSelector((state: RootState) => selectAllPlayers(state));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Members</CardTitle>
        <CardDescription>
          Invite your team members to collaborate.
        </CardDescription>
        <AddPlayer></AddPlayer>
      </CardHeader>
      <CardContent className="grid gap-6">
        {players.map((value, index) => (
          <GamePlayer key={index} player={value}></GamePlayer>
        ))}
      </CardContent>
    </Card>
  );
};

export default PlayerList;
