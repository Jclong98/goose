import { webdriverio } from "@vitest/browser-webdriverio";
import { defineConfig } from "vitest/config";
import config from "./vite.config";

export default defineConfig({
  test: {
    projects: [
      // Unit tests
      {
        plugins: config.plugins,
        resolve: config.resolve,
        test: {
          name: "unit",
          globals: true,
          environment: "jsdom",
          include: ["src/**/*.{spec,test}.ts"],
          exclude: ["src/**/*.b.{spec,test}.ts"],
        },
      },

      // Browser tests
      {
        plugins: config.plugins,
        resolve: config.resolve,
        test: {
          name: "browser",
          include: ["src/**/*.b.{spec,test}.ts"],
          globals: true,
          browser: {
            enabled: true,
            provider: webdriverio(),
            // https://vitest.dev/config/browser/webdriverio
            instances: [{ browser: "chrome" }],
            headless: true,
          },
        },
      },
    ],
  },
});
