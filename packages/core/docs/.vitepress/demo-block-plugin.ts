import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import type { Plugin } from "vite";

/**
 * Vite plugin that automatically wraps example Vue components used in docs markdown
 * with a `<DemoBlock>` that displays both the live demo and its source code.
 *
 * For each `.md` file it:
 *  1. Finds all `import Name from './Name.vue'` statements in the script setup block.
 *  2. Reads the .vue file from disk.
 *  3. Replaces every `<Name ... />` usage in the markdown body (outside code fences)
 *     with a `<DemoBlock>` containing the live demo and a `#source` named slot that
 *     holds a real markdown fenced code block — which VitePress/Shiki then highlights
 *     using its normal pipeline.
 */
export function demoBlockPlugin(): Plugin {
  return {
    name: "goose-demo-block",
    enforce: "pre",
    transform(code: string, id: string) {
      if (!id.endsWith(".md")) return null;

      // Collect all relative .vue imports from the script setup block
      const importRegex = /import\s+(\w+)\s+from\s+'(\.\/[^']+\.vue)'/g;
      const components = new Map<string, string>(); // name -> relative path

      let match: RegExpExecArray | null;
      while ((match = importRegex.exec(code)) !== null) {
        if (match[1] && match[2]) components.set(match[1], match[2]);
      }

      if (components.size === 0) return null;

      // Read source of each component from disk
      const mdDir = dirname(id);
      const sources = new Map<string, string>();
      for (const [name, relativePath] of components) {
        const absPath = resolve(mdDir, relativePath);
        sources.set(name, readFileSync(absPath, "utf-8").trim());
      }

      // Wrap component usages outside code fences with DemoBlock.
      // Split on fenced code blocks so we never transform content inside them.
      const parts = code.split(/(```[\s\S]*?```)/g);

      const processedParts = parts.map((part, i) => {
        // Odd indices captured by the group = fenced code blocks — leave untouched
        if (i % 2 === 1) return part;

        for (const [name] of components) {
          // Match self-closing tags: <ComponentName /> or <ComponentName attr="val" />
          const tagRegex = new RegExp(`<${name}((?:\\s[^>]*)?)\\s*/>`, "g");
          part = part.replace(tagRegex, (_, attrs: string) => {
            // Strip `class="vp-raw"` from inner component; DemoBlock handles it instead
            const cleanAttrs = (attrs ?? "").replace(/\s*class="vp-raw"/, "").trim();
            const attrStr = cleanAttrs ? ` ${cleanAttrs}` : "";
            const source = sources.get(name) ?? "";

            // Embed source as a real fenced code block in a named slot so that
            // VitePress's Shiki pipeline highlights it exactly like any other code block.
            return [
              `<DemoBlock class="vp-raw">`,
              `<${name}${attrStr} />`,
              `<template #source>`,
              ``,
              "```vue",
              source,
              "```",
              `</template>`,
              `</DemoBlock>`,
            ].join("\n");
          });
        }

        return part;
      });

      return processedParts.join("");
    },
  };
}
