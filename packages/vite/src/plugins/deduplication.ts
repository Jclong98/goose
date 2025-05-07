import type { PluginOption } from "vite";

export function duplicationDetectionPlugin(): PluginOption {
  return {
    name: "goose:plugins-duplication-detection",
    configResolved(config) {
      const plugins = config.plugins || [];

      function throwIfDuplicate(pluginName: string) {
        if (plugins.filter((i) => i.name === pluginName).length > 1) {
          throw new Error(
            `[Goose] Multiple instances of \`${pluginName}\` detected. goose includes \`${pluginName}\` already, and you can configure it using \`autoImport\` option in goose module options.`
          );
        }
      }

      throwIfDuplicate("unplugin-auto-import");
      throwIfDuplicate("unplugin-vue-components");
      throwIfDuplicate("@tailwindcss/vite:scan");
      throwIfDuplicate("@tailwindcss/vite:generate:serve");
    },
  };
}
