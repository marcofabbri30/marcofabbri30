<template>
    <div>
      <HeroSection></HeroSection>
    </div>
    <div class="container mx-auto px-6">
      <header class="py-6">
        <h1 class="text-4xl font-bold">My Blog</h1>
        <p class="text-lg text-gray-600">Welcome to my personal blog where I share my thoughts and experiences.</p>
      </header>
      <main class="mt-8">
        <section>
          <h2 class="text-2xl font-semibold mb-4">Latest Posts</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article v-for="post in posts" :key="post.id" class="bg-white p-4 rounded-lg shadow-md">
              <h3 class="text-xl font-bold">{{ post.title }}</h3>
              <p class="text-gray-700">{{ post.excerpt }}</p>              
            </article>
          </div>
        </section>
      </main>
    </div>
  </template>
  
<script>
useSeoMeta({
  title: 'Software Engineer & Project Manager | [Il Tuo Nome]',
  ogTitle: 'Software Engineer & Project Manager | [Il Tuo Nome]',
  description: 'Sono un software engineer e project manager con esperienza nella gestione di progetti complessi e nello sviluppo di soluzioni software innovative.',
  ogDescription: 'Scopri il mio lavoro come software engineer e project manager. Gestisco progetti complessi e sviluppo soluzioni software all\'avanguardia per rispondere alle esigenze aziendali.',
  twitterCard: 'summary_large_image',
})
</script>
  
<style>
/* Custom styles can go here if needed */
</style>
  