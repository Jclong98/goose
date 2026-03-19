import type { InjectionKey, Ref } from "vue";

export type TimelineState = "pending" | "active" | "completed";

export type TimelineItem = {
  id: string;
  anchorName: string;
  state: TimelineState;
};

export const TimelineInjectionKey = Symbol() as InjectionKey<Ref<Map<string, TimelineItem>>>;
