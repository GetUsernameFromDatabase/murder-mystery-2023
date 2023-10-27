export type TAvailableGameTokens = keyof typeof gameTokens;
export const gameTokens = {
  curiosity: {
    url: new URL(`/game/token-curiosity.png`, import.meta.url),
  },
  npc: {
    url: new URL(`/game/token-npc.png`, import.meta.url),
  },
} as const;
