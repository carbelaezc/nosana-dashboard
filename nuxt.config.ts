// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  css: ["~/assets/styles/global.scss"],
  dir: {
    public: 'static',
  },
  app: {
    head: {
      titleTemplate: '%s - Nosana Dashboard',
      title: 'Nosana Dashboard',
      meta: [
        { hid: 'description', name: 'description', content: 'Powering the AI revolution' },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Nosana - Powering the AI revolution'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'The most cost-effective GPU grid, with zero lock-in. Developed and customized for AI inference workloads. Consumers, miners, and businesses can monetize their idle hardware by becoming a Nosana Node. Powered by Solana and the $NOS token.'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://app.nosana.com/img/screenshot.png'
        }
      ]
    }
  },
  modules: ['@nuxtjs/google-fonts', '@vueuse/nuxt', '@nuxtjs/color-mode'],
  googleFonts: {
    preload: true,
    families: {
      Outfit: [300, 400, 700],
      'Space Grotesk': [400] 
    },
  },
  runtimeConfig: {
    public: {
      rpcUrl: process.env.RPC_URL,
      apiBase: process.env.API_BASE,
      network: process.env.NETWORK || 'devnet',
      jobs_address: process.env.JOBS_ADDRESS,
      rewards_address: process.env.REWARDS_ADDRESS,
      staking_address: process.env.STAKING_ADDRESS,
      pools_address: process.env.POOLS_ADDRESS,
      pool_address: process.env.POOL_ADDRESS,
      nos_address: process.env.NOS_ADDRESS
    }
  },
  vite: {
    esbuild: {
      target: "esnext",
    },
    build: {
      target: "esnext",
    },
    optimizeDeps: {
      include: ["@solana/web3.js", "buffer"],
      esbuildOptions: {
        target: "esnext",
      },
    },
    define: {
      "process.env.BROWSER": true,
    },
    css: {
      preprocessorOptions: {
        scss: {
          sourceMap: false,
          additionalData: '@import "@/assets/styles/variables.scss";',
        },
      },
    },
  },
})
