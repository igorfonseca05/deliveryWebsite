
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBGlj5pR5-TI3ctldE9HczbtcSEIGstxpY",
  authDomain: "delivery-971d7.firebaseapp.com",
  projectId: "delivery-971d7",
  storageBucket: "delivery-971d7.firebasestorage.app",
  messagingSenderId: "265068280243",
  appId: "1:265068280243:web:d09e2b9ef53362e7f973c6"
};



const app = initializeApp(firebaseConfig);
 
// const db = getDatabase(app)
const db = getFirestore(app)

export {db}
