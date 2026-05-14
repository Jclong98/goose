<script lang="ts" setup>
import { GTimeline, GTimelineItem } from "./components/GTimeline";
</script>

<template>
  <div class="flex h-screen items-center justify-center gap-16 p-8">
    <!-- Basic timeline -->
    <section>
      <h2 class="mb-4 text-lg font-semibold">Deployment Pipeline</h2>
      <GTimeline>
        <GTimelineItem state="completed">
          <p class="font-medium">Build</p>
          <p class="text-sm text-gray-500">Compiled successfully</p>
        </GTimelineItem>

        <GTimelineItem state="active">
          <p class="font-medium">Test</p>
          <p class="text-sm text-gray-500">Running 24 specs...</p>
        </GTimelineItem>

        <GTimelineItem state="pending">
          <p class="font-medium">Deploy</p>
          <p class="text-sm text-gray-500">Waiting...</p>
        </GTimelineItem>
      </GTimeline>
    </section>
  </div>
</template>
