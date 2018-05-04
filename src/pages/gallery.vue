<template>
  <q-page padding>
    <q-card v-for="album in albums"
      :key="album.id"
      inline
      style="max-width: 400px"
      class="q-ma-sm">
      <q-card-media class="cursor-pointer"
        overlay-position="bottom"
        @click.native="openURL(album.link)">
        <img :src="album.img">
        <q-card-title slot="overlay">
          {{ album.name }}
          <span slot="subtitle">{{ album.desc }}</span>
        </q-card-title>
      </q-card-media>
    </q-card>
  </q-page>
</template>

<script>
import { openURL } from 'quasar'

export default {
  // name: 'PageName',
  methods: {
    openURL
  },
  data: () => ({
    albums: [
      {
        name: 'Brasil',
        desc: 'Rio Grande do Sul',
        img: require('assets/albums/rs.jpg'),
        link: 'https://photos.app.goo.gl/VEyPE5sNytQAnLxJ3'
      },
      {
        name: 'Uruguai',
        desc: '',
        img: require('assets/albums/uruguai.jpg'),
        link: 'https://photos.app.goo.gl/2usGhXWPM3wV8BEh1'
      },
      {
        name: 'Argentina',
        desc: 'Entre Rios',
        img: require('assets/albums/entre-rios.jpg'),
        link: 'https://photos.app.goo.gl/hvm4Ddi8JfN1K9oa2'
      },
      {
        name: 'Argentina',
        desc: 'Santa Fé e Laguna Miramar',
        img: require('assets/albums/snt-fe.jpg'),
        link: 'https://photos.app.goo.gl/e0Ee62FGLjaVAHd53'
      },
      {
        name: 'Argentina',
        desc: 'Sierras Chicas de Cordoba',
        img: require('assets/albums/sierras-chicas.jpg'),
        link: 'https://photos.app.goo.gl/ib1TcnAuwt5wkDQj1'
      },
      {
        name: 'Argentina',
        desc: 'Los Gigantes e Los Tuneles',
        img: require('assets/albums/los-gigantes.jpg'),
        link: 'https://photos.app.goo.gl/ulJhCRtg7yLOMdqE2'
      },
      {
        name: 'Argentina',
        desc: 'San Luis',
        img: require('assets/albums/san-luis.jpg'),
        link: 'https://photos.app.goo.gl/vyKhBGIpazr7HDX43'
      },
      {
        name: 'Argentina',
        desc: 'Provincia Mendoza',
        img: require('assets/albums/mendoza.jpg'),
        link: 'https://photos.app.goo.gl/yRDItg28sKcZe5kB3'
      }
    ]
  })
}
</script>

<style>
</style>
