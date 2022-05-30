<template>
  <div class="full-h is-flex is-justify-content-center is-align-items-center">
    <form class="box">
      <div class="has-text-centered">
        <h2 class="is-size-1">Nombre sistema</h2>
      </div>

      <b-field label="Usuario" :type="error">
        <b-input type="text" @keyup.enter.native="login()" v-model="usuario" />
      </b-field>

      <b-field label="Contraseña" :type="error">
        <b-input
          type="password"
          @keyup.enter.native="login()"
          v-model="password"
          password-reveal
        />
      </b-field>

      <div class="has-text-centered">
        <b-button
          @click="login()"
          type="is-success"
          :disabled="error || !(usuario && password)"
        >
          Iniciar Sesión
        </b-button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    imprimirMensaje: { type: Function, required: true },
    imprimirWarning: { type: Function, required: true },
    imprimirError: { type: Function, required: true },
    updateIsLoading: { type: Function, required: true },
  },
  data() {
    return {
      usuario: '',
      password: '',
      error: '',
    }
  },
  methods: {
    login() {
      if (this.usuario && this.password && !this.error) {
        const data = {
          usuario: this.usuario,
          password: this.password,
        }

        this.updateIsLoading(true)
        axios
          .post(`${process.env.api}/usuario/login`, data)
          .then((res) => {
            const info = res.data

            localStorage.setItem('token', info.token)
            this.updateIsLoading(false)
            this.$router.push(`/${''}`)
          })
          .catch((err) => {
            this.error = 'is-danger'
            this.updateIsLoading(false)
            this.imprimirError(err.response.data)
          })
      }
    },
  },
  watch: {
    password() {
      if (this.error) this.error = ''
    },
    usuario() {
      if (this.error) this.error = ''
    },
  },
}
</script>

<style scoped>
.full-h {
  height: 75vh;
}

form {
  width: 30rem;
}
</style>
