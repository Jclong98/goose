import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";
import Components from "unplugin-vue-components/vite";
import { defineConfig } from "vitepress";

const srcDir = fileURLToPath(new URL("../../src", import.meta.url));
const docsDir = fileURLToPath(new URL("..", import.meta.url));
const publicDir = fileURLToPath(new URL("../../public", import.meta.url));
const componentsDir = fileURLToPath(new URL("../../src/components", import.meta.url));

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Goose UI",
  description: "Goose UI docs",
  vite: {
    resolve: {
      alias: {
        "@core": srcDir,
        "@docs": docsDir,
        public: publicDir,
      },
    },
    plugins: [
      tailwindcss(),
      Components({
        dirs: [componentsDir],
        include: [/\.vue$/, /\.md$/],
      }),
    ],
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Components", link: "/components/button" },
      { text: "Composables", link: "/composables/use-highlight" },
    ],

    sidebar: [
      {
        text: "Components",
        items: [
          { text: "GButton", link: "/components/button" },
          { text: "GDrawer", link: "/components/drawer" },
          { text: "GPopover", link: "/components/popover" },
          { text: "GSegmentedControl", link: "/components/segmented-control" },
          { text: "GTable", link: "/components/table" },
        ],
      },
      {
        text: "Composables",
        items: [
          { text: "useHighlight", link: "/composables/use-highlight" },
          { text: "useMultiplier", link: "/composables/use-multiplier" },
          { text: "useUniqueId", link: "/composables/use-unique-id" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
  },
});
