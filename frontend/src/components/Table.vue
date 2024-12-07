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
import { useClientContext } from '../context/ClientContext'

export default {
  setup() {
    const { clients, deleteClient } = useClientContext()

    // Definir la función onEdit
    const onEdit = (client) => {
      // Lógica para editar un cliente (puedes abrir un formulario o hacer cualquier acción)
      console.log('Edit client', client)
    }

    const columns = [
      { name: 'name', label: 'Nombre', field: 'name', align: 'left' },
      { name: 'dni', label: 'DNI', field: 'dni', align: 'left' },
      { name: 'address', label: 'Dirección', field: 'address', align: 'left' },
      { name: 'actions', label: 'Acciones', align: 'center' }
    ]

    const onDelete = (client) => {
      const index = clients.indexOf(client)
      if (index > -1) deleteClient(index)
    }

    return { clients, columns, onEdit, onDelete }
  }
}
</script>
