<template>
    <div class="container mx-auto px-2 py-2" style="max-width: 800px;">    
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
                        {{ slotProps.item.status }}
                    </template>
                    <template #subtitle>
                        {{ slotProps.item.date }}
                    </template>
                    <template #content>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate
                            neque quas!
                        </p>                    
                    </template>
                </Card>
            </template>
        </Timeline>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const events = ref([
    { status: 'Software Engineer & Application Manager', date: 'aprile 2021 - presente', icon: 'pi pi-briefcase', color: '#9C27B0'},
]);
</script>

<style scoped>

@import "primeicons/primeicons.css";
@import "primeflex/primeflex.css";

</style>