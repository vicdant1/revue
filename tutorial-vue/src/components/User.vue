<template>
  <div>
    <form>
      <label for="nome">Nome:</label><br/>
      <input type="text" id="nome" name="nome" v-model="nome">
      <label for="dataNascimento">data Nascimento:</label><br/>
      <input type="number" id="dataNascimento" name="dataNascimento" v-model="dataNascimento">
    </form>
  </div>

  {{ nome }} - {{ dataNascimento }}
</template>

<script setup>
import { ref } from 'vue';

const nome = ref("codes")
const dataNascimento = ref(0)
</script>

<style lang="scss" scoped>

</style>