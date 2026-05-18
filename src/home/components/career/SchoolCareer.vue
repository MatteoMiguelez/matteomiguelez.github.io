<script setup lang="ts">
import { Timeline } from 'primevue';
import { Card } from 'primevue';
import { SCHOOL_CAREER_LIST } from '@/home/constants/school-career-list.ts';
import TitleSeparator from '@/home/components/TitleSeparator.vue';

</script>

<template>
  <div class="school-career">
    <div class="school-career__profesional-data">
      <h2> Parcours Scolaire </h2>
      <TitleSeparator></TitleSeparator>
      <span>Dès le lycée, je me suis orienté vers une option informatique en seconde, puis la spécialité Numérique et Scienses Informatiques en première et terminale.
      J'ai appris les bases du développement, que j'ai pu enrichir lors de mon Bachelor Universitaire et Technologique (BUT) Informatique.</span>
    </div>
    <Timeline :value="SCHOOL_CAREER_LIST">
      <template #marker="slotProps">
        <span class="school-career__marker" :class="{
          'school-career__marker-active': slotProps.item.isLastDegree,
        }"></span>
      </template>
      <template #content="slotProps">
        <Card>
          <template #title>
            <div class="school-career__title">
              <span class="school-career__dates">{{ slotProps.item.dates }}</span>
              <span>{{ slotProps.item.name }}</span>
            </div>
          </template>
          <template #subtitle>
            {{ slotProps.item.place }}
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
.school-career {
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