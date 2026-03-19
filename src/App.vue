<script setup lang="ts">
import GTimeline from "./components/GTimeline/GTimeline.vue";
import GTimelineItem from "./components/GTimeline/GTimelineItem.vue";
</script>

<template>
  <div>
    <GTimeline>
      <GTimelineItem state="completed">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga facilis sunt porro?
          Aspernatur quasi id vero vitae sapiente totam inventore ducimus, voluptatem, ea sed aut
          delectus porro velit laudantium officia?
        </p>
      </GTimelineItem>

      <GTimelineItem state="active">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga facilis sunt porro?
          Aspernatur quasi id vero vitae sapiente totam inventore ducimus, voluptatem, ea sed aut
          delectus porro velit laudantium officia?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga facilis sunt porro?
          Aspernatur quasi id vero vitae sapiente totam inventore ducimus, voluptatem, ea sed aut
          delectus porro velit laudantium officia?
        </p>
      </GTimelineItem>

      <GTimelineItem state="pending">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga facilis sunt porro?
          Aspernatur quasi id vero vitae sapiente totam inventore ducimus, voluptatem, ea sed aut
          delectus porro velit laudantium officia?
        </p>
      </GTimelineItem>
    </GTimeline>
  </div>
</template>
