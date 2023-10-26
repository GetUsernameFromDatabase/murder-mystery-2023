import GameMap from "@/components/game/game-map";
import { PageWrapper } from "@/components/page-wrapper";

export function MainPage() {
  return (
    <PageWrapper>
      <GameMap className="min-w-[200px] w-full max-h-full"></GameMap>
    </PageWrapper>
  );
}
