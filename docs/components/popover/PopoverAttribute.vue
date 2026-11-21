<script lang="ts" setup></script>

<template>
  <div class="flex flex-wrap gap-2">
    <GPopover class="mt-1 max-w-64" popover="auto">
      <template #activator="{ binding }">
        <GButton v-bind="binding">Auto (default)</GButton>
      </template>

      <GCard class="rounded border p-4">
        <p>
          Auto is the default popover behavior. It can be closed by clicking outside the popover or
          pressing the escape key. It will also close when another popover is opened.
        </p>
      </GCard>
    </GPopover>

    <GPopover class="mt-1 max-w-84" popover="manual" popovertargetaction="show">
      <template #activator="{ binding }">
        <GButton v-bind="binding">Manual</GButton>
      </template>

      <template #default="{ closeBinding }">
        <GCard class="rounded border p-4">
          <p>
            Manual popovers can only be closed by clicking the close button or its activator if it
            has
            <GCard class="inline-flex rounded border px-1" variant="surface-2"
              ><code>popovertargetaction="close"</code></GCard
            >
          </p>
          <GButton v-bind="closeBinding" class="mt-2" autofocus> Close </GButton>
        </GCard>
      </template>
    </GPopover>

    <GPopover class="mt-1 max-w-64" popover="manual" popovertargetaction="show">
      <template #activator="{ binding }">
        <GButton v-bind="binding">Manual 2</GButton>
      </template>

      <template #default="{ closeBinding }">
        <GCard class="rounded border p-4">
          <p>Multiple manual popovers can be opened simultaneously.</p>
          <GButton v-bind="closeBinding" class="mt-2" autofocus> Close </GButton>
        </GCard>
      </template>
    </GPopover>

    <GPopover class="mt-1 max-w-64" popover="hint">
      <template #activator="{ binding }">
        <GButton v-bind="binding">Hint</GButton>
      </template>

      <GCard class="rounded border p-4">
        <p>
          hint popovers do not close auto popovers when they are displayed, but will close other
          hint popovers. They can be light dismissed and will respond to close requests.
        </p>
      </GCard>
    </GPopover>
  </div>
</template>
