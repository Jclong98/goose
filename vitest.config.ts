
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    projects: [
      {
        name: "core",
        root: "packages/core",
        testMatch: ["**/*.spec.ts"],
      },
      {
        name: "sandbox",
        root: "packages/sandbox",
        testMatch: ["**/*.spec.ts"],
      },
    ],
  },
});
