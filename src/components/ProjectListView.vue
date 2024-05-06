<script setup>

import ProjectItemView from "./ProjectItemView.vue";
import { getProjectBasicInfo } from "../data/getProjectBasicInfo.js"
import { onBeforeMount } from "vue";

let projects = []

onBeforeMount(() => {
  projects = getProjectBasicInfo()
})
</script>

<template>
  <ProjectItemView v-for="project in projects" :project="project"></ProjectItemView>
</template>

<style scoped>

</style>