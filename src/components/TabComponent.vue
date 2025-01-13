<template>
  <div class="container mt-5 mx-auto">
    <div class="flex justify-center space-x-8 border-b-2 border-black pb-2">
      <!-- Home Link -->
      <router-link
        to="/"
        class="sm:text-lg text-base font-semibold hover:text-dark-brown focus:text-dark-brown"
        :class="{ 'active-link': isButikActive }"
      >
        Butik
      </router-link>
      
      <!-- External CELLA TEST Link -->
      <a href="https://www.cellatest.com/" target="_blank" rel="noopener noreferrer"
         class="sm:text-lg text-base font-semibold hover:text-dark-brown focus:text-dark-brown">
        CELLA TEST
      </a>
      
      <!-- Blog Link -->
      <router-link
        to="/blog"
        class="sm:text-lg text-base font-semibold hover:text-dark-brown focus:text-dark-brown"
        :class="{ 'active-link': isBlogActive }"
      >
        Blog
      </router-link>
      
      <!-- External Kontakt Link -->
      <a href="https://www.cellatest.com/kontakt" target="_blank" rel="noopener noreferrer"
         class="sm:text-lg text-base font-semibold hover:text-dark-brown focus:text-dark-brown">
        Kontakt
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabComponent',
  computed: {
    isBlogActive() {
      // Check if the current route starts with "/blog"
      return this.$route.path.startsWith('/blog');
    },
    isButikActive() {
      // Check if the current route is home ("/"), starts with "/category", or starts with "/product"
      return (
        this.$route.path === '/' ||
        this.$route.path.startsWith('/category') ||
        this.$route.path.startsWith('/product')
      );
    },
  },
};
</script>

<style scoped>
/* Scoped styles, if needed */
</style>
