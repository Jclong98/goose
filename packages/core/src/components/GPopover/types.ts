export const POPOVER_POSITIONS = [
  "topCenter",
  "topLeft",
  "topRight",
  "bottomCenter",
  "bottomLeft",
  "bottomRight",
  "left",
  "right",
] as const;
export type Position = (typeof POPOVER_POSITIONS)[number];
