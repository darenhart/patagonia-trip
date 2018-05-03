<template>
  <q-page padding>
    <q-card-media>
      <img src="~assets/route.png">

      <!-- Notice the slot="overlay" -->
      <q-card-title slot="overlay">
        Title
        <span slot="subtitle">Subtitle</span>
      </q-card-title>
    </q-card-media>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>

<style>
</style>
