<template>
    <section class="bg-gray-900 text-white py-20">
      <div class="container mx-auto px-6 md:px-12 text-center">
        <h1 class="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Benvenuti al nostro sito!
        </h1>
        <p class="text-lg md:text-2xl mb-8">
          Scopri i nostri servizi e prodotti esclusivi.
        </p>
        <div>
          <nuxt-link to="/about" class="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full mr-2">
            Scopri di più
          </nuxt-link>
          <nuxt-link to="/contact" class="bg-transparent hover:bg-blue-500 text-blue-500 font-bold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">
            Contattaci
          </nuxt-link>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'HeroSection',
  }
  </script>
  
  <style scoped>
  /* Puoi aggiungere eventuali stili personalizzati qui */
  </style>