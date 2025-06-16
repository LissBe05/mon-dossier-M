// lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAwT9uZel0xZyjntzkSDOofnu4cVTakvdE",
    authDomain: "flavor-ecac0.firebaseapp.com",
    projectId: "flavor-ecac0",
    storageBucket: "flavor-ecac0.firebasestorage.app",
    messagingSenderId: "670781445965",
    appId: "1:670781445965:web:08c01478ac50494f228904",
    measurementId: "G-ZLVHHRHRH1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
