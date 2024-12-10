import { defineStore } from "pinia";
import { ref } from "vue";

export const useClientStore = defineStore("client", () => {
  const clients = ref([]);
  const loading = ref(false);
  const error = ref(null);

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

  const setLoading = (value) => {
    loading.value = value;
  };

  const setError = (errorMessage) => {
    error.value = errorMessage;
  };

  return {
    clients,
    loading,
    error,
    setClients,
    addClient,
    updateClient,
    deleteClient,
    setLoading,
    setError,
  };
});
