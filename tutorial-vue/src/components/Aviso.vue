<template>
  <div>
    Aviso: {{ aviso }}
  </div>
</template>

<script setup>
import { inject } from 'vue';

const aviso = inject("aviso")
</script>

<style lang="scss" scoped>

</style>