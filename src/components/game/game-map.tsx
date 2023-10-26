interface GameMapProperties
  extends React.ObjectHTMLAttributes<HTMLObjectElement> {}

const GameMap: React.FC<GameMapProperties> = ({ ...properties }) => {
  return (
    <object data="/game/map.svg" type="image/svg+xml" {...properties}></object>
  );
};

export default GameMap;
