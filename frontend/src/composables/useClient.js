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
    try {
      const response = await fetchClients();
      clientStore.setClients(response);
      console.log(clientStore.clients, "seteando desde useClient")
    } catch (error) {
      console.error("Failed to load clients:", error);
    }
  };

  const addClient = async (clientData) => {
    try {
      const newClient = await createClient(clientData);
      clientStore.addClient(newClient);
    } catch (error) {
      console.error("Failed to add client:", error);
    }
  };

  const updateClient = async (id, updatedClientData) => {
    try {
      const updatedClient = await serviceUpdateClient(id, updatedClientData);
      clientStore.updateClient(id, updatedClient);
    } catch (error) {
      console.error("Failed to update client:", error);
    }
  };

  const deleteClient = async (id) => {
    try {
      await serviceDeleteClient(id);
      clientStore.deleteClient(id);
    } catch (error) {
      console.error("Failed to delete client:", error);
    }
  };

  return {
    loadClients,
    addClient,
    updateClient,
    deleteClient,
  };
}
