import tailwindcss from "@tailwindcss/vite";
import type { Options as VueOptions } from "@vitejs/plugin-vue";
import type { Options as AutoImportOptions } from "unplugin-auto-import/types";
import type { Options as ComponentsOptions } from "unplugin-vue-components/types";
import type { Options as VueRouterOptions } from "unplugin-vue-router";
import type { PluginOption } from "vite";

import { AutoImportPlugin } from "./plugins/auto-import";
import { ComponentImportPlugin } from "./plugins/components";
import { DuplicationDetectionPlugin } from "./plugins/deduplication";
import { VitestSettingsPlugin } from "./plugins/vitest-settings";
import { VuePlugin } from "./plugins/vue";
import { VueRouterPlugin } from "./plugins/vue-router";

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
  /**
   * Override options for `@vitejs/plugin-vue`
   */
  vue?: Partial<VueOptions>;
}

export default function VitePluginGoose(
  options: VitePluginGooseOptions = {}
): PluginOption[] {
  return [
    AutoImportPlugin(options),
    ComponentImportPlugin(options),
    VueRouterPlugin(options),
    VuePlugin(options), // must come after VueRouterPlugin
    tailwindcss(),

    VitestSettingsPlugin(),
    DuplicationDetectionPlugin(),
  ];
}
