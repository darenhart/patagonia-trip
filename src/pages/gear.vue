<template>
  <q-page class="q-pa-md">
    <h3>O Equipamento:</h3>
    <img class="imagem" alt="Gear" src="~assets/gear.jpg" style="max-width: 100%;">
    <h3>A Bicicleta:</h3>
    <q-card
      style="max-width: 400px"
      class="q-ma-sm">
      <q-card-media class="cursor-pointer"
        overlay-position="bottom"
        @click.native="openURL('https://photos.app.goo.gl/NX6eQnKPsxKpcNvW9')">
        <img src="~/assets/bike.jpg">
        <q-card-title slot="overlay">
          Ver fotos
          <span slot="subtitle"></span>
        </q-card-title>
      </q-card-media>
    </q-card>
    <h3>Os baldes-alforges:</h3>
    <div style="margin:1rem;">
      <iframe style="max-width: 500px;" height="170" src="https://www.youtube.com/embed/DzK4ufcDylo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
    <iframe width="100%" height="4000" src="https://lighterpack.com/r/fct9wm"></iframe>
    <p class="caption">
      Acesse o <a target="_blank" href="https://lighterpack.com/r/fct9wm">lighterpack</a>
    </p>
  </q-page>
</template>

<script>
import { openURL } from 'quasar'

export default {
  methods: {
    openURL
  }
}
</script>

<style>
.imagem
  width: 10px
</style>
