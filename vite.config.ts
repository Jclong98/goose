import { fileURLToPath, URL } from "node:url";

import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { viteStaticCopy } from "vite-plugin-static-copy";
import vueDevTools from "vite-plugin-vue-devtools";
import { defineConfig, lazyPlugins } from "vite-plus";

const resolvePath = (path: string) => fileURLToPath(new URL(path, import.meta.url));

export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  fmt: {
    sortTailwindcss: {},
    semi: true,
  },
  lint: {
    plugins: ["eslint", "typescript", "vue", "import", "oxc", "unicorn"],
    rules: {
      "vite-plus/prefer-vite-plus-imports": "error",
    },
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
      entryRoot: "./src",
      tsconfigPath: "./tsconfig.app.json",
      exclude: ["**/*.spec.ts", "playground/**"],
    }),
    tailwindcss(),
    viteStaticCopy({
      targets: [
        {
          src: "src/assets/tw-theme.css",
          dest: ".",
          rename: { stripBase: true },
        },
        {
          // Opt-in font CSS: copied verbatim (not processed by Vite) so the
          // @font-face urls stay relative instead of being inlined as base64.
          src: "src/assets/fonts.css",
          dest: ".",
          rename: { stripBase: true },
        },
        {
          src: "src/assets/fonts/**/*",
          dest: ".",
          rename: { stripBase: 2 },
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
      formats: ["es"],
    },
    rolldownOptions: {
      // Externalize peer deps (and their subpath imports) so consumers get a
      // single shared instance of each.
      external: ["vue", "@vueuse/core", "unimport", /^node:/],
    },
  },
});
