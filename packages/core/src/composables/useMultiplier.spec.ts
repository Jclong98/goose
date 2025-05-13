import { ref } from "vue";

import { useMultiplier } from "./useMultiplier";

describe("useMultiplier", () => {
  it("should multiply the first number by the second number", () => {
    const { product } = useMultiplier(2, 3);

    expect(product.value).toBe(6);
  });

  it("should multiply reactively", () => {
    const num1 = ref(2);
    const num2 = ref(3);

    const { product } = useMultiplier(num1, num2);
    expect(product.value).toBe(6);

    num1.value = 4;
    expect(product.value).toBe(12);

    num2.value = 5;
    expect(product.value).toBe(20);
  });
});
