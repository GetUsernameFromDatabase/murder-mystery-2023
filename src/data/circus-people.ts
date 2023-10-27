import type { AvailableGameMapLocations } from "./game-map";

export type TAvailableCircusPeople = Exclude<
  AvailableGameMapLocations,
  "circus_1rest" | "circus_2rest" | "circus_treat"
>;
interface CircusPeopleInfo {
  name: string;
  avatar: URL;
}

// saving /game/circus_people as a seperate variable and using with `${}/...`
//  did not seem to work
export const gameCircusPeople: Record<
  TAvailableCircusPeople,
  CircusPeopleInfo[]
> = {
  circus_main: [
    {
      name: "Victor Macaroni",
      avatar: new URL("/game/circus_people/circus_main.png", import.meta.url),
    },
    {
      name: "Reya Lagrace",
      avatar: new URL("/game/circus_people/circus_main_2.png", import.meta.url),
    },
  ],
  circus_parkiing: [
    {
      name: "Detective Cabarone", // My wife will kill me for adding Cabarone
      avatar: new URL(
        "/game/circus_people/circus_parkiing.png",
        import.meta.url,
      ),
    },
  ],
  circus_bourlesqe: [
    {
      name: "Chesty Fields",
      avatar: new URL(
        "/game/circus_people/circus_bourlesqe.png",
        import.meta.url,
      ),
    },
  ],
  circus_animal: [
    {
      name: "Jeremiah Fiddlesticks",
      avatar: new URL("/game/circus_people/circus_animal.png", import.meta.url),
    },
  ],
  ciircus_feerris: [
    {
      name: "Bobo the Clown",
      avatar: new URL(
        "/game/circus_people/ciircus_feerris.jpg",
        import.meta.url,
      ),
    },
  ],
  circus_bar: [
    {
      name: "Ray Fay",
      avatar: new URL("/game/circus_people/circus_bar.png", import.meta.url),
    },
  ],
  circus_fortune: [
    {
      name: "Sybil Fortuna",
      avatar: new URL(
        "/game/circus_people/circus_fortune.png",
        import.meta.url,
      ),
    },
  ],
};
