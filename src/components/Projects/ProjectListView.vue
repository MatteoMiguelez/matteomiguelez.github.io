<script setup>
import ProjectItemView from "./ProjectItemView.vue";
import { getProjectBasicInfo } from "@/data/getProjectBasicInfo.js"

const projects = getProjectBasicInfo()
</script>

<template>
  <div class="d-flex flex-wrap justify-content-around list pb-5">
    <ProjectItemView v-for="project in projects" :key="project.id" :project="project"></ProjectItemView>
  </div>
</template>

<style scoped>

</style>