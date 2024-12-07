// src/context/ClientContext.js
import { reactive, provide, inject } from 'vue'

const ClientContextSymbol = Symbol('ClientContext')

export function provideClientContext() {
  const state = reactive({
    clients: [],
    addClient(client) {
      state.clients.push(client)
    },
    editClient(index, updatedClient) {
      state.clients[index] = updatedClient
    },
    deleteClient(index) {
      state.clients.splice(index, 1)
    }
  })

  provide(ClientContextSymbol, state)
}

export function useClientContext() {
  const context = inject(ClientContextSymbol)
  if (!context) {
    throw new Error('useClientContext must be used within a provideClientContext.')
  }
  return context
}
