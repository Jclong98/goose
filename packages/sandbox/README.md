# @jclong98/goose-sandbox

Sandbox app for manually validating `@jclong98/goose` and `@jclong98/vite-plugin-goose` together.

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
