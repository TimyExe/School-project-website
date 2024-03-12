// firebase-config.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAgGTYlYXGYSMPMCkvnV-v4lqxXuSuAyM4",
  authDomain: "uwuproj-b30f1.firebaseapp.com",
  projectId: "uwuproj-b30f1",
  storageBucket: "uwuproj-b30f1.appspot.com",
  messagingSenderId: "158832484537",
  appId: "1:158832484537:web:d3c854ca5665ca835f3b68",
  measurementId: "G-QNCPWHR7K2",
  databaseURL: "https://uwuproj-b30f1-default-rtdb.europe-west1.firebasedatabase.app/" // Add this line
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const storage = getStorage(app); // Initialize Firebase Storage

export { auth, db,storage  };
