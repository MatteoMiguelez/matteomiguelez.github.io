<script setup lang="ts">
import { Button } from 'primevue';
import SectionTitle from '@/home/components/SectionTitle.vue';
import Buttons from '@/home/components/contact/Buttons.vue';

const EMAIL_LINK = 'mailto:matteo.miguelez@gmail.com';
</script>

<template>
  <div class="contact-mobile">
    <SectionTitle title="Contact"></SectionTitle>
    <div class="contact-mobile__buttons">
      <Button as="a" :href="EMAIL_LINK" target="_blank" size="large" severity="secondary"
              class="contact-mobile__mail">
        <i class="pi pi-envelope"></i>
        <span>matteo.miguelez@gmail.com</span>
      </Button>
      <Buttons></Buttons>
    </div>
    <p class="contact-mobile__place">Villeurbanne-Lyon, France</p>
  </div>
</template>

<style scoped lang="scss">
.contact-mobile {
  display: flex;
  flex-direction: column;

  &__mail {
    display: flex;
    flex-direction: column;
    padding: 24px 32px !important;
    gap: 12px;

    i {
      font-size: var(--font-xl);
    }
  }

  &__buttons {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-top: 8px;
  }

  &__place {
    font-size: var(--font-sm);
    color: var(--p-primary-100);
    text-align: center;
  }

  a {
    text-decoration: none;
  }
}
</style>