import path from 'path';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    "nuxt-primevue",
    "@nuxt/content",
    "@nuxtjs/i18n",
    "nuxt-aos"
  ],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },

  primevue: {
    usePrimeVue: true,
    options: {
      unstyled: true
    },
    importPT: { from: path.resolve(__dirname, './presets/aura/') },
    components: {
      include: '*',   
    },
    directives: {
        include: ['Ripple', 'Tooltip']
    }
  },
  i18n: {
    vueI18n: './i18n.config.ts', // if you are using custom path, default
    strategy: 'prefix_and_default',
    defaultLocale: 'it',
    locales: ['it', 'en', 'fr'],
    customRoutes:'config',
    pages:{
      services : {
        it : 'servizi'
      }
    }
  },

  devtools: { enabled: true },
  aos: {
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  },
  tailwindcss: {
    config: {
        content: [
            "presets/**/*.{js,vue,ts}"
        ],
        theme: {
            extend: {
                colors: {
                    "primary-50": "rgb(var(--primary-50))",
                    "primary-100": "rgb(var(--primary-100))",
                    "primary-200": "rgb(var(--primary-200))",
                    "primary-300": "rgb(var(--primary-300))",
                    "primary-400": "rgb(var(--primary-400))",
                    "primary-500": "rgb(var(--primary-500))",
                    "primary-600": "rgb(var(--primary-600))",
                    "primary-700": "rgb(var(--primary-700))",
                    "primary-800": "rgb(var(--primary-800))",
                    "primary-900": "rgb(var(--primary-900))",
                    "primary-950": "rgb(var(--primary-950))",
                    "surface-0": "rgb(var(--surface-0))",
                    "surface-50": "rgb(var(--surface-50))",
                    "surface-100": "rgb(var(--surface-100))",
                    "surface-200": "rgb(var(--surface-200))",
                    "surface-300": "rgb(var(--surface-300))",
                    "surface-400": "rgb(var(--surface-400))",
                    "surface-500": "rgb(var(--surface-500))",
                    "surface-600": "rgb(var(--surface-600))",
                    "surface-700": "rgb(var(--surface-700))",
                    "surface-800": "rgb(var(--surface-800))",
                    "surface-900": "rgb(var(--surface-900))",
                    "surface-950": "rgb(var(--surface-950))",
                },
            },
        },
    }
  },

  compatibilityDate: "2024-08-21"
})