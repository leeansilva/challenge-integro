<template>
  <SkeletonsTable v-if="clientStore.loading" />

  <SearchBar 
    v-else
    :items="clients"
    itemType="clientes"
    class="q-mb-md"
    :actions="{ delete: true, edit: true, add: true }" 
    :onDelete="onDelete"
    :onEdit="onEdit"
    :onAddInvoice="onAddInvoice"
  />

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
import { ref, onMounted, computed } from 'vue';

import ClientForm from './ClientForm.vue';  
import { useClientStore } from '../../../stores/clientStore';
import { useClient } from '../../../composables/useClient';
import InvoiceForm from '../../invoices/components/InvoiceForm.vue';
import SkeletonsTable from '../../../components/SkeletonsTable.vue';
import SearchBar from '../../../components/SearchBar.vue';

export default {
  components: {
    ClientForm,
    InvoiceForm,
    SkeletonsTable,
    SearchBar,
  },
  setup() {
    const { loadClients, deleteClient } = useClient();
    const clientStore = useClientStore();
    const clients = computed(() => clientStore.clients);

    const openModal = ref(false); 
    const openModalInvoice = ref(false); 
    const selectedClient = ref(null); 
    const isEdit = ref(false);

    onMounted(async () => {
      await loadClients();
    });

    const onEdit = (client) => {
      isEdit.value = true;
      selectedClient.value = clients.value?.find(c => c.id === client.id); 
      openModal.value = true; 
    };

    const onAddInvoice = (client) => {
      openModalInvoice.value = true;
      selectedClient.value = clients.value?.find(c => c.id === client.id); 
    };

    const onDelete = async (client) => {
      try {
        await deleteClient(client.id);
        const index = clients.value?.findIndex(item => item.id === client.id);
        if (index > -1) {
          clients.value.splice(index, 1);
        }
      } catch (error) {
        console.error('Error deleting client:', error);
      }
    };

    const closeModal = () => {
      openModal.value = false;
      selectedClient.value = null;
    };

    return { 
      clients, 
      onEdit, 
      onDelete, 
      openModal, 
      selectedClient, 
      openModalInvoice, 
      closeModal, 
      isEdit, 
      onAddInvoice,
      clientStore
    };
  },
};
</script>
