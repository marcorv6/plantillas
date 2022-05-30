<template>
  <header>
    <b-container class="py-3">
      <b-row class="justify-content-between">
        <a
          href="https://www.unam.mx/"
          class="col-6 col-sm-5 col-md-4 col-lg-3"
          target="_blank"
        >
          <b-img
            :src="require('@/assets/logo_unam.png')"
            fluid-grow
            alt="logo_unam"
          ></b-img>
        </a>

        <a
          href="https://www.acatlan.unam.mx/"
          class="col-6 col-sm-5 col-md-4 col-lg-3 align-self-center"
          target="_blank"
        >
          <b-img
            :src="require('@/assets/logo_acatlan.png')"
            fluid-grow
            alt="logo_acatlan"
          ></b-img>
        </a>
      </b-row>
    </b-container>
  </header>
</template>

<script>
export default {}
</script>

<style scoped>
header {
  background-color: #1d3d6f;
}
</style>
