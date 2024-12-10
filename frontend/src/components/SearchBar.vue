<template>
    <div>
      <q-input
        filled
        v-model="searchQuery"
        label="Buscar..."
        debounce="300"
        :dense="true"
        class="q-mb-md"
      />
    
      <q-table
        :rows="filteredItems"
        :columns="columns"
        row-key="id"
        :rows-per-page-options="[5, 10, 15]"
        :pagination="pagination"
      >
        <template v-slot:body-cell-actions="props">
          <td class="text-right">
            <q-btn 
            v-if="actions.delete" 
            flat 
            color="negative" 
            icon="delete" 
            @click="onDelete(props.row)" 
          />
          <q-btn 
            v-if="actions.edit" 
            flat 
            color="primary" 
            icon="edit" 
            @click="onEdit(props.row)" 
          />
          <q-btn 
            v-if="actions.add" 
            flat 
            color="primary" 
            icon="add" 
            @click="onAddInvoice(props.row)" 
          />
          </td>
        </template>
      </q-table>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      items: {
        type: Array,
        required: true,
      },
      itemType: {
        type: String,
        required: true,
      },
      actions: {
        type: Object,
        default: () => ({
          delete: false,
          edit: false,
          add: false,
        }),
      },
      onDelete: {
        type: Function,
        required: true,
      },
      onEdit: {
        type: Function,
        required: true,
      },
      onAddInvoice: {
        type: Function,
        required: true,
      },
    },
    data() {
      return {
        searchQuery: '',
        pagination: {
          page: 1,
          rowsPerPage: 10,
        },
      };
    },
    computed: {
      filteredItems() {
        const query = this.searchQuery.toLowerCase();
        return this.items.filter(item => {
          return Object.values(item).some(value =>
            String(value).toLowerCase().includes(query)
          );
        });
      },
      columns() {
        const baseColumns = [
          { name: 'id', label: 'ID', field: 'id' },
        ];
  
        if (this.itemType === 'clientes') {
          return [
            ...baseColumns,
            { name: 'nombre', label: 'Nombre', field: 'nombre' },
            { name: 'direccion', label: 'Dirección', field: 'direccion' },
            { name: 'dni', label: 'DNI', field: 'dni' },
            { name: 'condicion_iva', label: 'Condición IVA', field: 'condicion_iva' },
            ...(this.actions.delete || this.actions.edit || this.actions.add
              ? [{ name: 'actions', label: 'Acciones', field: 'acciones' }]
              : []),
          ];
        } else if (this.itemType === 'facturas') {
          return [
            ...baseColumns,
            { name: 'nro_factura', label: 'Número de Factura', field: 'nro_factura' },
            { name: 'importe', label: 'Importe', field: 'importe' },
          ];
        }
        return [];
      },
    },
  };
  </script>
  