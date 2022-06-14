// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTY3alOgDkEbL45umxrXOgKHc21g4sCkc",
  authDomain: "react-fb-auth-a1bf9.firebaseapp.com",
  projectId: "react-fb-auth-a1bf9",
  storageBucket: "react-fb-auth-a1bf9.appspot.com",
  messagingSenderId: "50439311471",
  appId: "1:50439311471:web:fec7fbb20aca0fb5c3bd9a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)