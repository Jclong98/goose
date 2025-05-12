import type { PluginOption } from "vite";
import type { Options as AutoImportOptions } from "unplugin-auto-import/types";
import type { Options as ComponentsOptions } from "unplugin-vue-components/types";

import { AutoImportPlugin } from "./plugins/auto-import";
import { ComponentImportPlugin } from "./plugins/components";
import { VitestSettingsPlugin } from "./plugins/vitest-settings";
import { DuplicationDetectionPlugin } from "./plugins/deduplication";

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
    AutoImportPlugin(options),
    ComponentImportPlugin(options),
    VitestSettingsPlugin(),
    DuplicationDetectionPlugin(),
  ];
}
