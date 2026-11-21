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
      return "success";
    case "Pending":
      return "warning";
    case "Inactive":
      return "danger";
    default:
      return "info";
  }
}
</script>

<template>
  <GTable :columns="columns" :items="rows">
    <template #status-header> Status (but custom!) </template>

    <template #status-cell="{ item }">
      <GCard :variant="statusColor(item.status)" class="rounded-full px-4 py-1">
        {{ item.status }}
      </GCard>
    </template>
  </GTable>
</template>
