<script lang="ts" setup>
import { GTimeline, GTimelineItem } from "./components/GTimeline2";
</script>

<template>
  <div class="flex h-screen items-center justify-center gap-16 p-8">
    <!-- Basic timeline -->
    <section>
      <h2 class="mb-4 text-lg font-semibold">Deployment Pipeline</h2>
      <GTimeline>
        <GTimelineItem state="completed">
          <template #icon>✓</template>
          <div>
            <p class="font-medium">Build</p>
            <p class="text-sm text-gray-500">Compiled successfully</p>
          </div>
        </GTimelineItem>

        <GTimelineItem state="active">
          <template #icon>⟳</template>
          <div>
            <p class="font-medium">Test</p>
            <p class="text-sm text-gray-500">Running 24 specs...</p>
          </div>
        </GTimelineItem>

        <GTimelineItem state="pending">
          <template #icon></template>
          <div>
            <p class="font-medium">Deploy</p>
            <p class="text-sm text-gray-500">Waiting...</p>
          </div>
        </GTimelineItem>
      </GTimeline>
    </section>

    <!-- Timeline with custom icons -->
    <section>
      <h2 class="mb-4 text-lg font-semibold">Order Status</h2>
      <GTimeline>
        <GTimelineItem state="completed">
          <template #icon>📦</template>
          <div>
            <p class="font-medium">Order Placed</p>
            <p class="text-sm text-gray-500">Apr 28, 2:30 PM</p>
          </div>
        </GTimelineItem>

        <GTimelineItem state="completed">
          <template #icon>🚚</template>
          <div>
            <p class="font-medium">Shipped</p>
            <p class="text-sm text-gray-500">Apr 29, 9:00 AM</p>
          </div>
        </GTimelineItem>

        <GTimelineItem state="active">
          <template #icon>📍</template>
          <div>
            <p class="font-medium">Out for Delivery</p>
            <p class="text-sm text-gray-500">ETA: 3:00 PM</p>
          </div>
        </GTimelineItem>

        <GTimelineItem state="pending">
          <template #icon></template>
          <div>
            <p class="font-medium">Delivered</p>
            <p class="text-sm text-gray-500">Pending</p>
          </div>
        </GTimelineItem>
      </GTimeline>
    </section>
  </div>
</template>
