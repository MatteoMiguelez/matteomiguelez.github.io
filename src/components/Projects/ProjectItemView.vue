<script setup>
import Card from "primevue/card";
import Button from "primevue/button";
import { getProjectTechnologiesText } from "@/data/getProjectTechnologiesText.js";

const props = defineProps({
  project: Object,
});
</script>

<template>
  <Card style="max-width:600px;" class="mt-5">
    <template #header>
      <div class="text-center">
        <!-- Due to bug, cannot use :src -->
        <img v-if="project.id === 1" alt="picture" src="../../../public/sae-recommandation/1.png" class="p-2 picture"
             style="max-width:590px"/>
        <img v-else-if="project.id === 2" alt="picture" src="../../../public/blockudoku/1.png" class="py-2"
             style="height:250px"/>
        <img v-else-if="project.id === 3" alt="picture" src="../../../public/sae-back-office/1.png" class="p-2 picture"
             style="max-width:590px"/>
      </div>
    </template>
    <template #content>
      <div class="d-flex flex-wrap justify-content-between">
        <div>
          <p style="font-size:22px" class="mb-0">
            <b>{{ project.name }}</b>
          </p>
          <p class="m-0 pt-2" style="font-size:17px">
            {{ getProjectTechnologiesText(project.technologies) }}
          </p>
        </div>
        <div class="d-flex pe-2 align-self-center flex-row">
          <div style="font-size:22px" class="d-flex pe-1"><b>{{ project.numberOfPeople }}</b></div>
          <div>
            <font-awesome-icon v-if="project.numberOfPeople ===1" :icon="['fas', 'user']" style="height:25px"/>
            <font-awesome-icon v-else :icon="['fas', 'user-group']" style="height:25px"/>
          </div>
        </div>
      </div>
      <p class="m-0">
        Période : {{ project.dates }}
      </p>
      <p class="mt-2">
        Description: {{ project.description }}
      </p>
    </template>
    <template #footer>
      <div class="d-flex justify-content-end">
        <router-link :to="{ name: 'Info', params: { id: project.id } }">
          <Button label="Plus d'informations" severity="secondary" class="w-full" link rounded/>
        </router-link>
      </div>
    </template>
  </Card>
</template>

<style scoped>
.picture {
  width: 300px;
}

@media (min-width: 800px) {
  .picture {
    width: 590px;
  }
}
</style>