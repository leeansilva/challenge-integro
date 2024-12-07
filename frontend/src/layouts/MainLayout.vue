<script setup>
// Si necesitas importar algo, puedes hacerlo aquí.
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
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem; /* Márgenes amplios */
  background-color: #f9f9f9; /* Fondo claro */
}

.content-container {
  max-width: 1200px; /* Limitar el ancho del contenido */
  width: 100%;
  padding: 2rem; /* Relleno adicional para el contenido */
  background-color: white; /* Fondo blanco para el área de contenido */
  border-radius: 8px; /* Bordes redondeados */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra ligera */
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
