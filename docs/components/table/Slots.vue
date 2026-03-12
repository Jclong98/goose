<script setup lang="ts">
const columns = [
  { key: "name", title: "Name" },
  { key: "role", title: "Role", width: "1fr" },
  { key: "status", title: "Status" },
];

const rows = [
  { name: "John Halo", role: "Admin", status: "Active" },
  { name: "John Fallout", role: "Editor", status: "Pending" },
  { name: "John Doe", role: "Viewer", status: "Inactive" },
];
</script>

<template>
  <GTable :columns="columns" :items="rows">
    <template #status-header>
      Status (but custom!)
    </template>

    <template #status-cell="{ item }">
      <span class="font-semibold px-4 py-1 rounded-full"
        :class="item.status === 'Active' ? 'text-green-500 bg-green-100' : item.status === 'Pending' ? 'text-amber-500 bg-amber-100' : 'text-red-500 bg-red-100'">
        {{ item.status }}
      </span>
    </template>
  </GTable>
</template>
