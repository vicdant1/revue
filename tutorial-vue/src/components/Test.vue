<template>
  <div>
    life could be a dream: {{ propA }}

    <button @click="(e) => {
      console.log(e)
      counter++
      $emit('testemit', counter)}
      ">Emit event</button>
  </div>
</template>

<script setup lang="ts">
const counter = 0;
const {propA} = defineProps({
  propA:{
    required: true,
    type: String
  }
})

defineEmits(['testemit'])
</script>

<style lang="scss" scoped>

</style>