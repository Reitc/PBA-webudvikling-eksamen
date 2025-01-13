<template>
  <section class="container mt-10 mx-auto px-4 md:px-10">
    <h2 class="text-3xl font-bold text-left text-dark-brown mb-8">Produkter til Mennesker</h2>

    <!-- Only render once we have subcategories -->
    <div
      v-for="(subcategory, index) in sortedSubcategories"
      :key="index"
      class="mb-10"
    >
      <h3 class="text-2xl font-semibold mb-4">{{ subcategory }}</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <ProductCard
          v-for="(product, idx) in getProductsBySubcategory(subcategory)"
          :key="idx"
          :product="product"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ProductCard from '../components/ProductCard.vue';
import { useProductStore } from '../stores/productStore';
import { computed } from 'vue';

export default {
  name: 'MenneskerPage',
  components: {
    ProductCard,
  },
  setup() {
    const productStore = useProductStore(); // Use the product store

    // Use a computed property so that when products load or change, subcategories update automatically.
    const subcategories = computed(() =>
      productStore.getSubcategoriesByCategory('mennesker')
    );

    // Sort subcategories, placing 'Andre produkter' at the end
    const sortedSubcategories = computed(() => {
      const subs = subcategories.value;
      return [...subs].sort((a, b) => {
        if (a === 'Andre produkter') return 1;
        if (b === 'Andre produkter') return -1;
        return 0;
      });
    });

    // Gets all products that belong to a specific subcategory within the "mennesker" category
    // /This function can remain a normal function, but it relies on the store's)
    const getProductsBySubcategory = (subcategory) => {
      return productStore.getProductsByCategoryAndSubcategory('mennesker', subcategory);
    };

    return {
      sortedSubcategories,
      getProductsBySubcategory,
    };
  },
};
</script>

<style scoped>
.grid {
  display: grid;
  gap: 1.5rem;
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(4, minmax(220px, 1fr));
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .grid {
    grid-template-columns: repeat(3, minmax(220px, 1fr));
  }
}

@media (min-width: 640px) and (max-width: 767px) {
  .grid {
    grid-template-columns: repeat(2, minmax(220px, 1fr));
  }
}

@media (max-width: 639px) {
  .grid {
    grid-template-columns: repeat(1, minmax(220px, 1fr));
  }
}
</style>
