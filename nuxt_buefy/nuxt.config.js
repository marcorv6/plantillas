export default {
  ssr: false,
  /* Server de pruebas */
  // server: { port:  },
  server: { port: 8080 },
  target: 'static',
  head: {
    title: 'nuxt_buefy',
    htmlAttrs: {
      lang: 'es',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: [],
  modules: ['nuxt-buefy', '@nuxtjs/axios'],
  axios: {},
  build: {},
  env: {
    // api: "http://localhost:3000",
    // api: "https://890af9d598a4.ngrok.io"
    // api: "https://venus.acatlan.unam.mx/pruebas",
    // api: "https://venus.acatlan.unam.mx/produccion",
  },
}
