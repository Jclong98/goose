import type { PluginOption } from "vite";
import { duplicationDetectionPlugin } from "./plugins/deduplication";
import { jLibComponentImportPlugin } from "./plugins/components";
import type { Options as ComponentsOptions } from "unplugin-vue-components/types";

export interface JLibVitePluginOptions {
  components?: Partial<ComponentsOptions> | false;
}

export default function jLibVitePlugin(
  options: JLibVitePluginOptions = {}
): PluginOption[] {
  const plugins: PluginOption[] = [];

  if (options.components !== false) {
    plugins.push(jLibComponentImportPlugin(options));
  }

  plugins.push(duplicationDetectionPlugin());

  return plugins;
}
