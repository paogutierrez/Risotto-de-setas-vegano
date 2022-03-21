// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBVswSn4dHh-gDVu_k8YYoam9tEcKv9wo4",
  authDomain: "platos-5ccb9.firebaseapp.com",
  projectId: "platos-5ccb9",
  storageBucket: "platos-5ccb9.appspot.com",
  messagingSenderId: "274393601422",
  appId: "1:274393601422:web:14307153e9340a285340df"
};


const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider ();

export { 
    app,
    google
}