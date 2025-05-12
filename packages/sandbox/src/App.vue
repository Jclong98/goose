<template>
  <nav>
    <span>Goose Playground</span>

    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
    </ul>
  </nav>
  <router-view></router-view>
</template>
