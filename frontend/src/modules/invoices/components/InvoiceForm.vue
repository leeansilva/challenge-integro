<template>
  <q-dialog :model-value="open" persistent>
    <q-card style="width: 300px;">
      <q-card-section>
        <div class="text-h6">Agregar Factura</div>
      </q-card-section>

      <q-card-section>
        <!-- Inputs -->
        <q-input v-model="form.nro_factura" type="text" label="Número de Factura" />
        <q-input v-model="form.importe" type="number" label="Importe" />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Cancelar" @click="close" />
        <q-btn
          flat
          label="Guardar"
          :loading="facturaStore.loading"
          :disable="facturaStore.loading"
          @click="save"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { computed, reactive, watch } from "vue";
import { useFactura } from "../../../composables/useFactura";
import { Notify } from "quasar";
import { useFacturaStore } from "../../../stores/facturaStore";

export default {
  props: {
    open: Boolean,
    clientId: Number,
  },
  emits: ["close"],
  setup(props, { emit }) {
    const { addFactura } = useFactura();
    const facturaStore = useFacturaStore();

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

    const showNotification = (message, type = "negative") => {
      Notify.create({
        message,
        color: type,
        position: "top",
      });
    };

    const save = async () => {
      await addFactura(form); 
      if (facturaStore.error !== null) {
        showNotification(facturaStore.error, "negative");
      } else {
        showNotification("Factura agregada correctamente", "positive");
        close();
      }
    };


    const close = () => emit("close");

    return { form, save, close, facturaStore };
  },
};
</script>
