<template>
  <section>
    <div class="container d-flex justify-content-end">
      <b-button @click="cerrarSesion()" variant="danger" class="m-2"
        >Cerrar Sesión</b-button
      >
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    cerrarSesion() {
      this.$router.push('/')
    },
  },
}
</script>

<style scoped>
section {
  background-color: #bb8704;
}
</style>
