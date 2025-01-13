<template>
    <article
      class="bg-blog-card p-6 rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col justify-between"
    >
      <div>
        <img :src="image" :alt="title" class="w-full h-40 object-cover mb-4 rounded" />
        <h3 class="text-xl font-bold text-blak mb-2">{{ title }}</h3>
        <p class="text-black mb-4 line-clamp-3">{{ excerpt }}</p>
      </div>
      <router-link :to="`/blog/${id}`" class="text-dark-green font-semibold hover:underline mt-auto">
        Læs Mere
      </router-link>
    </article>
  </template>
  
  <script>
  export default {
    name: 'BlogCard',
    props: {
      id: {
        type: Number,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      excerpt: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .bg-blog-card {
    background-color: #eae5db; /* Slightly lighter than #e6dfd4 */
  }
  </style>
  