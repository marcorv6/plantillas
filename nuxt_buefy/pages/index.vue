<template>
  <section class="container">
    <Login
      :imprimirMensaje="imprimirMensaje"
      :imprimirWarning="imprimirWarning"
      :imprimirError="imprimirError"
      :updateIsLoading="updateIsLoading"
    />

    <b-loading :is-full-page="true" v-model="isLoading" :can-cancel="false" />
  </section>
</template>

<script>
import Login from '@/components/Login'

export default {
  components: { Login },
  data() {
    return {
      // admin: '',
      isLoading: false,
    }
  },
  methods: {
    updateIsLoading(booleanValue) {
      this.isLoading = booleanValue
    },
    imprimirError(err = {}, title = '¡Hubo un error!', onConfirm = () => {}) {
      this.$buefy.dialog.alert({
        ariaRole: 'alertdialog',
        ariaModal: true,
        type: 'is-danger',
        title,
        message: err.message,
        confirmText: 'Entendido',
        hasIcon: true,
        iconPack: 'mdi',
        icon: 'alert-octagon',
        onConfirm: () => onConfirm(),
      })
      if (err.err && err.err === 'token error') {
        localStorage.clear()
        this.$router.push('/')
      }
    },
    imprimirMensaje(message, title = '¡Felicidades!', onConfirm = () => {}) {
      this.$buefy.dialog.alert({
        ariaRole: 'alertdialog',
        ariaModal: true,
        type: 'is-success',
        title,
        message,
        confirmText: 'Ok',
        hasIcon: true,
        iconPack: 'mdi',
        icon: 'check-circle',
        onConfirm: () => onConfirm(),
      })
    },
    imprimirWarning(
      message,
      onConfirm = () => {},
      title = '¡Espera un minuto!',
      onCancel = () => {}
    ) {
      this.$buefy.dialog.alert({
        ariaRole: 'alertdialog',
        ariaModal: true,
        type: 'is-warning',
        title,
        message,
        confirmText: 'Confirmar',
        canCancel: true,
        cancelText: 'Cancelar',
        hasIcon: true,
        iconPack: 'mdi',
        icon: 'help-circle',
        onConfirm: () => onConfirm(),
        onCancel: () => onCancel(),
      })
    },
    // getLocalhostInfo() {
    //   this.admin.idUsuario = Number(localStorage.getItem('idUsuario'))
    //   this.admin.idTipoUsuario = Number(localStorage.getItem('idTipoUsuario'))
    //   this.admin.tipoUsuario = localStorage.getItem('tipoUsuario')
    //   this.admin.token = {
    //     headers: {
    //       token: localStorage.getItem('token'),
    //     },
    //   }
    // },
  },
  created() {
    // this.getLocalhostInfo()
    // if (this.admin.idTipoUsuario === 2) this.$router.push('/responsable')
    // if (this.admin.idTipoUsuario === 3) this.$router.push('/alumno')
    // if (this.admin.idTipoUsuario === 4) this.$router.push('/casoEspecial')
  },
  layout: 'login',
}
</script>

<style scoped></style>
