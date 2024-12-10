<template>
  <q-layout style="min-height: 60px;">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>{{ title }}</q-toolbar-title>
        <q-btn 
          v-if="buttonTitle" 
          flat 
          @click="$emit('openForm')" 
          :label="buttonTitle" 
          icon="add" 
        />
      </q-toolbar>
    </q-header>
  </q-layout>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  buttonTitle: {
    type: String,
  }
});
</script>
