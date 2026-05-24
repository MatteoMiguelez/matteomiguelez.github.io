<script setup lang="ts">
import Projects from '@/home/components/projects/Projects.vue';
import Career from '@/home/components/career/Career.vue';
import Presentation from '@/home/components/presentation/Presentation.vue';
import Menu from '@/home/components/layout/Menu.vue';
import Contact from '@/home/components/contact/Contact.vue';
</script>

<template>
  <Menu></Menu>
  <div class="home">
    <div class="home__item">
      <Presentation id="presentation"></Presentation>
    </div>
    <div class="home__item home__item-background">
      <Projects id="projects"></Projects>
    </div>
    <div class="home__item">
      <Career id="career"></Career>
    </div>
    <div class="home__item home__item-background">
      <Contact></Contact>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  gap: 98px;
  padding-top: 64px;
  padding-bottom: 32px;

  #presentation, #projects, #career {
    scroll-margin-top: 100px;
  }

  &__item {
    padding: 64px 64px;
  }

  &__item-background {
    background-color: var(--p-surface-950);
  }

  @media (max-width: 768px) {
    padding-bottom: 128px;

    &__item {
      padding: 32px 32px;
    }
  }
}
</style>