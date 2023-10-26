import type { RouteProps } from "react-router-dom";

import { GameHistory } from "@/pages/game-history";
import { MainPage } from "@/pages/main-page";
import { NoPage } from "@/pages/no-page";

export const mainRoutes: Readonly<RouteProps[]> = [
  { path: "/", index: true, element: <MainPage /> },
  { path: "/game-history", element: <GameHistory /> },
  { path: "*", element: <NoPage /> },
];
