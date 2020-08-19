<template>
  <q-page padding>
    <a href="https://drive.google.com/open?id=1_JDlbahMjzcIFIkYdwVplNBTrXXGvek3&usp=sharing" target="_blank">
      <img width="100%" alt="Rota" src="~assets/rota.jpg">
    </a>
    <q-list no-border >
      <q-item>
        <q-item-side icon="directions bike" color="green">
        </q-item-side>
        <q-item-main label="6720 km Bicicleta" />
      </q-item>
      <q-item>
        <q-item-side icon="directions car" color="warning"/>
        <q-item-main label="2700 km Carona" />
      </q-item>
      <q-item>
        <q-item-side icon="directions bus" color="warning" />
        <q-item-main label="1150 km Bus" />
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>

<style>
</style>
