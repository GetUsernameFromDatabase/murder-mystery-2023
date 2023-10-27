import { Button } from "@/components/ui/button";

interface PlayerNotOnLocationProperties {
  onClick: () => void;
}
export function PlayerNotOnLocation(properties: PlayerNotOnLocationProperties) {
  return <Button onClick={properties.onClick}>Move here</Button>;
}
