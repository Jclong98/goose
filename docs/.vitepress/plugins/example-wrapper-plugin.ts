import { existsSync, readFileSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import type { Plugin } from "vite";
import { githubBlobUrl } from "./github";

/**
 * Walks up from `start` to find the git repo root (the directory containing
 * `.git`), falling back to `start` if none is found.
 */
function findRepoRoot(start: string): string {
  let dir = start;
  for (;;) {
    if (existsSync(join(dir, ".git"))) return dir;
    const parent = dirname(dir);
    if (parent === dir) return start;
    dir = parent;
  }
}

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

      // Read sources and build GitHub source URLs
      const mdDir = dirname(id);
      const repoRoot = findRepoRoot(mdDir);
      const sources: Record<string, string> = {};
      const sourceUrls: Record<string, string> = {};
      for (const [name, rel] of components.entries()) {
        const filePath = resolve(mdDir, rel);
        sources[name] = readFileSync(filePath, "utf-8").trim();
        sourceUrls[name] = githubBlobUrl(relative(repoRoot, filePath));
      }

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
                `<ExampleWrapper source-url="${sourceUrls[name]}">`,
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
