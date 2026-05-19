<script setup lang="ts">
import { ref } from 'vue'
import MenuWeb from '@/home/components/menu/MenuWeb.vue';
import MenuMobile from '@/home/components/menu/MenuMobile.vue';

const items = ref([
  { label: 'Accueil', icon: 'pi pi-home', url: '#presentation' },
  { label: 'Parcours', icon: 'pi pi-briefcase', url: '#career' },
  { label: 'Projets', icon: 'pi pi-code', url: '#projects' },
  { label: 'Contact', icon: 'pi pi-envelope', url: '#contact' },
])
</script>

<template>
  <MenuWeb :items="items"></MenuWeb>
  <MenuMobile :items="items"></MenuMobile>
</template>
