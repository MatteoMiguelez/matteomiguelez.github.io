<script setup>
import HobieView from "@/components/Information/Hobie/HobieView.vue";
import { getHobbies } from "@/data/getHobies.js";

const hobbies = getHobbies();
</script>

<template>
  <h3 class="text-center pb-3 pt-5">Centres d'intérêts</h3>
  <div class="d-flex flex-wrap justify-content-around hobie-list">
    <HobieView v-for="hobie in hobbies" :hobie="hobie"></HobieView>
  </div>
</template>

<style scoped>

.hobie-list{
  padding-left:0;
  padding-right: 0;
}
@media (min-width: 450px){
  .hobie-list{
    padding-left:60px;
    padding-right: 60px;
  }
}
</style>