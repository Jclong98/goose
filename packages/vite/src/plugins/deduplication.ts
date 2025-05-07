import type { PluginOption } from "vite";

export function duplicationDetectionPlugin(): PluginOption {
  return {
    name: "goose:plugins-duplication-detection",
    configResolved(config) {
      const plugins = config.plugins || [];

      if (plugins.filter((i) => i.name === "unplugin-auto-import").length > 1) {
        throw new Error(
          "[Goose] Multiple instances of `unplugin-auto-import` detected. goose includes `unplugin-auto-import` already, and you can configure it using `autoImport` option in goose module options."
        );
      }
      if (
        plugins.filter((i) => i.name === "unplugin-vue-components").length > 1
      ) {
        throw new Error(
          "[Goose] Multiple instances of `unplugin-vue-components` detected. goose includes `unplugin-vue-components` already, and you can configure it using `components` option in goose module options."
        );
      }
    },
  };
}
