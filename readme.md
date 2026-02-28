# Goose Monorepo

Vue 3 component library starter with an accompanying Vite plugin and a sandbox app.

## Quick start

```sh
pnpm install
pnpm dev
```

## Commands

```sh
# full quality gate (lint, type-check, test, build)
pnpm check

# run tests across workspace projects
pnpm test

# build distributable packages
pnpm build

# run sandbox app
pnpm sandbox:dev
```

## Workspace packages

- `packages/core`: Vue components, composables, directives, and styles.
- `packages/vite`: Opinionated Vite plugin that configures Vue, Vue Router, auto-imports, component auto-registration, Tailwind CSS, and Vitest defaults.
- `packages/sandbox`: Local app for validating package behavior end-to-end.
