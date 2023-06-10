// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref as refDb } from "firebase/database";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Configuracion de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB-5Z6X6Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3",
  authDomain: "recordatorio-react.firebaseapp.com",
  databaseURL: "https://recordatorio-react-default-rtdb.firebaseio.com",
  projectId: "recordatorio-react",
  storageBucket: "recordatorio-react.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:123456789",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const storage = getStorage(app);

export { db, storage };
