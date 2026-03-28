import { render } from "vitest-browser-vue";

import { h } from "vue";
import GPopover from "./GPopover.vue";

describe("GPopover", () => {
  it("opens when activator is clicked", async () => {
    const { getByText } = render(GPopover, {
      slots: {
        activator: ({ binding }) => h("button", binding, "Click me"),
        default: "Popover content",
      },
    });

    const popover = getByText("Popover content");
    expect(popover.element().matches(":popover-open")).toBe(false);

    const button = getByText("Click me");
    await button.click();

    expect(popover.element().matches(":popover-open")).toBe(true);
  });
});
