import { mount } from "@vue/test-utils";

import { useIdAttr } from "./useIdAttr";

describe("useIdAttr", () => {
  it("should give a new unique id when called", () => {
    const wrapper = mount({
      template: `
        <div data-testid="id1" :id="id1"></div>
        <div data-testid="id2" :id="id2"></div>
      `,
      setup() {
        const id1 = useIdAttr();
        const id2 = useIdAttr();
        return { id1, id2 };
      },
    });

    const id1 = wrapper.get("[data-testid='id1']").attributes("id");
    expect(id1).toMatchInlineSnapshot(`"v-0"`);
    const id2 = wrapper.get("[data-testid='id2']").attributes("id");
    expect(id2).toMatchInlineSnapshot(`"v-1"`);
  });

  it("should return the id from attrs if provided", () => {
    const wrapper = mount(
      {
        template: `<div :id="id"></div>`,
        setup() {
          const id = useIdAttr();
          return { id };
        },
      },
      {
        attrs: { id: "custom-id" },
      }
    );

    expect(wrapper.attributes("id")).toBe("custom-id");
    expect(wrapper.vm.id).toBe("custom-id");
  });
});
