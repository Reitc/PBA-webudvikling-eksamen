<template>
  <section class="container mt-10 mx-auto px-4 md:px-10">
    <div class="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-dark-brown mb-6 text-center">Opret en ny konto</h2>
      <form @submit.prevent="handleRegister">
        <div class="mb-4">
          <label class="block text-black font-semibold mb-2" for="email">Email</label>
          <input
            v-model="email"
            type="email"
            id="email"
            class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-light-green"
            @input="validateEmail"
            :class="{ 'border-red-500': emailError }"
          />
          <p v-if="emailError" class="text-red-500 text-sm mt-1">{{ emailError }}</p>
        </div>
        <div class="mb-4">
          <label class="block text-black font-semibold mb-2" for="password">Adgangskode</label>
          <input
            v-model="password"
            type="password"
            id="password"
            class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-light-green"
            @input="validatePassword"
            :class="{ 'border-red-500': passwordError }"
          />
          <p v-if="passwordError" class="text-red-500 text-sm mt-1">{{ passwordError }}</p>
        </div>
        <div class="mb-6">
          <label class="block text-black font-semibold mb-2" for="confirmPassword">Bekræft adgangskode</label>
          <input
            v-model="confirmPassword"
            type="password"
            id="confirmPassword"
            class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-light-green"
            @input="validateConfirmPassword"
            :class="{ 'border-red-500': confirmPasswordError }"
          />
          <p v-if="confirmPasswordError" class="text-red-500 text-sm mt-1">{{ confirmPasswordError }}</p>
        </div>
        <button
          type="submit"
          class="w-full bg-light-green text-white font-semibold py-3 rounded-lg hover:bg-dark-green transition"
          :disabled="!isValid"
        >
          Opret konto
        </button>
      </form>
      <p class="mt-6 text-center text-black">
        Har du allerede en konto?
        <router-link to="/login" class="text-dark-green font-semibold hover:underline">
          Log ind her
        </router-link>
      </p>
    </div>
  </section>
</template>

<script>
import { ref, computed } from 'vue';
import { useAuthStore } from '../stores/authStore';
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';

export default {
  name: 'RegisterPage',
  setup() {
    const email = ref('');
    const password = ref('');
    const confirmPassword = ref('');
    const emailError = ref('');
    const passwordError = ref('');
    const confirmPasswordError = ref('');
    const authStore = useAuthStore();
    const router = useRouter();
    const toast = useToast();

    const validateEmail = () => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      emailError.value = email.value.trim() === '' 
        ? 'Email er påkrævet.' 
        : !emailPattern.test(email.value) 
          ? 'Indtast en gyldig email.' 
          : '';
    };

    const validatePassword = () => {
      passwordError.value = password.value.trim() === '' 
        ? 'Adgangskode er påkrævet.' 
        : password.value.length < 6 
          ? 'Adgangskode skal være mindst 6 tegn.' 
          : '';
    };

    const validateConfirmPassword = () => {
      confirmPasswordError.value = confirmPassword.value.trim() === '' 
        ? 'Bekræft adgangskode er påkrævet.' 
        : confirmPassword.value !== password.value 
          ? 'Adgangskoderne stemmer ikke overens.' 
          : '';
    };

    const isValid = computed(() => 
      !emailError.value && 
      !passwordError.value && 
      !confirmPasswordError.value && 
      email.value && 
      password.value && 
      confirmPassword.value
    );

    const handleRegister = async () => {
      validateEmail();
      validatePassword();
      validateConfirmPassword();

      if (!isValid.value) return;

      try {
        await authStore.register(email.value, password.value);
        toast.success('Tjek din email for at bekræfte din konto.');
        router.push('/login'); // Redirect to login page
      } catch (error) {
        toast.error(error.message || 'Registrering mislykkedes. Prøv igen.');
      }
    };

    return {
      email,
      password,
      confirmPassword,
      emailError,
      passwordError,
      confirmPasswordError,
      validateEmail,
      validatePassword,
      validateConfirmPassword,
      handleRegister,
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
