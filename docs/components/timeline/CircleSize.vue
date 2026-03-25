<script setup lang="ts">
import { GTimeline, GTimelineItem } from "@/components";
import { ref } from "vue";

const circleRadius = ref(8);
</script>

<template>
  <div class="card flex items-center justify-between gap-4">
    <label class="flex items-center gap-2">
      Circle Radius
      <input type="range" v-model="circleRadius" min="1" max="20" />
    </label>

    <p class="font-semibold">{{ circleRadius }}px</p>
  </div>

  <GTimeline class="gap-8" :style="{ '--g-timeline-circle-radius': circleRadius + 'px' }">
    <GTimelineItem state="completed" class="card mt-8">
      <p>first item</p>
    </GTimelineItem>

    <GTimelineItem state="active" class="card">
      <p>second item</p>
    </GTimelineItem>

    <GTimelineItem state="pending" class="card">
      <p>third item</p>
    </GTimelineItem>
  </GTimeline>
</template>
