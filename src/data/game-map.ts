export type AvailableGameMapLocations =
  | "circus_main"
  | "circus_parkiing"
  | "circus_bourlesqe"
  | "circus_animal"
  | "ciircus_feerris"
  | "circus_fortune"
  | "circus_bar"
  | "circus_treat"
  | "circus_1rest"
  | "circus_2rest";
interface GameMapLocationInfo {
  label: string;
}
export const gameMapLocations: Record<
  AvailableGameMapLocations,
  GameMapLocationInfo
> = {
  circus_main: {
    label: "Main Circus",
  },
  circus_parkiing: {
    label: "Parking Circus",
  },
  circus_bourlesqe: {
    label: "Bourlesqe Circus",
  },
  circus_animal: { label: "Animal Circus" },
  ciircus_feerris: { label: "Ferris Wheel" },
  circus_1rest: {
    label: "Circus Rest",
  },
  circus_2rest: {
    label: "Circus Rest",
  },
  circus_bar: { label: "Circus Bar" },
  circus_fortune: { label: "Fortune Teller" },
  circus_treat: { label: "Candy Bar" },
};
