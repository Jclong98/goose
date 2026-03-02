<script setup lang="ts">
import { GButton, GDrawer } from "@/components";
import { ref } from "vue";

const sideSelectOptions = ["left", "right"] as const;
const side = ref<(typeof sideSelectOptions)[number]>("right");
</script>

<template>
  <div class="layout">
    <nav class="bg-blue-500 p-4 text-white">
      <h1>Goose</h1>
    </nav>

    <aside class="bg-gray-200 p-4">left</aside>

    <main class="p-4">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate deleniti deserunt
        asperiores provident. Sed ab delectus consequuntur quam! Quod doloribus, illo labore iure
        facilis numquam fuga recusandae sunt. Ipsum, similique.
      </p>

      <GButton popovertarget="my-panel">Open drawer</GButton>

      <GDrawer id="my-panel" anchor="--main" :side="side" class="max-w-96 p-4">
        <h2 class="text-2xl font-semibold">This is a drawer</h2>

        <select name="side" id="side" v-model="side" class="rounded border p-2">
          <option v-for="option in sideSelectOptions" :key="option" :value="option">
            {{ option }}
          </option>
        </select>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate deleniti deserunt
          asperiores provident. Sed ab delectus consequuntur quam! Quod doloribus, illo labore iure
          facilis numquam fuga recusandae sunt. Ipsum, similique.
        </p>

        <div class="flex-1"></div>

        <footer class="flex">
          <div class="flex-1"></div>
          <GButton popovertarget="my-panel" popovertargetaction="hide"> Close </GButton>
        </footer>
      </GDrawer>
    </main>

    <div class="right bg-gray-200">right side</div>

    <footer class="bg-gray-300 p-4">footer</footer>
  </div>
</template>

<style scoped>
.layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "aside main right"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  min-height: 100dvh;
  anchor-name: --layout;

  & > nav {
    grid-area: header;
  }

  & > aside {
    grid-area: aside;
  }

  & > main {
    grid-area: main;
    anchor-name: --main;
  }

  & > .right {
    grid-area: right;
  }

  & > footer {
    grid-area: footer;
  }
}
</style>
