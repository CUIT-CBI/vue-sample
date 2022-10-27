<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="nav">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/contract">Contract</RouterLink>
    </nav>
  </div>

  <div class="body">
    <RouterView />
  </div>
</template>

<style scoped>
.body {
  display: flex;
  padding: 25px;
  justify-content: flex-start;
  align-items: flex-start;
}

.nav a.router-link-exact-active {
  color: var(--color-text);
}

.nav a.router-link-exact-active:hover {
  background-color: transparent;
}

.nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

.nav a:first-of-type {
  border: 0;
}

nav {
  text-align: left;
  margin-left: -1rem;
  font-size: 1rem;

  padding: 1rem 0;
  margin-top: 1rem;
}
</style>
