<script setup lang="ts">
import { ref } from 'vue'
import Header from '@/home/components/layout/Header.vue';
import Footer from '@/home/components/layout/Footer.vue';

const items = ref([
  { label: 'Accueil', icon: 'pi pi-home', url: '#presentation' },
  { label: 'Projets', icon: 'pi pi-code', url: '#projects' },
  { label: 'Parcours', icon: 'pi pi-briefcase', url: '#career' },
  { label: 'Contact', icon: 'pi pi-envelope', url: '#contact' },
])
</script>

<template>
  <Header :items="items"></Header>
  <Footer :items="items"></Footer>
</template>
