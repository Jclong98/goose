import defu from "defu";
import VueRouter from "vue-router/vite";
import type { PluginOption } from "vite";

import type { VitePluginGooseOptions } from "..";

export function VueRouterPlugin(options: VitePluginGooseOptions): PluginOption {
  const pluginOptions = defu(options.vueRouter, {
    dts: "./src/typed-router.d.ts",
    exclude: [
      // anything in a folder that starts with __
      "**/__*/**/*",
    ],
  } satisfies Parameters<typeof VueRouter>[0]);

  return VueRouter(pluginOptions);
}
