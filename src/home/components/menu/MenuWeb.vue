<script setup lang="ts">
import type { MenuItem } from '@/home/types/menu-item.ts';

defineProps<{'items': MenuItem[] }>();
</script>

<template>
  <div class="menu">
    <div class="menu__name">MATTÉO MIGUELEZ</div>
    <div class="menu__items">
      <a v-for="item in items" :key="item.label" :href="item.url" class="menu__item">{{ item.label }}</a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 64px;
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #0b1326;
  border-bottom: 1px solid #121737;
  z-index: 5;
  box-sizing: border-box;

  &__name {
    display: flex;
    align-items: center;
    font-weight: 900;
    font-size: var(--font-lg);
    color: var(--p-primary-50);
    padding: 20px 0;
  }

  &__items {
    display: flex;
  }

  &__item {
    display: flex;
    align-items: center;
    padding: 20px;
    color: var(--p-primary-50);
    text-decoration: none;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }
}

@media (max-width: 768px) {
  .menu {
    padding: 0 24px;
    justify-content: center;

    &__items {
      display: none;
    }
  }
}
</style>