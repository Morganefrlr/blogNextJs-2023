// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-67b74.firebaseapp.com",
  projectId: "blog-67b74",
  storageBucket: "blog-67b74.appspot.com",
  messagingSenderId: "68246718439",
  appId: "1:68246718439:web:358207ae6bd2c8073c9f42"
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);