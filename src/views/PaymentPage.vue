<template>
  <section class="container mx-auto mt-10 px-4 md:px-10" v-if="!orderCompleted">
    <h2 class="text-3xl font-bold text-navbar-green mb-6">Betaling</h2>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- LEFT: Billing & Shipping Form -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold text-dark-brown mb-4">Leveringsoplysninger</h3>
        <form @submit.prevent="handlePayment" class="space-y-4">
          <!-- Shipping Info -->
          <div class="mb-4">
            <label class="block text-gray-800 font-medium" for="fullName">Fulde Navn</label>
            <input
              v-model="fullName"
              type="text"
              id="fullName"
              class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-navbar-green"
              required
            />
          </div>

          <div class="mb-4">
            <label class="block text-gray-800 font-medium" for="address">Adresse</label>
            <input
              v-model="address"
              type="text"
              id="address"
              class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-navbar-green"
              required
            />
          </div>

          <div class="mb-4 flex space-x-4">
            <div class="flex-1">
              <label class="block text-gray-800 font-medium" for="postalCode">Postnr.</label>
              <input
                v-model="postalCode"
                type="text"
                id="postalCode"
                class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-navbar-green"
                required
              />
            </div>
            <div class="flex-1">
              <label class="block text-gray-800 font-medium" for="city">By</label>
              <input
                v-model="city"
                type="text"
                id="city"
                class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-navbar-green"
                required
              />
            </div>
          </div>

          <div class="mb-4">
            <label class="block text-gray-800 font-medium" for="country">Land</label>
            <select
              v-model="country"
              id="country"
              class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-navbar-green"
              required
            >
              <option value="DK">Danmark</option>
              <option value="US">USA</option>
              <option value="GB">Storbritannien</option>
              <option value="FR">Frankrig</option>
              <!-- Add other countries as needed -->
            </select>
          </div>

          <hr class="my-4" />

          <!-- Stripe Card Element -->
          <h3 class="text-xl font-semibold text-dark-brown mb-4">Betalingsoplysninger</h3>
          <div id="card-element" class="w-full p-2 border rounded"></div>
          <div id="card-errors" role="alert" class="text-red-500 mt-2"></div>

          <!-- Payment Button -->
          <div class="text-right mt-6">
            <button
              type="submit"
              class="bg-light-green text-white font-semibold py-3 px-6 rounded hover:bg-dark-green transition"
            >
              Betal nu
            </button>
          </div>
        </form>
      </div>

      <!-- RIGHT: Order Summary -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold text-dark-brown mb-4">Ordresammendrag</h3>

        <div v-for="(item, index) in cartItems" :key="index" class="flex justify-between border-b py-2">
          <div>
            <p class="font-medium text-gray-800">{{ item.name }}</p>
            <p class="text-sm text-gray-500">Antal: {{ item.quantity }}</p>
          </div>
          <!-- Show the item.price label, but remember discount is in the total below -->
          <p class="font-medium text-navbar-green">{{ item.price }}</p>
        </div>

        <!-- Subtotal row -->
        <div class="mt-4 flex justify-between items-center" v-if="cartSubtotal !== cartTotal">
          <p class="text-lg font-semibold">Subtotal:</p>
          <p class="text-xl font-bold text-navbar-green">DKK {{ cartSubtotal }}</p>
        </div>

        <!-- Discount row (only if user is Elite) -->
        <div class="mt-1 flex justify-between items-center text-red-600" v-if="isElite">
          <p class="text-lg font-semibold">Elite Rabat (10%):</p>
          <!-- Just showing the difference for clarity -->
          <p class="text-xl font-bold">- DKK {{ (cartSubtotal - cartTotal).toFixed(2) }}</p>
        </div>

        <!-- Final total (already discounted if Elite) -->
        <div class="mt-4 flex justify-between items-center">
          <p class="text-lg font-semibold">Total:</p>
          <p class="text-xl font-bold text-navbar-green">DKK {{ cartTotal }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Order Completion Screen -->
  <section
    v-else
    class="container mx-auto mt-10 px-4 md:px-10 text-center bg-white p-6 rounded-lg shadow-md"
  >
    <h2 class="text-3xl font-bold text-navbar-green mb-4">Tak for din ordre!</h2>
    <p class="text-lg text-gray-700 mb-6">
      Din betaling er gennemført, og vi er i gang med at pakke din ordre.
    </p>
    <router-link
      to="/"
      class="bg-light-green text-white font-semibold py-3 px-6 rounded hover:bg-dark-green transition"
    >
      Tilbage til Forsiden
    </router-link>
  </section>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { loadStripe } from '@stripe/stripe-js';
import { useCartStore } from '../stores/cartStore';
import { useAuthStore } from '../stores/authStore';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

export default {
  name: 'PaymentPage',
  setup() {
    // Stripe Checkout Integration (Frontend)
    const stripePromise = loadStripe('pk_test_51QafV7Ruib7MNBzAKFp8POBIkJ0r4LDGPXSvkNm4BHDuh0ffyRTbuFiDTZt072s8Oqp3Gc45xB0KVz27xoWrE67F00RkRvmhEq');
    const cartStore = useCartStore();
    const authStore = useAuthStore();
    const db = getFirestore();
    const fullName = ref('');
    const address = ref('');
    const postalCode = ref('');
    const city = ref('');
    const country = ref('Danmark');
    const orderCompleted = ref(false);
    const cartItems = computed(() => cartStore.cartItems);
    const cartSubtotal = computed(() => cartStore.cartSubtotal.toFixed(2));
    const cartTotal = computed(() => cartStore.cartTotal.toFixed(2));
    let stripe, elements, card;

    // Simple check if user is Elite
    const isElite = computed(() => authStore.user?.role === 'elite');

    onMounted(async () => {
      stripe = await stripePromise;
      elements = stripe.elements();
      card = elements.create('card');
      card.mount('#card-element');

      // Fetch user data from Firestore
      if (authStore.user) {
        const userDoc = await getDoc(doc(db, 'users', authStore.user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          fullName.value = authStore.user.displayName || '';
          address.value = userData.address || '';
          postalCode.value = userData.postalCode || '';
          city.value = userData.city || '';
        }
      }
    });

    const handlePayment = async () => {
      try {
        // Step 1: Fetch the client secret from Backend
        const response = await fetch('http://localhost:3000/create-payment-intent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ amount: Math.round(cartTotal.value * 100) }), // Send the amount in the request
        });

        const { clientSecret } = await response.json(); // Retrieve the clientSecret from the backend response

        // Step 2: Confirm the payment using the client secret
        const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: card,
            billing_details: {
              name: fullName.value,
              address: {
                line1: address.value,
                city: city.value,
                postal_code: postalCode.value,
                country: country.value,
              },
            },
          },
        });

        // Step 3: Handle payment result
        if (error) {
          console.error('Payment error:', error.message);
          alert(`Payment failed: ${error.message}`);
        } else if (paymentIntent.status === 'succeeded') {
          console.log('Payment succeeded:', paymentIntent);
          cartStore.cartItems.splice(0, cartStore.cartItems.length); // Clear the cart
          orderCompleted.value = true; // Show order completion screen
        }
      } catch (err) {
        console.error('Payment process error:', err.message);
        alert(`Payment process failed: ${err.message}`);
      }
    };

    return {
      fullName,
      address,
      postalCode,
      city,
      country,
      orderCompleted,
      cartItems,
      cartTotal,
      handlePayment,
      cartSubtotal,
      isElite,
    };
  },
};
</script>

<style scoped>
/* Add any custom styling here */
</style>