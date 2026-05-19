<script setup lang="ts">
import { ref } from 'vue';
import { Timeline } from 'primevue';
import { Card } from 'primevue';
import { PROFESSIONAL_CAREER_LIST } from '@/home/constants/professional-career-list.ts';
import TitleSeparator from '@/home/components/TitleSeparator.vue';
import ProfesionalCareer from '@/home/components/career/ProfesionalCareer.vue';
import SchoolCareer from '@/home/components/career/SchoolCareer.vue';

const items = ref(PROFESSIONAL_CAREER_LIST);
</script>

<template>
  <div class="career">
    <ProfesionalCareer></ProfesionalCareer>
    <SchoolCareer></SchoolCareer>
  </div>
</template>

<style scoped lang="scss">
.career {
  display: none;
  flex-direction: column;
  gap: 64px;
  padding: 0 64px;
}
</style>