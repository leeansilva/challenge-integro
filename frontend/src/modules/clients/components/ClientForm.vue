<template>
  <q-dialog :model-value="open">
    <q-card style="width: 300px;">
      <q-card-section>
        <div class="text-h6">{{ isEdit ? 'Editar Cliente' : 'Agregar Cliente' }}</div>
      </q-card-section>

      <q-card-section>
        <q-input v-model="form.nombre" label="Nombre" />
        <q-input v-model="form.dni" label="DNI" />
        
        <q-select
          v-model="form.condicion_iva"
          :options="condicionIvaOptions"
          label="Condición IVA"
          emit-value
          map-options
        />
        
        <q-input v-model="form.direccion" label="Dirección" />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Cancelar" @click="close" />
        <q-btn flat label="Guardar" @click="save" :loading="clientStore.loading" :disable="clientStore.loading" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { watch, reactive } from 'vue';
import { useClient } from '../../../composables/useClient';
import { Notify } from "quasar";
import { useClientStore } from '../../../stores/clientStore';

export default {
  props: {
    open: Boolean,
    client: Object,
    isEdit: Boolean,
  },
  emits: ['close'],
  setup(props, { emit }) {
    const { addClient, updateClient } = useClient();
    const clientStore = useClientStore();

    const form = reactive({
      id: '',
      nombre: '',
      dni: '',
      condicion_iva: '',
      direccion: ''
    });

    const condicionIvaOptions = ['A', 'B', 'C'];
    
    watch(() => props.client, (newClient) => {
      if (newClient && newClient.id) { 
        form.id = newClient.id || ''; 
        form.nombre = newClient.nombre || '';
        form.dni = newClient.dni || '';
        form.condicion_iva = newClient.condicion_iva || '';
        form.direccion = newClient.direccion || '';
      }
    }, { immediate: true });

    const showNotification = (message, type = "negative") => {
      Notify.create({
        message,
        color: type,
        position: "top",
      });
    };

    const save = async () => {
      if (form) {
        const formData = { ...form };

        try {
          if (props.isEdit) {
            console.log('Editando cliente:', formData); 
            await updateClient(form.id, formData); 
          } else {
            console.log('Agregando cliente nuevo:', formData);
            await addClient(formData);
          }

          if (!clientStore.error) {
            showNotification("Cliente guardado correctamente", "positive");
            close();  
          } else {
            showNotification(clientStore.error, "negative");
          }
        } catch (error) {
          showNotification("Ocurrió un error al guardar el cliente", "negative");
        }
      }
    };

    const close = () => emit('close'); 

    return { form, save, close, condicionIvaOptions, clientStore };
  }
}
</script>
