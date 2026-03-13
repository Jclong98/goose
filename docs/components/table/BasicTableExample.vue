<script setup lang="ts">
const columns = [
  { key: "name", title: "Name", width: "1fr" },
  { key: "role", title: "Role", width: "140px" },
  { key: "status", title: "Status", width: "120px" },
];

const rows = [
  { name: "John Halo", role: "Admin", status: "Active" },
  { name: "John Fallout", role: "Editor", status: "Active" },
  { name: "John Doe", role: "Viewer", status: "Inactive" },
];
</script>

<template>
  <GTable :columns="columns" :items="rows" />
</template>
