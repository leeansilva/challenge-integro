<template>
  <q-layout style="min-height: 60px;">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>{{ title }}</q-toolbar-title>
        <q-btn flat @click="$emit('openForm')" label="Agregar Cliente" icon="add" />
      </q-toolbar>
    </q-header>
  </q-layout>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  }
});
</script>
