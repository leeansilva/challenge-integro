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
    try {
      const response = await fetchFacturas();
      facturaStore.setFacturas(response);
      console.log(facturaStore.facturas, "seteando desde useFactura");
    } catch (error) {
      console.error("Failed to load facturas:", error);
    }
  };

  const addFactura = async (facturaData) => {
    try {
      const newFactura = await createFactura(facturaData);
      facturaStore.addFactura(newFactura);
    } catch (error) {
      console.error("Failed to add factura:", error);
    }
  };

  const updateFactura = async (id, updatedFacturaData) => {
    try {
      const updatedFactura = await serviceUpdateFactura(id, updatedFacturaData);
      facturaStore.updateFactura(id, updatedFactura);
    } catch (error) {
      console.error("Failed to update factura:", error);
    }
  };

  const deleteFactura = async (id) => {
    try {
      await serviceDeleteFactura(id);
      facturaStore.deleteFactura(id);
    } catch (error) {
      console.error("Failed to delete factura:", error);
    }
  };

  return {
    loadFacturas,
    addFactura,
    updateFactura,
    deleteFactura,
  };
}
