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
import { useClientStore } from '../stores/clientStore';
import { computed } from 'vue';
  
  export default {
    setup() {
      const route = useRoute();
      const clientStore = useClientStore();
      const clients = computed(() => clientStore.clients);
      const id = route.params.id
      const client = clients.value.find(client => client.id === id)
  
      return { id, client }
    }
  }
  </script>
  