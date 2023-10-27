export type TAvailableGameTokens = keyof typeof gameTokens;
export const gameTokens = {
  curiosity: {
    url: new URL(`/game/token-curiosity.webp`, import.meta.url),
  },
  npc: {
    url: new URL(`/game/token-npc.webp`, import.meta.url),
  },
} as const;
