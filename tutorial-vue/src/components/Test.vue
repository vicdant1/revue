<template>
  <div>
    life could be a dream: {{ propA }}
  </div>
</template>

<script setup lang="ts">
const {propA} = defineProps({
  propA:{
    required: true,
    type: String
  }
})
</script>

<style lang="scss" scoped>

</style>