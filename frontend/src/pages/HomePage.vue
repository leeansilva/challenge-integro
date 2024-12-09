<template>
  <MainLayout>
    <ClientsOverview />

    <Header @openForm="showForm = false" title="Gestión de facturas" />
  </MainLayout>
</template>

<script setup>
import { ref } from 'vue';
import Header from '../components/Header.vue';
import ClientsOverview from '../modules/clients/components/ClientsOverview.vue';

const showForm = ref(false);

</script>
