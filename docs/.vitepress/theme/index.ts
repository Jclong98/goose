import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import ExampleWrapper from "./ExampleWrapper.vue";
import "./docs.css";

const themeOptions: Theme = {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("ExampleWrapper", ExampleWrapper);
  },
};

export default themeOptions;
