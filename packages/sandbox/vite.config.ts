import { fileURLToPath, URL } from "node:url";

import goose from "@jclong98/vite-plugin-goose";
import { defineConfig } from "vite";
import vueDevTools from "vite-plugin-vue-devtools";

const resolvePath = (path: string) => fileURLToPath(new URL(path, import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vueDevTools(),
    goose({
      vueRouter: {
        dts: resolvePath("./src/typed-router.d.ts"),
      },
    }),
  ],
  resolve: {
    alias: {
      "@": resolvePath("./src"),
    },
  },
});
