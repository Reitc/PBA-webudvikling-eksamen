const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');

// Path to your service account key (located at the root of the project)
const serviceAccountPath = path.join(__dirname, 'cella-test-bachelor-webshop-541266371c3d.json');

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(require(serviceAccountPath)),
});

const db = admin.firestore();
const productsCollection = db.collection('products');

// Read products from JSON file
const productsFilePath = path.join(__dirname, 'products.json');

fs.readFile(productsFilePath, 'utf8', async (err, data) => {
  if (err) {
    console.error('Error reading products.json:', err);
    process.exit(1);
  }

  try {
    const products = JSON.parse(data);

    // Batch upload products
    const batch = db.batch();
    products.forEach(product => {
      // Use the product's id as the document ID to maintain consistency
      const docRef = productsCollection.doc(product.id.toString());
      batch.set(docRef, product);
    });

    await batch.commit();
    console.log(`Successfully uploaded ${products.length} products to Firestore.`);
  } catch (parseError) {
    console.error('Error parsing products.json:', parseError);
    process.exit(1);
  }
});