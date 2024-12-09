import { defineStore } from "pinia";
import { ref } from "vue";

export const useClientStore = defineStore("client", () => {
  const clients = ref([]);

  const setClients = (newClients) => {
    clients.value = newClients;
  };

  const addClient = (newClient) => {
    clients.value.push(newClient);
  };

  const updateClient = (id, updatedClient) => {
    const index = clients.value.findIndex((client) => client.id === id);
    if (index !== -1) {
      clients.value[index] = updatedClient;
    }
  };

  const deleteClient = (id) => {
    clients.value = clients.value.filter((client) => client.id !== id);
  };

  return {
    clients,
    setClients,
    addClient,
    updateClient,
    deleteClient,
  };
});
