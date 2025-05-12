import type { PluginOption } from "vite";
import VueRouter from "unplugin-vue-router/vite";
import type { Options as VueRouterOptions } from "unplugin-vue-router";

import type { VitePluginGooseOptions } from "..";
import defu from "defu";

export function VueRouterPlugin(options: VitePluginGooseOptions): PluginOption {
  const pluginOptions = defu(options.vueRouter, {
    dts: "./src/typed-router.d.ts",
    exclude: [
      // anything in a folder that starts with __
      "**/__*/**/*",
    ],
  } satisfies VueRouterOptions);

  return VueRouter(pluginOptions);
}
