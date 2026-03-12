/// <reference types="vitest/config" />
import type { PluginOption } from "vite";

export function VitestSettingsPlugin(): PluginOption {
  return {
    name: "goose:vite-plugin-vitest-settings",
    config() {
      return {
        test: {
          globals: true,
          environment: "jsdom",
        },
      };
    },
  };
}
