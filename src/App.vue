<script setup lang="ts">
import { GButton, GDialog, GPopover } from "./components";
</script>

<template>
  <div>
    <GDialog open closedby="close-request">
      <template #activator="{ binding }">
        <GButton v-bind="binding">Open dialog</GButton>
      </template>

      <template #default="{ closeBinding }">
        <div class="flex flex-col gap-4 rounded-xl bg-white p-4">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus saepe error
            laudantium consectetur aperiam illum architecto minus. Incidunt voluptatem ipsa aliquam
            ipsam pariatur vero eos voluptatibus iusto quis. Error, voluptas. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Mollitia perferendis asperiores minima nesciunt ipsum
            repudiandae? Tempore, ratione. Accusantium soluta tempore, ea earum nobis, nam vero,
            reprehenderit porro ducimus consequatur cupiditate.
          </p>

          <div>
            <GPopover position-area="right" class="ml-2 max-w-80">
              <template #activator="{ binding }">
                <GButton v-bind="binding">Open popover</GButton>
              </template>

              <template #default="{ closeBinding }">
                <div class="rounded-lg border border-gray-200 bg-white p-4">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cum corrupti
                    consequatur placeat, minus doloribus sunt provident vel officiis reprehenderit
                    odio? Doloremque nihil eos nostrum fugit similique, vel dolor quidem?
                  </p>

                  <GButton v-bind="closeBinding">Close</GButton>
                </div>
              </template>
            </GPopover>
          </div>

          <div>
            <GButton v-bind="closeBinding">close</GButton>
          </div>
        </div>
      </template>
    </GDialog>
  </div>
</template>
