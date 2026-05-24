<script setup lang="ts">
import type { MenuItem } from '@/home/types/menu-item.ts';

defineProps<{'items': MenuItem[] }>();
</script>

<template>
  <div class="menu-mobile">
    <a v-for="item in items" :key="item.label" :href="item.url" class="menu-mobile__item">
      <i :class="item.icon"></i>
      <span>{{ item.label }}</span>
    </a>
  </div>
</template>

<style scoped lang="scss">
.menu-mobile {
  display: none;
  width: 100%;
  z-index: 10;
  background-color: #0b1326;
  border-top: 1px solid #121737;

  @media (max-width: 768px) {
    display: flex;
  }

  &__item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    padding: 12px 0;
    color: var(--p-primary-50);
    text-decoration: none;
    font-size: var(--font-xs);
    transition: opacity 0.2s;

    i {
      font-size: 1.3rem;
    }

    &:hover {
      opacity: 0.7;
    }
  }
}
</style>