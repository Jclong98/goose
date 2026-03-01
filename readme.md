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

## Changesets

Use Changesets to track package version bumps and release notes for `packages/core` and `packages/vite`.

```sh
# create a new changeset file in .changeset/
pnpm changeset

# apply pending changesets (updates package versions + changelogs)
pnpm version-packages

# publish versioned packages
pnpm release
```

Typical flow:

1. Run `pnpm changeset` in your feature branch and commit the generated `.changeset/*.md` file.
2. After merge to `main`, run `pnpm version-packages` and commit the version/changelog updates.
3. Run `pnpm release` to publish.

Notes:

- `@goose/sandbox` is ignored by Changesets config and will not be versioned/published.
- For metadata-only changes (for example baseline version resets), run `pnpm changeset add --empty` so `pnpm changeset status` does not fail.
- `pnpm release` expects publish credentials (for example, npm auth) to already be configured.

## Workspace packages

- `packages/core`: Vue components, composables, directives, and styles.
- `packages/vite`: Opinionated Vite plugin that configures Vue, Vue Router, auto-imports, component auto-registration, Tailwind CSS, and Vitest defaults.
- `packages/sandbox`: Local app for validating package behavior end-to-end.
