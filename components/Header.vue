<template>
    <header class="bg-gray-900 text-white">
      <div class="container mx-auto px-6 py-4 flex justify-between items-center">
        <div class="text-xl font-bold">
          <nuxt-link to="/">Marco Fabbri</nuxt-link>
        </div>
        <div class="hidden md:flex space-x-6">
          <nuxt-link to="/" class="hover:text-gray-400">Home</nuxt-link>
          <nuxt-link to="/chi-sono" class="hover:text-gray-400">Chi sono</nuxt-link>
          <nuxt-link to="/servizi" class="hover:text-gray-400">Servizi</nuxt-link>          
          <nuxt-link to="/esperienza-lavorativa" class="hover:text-gray-400">Esperienza</nuxt-link>
        </div>
        <button @click="toggleMenu" class="md:hidden focus:outline-none" aria-label="menu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div v-if="isMenuOpen" class="md:hidden bg-gray-800">
        <nuxt-link to="/" class="block px-4 py-2 hover:bg-gray-700">Home</nuxt-link>
        <nuxt-link to="/chi-sono" class="block px-4 py-2 hover:bg-gray-700">Chi sono</nuxt-link>
        <nuxt-link to="/servizi" class="block px-4 py-2 hover:bg-gray-700">Servizi</nuxt-link>  
        <nuxt-link to="/esperienza-lavorativa" class="block px-4 py-2 hover:bg-gray-700">Esperienza</nuxt-link>      
      </div>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isMenuOpen: false
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      }
    }
  }
  </script>
  
  <style scoped>
  /* Puoi aggiungere eventuali stili personalizzati qui */
  </style>
  