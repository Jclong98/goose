import * as composables from "@jclong98/goose/composables";
import * as directives from "@jclong98/goose/directives";
import defu from "defu";
import type { Options as AutoImportOptions } from "unplugin-auto-import/types";
import AutoImport from "unplugin-auto-import/vite";
import type { PluginOption } from "vite";

import type { VitePluginGooseOptions } from "..";

export function AutoImportPlugin(options: VitePluginGooseOptions): PluginOption {
  const pluginOptions = defu(options.autoImport, {
    dts: "./src/auto-imports.d.ts",
    imports: [
      "vue",
      "vue-router",
      {
        from: "@jclong98/goose",
        imports: [
          ...Object.keys(composables),
          ...Object.keys(directives).map((name) => ({
            name,
            meta: { vueDirective: true },
          })),
        ],
      },
    ],
    vueTemplate: true,
    vueDirectives: true,
  } satisfies AutoImportOptions);

  return AutoImport(pluginOptions);
}
