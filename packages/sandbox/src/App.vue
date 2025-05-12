<template>
  <nav class="flex justify-between p-4 border-b border-gray-500/50">
    <span class="text-xl font-semibold">Goose Playground</span>

    <ul class="flex gap-4">
      <li>
        <router-link active-class="underline" to="/">Home</router-link>
      </li>
      <li>
        <router-link active-class="underline" to="/about">About</router-link>
      </li>
    </ul>
  </nav>

  <main class="p-4">
    <router-view />
  </main>
</template>
