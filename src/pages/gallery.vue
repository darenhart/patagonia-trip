<template>
  <q-page class="flex flex-center" >
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
        desc: 'Neuquén, norte da Patagônia',
        img: require('assets/albums/neuquen.jpg'),
        link: 'https://photos.app.goo.gl/s9jRi59zQtJuw4Pk2'
      },
      {
        name: 'Argentina',
        desc: '7 lagos e Bariloche',
        img: require('assets/albums/lagos.jpg'),
        link: 'https://photos.app.goo.gl/XNWxm945LxK59tDk2'
      },
      {
        name: 'Argentina - Chile',
        desc: 'Parque dos Alerces e Carretera Austral',
        img: require('assets/albums/austral.jpg'),
        link: 'https://photos.app.goo.gl/owQ46KX4YtjemQ5h1'
      },
      {
        name: 'Chile',
        desc: 'Puerto Ibanez, Chile Chico',
        img: require('assets/albums/ibanez.jpg'),
        link: 'https://photos.app.goo.gl/DhfdlMOMBTTZL2Nk2'
      },
      {
        name: 'Argentina',
        desc: 'El Chalten, El Calafate',
        img: require('assets/albums/calafate.jpg'),
        link: 'https://photos.app.goo.gl/w77vzFAY2H2OdWDi1'
      },
      {
        name: 'Argentina',
        desc: 'Calafate à Rio Gallegos',
        img: require('assets/albums/gallegos.jpg'),
        link: 'https://photos.app.goo.gl/SZvpwr8bEe0e5LdA3'
      },
      {
        name: 'Argentina',
        desc: 'Costa da Argentina',
        img: require('assets/albums/valdes.jpg'),
        link: 'https://photos.app.goo.gl/u16aCzwvdAz0m4n92'
      },
      {
        name: 'Argentina - Uruguai',
        desc: 'Últimos dias',
        img: require('assets/albums/ultimos-dias.jpg'),
        link: 'https://photos.app.goo.gl/LTOfevRPdHvwQ7r92'
      },
      {
        name: 'Pós Retorno',
        desc: '',
        img: require('assets/albums/retorno.jpg'),
        link: 'https://photos.app.goo.gl/8LeRLeN4lfcuTGgG3'
      }
    ]
  })
}
</script>

<style>
</style>
