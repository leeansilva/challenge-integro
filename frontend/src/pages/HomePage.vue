<template>
  <MainLayout>
    <Header @openForm="showForm = true" />
    <Table />
    <ClientForm v-if="showForm" :open="showForm" @close="showForm = false" :isEdit=false />
  </MainLayout>
</template>

<script setup>
import { ref } from 'vue';
import Header from '../components/Header.vue';
import Table from '../components/Table.vue';
import ClientForm from '../components/ClientForm.vue';
import MainLayout from '../layouts/MainLayout.vue';


const showForm = ref(false);


</script>
