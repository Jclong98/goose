import type { Options as VueOptions } from "@vitejs/plugin-vue";
import vue from "@vitejs/plugin-vue";
import defu from "defu";
import type { PluginOption } from "vite";

import type { VitePluginGooseOptions } from "..";

export function VuePlugin(options: VitePluginGooseOptions): PluginOption {
  const pluginOptions = defu(options.vue, {} satisfies VueOptions);

  return vue(pluginOptions);
}
