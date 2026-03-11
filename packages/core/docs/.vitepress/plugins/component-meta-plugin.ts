import { globSync } from "tinyglobby";
import type { Plugin } from "vite";
import { createChecker } from "vue-component-meta";

// https://github.com/vuejs/language-tools/blob/master/packages/component-meta/README.md

// Usage: example: ExampleWrapper auto-doc
// <!-- component-meta: GTable -->
// <GTable ... />

function escapeMdCell(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\|/g, "\\|")
    .replace(/\n/g, "<br />")
    .trim();
}

function table(title: string, headers: string[], rows: string[][]): string {
  if (rows.length === 0) return "";
  return [
    `\n### ${title}`,
    `| ${headers.join(" | ")} |`,
    `| ${headers.map(() => "---").join(" | ")} |`,
    ...rows.map((row) => `| ${row.map(escapeMdCell).join(" | ")} |`),
  ].join("\n");
}

function findComponentFile(srcDir: string, componentName: string): string | undefined {
  const files = globSync(`${srcDir}/**/${componentName}.vue`, { absolute: true });
  return files[0];
}

export function componentMetaPlugin(tsconfigPath: string, srcDir: string): Plugin {
  const checker = createChecker(tsconfigPath, { schema: true });

  return {
    name: "component-meta",
    enforce: "pre",
    async transform(code: string, id: string) {
      if (!id.endsWith(".md")) return null;

      // Find <!-- component-meta: ComponentName --> markers
      const metaMarkerRegex = /<!--\s*component-meta:\s*(\w+)\s*-->/g;

      let newCode = code;

      let match: RegExpExecArray | null;
      while ((match = metaMarkerRegex.exec(code)) !== null) {
        const componentName = match[1];
        if (!componentName) continue;

        const componentFile = findComponentFile(srcDir, componentName);
        if (!componentFile) {
          continue;
        }

        const meta = checker.getComponentMeta(componentFile);

        const propsTable = table(
          "Props",
          ["Name", "Type", "Default", "Required", "Description"],
          meta.props
            .filter((p) => !p.global)
            .map((p) => [
              `\`${p.name}\``,
              p.type,
              p.default ?? "",
              p.required ? "Yes" : "No",
              p.description ?? "",
            ]),
        );
        const slotsTable = table(
          "Slots",
          ["Name", "Type", "Description"],
          meta.slots.map((s) => [s.name, s.type, s.description ?? ""]),
        );
        const eventsTable = table(
          "Events",
          ["Name", "Type", "Description"],
          meta.events.map((e) => [e.name, e.type, e.description ?? ""]),
        );
        const exposedTable = table(
          "Exposed",
          ["Name", "Type", "Description"],
          meta.exposed.map((x) => [x.name, x.type, x.description ?? ""]),
        );

        const docBlock = [propsTable, slotsTable, eventsTable, exposedTable]
          .filter(Boolean)
          .join("\n");
        if (!docBlock) continue;

        newCode = newCode.replace(match[0], match[0] + "\n" + docBlock);
      }

      return newCode;
    },
  };
}
