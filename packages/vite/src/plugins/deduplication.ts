import type { PluginOption } from "vite";

export function DuplicationDetectionPlugin(): PluginOption {
  return {
    name: "goose:vite-plugin-duplication-detection",
    configResolved(config) {
      const plugins = config.plugins || [];

      function throwIfDuplicate(pluginName: string) {
        if (plugins.filter((i) => i.name === pluginName).length > 1) {
          throw new Error(
            `[Goose] Multiple instances of \`${pluginName}\` detected. goose includes \`${pluginName}\` already. If it has config, you can configure it in the goose() plugin options.`
          );
        }
      }

      throwIfDuplicate("unplugin-auto-import");
      throwIfDuplicate("unplugin-vue-components");
    },
  };
}
