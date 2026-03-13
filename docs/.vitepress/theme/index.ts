import "./docs.css";

import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import ExampleWrapper from "./ExampleWrapper.vue";

const themeOptions: Theme = {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("ExampleWrapper", ExampleWrapper);
  },
};

export default themeOptions;
