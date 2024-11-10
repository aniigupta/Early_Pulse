// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import getAuth from Firebase Auth

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfzxwRa_ILjs5URydxoyviKB1NMU1QzZE",
  authDomain: "hackwithinfy-3e8b7.firebaseapp.com",
  projectId: "hackwithinfy-3e8b7",
  storageBucket: "hackwithinfy-3e8b7.firebasestorage.app",
  messagingSenderId: "426028777564",
  appId: "1:426028777564:web:33b682ebc9fd18149f2699",
  measurementId: "G-MDCWK5LV67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Pass the app instance to getAuth
export default app;
