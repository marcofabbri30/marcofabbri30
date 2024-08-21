<template>
  <section class="bg-white text-gray-900 py-20">
    <div class="container mx-auto px-6 md:px-12">
      <h1 class="text-4xl md:text-6xl font-bold leading-tight mb-8 text-center">
        Chi sono
      </h1>
      <div class="space-y-12">
        <div>
          <h2 class="text-2xl font-semibold mb-4">La Nostra Storia</h2>
          <p class="text-lg">
            Mi chiamo Marco e sono un professionista IT con anni di esperienza nel settore. La mia missione è fornire soluzioni tecnologiche innovative che aiutino le aziende a raggiungere i loro obiettivi e a migliorare l'efficienza operativa.
          </p>
        </div>
        <div>
          <h2 class="text-2xl font-semibold mb-4">Le mie competenze</h2>
          <p class="text-lg">
            Le mie competenze spaziano su vari aspetti della cultura informatica aziendale, inclusa consulenza, project management e sviluppo software.
          </p>
        </div>
        <div>
          <h2 class="text-2xl font-semibold mb-4">I Miei Valori</h2>
          <p class="text-lg">
            Credo nell'integrità, nell'innovazione e nella soddisfazione del cliente. Ogni progetto che intraprendo è guidato da questi valori fondamentali, assicurando che le soluzioni non solo soddisfino ma superino le aspettative dei nostri clienti in termini di qualità e costi ridotti nel lungo periodo.
          </p>
        </div>
        <div class="text-center">
          <a href="https://www.linkedin.com/in/marco-fabbri-7a193913b/" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded-full">
            <i class="pi pi-linkedin me-3"></i>Seguimi sul Linkedin
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  pageTransition: {
    name: 'page'
  }
}) 
</script>
