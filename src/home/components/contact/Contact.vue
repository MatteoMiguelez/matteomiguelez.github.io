<script setup lang="ts">
import { Button } from 'primevue';
import TitleSeparator from '@/home/components/TitleSeparator.vue';
import InfoItem from '@/home/components/contact/InfoItem.vue';

const GITHUB_LINK = 'https://github.com/MatteoMiguelez';
const LINKEDIN_LINK = 'https://www.linkedin.com/in/mattéomiguelez/';
</script>

<template>
  <div class="contact">
    <div class="contact__content">
      <div class="contact__left">
        <h2>Contact</h2>
        <TitleSeparator/>
        <div class="contact__description">N'hésitez pas à m'écrire pour un projet, une collaboration ou juste pour
          échanger.
        </div>
        <div class="contact__info-items">
          <InfoItem icon="pi pi-at" label="EMAIL" text="matteo.miguelez@gmail.com"></InfoItem>
          <InfoItem icon="pi pi-map-marker" label="LOCALISTATION" text="Villeurbanne-Lyon, France"></InfoItem>
        </div>
      </div>
      <div class="contact__find-me">
        <span class="contact__find-me-text">RETROUVEZ-MOI SUR</span>
        <div class="contact__buttons">
          <Button as="a" :href="GITHUB_LINK" icon="pi pi-github" target="_blank" label="Github" size="large"
                  severity="secondary" class="contact__button"></Button>
          <Button as="a" :href="LINKEDIN_LINK" icon="pi pi-linkedin" target="_blank" label="Linkedin" size="large"
                  severity="secondary" class="contact__button"></Button>
        </div>
        <div class="contact__respond-time">Je réponds généralement sous 24h via email ou LinkedIn.</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.contact {
  display: flex;
  justify-content: center;

  &__content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 96px;
    background-color: var(--p-surface-950);
    padding: 48px;
    border-radius: 24px;
    width: 100%;
    max-width: 1200px;
  }

  &__description {
    max-width: 450px;
  }

  &__title-separator {
    display: flex;
    justify-content: center;
  }

  &__button {
    padding: 24px 32px !important;
    width: 200px;
  }

  &__buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    padding: 16px 0;
  }

  &__info-items {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 32px;
  }

  &__respond-time {
    padding: 16px;
    border: 1px dashed var(--p-surface-800);
    border-radius: 16px;
    font-style: italic;
    max-width: 416px
  }

  &__find-me {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-top: 16px;
  }

  &__find-me-text {
    font-size: var(--font-sm);
    color: var(--p-primary-100);
  }

  a {
    text-decoration: none;
  }
}
</style>