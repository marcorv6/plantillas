<template>
  <div>
    <Header />

    <nuxt />

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'

export default {
  components: {
    Header,
    Footer,
  },
}
</script>

<style scoped></style>
