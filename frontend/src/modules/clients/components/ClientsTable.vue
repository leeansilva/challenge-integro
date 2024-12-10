<template>
  <q-table
    :rows="clients"
    :columns="columns"
    row-key="dni"
  >
    <template v-slot:body-cell-actions="props">
      <q-btn flat color="negative" icon="delete" @click="onDelete(props.row)" />
      <q-btn flat color="primary" icon="edit" @click="onEdit(props.row)" />
      <q-btn flat color="primary" icon="add" @click="onAddInvoice(props.row)" />
    </template>
  </q-table>

  <ClientForm 
    :open="openModal" 
    :client="selectedClient || null" 
    @close="closeModal"
    :isEdit="isEdit"
  />
  <InvoiceForm 
    :open="openModalInvoice" 
    :clientId="selectedClient?.id" 
    @close="openModalInvoice = false" 
  />
</template>

<script>
import { ref, onMounted, computed } from 'vue'

import ClientForm from './ClientForm.vue'  
import { useClientStore } from '../../../stores/clientStore';
import { useClient } from '../../../composables/useClient';
import InvoiceForm from '../../invoices/components/InvoiceForm.vue';



export default {
  components: {
    ClientForm,
    InvoiceForm
  },
  setup() {
    const { loadClients, deleteClient } = useClient();
    const clientStore = useClientStore();
    const clients = computed(() => clientStore.clients);

    const openModal = ref(false); 
    const openModalInvoice = ref(false); 
    const selectedClient = ref(null); 
    const isEdit = ref(false);

    const columns = [
      { name: 'name', label: 'Nombre', field: 'nombre', align: 'left' },
      { name: 'dni', label: 'DNI', field: 'dni', align: 'left' },
      { name: 'iva condition', label: 'Condición IVA', field: 'condicion_iva', align: 'left' },
      { name: 'address', label: 'Dirección', field: 'direccion', align: 'left' },
      { name: 'actions', label: 'Acciones', align: 'left' }
    ];

    onMounted(async () => {
      await loadClients();
    });

    const onEdit = (client) => {
      isEdit.value=true
      selectedClient.value = clients.value?.find(c => c.id === client.id); 
      openModal.value = true; 
    };

    const onAddInvoice = (client) => {
      openModalInvoice.value = true;
      selectedClient.value = clients.value?.find(c => c.id === client.id); 
    }

    const onDelete = async (client) => {
      try {
        await deleteClient(client.id);
        const index = clients.value?.findIndex(item => item.id === client.id);
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

    return { clients, columns, onEdit, onDelete, openModal, selectedClient, openModalInvoice, closeModal, isEdit, onAddInvoice };
  }
}
</script>
