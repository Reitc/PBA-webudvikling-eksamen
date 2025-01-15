<template>
  <div class="user-panel">
    <h2>User Information</h2>
    <div v-if="user">
      <p><strong>Name:</strong> {{ user.name }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <p><strong>Address:</strong> {{ address }}</p>
      <p><strong>Postal Code:</strong> {{ postalCode }}</p>
      <p><strong>City:</strong> {{ city }}</p>
      
      <button @click="toggleNameChange" class="button-style">Change Name</button>
      <div v-if="showNameChange" class="name-change">
        <input v-model="newName" placeholder="Edit name" class="input-style" />
        <button @click="updateName" class="button-style">Update Name</button>
      </div>
      
      <button @click="toggleAddressChange" class="button-style">Change Address</button>
      <div v-if="showAddressChange" class="address-change">
        <input v-model="address" placeholder="Address" class="input-style" />
        <input v-model="postalCode" placeholder="Postal Code" class="input-style" />
        <input v-model="city" placeholder="City" class="input-style" />
        <button @click="updateAddress" class="button-style">Update Address</button>
      </div>
      
      <button @click="togglePasswordChange" class="button-style">Change Password</button>
      <div v-if="showPasswordChange" class="password-change">
        <input v-model="currentPassword" type="password" placeholder="Current Password" class="input-style" />
        <input v-model="newPassword" type="password" placeholder="New Password" class="input-style" />
        <input v-model="confirmNewPassword" type="password" placeholder="Confirm New Password" class="input-style" />
        <button @click="changePassword" class="button-style">Update Password</button>
      </div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
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

.button-style {
  display: block;
  margin-bottom: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button-style:hover {
  background-color: #0056b3;
}

.password-change, .name-change, .address-change {
  margin-top: 20px;
}
</style>