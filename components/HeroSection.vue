<template>
    <section class="bg-custom bg-gray-900 text-white py-20 md:py-60">
      <div class="container mx-auto px-6 md:px-12 text-center ">
        <h1 class="text-4xl font-bold leading-tight mb-4 	shadow-custom">
          Benvenuti nel mio portfolio!
        </h1>
        <p class="text-lg md:text-2xl mb-8 shadow-custom">
          Scopri le mie attività e i miei progetti.
        </p>
        <div>
          <nuxt-link to="/chi-sono" class="bg-gray-900 hover:bg-gray-300 text-white hover:text-gray-900 font-bold py-2 px-4 rounded-full mr-2">
            Scopri di più
          </nuxt-link>
          <nuxt-link to="/contact" class="bg-gray-900 hover:bg-gray-300 text-white hover:text-gray-900 font-bold py-2 px-4 rounded-full mr-2">
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
  .bg-custom {
  background-image: url('/hero-background.webp');
  background-size: cover;
  background-position: center;
}

@media (max-width: 767px) {
  .bg-custom {
    background-image: url('/hero-background-mobile.webp');
  }
}
.shadow-custom {
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
}
  /* Puoi aggiungere eventuali stili personalizzati qui */
  </style>