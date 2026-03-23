<script lang="ts" setup>
function onClick() {
  alert("This won't be called");
}

function onDisabledClick() {
  alert("Button is disabled");
}
</script>

<template>
  <GButton disabled @click="onClick" @click:disabled="onDisabledClick"> Disabled Button </GButton>
</template>
