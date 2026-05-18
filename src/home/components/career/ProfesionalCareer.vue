<script setup lang="ts">
import { Timeline } from 'primevue';
import { Card } from 'primevue';
import { PROFESSIONAL_CAREER_LIST } from '@/home/constants/professional-career-list.ts';
import TitleSeparator from '@/home/components/TitleSeparator.vue';
</script>

<template>
  <div class="professional-career">
    <div class="professional-career__profesional-data">
      <h2> Parcours Professionel </h2>
      <TitleSeparator></TitleSeparator>
      <span> Au cours de mes études, je me suis progressivement inséré dans le monde professionnel : d'abord via un stage en deuxième année de BUT, puis en alternance pour ma troisième année. À l'issue de cette alternance, j'ai été embauché en CDI dans la même entreprise, ce qui m'a permis de poursuivre les projets déjà engagés tout en contribuant à de nouvelles missions.</span>
    </div>
    <Timeline :value="PROFESSIONAL_CAREER_LIST">
      <template #marker="slotProps">
        <span class="professional-career__marker" :class="{
          'professional-career__marker-active': slotProps.item.isActive,
        }"></span>
      </template>
      <template #content="slotProps">
        <Card>
          <template #title>
            <div class="professional-career__title">
              <span class="professional-career__dates">{{ slotProps.item.dates }}</span>
              <span>{{ slotProps.item.name }}</span>
            </div>
          </template>
          <template #subtitle>
            {{ slotProps.item.company }}
          </template>
          <template #content>
            {{ slotProps.item.description }}
          </template>
        </Card>
      </template>
    </Timeline>
  </div>
</template>

<style scoped lang="scss">
.professional-career {
  display: flex;
  gap: 98px;

  &__marker {
    background-color: var(--p-primary-100);
    border-radius:32px;
    width: 20px;
    height: 20px;
  }

  &__marker-active {
    background-color: var(--p-primary-400);
  }

  &__profesional-data {
    display: flex;
    flex-direction: column;
    max-width: 250px;
  }

  &__profesional-data-line {
    width: 20px;
  }

  &__title {
    display: flex;
    gap: 16px;
    align-items: center;
    flex-wrap: wrap;
  }

  &__dates {
    background: var(--p-primary-100);
    color: var(--p-primary-800);
    padding: 4px 12px;
    border-radius: 32px;
    font-size: 16px;
  }
}

:deep(.p-timeline-event-opposite) {
  display: none !important;
}

:deep(.p-timeline-event-content) {
  padding-bottom: 24px !important;
}
</style>