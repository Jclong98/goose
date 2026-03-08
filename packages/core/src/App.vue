<script setup lang="ts">
import { ref, useTemplateRef } from "vue";
import GButton from "./components/GButton/GButton.vue";
import GTable from "./components/GTable/GTable.vue";
import type { TableColumn } from "./components/GTable/types";
import { useHighlight } from "./composables/useHighlight";

type Row = {
  name: string;
  age: number;
  address: string;
  i: number;
} & Record<`extra${number}`, string>;

const columns = ref<TableColumn<keyof Row>[]>([
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
  },
  ...Array.from({ length: 20 }, (_, i) => ({
    key: `extra${i}` as `extra${number}`,
    title: `Extra ${i}`,
  })),
  {
    key: "extra20",
    title: "Extra 20",
    pin: "right",
  },
]);

const items = ref<Row[]>(
  Array.from({ length: 100 }, (_, i) => ({
    name: `John Doe ${i + 1}`,
    age: Math.floor(Math.random() * 60) + 20,
    address: `${i} Main St, City`,
    i: i,
    ...Object.fromEntries(
      Array.from({ length: 21 }, (_, j) => [`extra${j}`, `Extra ${j} Value ${i + 1}`]),
    ),
  })) as Row[],
);

const search = ref("4");
const table = useTemplateRef<HTMLElement>("table");
const { matchCount } = useHighlight(table, search, {
  exclude: [".ignore"],
});
</script>

<template>
  <div class="layout">
    <nav class="bg-blue-500 p-4 text-white">
      <h1>Goose</h1>
    </nav>

    <aside class="left bg-gray-200 p-4">
      <label>
        Search
        <input type="text" v-model="search" class="w-full rounded border bg-white px-4 py-1" />
      </label>

      <pre>{{ { matchCount } }}</pre>
    </aside>

    <main class="overflow-hidden p-4" ref="main">
      <div class="flex h-full flex-col">
        <h2 class="text-2xl font-semibold">Title</h2>
        <p class="mb-8">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto explicabo maiores et
          voluptates, sequi unde tenetur voluptate assumenda laudantium sint corrupti ut ea
          necessitatibus numquam molestiae doloribus! Commodi, enim illo!
        </p>

        <GTable :columns="columns" :items="items" ref="table">
          <template #cell:i="{ item }"> {{ item.i }} + 1 = {{ item.i + 1 }} </template>

          <template #header:i> MATH </template>

          <template #cell:address="{ item }">
            <span class="ignore">{{ item.address }}</span>
          </template>

          <template #cell:name="{ item }">
            <span>{{ item.name }}</span>
            <b>'s name</b>
          </template>
        </GTable>
      </div>
    </main>
  </div>
</template>

<style>
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

::highlight(search-results) {
  background-color: #ff0066;
  color: white;
}
</style>
