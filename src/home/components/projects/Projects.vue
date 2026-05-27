<script setup lang="ts">
import { Carousel } from 'primevue';
import TitleSeparator from '@/home/components/TitleSeparator.vue';
import { PROJECTS } from '@/home/constants/projects.ts';
import { ref } from 'vue';
import ProjectItem from '@/home/components/projects/ProjectItem.vue';

const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '768px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1
  }
]);
</script>

<template>
  <div>
    <div>
      <h2>Projets</h2>
      <TitleSeparator></TitleSeparator>
    </div>
    <Carousel :value="PROJECTS" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" circular>
      <template #item="slotProps">
        <ProjectItem :project="slotProps.data"></ProjectItem>
      </template>
    </Carousel>
  </div>
</template>

<style scoped lang="scss">

</style>