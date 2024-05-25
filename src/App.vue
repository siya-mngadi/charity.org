<template>
  <header class="shadow-sm bg-body rounded">
    <NavBar />
  </header>

  <div class="container main">
    <RouterView />
  </div>

  <FooterSection />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import FooterSection from "./components/FooterSection.vue";
import NavBar from "@/components/NavBar.vue";
</script>

<style scoped lang="scss">
.main {
  margin-top: 0.5rem;
  min-height: 50vh;
}
</style>
