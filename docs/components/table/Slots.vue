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

function statusColor(status: string) {
  switch (status) {
    case "Active":
      return "bg-green-100 text-green-500";
    case "Pending":
      return "bg-amber-100 text-amber-500";
    case "Inactive":
      return "bg-red-100 text-red-500";
    default:
      return "";
  }
}
</script>

<template>
  <GTable :columns="columns" :items="rows">
    <template #status-header> Status (but custom!) </template>

    <template #status-cell="{ item }">
      <span class="rounded-full px-4 py-1 font-semibold" :class="statusColor(item.status)">
        {{ item.status }}
      </span>
    </template>
  </GTable>
</template>
