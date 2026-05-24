<script setup lang="ts">
import MenuMobile from '@/home/components/layout/MenuMobile.vue';
import type { MenuItem } from '@/home/types/menu-item.ts';

const copyrightYear = new Date().getFullYear();

defineProps<{'items': MenuItem[] }>();
</script>

<template>
  <div class="footer">
    <div class="footer__copyright">
      <span>© {{ copyrightYear }} Matteo Miguelez. Tous droits réservés.</span>
    </div>
    <MenuMobile :items="items"></MenuMobile>
  </div>
</template>

<style scoped lang="scss">
.footer {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  text-align: center;
  position: fixed;
  bottom: -1px;
  z-index: 10;
  border-top: 1px solid #121737;
  color: #94a3b8;
  background-color: var(--p-surface-950);

  &__copyright {
    padding: 24px;
  }
}
</style>