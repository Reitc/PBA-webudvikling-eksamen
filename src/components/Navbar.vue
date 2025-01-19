<template>
  <nav class="flex justify-between items-center flex-nowrap bg-dark-brown p-4 sm:p-0 sm:px-5">

    <div id="user-nav" class="flex w-full sm:w-auto items-center justify-center sm:justify-start sm:flex-row flex-row space-y-0 space-x-1 sm:space-x-2 p-1">
      <template v-if="isAuthenticated">
        <span class="text-base text-gray-300 font-light">Velkommen, {{ userEmail }}</span>
        <span class="text-gray-500 hidden sm:inline">|</span>
        <button @click="handleLogout" class="text-base text-gray-300 font-light hover:text-gray-400">
          Log ud
        </button>

        <!-- Add Admin Link for Authenticated Users -->
        <span class="text-white hidden sm:inline">|</span>

        <router-link id="admin-link"
          to="/admin"
          class="text-base text-whitefont-light hover:text-light-brown"
        >
          Admin Panel
        </router-link>

        <span class="text-white hidden sm:inline">|</span>

        <router-link id="user-link"
          to="/user-panel"
          class="text-base text-whitefont-light hover:text-light-brown"
        >
          Brugerside
        </router-link>

      </template>

      <template v-else>
        <router-link id="login-link"
          to="/login"
          class="text-base text-white font-extralight hover:text-light-brown"
        >
          Login
        </router-link>
        <span class="text-white hidden sm:inline">|</span>
        <router-link id="register-link"
          to="/register"
          class="text-base text-white font-light hover:text-light-brown"
        >
          Registrere
        </router-link>
      </template>
    </div>


    <div id="some-links" class="flex justify-center sm:w-auto sm:justify-end space-x-1 sm:space-x-2 mt- sm:mt-0">
      <a href="https://instagram.com" aria-label="Instagram" class="text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="white" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
          <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
        </svg>
      </a>
      <a href="https://facebook.com" aria-label="Facebook" class="text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="white" viewBox="0 0 24 24">
          <path d="M12 2.04c-5.507 0-10 4.493-10 10.003 0 4.991 3.657 9.127 8.437 9.87v-6.987h-2.54v-2.883h2.54v-2.189c0-2.506 1.493-3.894 3.777-3.894 1.094 0 2.239.195 2.239.195v2.465h-1.261c-1.241 0-1.627.771-1.627 1.562v1.861h2.771l-.443 2.883h-2.328v6.987c4.781-.742 8.437-4.879 8.437-9.87 0-5.51-4.493-10.003-10-10.003z" />
        </svg>
      </a>
      <a href="https://linkedin.com" aria-label="LinkedIn" class="text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="white" viewBox="0 0 50 50">
        <path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M18,35h-4V20h4V35z M16,17 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C18,16.105,17.105,17,16,17z M37,35h-4v-5v-2.5c0-1.925-1.575-3.5-3.5-3.5 S26,25.575,26,27.5V35h-4V20h4v1.816C27.168,20.694,28.752,20,30.5,20c3.59,0,6.5,2.91,6.5,6.5V35z"></path>
    </svg>
      </a>
    </div>
    
  </nav>
</template>

<script>
import { useAuthStore } from '../stores/authStore';
import { computed } from 'vue';

export default {
  name: 'Navbar',
  setup() {
    const authStore = useAuthStore();

    const handleLogout = () => {
      authStore.logout();
    };

    // Check if user is logged in (via computed property that depends on the authentication store's state)
    const isAuthenticated = computed(() => authStore.isAuthenticated());

    // Get logged-in user's email (as a computed property)
    const userEmail = computed(() => authStore.user?.email);

    return {
      isAuthenticated,
      userEmail,
      handleLogout,
    };
  },
};
</script>

<style scoped>
/* Add any specific styles here if needed 

@media (min-width: 1024px) { /* For large screens and up 
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

@media (max-width: 639px) { /* For extra small screens 
  nav {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    padding: 0px 10px;
    padding-bottom: 5px;
  }
  #user-nav {
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: baseline;
    justify-content: flex-start;
  }

  #admin-link {
    margin-left: 5px;
  }

  #login-link {
    margin-right: 5px;
  }

  #register-link {
    margin-left: 5px;
  }

  #some-links {
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    margin-bottom: 2px;
  }
} */
</style>