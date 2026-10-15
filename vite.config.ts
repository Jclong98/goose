import { fileURLToPath, URL } from "node:url";

import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { viteStaticCopy } from "vite-plugin-static-copy";
import vueDevTools from "vite-plugin-vue-devtools";
import { defineConfig, lazyPlugins } from "vite-plus";

const resolvePath = (path: string) => fileURLToPath(new URL(path, import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  fmt: {
    ignorePatterns: [],
    sortTailwindcss: {},
    semi: true,
  },
  lint: {
    plugins: ["eslint", "typescript", "vue", "import", "oxc", "unicorn"],
    categories: {},
    rules: {
      "vite-plus/prefer-vite-plus-imports": "error",
    },
    settings: {},
    env: {
      builtin: true,
    },
    globals: {},
    ignorePatterns: [],
    options: {
      typeAware: true,
      typeCheck: true,
    },
    jsPlugins: [
      {
        name: "vite-plus",
        specifier: "vite-plus/oxlint-plugin",
      },
    ],
  },
  plugins: lazyPlugins(() => [
    vue(),
    vueDevTools(),
    dts({
      outDir: "./dist/types",
      tsconfigPath: "./tsconfig.app.json",
      exclude: ["**/*.spec.ts"],
    }),
    tailwindcss(),
    viteStaticCopy({
      targets: [
        {
          src: "src/assets/tw-theme.css",
          dest: ".",
          rename: { stripBase: true },
        },
      ],
    }),
  ]),
  resolve: {
    alias: {
      "@": resolvePath("./src"),
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
      formats: ["es"],
    },
    rolldownOptions: {
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
