<template>
  <section class="container mt-10 mx-auto px-4 md:px-10">
    <div>
      <div
        v-if="product"
        id="product-detail"
        class="product-detail grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 m-4"
      >
        <!-- Product Image -->
        <div class="columns-auto bg-white border rounded-lg p-4">
          <img
            :src="product.image"
            :alt="product.name"
            class="product-image rounded"
          />
        </div>

        <!-- Product Info & Actions -->
        <div class="columns-auto bg-white border rounded-lg p-4 flex flex-col">
          <div class="flex-grow">
            <h2 class="text-4xl font-bold text-dark-brown mb-4">
              {{ product.name }}
            </h2>
            <p class="text-2xl font-bold text-dark-green mt-4">
              <!-- 
                If this product has a single "Kontakt for pris" or a single fixed price, 
                just show that. Otherwise we rely on the dropdown selection.
              -->
              {{ product.price }}
            </p>

            <!-- Dropdown for multiple variants ONLY for certain products -->
            <div v-if="requiresSelection(product)" class="mb-4">
              <label for="option" class="block font-semibold mb-2"
                >Vælg en mulighed:</label
              >
              <select
                v-model="selectedOption"
                class="border rounded-lg p-2 w-full"
                id="option"
              >
                <option disabled value="">-- Vælg en variant --</option>
                <option
                  v-for="(option, index) in productOptions"
                  :key="index"
                  :value="option"
                >
                  {{ option.label }} - {{ option.price }}
                </option>
              </select>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex items-center gap-2 mt-4 mb-4">
            <!-- Go back -->
            <button
              @click="goBack"
              class="bg-dark-brown text-white font-semibold py-2 px-4 rounded hover:bg-light-brown transition"
            >
              Tilbage
            </button>

            <!-- Kontakt for Pris (if price is literally 'Kontakt for pris') -->
            <button
              v-if="product.price === 'Kontakt for pris'"
              @click="redirectToContact"
              class="bg-light-brown text-white font-semibold py-2 px-4 rounded hover:bg-dark-brown transition"
            >
              Kontakt for Pris
            </button>

            <!-- Læg i kurv (enabled only if selection is made) -->
            <button
              v-else
              @click="addToCartWithNotification"
              :disabled="requiresSelection(product) && !selectedOption"
              class="bg-light-green text-white font-semibold py-2 px-4 rounded hover:bg-dark-green transition"
            >
              Læg i kurv
            </button>
          </div>
        </div>
      </div>

      <!-- Fallback if product not found or still loading -->
      <p v-else class="text-center text-black mt-6">Produktet bliver hentet...</p>

      <!-- Product Description -->
      <div
        id="product-desc"
        class="bg-white border rounded-lg m-4 p-4 flex-col place-content-center"
      >
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
    // Vue Router hooks for navigation and route parameter handling
    const route = useRoute(); // access the current route parameters
    const router = useRouter(); // navigation between pages
    const toast = useToast(); // 

    // Accessing global state via Pinia stores
    const productStore = useProductStore(); // Access all products from the store
    const cartStore = useCartStore();

    const product = ref(null);  // Holds the currently displayed product
    const selectedOption = ref(null); // Holds selected dropdown option (if used)

    // Function to load the product when the route or products change
    const loadProduct = () => {
      const productIdParam = route.params.id; // a string
      // Convert both to numbers to ensure matching
      const foundProduct = productStore.allProducts.value.find(
        (p) => parseInt(p.id, 10) === parseInt(productIdParam, 10)
      );
      product.value = foundProduct || null;
    };

    // Watch for changes in product data or route ID and reload the product
    watch(
      [() => productStore.allProducts.value, () => route.params.id],
      loadProduct,
      { immediate: true }
    );


     // show a dropdown if the product ID is in the set [31,36,37,38] AND its not “Kontakt for pris”
    const requiresSelection = (prod) => {
      if (!prod || prod.price === 'Kontakt for pris') return false;
      // Convert ID to a number for comparison
      const numericId = parseInt(prod.id, 10);
      return [31, 36, 37, 38].includes(numericId);
    };

    // Handle dropdown options dynamically for products requiring selection
    const productOptions = computed(() => {
      if (!product.value || !requiresSelection(product.value)) {
        return [];  // If the product does not require selection, returns an empty array
      }
      // Convert product ID to a number for case comparison
      const numericId = parseInt(product.value.id, 10);

      // Return specific variant options based on the product ID
      // Each variant is represented by a label (name) and a corresponding price
      switch (numericId) {
        // (Bemer Udstyr)
        case 31:
          return [
            { label: 'Leje pr. uge', price: 'DKK 1,500.00' },
            { label: 'Køb af sæt',   price: 'DKK 32,550.00' },
            { label: 'Køb af dækken', price: 'DKK 18,585.00' },
            { label: 'Køb af gamacher', price: 'DKK 20,265.00' },
          ];
        // (Økologisk Hampefrøolie)
        case 36:
          return [
            { label: '1L', price: 'DKK 299.00' },
            { label: '3L', price: 'DKK 699.00' },
          ];
        // (Økologisk Hørfrøolie)
        case 37:
          return [
            { label: '1L', price: 'DKK 119.00' },
            { label: '3L', price: 'DKK 299.00' },
          ];
        // (Økologisk Rapsolie)
        case 38:
          return [
            { label: '1L', price: 'DKK 99.00' },
            { label: '3L', price: 'DKK 249.00' },
          ];
        default:
          return [];  // Return an empty array if the product ID doesn't match any known options
      }
    });

    // Add product to cart & show a toast notification
    const addToCartWithNotification = () => {
      if (!product.value) return;

      // If product requires a variant but none is selected, show warning:
      if (requiresSelection(product.value) && !selectedOption.value) {
        toast.warning('Vælg venligst en variant.');
        return;
      }

      // Check if this exact variant is already in the cart
      const alreadyInCart = cartStore.cartItems.some((item) => {
        if (requiresSelection(product.value)) {
          return (
            item.name ===
            `${product.value.name} - ${selectedOption.value.label}`
          );
        }
        // Otherwise, just match by ID
        return item.id === product.value.id;
      });

      if (alreadyInCart) {
        toast.warning('Produktet er allerede tilføjet i kurven!');
        return;
      }

      // Otherwise, build the cart item:
      if (requiresSelection(product.value)) {
        // Overwrite name & price with chosen variant
        const variantItem = {
          ...product.value, // Inherit the main product properties
          name: `${product.value.name} - ${selectedOption.value.label}`,  // // Append variant label to product name
          price: selectedOption.value.price,  // Update price with selected variant's price
        };
        cartStore.addToCart(variantItem); // Add the customized item to the cart
      } else {
        cartStore.addToCart(product.value); // If no selection is required, add the product as is
      }

      toast.success('Produktet er tilføjet i kurven!');
    };

    // Fallback link for “Kontakt for pris”
    const redirectToContact = () => {
      // Just open your contact page:
      window.location.href = 'https://www.cellatest.com/kontakt';
    };

    // Splits the description text by line breaks ('\n') to render each line separately
    const formattedDescription = computed(() => {
      if (!product.value) return [];
      if (product.value.fullDescription) {
        return product.value.fullDescription.split('\n');
      } else if (product.value.description) {
        return product.value.description.split('\n');
      } else {
        // If no description is available, return an empty array
        return [];
      }
    });

    // “Tilbage” button
    const goBack = () => router.go(-1);

    return {
      product,
      selectedOption,
      productOptions,
      requiresSelection,
      formattedDescription,
      redirectToContact,
      addToCartWithNotification,
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
</style>
