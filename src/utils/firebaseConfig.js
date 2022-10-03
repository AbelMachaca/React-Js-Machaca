// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJQOASPEoqBqD4_0oYtCK_bN7AB27kIPE",
  authDomain: "tecnoconectados-566bd.firebaseapp.com",
  projectId: "tecnoconectados-566bd",
  storageBucket: "tecnoconectados-566bd.appspot.com",
  messagingSenderId: "156230810632",
  appId: "1:156230810632:web:7e5b5c9cb31de8f22325bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db
