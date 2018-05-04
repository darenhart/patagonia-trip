<template>
  <q-page class="flex flex-center">
    <q-card
      inline
      style="max-width: 400px"
      class="q-ma-sm">
      <q-card-media class="cursor-pointer"
        overlay-position="bottom"
        @click.native="openURL('https://photos.app.goo.gl/NX6eQnKPsxKpcNvW9')">
        <img src="~/assets/bike.jpg">
        <q-card-title slot="overlay">
          Bicicleta
          <span slot="subtitle"></span>
        </q-card-title>
      </q-card-media>
    </q-card>
    <img class="imagem" alt="Gear" src="~assets/gear.jpg" width="100%">
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
