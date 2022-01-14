export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'shop_client',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios/adminAxios.js',
    '~/plugins/axios/userAxios.js',
    '~/plugins/common/configs.js',
    '~/plugins/common/helpers.js',
    '~/plugins/vue/filters.js',
    '~/plugins/i18n/i18n.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://www.npmjs.com/package/@nuxtjs/dotenv
    '@nuxtjs/dotenv',
    // https://www.npmjs.com/package/nuxt-vuex-localstorage
    ['nuxt-vuex-localstorage', {
      localStorage: [],
      sessionStorage: []
    }],
    // https://www.npmjs.com/package/cookie-universal-nuxt
    'cookie-universal-nuxt',
    // https://i18n.nuxtjs.org/
    '@nuxtjs/i18n',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // https://www.npmjs.com/package/@nuxtjs/dotenv#options
  dotenv: {
    /* module options */
  },

  // https://i18n.nuxtjs.org/options-reference
  i18n: {
    /* module options */
    defaultLocale: 'vi',
    defaultDirection: 'ltr',
    langDir: '~/locales/',
    locales: [
      { code: 'vi', iso: 'vi', file: 'vi/vi.js' },
      { code: 'en', iso: 'en-US', file: 'en/en.js' },
    ],
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
