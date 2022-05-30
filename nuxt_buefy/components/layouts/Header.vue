<template>
  <header>
    <div class="container py-3">
      <div
        class="
          columns
          is-mobile is-gapless is-vcentered is-justify-content-space-between
        "
      >
        <a
          href="https://www.unam.mx/"
          class="column is-5-mobile is-3-tablet is-one-fifth-widescreen ml-3"
          target="_blank"
        >
          <b-image :src="require('@/assets/logo_unam.png')" alt="logo_unam" />
        </a>

        <a
          href="https://www.acatlan.unam.mx/"
          class="column is-5-mobile is-3-tablet is-one-fifth-widescreen mr-3"
          target="_blank"
        >
          <b-image
            :src="require('@/assets/logo_acatlan.png')"
            alt="logo_acatlan"
          />
        </a>
      </div>
    </div>
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
