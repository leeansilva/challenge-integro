<script setup>
import Header from './components/Header.vue';
import Table from './components/Table.vue';
import ClientForm from './components/ClientForm.vue';
import MainLayout from './layouts/MainLayout.vue';
import { provideClientContext } from './context/ClientContext';

provideClientContext();
</script>

<template>
  <Header />

  <MainLayout>
    <router-view />
  </MainLayout>
</template>
