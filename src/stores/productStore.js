import { ref } from 'vue';
// Import Firestore functions
import { getFirestore, collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { app } from '../firebase/init'; // Make sure to export `app` from init.js

// Initialize Firestore database and reference to the 'products' collection
const db = getFirestore(app);
const productsCollection = collection(db, 'products');

export const useProductStore = () => {
  // Reactive reference/variable to store fetched products
  const allProducts = ref([]);

  // Fetch products from Firestore and update `allProducts`
  const fetchProducts = async () => {
    const querySnapshot = await getDocs(productsCollection);
    const products = [];
    querySnapshot.forEach((docSnap) => {

      // "docSnap.data()" contains the product fields
      const productData = docSnap.data();
      products.push({
        ...productData,
        id: docSnap.id,  
      });
    });
    allProducts.value = products; // Save the fetched products to be used in the app
  };

  // Load products from Firestore as soon as the store is created
  fetchProducts().catch(console.error);

  // Adds a new product to Firestore and store (the product list we see on the page)
  const addProduct = async (newProduct) => {
    // Generate a unique ID client-side or rely on Firestore's auto-ID
    // Remove the line that generated ID from array since Firestore does it
    const docRef = await addDoc(productsCollection, {
      ...newProduct,      
    });

    // Firestore auto-generated ID can be obtained via docRef.id
    const addedProduct = { ...newProduct, id: docRef.id }; // Combine the product details with Firestore's generated ID
    allProducts.value.push(addedProduct); // Update the local list of products
  };

  // Updates an existing product in Firestore and local store
  const updateProduct = async (updatedProduct) => {
    // If doc IDs are the same as product IDs, use that:
    const docRef = doc(db, 'products', updatedProduct.id);
    const updatedData = { ...updatedProduct };
    delete updatedData.id; 

    await updateDoc(docRef, updatedData);
    
    // Find the index of the product in the local list that matches the updated product's ID:
    const index = allProducts.value.findIndex(p => p.id === updatedProduct.id);
    if (index !== -1) {
      allProducts.value[index] = { ...updatedProduct }; // Update locally
    }
  };

  // Delete a product from Firestore and remove it locally
  const deleteProduct = async (productId) => {
    const docRef = doc(db, 'products', productId.toString());
    await deleteDoc(docRef);

    allProducts.value = allProducts.value.filter(p => p.id !== productId);
  };

  // Filter products by category
  const getProductsByCategory = (category) => {
    return allProducts.value.filter((product) =>
      product.categories.includes(category)
    );
  };

  // Filter products by category and subcategory
  const getProductsByCategoryAndSubcategory = (category, subcategory) => {
    return allProducts.value.filter(
      (product) =>
        product.categories.includes(category) &&
        product.subcategories.includes(subcategory)
    );
  };

  // Get unique subcategories for a specific category
  const getSubcategoriesByCategory = (category) => {
    const subcategoriesSet = new Set();
    allProducts.value.forEach((product) => {
      if (product.categories.includes(category)) {
        if (product.subcategories.length > 0) {
          product.subcategories.forEach((subcat) => subcategoriesSet.add(subcat));
        }
      }
    });
    return Array.from(subcategoriesSet);
  };

  return {
    allProducts,
    getProductsByCategory,
    getProductsByCategoryAndSubcategory,
    getSubcategoriesByCategory,
    addProduct,
    updateProduct,
    deleteProduct,
  };
};