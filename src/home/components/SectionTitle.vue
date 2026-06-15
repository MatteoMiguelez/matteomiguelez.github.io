<script setup lang="ts">
defineProps<{'title' : string}>()
</script>

<template>
  <h2>{{ title }}</h2>
  <div class="section-title"></div>
</template>

<style scoped lang="scss">
.section-title {
  width: 40px;
  height: 4px;
  border-radius: 4px;
  background: var(--p-primary-400);
  margin: 8px 0 16px 0;
}
</style>