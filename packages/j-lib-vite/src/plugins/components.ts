import type { PluginOption } from "vite";
import AutoImportComponents from "unplugin-vue-components/vite";
import type { Options as ComponentsOptions } from "unplugin-vue-components/types";

import type { JLibVitePluginOptions } from "..";
import defu from "defu";

const defaultOptions: ComponentsOptions = {
  dts: "./src/components.d.ts",
  resolvers: [
    (componentName) => {
      if (componentName.startsWith("J")) {
        return {
          name: componentName,
          from: "j-lib",
        };
      }
    },
  ],
};

export function jLibComponentImportPlugin(
  options: JLibVitePluginOptions
): PluginOption {
  const pluginOptions = defu(options.components, defaultOptions);

  return AutoImportComponents(pluginOptions);
}
