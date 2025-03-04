// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyCqTFq7VDkOFrXu-vIJApwXjdFSpIgPpDE",

  authDomain: "backend-coder-react-entregable.firebaseapp.com",

  projectId: "backend-coder-react-entregable",

  storageBucket: "backend-coder-react-entregable.firebasestorage.app",

  messagingSenderId: "127084713746",

  appId: "1:127084713746:web:f86b0af9b8e014b190c5cb"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);