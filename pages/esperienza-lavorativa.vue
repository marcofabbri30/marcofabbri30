<template>
    <div class="container mx-auto px-2 py-6" style="max-width: 800px;">
        <h1 class="text-4xl md:text-6xl font-bold leading-tight mb-6 text-center">
            La mia esperienza lavorativa
        </h1>
        <Timeline :value="events" align="left" class="customized-timeline"
            :pt="{
                opposite:{
                    class: 'flex-0'
                }
            }"
        >
            <template #marker="slotProps">
                <span class="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1" :style="{ backgroundColor: slotProps.item.color }">
                    <i :class="slotProps.item.icon"></i>
                </span>
            </template>      
            <template #content="slotProps">
                <Card class="mt-3">
                    <template #title>
                        <h2 class="text-2xl m-0 p-0">{{ slotProps.item.job }}</h2>                        
                    </template>
                    <template #subtitle>
                        <h3 class="text-xl mb-2">{{ slotProps.item.company }}</h3>
                        <p>{{ slotProps.item.date }}</p>
                    </template>
                    <template #content>
                        <p></p>
                    </template>
                </Card>
            </template>
        </Timeline>
    </div>
</template>

<script setup lang="ts">

import { ref } from "vue";

useSeoMeta({
  title: 'Marco Fabbri - Esperienza lavorativa',
  ogTitle: 'Marco Fabbri - Esperienza lavorativa',
  description: 'Project manager esperto con anni di esperienza nella gestione di progetti IT complessi, specializzato in pianificazione strategica, ottimizzazione dei processi e implementazione di soluzioni tecnologiche innovative per garantire risultati di successo e efficienza operativa',
  ogDescription: 'Project manager esperto con anni di esperienza nella gestione di progetti IT complessi, specializzato in pianificazione strategica, ottimizzazione dei processi e implementazione di soluzioni tecnologiche innovative per garantire risultati di successo e efficienza operativa',
  twitterCard: 'summary_large_image',
})

const events = ref([
    { job: 'Software Engineer & Application Manager',company: 'poltronesofà', date: 'aprile 2021 - presente', icon: 'pi pi-briefcase', color: '#9C27B0'},
    { job: 'Software Engineer & Application Manager',company: 'Vanguard - Gruppo Global Sistemi', date: 'gennaio 2021 - marzo 2021', icon: 'pi pi-briefcase', color: '#9C27B0'},
    { job: 'Fullstack Software Developer & IT Consultant',company: 'Onit Group', date: 'novembre 2017 - dicembre 2020', icon: 'pi pi-briefcase', color: '#9C27B0'},
    { job: 'IT Consultant & Application Specialist',company: 'Engineering Ingegneria Informatica', date: 'maggio 2017 - novembre 2017', icon: 'pi pi-briefcase', color: '#9C27B0'},
    { job: 'Laurea Magistrale in Ingegneria Biomedica',company: 'Università di Bologna', date: '2014 - 2017', icon: 'pi pi-book', color: '#d41317'},
    { job: 'Laurea Triennale in Ingegneria Biomedica',company: 'Università di Bologna', date: '2010 - 2014', icon: 'pi pi-book', color: '#d41317'},
]);
</script>

<style scoped>

@import "primeflex/primeflex.css";

</style>