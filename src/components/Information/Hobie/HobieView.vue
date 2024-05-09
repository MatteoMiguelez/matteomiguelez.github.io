<script setup>
import Card from "primevue/card";

const props = defineProps({
  hobie: Object,
});
</script>

<template>
  <Card style="width:300px" class="my-3">
    <template #header>
      <div class="text-center py-4">
        <font-awesome-icon :icon="['fas', hobie.icon]" style="height:50px"/>
      </div>
    </template>
    <template #title>
      <div class="text-center">
        {{ hobie.title }}
      </div>
    </template>
    <template #content>
      {{ hobie.description }}
    </template>
  </Card>
</template>

<style scoped>

</style>