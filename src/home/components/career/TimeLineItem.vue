<script setup lang="ts">

import type { TimeLineItem } from '@/home/types/time-line-item.ts';

defineProps<{ 'item': TimeLineItem }>();
</script>

<template>
  <div class="timeline-item">
    <div class="timeline-item__left">
      <div class="timeline-item__circle"
           :class="{ 'timeline-item__circle-last-element': item.isLastElement }"></div>
      <div class="timeline-item__line-container">
        <div class="timeline-item__line"></div>
      </div>
    </div>
    <div>
      <div class="timeline-item__dates">
        <span :class="{ 'timeline-item__dates-last-element': item.isLastElement }">{{ item.dates }}</span>
        <span v-if="item.inactiveDates"> | {{ item.inactiveDates }}</span>
      </div>
      <h3>{{ item.name }}</h3>
      <div class="timeline-item__place">{{ item.place }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.timeline-item {
  display: grid;
  grid-template-columns: 20px 1fr;
  gap: 32px;

  &__left {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #31394d;
  }

  &__line-container {
    display: flex;
    flex: 1;
    justify-content: center;
  }

  &__line {
    background-color: #31394d;
    width: 1px;
    height: 100%;
  }

  &__dates {
    color: #94a3b8;
  }

  &__circle-last-element {
    background-color: #818cf8;
  }

  &__dates-last-element {
    color: #818cf8;
  }

  &__place {
    color: #94a3b8;
  }

  &__description {
    color: #94a3b8;
    font-style: italic;
  }
}
</style>