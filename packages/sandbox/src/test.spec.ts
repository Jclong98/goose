import * as components from "@goose/core/components";
import * as directives from "@goose/core/directives";
import { mount } from "@vue/test-utils";
import { config as vueTestUtilsConfig } from "@vue/test-utils";
import defu from "defu";

vueTestUtilsConfig.global = defu(vueTestUtilsConfig.global, {
  components,
  directives,
});

describe("globals?", () => {
  it("should be able to import vitest globals using goose vite plugin", () => {
    expect(1 + 1).toBe(2);
  });

  it("should be able to auto load vue components from goose", () => {
    const wrapper = mount({
      template: `<GButton>click me</GButton>`,
    });

    expect(wrapper.html()).toMatchInlineSnapshot(
      `"<button class="bg-green-500 px-4 py-1 rounded text-white hover:bg-green-600 transition duration-200 ease-in-out cursor-pointer active:scale-95 active:bg-green-700 border-none">click me</button>"`
    );
  });

  it("should be able to auto load vue directives from goose", () => {
    // 1. Define a simple test component that uses the directive
    const TestComponent = defineComponent({
      template: '<input type="text" v-focus data-testid="focusable-input" />',
    });

    // 2. Mount the component, registering the directive and attaching to the document body
    // Attaching to document.body is important for `el.focus()` and `document.activeElement` to work reliably in JSDOM.
    const wrapper = mount(TestComponent, {
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
