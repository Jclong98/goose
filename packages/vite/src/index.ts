import type { PluginOption } from "vite";
import { duplicationDetectionPlugin } from "./plugins/deduplication";
import { jLibComponentImportPlugin } from "./plugins/components";
import type { Options as AutoImportOptions } from "unplugin-auto-import/types";
import type { Options as ComponentsOptions } from "unplugin-vue-components/types";
import { jLibAutoImportPlugin } from "./plugins/auto-import";
import tailwindcss from "@tailwindcss/vite";

export interface JLibVitePluginOptions {
  /**
   * Override options for `unplugin-auto-import`
   */
  autoImport?: Partial<AutoImportOptions>;
  /**
   * Override options for `unplugin-vue-components`
   */
  components?: Partial<ComponentsOptions>;
}

export default function jLibVitePlugin(
  options: JLibVitePluginOptions = {}
): PluginOption[] {
  return [
    jLibAutoImportPlugin(options),
    jLibComponentImportPlugin(options),
    tailwindcss(),
    duplicationDetectionPlugin(),
  ];
}
