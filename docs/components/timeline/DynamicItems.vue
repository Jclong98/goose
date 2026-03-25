<script setup lang="ts">
import { GTimeline, GTimelineItem, type TimelineState } from "@/components";
import { ref } from "vue";

function randomId() {
  return Math.random().toString(36).substring(2, 9);
}

const items = ref<{ id: string; state: TimelineState }[]>([
  { id: randomId(), state: "completed" },
  { id: randomId(), state: "active" },
  { id: randomId(), state: "pending" },
]);

function addItem() {
  items.value.push({ id: randomId(), state: "pending" });
}
</script>

<template>
  <div class="card">
    <GButton @click="addItem">Add Item</GButton>
  </div>

  <GTimeline class="gap-8">
    <GTimelineItem
      v-for="(item, index) in items"
      :key="item.id"
      :state="item.state"
      class="card flex gap-2"
      :class="{ 'mt-8': index === 0 }"
    >
      <p>Item {{ item.id }}</p>

      <div class="flex-1"></div>

      <!-- remove -->
      <select v-model="item.state" class="ml-4 rounded border">
        <option value="completed" :selected="item.state === 'completed'">Completed</option>
        <option value="active" :selected="item.state === 'active'">Active</option>
        <option value="pending" :selected="item.state === 'pending'">Pending</option>
      </select>

      <!-- remove -->
      <GButton @click="items.splice(index, 1)" class="ml-auto">Remove</GButton>
    </GTimelineItem>
  </GTimeline>
</template>
