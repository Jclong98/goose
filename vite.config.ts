import { fileURLToPath, URL } from "node:url";

import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import vueDevTools from "vite-plugin-vue-devtools";

const resolvePath = (path: string) => fileURLToPath(new URL(path, import.meta.url));

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
      "@": resolvePath("./src"),
      public: resolvePath("./public"),
    },
  },
  build: {
    lib: {
      entry: {
        goose: resolvePath("./src/index.ts"),
        components: resolvePath("./src/components/index.ts"),
        composables: resolvePath("./src/composables/index.ts"),
        directives: resolvePath("./src/directives/index.ts"),
        integrations: resolvePath("./src/integrations/index.ts"),
      },
      name: "Goose",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: (id) => {
        if (id.startsWith("node:")) return true;
        return ["vue", "vue-router"].includes(id);
      },
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
          "vue-router": "VueRouter",
        },
      },
    },
  },
});
