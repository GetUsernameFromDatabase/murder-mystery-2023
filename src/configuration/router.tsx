import { Route, type RouteProps } from "react-router-dom";

import { LayoutGame } from "@/layouts/layout-game";
import { LayoutMain } from "@/layouts/layout-main";
import { GameHistory } from "@/pages/game-history";
import { MainPage } from "@/pages/main-page";
import { NoPage } from "@/pages/no-page";

export const gameLayoutRoutes: Readonly<RouteProps[]> = [
  { path: "/", index: true, element: <MainPage /> },
];

export const mainLayoutRoutes: Readonly<RouteProps[]> = [
  { path: "/game-history", element: <GameHistory /> },
  { path: "*", element: <NoPage /> },
];

export const mainRoutes: Readonly<RouteProps[]> = [
  {
    path: "/",
    element: <LayoutGame />,
    children: gameLayoutRoutes.map((route, index) => (
      <Route key={index} {...route} />
    )),
  },
  {
    path: "/",
    element: <LayoutMain />,
    children: mainLayoutRoutes.map((route, index) => (
      <Route key={index} {...route} />
    )),
  },
];

export const useNavigationInfo = () => {
  return [
    { to: "/", text: "Home" },
    { to: "/game-history", text: "Game History" },
  ];
};
