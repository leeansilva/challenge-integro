import { useClientStore } from "../stores/clientStore";
import {
  fetchClients,
  createClient,
  updateClient as serviceUpdateClient,
  deleteClient as serviceDeleteClient,
} from "../services/clientService";

export function useClient() {
  const clientStore = useClientStore();

  const loadClients = async () => {
    clientStore.setLoading(true);
    clientStore.setError(null);
    try {
      const response = await fetchClients();
      clientStore.setClients(response);
    } catch (error) {
      console.error("Failed to load clients:", error);
      clientStore.setError("Error al cargar los clientes");
    } finally {
      clientStore.setLoading(false)
    }
  };

  const addClient = async (clientData) => {
    clientStore.setLoading(true);
    clientStore.setError(null);
    try {
      const newClient = await createClient(clientData);
      clientStore.addClient(newClient);
    } catch (error) {
      console.error("Failed to add client:", error);

      // Manejo de errores de validación
      if (error.response && error.response.data.errors) {
        const validationErrors = error.response.data.errors;
        let errorMessage = '';

        for (const field in validationErrors) {
          if (validationErrors[field].length > 0) {
            errorMessage += `${field}: ${validationErrors[field].join(", ")}\n`;
          }
        }

        clientStore.setError(errorMessage.trim());
      } else {
        clientStore.setError("Error al agregar el cliente");
      }
    } finally {
      clientStore.setLoading(false)
    }
  };

  const updateClient = async (id, updatedClientData) => {
    clientStore.setLoading(true);
    clientStore.setError(null);  // Limpiar errores antes de actualizar
    try {
      const updatedClient = await serviceUpdateClient(id, updatedClientData);
      clientStore.updateClient(id, updatedClient);
    } catch (error) {
      console.error("Failed to update client:", error);
      clientStore.setError("Error al actualizar el cliente");
    } finally {
      clientStore.setLoading(false)
    }
  };

  const deleteClient = async (id) => {
    clientStore.setLoading(true);
    clientStore.setError(null);  // Limpiar errores antes de eliminar
    try {
      await serviceDeleteClient(id);
      clientStore.deleteClient(id);
    } catch (error) {
      console.error("Failed to delete client:", error);
      clientStore.setError("Error al eliminar el cliente");
    } finally {
      clientStore.setLoading(false)
    }
  };

  return {
    loadClients,
    addClient,
    updateClient,
    deleteClient,
  };
}
