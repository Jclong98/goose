<script setup lang="ts">
import { ref } from "vue";
import GTable from "./components/GTable/GTable.vue";
import type { TableColumn } from "./components/GTable/types";

const columns = ref<TableColumn[]>([
  {
    key: "name",
    title: "Name",
    pin: "left",
  },
  {
    key: "age",
    title: "Age",
  },
  {
    key: "address",
    title: "Address",
  },
  {
    key: "i",
    title: "Index",
    width: "100px",
  },
  ...Array.from({ length: 20 }, (_, i) => ({
    key: `extra${i}`,
    title: `Extra ${i}`,
  })),
  {
    key: "extra20",
    title: "Extra 20",
    pin: "right",
  },
]);

const items = ref(
  Array.from({ length: 100 }, (_, i) => ({
    name: `John Doe ${i + 1}`,
    age: Math.floor(Math.random() * 60) + 20,
    address: `${i} Main St, City`,
    i: i,
    ...Array.from({ length: 21 }, (_, j) => ({
      [`extra${j}`]: `Extra ${j} Value ${i + 1}`,
    })).reduce((acc, curr) => ({ ...acc, ...curr }), {}),
  })),
);
</script>

<template>
  <div class="layout">
    <nav class="bg-blue-500 p-4 text-white">
      <h1>Goose</h1>
    </nav>

    <aside class="left bg-gray-200 p-4">left</aside>

    <main class="overflow-hidden p-4">
      <div class="flex h-full flex-col">
        <h2 class="text-2xl font-semibold">Title</h2>
        <p class="mb-8">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto explicabo maiores et
          voluptates, sequi unde tenetur voluptate assumenda laudantium sint corrupti ut ea
          necessitatibus numquam molestiae doloribus! Commodi, enim illo!
        </p>

        <GTable :columns="columns" :items="items">
          <template #cell-i="{ item }"> {{ item.i }} + 1 = {{ item.i + 1 }} </template>
        </GTable>
      </div>
    </main>
  </div>
</template>

<style scoped>
.layout {
  display: grid;
  grid-template-areas:
    "header header"
    "left main";
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr;
  height: 100dvh;

  & > nav {
    grid-area: header;
  }

  & > .left {
    grid-area: left;
  }

  & > main {
    grid-area: main;
  }
}
</style>
