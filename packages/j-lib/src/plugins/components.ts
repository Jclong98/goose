import type { Plugin } from "vite";

export function jLibComponents(): Plugin {
  return {
    name: "j-lib:components",
    resolveId(id, importer) {
      console.log("resolveId", id, importer);
    },
  };
}
