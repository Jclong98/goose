import DefaultTheme from "vitepress/theme";
import DemoBlock from "./DemoBlock.vue";
import "./docs.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("DemoBlock", DemoBlock);
  },
};
