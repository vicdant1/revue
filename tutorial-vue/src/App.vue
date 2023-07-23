<script setup>

import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue';
import Test from './components/Test.vue';
import User from './components/User.vue'
import Aviso from './components/Aviso.vue'
import { provide, ref } from 'vue';
import { useCargos } from './stores/cargos';
import { storeToRefs } from 'pinia'

const aviso = ref("aviso")

provide("aviso", aviso)


const store = useCargos()
const {totalCargos} = storeToRefs(store);

</script>

<template>
  <Navbar v-once/>
    <Header></Header>

  <main>
    <User/>
    <hr>
    <Test prop-a="if i can take you in the paradise up above" @testemit="e => console.log(`evento passado: ${e}`)"/>
    <hr>

    <Aviso/>
    <input type="text" name="aviso" id="aviso" v-model="aviso">

    <hr>
    {{ totalCargos }}
  </main>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

header {
  line-height: 1.5;
}

</style>
