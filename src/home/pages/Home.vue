<script setup lang="ts">
import Projects from '@/home/components/projects/Projects.vue';
import Career from '@/home/components/career/Career.vue';
import Presentation from '@/home/components/presentation/Presentation.vue';
import Menu from '@/home/components/menu/Menu.vue';
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
.test {
  background-color: var(--p-surface-950);
}

.home {
  display: flex;
  flex-direction: column;
  gap: 98px;
  padding: 64px 0;

  &__item {
    padding: 64px 64px;
  }

  &__item-background {
    background-color: var(--p-surface-950);
  }

  @media (max-width: 768px) {
    padding: 64px 0;

    &__item {
      padding: 32px 32px;
    }
  }
}
</style>