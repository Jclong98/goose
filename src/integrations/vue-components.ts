import type { ComponentResolverFunction } from "unplugin-vue-components";

/**
 * A component resolver for `@jclong98/goose` components
 *
 * To be used with `unplugin-vue-components`
 *
 * - https://github.com/unplugin/unplugin-vue-components
 */
export const GooseVueComponentsResolver: ComponentResolverFunction = (componentName) => {
  if (componentName.startsWith("G")) {
    return {
      name: componentName,
      from: "@jclong98/goose/components",
    };
  }
};
