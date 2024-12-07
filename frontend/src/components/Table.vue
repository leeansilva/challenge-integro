<template>
  <q-table
    :rows="clients"
    :columns="columns"
    row-key="dni"
    @row-click="onEdit"
  >
    <template v-slot:body-cell-actions="props">
      <q-btn flat color="negative" icon="delete" @click="onDelete(props.row)" />
    </template>
  </q-table>
</template>


<script>
import { useClientContextConsumer } from '../context/ClientContext'
import { onMounted } from 'vue'

export default {
  setup() {
    const { clients, loadClients, deleteClient } = useClientContextConsumer();

    onMounted(async () => {
      await loadClients();
      console.log(clients,"table.vue")
    });

    const onEdit = (client) => {
      console.log('Edit client', client)
    }

    const columns = [
      { name: 'name', label: 'Nombre', field: 'nombre', align: 'left' },
      { name: 'dni', label: 'DNI', field: 'dni', align: 'left' },
      { name: 'iva condition', label: 'Condición IVA', field: 'condicion_iva', align: 'left' },
      { name: 'address', label: 'Dirección', field: 'direccion', align: 'left' },
      { name: 'actions', label: 'Acciones', align: 'left' }
    ]

    const onDelete = async (client) => {
      try {
        await deleteClient(client.id)

        const index = clients.findIndex(item => item.id === client.id)
        if (index > -1) {
          clients.splice(index, 1)
        }
      } catch (error) {
        console.error('Error deleting client:', error)
      }
    }

    return { clients, columns, onEdit, onDelete }
  }
}

</script>
