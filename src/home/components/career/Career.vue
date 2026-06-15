<script setup lang="ts">
import CareerSection from '@/home/components/career/CareerSection.vue';
import { SCHOOL_CAREER_LIST } from '@/home/constants/school-career-list.ts';
import { PROFESSIONAL_CAREER_LIST } from '@/home/constants/professional-career-list.ts';

</script>

<template>
  <div class="career">
    <CareerSection
        title="Parcours Professionnel"
        description="Au cours de mes études, je me suis progressivement inséré dans le monde professionnel : d'abord via un stage en deuxième année de BUT, puis en alternance pour ma troisième année. À l'issue de cette alternance, j'ai été embauché en CDI dans la même entreprise, ce qui m'a permis de poursuivre les projets déjà engagés tout en contribuant à de nouvelles missions."
        :items="PROFESSIONAL_CAREER_LIST"
    />
    <CareerSection
        title="Parcours Scolaire"
        description="Dès le lycée, je me suis orienté vers une option informatique en seconde, puis la spécialité Numérique et Sciences Informatiques en première et terminale.
      J'ai appris les bases du développement, que j'ai pu enrichir lors de mon Bachelor Universitaire et Technologique (BUT) Informatique."
        :items="SCHOOL_CAREER_LIST"
    />
  </div>
</template>

<style scoped lang="scss">
.career {
  display: flex;
  flex-direction: column;
  gap: 64px;
  padding: 0 64px;

  @media (max-width: 768px) {
    padding: 0;
  }
}
</style>