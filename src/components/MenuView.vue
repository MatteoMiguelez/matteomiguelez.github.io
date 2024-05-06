<script setup>
import Button from "primevue/button";
</script>

<template>
  <nav class="d-flex">
      <router-link to="/my-information"><Button label="Mes Informations" link/></router-link>
      <router-link to="/project-list"><Button label="Liste de projets" link/></router-link>
  </nav>
</template>

<style scoped>
</style>
