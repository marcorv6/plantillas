<template>
  <section class="hero is-light is-bold is-large">
    <div class="container hero-body">
      <transition name="slide-fade" appear>
        <div class="columns is-vcentered">
          <div class="column animate__animated animate__fadeIn animate__slow">
            <b-image :src="require('@/assets/404.webp')" alt="404_image" />
          </div>

          <div class="column">
            <h1 class="title">ERROR 404 LA PÁGINA NO HA SIDO ENCONTRADA</h1>

            <b-button class="is-dark" outlined @click="regresar()">
              Ir a la página principal
            </b-button>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    regresar() {
      this.$router.push('/')
    },
  },
  layout: 'login',
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 2s ease;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
