<script setup lang="ts">

import FooterView from "@/components/FooterView.vue";
import { RouterView } from 'vue-router'
import MenuView from "@/components/MenuView.vue";
</script>

<template>
  <MenuView></MenuView>
  <main class="py-0 m-0 global-padding">
    <RouterView/>
  </main>
  <FooterView></FooterView>
</template>

<style scoped>
.list{
  padding-left:0;
  padding-right: 0;
}

.global-padding{
  padding-left: 20px !important;
  padding-right: 20px !important;
}
@media (min-width: 450px){
  .list{
    padding-left: 55px;
    padding-right: 55px;
  }

  .global-padding{
    padding-left: 80px !important;
    padding-right: 80px !important;
  }
}
</style>
