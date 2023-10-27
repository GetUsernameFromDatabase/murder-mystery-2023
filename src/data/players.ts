export type TAvailablePlayerColour = (typeof availablePlayerColours)[number];

// The comments are for tailwind -- I really would like a better way
//  This got ridiculous fast
// Useful colour site https://www.colorhexa.com/
export const availablePlayerColours = [
  "#009999", // bg-[#009999] aria-selected:bg-[#009999]/60 hover:bg-[#009999]/60 text-[#009999] fill-[#009999] hover:fill-[#009999]/80
  "#ff6600", // bg-[#ff6600] aria-selected:bg-[#ff6600]/60 hover:bg-[#ff6600]/60 text-[#ff6600] fill-[#ff6600] hover:fill-[#ff6600]/80
  "#ffcc00", // bg-[#ffcc00] aria-selected:bg-[#ffcc00]/60 hover:bg-[#ffcc00]/60 text-[#ffcc00] fill-[#ffcc00] hover:fill-[#ffcc00]/80
  "#99ff33", // bg-[#99ff33] aria-selected:bg-[#99ff33]/60 hover:bg-[#99ff33]/60 text-[#99ff33] fill-[#99ff33] hover:fill-[#99ff33]/80
  "#33cc99", // bg-[#33cc99] aria-selected:bg-[#33cc99]/60 hover.bg-[#33cc99]/60 text-[#33cc99] fill-[#33cc99] hover:fill-[#33cc99]/80
  "#33ccff", // bg-[#33ccff] aria-selected:bg-[#33ccff]/60 hover.bg-[#33ccff]/60 text-[#33ccff] fill-[#33ccff] hover:fill-[#33ccff]/80
  "#3366ff", // bg-[#3366ff] aria-selected:bg-[#3366ff]/60 hover.bg-[#3366ff]/60 text-[#3366ff] fill-[#3366ff] hover:fill-[#3366ff]/80
  "#6633cc", // bg-[#6633cc] aria-selected:bg-[#6633cc]/60 hover.bg-[#6633cc]/60 text-[#6633cc] fill-[#6633cc] hover:fill-[#6633cc]/80
  "#cc33ff", // bg-[#cc33ff] aria-selected:bg-[#cc33ff]/60 hover.bg-[#cc33ff]/60 text-[#cc33ff] fill-[#cc33ff] hover:fill-[#cc33ff]/80
  "#cc3366", // bg-[#cc3366] aria-selected:bg-[#cc3366]/60 hover.bg-[#cc3366]/60 text-[#cc3366] fill-[#cc3366] hover:fill-[#cc3366]/80
  "#cc0033", // bg-[#cc0033] aria-selected:bg-[#cc0033]/60 hover.bg-[#cc0033]/60 text-[#cc0033] fill-[#cc0033] hover:fill-[#cc0033]/80
] as const;
