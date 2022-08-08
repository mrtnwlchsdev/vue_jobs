<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink :to="{name: 'about'}">About</RouterLink>
        <RouterLink :to="{name: 'jobs'}">Jobs</RouterLink>
      </nav>
    </div>
  </nav>

  <RouterView />
</template>

<style scoped>
  nav {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 30px;
    padding: 30px 0;
  }
  nav a {
    text-decoration: none;
    font-size: 3rem;
  }
</style>
