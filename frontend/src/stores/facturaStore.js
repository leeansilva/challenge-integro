import { defineStore } from "pinia";
import { ref } from "vue";

export const useFacturaStore = defineStore("factura", () => {
  const facturas = ref([]);
  const loading = ref(false);
  const error = ref(null);

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

  const setLoading = (value) => {
    loading.value = value;
  };

  const setError = (errorMessage) => {
    error.value = errorMessage; // Asegúrate de que este cambio sea reactivo
  };

  return {
    facturas,
    loading,
    error,
    setFacturas,
    addFactura,
    updateFactura,
    deleteFactura,
    setLoading,
    setError,
  };
});
