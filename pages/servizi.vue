<template>
    <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3  gap-4">
            <div class="bg-white p-6 rounded-lg shadow-md">
                <h2 class="text-lg font-semibold mb-2">Item 1</h2>
                <p class="text-gray-600">Description of item 1.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md md:col-span-2">
                <h2 class="text-lg font-semibold mb-2">Item 2</h2>
                <p class="text-gray-600">Description of item 2.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md md:col-span-2">
                <h2 class="text-lg font-semibold mb-2">Item 3</h2>
                <p class="text-gray-600">Description of item 3.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md">
                <h2 class="text-lg font-semibold mb-2">Item 4</h2>
                <p class="text-gray-600">Description of item 4.</p>
            </div>
            <div>
                <button @click="setLocale('en')">en</button>
                <button @click="setLocale('fr')">fr</button>
                <p>{{ $t('welcome') }}</p>
            </div>
            <!-- Add more items as needed -->
        </div>
    </div>
</template>

<script setup>
const { locale, setLocale } = useI18n()

</script>