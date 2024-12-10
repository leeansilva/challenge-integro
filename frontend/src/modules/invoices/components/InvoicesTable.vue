<template>
    <SkeletonsTable v-if="facturaStore.loading" />
    
    <SearchBar
      v-else
      :items="invoices"
      itemType="facturas"
      class="q-mb-md"
      :actions="{ delete: false, edit: false, add: false }" 
    />
    <!-- <q-table
      v-else
      :rows="invoices"
      :columns="columns"
      row-key="nro_factura"
    >
    </q-table> -->
  </template>
  
  <script>
import { ref, onMounted, computed } from 'vue';
import { useFactura } from '../../../composables/useFactura';
import { useFacturaStore } from '../../../stores/facturaStore';
import SkeletonsTable from '../../../components/SkeletonsTable.vue';
import SearchBar from '../../../components/SearchBar.vue';
  
  export default {
    components: {
      SkeletonsTable,
      SearchBar
    },
    setup() {
      const { loadFacturas, deleteFactura } = useFactura();

      const facturaStore = useFacturaStore();
    
      const invoices = computed(() => facturaStore.facturas);
  
      const openModal = ref(false);
      const selectedInvoice = ref(null);

      onMounted(async () => {
        await loadFacturas();
      });
  
      const columns = [
        { name: 'id_cliente', label: 'ID cliente', field: 'id_cliente', align: 'left' },
        { name: 'nro_factura', label: 'N°', field: 'nro_factura', align: 'left' },
        { name: 'importe', label: 'Importe', field: 'importe', align: 'left' },
      ];
  
      const onDelete = async (invoice) => {
        try {
          await deleteFactura(invoice.id);
        } catch (error) {
          console.error("Error deleting invoice:", error);
        }
      };

      const closeModal = () => {
        openModal.value = false;
        selectedInvoice.value = null;
      };
  
      return {
        invoices,
        columns,
        onDelete,
        openModal,
        selectedInvoice,
        closeModal,
        facturaStore
      };
    }
  };
  </script>
  