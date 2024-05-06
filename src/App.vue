<script setup lang="ts">
import ProjectListView from "@/components/ProjectListView.vue";
import MyInformationsView from "@/components/MyInformationsView.vue";
import FooterView from "@/components/FooterView.vue";
import {RouterView } from 'vue-router'
import MenuView from "@/components/MenuView.vue";
</script>

<template>
  <main>
    <MenuView></MenuView>
    <RouterView/>
    <FooterView></FooterView>
  </main>
</template>

<style scoped>
</style>
