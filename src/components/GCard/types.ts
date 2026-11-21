export const CARD_VARIANTS = [
  "surface-1",
  "surface-2",
  "surface-3",
  "success",
  "danger",
  "warning",
  "info",
] as const;
export type GCardVariant = (typeof CARD_VARIANTS)[number];
