import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";
import Components from "unplugin-vue-components/vite";
import { defineConfig } from "vitepress";
import { componentMetaPlugin } from "./plugins/component-meta-plugin";
import { exampleWrapperPlugin } from "./plugins/example-wrapper-plugin";

const srcDir = fileURLToPath(new URL("../../src", import.meta.url));
const docsDir = fileURLToPath(new URL("..", import.meta.url));
const publicDir = fileURLToPath(new URL("../../public", import.meta.url));
const componentsDir = fileURLToPath(new URL("../../src/components", import.meta.url));
const tsConfigPath = fileURLToPath(new URL("../../tsconfig.json", import.meta.url));

console.log(srcDir);

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Goose UI",
  description: "Goose UI docs",
  vite: {
    resolve: {
      alias: {
        "@": srcDir,
        "@docs": docsDir,
        public: publicDir,
      },
    },
    plugins: [
      Components({
        dirs: [componentsDir],
        include: [/\.(vue|md)($|\?)/],
      }),
      tailwindcss(),
      exampleWrapperPlugin(),
      componentMetaPlugin(tsConfigPath, srcDir),
    ],
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Components", link: "/components/button/index" },
      { text: "Composables", link: "/composables/use-highlight/index" },
    ],

    sidebar: [
      {
        text: "Components",
        items: [
          { text: "GButton", link: "/components/button/index" },
          { text: "GDrawer", link: "/components/drawer/index" },
          { text: "GPopover", link: "/components/popover/index" },
          { text: "GSegmentedControl", link: "/components/segmented-control/index" },
          { text: "GTable", link: "/components/table/index" },
          { text: "GSelect", link: "/components/select/index" },
          { text: "GTimeline", link: "/components/timeline/index" },
        ],
      },
      {
        text: "Composables",
        items: [
          { text: "useHighlight", link: "/composables/use-highlight/index" },
          { text: "useMultiplier", link: "/composables/use-multiplier/index" },
          { text: "useUniqueId", link: "/composables/use-unique-id/index" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
  },
});
