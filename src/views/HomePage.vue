<template>
    <div>
      <ProductCategories />
      <FeaturedProducts />
    </div>
  </template>
  
  <script>
  import ProductCategories from '../components/ProductCategories.vue'
  import FeaturedProducts from '../components/FeaturedProducts.vue'
  
  export default {
    name: 'HomePage',
    components: {
      ProductCategories,
      FeaturedProducts,
    },
  };
  </script>
  
  <style scoped>
  /* Add any specific styles here if needed */
  </style>
  