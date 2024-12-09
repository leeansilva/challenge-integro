import { defineStore } from "pinia";
import { ref } from "vue";

export const useFacturaStore = defineStore("factura", () => {
  const facturas = ref([]);

  const setFacturas = (newFacturas) => {
    facturas.value = newFacturas;
  };

  const addFactura = (newFactura) => {
    facturas.value.push(newFactura);
  };

  const updateFactura = (id, updatedFactura) => {
    const index = facturas.value.findIndex((factura) => factura.id === id);
    if (index !== -1) {
      facturas.value[index] = updatedFactura;
    }
  };

  const deleteFactura = (id) => {
    facturas.value = facturas.value.filter((factura) => factura.id !== id);
  };

  return {
    facturas,
    setFacturas,
    addFactura,
    updateFactura,
    deleteFactura,
  };
});
