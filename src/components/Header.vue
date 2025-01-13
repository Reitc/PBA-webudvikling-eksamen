<template>
  <header
    class="bg-light-brown py-4 px-4 sm:px-20 flex flex-col md:flex-col lg:flex-row items-center justify-between h-auto lg:h-28 space-y-4 md:space-y-6 lg:space-y-0"
  >
    <div class="flex-shrink-0">
      <router-link to="/">
        <img src="/img/global_logo.png" alt="Logo" class="h-24 w-auto" />
      </router-link>
    </div>
    <div class="container mt-5 mx-auto">
      <div class="flex justify-center space-x-4 sm:space-x-8 font">
        <!-- Home Link -->
        <router-link id="butik-link"
          to="/"
          class="text-xl text-white font-semibold hover:text-dark-brown focus:text-white"
          :class="{ 'active-link': isButikActive }"
        >
          Butik
        </router-link>
        
        <!-- External CELLA TEST Link -->

        <a id="cellatest-link" href="https://www.cellatest.com/" target="_blank" rel="noopener noreferrer"
          class="text-xl text-white font-semibold hover:text-dark-brown focus:text-white">

          CELLA TEST
        </a>
        
        <!-- Blog Link -->
        <router-link id="blog-link"
          to="/blog"
          class="text-xl text-white font-semibold hover:text-dark-brown focus:text-white"
          :class="{ 'active-link': isBlogActive }"
        >
          Blog
        </router-link>
        
        <!-- External Kontakt Link -->

        <a id="kontakt-link" href="https://www.cellatest.com/kontakt" target="_blank" rel="noopener noreferrer"
          class="text-xl text-white font-semibold hover:text-dark-brown focus:text-white">

          Kontakt
        </a>
      </div>
    </div>
    <div class="container mx-auto flex justify-center">

      <div id="search-bar" class="w-full max-w-2xl mx-auto relative flex items-center " v-click-outside="closeDropdown">
          <input
            type="text"
            placeholder="Søg efter produkter"
            class="w-full h-12 pl-4 pr-12 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navbar-green"
            v-model="searchQuery"
            @input="onInput"
          >
          <button
            class="absolute top-1/2 right-0 transform -translate-y-1/2 flex items-center justify-center pr-4"
    
            @click="onSearch"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-navbar-green "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          </input>
          

          <!-- Dropdown for search results -->
          <transition name="dropdown">
            <ul
              v-if="showDropdown && filteredProducts.length > 0"
              class="absolute z-10 w-full bg-white border border-gray-200 rounded-lg mt-1 max-h-52 overflow-y-auto p-2 shadow-lg"
              :style="{ top: 'calc(100% + 4px)' }"
            >
              <li
                v-for="product in filteredProducts"
                :key="product.id"
                class="py-2 px-4 rounded-md transition-colors duration-200 ease-in-out hover:bg-gray-100 cursor-pointer"
                @click="goToProduct(product.id)"
              >
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-6">
                    <img
                      :src="product.image"
                      alt="Product image"
                      class="w-16 h-16 rounded object-cover border border-gray-200 shadow-sm"
                    />
                    <span v-html="highlightMatch(product.name, searchQuery)"></span>
                  </div>
                  <span class="text-gray-500 text-sm italic">{{ product.category }}</span>
                </div>
              </li>

            </ul>
          </transition>

        </div>
        <div class="flex space-x-6">

        </div>
        <div class="relative p-1 rounded-md">
          <router-link id="cart-link" to="/cart" class="block text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8h13.2L17 13H7z"
              />
            </svg>
          </router-link>
          <span
            class="absolute -top-2 -right-2 bg-navbar-green text-white rounded-full text-xs px-2 py-1"
            >{{ cartItems.length }}</span
          >
        </div>
    </div>
  </header>
</template>

<script>
import { ref, computed } from 'vue';
import { useCartStore } from '../stores/cartStore';
import { useProductStore } from '../stores/productStore';
import { useRouter } from 'vue-router';

export default {
  name: 'Header',
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

  setup() {
    const cartStore = useCartStore();
    const cartItems = cartStore.cartItems;

    const searchQuery = ref('');
    const showDropdown = ref(false);
    const { allProducts } = useProductStore();

    const router = useRouter();

    // Computed property to filter products based on search query
    const filteredProducts = computed(() => {
      if (!searchQuery.value) {
        return [];
      }
      return allProducts.value.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });

    // Show or hide the dropdown based on input
    const onInput = () => {
      showDropdown.value = searchQuery.value.length > 0;
    };

    const closeDropdown = () => {
      showDropdown.value = false;
    };

    // Redirect to product page
    const goToProduct = (productId) => {
      showDropdown.value = false;
      searchQuery.value = '';
      router.push(`/product/${productId}`); // productId is a string
    };

    // Optional: Handle search button click
    const onSearch = () => {
      // You can implement a full search page if needed
    };

    // Function to highlight matching text
    const highlightMatch = (text, query) => {
      if (!query) return text;
      const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`(${escapedQuery})`, 'gi');
      return text.replace(regex, '<span class="text-navbar-green font-bold">$1</span>');
    };

    // Return all the variables and functions you want to use in your template
    return {
      cartItems,
      searchQuery,
      showDropdown,
      filteredProducts,
      onInput,
      goToProduct,
      closeDropdown,
      onSearch,
      highlightMatch, 
    };
  },
};
</script>



<style scoped>
/*
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.2s ease, transform 0.4s ease;
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.dropdown-enter-to,
.dropdown-leave-from {
  opacity: 1;
  transform: translateY(0);
}

@media (min-width: 768px) and (max-width: 1023px) { /* For medium screens 
  header {
    flex-direction: column;
  }

  #logo-link{
    justify-content: center;
  }

  #logo-link img {
    margin: 5px;
  }

  #butik-link, #cellatest-link, #blog-link, #kontakt-link {
    font-size: 16px;
  }

  
  #search-bar, #search-bar input {
    width: 100%;
    height: 40px;
  }

  #cart-link svg {
    height: 30px;
    width: auto;
    margin: 1px
  }
}
  

@media (min-width: 640px) and (max-width: 767px) { /* For small screens 
  header {
    flex-direction: column;
  }

  #logo-link{
    justify-content: center;
  }

  #logo-link img {
    max-width: 80px;
    height: auto;
    margin: 5px;
  }

  #butik-link, #cellatest-link, #blog-link, #kontakt-link {
    font-size: 14px;
  }

  
  #search-bar, #search-bar input {
    width: 100%;
    height: 40px;
  }

  #cart-link svg {
    height: 30px;
    width: auto;
    margin: 1px
  }
}

@media (max-width: 639px) { /* For extra small screens 
  #logo-link{
    justify-content: center;
  }

  #logo-link img {
    max-width: 50px;
    height: auto;
  }

  #butik-link, #cellatest-link, #blog-link, #kontakt-link {
    font-size: 14px;
  }

  
  #search-bar, #search-bar input {
    width: 100%;
    height: 30px;
  }

  #cart-link svg {
    height: 25px;
    width: auto;
    margin: 1px
  }

} */
</style>