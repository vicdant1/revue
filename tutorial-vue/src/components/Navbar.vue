<template>
  <nav>
    <span>Tutorial Vue</span>
    <ul>
      <li v-for="element, i in elements" :key="i"><a href="#">{{ element }}</a></li>
    </ul>
  </nav>
</template>

<script setup>
const elements = [
  "Home",
  "Sobre",
  "Login"
]
</script>

<style lang="scss" scoped>

</style>