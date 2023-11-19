// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQOglViUU7qSzptmf-NSiIih301vhW44w",
  authDomain: "wo-dmin.firebaseapp.com",
  projectId: "wo-dmin",
  storageBucket: "wo-dmin.appspot.com",
  messagingSenderId: "167104273143",
  appId: "1:167104273143:web:9d9b655c40b382cd6591f2",
  measurementId: "G-KGJL41ZNCC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
