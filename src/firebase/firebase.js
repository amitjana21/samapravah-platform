import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArkDVzDhJJyC-_hAtp_mPPx2u90DyOyiw",
  authDomain: "sama-pravah.firebaseapp.com",
  projectId: "sama-pravah",
  storageBucket: "sama-pravah.firebasestorage.app",
  messagingSenderId: "144420888681",
  appId: "1:144420888681:web:335bcc9be460b1cef882f8",
};

const app = initializeApp(firebaseConfig);
console.log(app.options);

export const db = getFirestore(app);