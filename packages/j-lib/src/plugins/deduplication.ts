import type { PluginOption } from "vite";

export function duplicationDetectionPlugin(): PluginOption {
  return {
    name: "j-lib:plugins-duplication-detection",
    configResolved(config) {
      const plugins = config.plugins || [];

      if (plugins.filter((i) => i.name === "unplugin-auto-import").length > 1) {
        throw new Error(
          "[UI] Multiple instances of `unplugin-auto-import` detected. j-lib includes `unplugin-auto-import` already, and you can configure it using `autoImport` option in j-lib module options."
        );
      }
      if (
        plugins.filter((i) => i.name === "unplugin-vue-components").length > 1
      ) {
        throw new Error(
          "[UI] Multiple instances of `unplugin-vue-components` detected. j-lib includes `unplugin-vue-components` already, and you can configure it using `components` option in j-lib module options."
        );
      }
    },
  };
}
