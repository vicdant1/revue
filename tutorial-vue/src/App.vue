<script setup lang="ts">

import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue';
import Test from './components/Test.vue';
import User from './components/User.vue'
</script>

<template>
  <Navbar v-once/>
    <Header></Header>

  <main>
    <User/>
    <hr>
    <Test prop-a="if i can take you in the paradise up above"/>
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
