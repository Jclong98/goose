import type { Directive } from "vue";

export const Focus: Directive<HTMLElement, boolean> = {
  mounted(el) {
    el.focus();
  },
};
