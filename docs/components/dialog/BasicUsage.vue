<script setup lang="ts">
import { GButton, GDialog } from "@/components";
</script>

<template>
  <div>
    <GDialog>
      <template #activator="{ binding }">
        <GButton v-bind="binding">Open dialog</GButton>
      </template>

      <template #default="{ closeBinding }">
        <div class="card">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus saepe error
            laudantium consectetur aperiam illum architecto minus. Incidunt voluptatem ipsa aliquam
            ipsam pariatur vero eos voluptatibus iusto quis. Error, voluptas. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Mollitia perferendis asperiores minima nesciunt ipsum
            repudiandae? Tempore, ratione. Accusantium soluta tempore, ea earum nobis, nam vero,
            reprehenderit porro ducimus consequatur cupiditate.
          </p>

          <div>
            <GButton v-bind="closeBinding">close</GButton>
          </div>
        </div>
      </template>
    </GDialog>
  </div>
</template>
