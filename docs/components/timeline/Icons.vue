<script setup lang="ts">
import { GTimeline, GTimelineItem } from "@/components";
</script>

<template>
  <GTimeline class="gap-8" style="--g-timeline-circle-radius: 1rem">
    <GTimelineItem state="completed" class="card">
      <template #icon>✓</template>
      <p>first item</p>
    </GTimelineItem>

    <GTimelineItem state="active" class="card">
      <template #icon>»</template>
      <p>second item</p>
    </GTimelineItem>

    <GTimelineItem state="pending" class="card">
      <template #icon>⋯</template>
      <p>third item</p>
    </GTimelineItem>
  </GTimeline>
</template>
