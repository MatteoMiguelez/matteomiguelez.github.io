<script setup>
import Timeline from "primevue/timeline";
import Card from "primevue/card"

import { ref } from "vue";

const steps = ref([
  {
    title: 'Développeur full-stack en alternance',
    date: 'Septembre 2023 - Maintenant',
    icon: 'briefcase',
    color: '#FF0B40',
    image: 'game-controller.jpg',
    description: 'Je suis actuellement développeur full-stack en Alternance chez Wimova France, à Villeurbanne.\n' +
        'Je développe en AngularJS pour la partie Frontend (majoritaire) et en Symfony pour la partie Backend.\n' +
        'La partie backend se base sur l\'architecture Domain-Driver Design (DDD) à laquelle j\'ai été formée par mes collègues.'
  },
  {
    title: 'Stage de 2ème année',
    date: 'Avril 2023 - Juin 2023',
    icon: 'calendar',
    color: '#673AB7',
    description: 'Stage à OKTEO Ceyzériat dans le cadre de ma deuxième année de BUT Informatique. Durant mon stage, ' +
        'j\'ai développé une interface de création de projet et de gestion des jours non travaillés pour des ' +
        'collaborateurs d\'une entreprise. J\'ai utilisé les frameworks VueJS pour le frontend, et SpringBoot pour ' +
        'le backend.'
  },
  {
    title: 'Préparation BUT Informatique - période académique',
    date: 'Septembre 2021 - Avril 2023',
    icon: 'book',
    color: '#FF9800',
    description: 'Cette période d\'un peu moins de deux ans s\'est déroulée à 100% en cours, elle m\'a permis de consolider mes compétences en ' +
        'développement, d\'apprendre de nouvelles choses et de développer dans de nouvelles technologies telles que ' +
        'C++, Java, JavaScript... J\'ai aussi pu apprendre à utiliser Git et la méthode agile pour travailler en équipe' +
        'dans un projet informatique.'
  },
  {
    title: 'Baccalauréat génaral',
    date: '2018 - 2021',
    icon: 'school',
    color: '#607D8B',
    description: 'J\'ai obtenu mon baccalauréat mention Bien au Lycée Xavier Bichat de Nantua, où j\'ai pu apprendre ' +
        'les bases du développement informatique avec la spécialité "Numériques et Sciences Informatique" ' +
        '(accompagnée de la spécialité "Mathématiques"). J\'ai en effet commencé le développement dès mon année de' +
        'terminale en Python, ce qui m\'a permi d\'avoir des bases solides à mon arrivée dans les études supérieures'
  }
]);
</script>

<template>
  <Timeline :value="steps" align="alternate" class="customized-timeline pt-5 pb-5">
    <template #marker="slotProps">
        <span class="d-flex align-items-center justify-content-center text-white z-1 shadow-1" style="height:65px; width:65px;border-radius:50%"
              :style="{ backgroundColor: slotProps.item.color }">
            <font-awesome-icon :icon="['fas', slotProps.item.icon]" style="height:32px"/>
        </span>
    </template>
    <template #content="slotProps">
      <Card class="mt-3">
        <template #title>
          <span style="font-weight:bold">{{ slotProps.item.title }}</span>
        </template>
        <template #subtitle>
          {{ slotProps.item.date }}
        </template>
        <template #content>
          <p>
            {{ slotProps.item.description }}
          </p>
        </template>
      </Card>
    </template>
  </Timeline>
</template>

<style scoped>
@media screen and (max-width: 960px) {
  ::v-deep(.customized-timeline) {
    .p-timeline-event:nth-child(even) {
      flex-direction: row;

      .p-timeline-event-content {
        text-align: left;
      }
    }

    .p-timeline-event-opposite {
      flex: 0;
    }
  }
}
</style>