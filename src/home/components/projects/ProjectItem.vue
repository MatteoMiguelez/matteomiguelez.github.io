<script setup lang="ts">
import { Tag } from 'primevue';
import type { Project } from '@/home/types/project.ts';

defineProps<{ 'project': Project }>();
</script>

<template>
  <div class="project-item">
    <div class="project-item__header">
      <h3>{{ project.title }}</h3>
      <div class="project-item__technologies">
        <Tag v-for="item of project.technologies">{{ item }}</Tag>
      </div>
    </div>
    <div>{{ project.description }}</div>
  </div>
</template>

<style scoped lang="scss">
.project-item {
  margin: 0 8px;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid var(--p-primary-300);
  height: 100%;

  @media (max-width: 768px) {
    padding: 0;
  }

  h3 {
    margin: 0;
  }

  &__header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 8px;
  }

  &__technologies {
    display: flex;
    gap: 8px;
    height: fit-content;
  }
}
</style>