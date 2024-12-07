<template>
    <main-layout>
      <Header @openForm="showForm = true" />
      <Table @editClient="editClient" />
      <ClientForm v-if="showForm" :open="showForm" @close="showForm = false" />
    </main-layout>
  </template>
  
  <script>
  import { provideClientContext } from '../context/ClientContext'
  
  export default {
    setup() {
      provideClientContext()
      const showForm = ref(false)
  
      return { showForm }
    }
  }
  </script>
  