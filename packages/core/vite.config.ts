/// <reference types="vitest/config" />
import { fileURLToPath, URL } from "node:url";

import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    dts({
      outDir: "./dist/types",
      tsconfigPath: "./tsconfig.app.json",
      exclude: ["src/App.vue", "src/main.ts", "**/*.spec.ts"],
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    cssCodeSplit: true,
    lib: {
      entry: {
        goose: fileURLToPath(new URL("./src/index.ts", import.meta.url)),
        "tw-theme": fileURLToPath(
          new URL("./src/assets/tw-theme.css", import.meta.url)
        ),
        components: fileURLToPath(
          new URL("./src/components/index.ts", import.meta.url)
        ),
        composables: fileURLToPath(
          new URL("./src/composables/index.ts", import.meta.url)
        ),
        directives: fileURLToPath(
          new URL("./src/directives/index.ts", import.meta.url)
        ),
      },
      name: "Goose",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
});
