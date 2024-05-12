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
  <div v-if="project" class="w-100 py-5 px-4">
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
    <div class="d-flex flex-row flex-wrap justify-content-around">
      <div v-for="number in project.pictureNumber">
        <img :src="'../../../' + project.picturePath + '/' + number + '.png'" alt="alt"
             style="display: block; max-height:500px"/></div>
    </div>
  </div>
</template>

<style scoped>

</style>