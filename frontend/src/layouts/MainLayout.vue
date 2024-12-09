<script>
export default {
  name: 'MainLayout'
};
</script>

<template>
  <div class="main-layout">
    <div class="content-container">
      <slot></slot> <!-- Aquí se renderizan los componentes hijos -->
    </div>
  </div>
</template>

<style scoped>
.main-layout {
  min-height: 97svh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0 2rem; /* Márgenes amplios */
}

.content-container {
  max-width: 1200px; 
  width: 100%;
  padding: 10px 2rem; 
  background-color: f9f9f9;
  border-radius: 8px; 

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media (max-width: 768px) {
  .main-layout {
    padding: 1rem; /* Menos margen en pantallas pequeñas */
  }

  .content-container {
    padding: 1rem; /* Menos relleno en pantallas pequeñas */
  }
}
</style>
