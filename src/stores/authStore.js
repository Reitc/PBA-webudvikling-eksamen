import { defineStore } from 'pinia';
import { ref } from 'vue';
import { app } from '../firebase/init';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut,
} from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore'; 

const auth = getAuth(app);
const db = getFirestore(app);

export const useAuthStore = defineStore('auth', () => {
  const user = ref(JSON.parse(localStorage.getItem('user')) || null);

  const register = async (email, password) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const firebaseUser = userCredential.user;

    // Store user document in Firestore
    const userData = {
      email: firebaseUser.email,
      role: 'regular', //  <-- By default new users are "regular"
      verified: firebaseUser.emailVerified,
      createdAt: new Date().toISOString(),
    };
    await setDoc(doc(db, 'users', firebaseUser.uid), userData);

    await sendEmailVerification(firebaseUser);
    
    // Save minimal info locally
    user.value = {
      uid: firebaseUser.uid,
      email: firebaseUser.email,
      role: 'regular',
      verified: firebaseUser.emailVerified,
    };
    localStorage.setItem('user', JSON.stringify(user.value));
  };

  const login = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const firebaseUser = userCredential.user;

    // If the user has not verified their email block them
    if (!firebaseUser.emailVerified) {
      throw new Error('Email er ikke bekræftet. Check din indbakke.');
    }

    // AFTER sign-in, fetch user doc from Firestore to get their role
    const docRef = doc(db, 'users', firebaseUser.uid);
    const userDocSnap = await getDoc(docRef);

    if (!userDocSnap.exists()) {
      // Should rarely happen, means no user doc found
      throw new Error('Ingen bruger fundet. Kontakt support.');
    }

    const userData = userDocSnap.data();

    user.value = {
      uid: firebaseUser.uid,
      email: firebaseUser.email,
      role: userData.role,          
      verified: firebaseUser.emailVerified
    };
    localStorage.setItem('user', JSON.stringify(user.value));
  };

  const logout = async () => {
    await signOut(auth);
    user.value = null;
    localStorage.removeItem('user');
  };

  const isAuthenticated = () => user.value !== null;
  const isVerified = () => user.value?.verified;
  const isAdmin = () => user.value?.role === 'admin';

  return {
    user,
    register,
    login,
    logout,
    isAuthenticated,
    isVerified,
    isAdmin,
  };
});