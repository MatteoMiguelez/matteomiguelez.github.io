<script setup lang="ts">
import { Button } from 'primevue';

const GITHUB_LINK = 'https://github.com/MatteoMiguelez';
const LINKEDIN_LINK = 'https://www.linkedin.com/in/mattéomiguelez/';
</script>

<template>
  <div class="buttons">
    <Button as="a" :href="GITHUB_LINK" icon="pi pi-github" target="_blank" label="Github" size="large"
            severity="secondary"></Button>
    <Button as="a" :href="LINKEDIN_LINK" icon="pi pi-linkedin" target="_blank" label="Linkedin" size="large"
            severity="secondary"></Button>
  </div>
</template>

<style scoped lang="scss">
.buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  padding: 8px 0;

  a {
    text-decoration: none;
    padding: 24px 32px !important;
    gap: 12px;
  }
}
</style>