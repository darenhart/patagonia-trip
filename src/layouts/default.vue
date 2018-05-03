<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Viagem de bicicleta à Patagônia
          <div slot="subtitle">Daniel Werle Arenhart</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>Menu</q-list-header>
        <!--
        <q-item to="/">
          <q-item-side icon="home" />
          <q-item-main label="Home" />
        </q-item>
        -->
        <q-item to="/">
          <q-item-side icon="timeline" />
          <q-item-main label="Rota" sublabel="" />
        </q-item>
        <q-item to="/gear">
          <q-item-side icon="settings" />
          <q-item-main label="Equipamento" sublabel="" />
        </q-item>
        <q-item to="/gallery">
          <q-item-side icon="photo library" />
          <q-item-main label="Galeria" sublabel="" />
        </q-item>
        <q-item to="/video">
          <q-item-side icon="play circle filled" />
          <q-item-main label="Vídeo" sublabel="" />
        </q-item>
        <q-item to="/log">
          <q-item-side icon="list" />
          <q-item-main label="Log diário" sublabel="" />
        </q-item>
        <!--
        <q-item @click.native="openURL('https://github.com/darenhart')">
          <q-item-side icon="phone" />
          <q-item-main label="Pagina externa" sublabel="github.com/darenhart" />
        </q-item>
        -->
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
