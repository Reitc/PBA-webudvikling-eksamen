<template>
  <section class="container mt-10 mx-auto px-4 md:px-10">
    <h2 class="text-3xl font-bold text-left text-navbar-green mb-8">Admin Panel</h2>

    <!-- ====================== Admin Display ====================== -->
    <div class="bg-blog-post p-6 rounded-lg shadow-md mb-8">
    <h3 class="text-3xl font-bold text-left text-navbar-green mb-3">Administratorer</h3>

    <!-- Grid container for admins -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        v-for="admin in admins"
        :key="admin.id"
        class="flex items-center p-1 bg-white rounded-lg shadow-md mb-1"
      >
        <!-- Admin profile picture -->
        <img
          :src="admin.picture || fallbackLogo"
          alt="Admin Picture"
          class="w-16 h-16 rounded-full mr-4"
        />
        <!-- Admin information -->
        <div class="flex-1">
          <h3 class="text-xl font-semibold">{{ admin.name || 'No Name' }}</h3>
          <p class="text-gray-700">{{ admin.email }}</p>
          <p :class="{'text-green-500': admin.online, 'text-red-500': !admin.online}">
            {{ admin.online ? 'Online' : 'Offline' }}
          </p>
        </div>

        <!-- Direct message icon -->
        <a href="#" @click.prevent="openMessageModal(admin)" class="text-gray-500 hover:text-gray-700 mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12.713l11.985-6.713-11.985-6.713-11.985 6.713 11.985 6.713zm0 2.287l-12-6.75v11.75h24v-11.75l-12 6.75z"/>
          </svg>
        </a>
      </div>
    </div>


      <!-- Modal for sending direct message -->
      <div v-if="showMessageModal" class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-4">
        <div class="bg-white p-6 rounded-lg shadow-md max-w-md w-full relative">
          <h3 class="text-2xl font-semibold text-navbar-green mb-4">Send Besked til {{ selectedAdmin.name }}</h3>
          <form @submit.prevent="sendMessage">
            <div>
              <label class="block text-gray-700 font-semibold mb-2" for="message">Besked</label>
              <textarea
                v-model="message"
                id="message"
                class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navbar-green"
                required
              ></textarea>
            </div>
            <div class="flex justify-end space-x-4 mt-4">
              <button
                type="button"
                @click="closeMessageModal"
                class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded hover:bg-gray-400 transition"
              >
                Annuller
              </button>
              <button
                type="submit"
                class="bg-light-green text-white font-semibold py-2 px-4 rounded hover:bg-dark-green transition"
              >
                Send Besked
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- ====================== User Management ====================== -->
    <div class="bg-blog-post p-6 rounded-lg shadow-md mb-8 mt-8">
      <h3 class="text-2xl font-semibold text-navbar-green mb-4">Brugerstyring</h3>

      <!-- Responsive container -->
      <div class="overflow-x-auto">
        <table class="min-w-full table-auto bg-white border">
          <thead>
            <tr>
              <th class="px-4 py-3 border-b text-left">Email</th>
              <th class="px-4 py-3 border-b text-left hidden md:table-cell">Nuværende Rolle</th>
              <th class="px-4 py-3 border-b text-left">Skift Rolle</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(user, index) in users"
              :key="index"
              class="hover:bg-gray-50"
            >
              <td class="px-4 py-2 border-b">
                <span class="block font-medium text-gray-900">{{ user.email }}</span>
                <!-- Display role on small screens -->
                <span class="block text-sm text-gray-500 md:hidden capitalize">
                  Rolle: {{ user.role }}
                </span>
              </td>
              <td class="px-4 py-2 border-b capitalize hidden md:table-cell">
                {{ user.role }}
              </td>
              <td class="px-4 py-2 border-b">
                <!-- Dropdown for role selection -->
                <select
                  v-model="user.role"
                  @change="updateUserRole(user)"
                  class="border p-2 rounded w-full bg-white"
                >
                  <option value="regular">Regular</option>
                  <option value="elite">Elite</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- ====================== Messaging Section ====================== -->
    <div class="bg-blog-post p-6 rounded-lg shadow-md mb-8 mt-8">
      <h3 class="text-2xl font-semibold text-navbar-green mb-4">Fællesbeskeder</h3>
      <form @submit.prevent="sendBroadcastMessage">
        <label class="block text-gray-700 font-semibold mb-2">Besked</label>
        <textarea
          v-model="messageContent"
          class="border p-2 rounded w-full mb-4"
          placeholder="Skriv din besked her..."
        ></textarea>

        <button
          type="submit"
          class="bg-light-green text-white font-semibold py-2 px-4 rounded hover:bg-dark-green transition"
        >
          Send Besked til Alle
        </button>
      </form>

      <!-- Show all messages (basic approach, admin sees all messages) -->
      <div class="mt-8">
        <h4 class="text-xl font-bold text-navbar-green mb-2">All Messages</h4>
        <div
          v-for="(msg, idx) in allMessages"
          :key="idx"
          class="bg-white p-4 rounded shadow mb-2"
        >
          <p class="text-sm text-gray-500 mb-1">
            <strong>Fra:</strong> {{ msg.from }}
            <strong>Til:</strong> {{ msg.to === 'all' ? 'Alle' : msg.to }}
            <strong>Dato:</strong> {{ formatTimestamp(msg.timestamp) }}
          </p>
          <p class="text-gray-800">{{ msg.content }}</p>
        </div>
      </div>
    </div>

    <!-- ====================== Add New Product Form ====================== -->
    <div class="bg-blog-post p-6 rounded-lg shadow-md mb-8">
      <h3 class="text-2xl font-semibold text-navbar-green mb-4">Tilføj Ny Produkt</h3>
      <form @submit.prevent="handleAddProduct" class="space-y-4">
        <!-- Input fields for product details -->
        <div>
          <label class="block text-gray-700 font-semibold mb-2" for="name">Navn</label>
          <input
            v-model="newProduct.name"
            type="text"
            id="name"
            class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navbar-green"
            required
          />
        </div>
        
        <div>
          <label class="block text-gray-700 font-semibold mb-2" for="description">Kort Beskrivelse</label>
          <textarea
            v-model="newProduct.description"
            id="description"
            class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navbar-green"
            required
          ></textarea>
        </div>

        <div>
          <label class="block text-gray-700 font-semibold mb-2" for="fullDescription">Fuldbeskrivelse</label>
          <textarea
            v-model="newProduct.fullDescription"
            id="fullDescription"
            class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navbar-green"
          ></textarea>
        </div>

        <div class="flex gap-4">
          <div class="flex-1">
            <label class="block text-gray-700 font-semibold mb-2" for="price">Pris</label>
            <input
              v-model="newProduct.price"
              type="text"
              id="price"
              placeholder="e.g. DKK 250.00 eller 'Kontakt for pris'"
              class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navbar-green"
            />
          </div>
          <div class="flex-1">
            <label class="block text-gray-700 font-semibold mb-2" for="image">Billede (URL)</label>
            <input
              v-model="newProduct.image"
              type="text"
              id="image"
              placeholder="/img/produkter/epinutrics_epic.jpg"
              class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navbar-green"
            />
          </div>
        </div>

        <!-- Updated Categories Dropdown -->
        <div>
          <label class="block text-gray-700 font-semibold mb-2" for="categories">Kategorier</label>
          <select
            id="categories"
            v-model="selectedCategories"
            multiple
            class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navbar-green"
          >
            <option
              v-for="category in availableCategories"
              :key="category"
              :value="category"
            >
              {{ category }}
            </option>
          </select>
        </div>

        <!-- Updated Subcategories Dropdown -->
        <div>
          <label class="block text-gray-700 font-semibold mb-2" for="subcategories">Underkategorier</label>
          <select
            id="subcategories"
            v-model="selectedSubcategories"
            multiple
            class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navbar-green"
          >
            <option
              v-for="subcategory in availableSubcategories"
              :key="subcategory"
              :value="subcategory"
            >
              {{ subcategory }}
            </option>
          </select>
        </div>

        <button
          type="submit"
          class="bg-light-green text-white font-semibold py-2 px-4 rounded hover:bg-dark-green transition"
        >
          Tilføj Produkt
        </button>
      </form>
    </div>

    <!-- ====================== Table displaying all products ====================== -->
    <div class="overflow-x-auto">
      <table class="min-w-full bg-blog-post border">
        <!-- Table Headers for ID, Name, Category, etc -->
        <thead>
          <tr>
            <th class="px-6 py-3 border-b text-left">#</th>
            <th class="px-6 py-3 border-b text-left">Produktnavn</th>
            <th class="px-6 py-3 border-b text-left">Kategori(er)</th>
            <th class="px-6 py-3 border-b text-left">Udvalgt</th>
            <th class="px-6 py-3 border-b text-left">Handlinger</th>
          </tr>
        </thead>
        <!-- Table Rows -->
        <tbody>
          <tr
            v-for="product in allProducts"
            :key="product.id"
            class="hover:bg-gray-50"
          >
            <!-- Display product details for edit or delete -->
            <td class="px-6 py-4 border-b">{{ product.id }}</td>
            <td class="px-6 py-4 border-b">{{ product.name }}</td>
            <td class="px-6 py-4 border-b">{{ product.categories.join(', ') }}</td>
            <td class="px-6 py-4 border-b">
              <input
                type="checkbox"
                :checked="isFeatured(product.id)" 
                @change="toggleFeatured(product.id)"
              />
            </td>
            <td class="px-6 py-4 border-b">
              <!-- Edit Button -->
              <button
                class="bg-blue-500 text-white font-semibold py-1 px-3 rounded hover:bg-blue-600 transition mr-2"
                @click="openEditModal(product)"
              >
                Rediger
              </button>

              <!-- Delete Button -->
              <button
                class="bg-red-500 text-white font-semibold py-1 px-3 rounded hover:bg-red-600 transition"
                @click="handleDelete(product.id)"
              >
                Slet
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- ====================== Modal for editing product details ====================== -->
    <div v-if="showEditModal" class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-4">
      <div class="bg-white p-6 rounded-lg shadow-md max-w-md w-full relative">
        <h3 class="text-2xl font-semibold text-navbar-green mb-4">Rediger Produkt</h3>
        <form @submit.prevent="handleEditProduct" class="space-y-4">
          <!-- Input fields for editing product details -->
          <div>
            <label class="block text-gray-700 font-semibold mb-2" for="editName">Navn</label>
            <input
              v-model="editProductData.name"
              type="text"
              id="editName"
              class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navbar-green"
              required
            />
          </div>
          
          <div>
            <label class="block text-gray-700 font-semibold mb-2" for="editDescription">Kort Beskrivelse</label>
            <textarea
              v-model="editProductData.description"
              id="editDescription"
              class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navbar-green"
              required
            ></textarea>
          </div>

          <div>
            <label class="block text-gray-700 font-semibold mb-2" for="editFullDescription">Fuldbeskrivelse</label>
            <textarea
              v-model="editProductData.fullDescription"
              id="editFullDescription"
              class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navbar-green"
            ></textarea>
          </div>

          <div class="flex gap-4">
            <div class="flex-1">
              <label class="block text-gray-700 font-semibold mb-2" for="editPrice">Pris</label>
              <input
                v-model="editProductData.price"
                type="text"
                id="editPrice"
                class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navbar-green"
              />
            </div>
            <div class="flex-1">
              <label class="block text-gray-700 font-semibold mb-2" for="editImage">Billede (URL)</label>
              <input
                v-model="editProductData.image"
                type="text"
                id="editImage"
                class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navbar-green"
              />
            </div>
          </div>

          <!-- Updated Categories Dropdown in Edit Modal -->
          <div>
            <label class="block text-gray-700 font-semibold mb-2" for="editCategories">Kategorier</label>
            <select
              id="editCategories"
              v-model="selectedEditCategories"
              multiple
              class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navbar-green"
            >
              <option
                v-for="category in availableCategories"
                :key="category"
                :value="category"
              >
                {{ category }}
              </option>
            </select>
          </div>

          <!-- Updated Subcategories Dropdown in Edit Modal -->
          <div>
            <label class="block text-gray-700 font-semibold mb-2" for="editSubcategories">Underkategorier</label>
            <select
              id="editSubcategories"
              v-model="selectedEditSubcategories"
              multiple
              class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navbar-green"
            >
              <option
                v-for="subcategory in availableSubcategories"
                :key="subcategory"
                :value="subcategory"
              >
                {{ subcategory }}
              </option>
            </select>
          </div>

          <div class="flex justify-end space-x-4">
            <button
              type="button"
              @click="closeEditModal"
              class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded hover:bg-gray-400 transition"
            >
              Annuller
            </button>
            <button
              type="submit"
              class="bg-light-green text-white font-semibold py-2 px-4 rounded hover:bg-dark-green transition"
            >
              Gem ændringer
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { useProductStore } from '../stores/productStore';
import { useFeaturedProductsStore } from '../stores/featuredProductsStore';
import { ref, onMounted } from 'vue';
import { useAuthStore } from '../stores/authStore'; // Import the auth store
import {
  getFirestore,
  collection,
  getDocs,
  updateDoc,
  doc,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { app } from '../firebase/init';
import { computed } from 'vue';
import fallbackLogo from '../assets/img/logo.png';

export default {
  name: 'AdminPanel',
  setup() {
    const authStore = useAuthStore(); // Access the auth store
    const db = getFirestore(app);
    const usersCollection = collection(db, 'users');
    const messagesCollection = collection(db, 'messages');

    // ==================== Admin Display ====================

    const showMessageModal = ref(false);
    const selectedAdmin = ref(null);
    const message = ref('');

    const openMessageModal = (admin) => {
      selectedAdmin.value = admin;
      showMessageModal.value = true;
    };

    const closeMessageModal = () => {
      showMessageModal.value = false;
      message.value = '';
    };

    const sendMessage = async () => {
      if (!selectedAdmin.value || !message.value.trim()) return;

      const currentUserEmail = authStore.user.email; // Get the current user's email from the auth store

      const newMsg = {
        from: currentUserEmail, // Dynamic sender
        to: selectedAdmin.value.email,
        content: message.value.trim(),
        timestamp: serverTimestamp(),
      };
      await addDoc(messagesCollection, newMsg);

      // Optional: You can implement a notification or confirmation here
      closeMessageModal();
    };

    // ==================== User Management ====================
    const users = ref([]);
    const admins = computed(() => {
      // This ensures admins is always in sync with users
      return users.value.filter(user => user.role === 'admin');
    });

    const messageContent = ref('');
    const allMessages = ref([]); // to store all messages

    // Load all users from Firestore
    const loadUsers = async () => {
      const querySnapshot = await getDocs(usersCollection);
      const all = [];
      querySnapshot.forEach((docSnap) => {
        all.push({ id: docSnap.id, ...docSnap.data() });
      });
      users.value = all;
    };

    // New method to update the user role in Firestore
    const updateUserRole = async (user) => {
      const userDocRef = doc(db, 'users', user.id);
      try {
        // Only allow if *this* user is admin, otherwise block or ignore
        if (!authStore.isAdmin()) {
          throw new Error('Insufficient permissions');
        }
        await updateDoc(userDocRef, { role: user.role });
        console.log(`User role updated to: ${user.role}`);
      } catch (error) {
        console.error('Error updating user role:', error);
      }
    };

    // ==================== Messaging Section ====================
    const sendBroadcastMessage = async () => {
      if (!messageContent.value.trim()) return;

      const currentUserEmail = authStore.user.email; // Get the current user's email

      const newMsg = {
        from: currentUserEmail, // Dynamic sender
        to: 'all', // Broadcast to all users
        content: messageContent.value.trim(),
        timestamp: serverTimestamp(),
      };
      await addDoc(messagesCollection, newMsg);

      // Clear input
      messageContent.value = '';
      // Reload messages
      loadMessages();
    };

    // Load all messages
    const loadMessages = async () => {
      const querySnapshot = await getDocs(messagesCollection);
      const all = [];
      querySnapshot.forEach((docSnap) => {
        all.push(docSnap.data());
      });
      // Sort messages by timestamp desc
      all.sort((a, b) => (b.timestamp?.seconds || 0) - (a.timestamp?.seconds || 0));
      allMessages.value = all;
    };

    // ==================== Product Management ====================
    const productStore = useProductStore();
    const featuredStore = useFeaturedProductsStore();

    // Extract specific methods and properties from the product and featured stores
    const { allProducts, addProduct, updateProduct, deleteProduct } = productStore;
    const { featuredProductIds, addFeaturedProduct, removeFeaturedProduct } = featuredStore;

    // Define available categories and subcategories
    const availableCategories = ref(['mennesker', 'heste', 'hunde', 'katte']);
    const availableSubcategories = ref(['Vitaminer & Mineraler', 'Fordøjelse', 'Collagen', 'Olie']);

    // New product form fields (via Reactive object)
    const newProduct = ref({
      name: '',
      description: '',
      fullDescription: '',
      price: 'DKK 250.00',
      image: '',
      categories: [],
      subcategories: [],
    });

    // Selected categories and subcategories from dropdowns
    const selectedCategories = ref([]);
    const selectedSubcategories = ref([]);

    // Handles adding a new product
    const handleAddProduct = () => {
      // Assign selected categories and subcategories directly
      newProduct.value.categories = selectedCategories.value;
      newProduct.value.subcategories = selectedSubcategories.value;

      // Call the addProduct function from the store
      addProduct({ ...newProduct.value });

      // Reset form inputs
      newProduct.value = {
        name: '',
        description: '',
        fullDescription: '',
        price: 'DKK 250.00',
        image: '',
        categories: [],
        subcategories: [],
      };
      selectedCategories.value = [];
      selectedSubcategories.value = [];
    };

    // Edit Product Modal logic
    const showEditModal = ref(false);
    const editProductData = ref({
      id: null,
      name: '',
      description: '',
      fullDescription: '',
      price: '',
      image: '',
      categories: [],
      subcategories: [],
    });
    const selectedEditCategories = ref([]);
    const selectedEditSubcategories = ref([]);

    // Opens the edit modal with pre-filled product data
    const openEditModal = (product) => {
      editProductData.value = { ...product };
      selectedEditCategories.value = product.categories;
      selectedEditSubcategories.value = product.subcategories;
      showEditModal.value = true;
    };

    const closeEditModal = () => {
      showEditModal.value = false;
    };

    const handleEditProduct = () => {
      // Assign selected categories and subcategories directly
      editProductData.value.categories = selectedEditCategories.value;
      editProductData.value.subcategories = selectedEditSubcategories.value;

      updateProduct(editProductData.value);
      closeEditModal();
    };

    // Delete Product
    const handleDelete = (productId) => {
      if (confirm('Er du sikker på at du vil slette dette produkt?')) {
        deleteProduct(productId);
      }
    };

    // Featured handling
    const isFeatured = (productId) => {
      return featuredProductIds.includes(productId);
    };

    const toggleFeatured = (productId) => {
      if (isFeatured(productId)) {
        removeFeaturedProduct(productId);
      } else {
        addFeaturedProduct(productId);
      }
    };

    // Utility function to format timestamp
    const formatTimestamp = (timestamp) => {
      if (!timestamp) return 'N/A';
      const date = timestamp.toDate();
      return date.toLocaleString();
    };

    onMounted(() => {
      loadUsers();
      loadMessages();
    });

    // Expose methods and data for template
    return {
      fallbackLogo,
      // ==================== Admin Display ====================
      admins,
      showMessageModal,
      selectedAdmin,
      message,
      openMessageModal,
      closeMessageModal,
      sendMessage,

      // ==================== User Management ====================
      users,
      updateUserRole,
      loadUsers,

      // ==================== Messaging Section ====================
      messageContent,
      sendBroadcastMessage,
      allMessages,

      // ==================== Product Management ====================
      allProducts,
      newProduct,
      availableCategories,
      availableSubcategories,
      selectedCategories,
      selectedSubcategories,
      handleAddProduct,
      showEditModal,
      editProductData,
      selectedEditCategories,
      selectedEditSubcategories,
      openEditModal,
      closeEditModal,
      handleEditProduct,
      handleDelete,
      isFeatured,
      toggleFeatured,

      // ==================== Utility ====================
      formatTimestamp,
    };
  },
};
</script>

<style scoped>
.bg-blog-post {
  background-color: #efede4; 
}
</style>
