<script>
import MainLayout from './layouts/MainLayout.vue';

export default {
  components: {
    MainLayout
  }
}

</script>

<template>
  <MainLayout>
    <router-view />
  </MainLayout>
</template>
