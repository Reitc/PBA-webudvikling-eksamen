<template>
  <div class="cart-page-container">
    <section class="cart-content container mt-10 mx-auto px-4 md:px-10">
      <h2 class="text-3xl font-bold text-left text-dark-brown mb-8">Din Indkøbskurv</h2>

      <div id="cart-items" v-if="cartItems.length > 0" class="space-y-4">
        <div v-for="(item, index) in cartItems" :key="item.id" class="flex items-center justify-between bg-white p-4 rounded-lg shadow">
          <img :src="item.image" :alt="item.name" class="w-20 h-20 object-contain mr-4 rounded" />
          <div class="flex-grow">
            <h3 class="text-lg font-semibold text-black">{{ item.name }}</h3>
            <p class="text-sm text-black">{{ item.description }}</p>
            <p class="text-lg font-bold text-dark-brown">{{ item.price }}</p>
            <div class="flex items-center mt-2">
              <label class="text-sm mr-2">Antal:</label>
              <input type="number" v-model="item.quantity" min="1" class="w-12 border rounded text-center" />
            </div>
          </div>
          <button @click="removeFromCart(index)" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">Fjern</button>
        </div>

        <div class="text-right mt-6">
          <h3 class="text-xl font-bold">Total: DKK {{ cartTotal }}</h3>
          <button id="checkout"
            class="bg-light-green text-white font-semibold py-2 px-6 rounded mt-4 hover:bg-dark-green transition"
            @click="goToPayment"
          >
            Til Betaling
          </button>
        </div>
      </div>

      <p v-else class="text-center text-black mt-6">Din kurv er tom.</p>
    </section>
  </div>
</template>

<script>
import { useCartStore } from '../stores/cartStore';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'CartPage',
  setup() {
    const cartStore = useCartStore();
    const router = useRouter();
    
    // Log to confirm cartItems has data on page load
    console.log("Cart Page Cart Items:", cartStore.cartItems);

    // Use computed to ensure reactivity
    const cartItems = computed(() => cartStore.cartItems);
    const cartTotal = computed(() => cartStore.cartTotal);

    // Define remove function from the store
    const removeFromCart = (index) => {
      cartStore.removeFromCart(index);
    };

    // Navigate to the new Payment page
    const goToPayment = () => {
      router.push('/payment');
    };

    return {
      cartItems,
      cartTotal,
      removeFromCart,
      goToPayment,
    };
  },
};
</script>

<style scoped>
.cart-page-container {
  display: flex;
  flex-direction: column;
  min-height: 30vh; /* Make the container fill the viewport height */
}

.cart-content {
  flex-grow: 1; /* Allow the content to take up remaining space */
}
</style>
