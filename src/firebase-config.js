import { initializeApp } from 'firebase/app'; // Import initializeApp function from firebase
import { getAuth } from 'firebase/auth'; // Import getAuth function from firebase
import { getFirestore } from 'firebase/firestore'; // Import getFirestore function from firebase
const firebaseConfig = {
    apiKey: "AIzaSyAdLiGKHuNjhxYw3OkO6OekNMK-ubY15YE",
    authDomain: "authentication-12527.firebaseapp.com",
    projectId: "authentication-12527",
    storageBucket: "authentication-12527.appspot.com",
    messagingSenderId: "724397410503",
    appId: "1:724397410503:web:6293c60e3fc0da60c9d6e2",
    measurementId: "G-4BZ7XN1XJF"
  };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig); // Use initializeApp function
const auth = getAuth(firebaseApp); // Use getAuth function
const db = getFirestore(firebaseApp); // Use getFirestore function

export { auth, db };
 