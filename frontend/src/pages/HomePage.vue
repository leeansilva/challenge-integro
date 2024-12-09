<template>
  <MainLayout>
    <Header @openForm="showForm = true" title="Gestión de clientes" />
    <Table />
    <ClientForm v-if="showForm" :open="showForm" @close="showForm = false" :isEdit=false />

    <Header @openForm="showForm = false" title="Gestión de facturas" />
  </MainLayout>
</template>

<script setup>
import { ref } from 'vue';
import Header from '../components/Header.vue';

import ClientForm from '../modules/clients/components/ClientForm.vue';
import Table from '../modules/clients/components/Table.vue';



const showForm = ref(false);


</script>
