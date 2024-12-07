<script>
import { provideClientContext } from './context/ClientContext';
import MainLayout from './layouts/MainLayout.vue';

export default {
  components: {
    MainLayout
  },
  setup() {
    provideClientContext();
  }
}

</script>

<template>
  <MainLayout>
    <router-view />
  </MainLayout>
</template>
