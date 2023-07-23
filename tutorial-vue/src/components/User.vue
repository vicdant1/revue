<template>
  <div>
    <form>
      <label for="nome">Nome:</label><br/>
      <input type="text" id="nome" name="nome" v-model="person.nome">
      <label for="dataNascimento">data Nascimento:</label><br/>
      <input type="number" id="dataNascimento" name="dataNascimento" v-model="person.dataNascimento">
    </form>
  </div>

  {{ person.nome }} - {{ person.dataNascimento }}
</template>

<script setup>
import { reactive } from 'vue';

// import { ref } from 'vue';

// const nome = ref("codes")
// const dataNascimento = ref(0)

const person = reactive({
  nome: '',
  dataNascimento: 0,
  idade: 0
})
</script>

<style lang="scss" scoped>

</style>