<template>
  <section class="container mt-10 mx-auto px-4 md:px10 flex items-center justify-center">
  <div class="user-panel w-1/2 bg-white border rounded-lg shadow-lg p-8 ">
    <h2 class="text-4xl font-bold text-dark-brown mb-4">Dine informationer</h2>
    <div v-if="user">
      <div class="flex items-center justify-between">
        <p class="text-lg text-black"><strong>Navn:</strong> {{ user.name }}</p>
        <button @click="toggleNameChange" class="bg-light-green text-l text-white font-semibold py-2 px-4 rounded hover:bg-white hover:text-dark-green transition">Ændre navn</button>
      </div>
      <div v-if="showNameChange" class="name-change">
        <input v-model="newName" placeholder="Nyt navn" class="input-style" />
        <button @click="updateName" class="bg-dark-green text-l text-white font-semibold py-2 px-4 rounded hover:bg-white hover:text-dark-green transition mb-6">Gem</button>
      </div>

      <div class="flex items-center justify-between">
        <div>
          <p class="text-lg text-black"><strong>Adresse:</strong> {{ address }}</p>
          <p class="text-lg text-black"><strong>Postnr:</strong> {{ postalCode }}</p>
          <p class="text-lg text-black"><strong>By:</strong> {{ city }}</p>
        </div>
        <div>
          <button @click="toggleAddressChange" class="bg-light-green text-l text-white font-semibold py-2 px-4 rounded hover:bg-white hover:text-dark-green transition">Ændre Adresse</button>
        </div>
      </div>
      <div v-if="showAddressChange" class="address-change">
        <input v-model="address" placeholder="Adresse" class="input-style" />
        <input v-model="postalCode" placeholder="Postnr" class="input-style" />
        <input v-model="city" placeholder="By" class="input-style" />
        <button @click="updateAddress" class="bg-dark-green text-l text-white font-semibold py-2 px-4 rounded hover:bg-white hover:text-dark-green transition mb-6">Gem</button>
      </div>

      <div class="flex items-center justify-between">
        <div></div>       
        <button @click="togglePasswordChange" class="bg-light-green text-l text-white font-semibold py-2 px-4 rounded hover:bg-white hover:text-dark-green transition">Skift kodeord</button>    
      </div>
      <div v-if="showPasswordChange" class="password-change">
        <input v-model="currentPassword" type="password" placeholder="Nuværende kodeord" class="input-style" />
        <input v-model="newPassword" type="password" placeholder="Nyt kodeord" class="input-style" />
        <input v-model="confirmNewPassword" type="password" placeholder="Bekræft nyt kodeord" class="input-style" />
        <button @click="changePassword" class="bg-dark-green text-l text-white font-semibold py-2 px-4 rounded hover:bg-white hover:text-dark-green transition mb-6">Gem</button>
      </div>
      
    </div>
    
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</section>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getAuth, onAuthStateChanged, updateProfile, reauthenticateWithCredential, EmailAuthProvider, updatePassword } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

export default {
  name: 'UserPanel',
  setup() {
    const user = ref(null);
    const newName = ref('');
    const address = ref('');
    const postalCode = ref('');
    const city = ref('');
    const currentPassword = ref('');
    const newPassword = ref('');
    const confirmNewPassword = ref('');
    const showPasswordChange = ref(false);
    const showNameChange = ref(false);
    const showAddressChange = ref(false);
    const auth = getAuth();
    const db = getFirestore();

    onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          user.value = { name: currentUser.displayName || 'New User', email: currentUser.email };
          address.value = userData.address || '';
          postalCode.value = userData.postalCode || '';
          city.value = userData.city || '';
        } else {
          const defaultName = 'New User';
          await updateProfile(currentUser, { displayName: defaultName });
          await setDoc(doc(db, 'users', currentUser.uid), { name: defaultName }, { merge: true });
          user.value = { name: defaultName, email: currentUser.email };
        }
      }
    });

    const updateName = async () => {
      if (user.value && newName.value) {
        await updateProfile(auth.currentUser, { displayName: newName.value });
        await setDoc(doc(db, 'users', auth.currentUser.uid), { name: newName.value }, { merge: true });
        user.value.name = newName.value;
        showNameChange.value = false;
      }
    };

    const updateAddress = async () => {
      if (user.value) {
        await setDoc(doc(db, 'users', auth.currentUser.uid), { address: address.value, postalCode: postalCode.value, city: city.value }, { merge: true });
        showAddressChange.value = false;
      }
    };

    const togglePasswordChange = () => {
      showPasswordChange.value = !showPasswordChange.value;
    };

    const toggleNameChange = () => {
      showNameChange.value = !showNameChange.value;
    };

    const toggleAddressChange = () => {
      showAddressChange.value = !showAddressChange.value;
    };

    const changePassword = async () => {
      if (newPassword.value !== confirmNewPassword.value) {
        alert("New passwords do not match");
        return;
      }

      const user = auth.currentUser;
      const credential = EmailAuthProvider.credential(user.email, currentPassword.value);

      try {
        await reauthenticateWithCredential(user, credential);
        await updatePassword(user, newPassword.value);
        alert("Password updated successfully");
        showPasswordChange.value = false;
      } catch (error) {
        alert("Error updating password: " + error.message);
      }
    };

    return { user, newName, address, postalCode, city, currentPassword, newPassword, confirmNewPassword, showPasswordChange, showNameChange, showAddressChange, updateName, updateAddress, togglePasswordChange, toggleNameChange, toggleAddressChange, changePassword };
  },
};
</script>

<style scoped>
.user-panel {
  padding: 20px;
  border: 1px solid #ccc;
}

.input-style {
  display: block;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
}

.password-change, .name-change, .address-change {
  margin-top: 20px;
}
</style>