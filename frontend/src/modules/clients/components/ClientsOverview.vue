<template>
    <div style="margin-bottom: 15px;">
    <Header @openForm="showForm = true" title="Gestión de clientes" />
    <ClientsTable />
    <ClientForm v-if="showForm" :open="showForm" @close="showForm = false" :isEdit=false />
    </div>
</template>

<script setup>
import Header from '../../../components/Header.vue';
import ClientsTable from '../components/ClientsTable.vue';
import ClientForm from './ClientForm.vue';
</script>
