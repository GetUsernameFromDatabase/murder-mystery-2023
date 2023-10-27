export type TAvailablePlayerColour = (typeof availablePlayerColours)[number];

// The comments are for tailwind -- I really would like a better way
// This got ridiculous fast
export const availablePlayerColours = [
  "#0c505b", // bg-[#0c505b] aria-selected:bg-[#0c505b]/60 hover:bg-[#0c505b]/60 text-[#0c505b] fill-[#0c505b] hover:fill-[#0c505b]/80
  "#ea580c", // bg-[#ea580c] aria-selected:bg-[#ea580c]/60 hover:bg-[#ea580c]/60 text-[#ea580c] fill-[#ea580c] hover:fill-[#ea580c]/80
  "#facc15", // bg-[#facc15] aria-selected:bg-[#facc15]/60 hover:bg-[#facc15]/60 text-[#facc15] fill-[#facc15] hover:fill-[#facc15]/80
  "#a3e635", // bg-[#a3e635] aria-selected:bg-[#a3e635]/60 hover:bg-[#a3e635]/60 text-[#a3e635] fill-[#a3e635] hover:fill-[#a3e635]/80
  "#34d399", // bg-[#34d399] aria-selected:bg-[#34d399]/60 hover.bg-[#34d399]/60 text-[#34d399] fill-[#34d399] hover:fill-[#34d399]/80
  "#22d3ee", // bg-[#22d3ee] aria-selected:bg-[#22d3ee]/60 hover.bg-[#22d3ee]/60 text-[#22d3ee] fill-[#22d3ee] hover:fill-[#22d3ee]/80
  "#2563eb", // bg-[#2563eb] aria-selected:bg-[#2563eb]/60 hover.bg-[#2563eb]/60 text-[#2563eb] fill-[#2563eb] hover:fill-[#2563eb]/80
  "#4f46e5", // bg-[#4f46e5] aria-selected:bg-[#4f46e5]/60 hover.bg-[#4f46e5]/60 text-[#4f46e5] fill-[#4f46e5] hover:fill-[#4f46e5]/80
  "#d946ef", // bg-[#d946ef] aria-selected:bg-[#d946ef]/60 hover.bg-[#d946ef]/60 text-[#d946ef] fill-[#d946ef] hover:fill-[#d946ef]/80
  "#db2777", // bg-[#db2777] aria-selected:bg-[#db2777]/60 hover.bg-[#db2777]/60 text-[#db2777] fill-[#db2777] hover:fill-[#db2777]/80
  "#be123c", // bg-[#be123c] aria-selected:bg-[#be123c]/60 hover.bg-[#be123c]/60 text-[#be123c] fill-[#be123c] hover:fill-[#be123c]/80
] as const;
