// https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/position-area#formal_syntax
type BasePosition = "left" | "right" | "top" | "bottom" | "center" | "start" | "end";

type AxisPosition = "x" | "y" | "block" | "inline";
type SelfPosition = `self-${AxisPosition}-${"start" | "end"}`;
type SpanPosition =
  | `span-${BasePosition}`
  | `span-${BasePosition | AxisPosition}-${"start" | "end"}`;
type SpanSelfPosition = `span-self-${AxisPosition}-${"start" | "end"}`;

type PositionAreaKeyword =
  | BasePosition
  | `${AxisPosition}-${"start" | "end"}`
  | SelfPosition
  | SpanPosition
  | SpanSelfPosition
  | "span-all";

export type PositionArea =
  | "none"
  | PositionAreaKeyword
  | `${PositionAreaKeyword} ${PositionAreaKeyword}`;
