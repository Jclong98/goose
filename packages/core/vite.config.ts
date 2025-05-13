/// <reference types="vitest/config" />
import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import dts from "vite-plugin-dts";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    dts({
      outDir: "./dist/types",
      tsconfigPath: "./tsconfig.app.json",
      exclude: ["src/App.vue", "src/main.ts"],
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
