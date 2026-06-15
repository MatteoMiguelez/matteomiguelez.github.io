<script setup lang="ts">
import SectionTitle from '@/home/components/SectionTitle.vue';
import TimeLine from '@/home/components/career/TimeLine.vue';
import { SCHOOL_CAREER_LIST } from '@/home/constants/school-career-list.ts';

</script>

<template>
  <div class="school-career">
    <div class="school-career__profesional-data">
      <SectionTitle title="Parcours Scolaire"></SectionTitle>
      <span class="school-career__description">Dès le lycée, je me suis orienté vers une option informatique en seconde, puis la spécialité Numérique et Sciences Informatiques en première et terminale.
      J'ai appris les bases du développement, que j'ai pu enrichir lors de mon Bachelor Universitaire et Technologique (BUT) Informatique.</span>
    </div>
    <TimeLine :items="SCHOOL_CAREER_LIST"></TimeLine>
  </div>
</template>

<style scoped lang="scss">
.school-career {
  display: flex;
  flex-wrap: wrap;
  gap: 98px;

  &__description {
    display: flex;
  }

  @media (max-width: 768px) {
    gap: 12px;

    &__description {
      display: none;
    }
  }

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
    max-width: 300px;
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