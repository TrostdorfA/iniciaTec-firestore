// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"

import { todoListTransform } from "./todoListTransform"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrvWRj7nc-hkDBAZAzUl9HO3R2z-DAK6M",
  authDomain: "todolist-iniciatec-tros.firebaseapp.com",
  projectId: "todolist-iniciatec-tros",
  storageBucket: "todolist-iniciatec-tros.appspot.com",
  messagingSenderId: "1036127905802",
  appId: "1:1036127905802:web:e9efe323367dcf445117f3",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

export const saveTask = (title, description, quantity) => {
  addDoc(collection(db, "tasks"), {
    title,
    description,
    quantity,
  })
}
