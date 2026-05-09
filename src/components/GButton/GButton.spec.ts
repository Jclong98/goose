import { mount } from "@vue/test-utils";

import GButton from "./GButton.vue";

describe("GButton", () => {
  it("should render text from a slot", () => {
    const wrapper = mount(GButton, {
      slots: {
        default: "Click me",
      },
    });

    expect(wrapper.text()).toContain("Click me");
  });

  it("should emit click event when clicked", async () => {
    const wrapper = mount(GButton, {
      slots: {
        default: "Click me",
      },
    });

    await wrapper.trigger("click");

    expect(wrapper.emitted()).toHaveProperty("click");
  });

  it.for([true, "lite"] as const)(
    "should emit click:disabled when disabled is %s",
    async (disabled) => {
      const wrapper = mount(GButton, {
        slots: {
          default: "Click me",
        },
        props: {
          disabled,
        },
      });

      await wrapper.trigger("click");

      expect(wrapper.emitted()).toHaveProperty("click:disabled");
    },
  );
});
