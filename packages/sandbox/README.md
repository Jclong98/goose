# @goose/sandbox

Sandbox app for manually validating `@goose/core` and `@goose/vite` together.

## What it is for

- Verify component behavior quickly during local development.
- Validate Vite plugin integration (auto-imports, router integration, test defaults).
- Reproduce issues before making package-level changes.

## Development

```sh
pnpm -C packages/sandbox dev
pnpm -C packages/sandbox test
pnpm -C packages/sandbox build
```
