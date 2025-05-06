import tailwindcss from "@tailwindcss/vite";
import { createUnplugin, type UnpluginOptions } from "unplugin";

export interface JLibPluginOptions {
  // define your plugin options here
}

export const JLibPlugin = createUnplugin<JLibPluginOptions>(() => {
  return [
    tailwindcss(),
    <UnpluginOptions>{
      name: "j-lib:plugins-duplication-detection",
      vite: {
        configResolved(config) {
          const plugins = config.plugins || [];

          if (
            plugins.filter((i) => i.name === "unplugin-auto-import").length > 1
          ) {
            throw new Error(
              "[UI] Multiple instances of `unplugin-auto-import` detected. UI includes `unplugin-auto-import` already, and you can configure it using `autoImport` option in UI module options."
            );
          }
          if (
            plugins.filter((i) => i.name === "unplugin-vue-components").length >
            1
          ) {
            throw new Error(
              "[UI] Multiple instances of `unplugin-vue-components` detected. UI includes `unplugin-vue-components` already, and you can configure it using `components` option in UI module options."
            );
          }
        },
      },
    },
  ].flat(1) as UnpluginOptions[];
});
