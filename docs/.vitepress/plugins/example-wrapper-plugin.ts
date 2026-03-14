import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import type { Plugin } from "vite";

export function exampleWrapperPlugin(): Plugin {
  return {
    name: "goose-example-wrapper",
    enforce: "pre",
    transform(code: string, id: string) {
      if (!id.endsWith(".md")) return null;

      // Find all imported .vue components
      const importRegex = /import\s+(\w+)\s+from\s+'(\.\/[^']+\.vue)'/g;
      const components = new Map<string, string>();
      let match: RegExpExecArray | null;
      while ((match = importRegex.exec(code)) !== null) {
        if (match[1] && match[2]) {
          components.set(match[1], match[2]);
        }
      }
      if (!components.size) return null;

      // Read sources
      const mdDir = dirname(id);
      const sources = Object.fromEntries(
        Array.from(components.entries()).map(([name, rel]) => [
          name,
          readFileSync(resolve(mdDir, rel), "utf-8").trim(),
        ]),
      );

      // Only wrap tags preceded by <!-- example -->
      const parts = code.split(/(```[\s\S]*?```)/g);
      const processed = parts.map((part, i) => {
        if (i % 2 === 1) return part;
        for (const name of Object.keys(sources)) {
          part = part.replace(
            new RegExp(`<!-- example -->\\s*<${name}((?:\\s[^>]*)?)\\s*/>`, "g"),
            (_, attrs) =>
              [
                `<ClientOnly>`,
                `<ExampleWrapper>`,
                `<${name}${attrs ? " " + attrs.trim() : ""} />`,
                `<template #code>`,
                "",
                "```vue",
                sources[name],
                "```",
                `</template>`,
                `</ExampleWrapper>`,
                `</ClientOnly>`,
              ].join("\n"),
          );
        }
        return part;
      });
      return processed.join("");
    },
  };
}
