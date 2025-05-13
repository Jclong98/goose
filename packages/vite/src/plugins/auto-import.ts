import defu from "defu";
import type { Options as AutoImportOptions } from "unplugin-auto-import/types";
import AutoImport from "unplugin-auto-import/vite";
import { VueRouterAutoImports } from "unplugin-vue-router";
import type { PluginOption } from "vite";

import type { VitePluginGooseOptions } from "..";

export function AutoImportPlugin(
  options: VitePluginGooseOptions
): PluginOption {
  const pluginOptions = defu(options.autoImport, {
    dts: "./src/auto-imports.d.ts",
    imports: [
      "vue",
      VueRouterAutoImports,
      {
        from: "@goose/core",
        imports: [
          { name: "vFocus", meta: { vueDirective: true } },
          "useMultiplier",
        ],
      },
    ],
    vueTemplate: true,
    vueDirectives: true,
  } satisfies AutoImportOptions);

  return AutoImport(pluginOptions);
}
