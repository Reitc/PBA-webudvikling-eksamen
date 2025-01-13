<template>
  <section class="container mt-10 mx-auto px-4 md:px-10">
    <h2 class="text-3xl font-bold text-center text-dark-brown mb-8">UDVALGTE PRODUKTER</h2>
    <div class="grid gap-10 p-8 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1" v-if="randomProducts.length > 0"    >
      <ProductCard
        v-for="product in randomProducts"
        :key="product.id"
        :product="product"
      />
    </div>
    <p v-else class="text-center text-black mt-6">Ingen produkter at vise.</p>
  </section>
</template>

<script>
import { computed } from 'vue';
import { useProductStore } from '../stores/productStore';
import ProductCard from './ProductCard.vue';

export default {
  name: 'FeaturedProducts',
  components: {
    ProductCard,
  },
  setup() {
    const productStore = useProductStore();
    const allProducts = productStore.allProducts;

    // Computed property to get a random selection of products
    const randomProducts = computed(() => {
      const productsArray = allProducts.value;
      if (productsArray.length === 0) return [];
      // Shuffle the products array
      const shuffled = [...productsArray].sort(() => 0.5 - Math.random());
      // Return the first N products (e.g., 8 products)
      return shuffled.slice(0, 8);
    });

    return {
      randomProducts,
    };
  },
};
</script>

<style scoped>

</style>

