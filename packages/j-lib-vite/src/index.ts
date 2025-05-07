import type { PluginOption } from "vite";
import { duplicationDetectionPlugin } from "./plugins/deduplication";
import { jLibComponents } from "./plugins/components";

export default function jLibVitePlugin(): PluginOption[] {
  return [jLibComponents(), duplicationDetectionPlugin()];
}
