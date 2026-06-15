<script setup lang="ts">
import SectionTitle from '@/home/components/SectionTitle.vue';
import TimeLine from '@/home/components/career/TimeLine.vue';
import type { TimeLineItem } from '@/home/types/time-line-item.ts';

defineProps<{
  title: string;
  description: string;
  items: TimeLineItem[];
}>();
</script>

<template>
  <div class="career-section">
    <div class="career-section__data">
      <SectionTitle :title="title" />
      <span class="career-section__description">{{ description }}</span>
    </div>
    <TimeLine :items="items" />
  </div>
</template>

<style scoped lang="scss">
.career-section {
  display: flex;
  gap: 98px;

  &__data {
    display: flex;
    flex-direction: column;
    max-width: 300px;
  }

  @media (max-width: 768px) {
    gap: 12px;

    &__description {
      display: none;
    }
  }

  @media (max-width: 1100px) {
    flex-wrap: wrap;

    &__data {
      max-width: unset;
    }
  }
}

:deep(.p-timeline-event-opposite) {
  display: none !important;
}

:deep(.p-timeline-event-content) {
  padding-bottom: 24px !important;
}
</style>