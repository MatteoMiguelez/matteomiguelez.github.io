<script setup lang="ts">

import type { TimeLineItem } from '@/home/types/time-line-item.ts';

defineProps<{ 'items': TimeLineItem[] }>();
</script>

<template>
  <div class="timeline">
    <div class="timeline__item" v-for="item of items">
      <div class="timeline__left">
        <div class="timeline__circle"
             :class="{ 'timeline__circle-last-element': item.isLastElement }"></div>
        <div class="timeline__line-container">
          <div class="timeline__line"></div>
        </div>
      </div>
      <div>
        <div class="timeline__dates">
          <span :class="{ 'timeline__dates-last-element': item.isLastElement }">{{ item.dates }}</span>
          <span v-if="item.inactiveDates"> | {{ item.inactiveDates }}</span>
        </div>
        <h3>{{ item.name }}</h3>
        <div class="timeline__place">{{ item.place }}</div>
        <div class="timeline__description">{{ item.description }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.timeline {
  display: flex;
  flex-direction: column;
  gap: 32px;

  &__item {
    display: grid;
    grid-template-columns: 20px 1fr;
    gap: 32px;
  }

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
    padding-top: 8px;
    color: #94a3b8;
    font-style: italic;
  }
}
</style>