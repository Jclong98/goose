import type { PluginOption } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import type { Options as AutoImportOptions } from "unplugin-auto-import/types";

import type { GooseVitePluginOptions } from "..";
import defu from "defu";

export function GooseAutoImportPlugin(
  options: GooseVitePluginOptions
): PluginOption {
  const pluginOptions = defu(options.autoImport, {
    dts: options.autoImport?.dts ?? "./src/auto-imports.d.ts",
    imports: ["vue", "vue-router"],
  } satisfies AutoImportOptions);

  return AutoImport(pluginOptions);
}
