import type { MaybeElement } from "@vueuse/core";
import { tryOnScopeDispose, unrefElement } from "@vueuse/core";
import type { MaybeRefOrGetter } from "vue";
import { readonly, ref, toValue, watch } from "vue";

type NodePosition = { node: Node; offset: number };

function normalizeSelectors(selectors: readonly string[] | null | undefined): string[] {
  return (selectors ?? [])
    .map((selector) => selector.trim())
    .filter((selector) => selector.length > 0);
}

function hasHighlightSupport(): boolean {
  return (
    typeof CSS !== "undefined" &&
    "highlights" in CSS &&
    typeof CSS.highlights !== "undefined" &&
    typeof Highlight !== "undefined"
  );
}

/** Collects all text nodes under `root` in document order. */
function collectTextNodes(root: Node, exclude: string[]): Node[] {
  const nodes: Node[] = [];
  const ownerDocument = root.ownerDocument ?? document;
  const walker = ownerDocument.createTreeWalker(root, NodeFilter.SHOW_TEXT, (node) => {
    // Fast path: when there are no exclusion selectors, accept all text nodes.
    if (exclude.length === 0) return NodeFilter.FILTER_ACCEPT;

    // Detached/edge-case text nodes without an element parent are kept so we
    // don't accidentally drop valid content from the searchable text stream.
    const parent = node.parentElement;
    if (!parent) return NodeFilter.FILTER_ACCEPT;

    for (const selector of exclude) {
      try {
        // If any ancestor matches an excluded selector, reject this text node.
        // `FILTER_REJECT` removes this node from the traversal result.
        if (parent.closest(selector)) return NodeFilter.FILTER_REJECT;
      } catch {
        // Invalid selectors should not break highlighting; ignore and continue.
        continue;
      }
    }

    return NodeFilter.FILTER_ACCEPT;
  });
  let node = walker.nextNode();
  while (node) {
    nodes.push(node);
    node = walker.nextNode();
  }
  return nodes;
}

/**
 * Builds a flat character-to-node map across all text nodes.
 * Each index in the returned array corresponds to a character in the combined
 * text and points back to the source node and its local offset.
 */
function buildNodeMap(textNodes: Node[]): {
  map: NodePosition[];
  text: string;
} {
  const map: NodePosition[] = [];
  let text = "";
  for (const node of textNodes) {
    const content = node.textContent ?? "";
    for (let i = 0; i < content.length; i++) {
      map.push({ node, offset: i });
    }
    text += content;
  }
  return { map, text };
}

/**
 * Finds all case-insensitive occurrences of `query` in the node map and
 * returns a `Range` for each match. Ranges may span element boundaries.
 */
function findRanges(query: string, map: NodePosition[], text: string): Range[] {
  const lower = text.toLowerCase();
  const ranges: Range[] = [];
  let pos = 0;
  while (pos < lower.length) {
    const index = lower.indexOf(query, pos);
    if (index === -1) break;
    const start = map[index]!;
    const end = map[index + query.length - 1]!;
    const range = start.node.ownerDocument?.createRange() ?? new Range();
    range.setStart(start.node, start.offset);
    range.setEnd(end.node, end.offset + 1);
    ranges.push(range);
    pos = index + query.length;
  }
  return ranges;
}

/**
 * A composable that highlights all occurrences of a search string
 * within a target element using the CSS Custom Highlight API.
 *
 * @param target target element or component ref exposing `$el`
 * @param search string to search and highlight
 */
export function useHighlight(
  target: MaybeRefOrGetter<MaybeElement>,
  search: MaybeRefOrGetter<string>,
  options?: {
    exclude?: MaybeRefOrGetter<string[]>;
    cssHighlightKey?: string;
    manual?: boolean;
    immediate?: boolean;
  },
) {
  const {
    exclude = [],
    cssHighlightKey = "search-results",
    manual = false,
    immediate = true,
  } = options ?? {};
  const isSupported = ref(hasHighlightSupport());
  const matchCount = ref(0);

  /**
   * Removes the current CSS highlight entry and resets `matchCount` to `0`.
   */
  const clearHighlight = () => {
    if (isSupported.value) {
      CSS.highlights.delete(cssHighlightKey);
    }
    matchCount.value = 0;
  };

  /**
   * Highlights all case-insensitive matches of the provided query (or current
   * `search` value when omitted) within the target element.
   *
   * @param queryInput Optional query override used instead of `search`.
   */
  const highlight = (queryInput?: MaybeRefOrGetter<string>) => {
    if (!isSupported.value) {
      matchCount.value = 0;
      return;
    }

    const el = unrefElement(toValue(target));
    if (!el) {
      clearHighlight();
      return;
    }

    const rawQuery = queryInput === undefined ? toValue(search) : toValue(queryInput);
    const query = rawQuery.trim().toLowerCase();
    if (!query) {
      clearHighlight();
      return;
    }

    const excludeSelectors = toValue(exclude);
    const normalizedExclude = normalizeSelectors(excludeSelectors);

    const textNodes = collectTextNodes(el, normalizedExclude);
    const { map, text } = buildNodeMap(textNodes);
    const ranges = findRanges(query, map, text);

    if (ranges.length === 0) {
      CSS.highlights.delete(cssHighlightKey);
    } else {
      CSS.highlights.set(cssHighlightKey, new Highlight(...ranges));
    }
    matchCount.value = ranges.length;
  };

  if (!manual) {
    const stop = watch(
      () => {
        const searchValue = toValue(search);
        // Flatten selectors into a stable primitive so the watcher reacts to
        // in-place array content/order changes without requiring deep watch.
        const excludeSelectors = normalizeSelectors(toValue(exclude)).join("\u0000");
        const targetElement = unrefElement(toValue(target));
        return { excludeSelectors, searchValue, targetElement };
      },
      ({ searchValue }) => highlight(searchValue),
      { immediate },
    );

    tryOnScopeDispose(stop);
  }

  tryOnScopeDispose(clearHighlight);

  return {
    clearHighlight,
    highlight,
    isSupported: readonly(isSupported),
    matchCount,
  };
}
