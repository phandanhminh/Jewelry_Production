// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp as firestoreServerTimestamp } from "firebase/firestore";
// Import other Firebase services you need (e.g., getAuth, getStorage, etc.)

const firebaseConfig = {
    apiKey: "AIzaSyAb803OCxFjrZth4iT5tbVSFesPqoJojmE",
    authDomain: "chatofjewelryproductionproject.firebaseapp.com",
    projectId: "chatofjewelryproductionproject",
    storageBucket: "chatofjewelryproductionproject.appspot.com",
    messagingSenderId: "456422997905",
    appId: "1:456422997905:web:8a57b85b2caf0e69d7a430",
    measurementId: "G-TH0L66GT7H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const serverTimestamp = firestoreServerTimestamp;

// Initialize other Firebase services as needed (e.g., auth, storage)

export { db, serverTimestamp };
