<template>
    <section class="bg-white text-gray-900 py-20">
        <div class="container mx-auto px-6 md:px-12">
        <h1 class="text-4xl md:text-6xl font-bold leading-tight mb-8 text-center">
            Chi Siamo
        </h1>
        <div class="space-y-12">
            <div>
            <h2 class="text-2xl font-semibold mb-4">La Nostra Storia</h2>
            <p class="text-lg">
                Siamo un team di professionisti IT appassionati e dedicati con anni di esperienza nel settore. La nostra missione è fornire soluzioni tecnologiche innovative che aiutino le aziende a raggiungere i loro obiettivi e a migliorare l'efficienza operativa.
            </p>
            </div>
            <div>
            <h2 class="text-2xl font-semibold mb-4">Il Nostro Team</h2>
            <p class="text-lg">
                Il nostro team è composto da esperti in vari campi dell'informatica, inclusi consulenza, project management e sviluppo software. Siamo orgogliosi di lavorare insieme per offrire servizi di alta qualità e costruire relazioni durature con i nostri clienti.
            </p>
            </div>
            <div>
            <h2 class="text-2xl font-semibold mb-4">I Nostri Valori</h2>
            <p class="text-lg">
                Crediamo nell'integrità, nell'innovazione e nella soddisfazione del cliente. Ogni progetto che intraprendiamo è guidato da questi valori fondamentali, assicurando che le nostre soluzioni non solo soddisfino ma superino le aspettative dei nostri clienti.
            </p>
            </div>
            <div class="text-center">
            <nuxt-link to="/contact" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Contattaci
            </nuxt-link>
            </div>
        </div>
        </div>
    </section>
</template>
<script setup>
defineI18nRoute({
  paths: {
    it: '/chi-sono',
    en: '/about-us', // -> accessible at /about-us (no prefix since it's the default locale)
    fr: '/a-propos', // -> accessible at /fr/a-propos
    es: '/sobre'     // -> accessible at /es/sobre
  }
})
</script>
