<template>
  <section>
    <div class="container is-flex is-justify-content-flex-end">
    <!-- <div
      class="
        container
        is-flex is-justify-content-space-between is-align-items-center
      "
    >
      <h2 class="m-2 has-text-white">{{ usuario }}</h2> -->

      <b-button
        type="is-danger"
        size="is-small"
        class="m-2 rojo"
        @click="cerrarSesion()"
      >
        Cerrar Sesión
      </b-button>
    </div>
  </section>
</template>

<script>
export default {
  // data() {
  //   return { usuario: localStorage.getItem('usuario') }
  // },
  methods: {
    cerrarSesion() {
      localStorage.clear()
      this.$router.push('/')
    },
  },
  created() {
    // if (!localStorage.getItem(''))
    //   this.cerrarSesion()
  },
}
</script>

<style scoped>
section {
  background-color: #bb8704;
}

.rojo {
  background-color: #dc3545;
}
</style>
