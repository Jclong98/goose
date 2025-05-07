import type { PluginOption } from "vite";
import AutoImportComponents from "unplugin-vue-components/vite";

export function jLibComponents(): PluginOption {
  return AutoImportComponents({
    dts: "src/components.d.ts",
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
  });
}
