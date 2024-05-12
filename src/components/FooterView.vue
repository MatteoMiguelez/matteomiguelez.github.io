<script setup>
const list = [
  {
    iconType: 'fas',
    icon: 'phone',
    text: '06 52 16 31 57',
    class: ''
  },
  {
    iconType: 'fas',
    icon: 'envelope',
    text: 'matteo.miguelez@gmail.com',
    class: ''
  }, {
    iconType: 'fab',
    icon: 'github',
    text: 'github.com/MatteoMiguelez',
    class: ''
  }, {
    iconType: 'fas',
    icon: 'location-dot',
    text: 'Villeurbanne, France',
    class: 'ps-1'
  }
]
</script>

<template>
  <footer style="background-color:#fffaec" class="pt-4 mt-5">
    <div class="d-flex footer-elements">
      <div>
        <h3 class="pb-2 text-center">Liens</h3>
        <div class="d-flex flex-column">
          <router-link to="/my-information" class="links pb-2">Informations</router-link>
          <router-link to="/project" class="links">Projets</router-link>
        </div>
      </div>
      <div>
        <h3 class="pb-2 text-center contact">Contact</h3>
        <div class="ps-3">
          <div class="pt-2 d-flex align-items-center" :class="element.class" v-for="element in list">
            <font-awesome-icon :icon="[element.iconType, element.icon]" style="height:22px"/>
            <span class="ps-2">{{element.text}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center mt-4">
      <div class="container" style="width: 75%; border-top: solid #000000 1px;">
        <div class="d-flex pt-3 justify-content-center align-items-center pb-3 flex-wrap">
          <span class="pe-2">Copyright</span>
          <font-awesome-icon :icon="['fas', 'copyright']" height="24px"/>
          <span class="ps-2 copyright-text">2024 - Mattéo Miguelez. Tous droits réservés</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-elements {
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .contact{
    padding-top: 20px;
  }
}

.copyright-text{
  text-align:center;
}

@media (min-width: 450px) {
  .footer-elements {
    justify-content: space-around;
    flex-direction: row;
    align-items: flex-start;

    .contact{
      padding-top: 0;
    }
  }

  .copyright-text{
    text-align:left;
  }
}

.links:hover {
  background-color: #fffaec;
}

.links {
  text-decoration: none;
  color: black;
}
</style>