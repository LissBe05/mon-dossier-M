// app/lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDq0kffhIG0Hr3HbDLNyc2AwbnGy3xpIvU",
  authDomain: "bliss-d5d88.firebaseapp.com",
  projectId: "bliss-d5d88",
  storageBucket: "bliss-d5d88.firebasestorage.app",
  messagingSenderId: "889133161334",
  appId: "1:889133161334:web:5e01c50ae75ccdf34bf857",
  measurementId: "G-D7PX38DWSN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
    