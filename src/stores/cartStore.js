import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';
import { useAuthStore } from './authStore';

export const useCartStore = defineStore('cart', () => {
  const authStore = useAuthStore();
  const cartItems = ref(loadCartFromStorage());

  // Add to cart, remove from cart remain unchanged...
  const addToCart = (product) => {
    const existingItem = cartItems.value.find((item) => item.id === product.id && item.name === product.name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cartItems.value.push({ ...product, quantity: 1 });
    }
  };

  const removeFromCart = (index) => {
    cartItems.value.splice(index, 1);
  };

  // 1) Compute the raw subtotal
  const cartSubtotal = computed(() => {
    return cartItems.value.reduce((sum, item) => {
      // Skip items that have "Kontakt for pris" or are otherwise un-parseable
      if (item.price.toLowerCase().includes('kontakt')) {
        return sum;
      }
      // Attempt to parse numeric price from "DKK 250.00"
      const numericPrice = parseFloat(
        item.price
          .toLowerCase()
          .replace('dkk', '')
          .replace(',', '')
          .trim()
      );
      if (!isNaN(numericPrice)) {
        return sum + numericPrice * item.quantity;
      }
      return sum;
    }, 0);
  });

  // 2) Compute discount if user is Elite
  const cartTotal = computed(() => {
    const isElite = authStore.user?.role === 'elite';
    const discountFactor = isElite ? 0.9 : 1; // 10% discount
    return parseFloat((cartSubtotal.value * discountFactor).toFixed(2));
  });

  // Persist cart to localStorage
  watch(
    cartItems,
    (newCartItems) => {
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    },
    { deep: true }
  );

  function loadCartFromStorage() {
    const storedCart = localStorage.getItem('cartItems');
    return storedCart ? JSON.parse(storedCart) : [];
  }

  return {
    cartItems,
    cartSubtotal,
    cartTotal,
    addToCart,
    removeFromCart,
  };
});