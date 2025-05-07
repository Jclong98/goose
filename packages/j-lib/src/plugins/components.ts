import type { PluginOption } from "vite";

export function jLibComponents(): PluginOption {
  return {
    name: "j-lib:components",
    resolveId(id, importer) {
      console.log("resolveId", id, importer);
    },
  };
}
