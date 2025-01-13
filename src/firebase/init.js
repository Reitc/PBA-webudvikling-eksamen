// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKbSY7jKqZTBE3mDcoEQ-pXWG2kfUhPis",
  authDomain: "cella-test-bachelor-webshop.firebaseapp.com",
  projectId: "cella-test-bachelor-webshop",
  storageBucket: "cella-test-bachelor-webshop.firebasestorage.app",
  messagingSenderId: "612340253229",
  appId: "1:612340253229:web:80409e12f8eb7807352ea4",
  measurementId: "G-X1W52SYSJY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the app instance for use in other files
export { app };
