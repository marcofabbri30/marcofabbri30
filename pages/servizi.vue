<template>
    <div class="container mx-auto mx-auto px-2 md:px-12 py-5 md:py-10">
        <h1 class="text-4xl md:text-6xl font-bold leading-tight mb-8 text-center">
            Cosa posso fare per te
        </h1>
        <h3 class="text-2xl md:text-3xl leading-tight mb-8 text-center">
            Gestione efficiente dei progetti IT: dal concept alla realizzazione
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card style="max-width: 25rem; overflow: hidden" class="hover:scale-110 transition-all mx-auto">
                <template #header>
                    <img alt="user header" src="/public/servizi/1.webp" />
                </template>
                <template #title>Project Management</template>
                <template #content>
                    <p class="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                        quas!
                    </p>
                </template>
            </Card>
            <Card style="max-width: 25rem; overflow: hidden" class="hover:scale-110 transition-all mx-auto">
                <template #header>
                    <img alt="user header" src="/public/servizi/1.webp" />
                </template>
                <template #title>Consulenza IT</template>
                <template #content>
                    <p class="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                        quas!
                    </p>
                </template>
            </Card>
            <Card style="max-width: 25rem; overflow: hidden" class="hover:scale-110 transition-all mx-auto">
                <template #header>
                    <img alt="user header" src="/public/servizi/1.webp" />
                </template>
                <template #title>Sviluppo software</template>
                <template #content>
                    <p class="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                        quas!
                    </p>
                </template>            
            </Card>
        </div>
    </div>
</template>

<script setup lang="ts">

const { locale, setLocale } = useI18n()

useSeoMeta({
  title: 'Marco Fabbri - Servizi',
  ogTitle: 'Marco Fabbri - Servizi',
  description: 'Offro servizi di project management e consulenza IT per aziende che desiderano ottimizzare i propri progetti tecnologici. Specializzato nella gestione di progetti IT complessi, analisi delle esigenze aziendali, implementazione di soluzioni tecnologiche su misura e miglioramento dei processi, garantisco risultati concreti e una gestione efficace delle risorse per massimizzare il successo del tuo business.',
  ogDescription: 'Offro servizi di project management e consulenza IT per aziende che desiderano ottimizzare i propri progetti tecnologici. Specializzato nella gestione di progetti IT complessi, analisi delle esigenze aziendali, implementazione di soluzioni tecnologiche su misura e miglioramento dei processi, garantisco risultati concreti e una gestione efficace delle risorse per massimizzare il successo del tuo business.',
  twitterCard: 'summary_large_image',
})
</script>