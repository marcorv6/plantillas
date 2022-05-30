export default {
  ssr: false,
  /* Server de pruebas */
  // server: { port: 3016 },
  server: { port: 8080 },
  target: 'static',
  head: {
    title: 'nuxt_bootstrap',
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
  buildModules: [
    [
      'nuxt-fontawesome',
      {
        component: 'fa',
        imports: [
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['faFacebookSquare'],
          },
          {
            icons: ['faBasketballBall'],
            set: '@fortawesome/free-regular-svg-icons',
          },
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['faBasketballBall'],
          },
        ],
      },
    ],
  ],
  modules: ['bootstrap-vue/nuxt', '@nuxtjs/axios'],
  axios: {},
  build: {},
  /* Server de pruebas */
  // static: {
  //   prefix: false,
  // },
  env: {
    // api: "http://localhost:3000",
    // api: "https://890af9d598a4.ngrok.io"
    // api: "https://venus.acatlan.unam.mx/pruebas",
    // api: "https://venus.acatlan.unam.mx/produccion",
  },
}
