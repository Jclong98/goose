import type { PluginOption } from "vite";
import defu from "defu";
import AutoImport from "unplugin-auto-import/vite";
import type { Options as AutoImportOptions } from "unplugin-auto-import/types";
import { VueRouterAutoImports } from 'unplugin-vue-router';

import type { VitePluginGooseOptions } from "..";

export function AutoImportPlugin(
  options: VitePluginGooseOptions
): PluginOption {
  const pluginOptions = defu(options.autoImport, {
    dts: options.autoImport?.dts ?? "./src/auto-imports.d.ts",
    imports: ["vue", VueRouterAutoImports],
  } satisfies AutoImportOptions);

  return AutoImport(pluginOptions);
}
