<script setup lang="ts">
import Contact from '@/home/components/contact/Contact.vue';
import Projects from '@/home/components/projects/Projects.vue';
import Career from '@/home/components/career/Career.vue';
import Presentation from '@/home/components/presentation/Presentation.vue';
import Menu from '@/home/components/menu/Menu.vue';
</script>

<template>
  <Menu></Menu>
  <div class="home">
    <Presentation id="presentation"></Presentation>
    <Career id="career"></Career>
    <Projects id="projects"></Projects>
    <Contact id="contact"></Contact>
  </div>
</template>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  gap: 64px;
  padding: 32px 64px;

  @media (max-width: 768px) {
    padding: 16px 32px;
  }
}
</style>