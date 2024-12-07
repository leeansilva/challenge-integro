<template>
    <q-page>
      <q-card>
        <q-card-section>
          <div class="text-h6">Detalle del Cliente</div>
        </q-card-section>
        <q-card-section>
          <p><strong>ID:</strong> {{ id }}</p>
          <p><strong>Nombre:</strong> {{ client.name }}</p>
          <p><strong>DNI:</strong> {{ client.dni }}</p>
          <p><strong>Dirección:</strong> {{ client.address }}</p>
        </q-card-section>
      </q-card>
    </q-page>
  </template>
  
  <script>
  import { useRoute } from 'vue-router'
  import { useClientContext } from '../context/ClientContext'
  
  export default {
    setup() {
      const route = useRoute()
      const { clients } = useClientContext()
      const id = route.params.id
      const client = clients.find(client => client.dni === id)
  
      return { id, client }
    }
  }
  </script>
  