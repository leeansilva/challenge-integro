<template>
    <q-table
      :rows="invoices"
      :columns="columns"
      row-key="nro_factura"
    >
      <template v-slot:body-cell-actions="props">
        <q-btn flat color="negative" icon="delete" @click="onDelete(props.row)" />
      </template>
    </q-table>
  </template>
  
  <script>
import { ref, onMounted, computed } from 'vue';
import { useFactura } from '../../../composables/useFactura';
import { useFacturaStore } from '../../../stores/facturaStore';
  
  export default {
    components: {},
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
        closeModal
      };
    }
  };
  </script>
  