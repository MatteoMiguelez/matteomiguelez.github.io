<script setup lang="ts">

</script>

<template>
  <div class="menu">
    <div class="menu__name">
      MATTÉO MIGUELEZ
    </div>
    <div class="menu__items">
      <a class="menu__item" href="#presentation">
        Accueil
      </a>
      <a class="menu__item" href="#career">
        Parcours
      </a>
      <a class="menu__item" href="#projects">
        Projets
      </a>
      <a class="menu__item" href="#contact">
        Contact
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.menu {
  display: flex;
  justify-content: space-between;
  padding: 0 64px;
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #0b1326;
  border-bottom: 1px solid #121737;
  z-index: 5;

  &__name {
    display: flex;
    align-items: center;
    font-weight: 900;
    font-size: var(--font-lg);
    color: var(--p-primary-50);
  }

  &__items {
    display: flex;
  }

  &__item {
    display: flex;
    align-items: center;
    padding: 20px;
    color: var(--p-primary-50);
    text-decoration: none;
  }
}
</style>