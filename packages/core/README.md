# @jclong98/goose

Core Vue package for Goose UI primitives, composables, directives, and shared styles.

## Exports

- Root exports: components, composables, directives, and base styles.
- Subpath exports:
  - `@jclong98/goose/components`
  - `@jclong98/goose/composables`
  - `@jclong98/goose/directives`
  - `@jclong98/goose/style.css`
  - `@jclong98/goose/tw-theme.css`

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

- Types are emitted to `dist/types` during build.
