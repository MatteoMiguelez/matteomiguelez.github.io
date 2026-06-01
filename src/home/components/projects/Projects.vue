<script setup lang="ts">
import { Carousel } from 'primevue';
import TitleSeparator from '@/home/components/TitleSeparator.vue';
import { PROJECTS } from '@/home/constants/projects.ts';
import { computed, ref } from 'vue';
import ProjectItem from '@/home/components/projects/ProjectItem.vue';

const responsiveOptions = ref([
  {
    breakpoint: '1500px',
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: '1400px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '1100px',
    numVisible: 1,
    numScroll: 1,
  },
]);
const windowWidth = ref(window.innerWidth);
const orientation = computed(() => windowWidth.value <= 768 ? 'vertical' : 'horizontal');
</script>

<template>
  <div>
    <div>
      <h2>Projets</h2>
      <TitleSeparator></TitleSeparator>
    </div>
    <Carousel
        circular
        :value="PROJECTS"
        :numVisible="3"
        :numScroll="1"
        :orientation="orientation"
        :verticalViewPortHeight="orientation === 'vertical' ? '524px' : undefined"
        :responsiveOptions="responsiveOptions">
      <template #item="slotProps">
        <ProjectItem :project="slotProps.data"></ProjectItem>
      </template>
    </Carousel>
  </div>
</template>

<style scoped lang="scss">
:deep(.p-carousel-item) {
  display: flex;
  justify-content: center;
}

:deep(.button-padding) {
  padding: 24px !important;
}
</style>