<script setup lang="ts">
useHead({
  title: 'Marco Fabbri - Software Engineer & Application Manager',
  meta: [
    { name:"google-site-verification", content:"_3llYmEo5RoKJwl12uTyRNWx2648TTrif38mXxIQ6XQ" },
    { name: 'description', content: 'Marco personal portfolio. Software Engineer & Project Manager' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  htmlAttrs: {
    lang: 'en',
  },
  script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
@import "primeicons/primeicons.css";

@import url("~/assets/css/base.css");


.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}

</style>