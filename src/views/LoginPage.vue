<template>
  <section class="container mt-10 mx-auto px-4 md:px-10">
    <div class="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-dark-brown mb-6 text-center">Log ind på din konto</h2>
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label class="block text-black font-semibold mb-2" for="email">Email</label>
          <input
            v-model="email"
            type="email"
            id="email"
            class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navbar-green"
            @input="validateEmail"
            :class="{ 'border-red-500': emailError }"
          />
          <p v-if="emailError" class="text-red-500 text-sm mt-1">{{ emailError }}</p>
        </div>
        <div class="mb-6">
          <label class="block text-black font-semibold mb-2" for="password">Adgangskode</label>
          <input
            v-model="password"
            type="password"
            id="password"
            class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navbar-green"
            @input="validatePassword"
            :class="{ 'border-red-500': passwordError }"
          />
          <p v-if="passwordError" class="text-red-500 text-sm mt-1">{{ passwordError }}</p>
        </div>
        <button
          type="submit"
          class="w-full bg-light-green text-white font-semibold py-3 rounded-lg hover:bg-dark-green transition"
          :disabled="!isValid"
        >
          Log ind
        </button>
      </form>
      <p class="mt-6 text-center text-dark-brown">
        Har du ikke en konto?
        <router-link to="/register" class="text-dark-green font-semibold hover:underline">
          Registrer dig her
        </router-link>
      </p>
    </div>
  </section>
</template>

<script>
import { ref, computed } from 'vue';
import { useAuthStore } from '../stores/authStore';
import { useRouter } from 'vue-router';

export default {
  name: 'LoginPage',
  setup() {
    const email = ref('');
    const password = ref('');
    const emailError = ref('');
    const passwordError = ref('');
    const authStore = useAuthStore();
    const router = useRouter();

    // Validation
    const validateEmail = () => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      emailError.value = email.value.trim() === '' 
        ? 'Email er påkrævet.' 
        : !emailPattern.test(email.value) 
          ? 'Indtast en gyldig email.' 
          : '';
    };

    // Validation
    const validatePassword = () => {
      passwordError.value = password.value.trim() === '' 
        ? 'Adgangskode er påkrævet.' 
        : password.value.length < 6 
          ? 'Adgangskode skal være mindst 6 tegn.' 
          : '';
    };

    const isValid = computed(() => !emailError.value && !passwordError.value && email.value && password.value);

    const handleLogin = async () => {
      validateEmail();
      validatePassword();
      if (!isValid.value) return;

      try {
        await authStore.login(email.value, password.value);
        // ensuring users land on the page they wanted to visit initially (if such a destination exists)
        const redirectPath = router.currentRoute.value.query.redirect || '/'; 
        // Redirect to homepage after successful login if no specific destination was stored
        router.push(redirectPath); 
      } catch (error) {
        // Handle login error (e.g., show a notification)
        console.error('Login failed:', error);
      }
    };

    return {
      email,
      password,
      emailError,
      passwordError,
      validateEmail,
      validatePassword,
      handleLogin,
      isValid,
    };
  },
};
</script>

<style scoped>
.bg-blog-post {
  background-color: #efede4;
}
</style>
