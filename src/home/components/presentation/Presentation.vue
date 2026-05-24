<script setup lang="ts">
import { Button } from 'primevue';
import { PRESENTATION_DESCRIPTION } from '@/home/constants/presentation-description.ts';

</script>

<template>
  <div class="presentation">
    <div class="presentation__text">
      <div class="presentation__title">
        <div>
          <h1>Mattéo Miguelez,</h1>
          <h1><span class="presentation__job">Développeur Full Stack</span>.</h1>
        </div>
        <span>{{ PRESENTATION_DESCRIPTION }}</span>
      </div>

      <div class="presentation__buttons">
        <Button as="a" href="#projects" label="Mes projets" size="large"></Button>
        <Button as="a" href="#career" label="Mon parcours" outlined size="large"></Button>
      </div>
    </div>
    <div class="presentation__illustration">
      <div class="presentation__image-container">
        <img src="/public/presentation-code.avif" alt="Code" height="350" class="presentation__img" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.presentation {
  display: flex;
  align-items: center;
  gap: 128px;

  &__illustration {
    padding-right: 16px;
  }

  &__image-container {
    position: relative;
    display: inline-block;
    height: 100%;

    @media (max-width: 1000px) {
      display: none;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -12px;
      right: -16px;
      width: 100%;
      height: 100%;
      border: 2px solid #121737;
      border-radius: 8px;
      z-index: -1;
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  &__img {
    border-radius: 8px;
    z-index: 2;
  }

  &__title {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__job {
    color: var(--p-primary-400);
  }

  &__buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }

  a {
    text-decoration: none;
  }
}
</style>