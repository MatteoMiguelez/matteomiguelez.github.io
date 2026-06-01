<script setup lang="ts">
import { Tag } from 'primevue';
import type { Project } from '@/home/types/project.ts';

defineProps<{ 'project': Project }>();

function getImageName(project: Project) {
  return new URL(`../../../assets/imgs/${project.name}/cover.avif`, import.meta.url).href;
}
</script>

<template>
  <div class="project-item">
    <div class="project-item__illustration">
      <img :src="getImageName(project)" :alt="project.title">
    </div>
    <div class="project-item__content">
      <div class="project-item__header">
        <h3>{{ project.title }}</h3>
        <div class="project-item__technologies">
          <Tag v-for="item of project.technologies">{{ item }}</Tag>
        </div>
      </div>
      <div>{{ project.description }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.project-item {
  display: flex;
  flex-direction: column;
  margin: 0 16px;
  border-radius: 8px;
  border: 1px solid #323740;
  height: 100%;
  max-width: 450px;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0;
  }

  h3 {
    margin: 0;
  }

  &__illustration {
    display: flex;
    justify-content: center;
    height: 280px;

    img {
      max-height: 280px;
      max-width: 100%;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 16px 24px 20px 24px;
    height: 100%;
    background-color: var(--p-surface-800);
  }

  &__header {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 8px;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
    }
  }

  &__technologies {
    display: flex;
    gap: 8px;
    height: fit-content;
  }
}
</style>