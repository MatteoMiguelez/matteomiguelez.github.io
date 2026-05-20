<script setup lang="ts">
defineProps<{'icon': string, 'text' : string, 'label': string }>()
</script>

<template>
  <div class="info-item">
    <div class="info-item__icon">
      <i :class="icon"></i>
    </div>
    <div class="info-item__content">
      <span class="info-item__label">{{ label }}</span>
      <span class="info-item__text">{{ text }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.info-item {
  display: flex;
  gap: 16px;

  &__icon {
    padding: 16px;
    background-color: var(--p-surface-800);
    border: 1px solid var(--p-surface-800);
    border-radius: 4px;
    color: var(--p-primary-400);
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 4px 0;
  }

  &__label {
    font-size: var(--font-xs);
    color: var(--p-primary-100);
  }

  &__text {
    font-weight: 700;
  }
}
</style>