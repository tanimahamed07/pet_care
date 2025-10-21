import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7l_wQco8CPotnNh_WQR2IIBxDFPuItu0",
  authDomain: "pet-care-93c05.firebaseapp.com",
  projectId: "pet-care-93c05",
  storageBucket: "pet-care-93c05.firebasestorage.app",
  messagingSenderId: "969004649083",
  appId: "1:969004649083:web:56fb5a05b7d3fdf5fb30de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);