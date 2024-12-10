import { useFacturaStore } from "../stores/facturaStore";
import {
  fetchFacturas,
  createFactura,
  updateFactura as serviceUpdateFactura,
  deleteFactura as serviceDeleteFactura,
} from "../services/facturaService";

export function useFactura() {
  const facturaStore = useFacturaStore();

  const loadFacturas = async () => {
    facturaStore.setLoading(true);
    facturaStore.setError(null);
    try {
      const response = await fetchFacturas();
      facturaStore.setFacturas(response);
    } catch (error) {
      facturaStore.setError("Error al cargar facturas");
    } finally {
      facturaStore.setLoading(false);
    }
  };

  const addFactura = async (facturaData) => {
    facturaStore.setLoading(true);
    facturaStore.setError(null);
    try {
      const newFactura = await createFactura(facturaData);
      facturaStore.addFactura(newFactura);
    } catch (error) {
      console.error("Failed to add factura:", error);

      if (error.response && error.response.data.errors) {
        const validationErrors = error.response.data.errors;
        let errorMessage = '';

        for (const field in validationErrors) {
          if (validationErrors[field].length > 0) {
            errorMessage += `${field}: ${validationErrors[field].join(", ")}\n`;
          }
        }

        facturaStore.setError(errorMessage.trim());
      } else {
        facturaStore.setError("Error al agregar la factura");
      }
    } finally {
      facturaStore.setLoading(false);
    }
  };

  const updateFactura = async (id, updatedFacturaData) => {
    facturaStore.setLoading(true);
    facturaStore.setError(null);
    try {
      const updatedFactura = await serviceUpdateFactura(id, updatedFacturaData);
      facturaStore.updateFactura(id, updatedFactura);
    } catch (error) {
      console.error("Failed to update factura:", error);
      facturaStore.setError("Error al actualizar la factura");
    } finally {
      facturaStore.setLoading(false);
    }
  };

  const deleteFactura = async (id) => {
    facturaStore.setLoading(true);
    facturaStore.setError(null);
    try {
      await serviceDeleteFactura(id);
      facturaStore.deleteFactura(id);
    } catch (error) {
      console.error("Failed to delete factura:", error);
      facturaStore.setError("Error al eliminar la factura");
    } finally {
      facturaStore.setLoading(false);
    }
  };

  return {
    loadFacturas,
    addFactura,
    updateFactura,
    deleteFactura,
  };
}
