import type { PluginOption } from "vite";
import { GooseDuplicationDetectionPlugin } from "./plugins/deduplication";
import { GooseComponentImportPlugin } from "./plugins/components";
import type { Options as AutoImportOptions } from "unplugin-auto-import/types";
import type { Options as ComponentsOptions } from "unplugin-vue-components/types";
import { GooseAutoImportPlugin } from "./plugins/auto-import";
import tailwindcss from "@tailwindcss/vite";

export interface VitePluginGooseOptions {
  /**
   * Override options for `unplugin-auto-import`
   */
  autoImport?: Partial<AutoImportOptions>;
  /**
   * Override options for `unplugin-vue-components`
   */
  components?: Partial<ComponentsOptions>;
}

export default function VitePluginGoose(
  options: VitePluginGooseOptions = {}
): PluginOption[] {
  return [
    GooseAutoImportPlugin(options),
    GooseComponentImportPlugin(options),
    tailwindcss(),
    GooseDuplicationDetectionPlugin(),
  ];
}
