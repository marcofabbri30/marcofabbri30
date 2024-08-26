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
                    <img alt="user header" src="/public/servizi/1.webp" width="400" height="266"/>
                </template>
                <template #title>Project Management</template>
                <template #subtitle>Pianificazione, Esecuzione e Consegna di Progetti di Successo</template>
                <template #content>
                    <p class="m-0">
                        Con diversi anni di esperienza nel coordinare team multidisciplinari e nel gestire progetti complessi, mi impegno a garantire il rispetto delle scadenze, del budget e della qualità. Utilizzo metodologie agili e tradizionali per ottimizzare i processi e raggiungere gli obiettivi prefissati, adattandomi rapidamente alle esigenze dei clienti e del mercato.
                    </p>
                </template>
            </Card>
            <Card style="max-width: 25rem; overflow: hidden" class="hover:scale-110 transition-all mx-auto">
                <template #header>
                    <img alt="user header" src="/public/servizi/1.webp" width="400" height="266"/>
                </template>
                <template #title>Consulenza IT</template>
                <template #subtitle>Strategie Tecnologiche per il Tuo Successo</template>
                <template #content>
                    <p class="m-0">
                        Offro consulenza personalizzata per migliorare l'efficienza operativa e la sicurezza dei tuoi sistemi IT. Dalla valutazione delle infrastrutture esistenti all'implementazione di soluzioni innovative, il mio approccio è sempre orientato al risultato e al supporto della crescita del tuo business attraverso l'adozione delle tecnologie più adeguate.
                    </p>
                </template>
            </Card>
            <Card style="max-width: 25rem; overflow: hidden" class="hover:scale-110 transition-all mx-auto">
                <template #header>
                    <img alt="user header" src="/public/servizi/1.webp" width="400" height="266"/>
                </template>
                <template #title>Sviluppo software</template>
                <template #subtitle>Soluzioni Software su Misura per le Tue Esigenze</template>
                <template #content>
                    <p class="m-0">
                        Specializzato nello sviluppo di software personalizzati, dal frontend al backend, per aziende di diverse dimensioni e settori. Utilizzo tecnologie all'avanguardia per creare applicazioni scalabili, performanti e sicure che migliorano l'efficienza operativa e l'esperienza utente. Collaboro strettamente con i clienti per assicurare che ogni soluzione sia perfettamente in linea con le loro esigenze specifiche.
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