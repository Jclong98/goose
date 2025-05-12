import { defineComponent } from "vue";
import { vFocus } from "./focus";
import { mount } from "@vue/test-utils";

describe("vFocus", () => {
  it("should focus the element on which the directive is used", async () => {
    // 1. Define a simple test component that uses the directive
    const TestComponent = defineComponent({
      template: '<input type="text" v-focus data-testid="focusable-input" />',
    });

    // 2. Mount the component, registering the directive and attaching to the document body
    // Attaching to document.body is important for `el.focus()` and `document.activeElement` to work reliably in JSDOM.
    const wrapper = mount(TestComponent, {
      global: {
        directives: {
          focus: vFocus, // Register the directive. The key 'focus' matches 'v-focus'
        },
      },
      attachTo: document.body, // Attach the component to the document's body
    });

    // 3. Find the element with the directive
    const inputElement = wrapper.find(
      '[data-testid="focusable-input"]'
    ).element;

    expect(document.activeElement).toBe(inputElement);

    wrapper.unmount();
  });
});
