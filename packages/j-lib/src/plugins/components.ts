import type { PluginOption } from "vite";
// import AutoImportComponents from "unplugin-vue-components/vite";

export function jLibComponents(): PluginOption {
  // const components = globSync("src/components/**/*.vue");
  // const componentNames = new Set(
  //   components.map((c) => c.replace(/\.vue$/, ""))
  // );

  // return AutoImportComponents({
  //   resolvers: [
  //     (componentName) => {
  //       // if (componentNames.has(componentName)) {
  //       //   return {
  //       //     name: componentName,
  //       //     from: "j-lib/components",
  //       //   };
  //       // }
  //     },
  //   ],
  // });

  return [];
}
