# @goose/core

Core Vue package for Goose UI primitives, composables, directives, and shared styles.

## Exports

- Root exports: components, composables, directives, and base styles.
- Subpath exports:
  - `@goose/core/components`
  - `@goose/core/composables`
  - `@goose/core/directives`
  - `@goose/core/style.css`
  - `@goose/core/tw-theme.css`

## Available APIs

- Components: `GButton`, `GPopover`, `GSegmentedControl`
- Composables: `useMultiplier`, `useUniqueId`
- Directives: `v-focus`

## Development

```sh
pnpm -C packages/core dev
pnpm -C packages/core test
pnpm -C packages/core build
```

## Notes

- This package is currently marked `private` in this repository.
- Types are emitted to `dist/types` during build.
