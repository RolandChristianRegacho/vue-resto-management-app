<script setup>
import HomePage from '@/components/HomePage.vue'
import HeaderPage from "@/components/HeaderPage.vue"
</script>

<template>
  <nav>
    <HeaderPage />
  </nav>
  <main>
    <HomePage />
  </main>
</template>

<style scoped>
  main {
    text-align: center;
  }
</style>