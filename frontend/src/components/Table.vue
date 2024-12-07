<template>
  <q-table
    :rows="clients"
    :columns="columns"
    row-key="dni"
  >
    <template v-slot:body-cell-actions="props">
      <q-btn flat color="negative" icon="delete" @click="onDelete(props.row)" />
      <q-btn flat color="primary" icon="edit" @click="onEdit(props.row)" />
    </template>
  </q-table>

  <!-- Modal de cliente -->
  <ClientForm 
    :open="openModal" 
    :client="selectedClient || null" 
    @close="closeModal"
    :isEdit=true
  />
</template>

<script>
import { ref, onMounted } from 'vue'
import { useClientContextConsumer } from '../context/ClientContext'
import ClientForm from './ClientForm.vue'  

export default {
  components: {
    ClientForm
  },
  setup() {
    const { clients, loadClients, deleteClient } = useClientContextConsumer();
    const openModal = ref(false); 
    const selectedClient = ref(null); 

    onMounted(async () => {
      await loadClients();
    });

    const onEdit = (client) => {
      selectedClient.value = clients.find(c => c.id === client.id); 
      openModal.value = true; 
    };

    const columns = [
      { name: 'name', label: 'Nombre', field: 'nombre', align: 'left' },
      { name: 'dni', label: 'DNI', field: 'dni', align: 'left' },
      { name: 'iva condition', label: 'Condición IVA', field: 'condicion_iva', align: 'left' },
      { name: 'address', label: 'Dirección', field: 'direccion', align: 'left' },
      { name: 'actions', label: 'Acciones', align: 'left' }
    ];

    const onDelete = async (client) => {
      try {
        await deleteClient(client.id);
        const index = clients.findIndex(item => item.id === client.id);
        if (index > -1) {
          clients.splice(index, 1);
        }
      } catch (error) {
        console.error('Error deleting client:', error);
      }
    };

    const closeModal = () => {
      openModal.value = false;
      selectedClient.value = null;
    };

    return { clients, columns, onEdit, onDelete, openModal, selectedClient, closeModal };
  }
}
</script>
