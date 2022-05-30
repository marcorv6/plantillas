<template>
  <section
    class="container is-flex is-justify-content-center is-align-items-center"
  >
    <form class="box">
      <b-field label="Usuario" :type="error" :message="message">
        <b-input v-model="usuario"></b-input>
      </b-field>

      <b-field label="Contraseña">
        <b-input type="password" password-reveal v-model="password"></b-input>
      </b-field>

      <div class="has-text-centered">
        <b-button @click="login()" type="is-success">Iniciar Sesión</b-button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      usuario: '',
      password: '',
      error: '',
      message: '',
    }
  },
  methods: {
    login() {},
    resetearError() {
      if (this.error) this.error = ''
      if (this.message) this.message = ''
    },
  },
  watch: {
    password() {
      this.resetearError()
    },
    usuario() {
      this.resetearError()
    },
  },
  layout: 'login',
}
</script>

<style scoped>
section {
  height: 75vh;
}

form{
  width: 30rem;
}
</style>
