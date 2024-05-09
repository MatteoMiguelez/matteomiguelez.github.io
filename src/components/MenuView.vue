<script setup>
import Button from "primevue/button";
</script>

<template>
  <header style="background-color:#6dd3c8">
    <div class="d-flex flex-wrap align-items-center menu">
      <h5 class="mt-2 menu-name">Mattéo Miguelez</h5>
      <nav class="d-flex menu-items">
        <router-link to="/my-information" active-class="active">
          <Button label="INFORMATIONS" link class="my-2" style="color:black"/>
        </router-link>
        <router-link to="/project-list" active-class="active">
          <Button label="PROJETS" link class="my-2" style="color:black"/>
        </router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.menu{
  justify-content: space-around;

  .menu-name{
    padding-top:15px;
  }
}
@media (min-width: 450px){
  .menu{
    justify-content: space-between;

    .menu-name{
      padding-top:0;
      padding-left: 100px;
    }

    .menu-items{
      padding-right: 100px;
    }
  }
}

.active{
  background-color: #67eccc;
}
</style>
