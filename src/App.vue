<script setup>
</script>

<template>
  <nav>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink :to="{name: 'About'}">About</RouterLink>
        <RouterLink :to="{name: 'Jobs'}">Jobs</RouterLink>
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
