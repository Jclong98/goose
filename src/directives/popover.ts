import type { Directive } from "vue";

/**
 * Directive to set up a popover activator element.
 *
 * This directive assigns a `popovertarget` attribute to the element and sets a CSS custom property
 * for the anchor name, linking the activator to its corresponding popover.
 *
 * To be paired with a popover, the value should match with the value of a corrosponding `v-popover` directive.
 * For example, if `v-popover="'my-popover'"`, the activator should use `v-popover-activator="'my-popover'"`.
 */
export const vPopoverActivator: Directive<HTMLElement, string> = (el, binding) => {
  el.setAttribute("popovertarget", binding.value);
  el.style.setProperty("anchor-name", `--${binding.value}`);
};

/**
 * Directive to set up a popover element.
 *
 * This directive assigns an `id` to the element and sets a CSS custom property
 * for positioning the popover anchor.
 *
 * To be paired with a popover, the value should match with the value of a corrosponding `v-popover-activator` directive.
 * For example, if `v-popover="'my-popover'"`, the activator should use `v-popover-activator="'my-popover'"`.
 */
export const vPopover: Directive<HTMLElement, string> = (el, binding) => {
  el.setAttribute("id", binding.value);
  el.style.setProperty("position-anchor", `--${binding.value}`);
};
