import * as composables from "@jclong98/goose/composables";
import * as directives from "@jclong98/goose/directives";

import { defineUnimportPreset } from "unimport";

/**
 * Auto-imports for `@jclong98/goose`
 *
 * To be used with `unimport` or `unplugin-auto-import`
 *
 * - https://github.com/unplugin/unplugin-auto-import
 * - https://github.com/unjs/unimport
 */
export const GooseAutoImports = defineUnimportPreset({
  from: "@jclong98/goose",
  imports: [
    ...Object.keys(composables),
    ...Object.keys(directives).map((name) => ({
      name,
      meta: { vueDirective: true },
    })),
  ],
});
