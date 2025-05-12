import type { PluginOption } from "vite";
import type { Options as AutoImportOptions } from "unplugin-auto-import/types";
import type { Options as ComponentsOptions } from "unplugin-vue-components/types";
import type { Options as VueRouterOptions } from "unplugin-vue-router";

import { AutoImportPlugin } from "./plugins/auto-import";
import { ComponentImportPlugin } from "./plugins/components";
import { VueRouterPlugin } from "./plugins/vue-router";
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
  /**
   * Override options for `unplugin-vue-router`
   */
  vueRouter?: Partial<VueRouterOptions>;
}

export default function VitePluginGoose(
  options: VitePluginGooseOptions = {}
): PluginOption[] {
  return [
    AutoImportPlugin(options),
    ComponentImportPlugin(options),
    VueRouterPlugin(options),

    VitestSettingsPlugin(),
    DuplicationDetectionPlugin(),
  ];
}
