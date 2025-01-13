<template>
    <section class="container mt-10 mx-auto px-4 md:px-10">
      <h1 class="text-4xl font-bold text-dark-brown text-center mb-8">
        Velkommen til Vores Blog
      </h1>
      <p class="text-lg text-black text-center mb-10">
        Opdag dybdegående artikler om sundhed, velvære og epigenetisk analyse for både dig og dine kæledyr. Vi er her for at hjælpe dig med at leve et sundt og balanceret liv.
      </p>
  
      <!-- Featured Blog Section -->
      <div class="mb-16">
        <h2 class="text-3xl font-semibold text-dark-brown mb-6">Udvalgte Artikler</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BlogCard
            v-for="(post, index) in featuredPosts"
            :key="index"
            :id="post.id"
            :title="post.title"
            :excerpt="post.excerpt"
            :image="post.image"
          />
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import BlogCard from '../components/BlogCard.vue';
  
  export default {
    name: 'BlogPage',
    components: {
      BlogCard,
    },
    data() {
      return {
        featuredPosts: [
            {
            id: 1,
            title: "Forstå Din Sundhed Gennem Hårcelletest",
            excerpt:
                "Lær hvordan epigenetisk hårcelleanalyse kan give dig indsigt i din krops behov og balance.",
            image: "/img/blog/haarcelletest.jpg",
            },
            {
            id: 2,
            title: "5 Tips til Optimal Kost for Dig og Dit Kæledyr",
            excerpt:
                "Opdag hvordan korrekt ernæring kan forbedre velvære for både mennesker og dyr.",
            image: "/img/blog/kost_guide.jpg",
            },
            {
            id: 3,
            title: "Sådan Forbedrer Du Dit Immunforsvar",
            excerpt:
                "Opdag praktiske tips til at styrke dit immunforsvar og holde dig rask.",
            image: "/img/blog/immunforsvar_tips.jpg",
            },
            {
            id: 4,
            title: "Hårcelletest for Dyr",
            excerpt:
                "Lær hvordan hårcelletest kan hjælpe med at forbedre dit kæledyrs sundhed.",
            image: "/img/blog/haarcelletest_dyr.jpg",
            },
            {
            id: 5,
            title: "Fordele ved Naturlige Kosttilskud til Kæledyr",
            excerpt:
                "Find ud af, hvordan kosttilskud kan forbedre dit kæledyrs velvære.",
            image: "/img/blog/kosttilskud_dyr.jpg",
            },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  </style>
  