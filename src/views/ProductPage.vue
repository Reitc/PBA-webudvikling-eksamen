<template>
  <section class="container mt-10 mx-auto px-4 md:px-10">
    <div>
      <div v-if="product" id="product-detail"
        class="product-detail grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 m-4">
        <!-- Adjust the image size with a CSS class -->
        <div class="columns-auto bg-white border rounded-lg p-4">
          <img :src="product.image" :alt="product.name" class="product-image rounded" />
        </div>
        <div class="columns-auto bg-white border rounded-lg p-4 flex flex-col">
          <div class="flex-grow">
            <h2 class="text-4xl font-bold text-dark-brown mb-4">{{ product.name }}</h2>
            <p class="text-2xl font-bold text-dark-green mt-4">{{ product.price }}</p>

            <!-- Dropdown for price selection, visible only for products with multiple options -->
            <div v-if="requiresSelection(product)" class="mb-4">
              <label for="option" class="block font-semibold mb-2">Vælg en mulighed:</label>
              <select v-model="selectedOption" class="border rounded-lg p-2 w-full" id="option">
                <option disabled value="">-- Vælg en mulighed --</option>
                <option v-for="(option, index) in productOptions" :key="index" :value="option">
                  {{ option.label }} - {{ option.price }}
                </option>
              </select>
            </div>
          </div>
          
          <!-- Buttons -->
          <div class="flex items-center gap-2 mt-4 mb-4">
            <button @click="goBack"
              class="bg-dark-brown text-white font-semibold py-2 px-4 rounded hover:bg-light-brown transition">
              Tilbage
            </button>
            <!-- Conditional "Kontakt for Pris" or "Læg i kurv" Button -->
            <button v-if="product.price === 'Kontakt for pris'" @click="redirectToContact"
              class="bg-light-brown text-white font-semibold py-2 px-4 rounded hover:bg-dark-brown transition">
              Kontakt for Pris
            </button>
            <button v-else @click="addToCartWithNotification" :disabled="requiresSelection(product) && !selectedOption"
              class="bg-light-green text-white font-semibold py-2 px-4 rounded hover:bg-dark-green transition">
              Læg i kurv
            </button>
          </div>
        </div>
      </div>
      <p v-else class="text-center text-black mt-6">Produktet bliver hentet...</p>
      <div id="product-desc" class="bg-white bg-white border rounded-lg m-4 p-4 flex-col place-content-center">
        <h2 class="text-4xl font-bold text-dark-brown mb-4">Beskrivelse</h2>
        <p class="text-lg text-black mb-6">
          <span v-for="(line, index) in formattedDescription" :key="index">
            {{ line }}
            <br v-if="index < formattedDescription.length - 1" />
          </span>
        </p>
      </div>
    </div>

  </section>
</template>

<script>
import { useProductStore } from '../stores/productStore';
import { useCartStore } from '../stores/cartStore';
import { useRoute, useRouter } from 'vue-router';
import { ref, computed, watch } from 'vue';
import { useToast } from 'vue-toastification';

export default {
  name: 'ProductPage',
  setup() {
    const route = useRoute(); // access the current route parameters
    const router = useRouter(); // navigation between pages
    const toast = useToast(); // 

    const productStore = useProductStore(); // Access all products from the store
    const cartStore = useCartStore();

    const product = ref(null);  // Holds the currently displayed product
    const selectedOption = ref(null); // Holds selected dropdown option (if applicable)

    // Function to load the product when the route or products change
    const loadProduct = () => {

      // Directly use the param as a string
      const productId = route.params.id;
      
      // Look up product in the store by its string id
      const foundProduct = productStore.allProducts.value.find(
        (p) => p.id === productId
      );
      product.value = foundProduct || null;
    };

    // Watch for allProducts and route param changes
    watch(
      [() => productStore.allProducts.value, () => route.params.id],
      loadProduct,
      { immediate: true }
    );

    // Handle dropdown options dynamically for products requiring selection
    const productOptions = computed(() => {
      if (!product.value || !requiresSelection(product.value)) return [];
      const options = [];
      switch (product.value.id) {
        case 31:
          options.push(
            { label: 'Leje pr. uge', price: 'DKK 1,500.00' },
            { label: 'Køb af sæt', price: 'DKK 32,550.00' },
            { label: 'Køb af dækken', price: 'DKK 18,585.00' },
            { label: 'Køb af gamacher', price: 'DKK 20,265.00' }
          );
          break;
        case 36:
          options.push(
            { label: '1L', price: 'DKK 299.00' },
            { label: '3L', price: 'DKK 699.00' }
          );
          break;
        case 37:
          options.push(
            { label: '1L', price: 'DKK 119.00' },
            { label: '3L', price: 'DKK 299.00' }
          );
          break;
        case 38:
          options.push(
            { label: '1L', price: 'DKK 99.00' },
            { label: '3L', price: 'DKK 249.00' }
          );
          break;
      }
      return options;
    });

    // Determine if a dropdown selection is required
    const requiresSelection = (product) => {
      if (product.price === 'Kontakt for pris') return false;
      return [31, 36, 37, 38].includes(product.id);
    };

    // Add product to cart, showing a toast notification
    const addToCartWithNotification = () => {
      if (!product.value) return;
      const isInCart = cartStore.cartItems.some((item) =>
        requiresSelection(product.value)
          ? item.name === `${product.value.name} - ${selectedOption.value?.label}`
          : item.id === product.value.id
      );

      if (isInCart) {
        toast.warning('Produktet er allerede tilføjet i kurven!');
      } else {
        addToCart();
        toast.success('Produktet er tilføjet i kurven!');
      }
    };

    const addToCart = () => {
      if (requiresSelection(product.value) && selectedOption.value) {
        const selectedProduct = {
          ...product.value,
          price: selectedOption.value.price,
          name: `${product.value.name} - ${selectedOption.value.label}`,
        };
        cartStore.addToCart(selectedProduct);
      } else {
        cartStore.addToCart(product.value); // Update for varying products
      }
    };

    const formattedDescription = computed(() =>
      product.value?.fullDescription
        ? product.value.fullDescription.split('\n')
        : product.value?.description?.split('\n') || []
    );

    const redirectToContact = () => {
      window.location.href = 'https://www.cellatest.com/kontakt';
    };

    const goBack = () => router.go(-1);

    return {
      product,
      formattedDescription,
      productOptions,
      selectedOption,
      addToCartWithNotification,
      requiresSelection,
      redirectToContact,
      goBack,
    };
  },
};
</script>

<style scoped>
.product-image {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}

.product-detail {
  max-width: 900px;
  margin: auto;
}

#product-desc {
    max-width: 900px;
    display: block;
    margin: 20px auto;
  }

@media (min-width: 1024px) {

  /* For large screens and up */
  .grid {
    grid-template-columns: 2fr 1fr;
  }

  
}

@media (min-width: 768px) and (max-width: 1023px) {

  /* For medium screens */
  .grid {
    grid-template-columns: 2fr 1fr;
  }
}

@media (min-width: 640px) and (max-width: 767px) {

  /* For small screens */
  .grid {
    grid-template-columns: repeat(1, minmax(220px, 1fr));
  }
}

@media (max-width: 639px) {

  /* For extra small screens */
  .grid {
    grid-template-columns: repeat(1, minmax(220px, 1fr));
  }
}
</style>
