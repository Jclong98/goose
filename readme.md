# Vue Component Library Starter

## Structure:

- packages
  - core
    - this is the actual components/composables package
  - vite
    - this is a [tsdown](https://tsdown.dev/) bundled vite plugin. This includes a few built in vite plugins so that you don't have to configure them yourself
      - [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components)
      - [unplugin-auto-import](https://github.com/unplugin/unplugin-auto-import)
      - [tailwindcss](https://tailwindcss.com/)
  - sandbox
    - a place to test out both the library and the vite plugin
