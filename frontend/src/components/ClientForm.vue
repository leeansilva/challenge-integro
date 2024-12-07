<template>
  <q-dialog :model-value="open" @update:model-value="updateOpen">
    <q-card>
      <q-card-section>
        <div class="text-h6">{{ isEdit ? 'Editar Cliente' : 'Agregar Cliente' }}</div>
      </q-card-section>

      <q-card-section>
        <q-input v-model="form.name" label="Nombre" />
        <q-input v-model="form.dni" label="DNI" />
        <q-input v-model="form.address" label="Dirección" />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Cancelar" @click="close" />
        <q-btn flat label="Guardar" @click="save" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { useClientContext } from '../context/ClientContext'
import { ref } from 'vue'

export default {
  props: { open: Boolean, client: Object },
  setup(props, { emit }) {
    const { addClient, editClient } = useClientContext()
    const isEdit = !!props.client
    const form = ref({ ...props.client })

    const save = () => {
      if (isEdit) editClient(props.clientIndex, form.value)
      else addClient(form.value)
      close()
    }

    const close = () => emit('close')

    const updateOpen = (value) => {
      emit('update:open', value)
    }

    return { form, isEdit, save, close, updateOpen }
  }
}
</script>
