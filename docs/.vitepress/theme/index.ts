import "./docs.css";

import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import ExampleWrapper from "./ExampleWrapper.vue";
import SourceChip from "./SourceChip.vue";

const themeOptions: Theme = {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("ExampleWrapper", ExampleWrapper);
    app.component("SourceChip", SourceChip);
  },
};

export default themeOptions;
