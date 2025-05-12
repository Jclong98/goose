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
});
