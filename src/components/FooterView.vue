<script setup>

</script>

<template>
  <footer>
    <div class="d-flex justify-content-around">
      <div>
        <h3>Liens</h3>
        <p>Projets</p>
        <p>Mon parcours</p>
        <p>Informations</p>
      </div>
      <div>
        <h3>Contact</h3>
        <div>
          <font-awesome-icon :icon="['fas', 'phone']" style="height:22px"/>
          <span class="ps-2">06 52 16 31 57</span>
        </div>
        <div class="pt-2">
          <font-awesome-icon :icon="['fas', 'envelope']" style="height:22px"/>
          <span class="ps-2">matteo.miguelez@gmail.com</span>
        </div>
        <div class="pt-2">
          <font-awesome-icon :icon="['fab', 'github']" style="height:22px"/>
          <span class="ps-2">github.com/MatteoMiguelez</span>
        </div>
        <div class="pt-2">
          <font-awesome-icon :icon="['fas', 'location-dot']" style="height:22px"/>

          <span class="ps-2">Villeurbanne, France</span>
        </div>
      </div>
    </div>
    <div class="d-flex pt-3 justify-content-center">
      <font-awesome-icon :icon="['fas', 'copyright']" height="24px" />
      <span class="ps-2">Mattéo Miguelez. Tous droits réservés</span>
    </div>
  </footer>
</template>

<style scoped>
</style>