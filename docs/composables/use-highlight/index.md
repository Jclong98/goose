<script setup>
import BasicHighlightExample from './BasicHighlightExample.vue'
import ManualHighlightExample from './ManualHighlightExample.vue'
</script>

# useHighlight

Highlights all occurrences of a search string within a target element using the [CSS Custom Highlight API](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Custom_Highlight_API).

::: warning Browser support
This composable requires the CSS Custom Highlight API. It throws `UnsupportedHighlightApiError` in environments where `CSS.highlights` is unavailable.
:::

## Live examples

### Reactive search highlight

<!-- example -->
<BasicHighlightExample />

### Manual highlight trigger

<!-- example -->
<ManualHighlightExample />

## Signature

```ts
function useHighlight(
  target: MaybeComputedElementRef,
  search: MaybeRefOrGetter<string>,
  options?: UseHighlightOptions,
): {
  highlight: (queryInput?: MaybeRefOrGetter<string>) => void;
  clearHighlight: () => void;
  matchCount: Ref<number>;
};
```

## Parameters

| Parameter | Type                       | Description                         |
| --------- | -------------------------- | ----------------------------------- |
| `target`  | `MaybeComputedElementRef`  | Target element or component ref.    |
| `search`  | `MaybeRefOrGetter<string>` | The string to search and highlight. |
| `options` | `UseHighlightOptions`      | Optional configuration (see below). |

### Options

| Option            | Type                         | Default            | Description                                                                      |
| ----------------- | ---------------------------- | ------------------ | -------------------------------------------------------------------------------- |
| `exclude`         | `MaybeRefOrGetter<string[]>` | `[]`               | CSS selectors — text nodes under matching ancestors are skipped.                 |
| `cssHighlightKey` | `string`                     | `"search-results"` | Key used in `CSS.highlights`. Must match the `::highlight()` CSS pseudo-element. |
| `manual`          | `boolean`                    | `false`            | When `true`, disables the automatic watcher — call `highlight()` yourself.       |
| `immediate`       | `boolean`                    | `true`             | When `false`, the watcher does not run on initial mount.                         |

## Return value

| Property         | Type               | Description                                                        |
| ---------------- | ------------------ | ------------------------------------------------------------------ |
| `highlight`      | `(query?) => void` | Manually trigger highlighting. Accepts an optional query override. |
| `clearHighlight` | `() => void`       | Remove highlights and reset `matchCount` to `0`.                   |
| `matchCount`     | `Ref<number>`      | Reactive count of current matches.                                 |
