// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBHyuGAnU7qKxg6I8nXHt8cUGSfPxxOUU",
  authDomain: "casacraft-a2f3f.firebaseapp.com",
  projectId: "casacraft-a2f3f",
  storageBucket: "casacraft-a2f3f.firebasestorage.app",
  messagingSenderId: "600473643081",
  appId: "1:600473643081:web:d0228ebe0a716b1d24b798",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
