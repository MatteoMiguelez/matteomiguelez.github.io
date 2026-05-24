<script setup lang="ts">
import ContactWeb from '@/home/components/contact/ContactWeb.vue';
import ContactMobile from '@/home/components/contact/ContactMobile.vue';
</script>

<template>
  <div id="contact">
    <ContactWeb class="contact__web"></ContactWeb>
    <ContactMobile class="contact__mobile"></ContactMobile>
  </div>
</template>

<style scoped lang="scss">
.contact {
  &__web {
    display: flex;
  }

  &__mobile {
    display: none;
  }

  @media (max-width: 1000px) {
    &__web {
      display: none;
    }

    &__mobile {
      display: flex;
    }
  }
}
</style>