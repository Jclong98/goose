import type { PluginOption } from "vite";

export function DuplicationDetectionPlugin(): PluginOption {
  return {
    name: "goose:vite-plugin-duplication-detection",
    configResolved(config) {
      const plugins = config.plugins || [];

      // this will print all plugin names when vite starts
      // const pluginNames = plugins.map((i) => i.name);
      // console.log(pluginNames);

      function throwIfDuplicate(pluginName: string) {
        if (plugins.filter((i) => i.name === pluginName).length > 1) {
          throw new Error(
            `[Goose] Multiple instances of \`${pluginName}\` detected. goose includes \`${pluginName}\` already. If it has config, you can configure it in the goose() plugin options.`
          );
        }
      }

      const pluginNames = [
        "unplugin-auto-import",
        "unplugin-vue-components",
        "@tailwindcss/vite:scan",
        "@tailwindcss/vite:generate:serve",
        "vite:vue",
        "unplugin-vue-router",
      ];

      for (const name of pluginNames) {
        throwIfDuplicate(name);
      }
    },
  };
}
