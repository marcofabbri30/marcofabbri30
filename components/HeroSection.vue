<template>
   <section class="relative h-[calc(100vh-4rem)]">
        <picture>
          <source srcset="/home-xs.webp" media="(max-width: 640px)">
          <img src="/public/home.webp" alt="Hero Background" class="absolute inset-0 w-full h-full object-cover" >
        </picture>
        <div class="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-50">
          <div class="text-center">
            <h1 class="text-5xl font-bold text-white">Benvenuti nel mio portfolio!</h1>
            <h3 class="text-3xl font-bold text-white mt-4">Scopri le mie attività e i miei progetti.</h3>
            <div class="mt-6">
              <nuxt-link to="/chi-sono" class="bg-gray-900 hover:bg-gray-300 text-white hover:text-gray-900 font-bold py-3 px-5 rounded-full mr-2">
                Scopri di più
              </nuxt-link>
              <nuxt-link to="/servizi" class="bg-gray-900 hover:bg-gray-300 text-white hover:text-gray-900 font-bold py-3 px-5 rounded-full mr-2">
                Servizi
              </nuxt-link>
            </div>
          </div>            
        </div>
    </section>

    <!-- <section class="relative  text-white py-40 md:py-60">
    <picture>
      <source srcset="/hero-background-xs.webp" media="(max-width: 640px)">
      <source srcset="/hero-background-mobile.webp" media="(max-width: 767px)">
      <img src="/hero-background.webp" alt="Hero Background" class="absolute inset-0 object-cover w-full h-full z-[-1]" >
    </picture>
      <div class="container mx-auto px-6 md:px-12 text-center">
        <h1 class="text-4xl font-bold leading-tight mb-4 	shadow-custom">
          Benvenuti nel mio portfolio!
        </h1>
        <p class="text-lg md:text-2xl mb-8 shadow-custom">
          Scopri le mie attività e i miei progetti.
        </p> 
        <div>
          <nuxt-link to="/chi-sono" class="bg-gray-900 hover:bg-gray-300 text-white hover:text-gray-900 font-bold py-3 px-5 rounded-full mr-2">
            Scopri di più
          </nuxt-link>
          <nuxt-link to="/contact" class="bg-gray-900 hover:bg-gray-300 text-white hover:text-gray-900 font-bold py-3 px-5 rounded-full mr-2">
            Contattaci
          </nuxt-link>
        </div>
      </div>
    </section> -->
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
@media (max-width: 640px) {
  .bg-custom {
    background-image: url('/hero-background-xs.webp');
  }
}
.shadow-custom {
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
}
  /* Puoi aggiungere eventuali stili personalizzati qui */
  </style>