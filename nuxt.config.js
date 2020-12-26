export default {
  target: 'static', // default is 'server',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Number9 Technology Solutions - Software Development Freiburg',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Number9 Technology Solutions ist eine Software- und Webentwicklungs Firma mit Sitz in Freiburg.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/fontawesome', '~/plugins/vuetouch'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],
  eslint: {
    rules: {
      'no-console': false,
      'object-shorthand': false,
    },
  },
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // [
    //   'nuxt-mail',
    //   {
    //     smtp: {
    //       host: 'smtpout.europe.secureserver.net',
    //       port: 465,
    //     },
    //   },
    // ],
    '@nuxtjs/auth',
  ],
  bootstrapVue: {
    icons: true,
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  // mail: {
  //   smtp: {
  //     host: "smtpout.europe.secureserver.net",
  //     port: 465,
  //   },
  // },

  auth: {
    strategies: {
      google: {
        clientId:
          '910811126317-isbkdfodcn2n7gmhf1p2ndmk6j4c1qra.apps.googleusercontent.com',
      },
    },
  },
}
