<template>
  <div>
    <Header />

    <Logout />

    <nuxt />

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'
import Logout from '@/components/layouts/Logout'

export default {
  components: {
    Header,
    Footer,
    Logout,
  },
}
</script>

<style scoped></style>
