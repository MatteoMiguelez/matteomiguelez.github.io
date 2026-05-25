<script setup lang="ts">
import ProfessionalCareer from '@/home/components/career/ProfessionalCareer.vue';
import SchoolCareer from '@/home/components/career/SchoolCareer.vue';
</script>

<template>
  <div class="career">
    <ProfessionalCareer></ProfessionalCareer>
    <SchoolCareer></SchoolCareer>
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