// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeXqRbJH1r2QFV4i1i7LfnPA5cLV_oehM",
  authDomain: "coffee-store-app-5e5a1.firebaseapp.com",
  projectId: "coffee-store-app-5e5a1",
  storageBucket: "coffee-store-app-5e5a1.firebasestorage.app",
  messagingSenderId: "405148140881",
  appId: "1:405148140881:web:2d4de524e4e1582ae9bf70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);