<template>
  <GPopover class="mt-1">
    <template #activator="{ binding }">
      <GButton v-bind="binding">
        <template #icon> 🎯 </template>
      </GButton>
    </template>

    <template #default="{ selfAnchorName }">
      <GCard class="rounded border p-2">
        <GPopover class="ml-1" :anchor="selfAnchorName" position-area="right">
          <template #activator="{ binding }">
            <GButton v-bind="binding">
              <template #icon> ➡️ </template>
            </GButton>
          </template>

          <template #default="{ selfAnchorName }">
            <GCard class="rounded border p-2">
              <GPopover class="mt-1" :anchor="selfAnchorName" position-area="bottom">
                <template #activator="{ binding }">
                  <GButton v-bind="binding">
                    <template #icon>⬇️</template>
                  </GButton>
                </template>

                <template #default="{ selfAnchorName }">
                  <GCard class="rounded border p-2">
                    <GPopover class="ml-1" :anchor="selfAnchorName" position-area="right">
                      <template #activator="{ binding }">
                        <GButton v-bind="binding">
                          <template #icon> ➡️ </template>
                        </GButton>
                      </template>

                      <GCard class="rounded border p-3">
                        <p>Yahaha! You found me! 🌳</p>
                      </GCard>
                    </GPopover>
                  </GCard>
                </template>
              </GPopover>
            </GCard>
          </template>
        </GPopover>
      </GCard>
    </template>
  </GPopover>
</template>
