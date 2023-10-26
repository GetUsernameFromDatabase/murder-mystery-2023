import GameMap from "@/components/game/game-map";
import { PageWrapper } from "@/components/page-wrapper";

export function MainPage() {
  return (
    <PageWrapper>
      <GameMap className="max-h-[80vh] m-auto"></GameMap>
    </PageWrapper>
  );
}
