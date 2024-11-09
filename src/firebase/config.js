
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from 'fireba/database'


const firebaseConfig = {
  apiKey: "AIzaSyD3slU0GVKjUalK7kGi0Q8ew7lSpQA-wvc",
  authDomain: "autent-faac9.firebaseapp.com",
  databaseURL: "https://autent-faac9-default-rtdb.firebaseio.com",
  projectId: "autent-faac9",
  storageBucket: "autent-faac9.firebasestorage.app",
  messagingSenderId: "221927790207",
  appId: "1:221927790207:web:f0e1632d2d642f6f3c514a"
};



const app = initializeApp(firebaseConfig);
 
const db = getDatabase(app)

export default {db}
