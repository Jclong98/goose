<template>
  <GPopover class="card mt-1">
    <template #activator="{ binding }">
      <GButton v-bind="binding">🎯</GButton>
    </template>

    <template #default="{ selfAnchorName }">
      <GPopover class="card ml-1" :anchor="selfAnchorName" position-area="right">
        <template #activator="{ binding }">
          <GButton v-bind="binding">➡️</GButton>
        </template>

        <template #default="{ selfAnchorName }">
          <GPopover class="card mt-1" :anchor="selfAnchorName" position-area="bottom">
            <template #activator="{ binding }">
              <GButton v-bind="binding">⬇️</GButton>
            </template>

            <template #default="{ selfAnchorName }">
              <GPopover class="card ml-1" :anchor="selfAnchorName" position-area="right">
                <template #activator="{ binding }">
                  <GButton v-bind="binding">➡️</GButton>
                </template>

                <p>Yahaha! You found me! 🌳</p>
              </GPopover>
            </template>
          </GPopover>
        </template>
      </GPopover>
    </template>
  </GPopover>
</template>
