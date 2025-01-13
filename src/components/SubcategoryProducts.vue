<template>
    <div class="subcategory-section">
      <h3 class="text-2xl font-semibold mb-4">{{ subcategory }}</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <ProductCard
          v-for="(product, index) in products"
          :key="index"
          :product="product"
        />
      </div>
    </div>
  </template>
  
  <script>
  import ProductCard from './ProductCard.vue';
  import { useProductStore } from '../stores/productStore';
  
  export default {
    name: 'SubcategoryProducts',
    components: {
      ProductCard,
    },
    props: {
      category: {
        type: String,
        required: true,
      },
      subcategory: {
        type: String,
        required: true,
      },
    },
    setup(props) {
      const { getProductsByCategoryAndSubcategory } = useProductStore();
      const products = getProductsByCategoryAndSubcategory(
        props.category,
        props.subcategory
      );
  
      return { products };
    },
  };
  </script>
  
  <style scoped>
  .subcategory-section {
    margin-bottom: 2rem;
  }
  </style>
  