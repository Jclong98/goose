import type { PluginOption } from "vite";
import AutoImportComponents from "unplugin-vue-components/vite";
import type { Options as ComponentsOptions } from "unplugin-vue-components/types";

import type { JLibVitePluginOptions } from "..";
import defu from "defu";

export function jLibComponentImportPlugin(
  options: JLibVitePluginOptions
): PluginOption {
  const pluginOptions = defu(options.components, {
    dts: "./src/components.d.ts",
    resolvers: [
      (componentName) => {
        if (componentName.startsWith("J")) {
          return {
            name: componentName,
            from: "@goose/core",
          };
        }
      },
    ],
  } satisfies ComponentsOptions);

  return AutoImportComponents(pluginOptions);
}
