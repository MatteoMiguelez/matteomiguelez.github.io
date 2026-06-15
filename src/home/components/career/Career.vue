<script setup lang="ts">
import CareerSection from "@/home/components/career/CareerSection.vue";
import { SCHOOL_CAREER } from "@/home/constants/school-career.ts";
import { PROFESSIONAL_CAREER } from "@/home/constants/professional-career.ts";

const schoolCareer = SCHOOL_CAREER;
const professionalCareer = PROFESSIONAL_CAREER;
</script>

<template>
  <div class="career">
    <CareerSection
        :title="professionalCareer.title"
        :description="professionalCareer.description"
        :items="professionalCareer.items"
    />
    <CareerSection
        :title="schoolCareer.title"
        :description="schoolCareer.description"
        :items="schoolCareer.items"
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