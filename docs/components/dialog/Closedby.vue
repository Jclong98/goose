<script lang="ts" setup></script>

<template>
  <div class="flex gap-2">
    <!-- none -->
    <GDialog closedby="none">
      <template #activator="{ binding }">
        <GButton v-bind="binding">none</GButton>
      </template>

      <template #default="{ cancelBinding }">
        <div class="card">
          <p>This dialog can only be closed by clicking the close button or by using javascript.</p>

          <div>
            <GButton v-bind="cancelBinding">close</GButton>
          </div>
        </div>
      </template>
    </GDialog>

    <!-- close-request -->
    <GDialog closedby="close-request">
      <template #activator="{ binding }">
        <GButton v-bind="binding">close-request</GButton>
      </template>

      <template #default="{ cancelBinding }">
        <div class="card">
          <p>
            This dialog can be closed by clicking the close button, by using javascript, or by
            pressing escape/back on mobile.
          </p>

          <div>
            <GButton v-bind="cancelBinding">close</GButton>
          </div>
        </div>
      </template>
    </GDialog>

    <!-- any -->
    <GDialog closedby="any">
      <template #activator="{ binding }">
        <GButton v-bind="binding">any</GButton>
      </template>

      <template #default="{ cancelBinding }">
        <div class="card">
          <p>
            This dialog can be closed by clicking the close button, by using javascript, by pressing
            escape/back on mobile, or by clicking outside the dialog.
          </p>

          <div>
            <GButton v-bind="cancelBinding">close</GButton>
          </div>
        </div>
      </template>
    </GDialog>
  </div>
</template>
