<template>
    <section class="container mt-10 mx-auto">
      <h2 class="text-3xl font-bold text-center text-dark-brown mb-8">{{ categoryTitle }}</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        <div v-for="(product, index) in products" :key="index" class="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col items-center w-full">
          <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover mb-4 rounded" />
          <h3 class="text-lg font-semibold text-center text-black">{{ product.name }}</h3>
          <p class="text-center text-black mb-2">{{ product.description }}</p>
          <p class="text-lg font-bold text-dark-brown">{{ product.price }}</p>
          <button class="bg-light-green text-white font-semibold py-2 px-4 rounded mt-3 w-full hover:bg-dark-green transition">Læg i kurv</button>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import ProductCard from '../components/ProductCard.vue';
  import { useProductStore } from '../stores/productStore';
  import { useRoute } from 'vue-router';
  
  export default {
    name: 'CategoryPage',
    components: {
      ProductCard,
    },
    setup() {
      const route = useRoute();
      const { getProductsByCategory } = useProductStore();
      const products = getProductsByCategory(route.params.name);
  
      return {
        products,
      };
    },
  };
  </script>
  
  
  <style scoped>
  .grid {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }
  </style>
  