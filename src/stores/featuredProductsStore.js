import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';
import { useProductStore } from './productStore';

// Helper function to load featured product IDs from localStorage
function loadFeaturedFromStorage() {
  const storedIds = localStorage.getItem('featuredProductIds');
  return storedIds ? JSON.parse(storedIds) : [];
}

export const useFeaturedProductsStore = defineStore('featuredProducts', () => {
  const featuredProductIds = ref(loadFeaturedFromStorage());
  const productStore = useProductStore();

  // Computed property to get featured products from product IDs
  const featuredProducts = computed(() => {
    return productStore.allProducts.value.filter(product =>
      featuredProductIds.value.includes(product.id)
    );
  });

  // Function to add a product ID to featured list
  function addFeaturedProduct(productId) {
    if (!featuredProductIds.value.includes(productId)) {
      featuredProductIds.value.push(productId);
    }
  }

  // Function to remove a product ID from featured list
  function removeFeaturedProduct(productId) {
    featuredProductIds.value = featuredProductIds.value.filter(id => id !== productId);
  }

  // Watch for changes and persist to localStorage
  watch(
    featuredProductIds,
    newValue => {
      localStorage.setItem('featuredProductIds', JSON.stringify(newValue));
    },
    { deep: true }
  );

  return {
    featuredProductIds,
    featuredProducts,
    addFeaturedProduct,
    removeFeaturedProduct,
  };
});
