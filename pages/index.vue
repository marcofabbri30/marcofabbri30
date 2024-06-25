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
              <NuxtLink :to="'/post/' + post.slug" class="text-blue-500 hover:underline mt-2 inline-block">Read more</NuxtLink>
            </article>
          </div>
        </section>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        posts: [
          { id: 1, title: "First Post", excerpt: "This is the excerpt of the first post.", slug: "first-post" },
          { id: 2, title: "Second Post", excerpt: "This is the excerpt of the second post.", slug: "second-post" },
          { id: 3, title: "Third Post", excerpt: "This is the excerpt of the third post.", slug: "third-post" }
        ]
      };
    }
  }
  </script>
  
  <style>
  /* Custom styles can go here if needed */
  </style>
  