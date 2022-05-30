<template>
  <footer class="footer pt-5 pb-5">
    <div class="container text-center pb-5">
      <p>Hecho en México, todos los derechos reservados {{ year() }}.</p>

      <p>
        Esta página puede ser reproducida con fines no lucrativos, siempre y
        cuando no se mutile, se cite la fuente completa y su dirección
        electrónica. De otra forma, requiere permiso previo por escrito de la
        institución.
      </p>
    </div>
  </footer>
</template>

<script>
import moment from 'moment'

export default {
  methods: {
    year() {
      return moment().year()
    },
  },
}
</script>

<style scoped>
footer {
  background-color: #1d3d6f;
  color: #fff;
}
</style>
