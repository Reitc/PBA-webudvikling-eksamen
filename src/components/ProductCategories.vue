19:45 02/01/2025 smaller cards
<template>
    <div class="container mt-5 mx-auto px-2">
      <div class="md:flex justify-center">

        <router-link to="/category/mennesker" class="category-card">
          <div class="flex-1 text-gray-700 text-left bg-white px-5 py-5 m-2 rounded-lg">
            <div class="lg:flex lg:items-center">
              <div class="lg:flex-shrink-0">
                <img class="rounded-lg w-24 md:w-32 lg:w-40" src="/img/Human-Lines-Shopping-LogoIcons-mobile.png" alt="" />
              </div>
              <div class="mt-4 lg:mt-0 lg:ml-6">
                <div class="uppercase tracking-wide text-lg text-black font-bold hover:underline">Mennesker</div>
                <a href="#" class="block mt-1 text-lg leading-tight font-semibold text-gray-900">Opdag produkter, der styrker din sundhed og livskvalitet</a>
              </div>
            </div>
          </div>
        </router-link>

        <router-link to="/category/heste" class="category-card">
          <div class="flex-1 text-gray-700 text-left bg-white px-5 py-5 m-2 rounded-lg">
            <div class="lg:flex lg:items-center">
              <div class="lg:flex-shrink-0">
                <img class="rounded-lg w-24 md:w-32 lg:w-40" src="/img/Horse-Lines-Shopping-LogoIcons-mobile.png" alt="" />
              </div>
              <div class="mt-4 lg:mt-0 lg:ml-6">
                <div class="uppercase tracking-wide text-lg text-black font-bold hover:underline">Heste</div>
                <a href="#" class="block mt-1 text-lg leading-tight font-semibold text-gray-900">Støt din hests sundhed med de rette løsninger</a>
              </div>
            </div>
          </div>
        </router-link>

      </div>


      <div class="md:flex mt-5 justify-center">
        
        <router-link to="/category/hunde" class="category-card">
          <div class="flex-1 text-gray-700 text-left bg-white px-5 py-5 m-2 rounded-lg">
            <div class="lg:flex lg:items-center">
              <div class="lg:flex-shrink-0">
                <img class="rounded-lg w-24 md:w-32 lg:w-40" src="/img/Dog-Lines-Shopping-LogoIcons-mobile.png" alt="" />
              </div>
              <div class="mt-4 lg:mt-0 lg:ml-6">
                <div class="uppercase tracking-wide text-lg text-black font-bold hover:underline">Hunde</div>
                <a href="#" class="block mt-1 text-lg leading-tight font-semibold text-gray-900">Hold din hund sund med pålidelige produkter</a>
              </div>
            </div>
          </div>
        </router-link>

        <router-link to="/category/katte" class="category-card">
          <div class="flex-1 text-gray-700 text-left bg-white px-5 py-5 m-2 rounded-lg">
            <div class="lg:flex lg:items-center">
              <div class="lg:flex-shrink-0">
                <img class="rounded-lg w-24 md:w-32 lg:w-40" src="/img/Cat-Lines-Shopping-LogoIcons-mobile.png" alt="" />
              </div>
              <div class="mt-4 lg:mt-0 lg:ml-6">
                <div class="uppercase tracking-wide text-lg text-black font-bold hover:underline">Katte</div>
                <a href="#" class="block mt-1 text-lg leading-tight font-semibold text-gray-900">Sørg for din kats sundhed med kærlige løsninger</a>
              </div>
              
            </div>
          </div>
        </router-link>

      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductCategories',
  };
  </script>
  
  <style scoped>
  .category-card {
    display: flex;
    flex: 1 1 280px; /* Each card takes up equal width with a minimum size of 280px */
    max-width: 710px;

    overflow: hidden;
    text-decoration: none;
    transition: transform 0.2s ease;
  }
  
  .category-card:hover {
    transform: translateY(-5px);
  }
  </style>