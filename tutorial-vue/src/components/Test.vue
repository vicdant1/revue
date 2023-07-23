<template>
  <div>
    life could be a dream: {{ propA }}

    <button @click="(e) => {
      console.log(e)
      counter++
      $emit('testemit', counter)}
      ">Emit event</button>

      <button @click="() => addCargo('')">add cargo</button>
  </div>
</template>

<script setup lang="ts">
import { useCargos } from '../stores/cargos';

const counter = 0;
const {propA} = defineProps({
  propA:{
    required: true,
    type: String
  }
})

const {addCargo} = useCargos()

defineEmits(['testemit'])
</script>

<style lang="scss" scoped>

</style>