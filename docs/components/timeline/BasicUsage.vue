<script setup lang="ts">
import { GTimeline, GTimelineItem } from "@/components";
</script>

<template>
  <GTimeline class="gap-8">
    <GTimelineItem state="completed" class="card">
      <p>first item in the timeline</p>
      <p>each item has a state</p>
    </GTimelineItem>

    <GTimelineItem state="active" class="card">
      <p>Second item</p>
      <p>This one has multiple paragraphs</p>
      <p>it shows that the timeline graphic on the left can grow in height</p>
    </GTimelineItem>

    <GTimelineItem state="pending" class="card">
      <p>third item</p>
    </GTimelineItem>
  </GTimeline>
</template>
