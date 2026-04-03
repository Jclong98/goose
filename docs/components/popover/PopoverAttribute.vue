<script lang="ts" setup></script>

<template>
  <div class="flex flex-wrap gap-2">
    <GPopover class="card mt-1 max-w-64" popover="auto">
      <template #activator="{ binding }">
        <GButton v-bind="binding">Auto (default)</GButton>
      </template>

      <p>
        Auto is the default popover behavior. It can be closed by clicking outside the popover or
        pressing the escape key. It will also close when another popover is opened.
      </p>
    </GPopover>

    <GPopover class="card mt-1 max-w-64" popover="manual" popovertargetaction="show">
      <template #activator="{ binding }">
        <GButton v-bind="binding">Manual</GButton>
      </template>

      <template #default="{ closeBinding }">
        <p>
          Manual popovers can only be closed by clicking the close button or its activator if it has
          <code>popovertargetaction="close"</code>.
        </p>

        <GButton v-bind="closeBinding" class="mt-2" autofocus> Close </GButton>
      </template>
    </GPopover>

    <GPopover class="card mt-1 max-w-64" popover="manual" popovertargetaction="show">
      <template #activator="{ binding }">
        <GButton v-bind="binding">Manual 2</GButton>
      </template>

      <template #default="{ closeBinding }">
        <p>Multiple manual popovers can be opened simultaneously.</p>

        <GButton v-bind="closeBinding" class="mt-2" autofocus> Close </GButton>
      </template>
    </GPopover>

    <GPopover class="card mt-1 max-w-64" popover="hint">
      <template #activator="{ binding }">
        <GButton v-bind="binding">Hint</GButton>
      </template>

      <p>
        hint popovers do not close auto popovers when they are displayed, but will close other hint
        popovers. They can be light dismissed and will respond to close requests.
      </p>
    </GPopover>
  </div>
</template>
