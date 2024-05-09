<script setup lang="ts">

import FooterView from "@/components/FooterView.vue";
import { RouterView } from 'vue-router'
import MenuView from "@/components/MenuView.vue";
</script>

<template>
  <MenuView></MenuView>
  <main class="p-0 m-0 px-5">
    <RouterView/>
  </main>
  <FooterView></FooterView>
</template>

<style scoped>
.list{
  padding-left:0;
  padding-right: 0;
}
@media (min-width: 450px){
  .list{
    padding-left: 55px;
    padding-right: 55px;
  }
}
</style>
