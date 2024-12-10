<template>
    <q-dialog :model-value="open">
      <q-card style="width: 300px;">
        <q-card-section>
          <div class="text-h6">Agregar Factura</div>
        </q-card-section>
  
        <q-card-section>
          <q-input v-model="form.nro_factura" type="text" label="Número de Factura" />
          <q-input v-model="form.importe" type="number" label="Importe" />
        </q-card-section>
  
        <q-card-actions align="right">
          <q-btn flat label="Cancelar" @click="close" />
          <q-btn flat label="Guardar" @click="save" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </template>
  
  <script>
  import { reactive, watch } from "vue";
  import { useFactura } from "../../../composables/useFactura";
  
  export default {
    props: {
      open: Boolean,
      clientId: Number,
    },
    emits: ["close"],
    setup(props, { emit }) {
      const { addFactura } = useFactura();
  
      const form = reactive({
        id_cliente: props.clientId,
        nro_factura: "",
        importe: "",
      });
  
      watch(
        () => props.clientId,
        (newClientId) => {
          form.id_cliente = newClientId;
        },
        { immediate: true }
      );
  
      const save = async () => {
        if (!form.nro_factura || form.nro_factura.trim() === "") {
          alert("El número de factura es obligatorio");
          return;
        }
        if (!form.importe || isNaN(form.importe) || form.importe <= 0) {
          alert("El importe debe ser un valor numérico válido");
          return;
        }
  
        try {
          const formData = { ...form };
          console.log("Agregando factura:", formData);
          await addFactura(formData);
          close();
        } catch (error) {
          console.error("Error al agregar factura:", error);
        }
      };
  
      const close = () => emit("close");
  
      return { form, save, close };
    },
  };
  </script>
  