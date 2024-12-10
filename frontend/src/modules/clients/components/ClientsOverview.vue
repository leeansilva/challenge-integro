<template>
    <div style="margin-bottom: 15px;">
    <Header @openForm="showForm = true" title="Gestión de clientes" buttonTitle="Agregar cliente" />
    <ClientsTable />
    <ClientForm v-if="showForm" :open="showForm" @close="showForm = false" :isEdit=false />
    </div>
</template>

<script setup>
import Header from '../../../components/Header.vue';
import ClientsTable from '../components/ClientsTable.vue';
import ClientForm from './ClientForm.vue';
import {ref} from 'vue'

const showForm = ref(false)
</script>
