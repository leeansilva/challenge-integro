import { reactive, provide, inject } from 'vue'
import { fetchClients, createClient, updateClient, deleteClient } from '../services/clientService'

const ClientContextSymbol = Symbol('ClientContext')

export function provideClientContext() {
  const state = reactive({
    clients: [],

    async loadClients() {
      try {
        const newClients = await fetchClients(); 
        console.log(newClients, "new clients");  
        if (newClients && Array.isArray(newClients)) {

          state.clients.splice(0, state.clients.length, ...newClients); 
          console.log(state.clients, "updated clients"); 
        }
      } catch (error) {
        console.error("Failed to load clients", error);
      }
    },

    async addClient(clientData) {
      try {
        const newClient = await createClient(clientData)
        state.clients.push(newClient);
      } catch (error) {
        console.error("Failed to add client", error)
      }
    },

    async editClient(id, updatedClientData) {
      try {
        const updatedClient = await updateClient(id, updatedClientData)
        const index = state.clients.findIndex(client => client.id === id)
        if (index !== -1) {
          state.clients[index] = updatedClient; 
        }
      } catch (error) {
        console.error("Failed to update client", error)
      }
    },

    async deleteClient(id) {
      try {
        await deleteClient(id)
        state.clients = state.clients.filter(client => client.id !== id); // Usamos state
      } catch (error) {
        console.error("Failed to delete client", error)
      }
    }
  })

  provide('clientContext', state);
  return state;
}

export function useClientContextConsumer() {
  const context = inject('clientContext');
  if (!context) {
    throw new Error('No clientContext found');
  }
  return context;
}