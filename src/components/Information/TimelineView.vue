<script setup>
import Timeline from "primevue/timeline";
import Card from "primevue/card";
import { getCareerInformation } from "@/data/getCareerInformation.js";

const careerInformation = getCareerInformation();
</script>

<template>
  <h2 class="text-center pt-5">Cursus personnel</h2>
  <Timeline :value="careerInformation" align="alternate" class="customized-timeline pt-5 pb-5">
    <template #marker="slotProps">
        <span class="d-flex align-items-center justify-content-center text-white z-1 shadow-1"
              style="height:65px; width:65px;border-radius:50%"
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