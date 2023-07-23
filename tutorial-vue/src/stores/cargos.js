import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCargos = defineStore("cargos", () => {
  // state
  const cargos = ref([]);

  // actions
  const addCargo = (funcionario) => {
    // cargos.value = cargos.value.filter((x) => x.id !== funcionario.id);
    cargos.value.push(funcionario);
    console.log(cargos.value);
  };

  // getters
  const totalCargos = computed(() => cargos.value.length);

  return {
    addCargo,
    totalCargos,
  };
});
