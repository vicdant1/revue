<script setup>

import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue';
import User from './components/User.vue'
</script>

<template>
  <Navbar v-once/>
    <Header></Header>

  <main>
    <User/>
    resume
    https://www.youtube.com/watch?v=FUcf5frR5J4&list=PLxd1RHU8YgYlF3Wk8-SW7UEowbqhBXtkp&index=11&ab_channel=PabloCodes
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
