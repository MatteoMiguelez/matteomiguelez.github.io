<script setup>
import { getProjectById } from "@/data/getProjectById.js";
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { getProjectTechnologiesText } from "@/data/getProjectTechnologiesText.js";

const route = useRoute();
const project = ref(null);

onMounted(() => {
  const fetchedProject = getProjectById(route.params.id);
  if (fetchedProject !== null) {
    project.value = fetchedProject;
  }
});
</script>

<template>
  <div v-if="project" class="w-100 py-5">
    <div class="d-flex flex-wrap justify-content-between">
      <div>
        <p style="font-size:25px" class="mb-0">
          <b>{{ project.name }}</b>
        </p>
        <p class="m-0 pt-2" style="font-size:20px">
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
    <p class="m-0 mt-3">
      Description: {{ project.description }}
    </p>
    <p class="mt-1">
      Contexte : {{ project.context }}
    </p>
    <p class="mt-1">
      Tâches : {{ project.tasks }}
    </p>
    <h6 class="text-center pt-2">Captures d'écrans du projet :</h6>
    <div class="d-flex flex-row flex-wrap justify-content-around pt-4">
      <div v-for="picture in project.pictures" :class="{ 'col-5': picture.width < 600 }" class="picture-element py-3 card mx-2 my-2">
        <div class="px-3 pb-3 d-flex justify-content-center">
          <img :src="'../../../' + picture.link" :alt="picture.alt"
               style="display: block; max-height:500px; max-width: 100%;" :style="{width: picture.width}"/>
        </div>
        <div class="px-4">{{ picture.information }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 450px) {
  .col-6 {
    width: 100%;
  }
  .px-4{
    padding-left: 10px !important;
    padding-right: 10px !important;
  }
}
</style>