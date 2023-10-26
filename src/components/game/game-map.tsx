import { cn } from "@/lib/utils";

interface GameMapProperties
  extends React.ObjectHTMLAttributes<HTMLObjectElement> {}

// eslint-disable-next-line react/prop-types
const GameMap: React.FC<GameMapProperties> = ({ className, ...properties }) => {
  return (
    <object
      data="/game/map.svg"
      type="image/svg+xml"
      className={cn("min-w-[200px]", className)}
      {...properties}
    ></object>
  );
};

export default GameMap;
