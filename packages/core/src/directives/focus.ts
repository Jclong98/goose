import type { Directive } from "vue";

export const vFocus: Directive<HTMLElement, boolean> = {
  mounted(el) {
    el.focus();
  },
};
