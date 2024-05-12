<script setup>
import ProjectItemView from "./ProjectItemView.vue";
import { getProjectBasicInfo } from "@/data/getProjectBasicInfo.js"

const projects = getProjectBasicInfo()
</script>

<template>
  <h2 class="text-center pt-5">Mes projets</h2>
  <div class="d-flex flex-wrap justify-content-around list pb-5">
    <ProjectItemView v-for="project in projects" :key="project.id" :project="project"></ProjectItemView>
  </div>
</template>

<style scoped>

</style>