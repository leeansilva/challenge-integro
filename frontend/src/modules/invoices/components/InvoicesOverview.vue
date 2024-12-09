<template>
    <Header @openForm="showForm = true" title="Gestión de facturas" />
    <InvoicesTable />
</template> 

<script setup>
import Header from '../../../components/Header.vue';
import InvoicesTable from './InvoicesTable.vue';


</script>