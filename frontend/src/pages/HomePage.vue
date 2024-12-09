<template>
  <MainLayout>
    <ClientsOverview />
    <InvoicesOverview />
  </MainLayout>
</template>

<script setup>
import { ref } from 'vue';
import Header from '../components/Header.vue';
import ClientsOverview from '../modules/clients/components/ClientsOverview.vue';
import InvoicesOverview from '../modules/invoices/components/InvoicesOverview.vue';

const showForm = ref(false);

</script>
